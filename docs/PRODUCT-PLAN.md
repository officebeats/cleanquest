# CleanQuest — Revised Product Plan (v2)

Source: operator operating-standards/MVP document (internal, stays outside this
repo) reconciled against the current vanilla-JS build. No external brand names,
sponsor names, dollar figures, or revenue mechanics appear in code or in this
doc. Generic terms only: "standards body", "sponsor slot", "operator".

 > **Status (overnight loop):** all four phases below are SHIPPED and verified
 > (6/6 self-test, 11/11 personas, weighted 50/25/25 scoring everywhere).
 > The living ledger is `../OVERNIGHT-LOG.md`; the loop contract is
 > `HACKATHON-LOOP-PROMPT.md`; parked items are listed in `HANDOFF.md`.

## Positioning pivot

From: a 90-second speed-cleaning game with a score.
To: a **verified inspection record for cleaners** — every run produces
explainable, appealable, exportable proof of visible-cleaning quality. The game
loop is the acquisition hook; the record is the product. (Passport/crew/supervisor panes are code-kept post-hackathon, UI hidden for the hackathon — not demoed, not judged.)

Keep the hard rules: host hypes only (never instructs, never names products),
scores claim visible cleanliness only (never sanitation), benchmark times are
never certifications, no secrets in the repo, no new dependencies without
approval, offline/demo always works.

## What the standards doc demands that the build lacks

| Gap | Now | Target |
|---|---|---|
 | Verdict voice | `announceGameVerdict()` routes every verdict through `speakHost()` tiers: pass-big / pass / pass-close / retry / retry-far by margin (hushed gate: directive/unscored runs get no rank badge, no praise voice/confetti); neural clips only, silence when unrecorded (never synth) | Tier thresholds (dominant ≥ +15 over pass mark, solid = pass, close = within 5 under big-tier line, retry-far = clear miss), `speakHost()` routing, EN numbers/glue clips so scores can be spoken (`num`/`glue` per AUDIO-PLAN §3), synth SFX for verdict moments |
 | Score explanation | Three bars (Clean / Technique / Time vs benchmark), one plain directive line, no findings box; unscorable runs show NOT SCORED + layman reason + retake CTA and hide bars/dispute; near-identical before/after is never scored ("NO CHANGE — wipe and retake") | Keep verdicts to one short line each; never verbose paragraphs after AI analysis |
| Leaderboard fairness | Full ranked list | Top 10 + own entry only; never show last place |
| Appeals | None | One-tap Dispute on results → local appeal record (open, 5-business-day promise shown as text); no code path can edit a score |
| Consent & privacy | Disclaimer text only | Plain-language consent gate before first run, read aloud in chosen language; "faces are never identified" stated; consent flag in-browser only |
| Host control | Mute toggle, default on | Hype levels: Full / Chill / Off; default Off until explicitly enabled (never plays aloud uninvited) |
| Check-in | Free framing | Area template pick + system-assigned high-impact spot + frame guide; in-app capture only (already true — assert it) |
| After photo | Plain capture | Ghost overlay of the before shot to match angle |
| Offline | Offline score note | Run queue: completed runs saved locally, marked "awaiting score", scored when back online |
| Swipe deck | 22 cards, once/day | 10-card daily session, missed topics repeat until correct, private mistakes; plain ✔ AGREE / ✘ DISAGREE verdicts with matching voice lines, logo-only sponsor mark after answer |
| Crews (code-kept, UI hidden for hackathon) | None | Local crews (3–8) + virtual squad for solo workers; weekly matchup from local runs; crew MVP = top run, system-chosen — code kept post-hackathon, not demoed or judged |
| Progress | None | 13-week benchmark-consistency meter ("Week N of 13, on track") — never called a certification |

## Phases (each a committable slice, verified before the next)

1. **Trust core** — consent gate, hype levels + default-off, three-bar score,
   dispute record, fair leaderboard. Proves the "system scores, nobody edits"
   promise in the UI.
2. **Verdict voice wiring** — tier thresholds (config: dominant ≥ +15 over
   pass mark, solid = pass, close = within 5 under big-tier line, retry-far =
   clear miss), `speakHost()` routing, EN numbers/glue clips so scores can be
   spoken (`num`/`glue` per AUDIO-PLAN §3), synth SFX for verdict moments.
3. **Pilot loop** — area check-in + assigned spot, ghost overlay, offline run
   queue, dwell cue as UI text (never host speech).
4. **Learning (hackathon) + crews (code-kept post-hackathon)** — 5/day deck pacing + missed-repeat, 13-week consistency meter, generic sponsor slots
   (empty by default, labeled when operator fills them locally). Crew/squad matchup + MVP stays in code, UI hidden for the hackathon — not demoed, not judged.

## Non-goals (explicitly out)

Public registry, paid badge use, client portals, hiring/data products,
cross-city leagues, elite tiers, chat, payroll, any backend or account system,
any sponsor/brand content in code, any score-editing or discipline tooling.

## Verification per phase

`node --check app.js`; banned-term grep (brand names, currency, tier names,
certification claims) over code + docs; headless-Chrome self-test 6/6 and
persona suite; phone fold at 360×740 and 390×844; a persona added per phase
(consent-first-timer, appellant, offline-queued run, code-kept crew-member pane flow).

## Phase 5: Music Engine (3 Disclosure-Style House Tracks) & Spotify / Apple Music Account Integration

1. **Built-in WebAudio UK Garage / Deep-Disco House Producer Engine (`DISCLOSURE_TRACKS`):**
   - **Track 1 — *Latch Groove* (122 BPM · F minor / Ab major · Default):** Polyrhythmic 6/8-over-4/4 Juno-106 9th chord stabs (`Fm9 → Dbmaj9 → Abmaj9 → Cm7/Eb`), pitch-gliding vocal-chop synth lead, skipping UKG rimshot pocket, and deep sub + Korg M1 Organ-2 bass.
   - **Track 2 — *White Noise* (124 BPM · A minor / D Dorian):** Driving 909 club house kick, sizzling open hi-hats, resonant M1/saw bassline, and Philly/French-disco string falls.
   - **Track 3 — *Omen Velvet* (126 BPM · C# minor / E major):** Slap-octave Nu-Disco bassline, sidechained Rhodes/Juno chords, and syncopated synth-brass hook.
   - **Adaptive Mix & Sidechain Ducking:** Plays at `1.0x` energy on the Daily Deck, `0.38x` subtle ambient club mix during Camera Check-In & active Timer runs, and automatically ducks to `0.22x` whenever the game-show host speaks.
2. **Spotify & Apple Music Account / Playlist Integration (`#settingsHostVoicePanel`):**
   - **Today (Zero-Key Browser Embeds):** Cleaners can tap `Spotify ↗` or `Apple Music ↗` in Settings (or paste any playlist/track URL) to mount an official Spotify (`open.spotify.com/embed/...`) or Apple Music (`embed.music.apple.com/...`) player using their signed-in browser session.
   - **Next (Full OAuth 2.0 PKCE + Web Playback SDK / MusicKit JS v3):**
     - **Spotify:** OAuth 2.0 Authorization Code with PKCE (`streaming`, `user-read-playback-state`, `user-modify-playback-state`, `playlist-read-private` scopes) + Spotify Web Playback SDK so CleanQuest can list the cleaner's own playlists and duck `player.setVolume(0.2)` automatically during host voice clips.
     - **Apple Music:** Apple MusicKit JS v3 (`MusicKit.configure({ developerToken })` → `music.authorize()`) with native user library playlist picker and automatic gain ducking under host voice cues.
