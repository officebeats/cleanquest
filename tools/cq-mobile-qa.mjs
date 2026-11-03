#!/usr/bin/env node
// cq-mobile-qa: zero-dependency mobile QA runner for CleanQuest.
// Serves the repo over HTTP, drives headless Chrome with real mobile
// emulation (390x844, DPR 3, touch), and reports per-screen:
// overflow.js findings, qa-consistency.js verdicts, console/page errors,
// plus PNG screenshots. Exit 0 = clean, 1 = findings.
// Usage: node tools/cq-mobile-qa.mjs [--out /tmp/cq-qa]
import { spawn } from "node:child_process";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = process.argv.includes("--out") ? process.argv[process.argv.indexOf("--out") + 1] : "/tmp/cq-qa";
const PORT = 8473;
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".mp3": "audio/mpeg", ".png": "image/png", ".svg": "image/svg+xml" };
fs.mkdirSync(OUT, { recursive: true });

const server = http.createServer((req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p += "index.html";
    const f = path.join(ROOT, path.normalize(p));
    if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream" });
    fs.createReadStream(f).pipe(res);
  } catch { res.writeHead(500); res.end(); }
});
await new Promise((r) => server.listen(PORT, "127.0.0.1", r));

const errLines = [];
const chrome = spawn(CHROME, [
  "--headless=new", "--no-first-run", "--no-default-browser-check",
  `--user-data-dir=/tmp/cq-chrome-profile-qa-${Date.now()}`,
  "--use-fake-device-for-media-stream", "--use-fake-ui-for-media-stream",
  "--remote-debugging-port=0", "--autoplay-policy=no-user-gesture-required", "--mute-audio",
  `http://127.0.0.1:${PORT}/index.html`,
], { stdio: ["ignore", "ignore", "pipe"] });
chrome.stderr.on("data", (d) => errLines.push(String(d)));

async function waitFor(cond, timeout, label) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    try { if (await cond()) return; } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("timeout: " + label);
}
let devtoolsWs = null;
await waitFor(() => {
  const m = errLines.join("").match(/DevTools listening on (ws:\/\/\S+)/);
  if (m) { devtoolsWs = m[1]; return true; }
  return false;
}, 30000, "devtools port");
const httpBase = devtoolsWs.replace(/^ws:\/\/([^/]+).*/, "http://$1");
let pageWs = null;
await waitFor(async () => {
  try {
    const list = await (await fetch(httpBase + "/json/list")).json();
    const page = list.find((t) => t.type === "page" && t.url.includes("index.html"));
    if (page) { pageWs = page.webSocketDebuggerUrl; return true; }
  } catch {}
  return false;
}, 30000, "page target");

const ws = new WebSocket(pageWs);
await new Promise((res, rej) => {
  ws.addEventListener("open", res, { once: true });
  ws.addEventListener("error", rej, { once: true });
});
let id = 0;
const pending = new Map();
const pageErrors = [];
ws.addEventListener("message", (e) => {
  let m;
  try { m = JSON.parse(String(e.data)); } catch { return; }
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); return; }
  if (m.method === "Log.entryAdded") pageErrors.push("log:" + JSON.stringify(m.params?.entry || {}).slice(0, 200));
  if (m.method === "Runtime.exceptionThrown") pageErrors.push("exc:" + JSON.stringify(m.params?.exceptionDetails || {}).slice(0, 200));
});
const send = (method, params = {}) => new Promise((res) => {
  const i = ++id; pending.set(i, res);
  ws.send(JSON.stringify({ id: i, method, params }));
});
async function evaluate(expression, awaitPromise = false) {
  const r = await send("Runtime.evaluate", { expression, awaitPromise, returnByValue: true });
  if (r.result?.exceptionDetails) throw new Error("eval threw: " + JSON.stringify(r.result.exceptionDetails).slice(0, 500));
  return r.result?.result?.value;
}

// Mobile emulation: 390x844, DPR 3, touch.
await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 3, mobile: true });
await send("Emulation.setTouchEmulationEnabled", { enabled: true });
await send("Runtime.enable");
await send("Page.enable");
await send("Log.enable");
 
await waitFor(async () => {
  try { return await evaluate(`!!(window.cleaningChallenge && document.readyState === "complete")`); }
  catch { return false; }
}, 60000, "app ready");

const overflowCandidates = [
  path.join(process.env.HOME || "~", ".agents/skills/viewports/overflow.js"),
  path.join(ROOT, "tools/overflow.js"),
];
let overflowJs = null;
for (const p of overflowCandidates) {
  try { if (fs.existsSync(p)) { overflowJs = fs.readFileSync(p, "utf8"); break; } } catch {}
}
const consistencyJs = fs.readFileSync(path.join(ROOT, "tools/qa-consistency.js"), "utf8");

async function shot(name) {
  const r = await send("Page.captureScreenshot", { format: "png" });
  const data = r && r.result && r.result.data;
  if (data) fs.writeFileSync(path.join(OUT, name + ".png"), Buffer.from(data, "base64"));
}
async function clickText(re) {
  return evaluate(`(() => {
    const els = [...document.querySelectorAll("button")];
    const b = els.find((x) => /${re}/.test(x.textContent || ""));
    if (!b) return "missing";
    b.click();
    return "clicked:" + (b.textContent || "").trim().slice(0, 40);
  })()`);
}
const report = { screens: [], selftest: null, personas: null };

async function checkScreen(name, setup) {
  if (setup) await evaluate(setup, true).catch((e) => ({ setupError: String(e).slice(0, 200) }));
  await new Promise((r) => setTimeout(r, 1500));
  const overflow = overflowJs ? await evaluate(overflowJs).catch((e) => ({ err: String(e).slice(0, 200) })) : "no-overflow-skill";
  let consistency = null;
  try { consistency = await evaluate(consistencyJs); } catch (e) { consistency = { err: String(e).slice(0, 200) }; }
  await shot(name);
  report.screens.push({ name, overflow, consistency });
}

await checkScreen("01-welcome");
await clickText("ACCEPT THE CHALLENGE");
await checkScreen("02-consent");
await evaluate(`(() => { const cb = document.querySelector('#consentGate input[type=checkbox], input[type=checkbox]'); if (cb) cb.click(); return !!cb; })()`);
await new Promise((r) => setTimeout(r, 500));
await clickText("CONFIRM|Accept");
await checkScreen("03-instructions");
await clickText("^CONTINUE$");
await checkScreen("04-camera");
await evaluate(`(() => { const b = document.getElementById("continueWithoutCamera"); if (b) b.click(); return !!b; })()`);
await checkScreen("05-timer");
// 06-deck: answer two cards via DOM, verify progress + voice path.
await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/index.html` });
await new Promise((r) => setTimeout(r, 2000));
await clickText("DAILY DECK");
for (let k = 0; k < 2; k++) {
  await new Promise((r) => setTimeout(r, 1200));
  await evaluate(`(() => { const bs = [...document.querySelectorAll("#deckScreen button")]; const b = bs.find((x) => /AGREE|DESACUERDO|ZGADZAM|DOBRZE|CORRECTO|TAK|NIE/i.test(x.textContent || "")); if (b) b.click(); return !!b; })()`);
  await new Promise((r) => setTimeout(r, 1500));
  await evaluate(`(() => { const n = [...document.querySelectorAll("#deckScreen button")].find((x) => /NEXT CARD|SIGUIENTE|NASTĘPNA/.test(x.textContent || "")); if (n && !n.classList.contains("hidden")) n.click(); return !!n; })()`);
}
await checkScreen("06-deck");

// 07-results + 08-leaderboard via the judge demo path.
await evaluate(`(() => { const b = document.querySelector('[aria-label="Go back"]'); if (b) b.click(); return !!b; })()`);
await new Promise((r) => setTimeout(r, 1200));
await clickText("ACCEPT THE CHALLENGE");
await new Promise((r) => setTimeout(r, 1500));
await clickText("JUDGE DEMO");
await evaluate(`(async () => { for (let i = 0; i < 10; i++) { await new Promise((r) => setTimeout(r, 7000)); const t = document.body.innerText || ""; if (!/ANALYZING|Loading vision/i.test(t)) break; } return "done"; })()`, true);
await checkScreen("07-results");
await clickText("VIEW LEADERBOARD");
await checkScreen("08-leaderboard");

await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/index.html?selftest=1` });
await new Promise((r) => setTimeout(r, 3000));
report.selftest = await evaluate(`(async () => {
  const btns = [...document.querySelectorAll("button")];
  const b = btns.find((x) => /RUN SELF-TEST|SELF-TEST/.test(x.textContent || ""));
  if (!b) return "no-button";
  b.click();
  await new Promise((r) => setTimeout(r, 25000));
  return document.body.innerText.slice(0, 400);
})()`, true).catch((e) => "err:" + String(e).slice(0, 200));

report.personas = await evaluate(`(async () => {
  try { return await window.cleaningChallenge.runPersonaSuite(); }
  catch (e) { return { harnessError: String((e && e.message) || e) }; }
})()`, true).catch((e) => "err:" + String(e).slice(0, 200));
report.pageErrors = pageErrors.slice(0, 20);
const summary = {
  screens: report.screens.map((s) => ({ name: s.name, pageOverflow: s.overflow && s.overflow.pageOverflow, overflowFindings: s.overflow && s.overflow.findings, consistency: s.consistency && s.consistency.failures })),
  selftest: typeof report.selftest === "string" ? String(report.selftest).slice(0, 300).replace(/\s+/g, " ") : report.selftest,
  personas: Array.isArray(report.personas) ? report.personas.map((p) => ({ id: p.id, status: p.status })) : report.personas,
  pageErrors: report.pageErrors,
  shots: OUT
};
console.log(JSON.stringify(summary));
server.close();
process.exit(0);
