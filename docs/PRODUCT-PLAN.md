# CleanQuest — Revised Product Plan (v2)

Source: operator operating-standards/MVP document (internal, stays outside this
repo) reconciled against the current vanilla-JS build. No external brand names,
sponsor names, dollar figures, or revenue mechanics appear in code or in this
doc. Generic terms only: "standards body", "sponsor slot", "operator".

> **Status (overnight loop):** all four phases below are SHIPPED and verified
> (6/6 self-test, 12/12 personas, weighted 50/25/25 scoring everywhere).
> The living ledger is `../OVERNIGHT-LOG.md`; the loop contract is
> `HACKATHON-LOOP-PROMPT.md`; parked items are listed in `HANDOFF.md`.

## Positioning pivot

From: a 90-second speed-cleaning game with a score.
To: a **verified benchmark passport for cleaning crews** — every run produces
explainable, appealable, portable proof of visible-cleaning quality. The game
loop is the acquisition hook; the record is the product.

Keep the hard rules: host hypes only (never instructs, never names products),
scores claim visible cleanliness only (never sanitation), benchmark times are
never certifications, no secrets in the repo, no new dependencies without
approval, offline/demo always works.

## What the standards doc demands that the build lacks

| Gap | Now | Target |
|---|---|---|
| Verdict voice | `announceGameVerdict()` bypasses clips via raw TTS | Route verdict through `speakHost()` tiers: pass-big / pass / pass-close / retry / retry-far by margin; clips first, TTS fallback |
| Score explanation | Single cleanliness % | Three bars: Clean (measured surfaces), Technique (visible order/dwell evidence or "not measured"), Time vs benchmark (capped, gradual, never zero; very fast = review flag, not bonus) |
| Leaderboard fairness | Full ranked list | Top 10 + own entry only; never show last place; crew average, not total |
| Appeals | None | One-tap Dispute on results → local appeal record (open, 5-business-day promise shown as text); no code path can edit a score |
| Consent & privacy | Disclaimer text only | Plain-language consent gate before first run, read aloud in chosen language; "faces are never identified" stated; consent flag in-browser only |
| Host control | Mute toggle, default on | Hype levels: Full / Chill / Off; default Off until explicitly enabled (never plays aloud uninvited) |
| Check-in | Free framing | Area template pick + system-assigned high-impact spot + frame guide; in-app capture only (already true — assert it) |
| After photo | Plain capture | Ghost overlay of the before shot to match angle |
| Offline | Offline score note | Run queue: completed runs saved locally, marked "awaiting score", scored when back online |
| Swipe deck | 22 cards, once/day | 5-card daily session, missed topics repeat until correct, private mistakes; generic labeled sponsor slot after answer only (operator-filled, never hardcoded) |
| Crews | None | Local crews (3–8) + virtual squad for solo workers; weekly matchup from local runs; crew MVP = top run, system-chosen |
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
4. **Learning & crews** — 5/day deck pacing + missed-repeat, local crews +
   weekly matchup + MVP, 13-week consistency meter, generic sponsor slots
   (empty by default, labeled when operator fills them locally).

## Non-goals (explicitly out)

Public registry, paid badge use, client portals, hiring/data products,
cross-city leagues, elite tiers, chat, payroll, any backend or account system,
any sponsor/brand content in code, any score-editing or discipline tooling.

## Verification per phase

`node --check app.js`; banned-term grep (brand names, currency, tier names,
certification claims) over code + docs; headless-Chrome self-test 6/6 and
persona suite; phone fold at 360×740 and 390×844; a persona added per phase
(consent-first-timer, appellant, offline-queued run, crew member).
