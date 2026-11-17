# CleanQuest

A mobile-first cleaning challenge that turns visible work into fair feedback, recognition, and an inspection record.

[Live app](https://officebeats.github.io/cleanquest/) · [Demo video](https://www.youtube.com/watch?v=MQ7P3IyOubo) · [Judges' report](https://officebeats.github.io/cleanquest/docs/judges/report.html) · [Spectator board](https://officebeats.github.io/cleanquest/?spectator=1)

## The problem

Commercial cleaning employs 2.4 million people in the US. Crews get minimal feedback, recognition, or proof of work; companies lose accounts over “they didn't clean” disputes they cannot settle.

## What it is

A run has three steps:

1. **Check in:** Choose language and station details from dropdowns—zero typing. Consent is read aloud, then the before photo is captured in-app.
2. **Run:** Clean against a locked 90-second timer with a neural host voice in English, Mexican Spanish, or Polish.
3. **Get scored:** A before/after photo pair is graded and a verified score can appear on the leaderboard.

CleanQuest scores visible cleanliness and technique only; it never claims to verify sanitation. A benchmark time is never a certification.

## Key product decisions

- **Consent first:** Faces are never identified; scores are never used for discipline. Consent is read aloud before the run.
- **Honest failure over fake precision:** When the system cannot judge fairly, it returns **NOT SCORED** with one plain-language reason—wrong area, person in photo, too dark, too much glare, camera moved, too far away, or no change—and offers a retake. Scores are read-only; nobody can edit a score.
- **Money never touches scoring:** The game is free for cleaners and sponsors fund it. Sponsors have no say over scores, training answers, or rankings.
- **Designed for the actual user:** Built for night-shift crews: zero typing, dropdowns only, 44px glove-friendly controls, and full English, Mexican Spanish, and Polish support. An exportable inspection record (JSON/CSV) travels with the cleaner job to job.

## How it works technically

Two rungs of verification:

- **Rung 1 — on-device:** Google MediaPipe EfficientDet-Lite0 and Pose Landmarker Lite verify the station environment and reject wrong-room or person-in-photo shots. A 96×72 structural edge analysis and 3×3 luminance zone analysis grade visible change and top-to-bottom technique. This rung works with zero signal.
- **Rung 2 — cloud:** A serverless proxy routes to Meta Muse Spark Open on Baseten with automatic failover to Fireworks AI. It grades each surface as clean, partly clean, or missed; SAM 3.1 or `box_2d` outlines surfaces. An optional own-key path uses Meta Model API `muse-spark-1.3`, `sam-3.1`, and `muse-voice-transcribe-1.0`.

The in-app host ships with 715 pre-rendered neural voice clips (Kokoro-82M EN, Piper VITS ES/PL), so it works offline. One batched model call generates each two-week season's training deck and caches it; repeat plays cost 0 tokens.

## Evaluation & reliability

- Cloud surface grades are confidence-gated at 0.6. If a run cannot be judged fairly, the NOT SCORED taxonomy above gives one reason and a retake.
- The provider run log records exact token telemetry and can be exported as JSON. Verified live on both providers: 98% at 1,405 tokens on one; 96% at 1,695 tokens on the other.
- Automated verification: 6/6 hermetic self-tests and 11/11 end-to-end persona suite passing; 100% mobile/desktop above-the-fold CTA compliance.
- **Final run score (composite layer):** Clean 50% + Technique 25% + Time 25%, combined by `computeWeightedRunScore`.
- **Clean component (on-device, per-spot layer):** Surface gleam, zone coverage, and items cleared are weighted by cleaning-spot profile. The default Sink & counter profile is 55% surface / 25% zones / 20% items—the rule shown by the live UI badge. Other spots differ: mirror/glass weights surface higher; workstation desks weight items higher.

## Business model

Free for cleaners forever. Sponsors fund the game: brands pay $15K–$55K per package, with one sponsor per category through associations and shows, in a ~$100B US commercial cleaning market of 63,000+ firms. Companies pay to use an earned credential commercially, never to earn it.

## Tech summary

- Vanilla JS; no build step.
- Google MediaPipe on-device.
- Meta Muse Spark family via Baseten/Fireworks serverless proxy.
- `localStorage` caching.
- Dual leaderboards, Daily Deck training cards, 13-week consistency meter, and breakroom spectator board.

## What I'd do next

- Ship the supervisor panes: site registry and squad tools.
- Add printable QR station stickers for check-in.
- Surface cached AI shift briefings for supervisors.
- Package training into five-day packs.

## Disclosure

CleanQuest began as a crude, non-cloud, local-only proof of concept with local voice and local image recognition. Everything in this repository was built during the Meta Global AI Developer Hackathon, October 26 – November 4, 2026.
