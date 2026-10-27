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

## Screens (9) — feature map
| Screen | What it does |
|---|---|
| welcome | Entry; language pick (EN/ES/PL); daily-deck teaser |
| instructions | How a round works; demo-mode entry when camera denied |
| camera | Before-photo → Start → clean against clock → after-photo |
| timer | Countdown, pause, COMPLETE; hurry beats near the end |
| results | Score hero, evidence grid (SAM overlays), verdict hype line, voice-note record, pose style score, Continue |
| leaderboard | Ranked scores; play again / home / records |
| records | Per-location inspection log (geofence stamp: who/when/where/scores/provider/note); JSON+CSV export |
| settings | API keys, provider toggle (Meta Model API / Baseten Spark Open), voice/test buttons |
| deck | Daily swipe deck: 22 static cards (surface/product/technique) in `deck.js`; streak in localStorage, once per calendar day |

Providers: on-device vision always runs (offline note when no key). With keys:
Meta Model API = Muse Spark scorecards + SAM 3.1 overlays + transcription;
Baseten = Spark Open second provider behind toggle, every run in exportable log.

## Code anchors
- `app.js` — everything. `HOST_LINES` = host script lines; audio manifest
  `{"version":1,"clips":{"<lang>:<beat>-<nn>":"available"|"mock"}}` — unlisted IDs
  fall back to synth/TTS, so new clips need no code changes.
- `deck.js` — 22 static training cards (no `window.SWIPE_DECK`; lexical const).
- `docs/AUDIO-PLAN.md` — full audio spec: engine picks, scripts, naming
  `assets/audio/<lang>/<beat>-<nn>.mp3`, record priority, SFX plan.
- `OVERNIGHT-LOG.md` — build diary (history, not spec).

## Verify any change
- Self-test: open `index.html?selftest=1`, press run — must be 6/6.
- Persona suite: `window.cleaningChallenge.runPersonaSuite()` in console —
  maria (ES first-time, camera denied), verdict-text, dana (business owner,
  records+exports), judge, returning (streak persistence), fold (primary CTAs
  visible at 360x740 and 390x844).
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
Audio install + generation per `docs/AUDIO-PLAN.md` §1 + record-priority order
(verdict moments → numbers/time glue → streak/board/inspect → the rest),
EN first, then ES/PL. Done = a priority batch rendered as MP3s, manifest
updated, sample verified playing in-game, 6/6 + suite still green, committed
with evidence.
