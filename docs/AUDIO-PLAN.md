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
EN pass-big: Massive win… absolutely glowing! · Blown away… perfect score vibes! · History made… look at that! · Unreal result… take a bow! · Total triumph… room transformed! · Legendary clean… hall of fame! · Off the charts… incredible! · A masterpiece… certified gold! · Best yet… simply flawless! · Record breaker… enjoy it! · Pure perfection… wow wow! · Champion level… undisputed!
EN pass-close: Squeaked through… still counts! · By a whisker… you made it! · Just enough… celebrate it! · Narrow win… sweet relief! · Cut it close… beautiful! · Over the line… phew! · Made it… by a hair! · Close one… but it's yours! · Scraped by… take it! · Photo finish… you passed! · Barely… but brilliantly! · Survived… and shining!
EN streak: Two in a row… on fire! · Streak alive… looking golden! · Three straight… unstoppable! · Winning habit… love it! · Another one… incredible run! · Streak growing… superstar! · Back to back… beautiful! · On a roll… amazing! · Four running… what form! · Streak day… celebrate big! · Unbeaten run… take a bow! · Hot streak… pure gold!
EN board: Top of the board… wow! · New high score… amazing! · Leaderboard loves you… yes! · Climbing high… beautiful! · Top five… superstar status! · Number one… take a bow! · Board updated… looking elite! · High ranks… well earned! · Smashed it… top spot! · Best of the best… wow! · Name in lights… gorgeous! · Top tier… enjoy it!
EN inspect: Past glories… beautiful memories! · Hall of fame… pure gold! · Your records… shining bright! · History shelf… full of wins! · Old victories… still gleaming! · Trophy case… looking full! · Saved triumphs… enjoy them! · Golden lane… forever clean! · Every win… kept forever! · Record book… star entry! · Past sparkles… collected here! · Legacy growing… beautiful!

ES hurry: ¡Diez segundos… qué final! · Recta final… ¡se ve glorioso! · Casi en casa… ¡final hermoso! · ¡Qué carrera… momento mágico! · Últimos segundos… ¡pura magia! · Cierre total… ¡trabajo increíble! · Ya viene… ¡la campana! · Cuenta atrás… ¡me encanta! · Tan cerca… ¡te ves genial! · Momentos finales… ¡qué corazón! · Ya casi… ¡vista preciosa! · Reloj corriendo… ¡qué brillo!
ES scoring-wait: Jueces mirando… ¡qué nervios! · Conteniendo el aliento… ¡ya viene! · Notas en camino… ¡qué emoción! · Redoble… ¡esto es! · Jueces decidiendo… ¡momentos guau! · Esperando… ¡qué carrera! · Sumando puntos… ¡pinta bien! · Momento de verdad… ¡brillo! · Marcador despierta… ¡ya viene! · Dedos cruzados… ¡trabajo hermoso! · El veredicto… ¡casi aquí! · Suspenso… ¡estuviste genial!
ES pass-big: ¡Victoria enorme… brillo total! · Impresionante… ¡vibras perfectas! · Historia hecha… ¡mira eso! · Resultado irreal… ¡reverencia! · Triunfo total… ¡sala transformada! · Limpieza legendaria… ¡salón de fama! · Fuera de serie… ¡increíble! · Obra maestra… ¡oro certificado! · Lo mejor… ¡simplemente perfecto! · Récord roto… ¡disfrútalo! · Pura perfección… ¡guau guau! · Nivel campeón… ¡indiscutible!
ES pass-close: Pasó raspando… ¡igual vale! · Por un pelo… ¡lo lograste! · Justo bastó… ¡celébralo! · Victoria ajustada… ¡qué alivio! · Cierre apretado… ¡hermoso! · Cruzó la línea… ¡uf! · Lo logró… ¡por un pelo! · Fue cerrado… ¡pero es tuyo! · Apenas pasó… ¡qué alegría! · Final de foto… ¡pasaste! · Apenas… ¡pero brillante! · Sobrevivió… ¡y brillando!
ES streak: Dos seguidas… ¡en llamas! · Racha viva… ¡brillo dorado! · Tres al hilo… ¡imparable! · Hábito ganador… ¡me encanta! · Otra más… ¡racha increíble! · Racha crece… ¡superestrella! · Seguidas perfectas… ¡hermoso! · En racha… ¡increíble! · Cuatro al hilo… ¡qué forma! · Día de racha… ¡celebra grande! · Invicto total… ¡reverencia! · Racha caliente… ¡oro puro!
ES board: Top del tablero… ¡guau! · Récord nuevo… ¡increíble! · El tablero te ama… ¡sí! · Subiendo alto… ¡hermoso! · Top cinco… ¡estatus estrella! · Número uno… ¡reverencia! · Tabla al día… ¡se ve élite! · Rangos altos… ¡bien ganado! · A la cima… ¡primer puesto! · Lo mejor de lo mejor… ¡guau! · Nombre en luces… ¡precioso! · Nivel top… ¡disfrútalo!
ES inspect: Glorias pasadas… ¡recuerdos hermosos! · Salón de fama… ¡oro puro! · Tus marcas… ¡brillan fuerte! · Estante histórico… ¡lleno de triunfos! · Victorias viejas… ¡siguen brillando! · Vitrina llena… ¡se ve genial! · Triunfos guardados… ¡a disfrutar! · Paseo dorado… ¡limpieza eterna! · Cada triunfo… ¡guardado siempre! · Libro de récords… ¡entrada estrella! · Brillos pasados… ¡colección aquí! · Legado crece… ¡hermoso!

PL hurry: Dziesięć sekund… co za finisz! · Ostatnia prosta… wygląda bosko! · Prawie w domu… piękny finał! · Co za bieg… czysta magia! · Ostatnie sekundy… wielka magia! · Wielki finał… cudowna robota! · Już nadchodzi… dzwonek! · Odliczanie… uwielbiam to! · Tak blisko… wyglądasz super! · Ostatnie chwile… co za serce! · Już prawie… cudowny widok! · Zegar tyka… co za blask!
PL scoring-wait: Sędziowie patrzą… co za nerwy! · Wstrzymany oddech… już jest! · Wyniki lecą… co za emocje! · Werble… to jest to! · Sędziowie radzą… momenty wow! · Czekamy… co za bieg! · Liczą punkty… wygląda dobrze! · Moment prawdy… blask! · Tablica budzi się… już idzie! · Kciuki trzymane… piękna robota! · Werdykt… już prawie! · Napięcie… byłeś świetny!
PL pass-big: Wielka wygrana… pełny blask! · Szok… perfekcyjne wibracje! · Historia pisze się… patrz! · Nierealny wynik… wielki ukłon! · Pełny triumf… pokój odmieniony! · Legendarna czystość… aleja gwiazd! · Poza skalą… niesamowite! · Arcydzieło… złoto certyfikowane! · Najlepszy występ… po prostu perfekcja! · Rekord pobity… ciesz się! · Czysta perfekcja… wow wow! · Poziom mistrza… bezdyskutacyjnie!
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
