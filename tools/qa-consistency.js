// qa-consistency.js — in-page DOM invariants for CleanQuest QA.
// Run via tab.evaluate(src) after each layout/copy change. Returns
// { screen, failures[] }. Empty failures = pass. ES5-safe (no ?.).
(function () {
  var failures = [];
  function has(s) { return (document.body.innerText || "").indexOf(s) !== -1; }
  function el(id) { return document.getElementById(id); }
  function txt(id) { var e = el(id); return e ? (e.textContent || "") : ""; }
  function shown(id) {
    var e = el(id);
    if (!e) return false;
    if ((" " + (e.className || "") + " ").indexOf(" hidden ") !== -1) return false;
    var r = null;
    try { r = e.getBoundingClientRect(); } catch (err) { return false; }
    return !!r && r.width > 0 && r.height > 0;
  }
  var screenEl = document.querySelector(".screen.active");
  var screen = screenEl && screenEl.id ? screenEl.id : "unknown";
  var isResults = screen === "resultsScreen" || has("TOTAL SCORE");
  var isDeck = screen === "deckScreen" || (has("DAILY DECK") && has("Card 1 of"));

  // 1. No dead findings box anywhere.
  if (el("findingText")) failures.push("findings-box: #findingText still rendered");

  // 2. Sponsor logo integrity (scoped to the visible screen).
  if (screen === "leaderboardScreen") {
    var lb = el("lbSponsorCopy");
    if (lb && lb.innerHTML.indexOf("sponsor-logo-svg") === -1) failures.push("sponsor: leaderboard copy is not the logo mark");
  }
  if (isResults || screen === "deckScreen" || screen === "homeScreen") {
    if (/YOUR LOGO HERE/.test(document.body.innerText || "") && !document.querySelector(".sponsor-logo-svg")) {
      failures.push("sponsor: raw placeholder text outside logo mark");
    }
  }

  // 3. Unscorable runs: no rank, no praise, state the reason.
  var evState = txt("scoreEvidenceState");
  var badge = txt("verdictSummaryBadge");
  var unscorableWords = ["RESCAN", "REDO", "REPITE", "POWTÓRZ", "HOLD STEADY", "SOSTÉN", "TRZYMAJ"];
  var isUnscorable = false;
  for (var i = 0; i < unscorableWords.length; i++) {
    if ((badge + " " + evState).indexOf(unscorableWords[i]) !== -1) isUnscorable = true;
  }
  if (/RANK/i.test(badge) && isUnscorable) failures.push("rank-on-rescan: badge shows \"" + badge.slice(0, 40) + "\"");
  if (isUnscorable && /%/.test(badge) && !/RESCAN|REDO|REPITE|POWTÓRZ/i.test(badge)) {
    failures.push("score-on-rescan: badge shows \"" + badge.slice(0, 40) + "\"");
  }

  // 4. Praise must never contradict a directive or no-change finding.
  var directiveEl = el("plainFinding");
  var directive = directiveEl ? (directiveEl.textContent || "").replace(/^\s+|\s+$/g, "") : "";
  var transcriptEl = el("verdictTranscriptLine");
  var transcript = transcriptEl ? (transcriptEl.textContent || "") : "";
  var praise = ["Awesome job", "Stunning", "flawless", "perfection", "SUPERSTAR", "CLEAN WINNER", "PHOTO FINISH", "warmup", "WARMUP"];
  var hasPraise = false;
  for (var j = 0; j < praise.length; j++) { if (transcript.indexOf(praise[j]) !== -1) hasPraise = true; }
  if (directive && hasPraise) failures.push("praise-beside-directive: \"" + transcript.slice(0, 80) + "\"");
  if (directive && shown("verifiedScorecard")) failures.push("contested-grades: verified card visible beside directive");
  if (directive && shown("surfaceGradeMap")) {
    var chips = 0;
    try { chips = document.querySelectorAll("#surfaceGradeMap .surface-grade-chip").length; } catch (e) {}
    if (chips > 0) failures.push("contested-grades: " + chips + " surface chip(s) beside directive");
  }
  if (directive) {
    var zoneWords = ["top", "middle", "bottom", "wipe", "clean", "retake", "redo", "limpia", "frota", "repite", "wyczy", "powt", "przetrzyj", "zona", "stref", "góra", "dół", "środek", "lewa", "prawa", "toda", "wszystkie", "whole", "sin ", "brak", "retake", "raises", "frame", "encuadre", "kadr"];
    var hasZone = false;
    var lower = directive.toLowerCase();
    for (var k = 0; k < zoneWords.length; k++) { if (lower.indexOf(zoneWords[k]) !== -1) hasZone = true; }
    if (!hasZone) failures.push("vague-directive: \"" + directive.slice(0, 80) + "\"");
  }

  // 5. CTA agrees with the verdict reason.
  var ctaEl = el("plainCta");
  var cta = ctaEl ? (ctaEl.textContent || "").replace(/^\s+|\s+$/g, "") : "";
  if (directive && !cta) failures.push("missing-cta: directive shown without a one-word CTA");
  if (/NO CHANGE|SIN CAMBIOS|BRAK ZMIAN/i.test(directive + " " + evState) && cta && !/CLEAN|LIMPIA|CZYŚĆ/i.test(cta)) {
    failures.push("cta-mismatch: no-change expects CLEAN, got \"" + cta + "\"");
  }
  if (isUnscorable && /RES?CAN|REDO|REPITE|POWTÓRZ|HOLD STEADY|SOSTÉN|TRZYMAJ/i.test(evState + " " + directive) && cta && !/REDO|REPITE|POWTÓRZ|RETAKE/i.test(cta)) {
    failures.push("cta-mismatch: rescan expects a REDO CTA, got \"" + cta + "\"");
  }
  // 4b. Badge must never praise beside a directive (any language).
  var badgeEl = document.getElementById("verdictSummaryBadge");
  var badgeTxt = badgeEl ? (badgeEl.textContent || "") : "";
  var tierWords = ["SUPERSTAR", "CLEAN WINNER", "PHOTO FINISH", "SO CLOSE", "SUPERESTRELLA", "GANADOR", "FINAL DE FOTO", "CASI", "SUPERGWIAZDA", "ZWYCI", "FINISZ", "UDA"];
  if (directive) { for (var ti = 0; ti < tierWords.length; ti++) { if (badgeTxt.indexOf(tierWords[ti]) !== -1) { failures.push("praise-badge-beside-directive: \"" + badgeTxt.slice(0, 40) + "\""); break; } } }
  // 5b. Hero must never show a bare % on an unscorable run.
  var heroEl = document.getElementById("cleanlinessScore");
  var hero = heroEl ? (heroEl.textContent || "") : "";
  if (isUnscorable && /%/.test(hero)) failures.push("hero-percent-on-rescan: \"" + hero.slice(0, 20) + "\"");
  // 6. Deck language: AGREE/DISAGREE family only.
  if (isDeck) {
    if (/RIGHT CALL|\(MISS\)|NAILED IT|TRICK CALL/i.test(document.body.innerText || "")) {
      failures.push("deck-copy: stale RIGHT/WRONG wording present");
    }
    var prog = "";
    var bt = document.body.innerText || "";
    var m = bt.match(/Card (\d+) of (\d+)/) || bt.match(/Tarjeta (\d+) de (\d+)/) || bt.match(/Karta (\d+) z (\d+)/) || bt.match(/Kart[ae] (\d+) z (\d+)/);
    if (m && (Number(m[1]) > Number(m[2]) || Number(m[2]) !== 10)) failures.push("deck-progress: \"" + m[0] + "\"");
  }

  // 7. No uninterpolated i18n tokens anywhere.
  var tokens = (document.body.innerText || "").match(/\{[a-zA-Z_]+\}/g);
  if (tokens) failures.push("untranslated-token: " + tokens.slice(0, 3).join(","));

  return { screen: screen, failures: failures };
})();
