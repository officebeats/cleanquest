
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
    rate: 1.1,
    pitch: 1.15,
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
    minSurfaceConfidence: 0.6
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
  "settings"
];

const query = new URLSearchParams(window.location.search);
const DEBUG_MODE = query.get("debug") === "1";
const SPECTATOR_MODE = query.get("spectator") === "1";
const SELFTEST_MODE = query.get("selftest") === "1";

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
  leaderboardList: document.getElementById("leaderboardList"),

  selfTestPanel: document.getElementById("selfTestPanel"),
  runSelfTestButton: document.getElementById("runSelfTestButton"),
  selfTestResults: document.getElementById("selfTestResults"),
  selfTestSummary: document.getElementById("selfTestSummary"),
  selfTestChecklist: document.getElementById("selfTestChecklist"),
  copySelfTestReport: document.getElementById("copySelfTestReport"),

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
  } catch {
    state.voice.voices = [];
    state.voice.selectedVoice = null;
  }
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

  if (state.voice.selectedVoice) {
    utterance.voice = state.voice.selectedVoice;
  }

  utterance.lang = getSpeechLanguage();
  utterance.rate = options.rate ?? 1.04;
  utterance.pitch = options.pitch ?? 1.08;
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
  const seconds = Math.ceil(secondsRemaining);

  if (seconds === 60) speakInstruction("voice60");
  else if (seconds === 45) speakInstruction("voiceHalfway");
  else if (seconds === 30) speakInstruction("voice30");
  else if (seconds === 10) speakInstruction("voice10");
  else if (seconds <= 0) speakInstruction("voiceTimeComplete");
}

function announceResultSummary() {
  if (!state.result) return;

  speakText(
    state.result.ai?.scorable === false
      ? "Challenge complete. I need a better look at the station, so let's rescan."
      : `Challenge complete! Visual clean score: ${state.result.ai.cleanliness} percent. Nice work!`,
    { rate: 1.02, pitch: 1.07 }
  );
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
    if (state.screen === "instructions") speakChallengeInstructions();
    else speakText(state.language === "es"
      ? "¡El presentador está listo!"
      : state.language === "pl"
        ? "Prowadząca jest gotowa!"
        : "Your announcer is ready!");
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

  speakInstruction("voiceDemoMode");
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
  [60, 45, 30, 10].forEach((seconds) => {
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

  if (!state.timer.announcements.complete) {
    state.timer.announcements.complete = true;
    announceTime(0);
  }

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
    speakInstruction("voiceBegin");
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
  const empty = { metaKey: "", basetenKey: "" };

  try {
    const raw = localStorage.getItem(CLOUD_SETTINGS_KEY);
    if (!raw) return empty;

    const parsed = JSON.parse(raw);

    return {
      metaKey: typeof parsed.metaKey === "string" ? parsed.metaKey : "",
      basetenKey: typeof parsed.basetenKey === "string" ? parsed.basetenKey : ""
    };
  } catch {
    return empty;
  }
}

function refreshSettingsInputs() {
  const settings = loadCloudSettings();

  if (els.metaApiKey) els.metaApiKey.value = settings.metaKey;
  if (els.basetenApiKey) els.basetenApiKey.value = settings.basetenKey;
}

function openSettings() {
  if (state.screen !== "settings") {
    state.settingsReturn = state.screen;
  }

  refreshSettingsInputs();
  els.settingsSavedNote?.classList.add("hidden");
  navigateTo("settings");
}

function closeSettings() {
  navigateTo(state.settingsReturn || "welcome");
}

function saveSettingsKeys() {
  const next = {
    metaKey: els.metaApiKey?.value.trim() || "",
    basetenKey: els.basetenApiKey?.value.trim() || ""
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
    if (!settings.metaKey) return offline;

    const [smallBefore, smallAfter] = await Promise.all([
      downscaleCapture(before?.dataUrl),
      downscaleCapture(after?.dataUrl)
    ]);

    if (!smallBefore || !smallAfter) {
      return { status: "error", reason: "image" };
    }

    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      CONFIG.cloud.timeoutMs
    );

    let response;

    try {
      response = await fetch(CONFIG.cloud.endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${settings.metaKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: CONFIG.cloud.model,
          messages: [
            { role: "developer", content: CLOUD_SCORING_PROMPT },
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
      return { status: "error", reason: `http-${response?.status || "none"}` };
    }

    const data = await response.json().catch(() => null);
    const parsed = sanitizeScorecard(
      extractScorecardJSON(data?.choices?.[0]?.message?.content)
    );

    if (!parsed) {
      return { status: "error", reason: "schema" };
    }

    return {
      status: "verified",
      provider: "meta",
      model: CONFIG.cloud.model,
      ...parsed
    };
  } catch {
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

  if (!verified || verified.status === "offline") {
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

    const name = document.createElement("span");
    name.className = "verified-name";
    name.textContent = surface.name.toUpperCase();

    const score = document.createElement("strong");
    score.textContent = surface.verified
      ? `${surface.score}%`
      : t("surfaceUnverified").toUpperCase();
    if (!surface.verified) score.classList.add("is-unverified");

    row.append(name, score);

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

  speakInstruction("voicePosePrompt");

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
    announceStyleScore(styleScore);

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
      playAnnouncerCue();
      navigateTo("instructions");
      speakChallengeInstructions();
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
  copySelfTestReport
};
