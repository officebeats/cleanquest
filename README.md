# CleanQuest

CleanQuest turns cleaning quality into a game anyone can verify — powered by Muse at scale. A cleaner photographs a room before and after cleaning, a game-show host voice hypes them in English, Spanish, or Polish (it celebrates — it never instructs or coaches), and the result gets a verified quality score posted to a leaderboard.

CleanQuest scores visible cleanliness and technique only — it never claims to verify sanitation, and a benchmark time is never a certification.

## Project description

**THE PROBLEM**
Commercial cleaning employs 2.4 million individual cleaners in the U.S. CleanQuest uses AI to gamify validating that work: clean, time, technique. Crews see where better products and better training make them more efficient and productive.
- Most crews get the bare minimum: minimal feedback, recognition, or proof of work.
- Companies lose accounts over "they didn't clean" disputes they cannot settle.

**HOW IT WORKS — AI AT EVERY STEP**
1. Check in: pick a language (English, Spanish, Polish), tap dropdowns — site, sector, area, spot. Zero typing.
   - Consent reads aloud: faces never identified; scores never used for discipline.
   - The before photo is captured in-app. No gallery uploads.
   - On-device MediaPipe (EfficientDet-Lite) rejects wrong-room and person-in-photo shots on the spot.
2. Run: a locked 90-second timer — "Quality first. Time second."
   - A neural host hypes the cleaner every 6–8 seconds, in their language. Encouragement only, never coaching.
   - 715 pre-rendered neural clips (Kokoro-82M + native ES/PL voices) ship in-app; host works offline.
   - One tap on COMPLETE CHALLENGE captures the after photo.
3. Get scored by Muse Spark Open (Meta open weights), run on hackathon partner credits:
   - Baseten ($100 credits + 2M TPM) serves the model; Fireworks AI ($100 credits) fails over, via a serverless proxy. Zero user keys.
   - Meta Model API credits ($150) funded Muse Spark 1.3 + Muse Wonder usage during the build.
   - The model grades every surface in the photo pair: clean, partly clean, missed.
   - It counts objects cleared vs. objects remaining; the app weights the verdict:
      - Clean 50% · Technique 25% · Time 25% (the timer supplies Time).
   - SAM 3.1 segmentation (own key) or Muse box_2d outlines each surface on their photos.
   - The system scores. Nobody can edit a score.
   - Settings proves it live: run log + telemetry test, verified on both providers (98% - 1,405 tokens; 96% - 1,695 tokens).
   - Optional own key unlocks Muse Spark 1.3 scoring and Muse Voice Transcribe.
   - Can't judge fairly? NOT SCORED + one plain reason (too dark, glare, camera moved) + a retake button.
4. Train and compete:
   - Daily Deck: tap-through training cards, AGREE / DISAGREE, day streaks.
   - Dual leaderboards: Shift Challenge + Daily Deck (Quality / Time / Style).
   - Personal bests, streaks, a 13-week consistency meter, a breakroom spectator board.
   - A built-in Judge Demo replays a sample run: 93%, S-Rank, in seconds.

**HOW IT MAKES MONEY**
- Free for cleaners, forever. Sponsors fund the game.
- The market: ~$100B U.S. commercial cleaning revenue, 63,000+ firms.
- Brands pay $15K-$55K per package to reach crews via shows and associations.
- Associations and brands sponsor by category: one per category.
- Companies pay to use an earned credential commercially, never to earn it.
- Money never touches scoring: no say over scores, training answers, or rankings.

## Who it serves & core value propositions

 1. **The cleaner (Visibility & Fair Recognition)** — Night-shift commercial cleaners prove quality in under 3 minutes with two photos, zero typing, 44px glove-friendly controls, and full trilingual support (**English, Mexican Spanish, and Polish**). Every run builds an exportable **verified inspection record** (one-tap JSON backup + CSV spreadsheet) that travels with them job to job, while the **Daily Swipe Deck** teaches real technique one card at a time. (Passport/crew/supervisor panes are code-kept and hidden for the hackathon — not demoed, not judged.)
2. **Building Service Contractors & Facility Operators (Proof Without Re-Checks)** — Eliminates "they didn't clean" disputes and site-to-site re-check drives. Geofenced inspection logs and per-surface AI scorecards accumulate automatically across **10 building sectors, 13 facility areas, and 28 cleaning spots**. (Printable QR station stickers are code-kept post-hackathon, UI hidden for the hackathon.)
 3. **Associations & Sponsors (Training at the Moment of Work)** — Industry benchmark times (chemical dwell discipline taught in training tips; the timed +15s credit button is code-kept post-hackathon) and brand-neutral product rules are taught inside the game and daily deck instead of a paper binder nobody opens.

## How the closed-loop game works

 1. **Station Check-In & Before Photo:** Select a registered site and station from dropdowns, frame the surface, snap the **Before** photo, and tap **Start**. (QR sticker scanning is code-kept post-hackathon; no QR button is shown for the hackathon.)
 2. **Locked 1:30 Run + Live Host Inspiration:** Clean against a locked countdown while a neural game-show host voice hypes you every 6–8 seconds over your looped time-trial challenge track. Tap **Complete Challenge** to auto-capture the **After** photo in one tap.
3. **Two-Rung AI Verification (On-Device + Zero-Setup Cloud):**
   - **Rung 1 (On-Device, Zero Signal Required):** MediaPipe **EfficientDet-Lite0** verifies the station environment (`verifyStationEnvironment` with person-vs-room disambiguation) and counts cleared objects; **96×72 structural edge + 3×3 luminance zone analysis** grades visible change and top-to-bottom technique. Unscorable runs are never ranked: the hero shows **NOT SCORED** + a plain 2–3-word reason (`WRONG AREA`, `PERSON IN PHOTO`, `TOO DARK`, `TOO MUCH GLARE`, `CAMERA MOVED`, `TOO FAR AWAY`, `NO CHANGE`), a one-sentence layman explanation, and a **TAKE NEW PHOTOS** / **CLEAN & TAKE NEW PHOTO** CTA — no `REDO`/`RESCAN` jargon, no score bars, no dispute panel.
   - **Rung 2 (Cloud Verification — Works Out-of-the-Box):** A token-efficient serverless proxy routes to **Meta's `Muse Spark Open`** on **Baseten (`meta-models/muse-spark-open`)** with automatic failover to **Fireworks AI (`accounts/fireworks/models/muse-spark-open`)** — grading each surface (`counter`, `glass`, `floor`, `fixture`) with confidence gating (`0.6`), drawing **SAM 3.1 / `box_2d`** surface highlight boxes, and logging exact token telemetry to an exportable **Provider Run Log**. Users can also enter direct keys in Settings for **Meta Model API (`muse-spark-1.3`, `sam-3.1`, `muse-voice-transcribe-1.0`)**.
 4. **5-Tier Audio Verdict, Automated 2-Week Deck Seasons & Dual Leaderboard:** Hear a 5-tier musical stinger + neural spoken score summary (neural clips only — never robotic synth), review the 50/25/25 weighted bars (Cleanliness 50% · Technique 25% · Time 25%) plus a plain-language untouched-area directive (no findings box), and compete on both the **Shift Challenge Leaderboard** and the **Bi-Weekly Daily Deck Leaderboard**. A near-identical before/after is never scored: it shows **NOT SCORED · NO CHANGE** with a **CLEAN & TAKE NEW PHOTO** CTA. (Victory-pose bonus capture is temporarily hidden: the pose panel auto-hides and no bonus applies.)
## Automated 2-Week Season Packs & Cached AI Shift Notes

- **Zero-Touch Bi-Weekly Season Engine (Screens 9–10):** Every 14 days, opening the **Daily Swipe Deck** automatically rotates to a new 2-week competition season. A single batched `Muse Spark Open` call generates a **Season Theme + 3 trilingual (`EN / ES / PL`) station training cards** and caches them across both the server and browser `localStorage` so repeat plays across the 2-week season cost **0 tokens**.
- **Cached AI Shift Note (code-kept, UI hidden for the hackathon):** Supervisor panes (site registry, printable Version-2 QR stickers, squad tools, `✨ AI SHIFT BRIEFING` cached shift notes, 5-day training packs) remain in code post-hackathon but are hidden from the hackathon UI — not demoed, not judged.

## Run it

- **Live Web App (Mobile & Desktop):** https://officebeats.github.io/cleanquest/
- **Judges' Presentation Report (HTML):** https://officebeats.github.io/cleanquest/docs/judges/report.html
- **Judges' Presentation Report (PDF):** https://officebeats.github.io/cleanquest/docs/judges/report.pdf
- **Submission Playbook & Video Script:** https://officebeats.github.io/cleanquest/docs/judges/submission.html
- **Live Breakroom Spectator Board:** https://officebeats.github.io/cleanquest/?spectator=1

No build step required — open `index.html` in any modern browser.

## Tech Summary

- **Architecture:** Vanilla JS app shell across the hackathon demo loop (consent-gated check-in, locked timer, scorecard, 30-card deck, top-10 leaderboard, inspection-log export, spectator board) plus code-kept post-hackathon supervisor panes (UI hidden for the hackathon) and a live `?spectator=1` breakroom board.
 - **On-Device Vision & Audio:** MediaPipe EfficientDet-Lite0 + Pose Landmarker Lite + 9-zone luminance/edge analyzer; 715 trilingual neural voice MP3s (235 EN Kokoro-82M `af_heart`, 247 ES `es_MX-claude-high`, 233 PL `pl_PL-gosia-medium`, all 24 kHz mono) + user-supplied per-screen music (time-trial song on the timer, daily-deck song on the deck; other screens silent). Every EN clip shares one Kokoro-82M `af_heart` voice + broadcast pitch/EQ/loudness chain, cache-busted via `FEATURE_MUSIC.version`.
- **Cloud AI & Open Weights:** Meta Model API (`muse-spark-1.3`, `sam-3.1`, `muse-voice-transcribe-1.0`) + Serverless `Muse Spark Open` primary/failover engine on **Baseten** (`meta-models/muse-spark-open`) and **Fireworks AI** (`accounts/fireworks/models/muse-spark-open`) with live token telemetry and exportable JSON audit logs.
- **Automated Verification:** 6/6 hermetic self-test + 11/11 end-to-end persona suite + 100% mobile/desktop above-the-fold CTA compliance.

## Disclosure

CleanQuest began as a crude, non-cloud, local-only proof of concept with local voice and local image recognition. Everything in this repository was built during the Meta Global AI Developer Hackathon, October 26 – November 4, 2026.
