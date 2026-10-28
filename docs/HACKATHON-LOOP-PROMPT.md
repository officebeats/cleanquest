# CleanQuest Overnight Hackathon — Wonder-Driven Autonomous Loop (v2)

> Runs until ~03:00. Each loop publishes to GitHub so no progress is ever stranded.
> Live: `https://officebeats.github.io/cleanquest/` · Repo: `/Users/ernestorodriguez/orca/projects/clean-quest/cleanquest`

This is v2 of the build loop. v1 established the 5-step invariant (Scope → Implement →
Gate → Visual Critique → Commit/Push/Log). v2 keeps that invariant but explicitly
routes every **reasoning-heavy decision** through **Muse Wonder** (`muse-wonder`),
using its strengths — long-horizon planning, root-cause diagnosis, skeptical visual
judgment, spec-vs-implementation disambiguation — while fast mechanical execution
(edits, probes, screenshots) stays cheap and parallel.

Sources: `local://ai-loop-best-practices.md` (Ralph Wiggum one-slice loops,
Anthropic Evaluator-Optimizer, SWE-agent verify-then-commit, AutoUX visual ratchet)
and `local://mvp-gap-matrix.md` (15-screen audit, P0–P2 backlog). Both scouts are
done; their files are the ground truth — do not re-audit the PDF from scratch.

---

## 1. Model routing (Wonder leads reasoning, Spark implements)

**Muse Wonder is the architect and evaluator. Muse Spark 1.3 is the implementer.**
Wonder never writes large features blind; Spark never ships without Wonder's contract
and Wonder's skeptical sign-off. Identity and config are logged every loop
(`model: muse-wonder / muse-spark-1.3`, viewport set, gate versions) in OVERNIGHT-LOG.

| Phase | Driver | Why |
|---|---|---|
| Scope triage + slice contract | **Wonder** | Picks the single highest-leverage P0→P2 slice, writes falsifiable acceptance, predicts failure modes (pre-mortem). |
| Implementation | **Spark 1.3** | Mechanical code changes in vanilla JS/HTML/CSS. No reasoning beyond the contract. |
| Gate failure diagnosis | **Wonder** | 5-whys on any red gate; decides fix-forward vs. targeted revert. |
| Visual critique | **Wonder as skeptical judge** | Grades real pixels at 1280×800 + 390×844 + 360×740. Generator self-praise is banned. Verdict is fix / release / stop. |
| Log + commit message | **Wonder compresses, Spark executes** | Reasoning trace compressed to OVERNIGHT-LOG evidence (40–60% context zone). |

Prohibited: autonomous blanket rollback (`git checkout -- .` is FORBIDDEN — it would
destroy unrelated user work); unverified pushes (any red gate = no push);
multi-slice commits (one slice per commit, always).

Rule: **no code is written until Wonder has written the contract below.**
No commit is pushed until Wonder has graded the screenshots PASS.

### 1a. Pre-implementation Wonder Reasoning Pass (mandatory, before any edit)
1. Read current diff (`git status -sb`, `git diff --stat`), OVERNIGHT-LOG tail, and the MVP gap section for the candidate slice.
2. Rank exactly ONE slice by (user impact × standard-compliance risk) / (scope size). Name the runner-up and why it loses.
3. Write a hypothesis ledger: evidence for the bug/gap, two alternatives considered, product invariants that must hold, and the exact acceptance probes (export + persona + viewport).
4. Delegate read-only scouts only (grep/read/probe); Wonder synthesizes, never lets scouts edit.
5. Emit the bounded implementation contract (§★1). If any of 1–4 is missing, STOP — do not implement.

### 1b. Post-build Wonder Skeptical Review (mandatory, after gates + screenshots)
Compare source intent vs. live Orca behavior/pixels. Reject self-praise. Output exactly one verdict:
- FIX (name the failing gate/rubric line + minimal repair, max 2 attempts), or
- RELEASE (all gates green + rubric PASS → log, commit, push), or
- STOP/PARKED (root cause unclear or second fix failed → targeted revert of slice files only, log PARKED, move on).

## 2. The invariant loop (v2, Wonder checkpoints marked ★)

```
[★0. Triage] → [★1. Scope Contract] → [2. Implement] → [3. Hard Gates]
      ▲                                                     │
      │                       ┌── all green ─── [★4. Visual Critique] → [★5. Log/Push]
      │                       │                                    │              │
      │                       └── red → [★3.5 Wonder Diagnosis] → fix (max 2) ───┘
      │                                        │ fail twice → targeted revert + PARKED
      └─────────────────────────────────────────────────────────────────────────
```

### ★0. Triage (Wonder, ≤5 min)
1. `git status -sb`, `git log --oneline -3`, tail of `OVERNIGHT-LOG.md`.
2. Read `local://mvp-gap-matrix.md` P0→P2 queue. Priority order (already ranked):
   - **P0-1** Start `ReferenceError` + default-off voice violation.
   - **P0-2** Hidden Screens 1–4 + silent consent bypass.
   - **P0-3** Run→crew pipeline + weighted-score headline.
   - **P1-1…P1-4** Multi-zone grade map, ghost timing + offline queue, trilingual deck + crew bonus, verdict number speech.
   - **P2-1…P2-2** Admin 11–15 workflow + full trilingual `data-i18n`.
3. Output: `LOOP N · slice · why-now · acceptance IDs`.

### ★1. Scope contract (Wonder)
One sentence without "and". Then:
```text
Files: <exact paths>
Behavior: <user-visible change>
Invariants: <product rules preserved>
Proof: <window.cleaningChallenge export + runPersonaSuite check + viewport>
Rollback: <targeted revert, never blanket checkout>
```

### 2. Implement (executor)
Vanilla JS/HTML/CSS only. Zero secrets, zero brands/money, host hypes-only,
visible-cleanliness-only, benchmark≠certification, offline/demo always completes.
Export new helpers on `window.cleaningChallenge`. Grep before coding
(*don't assume not implemented*).

### 3. Hard gates (executor, Wonder judges)
- **3A** `node --check app.js && node --check deck.js` + `els.*` DOM-ID match.
- **3B** Targeted probes: valid/invalid/missing-key/malformed inputs; QR
  `parseAreaQrPayload` valid+invalid; swipe once-left/once-right + locked-card
  ignored; hub toggle; muted-Start no-throw; `CLIPS_MANIFEST`↔MP3 1:1.
- **3C** `?selftest=1` **6/6** + `runPersonaSuite()` **all-pass** (currently 11),
  zero `console.error`/`pageerror`, hermetic `localStorage` restore.
- **3D** Banned-token grep (brands, `$`, certification/sanitized, `sk-`) + no
  `.onnx`/`.wav`/`node_modules` staged.

### ★3.5 Wonder diagnosis (on any red)
1. Reproduce minimally. 2. Five-whys to root cause (symbol? geometry? state?).
3. Decide: **fix-forward** (≤2 attempts, re-run all 4 gates from top) or
   **targeted revert** of slice files only + `PARKED` log entry. Never blanket
   `git checkout -- .`.

### ★4. Visual critique (Wonder as judge, Orca CLI)
Viewports: **1280×800**, **390×844**, **360×740** (+ `?spectator=1` when touched).
Capture every touched screen/modal. Grade binary PASS/FAIL:
1. Topbar single row ≤60px in EN/ES/PL; no wrapped icons.
2. Primary CTAs in-viewport (`ctasInViewport`), zero h-scroll
   (`scrollWidth <= innerWidth`), lists capped 30–38dvh with sticky CTA.
3. Zero `[object Object]`/`NaN`/raw i18n keys; contrast ≥4.5:1 (≥7:1 spectator).
4. Interaction feedback visible: QR scan applies + badge updates, card tilt/stamp
   follows pointer, hub reveals panels, nudge/zone grid unobscured.
Any FAIL → ★3.5, then re-run gates + screenshots.

### ★5. Log, commit, push (Wonder compresses, Spark executes)
Per-loop log header MUST include `model: muse-wonder (reasoning) + muse-spark-1.3 (implementation)` plus viewport set and gate versions.
Append `## LOOP N — <Title> — DONE` to `OVERNIGHT-LOG.md`:
`- Implemented / - Evidence (6/6, N/N, viewports, grep) / - Decisions / - Blockers`.
Then `git add` slice files only → commit → `git push origin main` → verify
`git status` clean and GitHub Pages live. Push **every green loop** (cadence beats
batch size before 03:00). Docs-only revisions (like this prompt) commit/push alone —
never bundle unverified source changes with a docs commit.

## 3. Guardrails (non-negotiable)
- `999.` One slice per commit. `9999.` Search before coding.
- `99999.` Red gate = no commit, no push. `999999.` No DONE without 1280 + 390 + 360 proof.
- `9999999.` NEVER blanket-revert user work; targeted revert of slice files or stop/escalate.
- `99999999.` Reasoning traces compress to disk every loop; context stays lean.
- `999999999.` Log model identity + config every loop; Wonder judges, Spark builds.

## 4. Reusable loop prompt (paste to start a loop)
```text
Execute LOOP N per cleanquest/docs/HACKATHON-LOOP-PROMPT.md (v2 Wonder-driven):
★0 Triage the P0→P2 queue. ★1 Write the 5-line contract. 2 Implement it.
3 Run gates 3A–3D. ★3.5 Diagnose any red with 5-whys (max 2 fixes, else targeted
revert + PARKED). ★4 Orca screenshots at 1280x800, 390x844, 360x740; Wonder-grades
PASS/FAIL. ★5 Append OVERNIGHT-LOG.md evidence, commit, push origin main, verify.
```
