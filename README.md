# CleanQuest

CleanQuest turns cleaning quality into a game anyone can verify — powered by Muse at scale. A cleaner photographs a room before and after cleaning, a game-show host voice hypes them in English, Spanish, or Polish (it celebrates — it never instructs or coaches), and the result gets a verified quality score posted to a leaderboard.

CleanQuest scores visible cleanliness and technique only — it never claims to verify sanitation, and a benchmark time is never a certification.

## Who it serves

1. **The cleaner** — rewards, training, and a portable verified reputation. Every game is proof of good work, and the daily swipe deck teaches real technique one card at a time.
2. **Associations and sponsors** — their cleaning times and products get taught at the moment of work, inside the game and the training deck, instead of in a binder nobody opens.
3. **The business** — proof of quality without supervisor re-checks. Scores, photos, and inspection records accumulate automatically.

## How the game works

1. Frame the station and snap a **before** photo, then tap Start and clean against the clock.
2. Snap the **after** photo. On-device vision scores what it can clearly see: objects cleared, visible change, scene match.
3. With a key entered in Settings, the cloud verifies the result: Muse Spark grades each surface (counter, glass, floor, fixture), marks low-confidence surfaces unverified, and answers with a hype line. SAM draws the surface overlays.
4. Strike a victory pose for a style score, attach an optional voice note, and post the result to the leaderboard.

No key, no problem: the full game runs on-device with an offline note.

## Inspection without paperwork

Geofencing means the app stamps every saved result with an automatic time-and-location mark: who cleaned, when, where, the scores, the provider, and the note. Each site gets its own per-location list, exportable as JSON or CSV — so the graded inspection record exists just from doing the work. Denied location permission still saves the record, marked accordingly.

## Run it

Play it live at https://officebeats.github.io/cleanquest/ or open `index.html` in a modern mobile browser. No build step, no backend. Vanilla JS, no new dependencies.

Optional cloud features need keys, entered in the app's Settings screen and stored only in that browser, never in the repo:

- Meta Model API key — verified scorecard, surface overlays, voice transcription
- Baseten key — Spark Open provider toggle, with every run written to an exportable provider log

## Tech

- Vanilla JS app shell: 15 MVP screens (10 cleaner incl. trilingual swipe deck + supervisor panes 11–15) plus a spectator board
- On-device vision: object detection plus pose pipeline for the style score
- Meta Model API: Muse Spark structured scorecards, SAM 3.1 surface segmentation, voice transcription of spoken notes
- Baseten: Spark Open as a second inference provider behind a toggle, with a run log as verification evidence
- Daily swipe deck: 30 static trilingual training cards (surface / product / technique), streak tracked locally
