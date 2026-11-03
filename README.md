# CleanQuest

CleanQuest turns cleaning quality into a game anyone can verify — powered by Muse at scale. A cleaner photographs a room before and after cleaning, a game-show host voice hypes them in English, Spanish, or Polish (it celebrates — it never instructs or coaches), and the result gets a verified quality score posted to a leaderboard.

CleanQuest scores visible cleanliness and technique only — it never claims to verify sanitation, and a benchmark time is never a certification.

## Who it serves & core value propositions

1. **The cleaner (Visibility & Fair Recognition)** — Night-shift commercial cleaners prove quality in under 3 minutes with two photos, zero typing, 44px glove-friendly controls, and full trilingual support (**English, Mexican Spanish, and Polish**). Every run builds an exportable **verified inspection record** (CSV/JSON) that travels with them job to job, while the **Daily Swipe Deck** teaches real technique one card at a time. (Passport/crew/supervisor panes are code-kept and hidden for the hackathon — not demoed, not judged.)
2. **Building Service Contractors & Facility Operators (Proof Without Re-Checks)** — Eliminates "they didn't clean" disputes and site-to-site re-check drives. Geofenced inspection logs and per-surface AI scorecards accumulate automatically across **10 building sectors, 13 facility areas, and 28 cleaning spots**. (Printable QR station stickers are code-kept post-hackathon, UI hidden for the hackathon.)
3. **Associations & Sponsors (Training at the Moment of Work)** — Industry benchmark times (+15s chemical dwell credits) and brand-neutral product rules are taught inside the game and daily deck instead of a paper binder nobody opens.

## How the closed-loop game works

1. **Station Check-In & Before Photo:** Select or QR-scan a registered site and station, frame the surface, snap the **Before** photo, and tap **Start**.
2. **Locked 1:30 Run + Live Host Inspiration:** Clean against a locked countdown while a neural game-show host voice hypes you every 6–8 seconds over a 122 BPM WebAudio house groove. Tap **Complete Challenge** to auto-capture the **After** photo in one tap.
3. **Two-Rung AI Verification (On-Device + Zero-Setup Cloud):**
   - **Rung 1 (On-Device, Zero Signal Required):** MediaPipe **EfficientDet-Lite0** verifies the station environment (`verifyStationEnvironment`) and counts cleared objects, **96×72 structural edge + 3×3 luminance zone analysis** grades visible change and top-to-bottom technique, and **Pose Landmarker Lite** scores the victory pose.
   - **Rung 2 (Cloud Verification — Works Out-of-the-Box):** A token-efficient serverless proxy routes to **Meta's `Muse Spark Open`** on **Baseten (`meta-models/muse-spark-open`)** with automatic failover to **Fireworks AI (`accounts/fireworks/models/muse-spark-open`)** — grading each surface (`counter`, `glass`, `floor`, `fixture`) with confidence gating (`0.6`), drawing **SAM 3.1 / `box_2d`** surface highlight boxes, and logging exact token telemetry to an exportable **Provider Run Log**. Users can also enter direct keys in Settings for **Meta Model API (`muse-spark-1.3`, `sam-3.1`, `muse-voice-transcribe-1.0`)**.
4. **5-Tier Audio Verdict, Automated 2-Week Deck Seasons & Dual Leaderboard:** Hear a 5-tier musical stinger + neural spoken score summary (neural clips only — never robotic synth), review the 50/25/25 weighted bars (Cleanliness 50% · Technique 25% · Time 25%) plus a plain-language untouched-area callout, and compete on both the **Shift Challenge Leaderboard** and the **Bi-Weekly Daily Deck Leaderboard**.

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
- **On-Device Vision & Audio:** MediaPipe EfficientDet-Lite0 + Pose Landmarker Lite + 9-zone luminance/edge analyzer; 706 trilingual neural voice MP3s (Kokoro-82M EN, Mexican Spanish `es_MX-claude-high` ES, Piper VITS PL) + 122 BPM WebAudio synthesizer.
- **Cloud AI & Open Weights:** Meta Model API (`muse-spark-1.3`, `sam-3.1`, `muse-voice-transcribe-1.0`) + Serverless `Muse Spark Open` primary/failover engine on **Baseten** (`meta-models/muse-spark-open`) and **Fireworks AI** (`accounts/fireworks/models/muse-spark-open`) with live token telemetry and exportable JSON audit logs.
- **Automated Verification:** 6/6 hermetic self-test + 11/11 end-to-end persona suite + 100% mobile/desktop above-the-fold CTA compliance.
