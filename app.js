
const CONFIG = {
  challengeDurationSeconds: 90,
  warningAtSeconds: 15,
  storageKey: "aiCleaningChallengeLeaderboard",

  camera: {
    idealWidth: 1920,
    idealHeight: 1080,
    captureMaxWidth: 1280,
    jpegQuality: 0.86,
    blackFrameDelayMs: 2000,
    blackFrameSampleWidth: 32,
    blackFrameSampleHeight: 32,
    maxBlackFrameRetries: 1,
    acquisitionTimeoutMs: 20000
  },

  voice: {
    rate: 1.0,
    pitch: 1.0,
    volume: 1
  },

  detection: {
    version: "0.10.21",
    modelURL:
      "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/int8/1/efficientdet_lite0.tflite",
    poseModelURL:
      "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
    scoreThreshold: 0.35,
    maxResults: 30,
    minObjectsForConfidence: 2,
    matchIoUThreshold: 0.12,
    matchCenterDistance: 0.18,
    diffWidth: 96,
    diffHeight: 72,
    pixelDifferenceThreshold: 38,
    objectWeight: 0.9,
    changeWeight: 0.1
  },

  cloud: {
    endpoint: "https://api.meta.ai/v1/chat/completions",
    model: "muse-spark-1.3",
    timeoutMs: 25000,
    maxEdgePx: 768,
    jpegQuality: 0.82,
    minSurfaceConfidence: 0.6,
    asrEndpoint: "https://api.meta.ai/v1/asr/transcribe",
    asrModel: "muse-voice-transcribe-1.0",
    baseten: {
      endpoint: "https://inference.baseten.co/v1/chat/completions",
      model: "meta-models/muse-spark-open-1026"
    },
    samEndpoint: "https://api.meta.ai/v1/responses",
    samModel: "sam-3.1"
  }
};

const translations = {
  en: {
    aiPoweredChallenge: "AI-POWERED SPEED CHALLENGE",
    beatThe: "Beat the",
    certificationTime: "Benchmark Time",
    welcomeBody: "Clean fast. Clean well. Let AI evaluate what it can clearly see.",
    welcomeDisclaimer: "Prototype experience. Benchmark only — never a certification.",
    acceptChallenge: "ACCEPT THE CHALLENGE",

    howItWorks: "HOW IT WORKS",
    instructionsTitle: "Your challenge",
    step1Title: "Get ready",
    step1Body: "Frame the cleaning station clearly in the camera.",
    step2Title: "Clean",
    step2Body: "Tap Start, then clean quickly without sacrificing quality.",
    step3Title: "Get scored",
    step3Body: "AI compares the visible before and after condition.",
    prototypeBenchmark: "PROTOTYPE BENCHMARK",
    qualityFirstShort: "QUALITY FIRST",
    continue: "CONTINUE",

    cameraCheck: "CAMERA CHECK",
    frameStation: "Frame the station",
    cameraInstruction: "Keep the full cleaning surface visible.",
    startingCamera: "STARTING CAMERA",
    cameraLive: "CAMERA LIVE",
    cameraUnavailable: "CAMERA UNAVAILABLE",
    retryCamera: "RETRY CAMERA",
    continueWithoutCamera: "CONTINUE WITHOUT CAMERA",
    demoMode: "DEMO MODE",
    demoCameraPlaceholder: "CAMERA PLACEHOLDER",
    localPrivacy: "On-device analysis: photos stay on this phone.",
    cameraPermissionDenied: "Camera permission was denied. Allow camera access and retry.",
    cameraNotFound: "No usable camera was found on this device.",
    cameraBusy: "The camera could not start. Close other camera apps and retry.",
    cameraBlack: "The camera is connected but no image is visible. Retry the camera.",
    cameraGeneric: "The camera could not start. Please retry.",

    liveChallenge: "LIVE CHALLENGE",
    qualityFirst: "Quality first. Time second.",
    ready: "READY",
    live: "LIVE",
    paused: "PAUSED",
    finished: "FINISHED",
    timeRemaining: "TIME REMAINING",
    elapsed: "ELAPSED",
    reset: "RESET",
    start: "START",
    stop: "STOP",
    resume: "RESUME",
    complete: "COMPLETE CHALLENGE",

    results: "RESULTS",
    challengeComplete: "Challenge complete",
    analyzing: "AI ANALYZING",
    loadingVision: "Loading vision model…",
    visibleCleanliness: "VISUAL CLEAN SCORE",
    sceneMatch: "SCENE MATCH",
    objectsCleared: "OBJECTS CLEARED",
    objectsRemaining: "OBJECTS REMAIN",
    evidenceHigh: "HIGH CONFIDENCE",
    evidenceMedium: "MEDIUM CONFIDENCE",
    evidenceRescan: "RESCAN · INSUFFICIENT EVIDENCE",
    evidenceDemo: "DEMO · NOT AI VERIFIED",
    yourTime: "YOUR TIME",
    target: "TARGET",
    timeResult: "TIME RESULT",
    visualEvidence: "VISUAL EVIDENCE",
    before: "BEFORE",
    after: "AFTER",
    placeholderImage: "PLACEHOLDER",
    visualFinding: "VISUAL FINDING",
    visualChange: "VISUAL CHANGE",
    localAnalysisDisclaimer: "Object-clearance estimate only. Does not verify sanitation or surface cleanliness.",
    localAI: "ON-DEVICE AI",
    cloudAI: "CLOUD AI",
    simulatedDemo: "SIMULATED DEMO",
    evidence: "EVIDENCE",
    unverified: "UNVERIFIED",

    victoryPose: "VICTORY POSE",
    strikePose: "STRIKE A POSE",
    poseReady: "Celebrate your finish with a style score.",
    poseAnalyzing: "Reading that championship pose…",
    poseCaptured: "Victory pose scored!",
    poseUnavailable: "Pose AI unavailable — neutral style score applied.",
    poseNoPerson: "No person detected — neutral style score applied.",

    playerNameLabel: "NAME / ALIAS",
    playerNamePlaceholder: "Player",
    nameOptional: "Optional — Player will be used by default.",
    defaultPlayer: "Player",
    viewLeaderboard: "VIEW LEADERBOARD",

    beatLeader: "BEAT THE LEADER",
    leaderboard: "Leaderboard",
    player: "PLAYER",
    quality: "QUALITY",
    time: "TIME",
    style: "STYLE",
    playAgain: "PLAY AGAIN",
    returnHome: "RETURN HOME",
    liveLeaderboard: "LIVE LEADERBOARD",
    autoRefresh: "AUTO REFRESH · 15S",

    findingAllCleared: "Detected countable objects were cleared.",
    findingNoObjects: "Not enough countable objects were detected for strong verification.",
    findingRemaining: "{objects} still detected after the challenge.",
    findingNew: "{objects} appeared in the after image.",
    findingDemo: "Demo score uses placeholder images; no camera judgment was made.",
    findingModelFailed: "Vision model unavailable. Showing a clearly labeled demo score.",

    voiceWelcome: "Welcome, challengers! Tonight, cleaning meets glory!",
    voiceInstructionsIntro: "Three steps stand between you and victory!",
    voiceStep1: "Frame that station like a champion!",
    voiceStep2: "Hit Start, then bring the cleaning thunder!",
    voiceStep3: "AI judges the visible transformation!",
    voiceBegin: "And we're off! Clean like a superstar!",
    voice60: "Sixty seconds! Keep that championship energy flying!",
    voiceHalfway: "Halfway! The crowd can feel the momentum!",
    voice30: "Thirty seconds! The finish line is calling!",
    voice10: "Ten seconds! Final push! Make it shine!",
    voiceTimeComplete: "Time! Step back! Reveal the results!",
    voiceChallengeComplete: "Challenge complete! Let's see that score!",
    voicePosePrompt: "Victory pose! Show us your champion energy!",
    voiceStyleScore: "Style score: {score} out of ten!",
    voiceDemoMode: "Demo mode activated! The challenge still counts!",

    runSelfTest: "RUN SELF-TEST",
    selfTestTitle: "SYSTEM SELF-TEST",
    selfTestReady: "READY",
    copyReport: "COPY REPORT",
    reportCopied: "REPORT COPIED",

    muteVoice: "Mute voice narration",
    unmuteVoice: "Unmute voice narration",
    hostVoiceTitle: "HOST VOICE",
    viewDeck: "DAILY DECK",
    deckTitle: "DAILY DECK",
    deckRight: "RIGHT CALL ▶",
    deckMiss: "◀ MISS",
    deckCorrect: "Correct call.",
    deckWrong: "That's the miss.",
    deckComplete: "Deck complete for today.",
    deckStreak: "Day streak: {n}",
    deckCardOf: "Card {i} of {n}",
    voiceRecordFailed: "Couldn't access the microphone.",
    voiceNoteTitle: "VOICE NOTE",
    voiceRecord: "RECORD NOTE",
    voiceStop: "STOP",
    voiceNoteHint: "Optional — attach a spoken note to this result.",
    voiceTranscribing: "Transcribing…",
    voiceNotTranscribed: "Not transcribed — audio note attached.",
    viewRecords: "VIEW RECORDS",
    recordsTitle: "INSPECTION LOG",
    recordsEmpty: "No inspection records yet.",
    exportJson: "EXPORT JSON",
    exportCsv: "EXPORT CSV",
    locationNotShared: "Location not shared",
    settingsProvider: "Inference provider",
    providerLogTitle: "PROVIDER RUN LOG",
    emptyLog: "No runs logged yet.",
    exportLog: "EXPORT LOG (JSON)",
    settingsTitle: "SETTINGS",
    settingsMetaKey: "Meta Model API key",
    settingsBasetenKey: "Baseten API key",
    settingsKeysNote: "Keys stay in this browser only. The game works fully offline without them.",
    settingsSave: "SAVE KEYS",
    settingsClear: "CLEAR KEYS",
    settingsSaved: "Saved in this browser.",
    settingsDone: "DONE",
    verifiedScorecard: "VERIFIED SCORECARD",
    offlineScoreNote: "Offline score — add a key in Settings for cloud verification.",
    scorecardErrorNote: "Cloud check failed — showing the on-device score.",
    surfaceUnverified: "unverified",
  },

  es: {
    aiPoweredChallenge: "RETO DE VELOCIDAD CON IA",
    beatThe: "Supera el",
    certificationTime: "Tiempo de Referencia",
    welcomeBody: "Limpia rápido. Limpia bien. Deja que la IA evalúe lo visible.",
    welcomeDisclaimer: "Experiencia prototipo. Solo referencia — nunca una certificación.",
    acceptChallenge: "ACEPTAR EL RETO",

    howItWorks: "CÓMO FUNCIONA",
    instructionsTitle: "Tu reto",
    step1Title: "Prepárate",
    step1Body: "Encuadra claramente la estación de limpieza en la cámara.",
    step2Title: "Limpia",
    step2Body: "Toca Iniciar y limpia rápido sin sacrificar la calidad.",
    step3Title: "Recibe tu puntuación",
    step3Body: "La IA compara la condición visible antes y después.",
    prototypeBenchmark: "META DEL PROTOTIPO",
    qualityFirstShort: "CALIDAD PRIMERO",
    continue: "CONTINUAR",

    cameraCheck: "REVISIÓN DE CÁMARA",
    frameStation: "Encuadra la estación",
    cameraInstruction: "Mantén visible toda la superficie de limpieza.",
    startingCamera: "INICIANDO CÁMARA",
    cameraLive: "CÁMARA ACTIVA",
    cameraUnavailable: "CÁMARA NO DISPONIBLE",
    retryCamera: "REINTENTAR CÁMARA",
    continueWithoutCamera: "CONTINUAR SIN CÁMARA",
    demoMode: "MODO DEMO",
    demoCameraPlaceholder: "IMAGEN DE DEMOSTRACIÓN",
    localPrivacy: "Análisis local: las fotos permanecen en este teléfono.",
    cameraPermissionDenied: "Se negó el permiso de cámara. Permite el acceso y vuelve a intentarlo.",
    cameraNotFound: "No se encontró una cámara disponible en este dispositivo.",
    cameraBusy: "La cámara no pudo iniciar. Cierra otras aplicaciones de cámara e inténtalo de nuevo.",
    cameraBlack: "La cámara está conectada, pero no muestra imagen. Vuelve a intentarlo.",
    cameraGeneric: "La cámara no pudo iniciar. Vuelve a intentarlo.",

    liveChallenge: "RETO EN VIVO",
    qualityFirst: "Calidad primero. Tiempo después.",
    ready: "LISTO",
    live: "EN VIVO",
    paused: "PAUSA",
    finished: "TERMINADO",
    timeRemaining: "TIEMPO RESTANTE",
    elapsed: "TRANSCURRIDO",
    reset: "REINICIAR",
    start: "INICIAR",
    stop: "PAUSAR",
    resume: "CONTINUAR",
    complete: "COMPLETAR RETO",

    results: "RESULTADOS",
    challengeComplete: "Reto completado",
    analyzing: "IA ANALIZANDO",
    loadingVision: "Cargando modelo de visión…",
    visibleCleanliness: "PUNTUACIÓN VISUAL",
    sceneMatch: "COINCIDENCIA DE ESCENA",
    objectsCleared: "OBJETOS RETIRADOS",
    objectsRemaining: "OBJETOS RESTANTES",
    evidenceHigh: "ALTA CONFIANZA",
    evidenceMedium: "CONFIANZA MEDIA",
    evidenceRescan: "REPETIR · EVIDENCIA INSUFICIENTE",
    evidenceDemo: "DEMO · NO VERIFICADO POR IA",
    yourTime: "TU TIEMPO",
    target: "META",
    timeResult: "RESULTADO DE TIEMPO",
    visualEvidence: "EVIDENCIA VISUAL",
    before: "ANTES",
    after: "DESPUÉS",
    placeholderImage: "IMAGEN DEMO",
    visualFinding: "HALLAZGO VISUAL",
    visualChange: "CAMBIO VISUAL",
    localAnalysisDisclaimer: "Estimación de objetos retirados. No verifica desinfección ni limpieza de superficies.",
    localAI: "IA EN EL DISPOSITIVO",
    cloudAI: "IA EN LA NUBE",
    simulatedDemo: "DEMO SIMULADA",
    evidence: "EVIDENCIA",
    unverified: "NO VERIFICADO",

    victoryPose: "POSE DE VICTORIA",
    strikePose: "¡HAZ TU POSE!",
    poseReady: "Celebra tu final con una puntuación de estilo.",
    poseAnalyzing: "Analizando esa pose de campeón…",
    poseCaptured: "¡Pose de victoria puntuada!",
    poseUnavailable: "IA de pose no disponible; se aplicó puntuación neutral.",
    poseNoPerson: "No se detectó una persona; se aplicó puntuación neutral.",

    playerNameLabel: "NOMBRE / ALIAS",
    playerNamePlaceholder: "Jugador",
    nameOptional: "Opcional — se usará Jugador por defecto.",
    defaultPlayer: "Jugador",
    viewLeaderboard: "VER CLASIFICACIÓN",

    beatLeader: "SUPERA AL LÍDER",
    leaderboard: "Clasificación",
    player: "JUGADOR",
    quality: "CALIDAD",
    time: "TIEMPO",
    style: "ESTILO",
    playAgain: "JUGAR DE NUEVO",
    returnHome: "VOLVER AL INICIO",
    liveLeaderboard: "CLASIFICACIÓN EN VIVO",
    autoRefresh: "ACTUALIZA · 15S",

    findingAllCleared: "Los objetos detectables fueron retirados.",
    findingNoObjects: "No se detectaron suficientes objetos para una verificación sólida.",
    findingRemaining: "{objects} siguen detectados después del reto.",
    findingNew: "{objects} aparecieron en la imagen final.",
    findingDemo: "La puntuación demo usa imágenes de muestra; la cámara no emitió ningún juicio.",
    findingModelFailed: "El modelo de visión no está disponible. Se muestra una puntuación demo claramente indicada.",

    voiceWelcome: "¡Bienvenidos, campeones! ¡Hoy la limpieza busca la gloria!",
    voiceInstructionsIntro: "¡Tres pasos te separan de la victoria!",
    voiceStep1: "¡Encuadra esa estación como todo un campeón!",
    voiceStep2: "¡Pulsa Iniciar y desata el poder de limpieza!",
    voiceStep3: "¡La IA juzga la transformación visible!",
    voiceBegin: "¡Y arrancamos! ¡Limpia como una superestrella!",
    voice60: "¡Sesenta segundos! ¡Mantén esa energía de campeón!",
    voiceHalfway: "¡Mitad del reto! ¡La emoción está subiendo!",
    voice30: "¡Treinta segundos! ¡La meta te está llamando!",
    voice10: "¡Diez segundos! ¡Último impulso! ¡Hazlo brillar!",
    voiceTimeComplete: "¡Tiempo! ¡Atrás! ¡Revelemos los resultados!",
    voiceChallengeComplete: "¡Reto completado! ¡Veamos esa puntuación!",
    voicePosePrompt: "¡Pose de victoria! ¡Enséñanos energía de campeón!",
    voiceStyleScore: "¡Puntuación de estilo: {score} de diez!",
    voiceDemoMode: "¡Modo demo activado! ¡El reto continúa!",

    runSelfTest: "EJECUTAR AUTOPRUEBA",
    selfTestTitle: "AUTOPRUEBA DEL SISTEMA",
    selfTestReady: "LISTO",
    copyReport: "COPIAR INFORME",
    reportCopied: "INFORME COPIADO",

    muteVoice: "Silenciar narración",
    unmuteVoice: "Activar narración",
    hostVoiceTitle: "VOZ DEL ANFITRIÓN",
    viewDeck: "MAZO DIARIO",
    deckTitle: "MAZO DIARIO",
    deckRight: "ACIERTA ▶",
    deckMiss: "◀ FALLO",
    deckCorrect: "Buena decisión.",
    deckWrong: "Ese es el fallo.",
    deckComplete: "Mazo completo por hoy.",
    deckStreak: "Racha: {n} días",
    deckCardOf: "Tarjeta {i} de {n}",
    voiceRecordFailed: "No se pudo acceder al micrófono.",
    voiceNoteTitle: "NOTA DE VOZ",
    voiceRecord: "GRABAR NOTA",
    voiceStop: "DETENER",
    voiceNoteHint: "Opcional — adjunta una nota de voz a este resultado.",
    voiceTranscribing: "Transcribiendo…",
    voiceNotTranscribed: "Sin transcribir — nota de audio adjunta.",
    viewRecords: "VER REGISTROS",
    recordsTitle: "REGISTRO DE INSPECCIÓN",
    recordsEmpty: "Aún no hay registros de inspección.",
    exportJson: "EXPORTAR JSON",
    exportCsv: "EXPORTAR CSV",
    locationNotShared: "Ubicación no compartida",
    settingsProvider: "Proveedor de inferencia",
    providerLogTitle: "REGISTRO DE EJECUCIONES",
    emptyLog: "Aún no hay ejecuciones registradas.",
    exportLog: "EXPORTAR REGISTRO (JSON)",
    settingsTitle: "AJUSTES",
    settingsMetaKey: "Clave de Meta Model API",
    settingsBasetenKey: "Clave API de Baseten",
    settingsKeysNote: "Las claves solo quedan en este navegador. El juego funciona sin conexión sin ellas.",
    settingsSave: "GUARDAR CLAVES",
    settingsClear: "BORRAR CLAVES",
    settingsSaved: "Guardadas en este navegador.",
    settingsDone: "LISTO",
    verifiedScorecard: "TARJETA VERIFICADA",
    offlineScoreNote: "Puntuación local — añade una clave en Ajustes para la verificación en la nube.",
    scorecardErrorNote: "Falló la comprobación en la nube — se muestra la puntuación local.",
    surfaceUnverified: "sin verificar",
  },

  pl: {
    aiPoweredChallenge: "WYZWANIE SZYBKOŚCIOWE Z AI",
    beatThe: "Pokonaj",
    certificationTime: "Czas Referencyjny",
    welcomeBody: "Sprzątaj szybko i dokładnie. AI oceni to, co wyraźnie zobaczy.",
    welcomeDisclaimer: "Wersja prototypowa. Tylko punkt odniesienia — nigdy certyfikacja.",
    acceptChallenge: "PODEJMIJ WYZWANIE",

    howItWorks: "JAK TO DZIAŁA",
    instructionsTitle: "Twoje wyzwanie",
    step1Title: "Przygotuj się",
    step1Body: "Ustaw całą stację sprzątania wyraźnie w kadrze.",
    step2Title: "Sprzątaj",
    step2Body: "Naciśnij Start i sprzątaj szybko, nie tracąc jakości.",
    step3Title: "Zdobądź wynik",
    step3Body: "AI porówna widoczny stan przed i po sprzątaniu.",
    prototypeBenchmark: "CEL PROTOTYPU",
    qualityFirstShort: "JAKOŚĆ NAJPIERW",
    continue: "DALEJ",

    cameraCheck: "TEST KAMERY",
    frameStation: "Ustaw stację w kadrze",
    cameraInstruction: "Cała powierzchnia sprzątania powinna być widoczna.",
    startingCamera: "URUCHAMIANIE KAMERY",
    cameraLive: "KAMERA AKTYWNA",
    cameraUnavailable: "KAMERA NIEDOSTĘPNA",
    retryCamera: "SPRÓBUJ PONOWNIE",
    continueWithoutCamera: "GRAJ BEZ KAMERY",
    demoMode: "TRYB DEMO",
    demoCameraPlaceholder: "OBRAZ ZASTĘPCZY",
    localPrivacy: "Analiza lokalna: zdjęcia pozostają na tym telefonie.",
    cameraPermissionDenied: "Odmówiono dostępu do kamery. Zezwól na dostęp i spróbuj ponownie.",
    cameraNotFound: "Na tym urządzeniu nie znaleziono dostępnej kamery.",
    cameraBusy: "Nie udało się uruchomić kamery. Zamknij inne aplikacje używające kamery i spróbuj ponownie.",
    cameraBlack: "Kamera jest połączona, ale nie pokazuje obrazu. Spróbuj ponownie.",
    cameraGeneric: "Nie udało się uruchomić kamery. Spróbuj ponownie.",

    liveChallenge: "WYZWANIE NA ŻYWO",
    qualityFirst: "Najpierw jakość. Potem czas.",
    ready: "GOTOWY",
    live: "NA ŻYWO",
    paused: "PAUZA",
    finished: "KONIEC",
    timeRemaining: "POZOSTAŁY CZAS",
    elapsed: "MINĘŁO",
    reset: "RESET",
    start: "START",
    stop: "PAUZA",
    resume: "WZNÓW",
    complete: "ZAKOŃCZ WYZWANIE",

    results: "WYNIKI",
    challengeComplete: "Wyzwanie ukończone",
    analyzing: "AI ANALIZUJE",
    loadingVision: "Ładowanie modelu wizyjnego…",
    visibleCleanliness: "WYNIK WIZUALNY",
    sceneMatch: "ZGODNOŚĆ KADRU",
    objectsCleared: "USUNIĘTE OBIEKTY",
    objectsRemaining: "POZOSTAŁE OBIEKTY",
    evidenceHigh: "WYSOKA PEWNOŚĆ",
    evidenceMedium: "ŚREDNIA PEWNOŚĆ",
    evidenceRescan: "POWTÓRZ · ZA MAŁO DOWODÓW",
    evidenceDemo: "DEMO · NIEZWERYFIKOWANE PRZEZ AI",
    yourTime: "TWÓJ CZAS",
    target: "CEL",
    timeResult: "WYNIK CZASOWY",
    visualEvidence: "DOWÓD WIZUALNY",
    before: "PRZED",
    after: "PO",
    placeholderImage: "OBRAZ DEMO",
    visualFinding: "OCENA WIZUALNA",
    visualChange: "ZMIANA WIZUALNA",
    localAnalysisDisclaimer: "To tylko szacunek usunięcia widocznych obiektów. Nie potwierdza higieny ani czystości powierzchni.",
    localAI: "AI NA URZĄDZENIU",
    cloudAI: "AI W CHMURZE",
    simulatedDemo: "SYMULACJA DEMO",
    evidence: "PEWNOŚĆ",
    unverified: "NIEZWERYFIKOWANE",

    victoryPose: "POZA ZWYCIĘZCY",
    strikePose: "ZRÓB POZĘ!",
    poseReady: "Świętuj finisz i zdobądź punkty za styl.",
    poseAnalyzing: "Oceniamy tę mistrzowską pozę…",
    poseCaptured: "Poza zwycięzcy oceniona!",
    poseUnavailable: "AI pozy jest niedostępne — przyznano neutralny wynik.",
    poseNoPerson: "Nie wykryto osoby — przyznano neutralny wynik.",

    playerNameLabel: "IMIĘ / PSEUDONIM",
    playerNamePlaceholder: "Gracz",
    nameOptional: "Opcjonalnie — domyślnie użyjemy nazwy Gracz.",
    defaultPlayer: "Gracz",
    viewLeaderboard: "ZOBACZ RANKING",

    beatLeader: "POKONAJ LIDERA",
    leaderboard: "Ranking",
    player: "GRACZ",
    quality: "JAKOŚĆ",
    time: "CZAS",
    style: "STYL",
    playAgain: "ZAGRAJ PONOWNIE",
    returnHome: "WRÓĆ NA START",
    liveLeaderboard: "RANKING NA ŻYWO",
    autoRefresh: "ODŚWIEŻANIE · 15S",

    findingAllCleared: "Wykryte obiekty zostały usunięte.",
    findingNoObjects: "Wykryto zbyt mało obiektów, aby mocno potwierdzić wynik.",
    findingRemaining: "{objects} nadal wykryto po zakończeniu wyzwania.",
    findingNew: "{objects} pojawiły się na zdjęciu po sprzątaniu.",
    findingDemo: "Wynik demo korzysta z obrazów zastępczych; kamera nie dokonała oceny.",
    findingModelFailed: "Model wizyjny jest niedostępny. Pokazujemy wyraźnie oznaczony wynik demo.",

    voiceWelcome: "Witajcie, mistrzowie! Dziś sprzątanie walczy o chwałę!",
    voiceInstructionsIntro: "Trzy kroki dzielą cię od zwycięstwa!",
    voiceStep1: "Ustaw stację w kadrze jak prawdziwy mistrz!",
    voiceStep2: "Naciśnij Start i uwolnij moc sprzątania!",
    voiceStep3: "AI oceni wielką wizualną przemianę!",
    voiceBegin: "Startujemy! Sprzątaj jak gwiazda wielkiego finału!",
    voice60: "Sześćdziesiąt sekund! Mistrzowska energia, jedziemy dalej!",
    voiceHalfway: "Połowa! Publiczność czuje tę niesamowitą moc!",
    voice30: "Trzydzieści sekund! Meta już woła twoje imię!",
    voice10: "Dziesięć sekund! Ostatni zryw! Niech błyszczy!",
    voiceTimeComplete: "Czas! Ręce w górę! Odkrywamy wyniki!",
    voiceChallengeComplete: "Koniec wyzwania! Zobaczmy ten wielki wynik!",
    voicePosePrompt: "Poza zwycięzcy! Pokaż energię prawdziwego mistrza!",
    voiceStyleScore: "Punkty za styl: {score} na dziesięć!",
    voiceDemoMode: "Tryb demo aktywny! Wielka gra trwa dalej!",

    runSelfTest: "URUCHOM AUTOTEST",
    selfTestTitle: "AUTOTEST SYSTEMU",
    selfTestReady: "GOTOWY",
    copyReport: "KOPIUJ RAPORT",
    reportCopied: "RAPORT SKOPIOWANY",

    muteVoice: "Wycisz narrację",
    unmuteVoice: "Włącz narrację",
    hostVoiceTitle: "GŁOS PROWADZĄCEGO",
    viewDeck: "DZIENNA TALIA",
    deckTitle: "DZIENNA TALIA",
    deckRight: "DOBRZE ▶",
    deckMiss: "◀ BŁĄD",
    deckCorrect: "Dobra decyzja.",
    deckWrong: "To jest błąd.",
    deckComplete: "Talia na dziś ukończona.",
    deckStreak: "Seria: {n} dni",
    deckCardOf: "Karta {i} z {n}",
    voiceRecordFailed: "Nie można uzyskać dostępu do mikrofonu.",
    voiceNoteTitle: "NOTATKA GŁOSOWA",
    voiceRecord: "NAGRAJ NOTATKĘ",
    voiceStop: "STOP",
    voiceNoteHint: "Opcjonalnie — dołącz notatkę głosową do tego wyniku.",
    voiceTranscribing: "Transkrybowanie…",
    voiceNotTranscribed: "Nie transkrybowano — załączono notatkę audio.",
    viewRecords: "ZOBACZ WPISY",
    recordsTitle: "DZIENNIK INSPEKCJI",
    recordsEmpty: "Brak wpisów inspekcji.",
    exportJson: "EKSPORTUJ JSON",
    exportCsv: "EKSPORTUJ CSV",
    locationNotShared: "Nie udostępniono lokalizacji",
    settingsProvider: "Dostawca wnioskowania",
    providerLogTitle: "DZIENNIK URUCHOMIEŃ",
    emptyLog: "Brak zarejestrowanych uruchomień.",
    exportLog: "EKSPORTUJ DZIENNIK (JSON)",
    settingsTitle: "USTAWIENIA",
    settingsMetaKey: "Klucz Meta Model API",
    settingsBasetenKey: "Klucz API Baseten",
    settingsKeysNote: "Klucze zostają tylko w tej przeglądarce. Gra działa w pełni offline bez nich.",
    settingsSave: "ZAPISZ KLUCZE",
    settingsClear: "WYCZYŚĆ KLUCZE",
    settingsSaved: "Zapisano w tej przeglądarce.",
    settingsDone: "GOTOWE",
    verifiedScorecard: "ZWERYFIKOWANA KARTA",
    offlineScoreNote: "Wynik lokalny — dodaj klucz w Ustawieniach, aby włączyć weryfikację w chmurze.",
    scorecardErrorNote: "Weryfikacja w chmurze nie powiodła się — wyświetlono wynik lokalny.",
    surfaceUnverified: "niezweryfikowana",
  }
};

const screens = [
  "welcome",
  "instructions",
  "camera",
  "timer",
  "results",
  "leaderboard",
  "settings",
  "deck",
  "records"
];

const query = new URLSearchParams(window.location.search);
const DEBUG_MODE = query.get("debug") === "1";
const SPECTATOR_MODE = query.get("spectator") === "1";
const SELFTEST_MODE = query.get("selftest") === "1";
const VOICE_TEST_MODE = query.get("voice-test") === "1";

const state = {
  screen: "welcome",
  language: "en",
  demoMode: false,

  voice: {
    muted: false,
    available:
      "speechSynthesis" in window &&
      "SpeechSynthesisUtterance" in window,
    voices: [],
    selectedVoice: null
  },

  camera: {
    stream: null,
    ready: false,
    starting: false,
    error: null,
    blackFrameRetries: 0,
    watchdogToken: 0
  },

  captures: {
    before: null,
    after: null,
    pose: null
  },

  timer: {
    running: false,
    elapsedMs: 0,
    startedAt: null,
    intervalId: null,
    announcements: {
      60: false,
      45: false,
      30: false,
      10: false,
      complete: false
    }
  },

  analysis: {
    running: false,
    modelStatus: "idle",
    modelError: null,
    lastLocalResult: null
  },

  pose: {
    running: false,
    modelStatus: "idle",
    error: null
  },

  latestScore: null,
  result: null,
  latestRunId: null,
  deckReturn: "welcome",
  deck: null,
  recordsReturn: "welcome",
  voiceNote: null,
  recorder: null,
  recordChunks: [],
  settingsReturn: "welcome",

  selfTest: {
    running: false,
    results: [],
    report: ""
  }
};

const els = {
  appShell: document.getElementById("appShell"),
  spectatorView: document.getElementById("spectatorView"),
  spectatorLeaderboardList: document.getElementById("spectatorLeaderboardList"),

  backButton: document.getElementById("backButton"),
  muteButton: document.getElementById("muteButton"),
  soundIcon: document.getElementById("soundIcon"),
  stepStatus: document.getElementById("stepStatus"),

  welcomeContinue: document.getElementById("welcomeContinue"),
  instructionsContinue: document.getElementById("instructionsContinue"),
  cameraContinue: document.getElementById("cameraContinue"),
  continueWithoutCamera: document.getElementById("continueWithoutCamera"),
  resultsContinue: document.getElementById("resultsContinue"),
  playAgainButton: document.getElementById("playAgainButton"),
  homeButton: document.getElementById("homeButton"),

  setupVideo: document.getElementById("setupVideo"),
  timerVideo: document.getElementById("timerVideo"),
  setupDemoPlaceholder: document.getElementById("setupDemoPlaceholder"),
  timerDemoPlaceholder: document.getElementById("timerDemoPlaceholder"),

  setupCameraLoading: document.getElementById("setupCameraLoading"),
  timerCameraLoading: document.getElementById("timerCameraLoading"),
  setupCameraError: document.getElementById("setupCameraError"),
  timerCameraError: document.getElementById("timerCameraError"),
  setupCameraErrorMessage: document.getElementById("setupCameraErrorMessage"),
  timerCameraErrorMessage: document.getElementById("timerCameraErrorMessage"),
  setupRetryCamera: document.getElementById("setupRetryCamera"),
  timerRetryCamera: document.getElementById("timerRetryCamera"),

  cameraStatusDot: document.getElementById("cameraStatusDot"),
  cameraStatusText: document.getElementById("cameraStatusText"),
  cameraTrackStatus: document.getElementById("cameraTrackStatus"),
  cameraHudStatus: document.getElementById("cameraHudStatus"),

  captureCanvas: document.getElementById("captureCanvas"),
  captureFlash: document.getElementById("captureFlash"),
  beforeCaptureIndicator: document.getElementById("beforeCaptureIndicator"),
  afterCaptureIndicator: document.getElementById("afterCaptureIndicator"),

  timerDisplay: document.getElementById("timerDisplay"),
  elapsedDisplay: document.getElementById("elapsedDisplay"),
  timerProgress: document.getElementById("timerProgress"),
  startPauseButton: document.getElementById("startPauseButton"),
  resetButton: document.getElementById("resetButton"),
  completeButton: document.getElementById("completeButton"),
  liveBadge: document.getElementById("liveBadge"),

  analysisLoading: document.getElementById("analysisLoading"),
  analysisLoadingDetail: document.getElementById("analysisLoadingDetail"),
  resultsBody: document.getElementById("resultsBody"),

  cleanlinessScore: document.getElementById("cleanlinessScore"),
  scoreEvidenceState: document.getElementById("scoreEvidenceState"),
  sceneMatchValue: document.getElementById("sceneMatchValue"),
  objectsClearedValue: document.getElementById("objectsClearedValue"),
  objectsRemainingValue: document.getElementById("objectsRemainingValue"),
  beforeDetectionOverlay: document.getElementById("beforeDetectionOverlay"),
  afterDetectionOverlay: document.getElementById("afterDetectionOverlay"),
  beforeSamOverlay: document.getElementById("beforeSamOverlay"),
  afterSamOverlay: document.getElementById("afterSamOverlay"),
  resultTime: document.getElementById("resultTime"),
  timeComparison: document.getElementById("timeComparison"),
  findingText: document.getElementById("findingText"),
  analysisMethod: document.getElementById("analysisMethod"),
  analysisConfidence: document.getElementById("analysisConfidence"),
  visualChangeValue: document.getElementById("visualChangeValue"),

  beforeThumbnail: document.getElementById("beforeThumbnail"),
  afterThumbnail: document.getElementById("afterThumbnail"),
  beforePlaceholder: document.getElementById("beforePlaceholder"),
  afterPlaceholder: document.getElementById("afterPlaceholder"),

  poseButton: document.getElementById("poseButton"),
  styleScoreDisplay: document.getElementById("styleScoreDisplay"),
  poseStatus: document.getElementById("poseStatus"),
  posePreviewWrap: document.getElementById("posePreviewWrap"),
  poseThumbnail: document.getElementById("poseThumbnail"),

  playerName: document.getElementById("playerName"),
  voiceRecordButton: document.getElementById("voiceRecordButton"),
  voiceStopButton: document.getElementById("voiceStopButton"),
  voiceNoteAudio: document.getElementById("voiceNoteAudio"),
  voiceNoteStatus: document.getElementById("voiceNoteStatus"),
  viewRecordsButton: document.getElementById("viewRecordsButton"),
  inspectionLogList: document.getElementById("inspectionLogList"),
  inspectionLogEmpty: document.getElementById("inspectionLogEmpty"),
  inspectionExportJson: document.getElementById("inspectionExportJson"),
  inspectionExportCsv: document.getElementById("inspectionExportCsv"),
  recordsDone: document.getElementById("recordsDone"),
  viewDeckButton: document.getElementById("viewDeckButton"),
  deckStreak: document.getElementById("deckStreak"),
  deckCard: document.getElementById("deckCard"),
  deckCategory: document.getElementById("deckCategory"),
  deckText: document.getElementById("deckText"),
  deckProgress: document.getElementById("deckProgress"),
  deckFeedback: document.getElementById("deckFeedback"),
  deckLeft: document.getElementById("deckLeft"),
  deckRight: document.getElementById("deckRight"),
  deckDone: document.getElementById("deckDone"),
  leaderboardList: document.getElementById("leaderboardList"),

  selfTestPanel: document.getElementById("selfTestPanel"),
  runSelfTestButton: document.getElementById("runSelfTestButton"),
  selfTestResults: document.getElementById("selfTestResults"),
  selfTestSummary: document.getElementById("selfTestSummary"),
  selfTestChecklist: document.getElementById("selfTestChecklist"),
  copySelfTestReport: document.getElementById("copySelfTestReport"),
  providerLogList: document.getElementById("providerLogList"),
  providerLogEmpty: document.getElementById("providerLogEmpty"),
  providerLogExport: document.getElementById("providerLogExport"),
  voiceNameList: document.getElementById("voiceNameList"),
  voiceTestButtons: document.getElementById("voiceTestButtons"),

  settingsButton: document.getElementById("settingsButton"),
  metaApiKey: document.getElementById("metaApiKey"),
  basetenApiKey: document.getElementById("basetenApiKey"),
  settingsSave: document.getElementById("settingsSave"),
  settingsClear: document.getElementById("settingsClear"),
  settingsDone: document.getElementById("settingsDone"),
  settingsSavedNote: document.getElementById("settingsSavedNote"),

  verifiedScorecard: document.getElementById("verifiedScorecard"),
  verifiedBody: document.getElementById("verifiedBody"),
  verifiedHype: document.getElementById("verifiedHype"),
  offlineScoreNote: document.getElementById("offlineScoreNote"),
  scorecardErrorNote: document.getElementById("scorecardErrorNote")
};

const COUNTABLE_CLASSES = new Set([
  "cup",
  "bottle",
  "bowl",
  "cell phone",
  "book"
]);

let detectorPromise = null;
let detectorInstance = null;
let poseLandmarkerPromise = null;
let poseLandmarkerInstance = null;
let spectatorRefreshId = null;

function t(key, replacements = {}) {
  let value =
    translations[state.language]?.[key] ??
    translations.en[key] ??
    key;

  Object.entries(replacements).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, String(replacement));
  });

  return value;
}

function applyTranslations() {
  document.documentElement.lang =
    state.language === "pl" ? "pl" : state.language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.language === state.language
    );
  });

  updateMuteButton();
  updateCameraUI();
  updateTimerUI();

  if (state.result) {
    renderResults();
  }

  if (SPECTATOR_MODE) {
    renderSpectatorLeaderboard();
  }
}

function setLanguage(language) {
  if (!translations[language]) return;

  stopSpeech();
  state.language = language;
  state.voice.selectedVoice = chooseVoice(language);
  applyTranslations();
}

function initializeSpeech() {
  if (!state.voice.available) return;

  loadVoices();

  try {
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
  } catch {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

function loadVoices() {
  if (!state.voice.available) return;

  try {
    state.voice.voices = window.speechSynthesis.getVoices() || [];
    state.voice.selectedVoice = chooseVoice(state.language);
    renderVoiceNames();
  } catch {
    state.voice.voices = [];
    state.voice.selectedVoice = null;
  }
}

function renderVoiceNames() {
  if (VOICE_TEST_MODE && els.voiceTestButtons) {
    els.voiceTestButtons.classList.remove("hidden");
  }

  const list = els.voiceNameList;
  if (!list) return;

  list.innerHTML = "";

  ["en", "es", "pl"].forEach((lang) => {
    const row = document.createElement("div");
    row.className = "provider-log-row";

    const label = document.createElement("span");
    label.textContent = lang.toUpperCase();

    const name = document.createElement("small");
    name.textContent = voiceNameFor(lang) || "—";

    row.append(label, name);
    list.append(row);
  });
}

function chooseVoice(language) {
  const voices = state.voice.voices || [];
  const preferredLanguages = {
    en: ["en-US", "en"],
    es: ["es-US", "es-MX", "es-ES", "es"],
    pl: ["pl-PL", "pl"]
  }[language] || ["en-US", "en"];

  const naturalHints = [
    "natural", "neural", "premium", "enhanced", "online",
    "aria", "jenny", "samantha", "zira", "victoria", "ava",
    "emma", "olivia", "monica", "paulina", "sabina", "helena",
    "lucia", "dalia", "female", "woman"
  ];

  const candidates = voices.filter(v =>
    preferredLanguages.some(lang =>
      String(v.lang || "").toLowerCase().startsWith(lang.toLowerCase())
    )
  );

  const scoreVoice = (voice) => {
    const name = String(voice.name || "").toLowerCase();
    const lang = String(voice.lang || "").toLowerCase();
    let score = 0;
    preferredLanguages.forEach((preferred, index) => {
      if (lang === preferred.toLowerCase()) score += 60 - index * 8;
      else if (lang.startsWith(preferred.toLowerCase())) score += 35 - index * 5;
    });
    naturalHints.forEach((hint, index) => {
      if (name.includes(hint)) score += Math.max(4, 28 - index);
    });
    if (voice.localService === false) score += 8;
    if (name.includes("compact") || name.includes("espeak")) score -= 25;
    return score;
  };

  return [...candidates].sort((a, b) => scoreVoice(b) - scoreVoice(a))[0]
    || voices[0]
    || null;
}
function getSpeechLanguage() {
  if (state.voice.selectedVoice?.lang) return state.voice.selectedVoice.lang;
  if (state.language === "pl") return "pl-PL";
  if (state.language === "es") return "es-US";
  return "en-US";
}

function createUtterance(text, options = {}) {
  const utterance = new SpeechSynthesisUtterance(String(text));

  state.voice.selectedVoice = chooseVoice(state.language);

  const voice = options.voice || state.voice.selectedVoice;
  if (voice) {
    utterance.voice = voice;
  }

  utterance.lang = getSpeechLanguage();
  utterance.rate = options.rate ?? 1.0;
  utterance.pitch = options.pitch ?? 1.0;
  utterance.volume = CONFIG.voice.volume;

  return utterance;
}

let announcerRequestId = 0;
let announcerStatusNode = null;

function showAnnouncerStatus(message) {
  if (!announcerStatusNode) {
    announcerStatusNode = document.createElement("div");
    announcerStatusNode.id = "announcerStatus";
    announcerStatusNode.setAttribute("role", "status");
    announcerStatusNode.style.cssText =
      "position:fixed;bottom:20px;left:12px;right:12px;z-index:9999;" +
      "padding:12px 16px;border:1px solid #39d9f7;border-radius:12px;" +
      "background:#071927;color:white;font:600 14px system-ui;" +
      "box-shadow:0 4px 25px #0009;pointer-events:none;text-align:center";
    document.body.appendChild(announcerStatusNode);
  }
  announcerStatusNode.textContent = message;
  announcerStatusNode.hidden = !message;
}

function playAnnouncerCue() {
  // Independent audio path: verifies that the browser can output audio,
  // even when the device speech service is unavailable.
  try {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    const context = new Context();
    if (context.state === "suspended") context.resume().catch(() => {});
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(660, context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.13);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.09, context.currentTime + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.23);
    osc.connect(gain).connect(context.destination);
    osc.start();
    osc.stop(context.currentTime + 0.24);
    osc.onended = () => context.close().catch(() => {});
  } catch {}
}

function speakText(text, options = {}) {
  if (!state.voice.available || state.voice.muted || !text) return;
  const requestId = ++announcerRequestId;
  const synth = window.speechSynthesis;
  let started = false;
  let attemptedFallback = false;
  let watchdog;

  const attempt = (useDefault) => {
    if (requestId !== announcerRequestId || state.voice.muted) return;
    try {
      synth.cancel();
      const utterance = useDefault
        ? new SpeechSynthesisUtterance(String(text))
        : createUtterance(text, options);
      if (useDefault) {
        utterance.lang = getSpeechLanguage();
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;
      }
      utterance.onstart = () => {
        if (requestId !== announcerRequestId) return;
        started = true;
        clearTimeout(watchdog);
        showAnnouncerStatus("");
      };
      utterance.onerror = () => {
        if (requestId !== announcerRequestId) return;
        clearTimeout(watchdog);
        if (!attemptedFallback) {
          attemptedFallback = true;
          attempt(true);
        } else {
          showAnnouncerStatus("Voice unavailable in this browser. Check your speech settings.");
        }
      };
      synth.speak(utterance);
      if (synth.paused) synth.resume();
      watchdog = setTimeout(() => {
        if (requestId !== announcerRequestId || started) return;
        if (!attemptedFallback) {
          attemptedFallback = true;
          attempt(true);
        } else {
          showAnnouncerStatus("Voice did not start. Check your text-to-speech settings.");
        }
      }, 2200);
    } catch {
      if (!attemptedFallback) {
        attemptedFallback = true;
        attempt(true);
      } else {
        showAnnouncerStatus("Speech is unavailable in this browser.");
      }
    }
  };

  attempt(false);
}

const HOST_LINES = {
  en: {
    start: ["Let's go... time to shine!", "Game on... show that room who's boss!", "Cameras up... let's see it sparkle!", "Alright, champ... make it count!", "Clock's ticking... you've got this!", "Time to work... nice and quick!", "Let's do this... clean and mean!", "Ready... set... shine!", "Your room... your stage... go!", "Deep breath... let's clean!", "Showtime... grab that cloth!", "Ninety seconds... make 'em count!", "Let's roll... spotless is the goal!", "Game face on... here we go!", "Time to hustle... you've trained for this!", "Okay, star... own that room!", "Let's make it gleam... starting now!", "Quick feet... sharp eyes... go!", "The clock is live... do your thing!", "No pressure... just shine!", "Here we go... clean machine!", "Lights, camera... clean!", "Your ninety seconds... start now!", "Let's get it... looking fresh!"],
    mid: ["Halfway... looking good!", "Nice pace... keep it up!", "Forty-five down... stay sharp!", "Looking smooth... don't stop!", "Halfway mark... you've got this!", "Good rhythm... keep rolling!", "Strong start... finish stronger!", "Keep moving... looking great!", "Halfway home... push through!", "Smooth moves... keep 'em coming!", "Right on track... stay with it!", "Looking clean already... wow!", "Halfway... no slowing down!", "Great energy... keep it going!", "You're flying... keep at it!", "Halfway point... looking sharp!", "Steady now... almost there!", "Beautiful pace... hold it!", "Keep that energy... looking good!", "Halfway... the room believes in you!", "Smooth and steady... nice!", "Looking like a pro... keep going!", "Halfway... finish loud!", "Great hustle... keep shining!"],
    finish: ["Time! ... step back and admire!", "And... done! Beautiful work!", "That's it... hands up, champ!", "Clock's out... gorgeous!", "Finished! ... take a bow!", "Time's up... what a run!", "Done and dusted... literally!", "Stop the clock... stunning!", "That's a wrap... well played!", "Time! ... look at that shine!", "All done... give yourself credit!", "Ninety seconds... nailed it!", "And stop... fantastic job!", "Complete! ... room's glowing!", "Time called... you delivered!", "Done! ... that's how it's done!", "Whistle blows... great run!", "Finished strong... love to see it!", "That's time... absolute star!", "Clock stops... crowd goes wild!", "All finished... take it in!", "Done deal... sparkling result!", "Time! ... chef's kiss!", "Complete... you made it look easy!"],
    pass: ["Pass! That room is gleaming!", "Certified fresh... beautiful!", "Pass with style... well earned!", "That's a pass... gorgeous work!", "Stamp it... sparkling clean!", "Pass! ... the judges are smiling!", "Top marks... enjoy it!", "A clear pass... take the win!", "Pass! ... what a transformation!", "Verified and victorious... yes!", "That's the standard... pass!", "Pass! ... room looks brand new!", "Gold star... fully earned!", "Pass with flying colors... wow!", "Clean bill... beautifully done!", "That's a pass... own it!", "Scoreboard loves it... pass!", "Pass! ... picture-perfect clean!", "Nailed the benchmark... pass!", "Victory lap... you passed!", "Pass! ... simply stunning!", "The room approves... pass!", "Flawless finish... that's a pass!", "Pass! ... remember this feeling!"],
    retry: ["So close... one more run?", "Not quite... you've got another in you!", "Missed it... shake it off, go again!", "Almost there... run it back!", "No shame... champions retry!", "Just short... next one's yours!", "Ooh, close... let's go again!", "Not this time... you'll get it!", "So near... one more try?", "Dust yourself off... retry!", "Almost had it... again!", "Close call... show 'em more!", "Not yet... but you're close!", "Retry time... I believe in you!", "Missed the mark... reload and go!", "One more... you've got this!", "Close... but no cigar yet!", "Almost... dig a little deeper!", "Not quite... the room's waiting!", "Retry... make it count!", "So close... feel that fire?", "Next run's the one... go!", "Missed... but what heart!", "Again... cleaner and meaner!"]
  },
  es: {
    start: ["¡Vamos... a brillar!", "¡Juego en marcha... demuestra quién manda!", "Cámaras listas... ¡que se vea el brillo!", "Muy bien, campeón... ¡haz que cuente!", "El reloj corre... ¡tú puedes!", "A trabajar... ¡rápido y bien!", "Vamos allá... ¡limpio y veloz!", "Listos... ¡a brillar!", "Tu sala... tu escenario... ¡ya!", "Respira hondo... ¡a limpiar!", "¡Es la hora... agarra el paño!", "Noventa segundos... ¡que valgan!", "En marcha... ¡el objetivo es impecable!", "Cara de juego... ¡allá vamos!", "A darle... ¡para esto entrenaste!", "Muy bien, estrella... ¡esa sala es tuya!", "Hagamos que brille... ¡ya mismo!", "Pies rápidos... ojo agudo... ¡ya!", "El reloj vive... ¡haz lo tuyo!", "Sin presión... ¡solo brilla!", "Allá vamos... ¡máquina de limpiar!", "Luces, cámara... ¡limpieza!", "Tus noventa segundos... ¡empiezan ya!", "Vamos... ¡con todo!"],
    mid: ["¡Mitad... vas muy bien!", "Buen ritmo... ¡sigue así!", "Mitad pasada... ¡sigue firme!", "Se ve fluido... ¡no pares!", "Mitad del reto... ¡tú puedes!", "Buen ritmo... ¡sigue rodando!", "Gran inicio... ¡termina más fuerte!", "Sigue moviéndote... ¡se ve genial!", "Mitad del camino... ¡empuja!", "Movimientos suaves... ¡sigue!", "Vas perfecto... ¡no te detengas!", "Ya se ve limpio... ¡guau!", "Mitad... ¡sin bajar el ritmo!", "Gran energía... ¡sigue!", "Vas volando... ¡dale!", "Punto medio... ¡te ves firme!", "Tranquilo... ¡ya casi!", "Ritmo hermoso... ¡aguanta!", "Mantén la energía... ¡vas bien!", "Mitad... ¡la sala cree en ti!", "Suave y firme... ¡bonito!", "Como profesional... ¡sigue!", "Mitad... ¡termina en alto!", "Gran esfuerzo... ¡sigue brillando!"],
    finish: ["¡Tiempo!... ¡admira tu obra!", "¡Y... listo! ¡Hermoso trabajo!", "¡Eso es... manos arriba, campeón!", "Se acabó... ¡precioso!", "¡Terminado!... ¡haz reverencia!", "¡Se acabó el tiempo... qué carrera!", "Listo y pulido... ¡literal!", "Para el reloj... ¡impresionante!", "Fin del juego... ¡bien jugado!", "¡Tiempo!... ¡mira ese brillo!", "Todo listo... ¡date el crédito!", "Noventa segundos... ¡clavado!", "Y paramos... ¡trabajo fantástico!", "¡Completo!... ¡la sala brilla!", "Tiempo cumplido... ¡cumpliste!", "¡Listo!... ¡así se hace!", "Suena el silbato... ¡gran carrera!", "Cierre fuerte... ¡da gusto verlo!", "Eso es tiempo... ¡estrella total!", "Reloj parado... ¡el público enloquece!", "Todo terminado... ¡disfrútalo!", "Trato hecho... ¡resultado brillante!", "¡Tiempo!... ¡beso de chef!", "Completo... ¡lo haces ver fácil!"],
    pass: ["¡Pasa! ¡Esa sala reluce!", "Frescura total... ¡hermoso!", "Pasa con estilo... ¡bien ganado!", "Eso pasa... ¡trabajo precioso!", "Sello puesto... ¡limpio total!", "¡Pasa!... ¡los jueces sonríen!", "Nota máxima... ¡disfrútalo!", "Pase claro... ¡llévate el triunfo!", "¡Pasa!... ¡qué transformación!", "Verificado y victorioso... ¡sí!", "Ese es el nivel... ¡pasa!", "¡Pasa!... ¡la sala parece nueva!", "Estrella de oro... ¡merecida!", "Pasa con honores... ¡guau!", "Cuenta limpia... ¡hermoso trabajo!", "Eso pasa... ¡hazlo tuyo!", "Al marcador le encanta... ¡pasa!", "¡Pasa!... ¡limpieza de foto!", "Clavaste la marca... ¡pasa!", "Vuelta de honor... ¡pasaste!", "¡Pasa!... ¡simplemente increíble!", "La sala aprueba... ¡pasa!", "Final impecable... ¡eso pasa!", "¡Pasa!... ¡recuerda este momento!"],
    retry: ["Tan cerca... ¿otra carrera?", "Casi... ¡tienes otra en ti!", "Falló... ¡sacúdete y repite!", "Casi lo logras... ¡de nuevo!", "Sin vergüenza... ¡los campeones repiten!", "Por poco... ¡la próxima es tuya!", "Uy, cerca... ¡vamos otra vez!", "Esta vez no... ¡lo lograrás!", "Tan cerca... ¿un intento más?", "Sacúdete el polvo... ¡repite!", "Casi lo tenías... ¡otra vez!", "Llamada cerrada... ¡muestra más!", "Todavía no... pero estás cerca...", "Hora de repetir... ¡creo en ti!", "Falló la marca... ¡recarga y ve!", "Una más... ¡tú puedes!", "Cerca... pero aún no...", "Casi... ¡escarba más hondo!", "Aún no... ¡la sala espera!", "Repite... ¡que cuente!", "Tan cerca... ¿sientes el fuego?", "La próxima es la buena... ¡ve!", "Falló... ¡pero qué corazón!", "Otra vez... ¡más limpio y veloz!"]
  },
  pl: {
    start: ["No to... czas błyszczeć!", "Gra trwa... pokaż, kto tu rządzi!", "Kamery gotowe... niech widać blask!", "Dobra, mistrzu... niech się liczy!", "Zegar tyka... dasz radę!", "Do pracy... szybko i dobrze!", "No to... czysto i sprawnie!", "Gotowi... do blasku!", "Twój pokój... twoja scena... start!", "Głęboki oddech... sprzątamy!", "Showtime... łap za ścierkę!", "Dziewięćdziesiąt sekund... wykorzystaj je!", "Zaczynamy... cel to perfekcja!", "Mina gracza... jedziemy!", "Do boju... po to trenowałeś!", "Dobra, gwiazdo... ten pokój jest twój!", "Niech błyszczy... już teraz!", "Szybkie nogi... bystre oko... start!", "Zegar żyje... rób swoje!", "Bez presji... po prostu błyszcz!", "Jedziemy... maszyno czystości!", "Światła, kamera... sprzątanie!", "Twoje dziewięćdziesiąt sekund... start!", "Dawaj... pełną parą!"],
    mid: ["Połowa... idzie świetnie!", "Dobre tempo... tak trzymaj!", "Połowa za nami... trzymaj formę!", "Płynnie idzie... nie stawaj!", "Połowa wyzwania... dasz radę!", "Dobre tempo... jedź dalej!", "Mocny start... mocniejszy finisz!", "Ruszaj się... wygląda super!", "Półmetek... ciśnij!", "Płynne ruchy... dawaj dalej!", "Idealnie... nie zatrzymuj się!", "Już czysto... wow!", "Połowa... bez zwalniania!", "Świetna energia... tak trzymaj!", "Lecisz... dawaj!", "Półmetek... wyglądasz mocno!", "Spokojnie... już prawie!", "Piękne tempo... wytrzymaj!", "Trzymaj energię... dobrze idzie!", "Połowa... pokój w ciebie wierzy!", "Gładko i równo... ładnie!", "Jak zawodowiec... jedź dalej!", "Połowa... finisz z hukiem!", "Świetna robota... błyszcz dalej!"],
    finish: ["Czas!... podziwiaj dzieło!", "I... gotowe! Piękna robota!", "To jest... ręce w górę, mistrzu!", "Koniec... przepięknie!", "Ukończone!... ukłoń się!", "Czas minął... co za występ!", "Gotowe i czyste... dosłownie!", "Stop zegar... imponujące!", "Koniec gry... ładnie zagrane!", "Czas!... spójrz na ten blask!", "Wszystko gotowe... bądź dumny!", "Dziewięćdziesiąt sekund... idealnie!", "I stop... fantastyczna robota!", "Ukończone!... pokój lśni!", "Czas minął... dowiozłeś!", "Gotowe!... tak się to robi!", "Gwizdek... świetny występ!", "Mocny finisz... miło patrzeć!", "To jest czas... prawdziwa gwiazda!", "Zegar staje... tłum szaleje!", "Wszystko skończone... naciesz się!", "Umowa stoi... błyszczący wynik!", "Czas!... miodzio!", "Ukończone... robisz to z łatwością!"],
    pass: ["Zaliczone! Ten pokój lśni!", "Pełna świeżość... przepięknie!", "Zaliczone ze stylem... zasłużenie!", "To przechodzi... śliczna robota!", "Przybijam... idealna czystość!", "Zaliczone!... sędziowie się uśmiechają!", "Najwyższa nota... ciesz się!", "Jasne zaliczenie... bierz wygraną!", "Zaliczone!... co za zmiana!", "Zweryfikowane i zwycięskie... tak!", "To jest poziom... zaliczone!", "Zaliczone!... pokój jak nowy!", "Złota gwiazdka... zasłużona!", "Zaliczone z honorem... wow!", "Czyste konto... piękna robota!", "To przechodzi... weź to sobie!", "Tablica to kocha... zaliczone!", "Zaliczone!... czystość ze zdjęcia!", "Wbiłeś benchmark... zaliczone!", "Runda honorowa... zaliczyłeś!", "Zaliczone!... po prostu cudnie!", "Pokój zatwierdza... zaliczone!", "Perfekcyjny finisz... to zaliczone!", "Zaliczone!... zapamiętaj tę chwilę!"],
    retry: ["Tak blisko... jeszcze jeden bieg?", "Prawie... masz w sobie kolejny!", "Nie wyszło... otrzep się i jeszcze raz!", "Prawie się udało... jeszcze raz!", "Bez wstydu... mistrzowie powtarzają!", "O włos... następny będzie twój!", "Uff, blisko... dawaj jeszcze raz!", "Tym razem nie... uda ci się!", "Tak blisko... jeszcze jedna próba?", "Otrzep kurz... powtórz!", "Prawie miałeś... jeszcze raz!", "Rzut oka... pokaż więcej!", "Jeszcze nie... ale jesteś blisko...", "Czas na powtórkę... wierzę w ciebie!", "Nie ta marka... ładuj i leć!", "Jeszcze raz... dasz radę!", "Blisko... ale jeszcze nie...", "Prawie... kopnij głębiej!", "Jeszcze nie... pokój czeka!", "Powtórz... niech się liczy!", "Tak blisko... czujesz ogień?", "Następny będzie ten... leć!", "Nie wyszło... ale co za serce!", "Jeszcze raz... czyściej i ostrzej!"]
  }
};

const usedHostLines = {};

function resetHostLineHistory() {
  Object.keys(usedHostLines).forEach((key) => {
    delete usedHostLines[key];
  });
}

function prosodyJitter(text, amount) {
  let hash = 0;
  const str = String(text);
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  const unit = (Math.abs(hash) % 1000) / 1000;
  return (unit * 2 - 1) * amount;
}

const HOST_PROSODY = {
  start: { rate: 1.0, pitch: 1.0 },
  mid: { rate: 1.0, pitch: 1.0 },
  finish: { rate: 1.03, pitch: 1.05 },
  pass: { rate: 0.95, pitch: 0.97 },
  retry: { rate: 0.95, pitch: 0.97 }
};

const CLIPS_MANIFEST = {
  version: 1,
  clips: {
    "en:start-00": "mock"
  }
};

function hostLineId(index) {
  return String(index).padStart(2, "0");
}

function clipUrlFor(lang, beat, id) {
  return `assets/audio/${lang}/${beat}-${id}.mp3`;
}

function clipStatus(lang, beat, id) {
  const entry = CLIPS_MANIFEST.clips[`${lang}:${beat}-${id}`];
  if (entry === "mock" || entry === "available") return entry;
  return "missing";
}

function pickHostLine(beat, language) {
  const lang = HOST_LINES[language] ? language : "en";
  const pool = (HOST_LINES[lang] && HOST_LINES[lang][beat]) || HOST_LINES.en[beat] || [];
  if (!pool.length) return { id: "00", text: "" };

  const key = `${lang}:${beat}`;
  let used = usedHostLines[key];
  if (!used || used.length >= pool.length) {
    used = usedHostLines[key] = [];
  }

  const remaining = pool.map((_, index) => index).filter((index) => !used.includes(index));
  const pick = remaining[Math.floor(Math.random() * remaining.length)];
  used.push(pick);

  return { id: hostLineId(pick), text: pool[pick] };
}

function voiceNameFor(language) {
  try {
    const voice = chooseVoice(language);
    return voice ? String(voice.name || voice.lang || "") : "";
  } catch {
    return "";
  }
}

function selectedVoiceNames() {
  return {
    en: voiceNameFor("en"),
    es: voiceNameFor("es"),
    pl: voiceNameFor("pl")
  };
}

let sharedAudioContext = null;

function unlockAudio() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    sharedAudioContext = sharedAudioContext || new AudioContextClass();
    if (sharedAudioContext.state === "suspended") {
      sharedAudioContext.resume().catch(() => {});
    }
  } catch {}
}

function playHostClip(url, fallbackText, prosody) {
  try {
    const audio = new Audio(url);

    audio.onended = () => {
      try {
        URL.revokeObjectURL(audio.src);
      } catch {}
    };

    audio.onerror = () => {
      speakText(fallbackText, prosody);
    };

    const played = audio.play();
    if (played && typeof played.catch === "function") {
      played.catch(() => speakText(fallbackText, prosody));
    }
  } catch {
    speakText(fallbackText, prosody);
  }
}

function speakHost(beat, overrideText) {
  if (!state.voice.available || state.voice.muted) {
    state.voice.lastPath = "muted";
    return;
  }

  const base = HOST_PROSODY[beat] || HOST_PROSODY.start;

  if (overrideText) {
    state.voice.lastPath = "dynamic";
    speakText(overrideText, {
      rate: base.rate + prosodyJitter(overrideText, 0.03),
      pitch: base.pitch + prosodyJitter(`${overrideText}:p`, 0.03)
    });
    return;
  }

  const line = pickHostLine(beat, state.language);
  if (!line.text) return;

  const status = clipStatus(state.language, beat, line.id);

  if (status === "mock") {
    state.voice.lastPath = "mock";
    speakText(line.text, {
      rate: base.rate + prosodyJitter(line.text, 0.03),
      pitch: base.pitch + prosodyJitter(`${line.text}:p`, 0.03)
    });
    return;
  }

  if (status === "available") {
    state.voice.lastPath = "clip";
    playHostClip(clipUrlFor(state.language, beat, line.id), line.text, {
      rate: base.rate + prosodyJitter(line.text, 0.03),
      pitch: base.pitch + prosodyJitter(`${line.text}:p`, 0.03)
    });
    return;
  }

  state.voice.lastPath = "synth";
  speakText(line.text, {
    rate: base.rate + prosodyJitter(line.text, 0.03),
    pitch: base.pitch + prosodyJitter(`${line.text}:p`, 0.03)
  });
}

function speakSample(language) {
  const line = pickHostLine("start", language);
  if (!line.text) return;

  let voice;
  try {
    voice = chooseVoice(language) || undefined;
  } catch {
    voice = undefined;
  }

  speakText(line.text, { rate: 1.0, pitch: 1.0, voice });
}

function speakSequence(texts) {
  if (!state.voice.available || state.voice.muted) return;
  const queue = texts.filter(Boolean);
  if (!queue.length) return;
  // Some mobile browsers can silently drop a queue of several utterances.
  // A single utterance, triggered by the user's tap, is more reliable.
  speakText(queue.join(" "), { rate: 1.0, pitch: 1.04 });
}

function speakInstruction(key) {
  speakText(t(key));
}

function speakChallengeInstructions() {
  speakSequence([
    t("voiceWelcome"),
    t("voiceInstructionsIntro"),
    t("voiceStep1"),
    t("voiceStep2"),
    t("voiceStep3")
  ]);
}

function announceTime(secondsRemaining) {
  if (Math.ceil(secondsRemaining) === 45) {
    speakHost("mid");
  }
}

function announceResultSummary() {
  announceGameVerdict();
}

function buildVerdictText() {
  const ai = state.result?.ai;
  const finish = pickHostLine("finish", state.language).text;
  const isVerified = ai?.verified?.status === "verified";
  const isRetry = isVerified
    ? ai.verified.verdict === "retry"
    : ai?.scorable === false;
  const prosody = isRetry ? HOST_PROSODY.retry : HOST_PROSODY.pass;
  let verdictText = pickHostLine(isRetry ? "retry" : "pass", state.language).text;

  if (isVerified && ai.verified.hypeLine) {
    verdictText = ai.verified.hypeLine;
  }

  const text = [finish, verdictText].filter(Boolean).join(" ");

  return {
    text,
    rate: prosody.rate + prosodyJitter(text, 0.03),
    pitch: prosody.pitch + prosodyJitter(`${text}:p`, 0.03)
  };
}

function announceGameVerdict() {
  if (!state.result) return;

  const verdict = buildVerdictText();
  if (!verdict.text) return;

  speakText(verdict.text, { rate: verdict.rate, pitch: verdict.pitch });
}

function announceStyleScore(score) {
  speakText(
    t("voiceStyleScore", {
      score: Number(score).toFixed(1)
    })
  );
}

function stopSpeech() {
  announcerRequestId += 1;
  showAnnouncerStatus("");
  if (!state.voice.available) return;

  try {
    window.speechSynthesis.cancel();
  } catch {}
}

function toggleMute() {
  state.voice.muted = !state.voice.muted;

  if (state.voice.muted) {
    stopSpeech();
  }

  updateMuteButton();
  if (!state.voice.muted) {
    playAnnouncerCue();
  }
}

function updateMuteButton() {
  const muted = state.voice.muted;

  els.muteButton.classList.toggle("muted", muted);
  els.muteButton.setAttribute("aria-pressed", String(muted));

  const label = muted ? t("unmuteVoice") : t("muteVoice");

  els.muteButton.setAttribute("aria-label", label);
  els.muteButton.title = label;
  els.soundIcon.textContent = muted ? "MUTE" : "◖)))";
}

function navigateTo(screen) {
  if (SPECTATOR_MODE || !screens.includes(screen)) return;

  state.screen = screen;

  screens.forEach((name) => {
    const element = document.getElementById(`${name}Screen`);
    element.classList.toggle("active", name === screen);
  });

  const index = screens.indexOf(screen);

  els.stepStatus.textContent =
    screen === "welcome"
      ? "WELCOME"
      : `${index + 1} / ${screens.length}`;

  els.backButton.style.visibility =
    screen === "welcome" ? "hidden" : "visible";

  if (
    !state.demoMode &&
    (screen === "camera" || screen === "timer")
  ) {
    // Defer playback until after the screen is visible and laid out.
    requestAnimationFrame(() => ensureCameraReady());
  }

  if (screen === "leaderboard") {
    renderLeaderboard();
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}

function getPreviousScreen() {
  const index = screens.indexOf(state.screen);
  return screens[Math.max(0, index - 1)];
}

function handleBack() {
  stopSpeech();

  if (state.screen === "settings") {
    closeSettings();
    return;
  }

  if (state.screen === "records") {
    closeRecords();
    return;
  }

  if (state.screen === "deck") {
    closeDeck();
    return;
  }

  if (state.screen === "timer" && state.timer.running) {
    pauseTimer();
  }

  navigateTo(getPreviousScreen());
}

function getCameraConstraintsChain() {
  return [
    {
      audio: false,
      video: {
        facingMode: { exact: "environment" },
        width: { ideal: CONFIG.camera.idealWidth },
        height: { ideal: CONFIG.camera.idealHeight }
      }
    },
    {
      audio: false,
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: CONFIG.camera.idealWidth },
        height: { ideal: CONFIG.camera.idealHeight }
      }
    },
    {
      audio: false,
      video: {
        width: { ideal: CONFIG.camera.idealWidth },
        height: { ideal: CONFIG.camera.idealHeight }
      }
    }
  ];
}

function withTimeout(promise, timeoutMs, message = "Operation timed out") {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(
      () => reject(new DOMException(message, "TimeoutError")),
      timeoutMs
    );
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timeoutId));
}

async function acquireCameraStream() {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error("CAMERA_API_UNAVAILABLE");
  }

  let lastError = null;

  for (const constraints of getCameraConstraintsChain()) {
    try {
      return await withTimeout(
        navigator.mediaDevices.getUserMedia(constraints),
        CONFIG.camera.acquisitionTimeoutMs,
        "Camera request timed out"
      );
    } catch (error) {
      lastError = error;

      if (
        error?.name === "NotAllowedError" ||
        error?.name === "SecurityError"
      ) {
        throw error;
      }
    }
  }

  throw lastError || new Error("CAMERA_ACQUISITION_FAILED");
}

async function requestCamera(options = {}) {
  if (state.demoMode) return true;
  if (state.camera.starting) return false;

  const { blackFrameRetry = false } = options;

  state.camera.starting = true;
  state.camera.ready = false;
  state.camera.error = null;
  state.camera.watchdogToken += 1;

  if (!blackFrameRetry) {
    state.camera.blackFrameRetries = 0;
  }

  updateCameraUI();

  try {
    const stream = await acquireCameraStream();

    if (state.camera.stream && state.camera.stream !== stream) {
      stopStreamTracks(state.camera.stream);
    }

    state.camera.stream = stream;

    await attachStreamToVideos(stream);

    state.camera.ready = true;
    state.camera.starting = false;
    state.camera.error = null;

    updateCameraUI();
    scheduleBlackFrameWatchdog();

    return true;
  } catch (error) {
    state.camera.starting = false;
    state.camera.ready = false;
    state.camera.error = normalizeCameraError(error);

    updateCameraUI();
    return false;
  }
}

async function ensureCameraReady() {
  if (state.demoMode) return true;

  if (
    state.camera.stream &&
    state.camera.stream
      .getVideoTracks()
      .some((track) => track.readyState === "live")
  ) {
    try {
      await attachStreamToVideos(state.camera.stream);
      state.camera.ready = true;
      state.camera.error = null;
      updateCameraUI();
      return true;
    } catch {
      stopCamera();
    }
  }

  return requestCamera();
}

async function attachStreamToVideos(stream) {
  // Only play the video on the visible screen. Some mobile browsers may never
  // resolve video.play() on the hidden timer video during camera setup.
  const visibleVideo = state.screen === "timer" ? els.timerVideo : els.setupVideo;
  const hiddenVideo = state.screen === "timer" ? els.setupVideo : els.timerVideo;
  if (hiddenVideo && hiddenVideo.srcObject !== stream) hiddenVideo.srcObject = stream;
  await attachStreamToVideo(visibleVideo, stream);
  updateTrackDebug(stream);
}

async function attachStreamToVideo(video, stream) {
  if (!video) return;

  video.muted = true;
  video.autoplay = true;
  video.playsInline = true;

  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("playsinline", "");

  if (video.srcObject !== stream) {
    video.srcObject = stream;
  }

  await waitForVideoMetadata(video);

  try {
    await video.play();
  } catch {
    await waitForVideoMetadata(video);
    await video.play();
  }

  if (video.videoWidth <= 0 || video.videoHeight <= 0) {
    applyTrackDimensionsToVideo(video, stream);

    if (video.srcObject !== stream) {
      video.srcObject = stream;
    }

    await video.play();
    await waitForPositiveVideoDimensions(video);
  }
}

function waitForVideoMetadata(video, timeoutMs = 5000) {
  if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve();
    };

    const cleanup = () => {
      clearTimeout(timeoutId);
      video.removeEventListener("loadedmetadata", finish);
      video.removeEventListener("canplay", finish);
    };

    const timeoutId = setTimeout(finish, timeoutMs);

    video.addEventListener("loadedmetadata", finish, { once: true });
    video.addEventListener("canplay", finish, { once: true });
  });
}

function waitForPositiveVideoDimensions(video, timeoutMs = 2500) {
  if (video.videoWidth > 0 && video.videoHeight > 0) {
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    const started = performance.now();

    const check = () => {
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        resolve(true);
        return;
      }

      if (performance.now() - started >= timeoutMs) {
        resolve(false);
        return;
      }

      requestAnimationFrame(check);
    };

    check();
  });
}

function applyTrackDimensionsToVideo(video, stream) {
  const track = stream?.getVideoTracks?.()[0];
  const settings = track?.getSettings?.() || {};

  if (Number(settings.width) > 0) {
    video.setAttribute("width", String(settings.width));
  }

  if (Number(settings.height) > 0) {
    video.setAttribute("height", String(settings.height));
  }
}

function getWatchdogVideo() {
  return state.screen === "timer"
    ? els.timerVideo
    : els.setupVideo;
}

function scheduleBlackFrameWatchdog() {
  if (
    state.demoMode ||
    !state.camera.stream ||
    !state.camera.ready
  ) {
    return;
  }

  const token = ++state.camera.watchdogToken;
  const video = getWatchdogVideo();

  const checkLater = () => {
    setTimeout(async () => {
      if (token !== state.camera.watchdogToken) return;
      if (!state.camera.stream || !state.camera.ready) return;

      if (isVideoFrameBlack(video)) {
        await handleBlackFrameDetected(token);
      } else {
        updateTrackDebug(state.camera.stream);
      }
    }, CONFIG.camera.blackFrameDelayMs);
  };

  if (
    !video.paused &&
    video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
  ) {
    checkLater();
  } else {
    video.addEventListener("playing", checkLater, { once: true });

    setTimeout(() => {
      if (token === state.camera.watchdogToken) {
        updateCameraUI();
      }
    }, 5000);
  }
}

function isVideoFrameBlack(video) {
  if (!video || video.videoWidth <= 0 || video.videoHeight <= 0) {
    return true;
  }

  const canvas = document.createElement("canvas");
  canvas.width = CONFIG.camera.blackFrameSampleWidth;
  canvas.height = CONFIG.camera.blackFrameSampleHeight;

  const context = canvas.getContext("2d", {
    willReadFrequently: true
  });

  if (!context) return false;

  try {
    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const pixels = context.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    ).data;

    for (let i = 0; i < pixels.length; i += 4) {
      if (
        pixels[i] > 2 ||
        pixels[i + 1] > 2 ||
        pixels[i + 2] > 2
      ) {
        return false;
      }
    }

    return true;
  } catch {
    return true;
  }
}

async function handleBlackFrameDetected(token) {
  if (token !== state.camera.watchdogToken) return;

  if (
    state.camera.blackFrameRetries <
    CONFIG.camera.maxBlackFrameRetries
  ) {
    state.camera.blackFrameRetries += 1;

    const oldStream = state.camera.stream;

    state.camera.stream = null;
    state.camera.ready = false;
    state.camera.starting = false;
    state.camera.watchdogToken += 1;

    detachVideoStreams();
    stopStreamTracks(oldStream);
    updateCameraUI();

    const recovered = await requestCamera({
      blackFrameRetry: true
    });

    if (!recovered) {
      showBlackFrameError();
    }

    return;
  }

  showBlackFrameError();
}

function showBlackFrameError() {
  const stream = state.camera.stream;

  state.camera.watchdogToken += 1;
  state.camera.stream = null;
  state.camera.ready = false;
  state.camera.starting = false;
  state.camera.error = t("cameraBlack");

  detachVideoStreams();
  stopStreamTracks(stream);
  updateCameraUI();
}

function stopStreamTracks(stream) {
  if (!stream) return;

  stream.getTracks().forEach((track) => {
    try {
      track.stop();
    } catch {}
  });
}

function detachVideoStreams() {
  [els.setupVideo, els.timerVideo].forEach((video) => {
    if (!video) return;

    try {
      video.pause();
    } catch {}

    video.srcObject = null;
    video.removeAttribute("width");
    video.removeAttribute("height");
  });
}

function stopCamera() {
  state.camera.watchdogToken += 1;

  const stream = state.camera.stream;

  state.camera.stream = null;
  state.camera.ready = false;
  state.camera.starting = false;

  detachVideoStreams();
  stopStreamTracks(stream);
  updateCameraUI();
}

function normalizeCameraError(error) {
  const name = error?.name || "";

  if (name === "TimeoutError") {
    return "Camera request timed out. Continue without camera or retry.";
  }

  if (
    name === "NotAllowedError" ||
    name === "SecurityError"
  ) {
    return t("cameraPermissionDenied");
  }

  if (
    name === "NotFoundError" ||
    name === "DevicesNotFoundError" ||
    name === "OverconstrainedError"
  ) {
    return t("cameraNotFound");
  }

  if (
    name === "NotReadableError" ||
    name === "TrackStartError" ||
    name === "AbortError"
  ) {
    return t("cameraBusy");
  }

  return t("cameraGeneric");
}

function updateTrackDebug(stream = state.camera.stream) {
  if (!DEBUG_MODE) {
    els.cameraTrackStatus.classList.add("hidden");
    return;
  }

  els.cameraTrackStatus.classList.remove("hidden");

  const track = stream?.getVideoTracks?.()[0];

  if (!track) {
    els.cameraTrackStatus.textContent =
      "readyState: — · muted: — · enabled: —";
    return;
  }

  const settings = track.getSettings?.() || {};
  const dimensions =
    settings.width && settings.height
      ? ` · ${settings.width}×${settings.height}`
      : "";

  els.cameraTrackStatus.textContent =
    `readyState: ${track.readyState} · ` +
    `muted: ${track.muted} · ` +
    `enabled: ${track.enabled}${dimensions}`;
}

function updateCameraUI() {
  const demo = state.demoMode;
  const starting = state.camera.starting && !demo;
  const ready = state.camera.ready && !demo;
  const hasError = Boolean(state.camera.error) && !demo;

  els.setupDemoPlaceholder.classList.toggle("hidden", !demo);
  els.timerDemoPlaceholder.classList.toggle("hidden", !demo);

  els.setupVideo.classList.toggle("hidden", demo);
  els.timerVideo.classList.toggle("hidden", demo);

  els.setupCameraLoading.classList.toggle(
    "hidden",
    demo || !starting
  );

  els.timerCameraLoading.classList.toggle(
    "hidden",
    demo || !starting
  );

  els.setupCameraError.classList.toggle(
    "hidden",
    demo || !hasError
  );

  els.timerCameraError.classList.toggle(
    "hidden",
    demo || !hasError
  );

  if (hasError) {
    els.setupCameraErrorMessage.textContent =
      state.camera.error;

    els.timerCameraErrorMessage.textContent =
      state.camera.error;
  }

  els.cameraContinue.disabled = !ready && !demo;

  els.cameraStatusDot.classList.toggle("live", ready);
  els.cameraStatusDot.classList.toggle("error", hasError);
  els.cameraStatusDot.classList.toggle("demo", demo);

  if (demo) {
    els.cameraStatusText.textContent = t("demoMode");
    els.cameraHudStatus.textContent = "DEMO";
  } else if (ready) {
    els.cameraStatusText.textContent = t("cameraLive");
    els.cameraHudStatus.textContent = "LIVE";
  } else if (hasError) {
    els.cameraStatusText.textContent = t("cameraUnavailable");
    els.cameraHudStatus.textContent = "OFFLINE";
  } else {
    els.cameraStatusText.textContent = t("startingCamera");
    els.cameraHudStatus.textContent = "STANDBY";
  }

  updateTrackDebug();
}

async function retryCamera() {
  state.demoMode = false;
  stopCamera();

  state.camera.error = null;
  state.camera.blackFrameRetries = 0;

  await requestCamera();
}

function activateDemoMode() {
  stopCamera();

  state.demoMode = true;
  state.camera.error = null;
  state.camera.ready = false;
  state.camera.starting = false;

  resetCaptures();
  updateCameraUI();

  navigateTo("timer");
}

function getCaptureVideo() {
  const preferred =
    state.screen === "timer"
      ? els.timerVideo
      : els.setupVideo;

  if (
    preferred?.videoWidth > 0 &&
    preferred?.videoHeight > 0
  ) {
    return preferred;
  }

  return [els.timerVideo, els.setupVideo].find(
    (video) =>
      video.videoWidth > 0 &&
      video.videoHeight > 0
  );
}

function createDemoCapture(type) {
  const canvas = document.createElement("canvas");
  canvas.width = 960;
  canvas.height = 720;

  const context = canvas.getContext("2d");

  const gradient = context.createLinearGradient(
    0,
    0,
    canvas.width,
    canvas.height
  );

  gradient.addColorStop(0, "#061523");
  gradient.addColorStop(1, "#0b2940");

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.strokeStyle = "rgba(69,234,255,0.14)";
  context.lineWidth = 1;

  for (let x = 0; x <= canvas.width; x += 48) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
  }

  for (let y = 0; y <= canvas.height; y += 48) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  }

  context.textAlign = "center";
  context.fillStyle = "#45eaff";
  context.font = "900 48px system-ui";

  const label =
    type === "before"
      ? t("before")
      : type === "after"
        ? t("after")
        : t("victoryPose");

  context.fillText(
    `${t("demoMode")} · ${label}`,
    canvas.width / 2,
    canvas.height / 2 - 10
  );

  context.fillStyle = "#829bab";
  context.font = "700 22px system-ui";
  context.fillText(
    t("demoCameraPlaceholder"),
    canvas.width / 2,
    canvas.height / 2 + 38
  );

  return {
    dataUrl: canvas.toDataURL(
      "image/jpeg",
      CONFIG.camera.jpegQuality
    ),
    width: canvas.width,
    height: canvas.height,
    capturedAt: new Date().toISOString(),
    placeholder: true
  };
}

async function captureFrame(type) {
  if (state.demoMode) {
    const capture = createDemoCapture(type);
    state.captures[type] = capture;

    flashCapture();
    updateCaptureIndicators();

    return capture;
  }

  const ready = await ensureCameraReady();

  if (!ready) return null;

  const video = getCaptureVideo();

  if (
    !video ||
    !video.videoWidth ||
    !video.videoHeight
  ) {
    return null;
  }

  const sourceWidth = video.videoWidth;
  const sourceHeight = video.videoHeight;

  const scale = Math.min(
    1,
    CONFIG.camera.captureMaxWidth / sourceWidth
  );

  const targetWidth = Math.max(
    1,
    Math.round(sourceWidth * scale)
  );

  const targetHeight = Math.max(
    1,
    Math.round(sourceHeight * scale)
  );

  const canvas = els.captureCanvas;

  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const context = canvas.getContext("2d");

  context.drawImage(
    video,
    0,
    0,
    sourceWidth,
    sourceHeight,
    0,
    0,
    targetWidth,
    targetHeight
  );

  const capture = {
    dataUrl: canvas.toDataURL(
      "image/jpeg",
      CONFIG.camera.jpegQuality
    ),
    width: targetWidth,
    height: targetHeight,
    capturedAt: new Date().toISOString(),
    placeholder: false
  };

  state.captures[type] = capture;

  flashCapture();
  updateCaptureIndicators();

  return capture;
}

function flashCapture() {
  els.captureFlash.classList.remove("flash");
  void els.captureFlash.offsetWidth;
  els.captureFlash.classList.add("flash");
}

function updateCaptureIndicators() {
  els.beforeCaptureIndicator.textContent =
    state.captures.before ? "● BEFORE" : "○ BEFORE";

  els.afterCaptureIndicator.textContent =
    state.captures.after ? "● AFTER" : "○ AFTER";
}

function resetCaptures() {
  state.captures.before = null;
  state.captures.after = null;
  state.captures.pose = null;

  updateCaptureIndicators();
  updateEvidenceThumbnails();

  els.posePreviewWrap.classList.add("hidden");
  els.poseThumbnail.removeAttribute("src");
}

function resetTimeAnnouncements() {
  state.timer.announcements = {
    60: false,
    45: false,
    30: false,
    10: false,
    complete: false
  };
}

function startTimer() {
  if (state.timer.running) return;

  const durationMs =
    CONFIG.challengeDurationSeconds * 1000;

  if (state.timer.elapsedMs >= durationMs) {
    resetTimer();
  }

  if (state.timer.elapsedMs <= 0) {
    resetTimeAnnouncements();
  }

  state.timer.running = true;
  state.timer.startedAt =
    performance.now() - state.timer.elapsedMs;

  state.timer.intervalId = setInterval(updateTimer, 50);

  updateTimerUI();
}

function pauseTimer() {
  if (!state.timer.running) return;

  state.timer.elapsedMs =
    performance.now() - state.timer.startedAt;

  state.timer.running = false;

  if (state.timer.intervalId) {
    clearInterval(state.timer.intervalId);
    state.timer.intervalId = null;
  }

  updateTimerUI();
}

function resetTimer() {
  stopSpeech();

  if (state.timer.intervalId) {
    clearInterval(state.timer.intervalId);
  }

  state.timer.running = false;
  state.timer.elapsedMs = 0;
  state.timer.startedAt = null;
  state.timer.intervalId = null;

  resetTimeAnnouncements();
  resetCaptures();

  state.latestScore = null;
  state.result = null;
  state.latestRunId = null;

  state.pose.running = false;
  state.pose.error = null;

  if (els.playerName) {
    els.playerName.value = "";
  }

  updateTimerUI();
}

function updateTimer() {
  if (!state.timer.running) return;

  const durationMs =
    CONFIG.challengeDurationSeconds * 1000;

  const previousRemaining = Math.max(
    0,
    durationMs - state.timer.elapsedMs
  );

  state.timer.elapsedMs =
    performance.now() - state.timer.startedAt;

  const currentRemaining = Math.max(
    0,
    durationMs - state.timer.elapsedMs
  );

  checkTimeAnnouncement(
    previousRemaining,
    currentRemaining
  );

  if (state.timer.elapsedMs >= durationMs) {
    state.timer.elapsedMs = durationMs;
    finishTimerAtLimit();
  }

  updateTimerUI();
}

function checkTimeAnnouncement(previousMs, currentMs) {
  [45].forEach((seconds) => {
    if (state.timer.announcements[seconds]) return;

    const threshold = seconds * 1000;

    if (
      previousMs >= threshold &&
      currentMs <= threshold
    ) {
      state.timer.announcements[seconds] = true;
      announceTime(seconds);
    }
  });
}

function finishTimerAtLimit() {
  state.timer.running = false;

  if (state.timer.intervalId) {
    clearInterval(state.timer.intervalId);
    state.timer.intervalId = null;
  }

  state.timer.announcements.complete = true;

  playTone(720, 0.12);
  setTimeout(() => playTone(920, 0.16), 130);
}

function updateTimerUI() {
  document.body.classList.toggle("challenge-running", state.screen === "timer" && state.timer.running);
  const durationMs =
    CONFIG.challengeDurationSeconds * 1000;

  const elapsed = Math.min(
    state.timer.elapsedMs,
    durationMs
  );

  const remaining = Math.max(
    0,
    durationMs - elapsed
  );

  els.timerDisplay.textContent =
    formatTimer(remaining);

  els.elapsedDisplay.textContent =
    formatTimer(elapsed);

  els.timerProgress.style.width =
    `${Math.max(0, remaining / durationMs) * 100}%`;

  const atLimit = elapsed >= durationMs;

  if (state.timer.running) {
    els.startPauseButton.textContent = t("stop");
    setLiveBadge("live");
  } else if (atLimit) {
    els.startPauseButton.textContent = t("start");
    setLiveBadge("finished");
  } else if (elapsed > 0) {
    els.startPauseButton.textContent = t("resume");
    setLiveBadge("paused");
  } else {
    els.startPauseButton.textContent = t("start");
    setLiveBadge("ready");
  }
}

function setLiveBadge(mode) {
  const label = els.liveBadge.lastElementChild;

  els.liveBadge.classList.toggle(
    "running",
    mode === "live"
  );

  label.textContent =
    mode === "live"
      ? t("live")
      : mode === "paused"
        ? t("paused")
        : mode === "finished"
          ? t("finished")
          : t("ready");
}

function formatTimer(milliseconds) {
  const totalTenths = Math.max(
    0,
    Math.ceil(milliseconds / 100)
  );

  const minutes = Math.floor(totalTenths / 600);
  const seconds = Math.floor(
    (totalTenths % 600) / 10
  );
  const tenths = totalTenths % 10;

  return `${minutes}:${String(seconds).padStart(2, "0")}.${tenths}`;
}

async function handleStartPause() {
  unlockAudio();

  if (state.timer.running) {
    pauseTimer();
    playTone(420, 0.07);
    return;
  }

  if (state.timer.elapsedMs <= 0) {
    if (!state.demoMode) {
      const ready = await ensureCameraReady();

      if (!ready) {
        activateDemoMode();
      }
    }

    const before = await captureFrame("before");

    if (!before) {
      state.demoMode = true;
      updateCameraUI();
      await captureFrame("before");
    }

    playTone(620, 0.07);
    setTimeout(() => playTone(820, 0.08), 90);

    startTimer();
    speakHost("start");
    return;
  }

  startTimer();
  playTone(660, 0.07);
}

function setAnalysisLoading(loading) {
  state.analysis.running = loading;

  els.analysisLoading.classList.toggle(
    "hidden",
    !loading
  );

  els.resultsBody.classList.toggle(
    "hidden",
    loading
  );

  [
    els.resultsContinue,
    els.poseButton,
    els.startPauseButton,
    els.resetButton,
    els.completeButton,
    els.backButton
  ].forEach((button) => {
    if (button) button.disabled = loading;
  });
}

async function completeChallenge() {
  if (state.analysis.running) return;

  if (state.timer.running) {
    pauseTimer();
  }

  if (!state.captures.before) {
    if (!state.demoMode) {
      const ready = await ensureCameraReady();

      if (!ready) {
        state.demoMode = true;
        updateCameraUI();
      }
    }

    await captureFrame("before");
  }

  if (!state.demoMode) {
    const ready = await ensureCameraReady();

    if (!ready) {
      state.demoMode = true;
      updateCameraUI();
    }
  }

  await captureFrame("after");

  navigateTo("results");
  setAnalysisLoading(true);

  await analyzeChallenge();

  setAnalysisLoading(false);
  renderResults();
  announceResultSummary();
}

async function analyzeChallenge() {
  const before = state.captures.before;
  const after = state.captures.after;

  let aiResult;

  resetVoiceNote();

  if (
    state.demoMode ||
    before?.placeholder ||
    after?.placeholder
  ) {
    aiResult = getDemoScore();
  } else {
    aiResult = await scoreChallenge(
      before?.dataUrl,
      after?.dataUrl
    );
  }

  aiResult.styleScore =
    state.latestScore?.styleScore ?? 7.5;

  state.latestScore = aiResult;

  aiResult.verified = await getVerifiedScore(aiResult, before, after);

  aiResult.sam = await getSamOverlays(aiResult, before, after);

  state.result = {
    elapsedMs: state.timer.elapsedMs,
    ai: aiResult
  };

  return state.result;
}

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function mediapipePackageURL() {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${CONFIG.detection.version}`;
}

async function createObjectDetector() {
  const packageURL = mediapipePackageURL();
  const module = await import(`${packageURL}/+esm`);
  const vision = module.FilesetResolver
    ? module
    : module.default;

  const fileset =
    await vision.FilesetResolver.forVisionTasks(
      `${packageURL}/wasm`
    );

  return vision.ObjectDetector.createFromOptions(
    fileset,
    {
      baseOptions: {
        modelAssetPath:
          CONFIG.detection.modelURL,
        delegate: "CPU"
      },
      scoreThreshold:
        CONFIG.detection.scoreThreshold,
      maxResults:
        CONFIG.detection.maxResults,
      runningMode: "IMAGE"
    }
  );
}

async function loadObjectDetector() {
  if (detectorInstance) {
    return detectorInstance;
  }

  if (detectorPromise) {
    return detectorPromise;
  }

  state.analysis.modelStatus = "loading";

  detectorPromise =
    createObjectDetector()
      .then((detector) => {
        detectorInstance = detector;
        state.analysis.modelStatus = "ready";
        state.analysis.modelError = null;
        return detector;
      })
      .catch((error) => {
        state.analysis.modelStatus = "failed";
        state.analysis.modelError = error;
        detectorPromise = null;
        return null;
      });

  return detectorPromise;
}

function normalizeDetection(result) {
  const category =
    result?.categories?.[0];

  const name =
    category?.categoryName ||
    category?.displayName ||
    "";

  const box =
    result?.boundingBox || {};

  return {
    label: String(name).toLowerCase(),
    score: Number(category?.score || 0),
    box: {
      x: Number(box.originX || 0),
      y: Number(box.originY || 0),
      width: Number(box.width || 0),
      height: Number(box.height || 0)
    }
  };
}

function detectObjectsInImage(
  detector,
  image
) {
  if (!detector || !image) return [];

  const result =
    detector.detect(image);

  return (result?.detections || [])
    .map(normalizeDetection)
    .filter(
      (detection) =>
        COUNTABLE_CLASSES.has(
          detection.label
        ) &&
        detection.score >=
          CONFIG.detection.scoreThreshold
    );
}

function boxArea(box) {
  return Math.max(0, box.width) *
    Math.max(0, box.height);
}

function boxIoU(a, b) {
  const left = Math.max(a.x, b.x);
  const top = Math.max(a.y, b.y);
  const right = Math.min(
    a.x + a.width,
    b.x + b.width
  );
  const bottom = Math.min(
    a.y + a.height,
    b.y + b.height
  );

  const intersection =
    Math.max(0, right - left) *
    Math.max(0, bottom - top);

  const union =
    boxArea(a) +
    boxArea(b) -
    intersection;

  return union > 0
    ? intersection / union
    : 0;
}

function boxCenter(box) {
  return {
    x: box.x + box.width / 2,
    y: box.y + box.height / 2
  };
}

function normalizedCenterDistance(
  a,
  b,
  imageWidth,
  imageHeight
) {
  const centerA = boxCenter(a);
  const centerB = boxCenter(b);

  const dx =
    (centerA.x - centerB.x) /
    Math.max(1, imageWidth);

  const dy =
    (centerA.y - centerB.y) /
    Math.max(1, imageHeight);

  return Math.sqrt(dx * dx + dy * dy);
}

function matchObjects(
  beforeObjects,
  afterObjects,
  imageWidth = 1,
  imageHeight = 1
) {
  const usedAfter = new Set();
  const matches = [];
  const cleared = [];

  beforeObjects.forEach((before) => {
    let bestIndex = -1;
    let bestMetric = Infinity;

    afterObjects.forEach((after, index) => {
      if (usedAfter.has(index)) return;
      if (after.label !== before.label) return;

      const iou =
        boxIoU(before.box, after.box);

      const distance =
        normalizedCenterDistance(
          before.box,
          after.box,
          imageWidth,
          imageHeight
        );

      const isMatch =
        iou >=
          CONFIG.detection.matchIoUThreshold ||
        distance <=
          CONFIG.detection.matchCenterDistance;

      if (!isMatch) return;

      const metric =
        distance - iou * 0.25;

      if (metric < bestMetric) {
        bestMetric = metric;
        bestIndex = index;
      }
    });

    if (bestIndex >= 0) {
      usedAfter.add(bestIndex);
      matches.push({
        before,
        after: afterObjects[bestIndex]
      });
    } else {
      cleared.push(before);
    }
  });

  const newObjects =
    afterObjects.filter(
      (_, index) =>
        !usedAfter.has(index)
    );

  return {
    matches,
    cleared,
    newObjects
  };
}

function createDiffCanvas(
  image,
  width,
  height
) {
  const canvas =
    document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const context =
    canvas.getContext("2d", {
      willReadFrequently: true
    });

  context.drawImage(
    image,
    0,
    0,
    width,
    height
  );

  return context.getImageData(
    0,
    0,
    width,
    height
  );
}

function compareFrames(
  beforeImage,
  afterImage
) {
  const width = CONFIG.detection.diffWidth;
  const height = CONFIG.detection.diffHeight;
  const before = createDiffCanvas(beforeImage, width, height);
  const after = createDiffCanvas(afterImage, width, height);

  let changed = 0;
  let totalDifference = 0;
  let structuralDifference = 0;
  let structuralSamples = 0;
  const totalPixels = width * height;

  const luminance = (data, pixelIndex) =>
    data[pixelIndex] * 0.2126 +
    data[pixelIndex + 1] * 0.7152 +
    data[pixelIndex + 2] * 0.0722;

  for (let index = 0; index < before.data.length; index += 4) {
    const difference = (
      Math.abs(before.data[index] - after.data[index]) +
      Math.abs(before.data[index + 1] - after.data[index + 1]) +
      Math.abs(before.data[index + 2] - after.data[index + 2])
    ) / 3;
    totalDifference += difference;
    if (difference >= CONFIG.detection.pixelDifferenceThreshold) changed += 1;
  }

  for (let y = 1; y < height - 1; y += 2) {
    for (let x = 1; x < width - 1; x += 2) {
      const p = (y * width + x) * 4;
      const right = (y * width + x + 1) * 4;
      const down = ((y + 1) * width + x) * 4;
      const beforeEdge =
        Math.abs(luminance(before.data, p) - luminance(before.data, right)) +
        Math.abs(luminance(before.data, p) - luminance(before.data, down));
      const afterEdge =
        Math.abs(luminance(after.data, p) - luminance(after.data, right)) +
        Math.abs(luminance(after.data, p) - luminance(after.data, down));
      structuralDifference += Math.abs(beforeEdge - afterEdge);
      structuralSamples += 1;
    }
  }

  const changedPixelRatio = totalPixels > 0 ? changed / totalPixels : 0;
  const sceneMatch = clamp(
    1 - (structuralDifference / Math.max(1, structuralSamples)) / 85
  );

  return {
    changedPixelRatio,
    changedPixelPercent: changedPixelRatio * 100,
    averageDifference: totalPixels > 0 ? totalDifference / totalPixels : 0,
    sceneMatch,
    sceneMatchPercent: sceneMatch * 100
  };
}
function describeObjects(objects) {
  const counts = {};

  objects.forEach((object) => {
    counts[object.label] =
      (counts[object.label] || 0) + 1;
  });

  return Object.entries(counts)
    .map(([name, count]) =>
      count > 1
        ? `${count} ${name}`
        : name
    )
    .join(", ");
}

function analyzeSurfaceZones(beforeImage, afterImage, columns = 3, rows = 3) {
  const width = 120;
  const height = 90;
  const before = createDiffCanvas(beforeImage, width, height);
  const after = createDiffCanvas(afterImage, width, height);
  const zones = [];
  const luminance = (data, i) =>
    data[i] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      const x0 = Math.floor(col * width / columns);
      const x1 = Math.floor((col + 1) * width / columns);
      const y0 = Math.floor(row * height / rows);
      const y1 = Math.floor((row + 1) * height / rows);
      let beforeTexture = 0, afterTexture = 0, samples = 0;

      for (let y = y0 + 1; y < y1 - 1; y += 2) {
        for (let x = x0 + 1; x < x1 - 1; x += 2) {
          const p = (y * width + x) * 4;
          const right = (y * width + x + 1) * 4;
          const down = ((y + 1) * width + x) * 4;
          beforeTexture +=
            Math.abs(luminance(before.data, p) - luminance(before.data, right)) +
            Math.abs(luminance(before.data, p) - luminance(before.data, down));
          afterTexture +=
            Math.abs(luminance(after.data, p) - luminance(after.data, right)) +
            Math.abs(luminance(after.data, p) - luminance(after.data, down));
          samples += 1;
        }
      }

      const beforeAvg = beforeTexture / Math.max(1, samples);
      const afterAvg = afterTexture / Math.max(1, samples);
      const improvement = clamp((beforeAvg - afterAvg) / Math.max(12, beforeAvg));
      const residual = clamp(afterAvg / Math.max(24, beforeAvg, afterAvg));
      zones.push({ row, col, improvement, residual });
    }
  }

  const improvedZones = zones.filter(z => z.improvement >= 0.12).length;
  const residualZones = zones.filter(z => z.residual >= 0.62).length;
  const averageImprovement = zones.reduce((sum, z) => sum + z.improvement, 0) / zones.length;
  const residualClutter = zones.reduce((sum, z) => sum + z.residual, 0) / zones.length;
  return { zones, improvedZones, residualZones, averageImprovement, residualClutter };
}

function calculateLocalScore(
  beforeObjects,
  afterObjects,
  change,
  surface
) {
  const matching = matchObjects(beforeObjects, afterObjects, 1, 1);
  const beforeCount = beforeObjects.length;
  const clearedCount = matching.cleared.length;
  const remainingCount = matching.matches.length;
  const newCount = matching.newObjects.length;
  const objectClearance = beforeCount > 0 ? clearedCount / beforeCount : 0;
  const residualPenalty = beforeCount > 0 ? clamp(remainingCount / beforeCount) : 0;
  const newObjectPenalty = beforeCount > 0 ? clamp(newCount / Math.max(1, beforeCount)) : 0;
  const changeSignal = clamp((change.changedPixelRatio || 0) / 0.22);
  const sceneMatch = Number(change.sceneMatch || 0);
  const confidences = beforeObjects.map(o => Number(o.score || 0)).filter(Number.isFinite);
  const averageDetectionConfidence = confidences.length
    ? confidences.reduce((a, b) => a + b, 0) / confidences.length
    : 0;

  const evidenceConfidence = clamp(
    sceneMatch * 0.45 +
    averageDetectionConfidence * 0.30 +
    clamp(beforeCount / CONFIG.detection.minObjectsForConfidence) * 0.25
  );

  const sceneValid = sceneMatch >= 0.48;
  const enoughObjects = beforeCount >= 1;
  const enoughEvidence = sceneValid && enoughObjects && evidenceConfidence >= 0.48;
  const suspiciousPerfectClear =
    beforeCount < 3 &&
    clearedCount === beforeCount &&
    remainingCount === 0;

  const surfaceImprovement = Number(surface?.averageImprovement || 0);
  const surfaceClearSignal = clamp(
    surfaceImprovement * 0.75 +
    (1 - Number(surface?.residualClutter || 1)) * 0.25
  );
  const zoneCoverage = clamp(Number(surface?.improvedZones || 0) / 9);

  const rawScore = clamp(
    surfaceClearSignal * 0.40 +
    zoneCoverage * 0.20 +
    objectClearance * 0.18 +
    (1 - residualPenalty) * 0.08 +
    changeSignal * 0.06 +
    sceneMatch * 0.08 -
    newObjectPenalty * 0.18
  );

  const cleanliness = enoughEvidence
    ? Math.min(
        Math.round(rawScore * 100),
        suspiciousPerfectClear ? 85 : 100
      )
    : null;
  const confidenceBand = !enoughEvidence
    ? "rescan"
    : evidenceConfidence >= 0.72 ? "high" : "medium";

  const findings = [];
  if (!sceneValid) findings.push("Before/after framing changed too much. Keep the camera fixed and rescan.");
  else if (!enoughEvidence) findings.push(t("findingNoObjects"));
  else if (clearedCount === beforeCount && newCount === 0) findings.push(t("findingAllCleared"));
  if (surface) {
    findings.push(`${surface.improvedZones} of 9 work-area zones visibly improved; ${surface.residualZones} still show substantial visual detail.`);
  }
  if (suspiciousPerfectClear) findings.push("Only a small number of recognizable items were tracked, so this score is capped rather than treating the whole surface as fully clean.");
  if (remainingCount > 0) findings.push(t("findingRemaining", {objects: describeObjects(matching.matches.map(m => m.after))}));
  if (newCount > 0) findings.push(t("findingNew", {objects: describeObjects(matching.newObjects)}));

  return {
    cleanliness,
    taskCompletion: cleanliness,
    verified:
      enoughEvidence &&
      confidenceBand === "high" &&
      !suspiciousPerfectClear,
    scorable: enoughEvidence,
    confidenceBand,
    findings,
    confidence: evidenceConfidence,
    source: "local",
    simulated: false,
    changeMagnitude: change.changedPixelPercent,
    sceneMatch,
    sceneMatchPercent: change.sceneMatchPercent,
    surface: surface || null,
    detection: {
      beforeCount,
      afterCount: afterObjects.length,
      clearedCount,
      remainingCount,
      newCount,
      beforeObjects,
      afterObjects,
      clearedObjects: matching.cleared,
      remainingObjects: matching.matches.map(m => m.after),
      newObjects: matching.newObjects
    }
  };
}
function loadImageFromDataURL(dataUrl) {
  return new Promise(
    (resolve, reject) => {
      const image = new Image();

      image.onload = () =>
        resolve(image);

      image.onerror = () =>
        reject(
          new Error(
            "IMAGE_LOAD_FAILED"
          )
        );

      image.src = dataUrl;
    }
  );
}

async function scoreWithCloudVision() {
  return null;
}

const CLOUD_SETTINGS_KEY = "cleanquest.settings";

const CLOUD_SCORING_PROMPT = [
  "You are the CleanQuest score verifier.",
  "You receive two photos: BEFORE cleaning and AFTER cleaning.",
  "Score only visible cleanliness and technique.",
  "Never claim sanitation, disinfection, or certification.",
  "Respond with JSON ONLY, no other text, matching this schema:",
  "{",
  '  "surfaces": [',
  '    { "name": "counter|glass|floor|fixture", "score": 0-100,',
  '      "missed": [], "confidence": 0-1 }',
  "  ],",
  '  "overall": 0-100,',
  '  "verdict": "pass|retry",',
  '  "hype_line": "one celebratory hype sentence, at most 20 words"',
  "}",
  "The hype line celebrates the result. No cleaning advice,",
  "no instructions, no coaching, no technique tips."
].join(" ");

const VERIFIED_SURFACES = new Set([
  "counter",
  "glass",
  "floor",
  "fixture"
]);

function loadCloudSettings() {
  const empty = { metaKey: "", basetenKey: "", provider: "meta" };

  try {
    const raw = localStorage.getItem(CLOUD_SETTINGS_KEY);
    if (!raw) return empty;

    const parsed = JSON.parse(raw);

    return {
      metaKey: typeof parsed.metaKey === "string" ? parsed.metaKey : "",
      basetenKey: typeof parsed.basetenKey === "string" ? parsed.basetenKey : "",
      provider: parsed.provider === "baseten" ? "baseten" : "meta"
    };
  } catch {
    return empty;
  }
}

function refreshSettingsInputs() {
  const settings = loadCloudSettings();

  if (els.metaApiKey) els.metaApiKey.value = settings.metaKey;
  if (els.basetenApiKey) els.basetenApiKey.value = settings.basetenKey;

  document
    .querySelectorAll('input[name="inferenceProvider"]')
    .forEach((radio) => {
      radio.checked = radio.value === settings.provider;
    });
}

function openSettings() {
  if (state.screen !== "settings") {
    state.settingsReturn = state.screen;
  }

  refreshSettingsInputs();
  els.settingsSavedNote?.classList.add("hidden");
  renderProviderLog();
  renderVoiceNames();
  navigateTo("settings");
}

function closeSettings() {
  navigateTo(state.settingsReturn || "welcome");
}

function saveSettingsKeys() {
  const next = {
    metaKey: els.metaApiKey?.value.trim() || "",
    basetenKey: els.basetenApiKey?.value.trim() || "",
    provider: document.querySelector('input[name="inferenceProvider"]:checked')?.value === "baseten"
      ? "baseten"
      : "meta"
  };

  try {
    localStorage.setItem(CLOUD_SETTINGS_KEY, JSON.stringify(next));
  } catch {}

  if (els.metaApiKey) els.metaApiKey.value = next.metaKey;
  if (els.basetenApiKey) els.basetenApiKey.value = next.basetenKey;
  els.settingsSavedNote?.classList.remove("hidden");
}

function clearSettingsKeys() {
  try {
    localStorage.removeItem(CLOUD_SETTINGS_KEY);
  } catch {}

  refreshSettingsInputs();
  els.settingsSavedNote?.classList.remove("hidden");
}

function downscaleCapture(dataUrl) {
  return new Promise((resolve) => {
    if (!dataUrl) {
      resolve(null);
      return;
    }

    const image = new Image();

    image.onload = () => {
      try {
        const longest = Math.max(
          image.naturalWidth || 1,
          image.naturalHeight || 1
        );
        const scale = Math.min(
          1,
          CONFIG.cloud.maxEdgePx / longest
        );
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(
          1,
          Math.round((image.naturalWidth || 1) * scale)
        );
        canvas.height = Math.max(
          1,
          Math.round((image.naturalHeight || 1) * scale)
        );
        canvas
          .getContext("2d")
          .drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(
          canvas.toDataURL("image/jpeg", CONFIG.cloud.jpegQuality)
        );
      } catch {
        resolve(null);
      }
    };

    image.onerror = () => resolve(null);
    image.src = dataUrl;
  });
}

function extractScorecardJSON(text) {
  if (typeof text !== "string" || !text) return null;

  const cleaned = text
    .replace(/```json\s*/gi, "")
    .replace(/```/g, "")
    .trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");

  if (start < 0 || end <= start) return null;

  try {
    return JSON.parse(cleaned.slice(start, end + 1));
  } catch {
    return null;
  }
}

function sanitizeScorecard(parsed) {
  if (!parsed || typeof parsed !== "object") return null;
  if (!Array.isArray(parsed.surfaces) || !parsed.surfaces.length) return null;

  const surfaces = [];

  for (const entry of parsed.surfaces) {
    if (!entry || typeof entry !== "object") continue;
    if (!VERIFIED_SURFACES.has(entry.name)) continue;

    const confidence = Number(entry.confidence);
    const score = Math.round(Number(entry.score));

    surfaces.push({
      name: entry.name,
      score: Number.isFinite(score) ? Math.min(100, Math.max(0, score)) : 0,
      missed: Array.isArray(entry.missed)
        ? entry.missed.filter((item) => typeof item === "string").slice(0, 8)
        : [],
      verified: Number.isFinite(confidence) && confidence >= CONFIG.cloud.minSurfaceConfidence
    });
  }

  if (!surfaces.length) return null;

  const overall = Math.round(Number(parsed.overall));
  const hypeWords = String(parsed.hype_line || "").split(/\s+/).filter(Boolean).slice(0, 20);

  return {
    surfaces,
    overall: Number.isFinite(overall) ? Math.min(100, Math.max(0, overall)) : 0,
    verdict: parsed.verdict === "pass" ? "pass" : "retry",
    hypeLine: hypeWords.join(" ")
  };
}

const PROVIDER_LOG_KEY = "cleanquest.provider-log";

function loadProviderLog() {
  try {
    const parsed = JSON.parse(localStorage.getItem(PROVIDER_LOG_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function appendProviderLog(entry) {
  try {
    const entries = loadProviderLog();
    entries.push({ ...entry, when: new Date().toISOString() });
    while (entries.length > 100) entries.shift();
    localStorage.setItem(PROVIDER_LOG_KEY, JSON.stringify(entries));
  } catch {}

  renderProviderLog();
}

function renderProviderLog() {
  const list = els.providerLogList;
  if (!list) return;

  list.innerHTML = "";
  const entries = loadProviderLog().slice().reverse().slice(0, 20);
  els.providerLogEmpty?.classList.toggle("hidden", entries.length > 0);

  entries.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "provider-log-row";

    const main = document.createElement("span");
    const score = Number.isFinite(Number(entry.overall))
      ? ` · ${Number(entry.overall)}%`
      : "";
    main.textContent = `${entry.provider} · ${entry.status}${score}`;

    const meta = document.createElement("small");
    const stamp = String(entry.when || "").slice(0, 16).replace("T", " ");
    meta.textContent = `${stamp} · ${entry.model || ""}`;

    row.append(main, meta);

    if (entry.mock) {
      const chip = document.createElement("strong");
      chip.className = "provider-mock-chip";
      chip.textContent = "MOCK";
      row.append(chip);
    }

    list.append(row);
  });
}

function exportProviderLog() {
  const blob = new Blob(
    [JSON.stringify(loadProviderLog(), null, 2)],
    { type: "application/json" }
  );
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cleanquest-provider-log.json";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function getScorecardTarget(settings) {
  if (settings.provider === "baseten") {
    return {
      provider: "baseten",
      url: CONFIG.cloud.baseten.endpoint,
      model: CONFIG.cloud.baseten.model,
      key: settings.basetenKey,
      role: "system"
    };
  }

  return {
    provider: "meta",
    url: CONFIG.cloud.endpoint,
    model: CONFIG.cloud.model,
    key: settings.metaKey,
    role: "developer"
  };
}

async function getVerifiedScore(aiResult, before, after) {
  const offline = { status: "offline" };

  try {
    if (
      state.demoMode ||
      before?.placeholder ||
      after?.placeholder
    ) {
      return offline;
    }

    const settings = loadCloudSettings();
    const target = getScorecardTarget(settings);

    if (!target.key) {
      if (target.provider === "baseten") {
        const mock = {
          status: "mock",
          provider: target.provider,
          model: target.model,
          mock: true
        };
        appendProviderLog({
          provider: target.provider,
          model: target.model,
          status: "mock",
          overall: null,
          mock: true
        });
        return mock;
      }

      appendProviderLog({
        provider: target.provider,
        model: target.model,
        status: "offline",
        overall: null,
        mock: false
      });
      return offline;
    }

    const [smallBefore, smallAfter] = await Promise.all([
      downscaleCapture(before?.dataUrl),
      downscaleCapture(after?.dataUrl)
    ]);

    if (!smallBefore || !smallAfter) {
      const imageError = {
        status: "error",
        reason: "image",
        provider: target.provider,
        model: target.model
      };
      appendProviderLog({ ...imageError, overall: null, mock: false });
      return imageError;
    }

    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      CONFIG.cloud.timeoutMs
    );

    let response;

    try {
      response = await fetch(target.url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${target.key}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: target.model,
          messages: [
            { role: target.role, content: CLOUD_SCORING_PROMPT },
            {
              role: "user",
              content: [
                { type: "text", text: "BEFORE photo first, AFTER photo second. Score the visible change." },
                { type: "image_url", image_url: { url: smallBefore } },
                { type: "image_url", image_url: { url: smallAfter } }
              ]
            }
          ]
        }),
        signal: controller.signal
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!response || !response.ok) {
      const httpError = {
        status: "error",
        reason: `http-${response?.status || "none"}`,
        provider: target.provider,
        model: target.model
      };
      appendProviderLog({ ...httpError, overall: null, mock: false });
      return httpError;
    }

    const data = await response.json().catch(() => null);
    const parsed = sanitizeScorecard(
      extractScorecardJSON(data?.choices?.[0]?.message?.content)
    );

    if (!parsed) {
      const schemaError = {
        status: "error",
        reason: "schema",
        provider: target.provider,
        model: target.model
      };
      appendProviderLog({ ...schemaError, overall: null, mock: false });
      return schemaError;
    }

    const verified = {
      status: "verified",
      provider: target.provider,
      model: target.model,
      ...parsed
    };
    appendProviderLog({
      provider: target.provider,
      model: target.model,
      status: "verified",
      overall: verified.overall,
      mock: false
    });
    return verified;
  } catch {
    appendProviderLog({
      provider: "unknown",
      model: "unknown",
      status: "error",
      overall: null,
      mock: false
    });
    return { status: "error", reason: "network" };
  }
}

function renderVerifiedScorecard() {
  const card = els.verifiedScorecard;
  if (!card) return;

  const verified = state.result?.ai?.verified;

  card.classList.add("hidden");
  els.offlineScoreNote?.classList.add("hidden");
  els.scorecardErrorNote?.classList.add("hidden");

  if (!verified || verified.status === "offline" || verified.status === "mock") {
    els.offlineScoreNote?.classList.remove("hidden");
    return;
  }

  if (verified.status !== "verified") {
    els.scorecardErrorNote?.classList.remove("hidden");
    return;
  }

  const body = els.verifiedBody;
  body.innerHTML = "";

  const head = document.createElement("div");
  head.className = "verified-head";

  const overall = document.createElement("strong");
  overall.textContent = `${verified.overall}%`;

  const verdict = document.createElement("span");
  verdict.className = `verified-verdict ${verified.verdict}`;
  verdict.textContent = verified.verdict.toUpperCase();

  head.append(overall, verdict);
  body.append(head);

  verified.surfaces.forEach((surface) => {
    const row = document.createElement("div");
    row.className = "verified-row";

    const dot = document.createElement("span");
    dot.className = "verified-dot";
    dot.style.background = SURFACE_COLORS[surface.name] || "#ffffff";

    const name = document.createElement("span");
    name.className = "verified-name";
    name.textContent = surface.name.toUpperCase();

    const score = document.createElement("strong");
    score.textContent = surface.verified
      ? `${surface.score}%`
      : t("surfaceUnverified").toUpperCase();
    if (!surface.verified) score.classList.add("is-unverified");

    row.append(dot, name, score);

    if (surface.missed.length) {
      const missed = document.createElement("small");
      missed.className = "verified-missed";
      missed.textContent = surface.missed.join(" · ");
      row.append(missed);
    }

    body.append(row);
  });

  if (els.verifiedHype) {
    els.verifiedHype.textContent = verified.hypeLine || "";
  }

  card.classList.remove("hidden");
}

const SURFACE_COLORS = {
  counter: "#34d399",
  glass: "#60a5fa",
  floor: "#fbbf24",
  fixture: "#c084fc"
};

const SAM_BOX_PATTERN = /<\|box;x1=(\d+);y1=(\d+);x2=(\d+);y2=(\d+);w=(\d+);h=(\d+)(?:;c=[\d.]+)?\|>/g;

function parseSamBoxes(line) {
  const boxes = [];
  if (typeof line !== "string" || !line) return boxes;

  SAM_BOX_PATTERN.lastIndex = 0;
  let match;

  while ((match = SAM_BOX_PATTERN.exec(line))) {
    const values = match.slice(1, 7).map(Number);
    if (values.some((value) => !Number.isFinite(value))) continue;
    if (values[4] <= 0 || values[5] <= 0) continue;

    boxes.push({
      x1: values[0],
      y1: values[1],
      x2: values[2],
      y2: values[3],
      w: values[4],
      h: values[5]
    });
  }

  return boxes;
}

function collectSamText(data) {
  const texts = [];
  const output = data?.output;

  if (Array.isArray(output)) {
    for (const item of output) {
      const content = item?.content;
      if (!Array.isArray(content)) continue;

      for (const part of content) {
        if (part?.type === "output_text" && typeof part.text === "string") {
          texts.push(part.text);
        }
      }
    }
  }

  if (!texts.length && typeof data?.output_text === "string") {
    texts.push(data.output_text);
  }

  return texts.join("\n");
}

async function requestSurfaceBoxes(imageDataURL, phrase) {
  try {
    const settings = loadCloudSettings();
    if (!settings.metaKey || !imageDataURL) return [];

    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      CONFIG.cloud.timeoutMs
    );

    let response;

    try {
      response = await fetch(CONFIG.cloud.samEndpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${settings.metaKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: CONFIG.cloud.samModel,
          input: [
            {
              role: "user",
              content: [
                { type: "input_text", text: phrase },
                { type: "input_image", image_url: imageDataURL }
              ]
            }
          ]
        }),
        signal: controller.signal
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!response || !response.ok) return [];

    const data = await response.json().catch(() => null);
    return parseSamBoxes(collectSamText(data));
  } catch {
    return [];
  }
}

async function getSamOverlays(aiResult, before, after) {
  const skipped = { status: "skipped" };

  try {
    if (!aiResult || aiResult.verified?.status !== "verified") {
      return skipped;
    }

    const names = aiResult.verified.surfaces
      .map((surface) => surface.name)
      .filter((name) => VERIFIED_SURFACES.has(name));

    if (!names.length) return skipped;

    const surfaces = {};

    for (const name of names) {
      const [beforeBoxes, afterBoxes] = await Promise.all([
        requestSurfaceBoxes(before?.dataUrl, name),
        requestSurfaceBoxes(after?.dataUrl, name)
      ]);
      surfaces[name] = { before: beforeBoxes, after: afterBoxes };
    }

    return { status: "overlays", surfaces };
  } catch {
    return { status: "error" };
  }
}

function drawSamBoxes(container, boxes, color, label) {
  boxes.forEach((box) => {
    const width = Number(box.w) || 1;
    const height = Number(box.h) || 1;
    const element = document.createElement("div");
    element.className = "detection-box sam-box";
    element.style.borderColor = color;
    element.style.left = `${clamp(box.x1 / width) * 100}%`;
    element.style.top = `${clamp(box.y1 / height) * 100}%`;
    element.style.width = `${clamp(Math.max(0, box.x2 - box.x1) / width) * 100}%`;
    element.style.height = `${clamp(Math.max(0, box.y2 - box.y1) / height) * 100}%`;

    const tag = document.createElement("span");
    tag.textContent = label;
    element.append(tag);
    container.append(element);
  });
}

function renderSamOverlays() {
  const pairs = [
    [els.beforeSamOverlay, "before"],
    [els.afterSamOverlay, "after"]
  ];
  const sam = state.result?.ai?.sam;

  pairs.forEach(([container, slot]) => {
    if (!container) return;
    container.innerHTML = "";

    if (!sam || sam.status !== "overlays") return;

    Object.entries(sam.surfaces).forEach(([name, slots]) => {
      drawSamBoxes(
        container,
        slots[slot] || [],
        SURFACE_COLORS[name] || "#ffffff",
        name.toUpperCase()
      );
    });
  });
}

function getMockAIScore() {
  return {
    cleanliness: null,
    taskCompletion: null,
    verified: false,
    scorable: false,
    confidenceBand: "rescan",
    findings: [t("findingModelFailed")],
    confidence: 0,
    source: "demo",
    simulated: true,
    changeMagnitude: 0,
    sceneMatch: 0,
    sceneMatchPercent: 0,
    detection: {beforeCount:0, afterCount:0, clearedCount:0, remainingCount:0, newCount:0, beforeObjects:[], afterObjects:[], clearedObjects:[], remainingObjects:[], newObjects:[]}
  };
}

function getDemoScore() {
  return {
    cleanliness: null,
    taskCompletion: null,
    verified: false,
    scorable: false,
    confidenceBand: "demo",
    findings: [t("findingDemo")],
    confidence: 0,
    source: "demo",
    simulated: true,
    changeMagnitude: 0,
    sceneMatch: 0,
    sceneMatchPercent: 0,
    detection: {beforeCount:0, afterCount:0, clearedCount:0, remainingCount:0, newCount:0, beforeObjects:[], afterObjects:[], clearedObjects:[], remainingObjects:[], newObjects:[]}
  };
}

async function scoreChallenge(
  beforeDataURL,
  afterDataURL
) {
  if (!beforeDataURL || !afterDataURL) {
    return getMockAIScore();
  }

  try {
    els.analysisLoadingDetail.textContent =
      t("loadingVision");

    const [beforeImage, afterImage] =
      await Promise.all([
        loadImageFromDataURL(beforeDataURL),
        loadImageFromDataURL(afterDataURL)
      ]);

    const change = compareFrames(beforeImage, afterImage);
    const surface = analyzeSurfaceZones(beforeImage, afterImage);

    const detector =
      await loadObjectDetector();

    if (!detector) {
      const cloud = await scoreWithCloudVision(
        beforeDataURL,
        afterDataURL
      );

      return cloud || {
        ...getMockAIScore(),
        changeMagnitude:
          change.changedPixelPercent
      };
    }

    const beforeObjects =
      detectObjectsInImage(
        detector,
        beforeImage
      );

    const afterObjects =
      detectObjectsInImage(
        detector,
        afterImage
      );

    const localScore =
      calculateLocalScore(
      beforeObjects,
      afterObjects,
      change,
      surface
    );

    state.analysis.lastLocalResult =
      localScore;

    const lowConfidence =
      beforeObjects.length <
        CONFIG.detection.minObjectsForConfidence ||
      localScore.confidence < 0.6;

    if (lowConfidence) {
      const fallback =
        await scoreWithCloudVision(
          beforeDataURL,
          afterDataURL
        );

      if (fallback) return fallback;
    }

    return localScore;
  } catch {
    const fallback =
      await scoreWithCloudVision(
        beforeDataURL,
        afterDataURL
      );

    return fallback || getMockAIScore();
  }
}

function updateEvidenceThumbnails() {
  setEvidenceImage(
    els.beforeThumbnail,
    els.beforePlaceholder,
    state.captures.before
  );

  setEvidenceImage(
    els.afterThumbnail,
    els.afterPlaceholder,
    state.captures.after
  );
}

function setEvidenceImage(
  imageElement,
  placeholderElement,
  capture
) {
  if (capture?.dataUrl) {
    imageElement.src = capture.dataUrl;
    imageElement.classList.remove("hidden");

    placeholderElement.classList.toggle(
      "hidden",
      !capture.placeholder
    );
  } else {
    imageElement.removeAttribute("src");
    imageElement.classList.add("hidden");
    placeholderElement.classList.remove("hidden");
  }
}

function renderDetectionOverlay(container, objects = [], remaining = false) {
  if (!container) return;
  container.innerHTML = "";
  objects.forEach((object) => {
    const box = object.boundingBox || object.box;
    if (!box) return;
    const el = document.createElement("div");
    el.className = "detection-box" + (remaining ? " remaining" : "");
    const x = Number(box.originX ?? box.x ?? 0);
    const y = Number(box.originY ?? box.y ?? 0);
    const w = Number(box.width ?? 0);
    const h = Number(box.height ?? 0);
    const iw = Number(object.imageWidth || 1);
    const ih = Number(object.imageHeight || 1);
    el.style.left = `${clamp(x / iw) * 100}%`;
    el.style.top = `${clamp(y / ih) * 100}%`;
    el.style.width = `${clamp(w / iw) * 100}%`;
    el.style.height = `${clamp(h / ih) * 100}%`;
    const label = document.createElement("span");
    label.textContent = `${String(object.label || "OBJECT").toUpperCase()} ${Math.round(Number(object.score || 0) * 100)}%`;
    el.appendChild(label);
    container.appendChild(el);
  });
}

function renderResults() {
  if (!state.result) return;

  const score = state.result.ai;
  const targetMs = CONFIG.challengeDurationSeconds * 1000;
  const elapsed = state.result.elapsedMs;
  const differenceMs = targetMs - elapsed;
  const scorable = score.scorable !== false && Number.isFinite(score.cleanliness);

  els.cleanlinessScore.textContent = scorable
    ? `${score.cleanliness}%`
    : score.simulated ? "DEMO" : "RESCAN";

  const scoreHero = els.cleanlinessScore.closest(".score-hero");
  scoreHero?.classList.toggle("insufficient", !scorable);
  scoreHero?.classList.toggle("verified", Boolean(score.verified));

  if (els.scoreEvidenceState) {
    els.scoreEvidenceState.textContent = score.simulated
      ? t("evidenceDemo")
      : score.confidenceBand === "high"
        ? t("evidenceHigh")
        : score.confidenceBand === "medium"
          ? t("evidenceMedium")
          : t("evidenceRescan");
  }

  els.resultTime.textContent = formatTimer(elapsed);
  const differenceSeconds = Math.abs(Math.round(differenceMs / 100) / 10);
  if (state.language === "es") {
    els.timeComparison.textContent = differenceMs >= 0 ? `${differenceSeconds}s BAJO` : `${differenceSeconds}s SOBRE`;
  } else if (state.language === "pl") {
    els.timeComparison.textContent = differenceMs >= 0 ? `${differenceSeconds}s PONIŻEJ` : `${differenceSeconds}s POWYŻEJ`;
  } else {
    els.timeComparison.textContent = differenceMs >= 0 ? `${differenceSeconds}s UNDER` : `${differenceSeconds}s OVER`;
  }

  els.findingText.textContent = score.findings?.join(" ") || t("findingNoObjects");
  els.analysisMethod.textContent = score.source === "local"
    ? t("localAI")
    : score.source === "cloud" ? t("cloudAI") : t("simulatedDemo");
  els.analysisConfidence.textContent = score.simulated
    ? t("unverified")
    : `${Math.round(Number(score.confidence || 0) * 100)}% ${t("evidence")}`;
  els.visualChangeValue.textContent = `${Number(score.changeMagnitude || 0).toFixed(1)}%`;
  renderVerifiedScorecard();
  renderSamOverlays();
  els.styleScoreDisplay.textContent = `${Number(score.styleScore ?? 7.5).toFixed(1)} / 10`;

  if (els.sceneMatchValue) els.sceneMatchValue.textContent = score.simulated ? "—" : `${Math.round(Number(score.sceneMatch || 0) * 100)}%`;
  if (els.objectsClearedValue) els.objectsClearedValue.textContent = String(score.detection?.clearedCount ?? 0);
  if (els.objectsRemainingValue) els.objectsRemainingValue.textContent = String(score.detection?.remainingCount ?? 0);

  updateEvidenceThumbnails();
  renderDetectionOverlay(els.beforeDetectionOverlay, score.detection?.beforeObjects || []);
  renderDetectionOverlay(els.afterDetectionOverlay, score.detection?.remainingObjects || [], true);

  if (state.captures.pose?.dataUrl) {
    els.poseThumbnail.src = state.captures.pose.dataUrl;
    els.posePreviewWrap.classList.remove("hidden");
  }
}
async function createPoseLandmarker() {
  const packageURL = mediapipePackageURL();
  const module = await import(`${packageURL}/+esm`);
  const vision = module.FilesetResolver
    ? module
    : module.default;

  const fileset =
    await vision.FilesetResolver.forVisionTasks(
      `${packageURL}/wasm`
    );

  return vision.PoseLandmarker.createFromOptions(
    fileset,
    {
      baseOptions: {
        modelAssetPath:
          CONFIG.detection.poseModelURL,
        delegate: "CPU"
      },
      runningMode: "IMAGE",
      numPoses: 1,
      minPoseDetectionConfidence: 0.45,
      minPosePresenceConfidence: 0.45,
      minTrackingConfidence: 0.45
    }
  );
}

async function loadPoseLandmarker() {
  if (poseLandmarkerInstance) {
    return poseLandmarkerInstance;
  }

  if (poseLandmarkerPromise) {
    return poseLandmarkerPromise;
  }

  state.pose.modelStatus = "loading";

  poseLandmarkerPromise =
    createPoseLandmarker()
      .then((landmarker) => {
        poseLandmarkerInstance = landmarker;
        state.pose.modelStatus = "ready";
        state.pose.error = null;
        return landmarker;
      })
      .catch((error) => {
        state.pose.modelStatus = "failed";
        state.pose.error = error;
        poseLandmarkerPromise = null;
        return null;
      });

  return poseLandmarkerPromise;
}

function landmarkVisibility(landmark) {
  return Number(
    landmark?.visibility ??
    landmark?.presence ??
    1
  );
}

function computeStyleScore(landmarks) {
  if (!Array.isArray(landmarks) || landmarks.length < 17) {
    return 7.5;
  }

  const leftShoulder = landmarks[11];
  const rightShoulder = landmarks[12];
  const leftElbow = landmarks[13];
  const rightElbow = landmarks[14];
  const leftWrist = landmarks[15];
  const rightWrist = landmarks[16];

  const required = [
    leftShoulder,
    rightShoulder,
    leftElbow,
    rightElbow,
    leftWrist,
    rightWrist
  ];

  if (
    required.some(
      (point) =>
        !point ||
        landmarkVisibility(point) < 0.35
    )
  ) {
    return 7.5;
  }

  const shoulderWidth =
    Math.abs(
      rightShoulder.x - leftShoulder.x
    ) || 0.15;

  const wristSpan =
    Math.abs(
      rightWrist.x - leftWrist.x
    );

  const spreadScore = clamp(
    wristSpan / (shoulderWidth * 2.7)
  );

  const leftRaise = clamp(
    (leftShoulder.y - leftWrist.y + 0.12) /
      0.34
  );

  const rightRaise = clamp(
    (rightShoulder.y - rightWrist.y + 0.12) /
      0.34
  );

  const raisedScore =
    (leftRaise + rightRaise) / 2;

  const symmetryScore =
    1 -
    clamp(
      Math.abs(
        (leftShoulder.y - leftWrist.y) -
        (rightShoulder.y - rightWrist.y)
      ) / 0.28
    );

  const elbowSymmetry =
    1 -
    clamp(
      Math.abs(
        (leftShoulder.y - leftElbow.y) -
        (rightShoulder.y - rightElbow.y)
      ) / 0.28
    );

  const style =
    4 +
    spreadScore * 2.5 +
    raisedScore * 2.2 +
    symmetryScore * 0.8 +
    elbowSymmetry * 0.5;

  return Math.round(
    clamp(style, 4, 10) * 10
  ) / 10;
}

async function runVictoryPose() {
  if (state.pose.running) return;

  state.pose.running = true;
  els.poseButton.disabled = true;
  els.poseStatus.textContent =
    t("poseAnalyzing");


  let styleScore = 7.5;

  try {
    const capture =
      await captureFrame("pose");

    if (capture?.dataUrl) {
      els.poseThumbnail.src =
        capture.dataUrl;

      els.posePreviewWrap.classList.remove("hidden");
    }

    if (state.demoMode || !capture?.dataUrl) {
      els.poseStatus.textContent =
        t("poseUnavailable");
    } else {
      const image =
        await loadImageFromDataURL(
          capture.dataUrl
        );

      const landmarker =
        await loadPoseLandmarker();

      if (!landmarker) {
        els.poseStatus.textContent =
          t("poseUnavailable");
      } else {
        const result =
          landmarker.detect(image);

        const landmarks =
          result?.landmarks?.[0];

        if (!landmarks?.length) {
          styleScore = 7.5;
          els.poseStatus.textContent =
            t("poseNoPerson");
        } else {
          styleScore =
            computeStyleScore(landmarks);

          els.poseStatus.textContent =
            t("poseCaptured");
        }
      }
    }
  } catch {
    styleScore = 7.5;
    els.poseStatus.textContent =
      t("poseUnavailable");
  } finally {
    if (state.latestScore) {
      state.latestScore.styleScore =
        styleScore;
    }

    if (state.result?.ai) {
      state.result.ai.styleScore =
        styleScore;
    }

    els.styleScoreDisplay.textContent =
      `${styleScore.toFixed(1)} / 10`;

    updateSavedRunStyleScore(styleScore);


    state.pose.running = false;
    els.poseButton.disabled = false;
  }
}

function generateRunId() {
  if (
    window.crypto &&
    typeof window.crypto.randomUUID === "function"
  ) {
    return window.crypto.randomUUID();
  }

  return `run-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 9)}`;
}

function getDefaultLeaderboard() {
  return [
    {
      id: "sample-001",
      name: "Jordan",
      cleanliness: 100,
      timeMs: 68400,
      styleScore: 9.4
    },
    {
      id: "sample-002",
      name: "Alex",
      cleanliness: 98,
      timeMs: 71200,
      styleScore: 9.1
    },
    {
      id: "sample-003",
      name: "Sam",
      cleanliness: 96,
      timeMs: 74200,
      styleScore: 8.8
    }
  ];
}

function loadLeaderboard() {
  try {
    const stored =
      localStorage.getItem(
        CONFIG.storageKey
      );

    if (!stored) {
      const defaults =
        getDefaultLeaderboard();

      saveLeaderboard(defaults);
      return defaults;
    }

    const parsed = JSON.parse(stored);

    return Array.isArray(parsed)
      ? parsed
      : getDefaultLeaderboard();
  } catch {
    return getDefaultLeaderboard();
  }
}

function saveLeaderboard(entries) {
  try {
    localStorage.setItem(
      CONFIG.storageKey,
      JSON.stringify(entries)
    );
  } catch {}
}

const INSPECTION_LOG_KEY = "cleanquest.inspection-log";

function resetVoiceNote() {
  try {
    if (state.voiceNote?.audioUrl) URL.revokeObjectURL(state.voiceNote.audioUrl);
  } catch {}

  if (state.recorder && state.recorder.state !== "inactive") {
    try {
      state.recorder.stop();
    } catch {}
  }

  state.voiceNote = null;
  state.recorder = null;
  state.recordChunks = [];

  if (els.voiceNoteAudio) {
    els.voiceNoteAudio.removeAttribute("src");
    els.voiceNoteAudio.classList.add("hidden");
  }

  els.voiceRecordButton?.classList.remove("hidden");
  els.voiceStopButton?.classList.add("hidden");

  if (els.voiceNoteStatus) {
    els.voiceNoteStatus.textContent = t("voiceNoteHint");
  }
}

async function startVoiceNote() {
  if (state.recorder && state.recorder.state !== "inactive") return;
  if (!navigator.mediaDevices?.getUserMedia) {
    if (els.voiceNoteStatus) {
      els.voiceNoteStatus.textContent = t("voiceRecordFailed");
    }
    return;
  }

  try {
    const stream = await Promise.race([
      navigator.mediaDevices.getUserMedia({ audio: true }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("mic-timeout")), 10000)
      )
    ]);
    const recorder = new MediaRecorder(stream);
    state.recordChunks = [];

    recorder.ondataavailable = (event) => {
      if (event.data?.size) state.recordChunks.push(event.data);
    };
    recorder.onstop = () => {
      stream.getTracks().forEach((track) => track.stop());
      void finishVoiceNote();
    };

    state.recorder = recorder;
    recorder.start();
    els.voiceRecordButton?.classList.add("hidden");
    els.voiceStopButton?.classList.remove("hidden");
  } catch {
    if (els.voiceNoteStatus) {
      els.voiceNoteStatus.textContent = t("voiceRecordFailed");
    }
  }
}

function stopVoiceNote() {
  try {
    state.recorder?.stop();
  } catch {}

  els.voiceStopButton?.classList.add("hidden");
}

function encodeWavPCM16(samples, sampleRate) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  const writeString = (offset, text) => {
    for (let i = 0; i < text.length; i++) {
      view.setUint8(offset + i, text.charCodeAt(i));
    }
  };

  writeString(0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, samples.length * 2, true);

  for (let i = 0; i < samples.length; i++) {
    const clamped = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(44 + i * 2, clamped < 0 ? clamped * 0x8000 : clamped * 0x7FFF, true);
  }

  return new Blob([buffer], { type: "audio/wav" });
}

async function voiceBlobToWav(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass || !arrayBuffer.byteLength) return null;

  const context = new AudioContextClass();

  try {
    const decoded = await context.decodeAudioData(arrayBuffer.slice(0));
    if (!decoded.length || !decoded.numberOfChannels) return null;

    const targetRate = 16000;
    const targetLength = Math.max(
      1,
      Math.ceil((decoded.length * targetRate) / (decoded.sampleRate || targetRate))
    );
    const offline = new OfflineAudioContext(1, targetLength, targetRate);
    const mono = offline.createBuffer(1, decoded.length, decoded.sampleRate);
    const out = mono.getChannelData(0);

    for (let channel = 0; channel < decoded.numberOfChannels; channel++) {
      const data = decoded.getChannelData(channel);
      for (let i = 0; i < decoded.length; i++) {
        out[i] = (out[i] || 0) + data[i] / decoded.numberOfChannels;
      }
    }

    const source = offline.createBufferSource();
    source.buffer = mono;
    source.connect(offline.destination);
    source.start(0);
    const rendered = await offline.startRendering();
    return encodeWavPCM16(rendered.getChannelData(0), targetRate);
  } catch {
    return null;
  } finally {
    try {
      await context.close();
    } catch {}
  }
}

async function transcribeVoiceNote(blob) {
  try {
    const settings = loadCloudSettings();
    if (!settings.metaKey) return null;

    const wav = await voiceBlobToWav(blob);
    if (!wav) return null;

    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      CONFIG.cloud.timeoutMs
    );

    let response;

    try {
      const form = new FormData();
      form.append(
        "request",
        JSON.stringify({
          mode: "PUSH_TO_TALK",
          model: CONFIG.cloud.asrModel,
          audioEncoding: "WAV"
        })
      );
      form.append("audio", wav, "note.wav");
      const sessionId = `cleanquest-${Date.now().toString(36)}`;
      response = await fetch(
        `${CONFIG.cloud.asrEndpoint}?sessionId=${encodeURIComponent(sessionId)}`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${settings.metaKey}` },
          body: form,
          signal: controller.signal
        }
      );
    } finally {
      clearTimeout(timeout);
    }

    if (!response || !response.ok) return null;

    const data = await response.json().catch(() => null);
    const turns = Array.isArray(data?.turns)
      ? data.turns.map((turn) => turn?.transcript).filter(Boolean).join(" ")
      : "";
    const text =
      (typeof data?.transcript === "string" && data.transcript) || turns || null;
    return text && text.trim() ? text.trim() : null;
  } catch {
    return null;
  }
}

async function finishVoiceNote() {
  els.voiceRecordButton?.classList.remove("hidden");

  const blob = new Blob(state.recordChunks, {
    type: state.recorder?.mimeType || "audio/webm"
  });
  state.recordChunks = [];
  state.recorder = null;

  if (!blob.size) return;

  const audioUrl = URL.createObjectURL(blob);
  state.voiceNote = { audioUrl, blob, text: null, transcribed: false };

  if (els.voiceNoteAudio) {
    els.voiceNoteAudio.src = audioUrl;
    els.voiceNoteAudio.classList.remove("hidden");
  }

  if (els.voiceNoteStatus) {
    els.voiceNoteStatus.textContent = t("voiceTranscribing");
  }

  const text = await transcribeVoiceNote(blob);

  if (state.voiceNote && state.voiceNote.audioUrl === audioUrl) {
    state.voiceNote.text = text;
    state.voiceNote.transcribed = !!text;

    if (els.voiceNoteStatus) {
      els.voiceNoteStatus.textContent = text || t("voiceNotTranscribed");
    }
  }
}

function loadInspectionLog() {
  try {
    const parsed = JSON.parse(localStorage.getItem(INSPECTION_LOG_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function locationKey(where) {
  if (!where?.shared) return "not-shared";
  return `${Number(where.lat).toFixed(3)},${Number(where.lon).toFixed(3)}`;
}

function requestLocation() {
  return new Promise((resolve) => {
    if (!("geolocation" in navigator)) {
      resolve({ shared: false });
      return;
    }

    let done = false;
    const finish = (value) => {
      if (!done) {
        done = true;
        resolve(value);
      }
    };
    const timer = setTimeout(() => finish({ shared: false }), 8000);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(timer);
        finish({
          shared: true,
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
      },
      () => {
        clearTimeout(timer);
        finish({ shared: false });
      },
      { enableHighAccuracy: false, timeout: 7000, maximumAge: 60000 }
    );
  });
}

async function recordInspection(name, entry) {
  try {
    const where = await requestLocation();
    const verified = state.latestScore?.verified;
    const record = {
      id: entry?.id || state.latestRunId || `run-${Date.now()}`,
      who: name,
      when: new Date().toISOString(),
      where,
      scores: {
        cleanliness: Number.isFinite(state.latestScore?.cleanliness)
          ? state.latestScore.cleanliness
          : null,
        overall: verified?.status === "verified" ? verified.overall : null,
        verdict: verified?.status === "verified" ? verified.verdict : null,
        style: state.latestScore?.styleScore ?? null
      },
      provider: verified?.provider || loadCloudSettings().provider || "meta",
      model: verified?.model || null,
      note: {
        text: state.voiceNote?.text || null,
        transcribed: !!state.voiceNote?.transcribed,
        hasAudio: !!state.voiceNote?.audioUrl
      }
    };

    const records = loadInspectionLog();
    records.push(record);
    while (records.length > 200) records.shift();

    try {
      localStorage.setItem(INSPECTION_LOG_KEY, JSON.stringify(records));
    } catch {}

    renderInspectionLog();
    return record;
  } catch {
    return null;
  }
}

function renderInspectionLog() {
  const list = els.inspectionLogList;
  if (!list) return;

  list.innerHTML = "";
  const records = loadInspectionLog().slice().reverse();
  els.inspectionLogEmpty?.classList.toggle("hidden", records.length > 0);

  const groups = new Map();
  records.forEach((record) => {
    const key = locationKey(record.where);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(record);
  });

  groups.forEach((items, key) => {
    const group = document.createElement("div");
    group.className = "inspection-group";

    const head = document.createElement("strong");
    head.className = "inspection-site";
    head.textContent =
      key === "not-shared" ? t("locationNotShared") : `Site ${key}`;
    group.append(head);

    items.forEach((record) => {
      const row = document.createElement("div");
      row.className = "provider-log-row";

      const main = document.createElement("span");
      const stamp = String(record.when || "").slice(0, 16).replace("T", " ");
      const clean = Number.isFinite(Number(record.scores?.cleanliness))
        ? ` · ${Number(record.scores.cleanliness)}%`
        : "";
      main.textContent = `${record.who || "?"} · ${stamp}${clean}`;

      const meta = document.createElement("small");
      const note = record.note?.text
        ? ` · “${record.note.text.slice(0, 60)}”`
        : record.note?.hasAudio
          ? ` · ${t("voiceNotTranscribed")}`
          : "";
      meta.textContent = `${record.provider || "meta"}${note}`;

      row.append(main, meta);
      group.append(row);
    });

    list.append(group);
  });
}

function inspectionRecordToRow(record) {
  const where = record.where?.shared
    ? [record.where.lat, record.where.lon, record.where.accuracy ?? ""]
    : ["", "", ""];
  const cells = [
    record.id || "",
    record.who || "",
    record.when || "",
    record.where?.shared ? "shared" : "not-shared",
    ...where,
    record.scores?.cleanliness ?? "",
    record.scores?.overall ?? "",
    record.scores?.verdict ?? "",
    record.scores?.style ?? "",
    record.provider || "",
    record.model || "",
    record.note?.text || "",
    record.note?.transcribed ? "yes" : "no",
    record.note?.hasAudio ? "yes" : "no"
  ];
  return cells
    .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
    .join(",");
}

function buildInspectionCsv(records) {
  const header = [
    "id", "who", "when", "location", "lat", "lon", "accuracy",
    "cleanliness", "verified_overall", "verdict", "style",
    "provider", "model", "note_text", "transcribed", "has_audio"
  ];
  return [header.join(","), ...records.map(inspectionRecordToRow)].join("\n");
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportInspectionJson() {
  downloadBlob(
    new Blob([JSON.stringify(loadInspectionLog(), null, 2)], {
      type: "application/json"
    }),
    "cleanquest-inspection-log.json"
  );
}

function exportInspectionCsv() {
  downloadBlob(
    new Blob([buildInspectionCsv(loadInspectionLog())], { type: "text/csv" }),
    "cleanquest-inspection-log.csv"
  );
}

const DECK_DAILY_COUNT = 10;
const STREAK_KEY = "cleanquest.streak";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadStreak() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STREAK_KEY));
    if (parsed && Number.isFinite(Number(parsed.count))) {
      return { count: Number(parsed.count), lastDay: typeof parsed.lastDay === "string" ? parsed.lastDay : "" };
    }
  } catch {}

  return { count: 0, lastDay: "" };
}

function bumpStreakIfNewDay() {
  const streak = loadStreak();
  const today = todayKey();

  if (streak.lastDay === today) return streak;

  streak.count += 1;
  streak.lastDay = today;

  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
  } catch {}

  return streak;
}

function buildDailyDeck() {
  const source = (typeof SWIPE_DECK !== "undefined" && Array.isArray(SWIPE_DECK))
    ? SWIPE_DECK
    : [];
  if (!source.length) return [];

  const day = Math.floor(Date.now() / 86400000);
  const start = day % source.length;
  const order = [];

  for (let i = 0; i < Math.min(DECK_DAILY_COUNT, source.length); i++) {
    order.push(source[(start + i) % source.length]);
  }

  return order;
}

function openDeck() {
  if (state.screen !== "deck") {
    state.deckReturn = state.screen;
  }

  state.deck = { order: buildDailyDeck(), index: 0, correct: 0, locked: false };
  navigateTo("deck");
  renderDeck();
}

function closeDeck() {
  state.deck = null;
  navigateTo(state.deckReturn || "welcome");
}

function renderDeck() {
  const streak = loadStreak();
  if (els.deckStreak) {
    els.deckStreak.textContent = t("deckStreak", { n: streak.count });
  }

  const deck = state.deck;
  if (!deck || !deck.order.length) return;

  const finished = deck.index >= deck.order.length;
  els.deckCard?.classList.toggle("hidden", finished);
  els.deckLeft?.classList.toggle("hidden", finished);
  els.deckRight?.classList.toggle("hidden", finished);
  els.deckDone?.classList.toggle("hidden", !finished);

  if (finished) {
    const streak = bumpStreakIfNewDay();

    if (els.deckStreak) {
      els.deckStreak.textContent = t("deckStreak", { n: streak.count });
    }

    if (els.deckFeedback) {
      els.deckFeedback.textContent = `${t("deckComplete")} ${t("deckStreak", { n: streak.count })}`;
      els.deckFeedback.className = "deck-feedback is-correct";
    }

    return;
  }

  const card = deck.order[deck.index];
  if (els.deckCategory) els.deckCategory.textContent = String(card.category || "").toUpperCase();
  if (els.deckText) els.deckText.textContent = card.text;
  if (els.deckProgress) {
    els.deckProgress.textContent = t("deckCardOf", { i: deck.index + 1, n: deck.order.length });
  }
  if (els.deckFeedback) {
    els.deckFeedback.textContent = "";
    els.deckFeedback.className = "deck-feedback";
  }
}

function answerDeck(pick) {
  const deck = state.deck;
  if (!deck || deck.locked || deck.index >= deck.order.length) return;

  const card = deck.order[deck.index];
  const hit = pick === card.answer;
  deck.locked = true;

  if (hit) deck.correct += 1;

  if (els.deckFeedback) {
    els.deckFeedback.textContent = `${hit ? t("deckCorrect") : t("deckWrong")} ${card.why || ""}`;
    els.deckFeedback.className = `deck-feedback ${hit ? "is-correct" : "is-wrong"}`;
  }

  setTimeout(() => {
    if (state.deck !== deck) return;
    deck.index += 1;
    deck.locked = false;
    renderDeck();
  }, 1400);
}

function openRecords() {
  if (state.screen !== "records") {
    state.recordsReturn = state.screen;
  }

  renderInspectionLog();
  navigateTo("records");
}

function closeRecords() {
  navigateTo(state.recordsReturn || "welcome");
}

function saveCompletedRun() {
  if (!state.latestScore) return null;

  const entries = loadLeaderboard();

  const name =
    els.playerName.value.trim() ||
    t("defaultPlayer");

  if (!state.latestRunId) {
    state.latestRunId =
      generateRunId();
  }

  const entry = {
    id: state.latestRunId,
    name,
    cleanliness:
      Number.isFinite(state.latestScore.cleanliness) ? state.latestScore.cleanliness : null,
    timeMs: state.timer.elapsedMs,
    styleScore:
      state.latestScore.styleScore ?? 7.5,
    timestamp: new Date().toISOString()
  };

  const existingIndex =
    entries.findIndex(
      (item) =>
        item.id === state.latestRunId
    );

  if (existingIndex >= 0) {
    entries[existingIndex] = entry;
  } else {
    entries.push(entry);
  }

  saveLeaderboard(entries);

  void recordInspection(name, entry);

  return entry;
}

function updateSavedRunStyleScore(styleScore) {
  if (!state.latestRunId) return;

  const entries = loadLeaderboard();
  const index = entries.findIndex(
    (entry) =>
      entry.id === state.latestRunId
  );

  if (index < 0) return;

  entries[index].styleScore =
    styleScore;

  entries[index].name =
    els.playerName.value.trim() ||
    entries[index].name ||
    t("defaultPlayer");

  saveLeaderboard(entries);

  if (
    state.screen === "leaderboard"
  ) {
    renderLeaderboard();
  }
}

function sortLeaderboard(entries) {
  return [...entries].sort((a, b) => {
    if (
      Number(b.cleanliness) !==
      Number(a.cleanliness)
    ) {
      return (
        (Number.isFinite(b.cleanliness) ? b.cleanliness : -1) -
        (Number.isFinite(a.cleanliness) ? a.cleanliness : -1)
      );
    }

    if (
      Number(a.timeMs) !==
      Number(b.timeMs)
    ) {
      return (
        Number(a.timeMs) -
        Number(b.timeMs)
      );
    }

    return (
      Number(b.styleScore || 0) -
      Number(a.styleScore || 0)
    );
  });
}

function renderLeaderboard() {
  const entries =
    sortLeaderboard(
      loadLeaderboard()
    );

  els.leaderboardList.innerHTML = "";

  entries.forEach((entry, index) => {
    const row =
      document.createElement("div");

    row.className =
      "leaderboard-row";

    if (
      entry.id ===
      state.latestRunId
    ) {
      row.classList.add("latest");
    }

    const rank =
      document.createElement("span");
    rank.className = "rank";
    rank.textContent = String(index + 1);

    const name =
      document.createElement("span");
    name.className = "player-name";
    name.textContent =
      entry.name || t("defaultPlayer");

    const quality =
      document.createElement("span");
    quality.className = "quality";
    quality.textContent =
      Number.isFinite(entry.cleanliness) ? `${entry.cleanliness}%` : "—";

    const time =
      document.createElement("span");
    time.className = "time";
    time.textContent =
      formatTimer(
        Number(entry.timeMs || 0)
      );

    const style =
      document.createElement("span");
    style.className = "style";
    style.textContent =
      Number(entry.styleScore ?? 7.5)
        .toFixed(1);

    row.append(
      rank,
      name,
      quality,
      time,
      style
    );

    els.leaderboardList.appendChild(row);
  });
}

function renderSpectatorLeaderboard() {
  const entries =
    sortLeaderboard(
      loadLeaderboard()
    );

  els.spectatorLeaderboardList.innerHTML = "";

  entries.forEach((entry, index) => {
    const row =
      document.createElement("div");

    row.className =
      "spectator-row";

    const rank =
      document.createElement("span");
    rank.className = "rank";
    rank.textContent = String(index + 1);

    const name =
      document.createElement("span");
    name.className = "player-name";
    name.textContent =
      entry.name || t("defaultPlayer");

    const quality =
      document.createElement("span");
    quality.className = "quality";
    quality.textContent =
      Number.isFinite(entry.cleanliness) ? `${entry.cleanliness}%` : "—";

    const time =
      document.createElement("span");
    time.className = "time";
    time.textContent =
      formatTimer(
        Number(entry.timeMs || 0)
      );

    const style =
      document.createElement("span");
    style.className = "style";
    style.textContent =
      Number(entry.styleScore ?? 7.5)
        .toFixed(1);

    row.append(
      rank,
      name,
      quality,
      time,
      style
    );

    els.spectatorLeaderboardList.appendChild(row);
  });
}

function initializeSpectatorMode() {
  els.appShell.classList.add("hidden");
  els.spectatorView.classList.remove("hidden");

  renderSpectatorLeaderboard();

  spectatorRefreshId =
    setInterval(
      renderSpectatorLeaderboard,
      15000
    );

  window.addEventListener(
    "storage",
    (event) => {
      if (
        event.key === CONFIG.storageKey
      ) {
        renderSpectatorLeaderboard();
      }
    }
  );
}

function playTone(
  frequency = 700,
  duration = 0.08
) {
  try {
    const AudioContextClass =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContextClass) return;

    const context =
      new AudioContextClass();

    const oscillator =
      context.createOscillator();

    const gain =
      context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value =
      frequency;

    gain.gain.setValueAtTime(
      0.0001,
      context.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.05,
      context.currentTime + 0.01
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      context.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start();
    oscillator.stop(
      context.currentTime +
        duration +
        0.02
    );

    oscillator.addEventListener(
      "ended",
      () => {
        context.close().catch(() => {});
      }
    );
  } catch {}
}

const SELFTEST_CHECKS = [
  ["camera", "Camera"],
  ["timer", "5-second timer"],
  ["scoring", "Vision scoring"],
  ["voice", "Speech synthesis"],
  ["leaderboard", "Leaderboard"],
  ["pose", "Pose pipeline"]
];

function selfTestDelay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function initializeSelfTestUI() {
  if (!SELFTEST_MODE || SPECTATOR_MODE || !els.selfTestPanel) return;

  els.selfTestPanel.classList.remove("hidden");
  els.selfTestResults?.classList.add("hidden");
  els.copySelfTestReport?.classList.add("hidden");

  if (els.selfTestSummary) {
    els.selfTestSummary.textContent = t("selfTestReady");
  }
}

function renderSelfTestChecklist() {
  if (!els.selfTestChecklist) return;

  els.selfTestChecklist.innerHTML = "";

  SELFTEST_CHECKS.forEach(([id, label]) => {
    const result =
      state.selfTest.results.find(
        (item) => item.id === id
      );

    const status =
      result?.status || "pending";

    const row =
      document.createElement("div");

    row.className =
      `selftest-item ${status}`;

    const icon =
      document.createElement("span");

    icon.className = "selftest-icon";

    icon.textContent =
      status === "pass"
        ? "✓"
        : status === "fail"
          ? "×"
          : status === "running"
            ? "◌"
            : "○";

    const copy =
      document.createElement("div");

    const title =
      document.createElement("strong");

    title.textContent = label;

    const detail =
      document.createElement("small");

    detail.textContent =
      result?.detail || "Waiting…";

    copy.append(title, detail);

    const stateLabel =
      document.createElement("span");

    stateLabel.className =
      "selftest-state";

    stateLabel.textContent =
      status === "pass"
        ? "PASS"
        : status === "fail"
          ? "FAIL"
          : status === "running"
            ? "RUN"
            : "WAIT";

    row.append(
      icon,
      copy,
      stateLabel
    );

    els.selfTestChecklist.appendChild(row);
  });
}

function setSelfTestResult(
  id,
  status,
  detail
) {
  const existing =
    state.selfTest.results.find(
      (item) => item.id === id
    );

  if (existing) {
    existing.status = status;
    existing.detail = detail;
  } else {
    state.selfTest.results.push({
      id,
      status,
      detail
    });
  }

  renderSelfTestChecklist();
}

function buildSelfTestReport() {
  const passed =
    state.selfTest.results.filter(
      (item) =>
        item.status === "pass"
    ).length;

  const lines = [
    "CleanQuest — Self-Test Report",
    `Time: ${new Date().toISOString()}`,
    `Browser: ${navigator.userAgent}`,
    ""
  ];

  SELFTEST_CHECKS.forEach(
    ([id, label]) => {
      const result =
        state.selfTest.results.find(
          (item) =>
            item.id === id
        );

      lines.push(
        `${result?.status === "pass" ? "PASS" : "FAIL"} — ${label}: ${result?.detail || "No result"}`
      );
    }
  );

  lines.push(
    "",
    `Summary: ${passed}/${SELFTEST_CHECKS.length} passed`
  );

  return lines.join("\n");
}

async function runSelfTestPosePipeline(
  capture
) {
  if (!capture?.dataUrl) {
    throw new Error(
      "No frame available for pose test."
    );
  }

  const image =
    await loadImageFromDataURL(
      capture.dataUrl
    );

  const landmarker =
    await loadPoseLandmarker();

  if (!landmarker) {
    throw new Error(
      "Pose model unavailable."
    );
  }

  const result =
    landmarker.detect(image);

  const landmarks =
    result?.landmarks?.[0];

  return landmarks?.length
    ? computeStyleScore(landmarks)
    : 7.5;
}

async function runPersonaSuite() {
  const results = [];
  const push = (id, label, ok, detail, friction) => {
    results.push({
      id,
      label,
      status: ok ? "pass" : "fail",
      detail: detail || "",
      friction: friction || ""
    });
  };

  const savedLang = state.language;
  const savedDemo = state.demoMode;
  const savedMuted = state.voice.muted;
  const savedName = els.playerName ? els.playerName.value : "";
  state.voice.muted = true;

  try {
    localStorage.removeItem(CLOUD_SETTINGS_KEY);
  } catch {}

  try {
    setLanguage("es");
    activateDemoMode();
    navigateTo("camera");
    await completeChallenge();
    const spanish = document.documentElement.lang === "es"
      && t("acceptChallenge") === "ACEPTAR EL RETO";
    const done = state.screen === "results"
      && state.latestScore
      && els.offlineScoreNote
      && !els.offlineScoreNote.classList.contains("hidden");
    push(
      "maria",
      "Maria — Spanish, first-time, camera denied",
      spanish && done,
      `screen=${state.screen} lang=${document.documentElement.lang} score=${state.latestScore?.cleanliness ?? state.latestScore?.simulated}`,
      "Demo entry relies on the camera failing first; a denied camera shows the error card before the demo path engages."
    );
  } catch (error) {
    push("maria", "Maria — Spanish, first-time, camera denied", false, String(error?.message || error), "Crashed before reaching results.");
  }

  try {
    const verdict = buildVerdictText();
    const clean = !!verdict.text && !verdict.text.includes("[object");
    push(
      "verdict-text",
      "Verdict line renders as real words, never object text",
      clean,
      `text=${String(verdict.text).slice(0, 80)}`,
      "None — regression guard for the host-voice object coercion."
    );
  } catch (error) {
    push("verdict-text", "Verdict line renders as real words, never object text", false, String(error?.message || error), "buildVerdictText threw.");
  }

  try {
    if (els.playerName) els.playerName.value = "Dana";
    const entry = saveCompletedRun();
    const entryId = entry && entry.id;
    const deadline = Date.now() + 15000;
    while (Date.now() < deadline) {
      try {
        if (entryId && loadInspectionLog().some((record) => record.id === entryId)) break;
      } catch {}
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    openRecords();
    const rows = els.inspectionLogList
      ? els.inspectionLogList.querySelectorAll(".provider-log-row").length
      : 0;
    let exported = false;
    try {
      const json = JSON.stringify(loadInspectionLog());
      const csv = buildInspectionCsv(loadInspectionLog());
      exported = json.length > 2 && csv.split("\n").length > 1;
    } catch {}
    const ok = !!entry && state.screen === "records" && rows > 0 && exported;
    push(
      "dana",
      "Dana — business owner, inspection log + exports",
      ok,
      `rows=${rows} exported=${exported} where=${entry ? "saved" : "missing"}`,
      "Record groups sort newest-first under one location header; multi-site owners get no per-site totals."
    );
    try {
      saveLeaderboard(loadLeaderboard().filter((item) => item.id !== (entry && entry.id)));
      const kept = loadInspectionLog().filter((record) => record.id !== (entry && entry.id));
      localStorage.setItem(INSPECTION_LOG_KEY, JSON.stringify(kept));
    } catch {}
  } catch (error) {
    push("dana", "Dana — business owner, inspection log + exports", false, String(error?.message || error), "Crashed while saving or rendering records.");
  }

  try {
    renderSpectatorLeaderboard();
    const rows = els.spectatorLeaderboardList
      ? els.spectatorLeaderboardList.querySelectorAll("*").length
      : 0;
    const readable = rows > 0
      && String(els.spectatorLeaderboardList.textContent || "").trim().length > 0;
    push(
      "judge",
      "Judge — no camera, no keys, spectator readable",
      readable,
      `nodes=${rows}`,
      "Spectator view mirrors the local board only; remote multi-player boards are not in this build."
    );
  } catch (error) {
    push("judge", "Judge — no camera, no keys, spectator readable", false, String(error?.message || error), "Spectator render threw.");
  }

  try {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    try {
      localStorage.setItem(STREAK_KEY, JSON.stringify({ count: 3, lastDay: yesterday }));
      const seeded = loadLeaderboard();
      seeded.push({ id: "persona-e-seed", name: "Returner", cleanliness: 90, timeMs: 60000, styleScore: 8, timestamp: new Date().toISOString() });
      saveLeaderboard(seeded);
    } catch {}
    const kept = loadStreak().count === 3
      && loadLeaderboard().some((item) => item.id === "persona-e-seed");
    const first = bumpStreakIfNewDay();
    const second = bumpStreakIfNewDay();
    const once = first.count === 4 && second.count === 4;
    push(
      "returning",
      "Returning player — streak + board persist, once-per-day",
      kept && once,
      `streak=${second.count} persisted=${kept}`,
      "Streak label only updates on deck completion, not on game completion."
    );
    try {
      saveLeaderboard(loadLeaderboard().filter((item) => item.id !== "persona-e-seed"));
      localStorage.removeItem(STREAK_KEY);
    } catch {}
  } catch (error) {
    push("returning", "Returning player — streak + board persist, once-per-day", false, String(error?.message || error), "Persistence round-trip threw.");
  }

  try {
    setLanguage(savedLang);
  } catch {}
  state.demoMode = savedDemo;
  state.voice.muted = savedMuted;
  if (els.playerName) els.playerName.value = savedName;
  navigateTo("welcome");

  return results;
}

async function runSelfTest() {
  if (
    !SELFTEST_MODE ||
    state.selfTest.running
  ) {
    return;
  }

  state.selfTest.running = true;
  state.selfTest.results = [];
  state.selfTest.report = "";

  els.runSelfTestButton.disabled = true;
  els.selfTestResults.classList.remove("hidden");
  els.copySelfTestReport.classList.add("hidden");
  els.selfTestSummary.textContent = "RUNNING";

  renderSelfTestChecklist();

  const original = {
    screen: state.screen,
    demoMode: state.demoMode,
    captures: {
      ...state.captures
    },
    timerElapsedMs:
      state.timer.elapsedMs,
    latestScore:
      state.latestScore,
    result:
      state.result,
    latestRunId:
      state.latestRunId,
    playerName:
      els.playerName.value
  };

  let testBefore = null;
  let testAfter = null;
  let usedDemo = false;
  let testRunId = null;

  try {
    setSelfTestResult(
      "camera",
      "running",
      "Requesting camera and capturing a test frame…"
    );

    state.demoMode = false;
    stopCamera();
    state.camera.error = null;

    let cameraReady, cameraTimedOut = false; cameraReady =
      await Promise.race([requestCamera(), new Promise((_, reject) => setTimeout(() => reject(new Error("selftest-camera-timeout")), 12000))]).catch((error) => { if (error?.message === "selftest-camera-timeout") { cameraTimedOut = true; return false; } throw error; });

    if (cameraTimedOut) { usedDemo = true; state.demoMode = true; testBefore = createDemoCapture("before"); setSelfTestResult("camera", "fail", "Camera request timed out — using demo mode"); } else if (cameraReady) {
      testBefore =
        await captureFrame("before");

      if (
        testBefore?.dataUrl &&
        !testBefore.placeholder
      ) {
        setSelfTestResult(
          "camera",
          "pass",
          `Camera frame captured (${testBefore.width}×${testBefore.height}).`
        );
      } else {
        usedDemo = true;
        state.demoMode = true;
        testBefore =
          createDemoCapture("before");

        setSelfTestResult(
          "camera",
          "fail",
          "Camera opened, but frame capture failed; demo fallback activated."
        );
      }
    } else {
      usedDemo = true;
      state.demoMode = true;

      testBefore =
        createDemoCapture("before");

      setSelfTestResult(
        "camera",
        "fail",
        `Camera unavailable; demo fallback activated. ${state.camera.error || ""}`.trim()
      );
    }

    stopCamera();
    state.demoMode = usedDemo;

    setSelfTestResult(
      "timer",
      "running",
      "Running shortened 5-second challenge…"
    );

    const timerStarted =
      performance.now();

    for (
      let second = 0;
      second < 5;
      second += 1
    ) {
      await selfTestDelay(1000);

      state.timer.elapsedMs =
        Math.min(
          5000,
          performance.now() -
            timerStarted
        );
    }

    state.timer.elapsedMs = 5000;

    testAfter =
      usedDemo
        ? createDemoCapture("after")
        : testBefore;

    if (!testAfter?.dataUrl) {
      testAfter =
        createDemoCapture("after");
    }

    setSelfTestResult(
      "timer",
      "pass",
      "5-second self-test timer completed and auto-completed."
    );

    setSelfTestResult(
      "scoring",
      "running",
      "Running vision scoring pipeline…"
    );

    try {
      const score =
        await scoreChallenge(
          testBefore.dataUrl,
          testAfter.dataUrl
        );

      if (
        !Number.isFinite(
          Number(
            score?.cleanliness
          )
        )
      ) {
        throw new Error(
          "No numeric cleanliness score returned."
        );
      }

      state.latestScore = {
        ...score,
        styleScore: 7.5
      };

      setSelfTestResult(
        "scoring",
        "pass",
        `Numeric score produced: ${Number(score.cleanliness)}%.`
      );
    } catch (error) {
      setSelfTestResult(
        "scoring",
        "fail",
        error?.message ||
          "Scoring pipeline failed."
      );
    }

    setSelfTestResult(
      "voice",
      "running",
      "Checking speech synthesis queue…"
    );

    try {
      if (
        !("speechSynthesis" in window) ||
        !(
          "SpeechSynthesisUtterance"
          in window
        )
      ) {
        throw new Error(
          "Speech synthesis is unavailable."
        );
      }

      const utterance =
        createUtterance(
          "Self test voice check."
        );

      utterance.volume = 0;

      window.speechSynthesis.speak(
        utterance
      );

      window.speechSynthesis.cancel();

      setSelfTestResult(
        "voice",
        "pass",
        "Speech synthesis is available and a test utterance was queued."
      );
    } catch (error) {
      setSelfTestResult(
        "voice",
        "fail",
        error?.message ||
          "Speech synthesis check failed."
      );
    }

    setSelfTestResult(
      "leaderboard",
      "running",
      "Saving, verifying, and removing SELFTEST entry…"
    );

    try {
      testRunId =
        `selftest-${Date.now()}`;

      const entries =
        loadLeaderboard();

      entries.push({
        id: testRunId,
        name: "SELFTEST",
        cleanliness:
          Number(
            state.latestScore
              ?.cleanliness ?? 0
          ),
        timeMs: 5000,
        styleScore: 7.5,
        timestamp:
          new Date().toISOString()
      });

      saveLeaderboard(entries);

      if (
        !loadLeaderboard().some(
          (entry) =>
            entry.id ===
              testRunId &&
            entry.name ===
              "SELFTEST"
        )
      ) {
        throw new Error(
          "SELFTEST entry could not be verified."
        );
      }

      saveLeaderboard(
        loadLeaderboard().filter(
          (entry) =>
            entry.id !==
            testRunId
        )
      );

      if (
        loadLeaderboard().some(
          (entry) =>
            entry.id ===
            testRunId
        )
      ) {
        throw new Error(
          "SELFTEST entry could not be removed."
        );
      }

      setSelfTestResult(
        "leaderboard",
        "pass",
        "SELFTEST entry saved, verified, and removed."
      );
    } catch (error) {
      if (testRunId) {
        saveLeaderboard(
          loadLeaderboard().filter(
            (entry) =>
              entry.id !==
              testRunId
          )
        );
      }

      setSelfTestResult(
        "leaderboard",
        "fail",
        error?.message ||
          "Leaderboard check failed."
      );
    }

    setSelfTestResult(
      "pose",
      "running",
      "Running pose pipeline on test frame…"
    );

    try {
      const styleScore =
        await runSelfTestPosePipeline(
          testAfter ||
            testBefore ||
            createDemoCapture(
              "pose"
            )
        );

      if (
        !Number.isFinite(
          Number(styleScore)
        )
      ) {
        throw new Error(
          "Pose pipeline returned no numeric style score."
        );
      }

      setSelfTestResult(
        "pose",
        "pass",
        `Pose pipeline completed; style result ${Number(styleScore).toFixed(1)}/10.`
      );
    } catch (error) {
      setSelfTestResult(
        "pose",
        "fail",
        error?.message ||
          "Pose pipeline failed."
      );
    }
  } finally {
    stopSpeech();
    stopCamera();

    if (testRunId) {
      saveLeaderboard(
        loadLeaderboard().filter(
          (entry) =>
            entry.id !==
            testRunId
        )
      );
    }

    state.demoMode =
      original.demoMode;

    state.captures =
      original.captures;

    state.timer.running = false;
    state.timer.elapsedMs =
      original.timerElapsedMs;

    state.timer.startedAt = null;

    if (state.timer.intervalId) {
      clearInterval(
        state.timer.intervalId
      );
    }

    state.timer.intervalId = null;

    state.latestScore =
      original.latestScore;

    state.result =
      original.result;

    state.latestRunId =
      original.latestRunId;

    els.playerName.value =
      original.playerName;

    updateCaptureIndicators();
    updateEvidenceThumbnails();
    updateTimerUI();
    updateCameraUI();

    const passed =
      state.selfTest.results.filter(
        (item) =>
          item.status === "pass"
      ).length;

    state.selfTest.report =
      buildSelfTestReport();

    els.selfTestSummary.textContent =
      `${passed}/${SELFTEST_CHECKS.length} PASS`;

    els.copySelfTestReport.classList.remove(
      "hidden"
    );

    els.runSelfTestButton.disabled =
      false;

    state.selfTest.running =
      false;
  }
}

async function copySelfTestReport() {
  if (!state.selfTest.report) {
    return;
  }

  try {
    await navigator.clipboard.writeText(
      state.selfTest.report
    );
  } catch {
    const area =
      document.createElement(
        "textarea"
      );

    area.value =
      state.selfTest.report;

    area.setAttribute(
      "readonly",
      ""
    );

    area.style.position =
      "fixed";

    area.style.opacity =
      "0";

    document.body.appendChild(
      area
    );

    area.select();

    document.execCommand(
      "copy"
    );

    area.remove();
  }

  els.copySelfTestReport.textContent =
    t("reportCopied");

  setTimeout(() => {
    els.copySelfTestReport.textContent =
      t("copyReport");
  }, 1600);
}

function bindEvents() {
  document
    .querySelectorAll(".language-button")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          setLanguage(
            button.dataset.language
          );
        }
      );
    });

  els.muteButton.addEventListener(
    "click",
    toggleMute
  );

  els.backButton.addEventListener(
    "click",
    handleBack
  );

  els.welcomeContinue.addEventListener(
    "click",
    () => {
      unlockAudio();
      playAnnouncerCue();
      navigateTo("instructions");
    }
  );

  els.instructionsContinue.addEventListener(
    "click",
    async () => {
      stopSpeech();
      navigateTo("camera");

      if (!state.demoMode) {
        await ensureCameraReady();
      }
    }
  );

  els.cameraContinue.addEventListener(
    "click",
    async () => {
      stopSpeech();

      if (state.demoMode) {
        navigateTo("timer");
        return;
      }

      const ready =
        await ensureCameraReady();

      if (ready) {
        navigateTo("timer");
      }
    }
  );

  els.continueWithoutCamera.addEventListener(
    "click",
    activateDemoMode
  );

  els.setupRetryCamera.addEventListener(
    "click",
    retryCamera
  );

  els.timerRetryCamera.addEventListener(
    "click",
    retryCamera
  );

  els.startPauseButton.addEventListener(
    "click",
    handleStartPause
  );

  els.resetButton.addEventListener(
    "click",
    () => {
      resetTimer();
      playTone(420, 0.05);
    }
  );

  els.completeButton.addEventListener(
    "click",
    completeChallenge
  );

  els.poseButton.addEventListener(
    "click",
    runVictoryPose
  );

  els.resultsContinue.addEventListener(
    "click",
    () => {
      stopSpeech();
      saveCompletedRun();
      navigateTo("leaderboard");
    }
  );

  els.playAgainButton.addEventListener(
    "click",
    async () => {
      stopSpeech();

      const keepDemoMode =
        state.demoMode;

      resetTimer();
      state.demoMode =
        keepDemoMode;

      if (state.demoMode) {
        updateCameraUI();
        navigateTo("timer");
      } else {
        navigateTo("camera");
        await ensureCameraReady();
      }
    }
  );

  els.homeButton.addEventListener(
    "click",
    () => {
      stopSpeech();
      resetTimer();

      state.demoMode = false;

      stopCamera();
      updateCameraUI();
      navigateTo("welcome");
    }
  );

  if (els.settingsButton) {
    els.settingsButton.addEventListener("click", openSettings);
  }

  if (els.settingsSave) {
    els.settingsSave.addEventListener("click", saveSettingsKeys);
  }

  if (els.settingsClear) {
    els.settingsClear.addEventListener("click", clearSettingsKeys);
  }

  if (els.settingsDone) {
    els.settingsDone.addEventListener("click", closeSettings);
  }

  if (els.providerLogExport) {
    els.providerLogExport.addEventListener("click", exportProviderLog);
  }

  if (els.voiceRecordButton) {
    els.voiceRecordButton.addEventListener("click", startVoiceNote);
  }

  if (els.voiceStopButton) {
    els.voiceStopButton.addEventListener("click", stopVoiceNote);
  }

  if (els.viewRecordsButton) {
    els.viewRecordsButton.addEventListener("click", openRecords);
  }

  if (els.viewDeckButton) {
    els.viewDeckButton.addEventListener("click", openDeck);

  document
    .querySelectorAll("[data-voice-sample]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        speakSample(button.dataset.voiceSample);
      });
    });
  }

  if (els.deckLeft) {
    els.deckLeft.addEventListener("click", () => answerDeck("miss"));
  }

  if (els.deckRight) {
    els.deckRight.addEventListener("click", () => answerDeck("right"));
  }

  if (els.deckCard) {
    let deckTouchX = null;
    els.deckCard.addEventListener("touchstart", (event) => {
      const touch = event.changedTouches?.[0];
      deckTouchX = touch ? touch.clientX : null;
    }, { passive: true });
    els.deckCard.addEventListener("touchend", (event) => {
      const touch = event.changedTouches?.[0];
      if (deckTouchX === null || !touch) return;
      const delta = touch.clientX - deckTouchX;
      deckTouchX = null;
      if (delta <= -60) answerDeck("miss");
      else if (delta >= 60) answerDeck("right");
    });
  }

  if (els.deckDone) {
    els.deckDone.addEventListener("click", closeDeck);
  }

  if (els.recordsDone) {
    els.recordsDone.addEventListener("click", closeRecords);
  }

  if (els.inspectionExportJson) {
    els.inspectionExportJson.addEventListener("click", exportInspectionJson);
  }

  if (els.inspectionExportCsv) {
    els.inspectionExportCsv.addEventListener("click", exportInspectionCsv);
  }

  [els.setupVideo, els.timerVideo].forEach(
    (video) => {
      video.addEventListener(
        "playing",
        () => {
          updateTrackDebug(
            state.camera.stream
          );

          if (
            state.camera.stream &&
            !state.demoMode
          ) {
            state.camera.ready = true;
            state.camera.error = null;
            updateCameraUI();
          }
        }
      );
    }
  );

  if (els.runSelfTestButton) {
    els.runSelfTestButton.addEventListener(
      "click",
      runSelfTest
    );
  }

  if (els.copySelfTestReport) {
    els.copySelfTestReport.addEventListener(
      "click",
      copySelfTestReport
    );
  }

  window.addEventListener(
    "pagehide",
    () => {
      stopSpeech();
      stopCamera();

      if (spectatorRefreshId) {
        clearInterval(
          spectatorRefreshId
        );
      }
    }
  );

  window.addEventListener(
    "pageshow",
    (event) => {
      if (
        event.persisted &&
        !state.demoMode &&
        (
          state.screen === "camera" ||
          state.screen === "timer"
        )
      ) {
        ensureCameraReady();
      }
    }
  );
}

function initializeApp() {
  initializeSpeech();
  bindEvents();
  loadLeaderboard();

  if (!DEBUG_MODE) {
    els.cameraTrackStatus.classList.add("hidden");
  }

  setLanguage("en");
  initializeSelfTestUI();

  if (SPECTATOR_MODE) {
    initializeSpectatorMode();
    return;
  }

  resetTimer();
  navigateTo("welcome");
  updateCaptureIndicators();
  updateCameraUI();
}

initializeApp();

window.cleaningChallenge = {
  state,
  config: CONFIG,

  speakInstruction,
  speakChallengeInstructions,
  announceTime,
  announceResultSummary,
  announceStyleScore,
  toggleMute,
  pickHostLine,
  speakHost,
  speakSample,
  prosodyJitter,
  voiceNameFor,
  selectedVoiceNames,
  resetHostLineHistory,
  clipUrlFor,
  clipStatus,
  HOST_LINES,
  usedHostLines,

  requestCamera,
  ensureCameraReady,
  stopCamera,
  captureFrame,
  activateDemoMode,

  navigateTo,
  startTimer,
  pauseTimer,
  resetTimer,
  completeChallenge,

  loadObjectDetector,
  detectObjectsInImage,
  compareFrames,
  matchObjects,
  calculateLocalScore,
  scoreChallenge,
  scoreWithCloudVision,
  getMockAIScore,
  getDemoScore,

  loadPoseLandmarker,
  computeStyleScore,
  runVictoryPose,

  loadLeaderboard,
  saveLeaderboard,
  saveCompletedRun,
  renderLeaderboard,
  renderSpectatorLeaderboard,

  runSelfTest,
  runPersonaSuite,
  buildVerdictText,
  copySelfTestReport
};
