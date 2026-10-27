# CleanQuest

CleanQuest is a cleaning-quality game: a cleaner photographs a room before and after cleaning, a game-show host voice hypes them in English, Spanish, or Polish (it celebrates — it never instructs or coaches), and the result gets a verified quality score posted to a leaderboard.

CleanQuest scores visible cleanliness and technique only — it never claims to verify sanitation, and a benchmark time is never a certification.

## Run it

Open `index.html` in a modern mobile browser. No build step, no backend. Vanilla JS, no new dependencies.

- `index.html` — app shell + screens
- `styles.css` — visual direction
- `app.js` — flow, timer, voice, scoring, leaderboard

## Hard rules

1. Manual Start button; manual completion fallback always available.
2. The host voice hypes and celebrates; it never instructs or coaches technique.
3. The game reveals missed spots only AFTER cleaning (competition fairness).
4. Scoring: quality → time → style. Quality gates top ranking.
5. "Competition benchmark" — never "certification" or "certified cleanliness."
6. No billing, no backend, no Quest dependency in the critical path.
7. No API keys or secrets in the repo, ever — keys go in a local env/config that is gitignored.
