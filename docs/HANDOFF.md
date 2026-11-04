# CleanQuest agent handoff

Read this first, then `README.md`, then `docs/AUDIO-PLAN.md` for audio work.

## What this is
Vanilla JS game (no build, no backend, no new deps without approval): a cleaner
photographs a room before/after cleaning, a game-show host voice hypes them in
EN/ES/PL, and a verified quality score posts to a leaderboard. Live at
https://officebeats.github.io/cleanquest/ or open `index.html` in a mobile browser.

## Product rules (never break)
- Host voice hypes/celebrates; it NEVER instructs or coaches technique.
- Scores visible cleanliness + technique only; NEVER claim sanitation. A benchmark
  time is NEVER a certification.
- No API keys/secrets in the repo, ever. Keys go in the app's Settings screen
  (stored in that browser only) — see Resources below.

## Screens (15 MVP: 10 cleaner + 5 admin) — feature map
| Screen | What it does |
|---|---|
| welcome | Entry; FTUE steps 1 Language (persisted) / 2 PIN / 3 Consent (gates first run, read-aloud) / 4 Home hub (streak, sponsor card, 13-week meter, inspection-log shortcut) |
| instructions | How a round works; consent-gated camera entry; demo-mode entry when camera denied |
| camera | Check-in bar (league/area/system-assigned SPOT + QR scan), frame guide, before-photo |
| timer | Spot bar + QR, 4-mode Before-shadow ghost, 3x3 live zone grid + idle nudge, dwell cue, host callouts at 75/60/45/30/20/10s, big Finish |
 | results | Score hero shows weighted TOTAL when scorable; **NOT SCORED** + layman reason + TAKE NEW PHOTOS / CLEAN & TAKE NEW PHOTO CTA when unscorable (7 reasons: WRONG AREA, PERSON IN PHOTO, TOO DARK, TOO MUCH GLARE, CAMERA MOVED, TOO FAR AWAY, NO CHANGE — never `REDO`/`RESCAN`); honest surface map, maximized AFTER + 96px BEFORE reference, full-screen lightbox, 1-tap read-only Dispute (hidden on unscored runs), voice note |
| leaderboard | Top-10 + own (weighted sort; practice runs excluded), personal record |
| records | Inspection-log screen only for the hackathon (geofenced log + CSV/JSON export). Supervisor panes 11–15 (pledge-gated tools, sites+QR stickers, bulk invite, training gaps + cached AI shift note, assign packs) are code-kept, UI hidden for the hackathon — not demoed, not judged |
| settings | API keys, provider toggle (Meta Model API / Partner Cloud `Muse Spark Open` with Baseten Primary → Fireworks Failover default + Dual Benchmark option), 1-tap `⚡ TEST & LOG TELEMETRY`, cumulative token counter, hype levels |
| deck | Daily swipe deck: 30 static trilingual cards (`deck.js`) + automated 14-day Bi-Weekly AI Season Pack rotation (3 station cards + localized Season Theme cached across server & `localStorage`), pointer-drag + stamps + keys, missed-card repeat, 5/day |
| spectator | `?spectator=1` distance board (weighted display, 15s refresh) |

Providers: on-device vision always runs. Cloud verification works out-of-the-box via the serverless proxy (`CONFIG.cloud.backendProxyUrl`) routing to Baseten (`meta-models/muse-spark-open`) as primary with automatic failover to Fireworks AI (`accounts/fireworks/models/muse-spark-open`), or with user-supplied keys in Settings (Meta Model API `muse-spark-1.3` + `sam-3.1` + `muse-voice-transcribe-1.0`). Every verified run and token count is logged to the exportable `PROVIDER RUN LOG`.
## Code anchors
 - `app.js` — everything. `HOST_LINES` = host script lines (`start`, `mid`,
   `finish`, `pass`, `retry`, `pass-big`, `pass-close`, `retry-far`, `hurry`,
   `hurry-final`, `scoring-wait`); every gameplay clip plays through
   `playHostClip()` at 1.0x; `clipUrlFor()` appends `?v=FEATURE_MUSIC.version`
   so re-rendered clips bust cache. Audio: 715 MP3s under
   `assets/audio/<lang>/` (235 EN Kokoro-82M `af_heart` incl. intro/deck/camera/agree/disagree + `num`/`glue`/`nudge`, 247 ES `es_MX-claude-high`, 233 PL `pl_PL-gosia-medium`; all 24 kHz mono, one EN pitch/EQ/loudness chain). Unscored-run policy: `scorable=false` → hero `NOT SCORED` + `unscorableReason()`, badge hidden, breakdown/dispute/result-grid hidden, CTA retakes photos.
 `announceGameVerdict()` routes through `selectVerdictBeat()` + `speakHost()` (hushed gate on directive/unscored runs: no rank badge, no praise voice/confetti) + `speakScoreNumber()` (weighted total). Loop-era anchors: `parseAreaQrPayload`/`openQrScannerModal`
  (CQ-QR-<LEAGUE>-<AREA>[-<SPOTSLUG>], decodable V2-L encoder
  `encodeQrVersion2L`), `ensureActiveCrew`+`recordCrewRun` in
  `saveCompletedRun` (first-save only; manual spot = `spotOverride` →
  `prizeEligible:false`, no public credit; crew-credit calls are code-kept, UI hidden for the hackathon), `computeWeightedRunScore`
  hero/boards/personal-best, hermetic `runPersonaSuite` (full storage+state
  snapshot/restore), `localizedDeckField`/`localizedRuleSummary`.
- `deck.js` — 30 static trilingual training cards (no `window.SWIPE_DECK`; lexical const).
- `docs/AUDIO-PLAN.md` — full audio spec: engine picks, scripts, naming
  `assets/audio/<lang>/<beat>-<nn>.mp3`, record priority, SFX plan.
- `OVERNIGHT-LOG.md` — build diary (history, not spec).

## Verify any change
- Syntax: `node --check app.js && node --check deck.js`.
 - Mobile QA runner: `node tools/cq-mobile-qa.mjs` (390×844 DPR3 overflow + `tools/qa-consistency.js` + self-test + personas + console traps).
 - Gates: 6/6 self-test + 11/11 personas (incl. `consent-first-timer` gated and code-kept `crew-member` / `supervisor-and-pin` flows). Suite is hermetic: full `localStorage` + state snapshot/restore.
- Banned-token grep over `app.js deck.js index.html styles.css` (brands,
  currency, certification/sanitized claims) must be zero.
- Phone-first: primary CTA of every screen visible without scroll at 360x740
  and 390x844 (long lists scroll internally; sticky bottom CTA bars).

## Resources
- `.gitignore` covers `node_modules/ .DS_Store *.log .env`. `tools/` (TTS voices,
  `.onnx`) and raw WAVs must stay out of the repo — commit only MP3s under
  `assets/audio/<lang>/`. Never vendor the TTS engine.
- Cloud keys (Meta Model API, Baseten) live ONLY in the operator's browser
  Settings screen or a local gitignored config — ask the operator; never commit.
- Cash budget: keep paid inference minimal; offline/demo paths must always work.

## Current task
Overnight Ralph loop per `docs/HACKATHON-LOOP-PROMPT.md` (Wonder reasons/
evaluates, Spark implements; one slice → gates → commit+push → next).
Shipped through LOOP 50; see `OVERNIGHT-LOG.md` tail for the ledger.
Parked/human-gated: Q6 Kokoro announcer-voice regen (needs operator
listen-back), live Orca focus-trap proof (app-tab eval runtime wedged —
CDP is authoritative), registered-site fuzzy prize matching (deliberately
not implemented; prize eligibility is spot-override based).
