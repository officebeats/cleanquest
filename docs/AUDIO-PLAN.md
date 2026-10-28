# AUDIO PLAN — CleanQuest voice clips + SFX (research, no installs, no audio generated yet)

Arbiter-merged from 3 parallel research agents (TTS tooling, sound design, script inventory) into this single file. Single writer, no conflicts.

## 1. TTS tooling — ranked table (Apple Silicon, commercial game, PL mandatory)

| # | Engine | PL support | License | Naturalness /5 | Install ease /5 | Speed per 2–6 s clip | Voice pinning |
|---|---|---|---|---|---|---|---|
| 1 | **Piper (OHF-Voice/piper1-gpl) — WINNER** | Yes, native: `pl_PL` gosia-medium (F), darkman-medium (M); EN `en_US` lessac/ryan; ES `es_ES` sharvard/davefx, `es_MX` aldo | Engine GPL-3.0 (was MIT under archived rhasspy/piper). Each voice has its own MODEL_CARD license — check per voice before shipping. Commercial-safe pattern: render WAVs offline, ship only audio files, never bundle the engine | 3 — clean intelligible VITS, slightly flat; fine for short punchy host lines | 5 — `pip install piper-tts`, prebuilt macOS arm64 wheel, ONNX CPU-only, ~15–65 MB per voice | Fastest, RTF ~5–10x (~0.3–1 s per clip on M-series CPU) | One `.onnx` + `.onnx.json` file IS one voice. Pin: `en_US-lessac-medium`, `es_ES-sharvard-medium --speaker 0`, `pl_PL-gosia-medium`. Deterministic, no prompt drift |
| 2 | **Chatterbox Multilingual V3 — runner-up** | Yes, native: 23 langs incl. en, es, pl | MIT (code + weights), commercial-clean | 5 — SoTA open voice, emotion/exaggeration control | 3 — `pip install chatterbox-tts` + torch, ~3 GB first run, MPS supported | Medium-slow, ~3–10 s per clip CPU/MPS | Zero-shot clone: pin one 5–10 s licensed ref WAV + transcript per language + fixed exaggeration/cfg/seed; or pin default preset voice |
| 3 | F5-TTS | Base model NO (en+zh only); PL only via community fine-tunes (extra provenance risk) | Code MIT, official weights CC-BY-NC-4.0 — NON-COMMERCIAL, FAIL | 4 — very natural, needs good ref audio | 2 — torch matching quirks on MPS; 336 MB–1.2 GB weights | Slow CPU ~5–15 s per clip | Ref-audio prompt, fragile across lines |
| 4 | Coqui XTTS v2 | Yes, 17 langs incl. pl | CPML — NON-COMMERCIAL ONLY, FAIL (Coqui shut down Jan 2024) | 5 — best-in-class cloning | 2 — `pip install TTS` (pin Python <3.11), 2.1 GB checkpoint, CPU painfully slow | ~5–20 s CPU | Zero-shot 6 s ref clip per lang; excellent consistency if licensed — not available |
| 5 | Meta MMS-TTS | Yes (`facebook/mms-tts-pol`, 1,100+ langs) | CC-BY-NC-4.0 per checkpoint — NON-COMMERCIAL, FAIL | 2 — flat single-speaker VITS | 3 — easy pip, ~30–50 MB per lang | Fast ~1–2 s | One fixed voice per checkpoint, zero persona control |
| 6 | Kokoro-82M | NO Polish — FAIL (mandatory) | Apache-2.0 (commercial OK, irrelevant) | 4 (MOS ~4.2) | 4 — `pip install kokoro`, ~320 MB | Fast CPU sub-second–2 s | 54 preset voices, no PL voice exists |

Bonus harness: Sherpa-ONNX (Apache-2.0 runtime) as offline batch renderer for Piper voices if `piper-tts` pip gives trouble. Model licenses still apply.

**Winner: Piper.** Only candidate that is simultaneously (a) PL-native with separate EN and ES voices, (b) trivially installable and instant on Apple Silicon CPU, and (c) shippable for a commercial vanilla-JS game via render-once-to-MP3 that never redistributes the GPL engine. Deterministic one-file-per-voice pinning = same voice on every clip, zero prompt drift.
**Runner-up: Chatterbox Multilingual V3.** Highest naturalness, fully commercial-clean MIT, native PL — the A/B challenger if the host needs more character. Loses on weight (~3 GB), slower renders, ref-clip overhead.
Disqualified regardless of quality: Kokoro (no Polish); MMS-TTS, F5-TTS base weights, XTTS v2 (non-commercial licenses).

### Install the winner on this Mac (commands only — NOT run yet)

```bash
brew install python@3.11 ffmpeg
python3.11 -m venv ~/.venvs/piper && source ~/.venvs/piper/bin/activate
pip install -U pip && pip install piper-tts onnxruntime
mkdir -p tools/voices && cd tools/voices
curl -L -o en_US-lessac-medium.onnx https://huggingface.co/rhasspy/piper-voices/resolve/v1.0.0/en/en_US/lessac/medium/en_US-lessac-medium.onnx
curl -L -o en_US-lessac-medium.onnx.json https://huggingface.co/rhasspy/piper-voices/resolve/v1.0.0/en/en_US/lessac/medium/en_US-lessac-medium.onnx.json
curl -L -o es_ES-sharvard-medium.onnx https://huggingface.co/rhasspy/piper-voices/resolve/v1.0.0/es/es_ES/sharvard/medium/es_ES-sharvard-medium.onnx
curl -L -o es_ES-sharvard-medium.onnx.json https://huggingface.co/rhasspy/piper-voices/resolve/v1.0.0/es/es_ES/sharvard/medium/es_ES-sharvard-medium.onnx.json
curl -L -o pl_PL-gosia-medium.onnx https://huggingface.co/rhasspy/piper-voices/resolve/v1.0.0/pl/pl_PL/gosia/medium/pl_PL-gosia-medium.onnx
curl -L -o pl_PL-gosia-medium.onnx.json https://huggingface.co/rhasspy/piper-voices/resolve/v1.0.0/pl/pl_PL/gosia/medium/pl_PL-gosia-medium.onnx.json
cd ../..
echo "Beat one complete. Tidy!" | piper --model tools/voices/en_US-lessac-medium.onnx --output_file /tmp/en-test.wav
```

Workflow: render all script lines offline with the three pinned files (fixed `--speaker 0` for sharvard), convert WAV to MP3, commit only MP3s under `assets/audio/<lang>/`. Check each voice MODEL_CARD license first. Never vendor `piper` or `.onnx` files into the game.

## 2. SFX design — synth-first, sample-optional

Decision: zero-byte WebAudio synthesis for all short feedback; samples ONLY as optional upgrades for crowd cheer and ambience loop (synth always coded as fallback, so missing files never break the game).

| Sound | Approach | Recipe / source | License | Format |
|---|---|---|---|---|
| UI click | WebAudio synth | `square` 1800→1200 Hz pitch-drop, 0.045 s; gain 0.0001→0.12 in 0.004 s exp, decay by 0.05 s; highpass 800 Hz; 30 ms throttle | N/A (code) | No file |
| Countdown beep (3-2-1 + GO) | WebAudio synth | Beeps: `sine` 880 Hz, 0.12 s; GO: `sine` 1320 Hz + `triangle` 660 Hz stack, 0.35 s; schedule on `ctx.currentTime`, not timeouts | N/A (code) | No file |
| Success fanfare | WebAudio synth arpeggio | 4-note `triangle` C5–E5–G5–C6, 0.14 s each staggered 0.11 s, + `sine` octave shimmer at −12 dB; total <0.7 s | N/A (code) | No file |
| Fail buzz | WebAudio synth | 2× `sawtooth` detuned 140/148 Hz through `lowpass` 900 Hz, 0.45 s; no harsh full-scale square | N/A (code) | No file |
| Crowd cheer | CC0 sample (optional), synth fallback | Freesound.org search `stadium crowd cheer` filtered License=CC0 1.0 (verify per-file page shows CC0 1.0 Universal); trim 1.5–2.0 s, 150 ms fades. Fallback: bandpassed white noise + LFO + whistle blips | File if vendored: CC0 1.0 (record author + URL). Fallback: code | MP3 VBR ~96 kbps mono |
| Score tick | WebAudio synth | `sine` 1500 Hz, 0.03 s, peak 0.08; +40 Hz per tick rising; cap 1 tick/40 ms | N/A (code) | No file |
| Swipe whoosh | WebAudio synth | White noise 0.28 s → `bandpass` sweep 400→4000 Hz; reverse sweep for back-nav | N/A (code) | No file |
| Arena ambience loop | CC0 sample (optional, default OFF), synth fallback | Kenney.nl packs (explicit CC0 1.0) or Freesound CC0 `room tone` loop; 4–8 s seamless loop, −20 dB, `loop=true`, lowpass 500 Hz. Fallback: brown-noise buffer, lowpass 400 Hz, gain 0.03 + slow LFO | File if vendored: CC0 1.0 (record pack + URL). Fallback: code | MP3 64–96 kbps mono |

Rejected sources: Mixkit/Pixabay (non-CC0 terms); Freesound CC-BY files (need in-app credit — rejected unless credited). If no CC0 file is verified, ship synth-only. Record every vendored file's author + URL + license in the clips manifest.

Size budget: synth-first = 0 bytes download (~3–5 KB JS for one SFX module). With both optional samples: ≤300 KB total (cheer ≤80 KB, ambience ≤200 KB). Never ship WAV.

Platform notes: iPhone Safari decodes MP3/AAC/WAV, NOT reliably OGG — ship MP3 mono universally. Reuse one shared AudioContext (current per-beep `new AudioContext` in `playTone` must be refactored to the shared one); resume inside a user gesture (`unlockAudio()` already called on Start); respect in-app mute; pause ambience on `visibilitychange`; keep buffers short; 44.1 kHz.

SFX cue slots (names): SFX_HOST_STING, SFX_COUNTDOWN_TICK, SFX_COUNTDOWN_GO, SFX_MID_CHIME, SFX_HURRY_RISER, SFX_FINISH_WHISTLE, SFX_SCORING_TALLY, SFX_SCORE_REVEAL, SFX_VERDICT_PASS_BIG, SFX_VERDICT_PASS, SFX_VERDICT_CLOSE, SFX_VERDICT_RETRY, SFX_STREAK_UP, SFX_LEADERBOARD_NEW, SFX_UI_TAP, SFX_CAMERA_SHUTTER.

## 3. Script inventory — celebrate-hype ONLY (never instructional or coaching)

Base: `HOST_LINES` in app.js (5 beats x 24 lines x 3 langs = 360). IDs `00`–`23` below are existing lines; replacement text keeps the same ID (stable manifest keys). New beats: hurry, scoring-wait, pass-big, pass-close, streak, board, inspect — 12 lines each per lang, IDs `00`–`11`. New beat keys work with the existing no-repeat picker unchanged. Tier mapping: pass-big (dominant) / pass as solid tier / pass-close (squeaked by); retry = verdict-retry. Score thresholds splitting pass tiers are a game-logic decision for the build step.

### Trim audit (hard = technique/how-to/equipment/prep; soft = in-run effort imperatives; celebratory imperatives KEEP)

EN: start-09 → Star moment… let's clean! · start-10 → Showtime… cleaning star! · start-17 → Lights ready… room ready… go! · mid-01 → Nice pace… truly glowing! · mid-02 → Forty-five down… looking sharp! · mid-03 → Looking smooth… beautiful flow! · mid-05 → Good rhythm… pure groove! · mid-06 → Strong start… stunning middle! · mid-07 → Still moving… looking great! · mid-08 → Halfway home… what a run! · mid-09 → Smooth moves… love this run! · mid-10 → Right on track… perfect pace! · mid-12 → Halfway… full of shine! · mid-13 → Great energy… electric room! · mid-14 → You're flying… pure magic! · mid-16 → So steady… almost there! · mid-17 → Beautiful pace… pure beauty! · mid-18 → That energy… looking good! · mid-21 → Looking like a pro… wow! · mid-22 → Halfway… shining loud! · mid-23 → Great hustle… still shining! · finish-00 → Time!… what a sight! · finish-02 → That's it… pure champ! · retry-11 → Close call… stunning effort! · retry-17 → Almost… such great heart!

ES: start-09 → Momento estrella… ¡a brillar! · start-10 → ¡Es la hora… sala estrella! · start-17 → Luces listas… sala lista… ¡ya! · mid-01 → Buen ritmo… ¡qué bonito! · mid-02 → Mitad pasada… ¡vas firme! · mid-03 → Se ve fluido… ¡fluye hermoso! · mid-05 → Buen ritmo… ¡marcha hermosa! · mid-06 → Gran inicio… ¡mitad brillante! · mid-07 → Te mueves genial… ¡qué estilo! · mid-08 → Mitad del camino… ¡qué nivel! · mid-09 → Movimientos suaves… ¡qué arte! · mid-10 → Vas perfecto… ¡qué preciso! · mid-12 → Mitad… ¡puro ritmo! · mid-13 → Gran energía… ¡qué ambiente! · mid-14 → Vas volando… ¡qué vuelo! · mid-16 → Se ve cerca… ¡ya casi! · mid-17 → Ritmo hermoso… ¡puro brillo! · mid-18 → Qué energía… ¡vas bien! · mid-21 → Como profesional… ¡qué clase! · mid-22 → Mitad… ¡brilla en alto! · mid-23 → Gran esfuerzo… ¡puro brillo! · finish-00 → ¡Tiempo!… ¡obra hermosa! · finish-02 → ¡Eso es… puro campeón! · retry-11 → ¡Qué cerca… esfuerzo hermoso! · retry-17 → Casi… ¡qué gran corazón!

PL: start-09 → Wielka chwila… sprzątamy! · start-10 → Showtime… gwiazda sprząta! · start-17 → Światła gotowe… sala gotowa… start! · mid-01 → Dobre tempo… pięknie idzie! · mid-02 → Połowa za nami… forma świetna! · mid-03 → Płynnie idzie… piękny przepływ! · mid-05 → Dobre tempo… równa jazda! · mid-06 → Mocny start… środek olśniewa! · mid-07 → Wyglądasz super… co za styl! · mid-08 → Półmetek… co za poziom! · mid-09 → Płynne ruchy… czysta sztuka! · mid-10 → Idealnie… co za precyzja! · mid-12 → Połowa… pełny rytm! · mid-13 → Świetna energia… elektryczna sala! · mid-14 → Lecisz… co za lot! · mid-16 → Równo idzie… już prawie! · mid-17 → Piękne tempo… czysty blask! · mid-18 → Co za energia… dobrze idzie! · mid-21 → Jak zawodowiec… co za klasa! · mid-22 → Połowa… błyszczący finisz! · mid-23 → Świetna robota… czysty blask! · finish-00 → Czas!… piękne dzieło! · finish-02 → To jest… czysty mistrz! · retry-11 → Blisko było… piękny wysiłek! · retry-17 → Prawie… co za serce!

### New beats (12 lines each per language)

EN hurry: Ten seconds… what a finish! · Final stretch… looking glorious! · Almost home… beautiful ending! · What a run… beautiful! · Last seconds… pure magic! · Closing time… stunning work! · Here it comes… the bell! · Final countdown… love it! · So close… looking amazing! · Final moments… what heart! · Nearly there… gorgeous sight! · Seconds left… shining bright!
EN scoring-wait: Judges watching… what nerves! · Holding breath… here we go! · Scores incoming… so close! · Drumroll… this is it! · Judges deciding… wow moments! · Waiting… what a run! · Tallying up… looking good! · Moment of truth… shine! · Scoreboard waking… here it comes! · Fingers crossed… beautiful work! · The verdict… almost here! · Suspense… you were great!
EN pass-big: Massive win… absolutely glowing! · Blown away… perfect score vibes! · History made… look at that! · Unreal result… take a bow! · Total triumph… room transformed! · Legendary clean… hall of fame! · Off the charts… incredible! · A masterpiece… pure gold! · Best yet… simply flawless! · Record breaker… enjoy it! · Pure perfection… wow wow! · Champion level… undisputed!
EN pass-close: Squeaked through… still counts! · By a whisker… you made it! · Just enough… celebrate it! · Narrow win… sweet relief! · Cut it close… beautiful! · Over the line… phew! · Made it… by a hair! · Close one… but it's yours! · Scraped by… take it! · Photo finish… you passed! · Barely… but brilliantly! · Survived… and shining!
EN streak: Two in a row… on fire! · Streak alive… looking golden! · Three straight… unstoppable! · Winning habit… love it! · Another one… incredible run! · Streak growing… superstar! · Back to back… beautiful! · On a roll… amazing! · Four running… what form! · Streak day… celebrate big! · Unbeaten run… take a bow! · Hot streak… pure gold!
EN board: Top of the board… wow! · New high score… amazing! · Leaderboard loves you… yes! · Climbing high… beautiful! · Top five… superstar status! · Number one… take a bow! · Board updated… looking elite! · High ranks… well earned! · Smashed it… top spot! · Best of the best… wow! · Name in lights… gorgeous! · Top tier… enjoy it!
EN inspect: Past glories… beautiful memories! · Hall of fame… pure gold! · Your records… shining bright! · History shelf… full of wins! · Old victories… still gleaming! · Trophy case… looking full! · Saved triumphs… enjoy them! · Golden lane… forever clean! · Every win… kept forever! · Record book… star entry! · Past sparkles… collected here! · Legacy growing… beautiful!

ES hurry: ¡Diez segundos… qué final! · Recta final… ¡se ve glorioso! · Casi en casa… ¡final hermoso! · ¡Qué carrera… momento mágico! · Últimos segundos… ¡pura magia! · Cierre total… ¡trabajo increíble! · Ya viene… ¡la campana! · Cuenta atrás… ¡me encanta! · Tan cerca… ¡te ves genial! · Momentos finales… ¡qué corazón! · Ya casi… ¡vista preciosa! · Reloj corriendo… ¡qué brillo!
ES scoring-wait: Jueces mirando… ¡qué nervios! · Conteniendo el aliento… ¡ya viene! · Notas en camino… ¡qué emoción! · Redoble… ¡esto es! · Jueces decidiendo… ¡momentos guau! · Esperando… ¡qué carrera! · Sumando puntos… ¡pinta bien! · Momento de verdad… ¡brillo! · Marcador despierta… ¡ya viene! · Dedos cruzados… ¡trabajo hermoso! · El veredicto… ¡casi aquí! · Suspenso… ¡estuviste genial!
ES pass-big: ¡Victoria enorme… brillo total! · Impresionante… ¡vibras perfectas! · Historia hecha… ¡mira eso! · Resultado irreal… ¡reverencia! · Triunfo total… ¡sala transformada! · Limpieza legendaria… ¡salón de fama! · Fuera de serie… ¡increíble! · Obra maestra… ¡oro puro! · Lo mejor… ¡simplemente perfecto! · Récord roto… ¡disfrútalo! · Pura perfección… ¡guau guau! · Nivel campeón… ¡indiscutible!
ES pass-close: Pasó raspando… ¡igual vale! · Por un pelo… ¡lo lograste! · Justo bastó… ¡celébralo! · Victoria ajustada… ¡qué alivio! · Cierre apretado… ¡hermoso! · Cruzó la línea… ¡uf! · Lo logró… ¡por un pelo! · Fue cerrado… ¡pero es tuyo! · Apenas pasó… ¡qué alegría! · Final de foto… ¡pasaste! · Apenas… ¡pero brillante! · Sobrevivió… ¡y brillando!
ES streak: Dos seguidas… ¡en llamas! · Racha viva… ¡brillo dorado! · Tres al hilo… ¡imparable! · Hábito ganador… ¡me encanta! · Otra más… ¡racha increíble! · Racha crece… ¡superestrella! · Seguidas perfectas… ¡hermoso! · En racha… ¡increíble! · Cuatro al hilo… ¡qué forma! · Día de racha… ¡celebra grande! · Invicto total… ¡reverencia! · Racha caliente… ¡oro puro!
ES board: Top del tablero… ¡guau! · Récord nuevo… ¡increíble! · El tablero te ama… ¡sí! · Subiendo alto… ¡hermoso! · Top cinco… ¡estatus estrella! · Número uno… ¡reverencia! · Tabla al día… ¡se ve élite! · Rangos altos… ¡bien ganado! · A la cima… ¡primer puesto! · Lo mejor de lo mejor… ¡guau! · Nombre en luces… ¡precioso! · Nivel top… ¡disfrútalo!
ES inspect: Glorias pasadas… ¡recuerdos hermosos! · Salón de fama… ¡oro puro! · Tus marcas… ¡brillan fuerte! · Estante histórico… ¡lleno de triunfos! · Victorias viejas… ¡siguen brillando! · Vitrina llena… ¡se ve genial! · Triunfos guardados… ¡a disfrutar! · Paseo dorado… ¡limpieza eterna! · Cada triunfo… ¡guardado siempre! · Libro de récords… ¡entrada estrella! · Brillos pasados… ¡colección aquí! · Legado crece… ¡hermoso!

PL hurry: Dziesięć sekund… co za finisz! · Ostatnia prosta… wygląda bosko! · Prawie w domu… piękny finał! · Co za bieg… czysta magia! · Ostatnie sekundy… wielka magia! · Wielki finał… cudowna robota! · Już nadchodzi… dzwonek! · Odliczanie… uwielbiam to! · Tak blisko… wyglądasz super! · Ostatnie chwile… co za serce! · Już prawie… cudowny widok! · Zegar tyka… co za blask!
PL scoring-wait: Sędziowie patrzą… co za nerwy! · Wstrzymany oddech… już jest! · Wyniki lecą… co za emocje! · Werble… to jest to! · Sędziowie radzą… momenty wow! · Czekamy… co za bieg! · Liczą punkty… wygląda dobrze! · Moment prawdy… blask! · Tablica budzi się… już idzie! · Kciuki trzymane… piękna robota! · Werdykt… już prawie! · Napięcie… byłeś świetny!
PL pass-big: Wielka wygrana… pełny blask! · Szok… perfekcyjne wibracje! · Historia pisze się… patrz! · Nierealny wynik… wielki ukłon! · Pełny triumf… pokój odmieniony! · Legendarna czystość… aleja gwiazd! · Poza skalą… niesamowite! · Arcydzieło… czyste złoto! · Najlepszy występ… po prostu perfekcja! · Rekord pobity… ciesz się! · Czysta perfekcja… wow wow! · Poziom mistrza… bezdyskutacyjnie!
PL pass-close: Ledwo przeszło… ale liczy się! · O włos… udało ci się! · Wystarczyło… świętuj to! · Wąska wygrana… co za ulga! · Bliski finisz… pięknie! · Za linią… uff! · Udało się… o włos! · Blisko było… ale twoje! · Ledwo weszło… co za radość! · Finisz foto… zaliczone! · Ledwo… ale genialnie! · Przetrwałeś… i błyszczysz!
PL streak: Dwa z rzędu… w ogniu! · Seria trwa… złoty blask! · Trzy z rzędu… nie do zatrzymania! · Nawyk wygrywania… uwielbiam! · Kolejna… niesamowita seria! · Seria rośnie… supergwiazda! · Raz za razem… pięknie! · Na fali… niesamowite! · Cztery z rzędu… co za forma! · Dzień serii… świętuj mocno! · Bez porażki… wielki ukłon! · Gorąca seria… czyste złoto!
PL board: Szczyt tabeli… wow! · Nowy rekord… niesamowite! · Tabela cię kocha… tak! · Wysoko pniesz się… pięknie! · Top pięć… status gwiazdy! · Numer jeden… wielki ukłon! · Tabela gotowa… wyglądasz elitarnie! · Wysokie miejsca… zasłużenie! · Na szczyt… pierwsze miejsce! · Najlepsi z najlepszych… wow! · Imię w światłach… cudownie! · Top poziom… ciesz się!
PL inspect: Dawne chwały… piękne wspomnienia! · Aleja sław… czyste złoto! · Twoje rekordy… lśnią jasno! · Półka historii… pełna wygranych! · Stare wygrane… wciąż lśnią! · Gablota pełna… wygląda super! · Zwycięstwa schowane… ciesz się! · Złota alejka… wieczna czystość! · Każda wygrana… schowana na zawsze! · Księga rekordów… gwiezdny wpis! · Dawne blaski… kolekcja tutaj! · Dziedzictwo rośnie… pięknie!

### Number clips + glue (score speaking)

Beat `num` (ID = value, zero-padded; `num-100` = 100). Beat `glue` (fixed slots).
EN num: 00 zero, 01 one, 02 two, 03 three, 04 four, 05 five, 06 six, 07 seven, 08 eight, 09 nine, 10 ten, 11 eleven, 12 twelve, 13 thirteen, 14 fourteen, 15 fifteen, 16 sixteen, 17 seventeen, 18 eighteen, 19 nineteen, 20 twenty, 30 thirty, 40 forty, 50 fifty, 60 sixty, 70 seventy, 80 eighty, 90 ninety, 100 one hundred. 21–99 compose: tens + unit (87 = num-80 + num-07). Glue: glue-00 `percent`, glue-01 `point`, glue-02 `points`, glue-03 `and`. Assembly: 87% = 80+7+percent; 9.5 = 9+point+5. 1 → bare point/percent, else points.
ES num: 00 cero … 20 veinte, 21 veintiuno … 29 veintinueve single words (must record, NOT composable), 30 treinta … 90 noventa, 100 cien. Glue: glue-00 `por ciento`, glue-01 `punto`, glue-02 `puntos`, glue-03 `y` (treinta y uno), glue-04 `ciento` (101+: ciento uno; standalone 100 is cien), glue-05 `un` (apocope: treinta y un puntos), glue-06 `veintiún` (before masculine noun). Nouns masculine — default masculine forms.
PL num: 00 zero, 01 jeden, 02 dwa, 03 trzy, 04 cztery, 05 pięć, 06 sześć, 07 siedem, 08 osiem, 09 dziewięć, 10 dziesięć, 11 jedenaście, 12 dwanaście, 13 trzynaście, 14 czternaście, 15 piętnaście, 16 szesnaście, 17 siedemnaście, 18 osiemnaście, 19 dziewiętnaście, 20 dwadzieścia, 30 trzydzieści, 40 czterdzieści, 50 pięćdziesiąt, 60 sześćdziesiąt, 70 siedemdziesiąt, 80 osiemdziesiąt, 90 dziewięćdziesiąt, 100 sto. 21–99 compose directly (no `i`: dwadzieścia jeden). Glue: glue-00 `procent`, glue-01 `procenty`, glue-02 `punkt`, glue-03 `punkty`, glue-04 `punktów`. Declension by last digit with teens exception: 1 → procent/punkt; 2–4 (not 12–14) → procenty/punkty; 0, 5–9, 11–14, tens → procent/punktów. Colloquial fallback: bare `procent` always acceptable.

## 4. File naming + manifest + record priority

Naming: `assets/audio/<lang>/<beat>-<nn>.mp3` (nn zero-padded; today only `en/start-00` is `mock`). Manifest keeps the existing scheme: `{"version": 1, "clips": {"<lang>:<beat>-<nn>": "available"|"mock"}}` — everything not listed falls back to synth, no code change needed.
Totals if fully recorded: legacy 360 (5x24x3) + new hype 252 (7x12x3) + numbers (EN 30+4, ES 39+7, PL 30+5) = 767 files.
Record priority: pass-big/pass-close + hurry + scoring-wait first (verdict moments), then numbers/glue, then streak/board/inspect (rarer triggers). Keep per-clip loudness matched; TTS fallback voice stays for unrecorded IDs. Pause convention `...` ≈ 300 ms.
Open item: score thresholds splitting pass-big / pass-solid / pass-close (script side ready; game logic picks the beat).

## 5. Coordinator decisions (arbitration log)

- Three parallel researchers, ONE arbiter-merged file (this one) — no multi-writer conflicts.
- EN-first clip generation, then ES/PL, per standing advisor guidance.
- Synth-first SFX (0 bytes), CC0 samples only where verified, MP3 mono universally.
- Trim audit applied to the bank at build time (section 3 replacements keep stable IDs).
- Build order after this plan: install winner → generate library → SFX set → wire → re-test.

---

# SCRIPT v2 — robust trilingual expansion (ADDS to v1; v1 IDs and trims stand)

Convention for every line below: 3–8 words, spoken style, `...` ≈ 300 ms pause, hype/celebration ONLY (no instruction, coaching, technique, equipment, prep, or in-run effort imperatives). Delivery per beat is given once in the trigger table; every line in that beat shares the beat's energy/pace with emphasis on the CAPITALIZED word (emphasis word shown in caps in the delivery column of the trigger table, applied per line at record time).

## v2.1 New beats (12 lines each per language, IDs 00–11)

EN attract (idle screen magnet): Hey you… come play! · Psst… cleaners wanted here! · Fresh room… famous cleaner? · Step right up… shine time! · Bored? … Clean something! · Who runs this room?… You do! · Shine bright… take the crown! · Looking sharp… prove it! · Clean game… this way! · Your stage… it's waiting! · Feeling fresh?… prove it! · Winners clean here… join in!
ES attract: ¡Eh tú… ven a jugar! · Psst… se buscan limpiadores… · Sala fresca… ¿estrella de la limpieza? · Acércate… hora de brillar… · ¿Aburrido?… ¡hora de brillar! · ¿Quién manda aquí?… ¡tú! · Brilla fuerte… ¡toma la corona! · Te ves bien… ¡demuéstralo! · Juego limpio… ¡por aquí! · Tu escenario… ¡te espera! · ¿Te sientes fresco?… ¡pruébalo! · Aquí ganan los que limpian… ¡entra!
PL attract: Hej ty… chodź zagrać! · Psst… tu szukają sprzątaczy! · Świeży pokój… sławny mistrz czystości? · Podejdź… czas błysku! · Nuda?… czas na blask! · Kto tu rządzi?… Ty! · Błyszcz mocno… weź koronę! · Świetna forma… udowodnij! · Czysta gra… tędy! · Twoja scena… czeka! · Czujesz świeżość?… udowodnij! · Tu wygrywają czyści… wchodź!

EN hello (first welcome): Welcome in… star player! · First visit… big cheers! · New face… fresh start! · Glad you're here… let's shine! · Welcome… the room missed you! · Rookie year… make waves! · Hello hello… ready to glow! · Fresh account… bright future! · Welcome aboard… shining crew! · New legend… loading up! · Hey newcomer… big stage! · First hello… golden days!
ES hello: Bienvenido… ¡jugador estrella! · Primera visita… ¡gran ovación! · Cara nueva… ¡inicio fresco! · Qué bueno verte… ¡a brillar! · Bienvenido… ¡la sala te extrañaba! · Temporada debut… ¡a romperla! · Hola, hola… ¡todo listo para brillar! · Cuenta nueva… ¡futuro brillante! · Bienvenido a bordo… ¡equipo brillante! · Nueva leyenda… ¡cargando! · Hola, nuevo… ¡gran escenario! · Primer hola… ¡días dorados!
PL hello: Witaj… graczu gwiazdo! · Pierwsza wizyta… wielkie brawa! · Nowa twarz… świeży start! · Dobrze, że jesteś… błyszczymy! · Witaj… pokój tęsknił! · Rok debiutanta… zrób furorę! · Cześć, cześć… czas na blask! · Nowe konto… jasna przyszłość! · Witaj na pokładzie… błyszcząca ekipa! · Nowa legenda… ładuje się! · Hej nowy… wielka scena! · Pierwsze cześć… złote dni!

EN welcome (welcome-back): Welcome back… missed that shine! · Look who's here… superstar! · Back again… love to see it! · The champ returns… wow! · Missed you… let's glow! · Return of the legend… yes! · Back in the room… beautiful! · Oh hey… ready for more? · The streak missed you… come back! · Familiar face… fresh wins! · Welcome back… encore time! · You again… the room smiles!
ES welcome: Bienvenido de nuevo… ¡extrañé ese brillo! · Mira quién vino… ¡superestrella! · Otra vez aquí… ¡qué alegría! · Vuelve el campeón… ¡guau! · Te extrañé… ¡a brillar! · Regresa la leyenda… ¡sí! · De vuelta en la sala… ¡hermoso! · Hola de nuevo… ¿listo para más? · La racha te extrañó… ¡vuelve! · Cara conocida… ¡triunfos frescos! · Bienvenido… ¡hora del bis! · Tú otra vez… ¡la sala sonríe!
PL welcome: Witaj z powrotem… brakowało blasku! · Patrzcie kto… supergwiazda! · Znowu tu… miło widzieć! · Mistrz wraca… wow! · Tęskniliśmy… błyszczymy! · Powrót legendy… tak! · Znowu w pokoju… pięknie! · O hej… czas na więcej! · Seria tęskniła… wracaj! · Znajoma twarz… świeże wygrane! · Witaj… czas na bis! · Znowu ty… pokój się uśmiecha!

EN countdown: Three… feel the buzz! · Two… almost time! · One… hold that shine! · Ready… set… glow! · Countdown on… here we go! · Three… crowd leaning in! · Two… lights on you! · One… this is it! · Mark… get that shine! · Almost live… looking sharp! · Countdown… feel that rush! · Three two one… showtime!
ES countdown: Tres… ¡siente la emoción! · Dos… ¡casi es hora! · Uno… ¡guarda ese brillo! · Listos… ¡a brillar! · Cuenta regresiva… ¡aquí vamos! · Tres… ¡el público se inclina! · Dos… ¡luces sobre ti! · Uno… ¡esto es! · Marca… ¡saca brillo! · Ya casi en vivo… ¡te ves bien! · Cuenta regresiva… ¡siente la adrenalina! · Tres dos uno… ¡showtime!
PL countdown: Trzy… poczuj dreszcz! · Dwa… prawie czas! · Jeden… trzymaj ten blask! · Gotowi… do blasku! · Odliczanie… jedziemy! · Trzy… tłum się pochyla! · Dwa… światła na tobie! · Jeden… to jest to! · Na znak… pełny blask! · Prawie na żywo… świetna forma! · Odliczanie… poczuj przypływ! · Trzy dwa jeden… showtime!

EN early (25%): Rolling… looking smooth! · Early days… great start! · First quarter… nice pace! · Warming up… already glowing! · Fresh legs… keep shining! · Opening strong… love it! · Early doors… looking elite! · Nice opening… hold that! · Starting smooth… beautiful! · First stretch… wonderful! · Early glow… keep it! · Quarter in… looking sharp!
ES early: Rodando… ¡se ve fluido! · Primeros pasos… ¡gran inicio! · Primer cuarto… ¡buen ritmo! · Calentando… ¡ya brillas! · Piernas frescas… ¡sigue brillando! · Apertura fuerte… ¡me encanta! · Desde el arranque… ¡nivel élite! · Buen arranque… ¡aguántalo! · Inicio suave… ¡hermoso! · Primer tramo… ¡maravilloso! · Brillo temprano… ¡síguelo! · Un cuarto listo… ¡te ves bien!
PL early: Ruszyło… gładko idzie! · Pierwsze kroki… mocny start! · Pierwsza ćwiartka… dobre tempo! · Rozgrzewka… już błyszczysz! · Świeże nogi… błyszcz dalej! · Mocne otwarcie… uwielbiam! · Od samego startu… klasa światowa! · Dobry początek… trzymaj to! · Gładki start… pięknie! · Pierwszy odcinek… cudownie! · Wczesny blask… trzymaj go! · Ćwiartka za nami… świetna forma!

EN late (75%): Final quarter… bring it home! · Almost done… shine hardest! · Home stretch… beautiful! · Three quarters… looking elite! · Nearly there… finish loud! · Last push… you've got this! · Closing stretch… gorgeous! · Seventy-five… still glowing! · Almost home… what a run! · Final act… make it sing! · Nearly finished… pure gold! · Last quarter… legendary!
ES late: Último cuarto… ¡cierre de oro! · Casi listo… ¡brilla más fuerte! · Recta final… ¡hermoso! · Tres cuartos… ¡se ve élite! · Ya casi… ¡cierre por todo lo alto! · Último empujón… ¡tú puedes! · Cierre increíble… ¡precioso! · Setenta y cinco… ¡sigues brillando! · Casi en casa… ¡qué carrera! · Acto final… ¡que brille! · Casi terminado… ¡oro puro! · Último cuarto… ¡legendario!
PL late: Ostatnia ćwiartka… wielki finał! · Prawie gotowe… błyszcz najmocniej! · Ostatnia prosta… pięknie! · Trzy czwarte… wygląda elitarnie! · Już prawie… finisz z hukiem! · Ostatni zryw… dasz radę! · Piękny finisz… cudownie! · Siedemdziesiąt pięć… wciąż błyszczysz! · Prawie w domu… co za bieg! · Akt ostatni… niech wybrzmi! · Prawie gotowe… czyste złoto! · Ostatnia ćwiartka… legendarnie!

EN hurry-final (last 10 s): Ten… nine… here we go! · Final ten… make it count! · Clock screaming… shine anyway! · Last seconds… pure heart! · Ten left… leave nothing! · The bell… almost ringing! · Final burst… beautiful! · Ten seconds… legendary finish! · Almost over… brightest moment! · Last call… all heart! · Final ten… glorious run! · Bell about to ring… shine!
ES hurry-final: Diez… nueve… ¡aquí vamos! · Diez finales… ¡que cuenten! · Reloj gritando… ¡brilla igual! · Últimos segundos… ¡puro corazón! · Quedan diez… ¡nada guardado! · La campana… ¡casi suena! · Ráfaga final… ¡hermoso! · Diez segundos… ¡fin legendario! · Casi acaba… ¡momento más brillante! · Última llamada… ¡todo corazón! · Diez finales… ¡carrera gloriosa! · La campana va a sonar… ¡brilla!
PL hurry-final: Dziesięć… dziewięć… jedziemy! · Ostatnie dziesięć… niech się liczy! · Zegar krzyczy… błyszcz mimo to! · Ostatnie sekundy… czyste serce! · Zostało dziesięć… nic w zapasie! · Dzwonek… zaraz zadzwoni! · Ostatni zryw… pięknie! · Dziesięć sekund… legendarny finisz! · Prawie koniec… najjaśniejszy moment! · Ostatnie wezwanie… całe serce! · Ostatnia dziesiątka… chwalebny bieg! · Dzwonek zaraz zabrzmi… błyszcz!

EN retry-far (clear miss): Not today… still shining! · Off the mark… head high! · Missed big… heart bigger! · Rough one… shake it off! · Far away… next time! · No shame… reload and glow! · Way off… beautiful effort! · Tough round… still a star! · Missed wide… keep glowing! · Bad break… lovely try! · Far from it… come back! · Off day… still golden!
ES retry-far: Hoy no… ¡sigues brillando! · Lejos de la meta… ¡cabeza en alto! · Fallo grande… ¡corazón gigante! · Ronda dura… ¡sacúdete! · Lejos… ¡la próxima! · Sin vergüenza… ¡recarga y brilla! · Muy lejos… ¡hermoso intento! · Ronda difícil… ¡sigues siendo estrella! · Por lejos… ¡sigue brillando! · Mala suerte… ¡lindo intento! · Lejos de eso… ¡vuelve! · Mal día… ¡brillo intacto!
PL retry-far: Nie dziś… wciąż błyszczysz! · Daleko od celu… głowa w górę! · Duże pudło… większe serce! · Ciężka runda… otrzep się! · Daleko… następnym razem! · Bez wstydu… wracaj i błyszcz! · Daleko obok… piękna próba! · Trudna runda… wciąż gwiazda! · Spore pudło… błyszcz dalej! · Brak farta… ładna próba! · Daleko od tego… wróć! · Gorszy dzień… wciąż na złoto!

EN streakday (2/3/5/7-day streaks): Two days… double shine! · Day two… streak is live! · Three days… hat trick! · Day three… unstoppable! · Five days… workweek warrior! · Day five… golden run! · Seven days… full week legend! · Week complete… hall of fame! · Two-day glow… keep going! · Three-day magic… wow! · Five-day fire… amazing! · Seven-day crown… take it!
ES streakday: Dos días… ¡doble brillo! · Día dos… ¡racha viva! · Tres días… ¡triplete! · Día tres… ¡imparable! · Cinco días… ¡guerrero semanal! · Día cinco… ¡racha dorada! · Siete días… ¡leyenda semanal! · Semana completa… ¡salón de la fama! · Brillo de dos días… ¡sigue! · Magia de tres días… ¡guau! · Fuego de cinco días… ¡increíble! · Corona semanal… ¡tómala!
PL streakday: Dwa dni… podwójny blask! · Dzień drugi… seria żyje! · Trzy dni… hat trick! · Dzień trzeci… nie do zatrzymania! · Pięć dni… wojownik tygodnia! · Dzień piąty… złota seria! · Siedem dni… legenda tygodnia! · Tydzień pełny… aleja sław! · Blask dwóch dni… jedź dalej! · Magia trzech dni… wow! · Ogień pięciu dni… niesamowite! · Tygodniowa korona… bierz ją!

EN best (personal best): New record… all yours! · Personal best… incredible! · Your top score… smashed! · Best ever… take a bow! · New high… beautifully done! · Record day… enjoy it! · Topped yourself… wow! · Best mark… pure gold! · New peak… stunning work! · Personal gold… forever! · Beat your best… legend! · Top of your game… yes!
ES best: Nuevo récord… ¡todo tuyo! · Marca personal… ¡increíble! · Tu mejor puntaje… ¡roto! · Mejor marca… ¡reverencia! · Nuevo máximo… ¡hermoso! · Día de récord… ¡disfrútalo! · Te superaste… ¡guau! · Mejor registro… ¡oro puro! · Nueva cima… ¡trabajo increíble! · Oro personal… ¡para siempre! · Superaste tu marca… ¡leyenda! · En tu mejor nivel… ¡sí!
PL best: Nowy rekord… cały twój! · Rekord życiowy… niesamowite! · Twój top… pobity! · Najlepszy wynik… ukłon! · Nowe maksimum… pięknie! · Dzień rekordu… ciesz się! · Rekord pobity… wow! · Najlepszy rezultat… czyste złoto! · Nowy szczyt… cudowna robota! · Osobiste złoto… na zawsze! · Rekord pobity… legenda! · Szczyt formy… tak!

EN first (first-ever game): First game… welcome legend! · Maiden run… beautiful! · Game one… history starts! · First timer… shine on! · Debut day… enjoy it! · Welcome match… play loud! · First whistle… let's glow! · Opening game… bright future! · Rookie run… superstar! · First of many… wow! · Debut done… hooked already! · Game one… golden start!
ES first: Primer juego… ¡bienvenida, leyenda! · Carrera debut… ¡hermosa! · Juego uno… ¡empieza la historia! · Primera vez… ¡a brillar! · Día de debut… ¡disfrútalo! · Juego de bienvenida… ¡a lo grande! · Primer silbato… ¡brillemos! · Juego de apertura… ¡futuro brillante! · Carrera novata… ¡superestrella! · Primero de muchos… ¡guau! · Debut listo… ¡ya enganchado! · Juego uno… ¡inicio dorado!
PL first: Pierwsza gra… witaj legendo! · Debiutancki bieg… pięknie! · Gra numer jeden… historia startuje! · Pierwszy występ… błyszcz! · Dzień debiutu… ciesz się! · Mecz powitalny… z przytupem! · Pierwszy gwizdek… błyszczymy! · Gra otwarcia… jasna przyszłość! · Bieg nowicjusza… supergwiazda! · Pierwsza z wielu… wow! · Debiut za nami… wciąga od razu! · Gra pierwsza… złoty start!

EN top1 (new #1): Number one… the crown! · Top spot… all yours! · King of the board… wow! · Number one… take a bow! · Best in the house… yes! · Top of the pile… glowing! · The throne… is yours! · Number one… legendary! · Peak position… enjoy it! · First place… pure gold! · Top dog… shining bright! · Number one… forever!
ES top1: Número uno… ¡la corona! · Primer puesto… ¡todo tuyo! · Rey del tablero… ¡guau! · Número uno… ¡reverencia! · Lo mejor de la casa… ¡sí! · Cima total… ¡brillando! · El trono… ¡es tuyo! · Número uno… ¡legendario! · Puesto cumbre… ¡disfrútalo! · Primer lugar… ¡oro puro! · El mejor… ¡brillando fuerte! · Número uno… ¡para siempre!
PL top1: Numer jeden… korona! · Pierwsze miejsce… całe twoje! · Król tabeli… wow! · Numer jeden… ukłon! · Najlepszy wynik tutaj… tak! · Sam szczyt… błyszczysz! · Tron… jest twój! · Numer jeden… legendarnie! · Pozycja szczytowa… ciesz się! · Pierwsze miejsce… czyste złoto! · Najlepszy… jasno błyszczysz! · Numer jeden… na zawsze!

EN demo (practice mode, honest + hype): Practice run… still shining! · Demo mode… full style! · Warm-up round… looking good! · Practice game… beautiful! · Rehearsal… pure gold! · Demo delight… enjoy it! · Practice makes sparkle… wow! · Warm-up done… glowing! · No pressure run… gorgeous! · Practice lap… amazing! · Training glow… take a bow! · Demo day… shining anyway!
ES demo: Ronda de práctica… ¡sigues brillando! · Modo demo… ¡pleno estilo! · Calentamiento… ¡se ve bien! · Juego de práctica… ¡hermoso! · Ensayo… ¡oro puro! · Demo genial… ¡disfrútalo! · La práctica brilla… ¡guau! · Calentamiento listo… ¡radiante! · Sin presión… ¡precioso! · Vuelta de práctica… ¡increíble! · Brillo de entrenamiento… ¡reverencia! · Día de demo… ¡brillando igual!
PL demo: Runda treningowa… wciąż błyszczysz! · Tryb demo… pełny styl! · Rozgrzewka… wygląda dobrze! · Gra treningowa… pięknie! · Próba… czyste złoto! · Super demo… ciesz się! · Trening błyszczy… wow! · Rozgrzewka gotowa… lśnisz! · Bez presji… cudownie! · Okrążenie treningowe… niesamowite! · Treningowy blask… ukłon! · Dzień demo… błyszczysz tak samo!

EN crowd (spectator screen): Ladies and gentlemen… wow! · Look at that board… beautiful! · The crowd goes wild… yes! · What a lineup… enjoy! · Spectacular board… take a bow! · Fans are watching… shine on! · Big screen energy… wow! · The arena loves it… yes! · Look at those scores… gold! · Crowd favorite… right here! · Board on fire… amazing! · Everyone's watching… glow!
ES crowd: Damas y caballeros… ¡guau! · Miren ese tablero… ¡hermoso! · El público enloquece… ¡sí! · Qué cartelera… ¡disfruten! · Tablero espectacular… ¡reverencia! · Los fans miran… ¡a brillar! · Energía de pantalla grande… ¡guau! · La arena lo ama… ¡sí! · Miren esos puntajes… ¡oro! · Favorito del público… ¡aquí! · Tablero en llamas… ¡increíble! · Todos miran… ¡brilla!
PL crowd: Panie i panowie… wow! · Spójrzcie na tabelę… pięknie! · Tłum szaleje… tak! · Co za zestawienie… cieszcie się! · Spektakularna tabela… ukłon! · Fani patrzą… błyszcz! · Energia wielkiego ekranu… wow! · Arena to kocha… tak! · Spójrzcie na wyniki… złoto! · Faworyt publiczności… tutaj! · Tabela w ogniu… niesamowite! · Wszyscy patrzą… błyszcz!

EN record (inspection saved): Saved… legendary work! · In the books… gold star! · Recorded… beautifully done! · Filed away… shining proof! · Logged… pure professionalism! · Saved forever… wow! · On record… amazing job! · Booked… take a bow! · Stored… sparkling history! · Recorded… hall of fame! · Saved… what a pro! · In the log… glowing!
ES record: Guardado… ¡trabajo legendario! · En los libros… ¡estrella dorada! · Registrado… ¡hermoso trabajo! · Archivado… ¡prueba brillante! · Anotado… ¡puro profesionalismo! · Guardado siempre… ¡guau! · En acta… ¡trabajo increíble! · Agendado… ¡reverencia! · Almacenado… ¡historia brillante! · Registrado… ¡salón de la fama! · Guardado… ¡qué profesional! · En el registro… ¡radiante!
PL record: Zapisane… legendarna robota! · W księgach… złota gwiazdka! · Zarejestrowane… piękna robota! · Zarchiwizowane… błyszczący dowód! · Zanotowane… czysty profesjonalizm! · Zapisane na zawsze… wow! · W protokole… niesamowita robota! · Zaksięgowane… ukłon! · Przechowane… błyszcząca historia! · Zarejestrowane… aleja sław! · Zapisane… co za profesjonalista! · W dzienniku… lśniąco!

EN edge (camera denied / offline / back online — 4 each): Camera shy… no worries! · No lens… still shining! · Lens away… play on! · Offline mode… full style! · No signal… still glowing! · Offline… game still on! · Back online… welcome back! · Signal's back… let's glow! · Reconnected… beautiful! · We're live… shine time! · Connection restored… wow! · Back in action… enjoy!
ES edge: Cámara tímida… ¡sin pena! · Sin lente… ¡sigues brillando! · Lente fuera… ¡sigue jugando! · Modo sin conexión… ¡pleno estilo! · Sin señal… ¡sigues radiante! · Desconectado… ¡el juego sigue! · De vuelta en línea… ¡bienvenido! · Volvió la señal… ¡a brillar! · Reconectado… ¡hermoso! · En vivo… ¡hora de brillar! · Conexión restaurada… ¡guau! · De vuelta en acción… ¡disfruta!
PL edge: Nieśmiała kamera… bez obaw! · Bez obiektywu… wciąż błyszczysz! · Obiektyw schowany… graj dalej! · Tryb offline… pełny styl! · Bez sygnału… wciąż lśnisz! · Offline… gra trwa! · Znowu online… witaj z powrotem! · Sygnał wrócił… błyszczymy! · Połączono… pięknie! · Jesteśmy na żywo… czas błysku! · Połączenie przywrócone… wow! · Znowu w akcji… ciesz się!

## v2.2 Numbers + time callouts (composition rules)

EN: num 00–20 as words; 30/40/50/60/70/80/90 tens; 21–99 = tens + unit (87 = eighty + seven); 100 one hundred. Glue: percent / point (1) / points / and. 87% = eighty + seven + percent. 9.5 = nine + point + five. Time: seconds 0–59 reuse num; glue time-00 `second`, time-01 `seconds`, time-02 `minute`, time-03 `minutes`; 1:30 = one + minute + thirty + seconds. 0 seconds always plural.
ES: num 00–20 as words; 21–29 SINGLE words (veintiuno…veintinueve — record all, never compose); 30–99 = tens + y + unit (treinta y uno); 100 cien standalone, ciento + rest for 101+ (ciento uno). Glue: por ciento (invariable), punto/puntos, y, un (apocope before masculine noun: un punto, treinta y un puntos — never uno puntos), veintiún (before masculine noun: veintiún puntos, veintiún segundos), una (1 before feminine time nouns), veintiuna (21 before feminine time nouns). Time glue: time-00 `segundo`, time-01 `segundos`, time-02 `minuto`, time-03 `minutos` — masculine nouns, so: un segundo, veintiún segundos, un minuto. Standalone 1/21 keep uno/veintiuno or apocopate before por ciento (broadcast LatAm standard: un/veintiún por ciento).
PL: num 00–20 (00 zero … 20 dwadzieścia), tens 30–90 as words; 21–99 compose directly, no connector (dwadzieścia jeden). Extra numeral clips: jedna (feminine 1), dwie (feminine 2). Glue with correct declension: standalone 1 → procent/punkt/jedna minuta/jedna sekunda; standalone 2 → procenty/punkty/dwie minuty/dwie sekundy; compound numbers ending in 1 (21, 31, 41…) → genitive plural ALWAYS (dwadzieścia jeden procentów/punktów/minut/sekund — never singular); compound 22–24, 32–34… → dwie minuty/dwie sekundy (feminine), procenty/punkty (masc); teens 11–19 and tens → procent/punktów/minut/sekund. Colloquial fallback bare procent always acceptable if selection logic is deferred.

## v2.3 Delivery + trigger table (applies to every line in the beat)

| Beat | Trigger | Energy / pace | Emphasis rule |
|---|---|---|---|
| attract | idle 20 s, no input | Bouncy, medium-fast | CAP the invitation verb |
| hello | first-ever session | Warm, welcoming | CAP the welcome word |
| welcome | returning session | Warm, familiar | CAP the return word |
| countdown | 3-2-1-GO | Rising, accelerating | CAP the number word |
| early | 25% elapsed | Bright, steady | CAP the motion word |
| mid | 50% elapsed | Bright, steady | CAP the praise word |
| late | 75% elapsed | Urgent-bright | CAP the time word |
| hurry | 60 s left on long jobs | Sparkling, quick | CAP the wonder word |
| hurry-final | 10 s left | Electric, fastest | CAP the bell word |
| finish | timer/complete | Triumphant, held notes | CAP the finish word |
| scoring-wait | analysis running | Playful suspense | CAP the waiting word |
| pass / pass-big / pass-close | verdict by margin | Big / warm / relieved respectively | CAP the glory word |
| retry / retry-far | verdict miss | Soft, lifting (never sad) | CAP the hope word |
| streak / streakday | streak events | Bouncy, celebratory | CAP the count word |
| best / first | records broken | Proud, ringing | CAP the record word |
| board / top1 | leaderboard moment | Grand, announcer | CAP the rank word |
| demo | demo-mode game | Light, honest joy | CAP the fun word |
| crowd | spectator view shown | Big-room boom | CAP the crowd word |
| record | inspection saved | Professional pride | CAP the saved word |
| edge | camera denied / offline / back online | Reassuring, steady | CAP the comfort word |
| num / glue / time | score + time callouts | Crisp, metronomic | CAP the value word |

## v2.4 Coverage table (beats x variants x languages + total NEW v2 clips)

16 new beats x 12 lines x 3 langs = 576 new clips. Legacy 360 (5x24x3, trims applied) + new hype 252 (7x12x3 from v1) + v2 new 576 + numbers (EN 30+4+4 time, ES 39+7+4 time, PL 32+5+8 time incl. jedna/dwie + time nouns) ≈ 1,316 files under assets/audio/<lang>/<beat>-<nn>.mp3. Record priority: verdict moments (pass tiers, retry tiers, hurry-final), then numbers/time glue, then streak/board/inspect/record/edge, then attract/hello/welcome/countdown/early/late/demo/crowd. Manifest keeps the available|mock scheme; TTS fallback voice stays for unrecorded IDs. Judge sign-off: all ES/PL lines reviewed for naturalness, gender lock, and declension; corrections applied above; v2 scripts approved for recording.
