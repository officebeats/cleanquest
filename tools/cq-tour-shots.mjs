#!/usr/bin/env node
// cq-tour-shots: recapture every referenced judges-tour screenshot + new
// NOT SCORED pair, directly into docs/judges/shots/.
// Usage: node tools/cq-tour-shots.mjs [--mobile-only | --desktop-only]
import { spawn } from "node:child_process";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SHOTS = path.join(ROOT, "docs/judges/shots");
const PORT = 8479;
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".mp3": "audio/mpeg", ".png": "image/png", ".svg": "image/svg+xml" };

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
  `--user-data-dir=/tmp/cq-chrome-tour-${Date.now()}`,
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
ws.addEventListener("message", (e) => {
  let m;
  try { m = JSON.parse(String(e.data)); } catch { return; }
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
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
async function shot(name) {
  await new Promise((r) => setTimeout(r, 1200));
  const r = await send("Page.captureScreenshot", { format: "png" });
  const data = r?.result?.data;
  if (!data) throw new Error("empty screenshot " + name);
  fs.writeFileSync(path.join(SHOTS, name + ".png"), Buffer.from(data, "base64"));
  console.log("saved", name);
}
async function shotNow(name) {
  const r = await send("Page.captureScreenshot", { format: "png" });
  const data = r?.result?.data;
  if (!data) throw new Error("empty screenshot " + name);
  fs.writeFileSync(path.join(SHOTS, name + ".png"), Buffer.from(data, "base64"));
  console.log("saved", name);
}
 const desktopMap = { "01": "15-desktop-welcome", "02": "21-desktop-consent", "04": "22-desktop-instructions", "05": "17-desktop-camera", "06": "18-desktop-timer", "07": "19-desktop-results", "28": "29-desktop-noscored", "12": "23-desktop-deck", "08": "20-desktop-leaderboard", "09": "24-desktop-records", "11": "25-desktop-settings", "26": "27-desktop-ai-loading" };
 function desktopName(n, mobile) {
   if (mobile) return n;
   const d = String(n).split("-")[0];
   return desktopMap[d] || ("desktop-" + n);
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
 const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


async function runPass(mode) {
  const mobile = mode === "mobile";
  if (mobile) {
    await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
    await send("Emulation.setTouchEmulationEnabled", { enabled: true });
  } else {
    await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
    await send("Emulation.setTouchEmulationEnabled", { enabled: false });
  }
  await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/index.html?fresh=${Date.now()}` });
  await waitFor(async () => {
    try { return await evaluate(`!!(window.cleaningChallenge && document.readyState === "complete")`); }
    catch { return false; }
  }, 60000, "app ready");
  await sleep(1500);
  const P = (n) => desktopName(n, mobile);

  // Welcome
  await shot(P("01-welcome"));
  if (mobile) {
    // ES welcome variant
    await evaluate(`(() => { const b = [...document.querySelectorAll("button")].find((x) => /ESPAÑOL/i.test(x.textContent || "")); if (b) b.click(); return !!b; })()`);
    await shot("03-welcome-es");
    await evaluate(`(() => { const b = [...document.querySelectorAll("button")].find((x) => /ENGLISH/i.test(x.textContent || "")); if (b) b.click(); return !!b; })()`);
    await sleep(800);
  }
  // Consent
  await clickText("ACCEPT THE CHALLENGE");
  await sleep(1200);
  await shot(P("02-consent"));
  await evaluate(`(() => { const cb = document.querySelector('#consentGate input[type=checkbox], input[type=checkbox]'); if (cb) cb.click(); return !!cb; })()`);
  await sleep(400);
  await clickText("CONFIRM|Accept");
  await sleep(1200);
  // Instructions (explicit nav: CONFIRM returns to welcome hub in this flow)
  await evaluate(`(() => { window.cleaningChallenge.navigateTo("instructions"); return window.cleaningChallenge.state.screen; })()`);
  await shot(P("04-instructions"));
  await evaluate(`(() => { window.cleaningChallenge.navigateTo("camera"); return window.cleaningChallenge.state.screen; })()`);
  await sleep(1200);
  // Camera (fake media stream provides video)
  await shot(P("05-camera"));
  // Dismiss camera explainer, warm the (fake) camera, start the run -> timer
  await clickText("ALLOW CAMERA");
  await sleep(2000);
  await evaluate(`(async () => { try { await window.cleaningChallenge.ensureCameraReady(); } catch (e) {} return "ready"; })()`, true);
  await sleep(1000);
  await evaluate(`(() => { const b = document.getElementById("startPauseButton"); if (b) { b.click(); return "clicked-start"; } return "no-start"; })()`);
  await sleep(2500);
  await evaluate(`(() => { const cc = window.cleaningChallenge; if (cc.state.screen !== "timer") { const b = document.getElementById("continueWithoutCamera"); if (b) b.click(); } return cc.state.screen; })()`);
  await sleep(2000);
  await shot(P("06-timer"));
  // Deck
  await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/index.html?fresh=${Date.now()}` });
  await sleep(2000);
  await clickText("DAILY DECK");
  await sleep(1500);
  await shot(P("12-deck"));
  // Judge demo -> loading + scored results
  await evaluate(`(() => { const b = document.querySelector('[aria-label="Go back"]'); if (b) b.click(); return !!b; })()`);
  await sleep(1000);
  await clickText("ACCEPT THE CHALLENGE");
  await sleep(1500);
  await clickText("JUDGE DEMO");
  await shotNow(P("26-ai-loading-sponsor"));
  await evaluate(`(async () => { for (let i = 0; i < 14; i++) { await new Promise((r) => setTimeout(r, 7000)); const t = document.body.innerText || ""; if (!/ANALYZING|Loading vision/i.test(t)) break; } return "done"; })()`, true);
  await shot(P("07-results"));
  // NOT SCORED wrong-area state (user's exact scenario)
  await evaluate(`(() => {
    const cc = window.cleaningChallenge;
    cc.state.checkin.areaKey = "breakroom";
    cc.state.checkin.assignedSpot = "Sink & counter";
    cc.state.demoMode = false; cc.state.judgeDemo = false;
    const b1 = { x: 10, y: 10, width: 20, height: 20 };
    const b2 = { x: 40, y: 40, width: 20, height: 20 };
    const ai = cc.calculateLocalScore(
      [{ label: "tv", score: 0.9, box: b1 }, { label: "couch", score: 0.9, box: b2 }],
      [{ label: "tv", score: 0.9, box: b1 }, { label: "couch", score: 0.9, box: b2 }],
      { sceneMatch: 0.92, changedPixelPercent: 18, avgLuminance: 120 },
      { improvedZones: 4, zones: [] });
    cc.state.latestScore = ai;
    cc.state.result = { elapsedMs: 8000, ai };
    cc.navigateTo("results");
    cc.renderResults();
    cc.announceGameVerdict();
    return ai.scorable === false ? "unscorable-ok" : "STILL-SCORABLE";
  })()`);
  await shot(P("28-noscored"));
  // Leaderboard / records / settings
  await clickText("VIEW LEADERBOARD|LEADERBOARD");
  await sleep(1200);
  await shot(P("08-leaderboard"));
  await clickText("RECORDS|INSPECTION");
  await sleep(1200);
  await shot(P("09-records"));
  await evaluate(`(() => { window.cleaningChallenge.navigateTo("settings"); return "nav-settings"; })()`);
  await sleep(1200);
  await shot(P("11-settings"));
  if (mobile) {
    await send("Page.navigate", { url: `http://127.0.0.1:${PORT}/index.html?spectator=1` });
    await sleep(2500);
    await shot("13-spectator");
  }
  console.log(mode + " pass done");
}

const only = process.argv[2];
if (!only || only === "--mobile-only") await runPass("mobile");
if (!only || only === "--desktop-only") await runPass("desktop");
console.log("tour shots complete");
server.close();
chrome.kill();
process.exit(0);
