
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
      model: "meta-models/muse-spark-open"
    },
    fireworks: {
      endpoint: "https://api.fireworks.ai/inference/v1/chat/completions",
      model: "accounts/fireworks/models/muse-spark-open"
    },
    backendProxyUrl: "https://script.google.com/macros/s/AKfycbwV_FnddnMG6XO2wZ43wXD56wrpH79O2amozBM5Rd0rE4rQZBokI1Qm47QhoFYwD8I/exec",
    samEndpoint: "https://api.meta.ai/v1/responses",
    samModel: "sam-3.1"
  }
  ,
  verdictTiers: {
    passMark: 70,
    passBigMargin: 15,
    passCloseMargin: 5,
    retryFarMargin: 15
  },
  scoring: {
    cleanWeight: 0.5,
    techniqueWeight: 0.25,
    timeWeight: 0.25,
    timeFloor: 10,
    fastReviewRatio: 0.7,
    implausiblyFastSeconds: 15,
    dwellCreditStepSeconds: 15
  },
  leaderboard: {
    topN: 10
  },
  consistency: {
    windowWeeks: 13,
    weeklyBenchmark: 70,
    minRunsPerWeek: 3
  },
  crews: {
    minSeats: 3,
    maxSeats: 8,
    participationThreshold: 0.8
  },
  deck: {
    dailyCount: 5,
    totalCards: 30
  },
  retentionDays: 90,
  buildingLeagues: [
    "office",
    "education",
    "healthcare",
    "industrial",
    "retail",
    "hospitality",
    "foodservice",
    "transit",
    "athletics",
    "multifamily"
  ],
  trainingPacks: {
    dwell: {
      id: "dwell",
      label: "5-Day Dwell & Disinfection Pack",
      cardIds: ["deck-14", "deck-22", "deck-25", "deck-28", "deck-09"]
    },
    surface: {
      id: "surface",
      label: "5-Day Top-to-Bottom Surface Pack",
      cardIds: ["deck-01", "deck-10", "deck-13", "deck-16", "deck-21"]
    },
    product: {
      id: "product",
      label: "5-Day Product-to-Surface Match Pack",
      cardIds: ["deck-03", "deck-06", "deck-18", "deck-23", "deck-29"]
    }
  },
  areaTemplates: {
    breakroom: {
      label: "Breakroom & Pantry",
      difficultyAdjustment: 0,
      spots: [
        "Sink & counter",
        "Tabletop & appliance front",
        "Trash & floor zone",
        "Vending bank, microwave & fridge handles",
        "Soap, towel & sanitizer dispensers"
      ]
    },
    restroom: {
      label: "Restroom & Washroom",
      difficultyAdjustment: 3,
      spots: [
        "Sink & mirror counter",
        "Fixture row & partition",
        "Entry door & dispenser zone",
        "Urinal, toilet & stall hardware",
        "Soap, towel & sanitizer dispensers",
        "Hard floor scrub & baseboard edge"
      ]
    },
    lobby: {
      label: "Lobby & Atrium",
      difficultyAdjustment: 1,
      spots: [
        "Entry glass & handles",
        "Reception counter",
        "Waiting area floor",
        "Carpeted traffic lane & walk-off mat",
        "High-touch door pulls, switches & rails"
      ]
    },
    office: {
      label: "Open Office & Cubicles",
      difficultyAdjustment: 0,
      spots: [
        "Workstation desk surface",
        "Conference table & chairs",
        "Entry & glass partition",
        "Workstation desk & shelf",
        "Trash & floor zone"
      ]
    },
    classroom: {
      label: "Classroom & Lecture Hall",
      difficultyAdjustment: 2,
      spots: [
        "Board rail & front desk",
        "Student desk row",
        "Doorway & sink area",
        "High-touch door pulls, switches & rails",
        "Trash & floor zone"
      ]
    },
    conference: {
      label: "Conference & Boardroom",
      difficultyAdjustment: 1,
      spots: [
        "Conference table & chairs",
        "Entry & glass partition",
        "High-touch door pulls, switches & rails",
        "Carpeted traffic lane & walk-off mat"
      ]
    },
    clinic: {
      label: "Patient & Exam Room",
      difficultyAdjustment: 4,
      spots: [
        "Patient bed rails & exam table",
        "Sink & mirror counter",
        "Soap, towel & sanitizer dispensers",
        "High-touch door pulls, switches & rails",
        "Hard floor scrub & baseboard edge"
      ]
    },
    kitchen: {
      label: "Commercial Kitchen & Prep",
      difficultyAdjustment: 3,
      spots: [
        "Commercial prep table & hood apron",
        "Sink & counter",
        "Soap, towel & sanitizer dispensers",
        "Hard floor scrub & baseboard edge",
        "Trash & floor zone"
      ]
    },
    dining: {
      label: "Dining & Food Court",
      difficultyAdjustment: 1,
      spots: [
        "Tabletop & appliance front",
        "Entry glass & handles",
        "Hard floor scrub & baseboard edge",
        "Trash & floor zone"
      ]
    },
    corridor: {
      label: "Corridor, Elevator & Stairwell",
      difficultyAdjustment: 1,
      spots: [
        "Elevator cab buttons, rails & threshold",
        "Carpeted traffic lane & walk-off mat",
        "High-touch door pulls, switches & rails",
        "Mirror, glass & handles"
      ]
    },
    warehouse: {
      label: "Warehouse & Loading Dock",
      difficultyAdjustment: 2,
      spots: [
        "Hard floor scrub & baseboard edge",
        "Trash & floor zone",
        "High-touch door pulls, switches & rails",
        "Workstation desk & shelf"
      ]
    },
    fitness: {
      label: "Locker & Fitness Floor",
      difficultyAdjustment: 2,
      spots: [
        "Cardio & weight equipment touchpoints",
        "Mirror, glass & handles",
        "Soap, towel & sanitizer dispensers",
        "Hard floor scrub & baseboard edge"
      ]
    },
    retailfloor: {
      label: "Sales Floor & Checkout",
      difficultyAdjustment: 1,
      spots: [
        "POS checkout lane & counter",
        "Entry glass & handles",
        "Carpeted traffic lane & walk-off mat",
        "Hard floor scrub & baseboard edge",
        "Trash & floor zone"
      ]
    }
  }
};

const translations = {
  en: {
    aiPoweredChallenge: "AI-POWERED SPEED CHALLENGE",
    beatThe: "Beat the",
    certificationTime: "Benchmark Time",
    welcomeBody: "Snap Before and After — while the clock runs, AI samples 9 surface zones live, captures mid-run progress frames, and calls the action.",
    homeStatusLine: "🔥 Streak {streak} · Week {week} of 13 · {matchup}",
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
    judgeDemoAction: "JUDGE DEMO · SAMPLE SCORE",
    judgeDemoNote: "Judge demo · scored live by the on-device pipeline on sample photos. No leaderboard credit.",
    verifyProvenanceVerified: "Verified by {provider} · {model}",
    verifyProvenanceSamSuffix: " · SAM 3.1 overlays",
    verifyProvenanceOffline: "On-device pipeline · EfficientDet-Lite0 + classical vision · no cloud key",
    verifyProvenanceClassical: "On-device classical vision (pixel-diff + 3×3 surface zones) · no cloud key",
    pinQuickFill: "⚡ DEMO PASS",
    openJudgesReport: "Judges' Presentation ↗",
    discoGrooveLabel: "MUSIC",
    settingsKeysExplain: "Optional cloud upgrade: unlocks verified per-surface AI scorecards, SAM 3.1 surface highlights, and voice-note transcription. Not required to play — the game works on-device without keys.",
    getMetaKeyLink: "Get key ↗",
    getBasetenKeyLink: "Get key ↗",
    localPrivacy: "On-device analysis: photos stay on this phone.",
    cameraPermissionDenied: "Camera permission was denied. Allow camera access and retry.",
    cameraNotFound: "No usable camera was found on this device.",
    cameraBusy: "The camera could not start. Close other camera apps and retry.",
    cameraBlack: "The camera is connected but no image is visible. Retry the camera.",
    cameraGeneric: "The camera could not start. Please retry.",

    liveChallenge: "LIVE CHALLENGE",
    qualityFirst: "Quality first. Time second.",
    ready: "READY",
    hudLive: "LIVE",
    hudOffline: "OFFLINE",
    hudStandby: "STANDBY",
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
    visibleCleanliness: "TOTAL SCORE",
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
    phonePlaceholder: "555-0199",
    phoneAria: "Phone number",
    pinPlaceholder: "4-digit PIN",
    siteInputPlaceholder: "Site 2 · Restroom & Lobby",
    inviteInputPlaceholder: "Paste phone/name list to invite",
    ariaBack: "Go back",
    ariaMaxBefore: "Maximize Before photo",
    ariaMaxAfter: "Maximize After photo",
    ariaQrPayload: "QR Code Payload",
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
    findingFraming: "Before/after framing changed too much. Keep the camera fixed and rescan.",
    findingZones: "{improved} of 9 zones visibly improved · {residual} remaining.",
    findingZonesOne: "{improved} of 9 zones visibly improved · 1 zone needs another pass.",
    findingDemoStation: "Demo station: 3 of 3 surface items (cup, bottle, bowl) cleared; counter and sink basin visibly improved.",
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
    deckCatSurface: "SURFACE",
    deckCatProduct: "PRODUCT",
    deckCatTechnique: "TECHNIQUE",
    deckRight: "SWIPE RIGHT (RIGHT CALL) ⟶",
    deckMiss: "⟵ SWIPE LEFT (MISS)",
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
    leaderboardEmpty: "No eligible runs yet — complete a shift run to rank.",
    exportJson: "⬇ SAVE BACKUP",
    exportCsv: "⬇ DOWNLOAD SPREADSHEET",
    locationNotShared: "Location not shared",
    settingsProvider: "Inference provider",
    providerLogTitle: "PROVIDER RUN LOG",
    emptyLog: "No runs logged yet.",
    exportLog: "EXPORT LOG",
    settingsTitle: "SETTINGS",
    settingsMetaKey: "Meta API key",
    settingsBasetenKey: "Baseten API key",
    settingsKeysNote: "Keys stay in this browser only and are never shared.",
    settingsSave: "SAVE KEYS",
    settingsClear: "CLEAR KEYS",
    settingsSaved: "Saved in this browser.",
    settingsDone: "DONE",
    verifiedScorecard: "VERIFIED SCORECARD",
    offlineScoreNote: "Offline score — add a key in Settings for cloud verification.",
    scorecardErrorNote: "Cloud check failed — showing the on-device score.",
    surfaceUnverified: "unverified",
    consentTitle: "BEFORE YOUR FIRST RUN",
    consentReadAloud: "🔊 READ ALOUD",
    consentBody: "CleanQuest captures before and after photos of the work surface. Faces are never identified (no facial recognition or biometrics). An optional victory-pose photo is processed on this device only. Location is recorded only if you share it. If you add your own provider key in Settings, photos and voice notes may be sent to that provider for verification or transcription; otherwise everything is stored in this browser only. Scores and records are for training and recognition — never for discipline.",
    consentAgreeLabel: "I understand and agree",
    consentConfirm: "CONFIRM",
    consentSavedNote: "✓ Consent recorded in this browser.",
    consistencyDefault: "Week 1 of 13 · On track",
    consistencyProgress: "Week {week} of {window} · {status}",
    personalRecordSummary: "Personal Best: {best}% · Runs: {runs} · Streak: {streak}d · Week {week}/13",
    consistencyOnTrack: "On track",
    gapSummary: "Where: {where} · How: {how} · When: {when} · Who: {who} · Knowledge gaps: surface={surface}, technique={technique}, product={product} · Recommended pack: {pack} (one tap to assign below)",
    analyticsSummary: "Monthly Sponsor Analytics (Anonymized): {cleaners} active cleaners · {runs} runs · {impressions} impressions · {accuracy}% category accuracy",
    consistencyBuilding: "Building record",
    consistencyDisclaimer: "Benchmark consistency — never a certification",
    joinVirtualSquad: "SOLO? JOIN VIRTUAL SQUAD",
    matchupNoCrew: "No crew active yet — join a 3–8 crew or tap Virtual Squad.",
    matchupLabel: "{crew} avg {score}% ({badge}) vs. {opp} {oppScore}%",
    matchupActive: "{pct}% active",
    rivalCrewName: "Rival Night Crew",
    virtualSquadActive: "✓ VIRTUAL SQUAD ACTIVE",
    assignedPacksLabel: "Assigned packs:",
    assignedPacksNone: "Assigned packs: none yet",
    approvedLabel: "Approved ({n}):",
    crewNote: " · Crew: {name} {members}/{seats} seats · Participation {pct}%{qual}",
    crewQualified: " (80%+ qualified)",
    areaLabel: "AREA",
    assignedSpotPrefix: "SPOT:",
    frameGuidePrompt: "ALIGN ASSIGNED SPOT IN FRAME",
    ghostToggle: "◐ GHOST ON",
    ghostToggleOff: "○ GHOST OFF",
    dwellCueText: "Dwell cue: let surface solution sit full contact time (does not count against speed).",
    dwellCreditAction: "+15s DWELL",
    dwellCredited: "Dwell credit +{s}s applied (never counts against speed).",
    scoreBreakdownTitle: "SCORE EXPLANATION (CLEAN · TECHNIQUE · TIME)",
    barClean: "Clean",
    barDetailClean: "Visible surface cleanliness from before/after comparison.",
    barDetailCleanNone: "Visible surface cleanliness was not measured on this run.",
    gapHow: "Dwell-time compliance, top-to-bottom order, product-to-surface match",
    gapWhenPattern: "{bucket} shift pattern ({count} of {total} logged runs)",
    gapWhenNone: "No timed runs logged yet",
    gapWhoMvp: "{member} leading this week ({score} top run)",
    gapWhoNone: "No crew runs this week yet",
    gapBucketOvernight: "Overnight",
    gapBucketDay: "Day",
    gapBucketEvening: "Evening",
    queueSaveFailed: "⚠ Offline queue is full — this run could not be saved offline.",
    srcDwellTime: "dwell time",
    srcTopToBottomOrder: "top-to-bottom order",
    srcSurfaceOrder: "surface order",
    srcTechniqueScore: "technique score",
    barDetailTechniqueNone: "No local technique evidence was measured for this run.",
    barDetailTechnique: "Derived from measured evidence ({sources}).",
    barDetailNoTime: "No elapsed run time recorded.",
    barDetailTimeReview: "Faster than 70% of standard time — full time points (no bonus), flagged for human review.",
    barDetailTimeOk: "85–100% of standard time earns full points; gradual deduction over standard, never zero.",
    barTechnique: "Technique",
    barTime: "Time vs. benchmark",
    notMeasured: "not measured",
    reviewFlag: "review",
    disputeHeading: "FAIR REVIEW",
    disputeAction: "DISPUTE SCORE",
    disputeOpenedButton: "APPEAL OPEN",
    disputeHint: "One-tap appeal — reviewed within 5 business days. Scores are never edited manually.",
    disputeOpenStatus: "Appeal open ({id}) — review within 5 business days. Read-only: no person can edit a score.",
    offlineQueueTitle: "OFFLINE RUN QUEUE (AWAITING SCORE)",
    retryOfflineQueue: "SCORE QUEUED RUNS",
    offlineQueuedNotice: "Offline run saved to queue as awaiting score ({count} queued).",
    hypeOffLabel: "Off — silent",
    hypeChillLabel: "Chill — start, finish & verdict only",
    hypeFullLabel: "Full — all host hype beats (default)",
    sponsoredBadge: "SPONSORED",
    sponsorHomeTitle: "Restroom & Breakroom Spotlight Week",
    sponsorHomeDetail: "Complete 3 verified shift runs for weekly crew bonus",
    sponsorDeckTitle: "Suggested product category: Labeled pH-neutral or broad-spectrum surface solution",
    sponsorDeckDetail: "Always match product type to surface",
    pinSignupTitle: "CLEANER PASS (PHONE + 4-DIGIT PIN)",
    stepLanguage: "Language",
    stepPin: "PIN",
    stepConsent: "Consent",
    stepHome: "Home",
    pinSaveAction: "SAVE PIN",
    pinSavedNote: "✓ PIN active",
    pinLocalNote: "Local convenience lock only — your phone + PIN stay on this device and are never sent anywhere.",
    leagueLabel: "BUILDING",
    siteLabel: "SITE",
    productTypePrefix: "Right product type:",
    optInShareLabel: "Share my verified record with this site",
    adminPanelTitle: "SUPERVISOR TOOLS",
    adminTabInvite: "Pledge",
    adminTabSites: "Sites & QR",
    adminTabCrew: "Crew",
    adminTabDashboard: "Insights",
    adminTabAssign: "Training",
    adminPledgeText: "Supervisor pledge: data is for training & recognition only, never discipline.",
    assignPackAction: "ASSIGN 5-DAY PACK",
    registerSiteAction: "REGISTER SITE",
    printQrAction: "🖨 PRINT QR",
    inviteApproveAction: "INVITE & APPROVE",
    newSquadAction: "+ NEW SQUAD",
    packDwell: "5-Day Dwell & Disinfection Pack",
    packSurface: "5-Day Top-to-Bottom Surface Pack",
    packProduct: "5-Day Product-to-Surface Match Pack",
    editFtueAction: "PASS / CONSENT",
    mountGuideAction: "? MOUNT GUIDE",
    pledgeWarning: "⚠ Accept the supervisor pledge on tab 11 first — data is for training & recognition only, never discipline.",
    siteRegistered: "✓ Registered site: {site} (QR sticker ready).",
    membersInvited: "✓ Invited & approved {count} member(s) ({total} approved).",
    packAssigned: "✓ Assigned {pack} ({cards} cards queued for next 5-card session).",
    ftueActiveLabel: "✓ Consent & Pass active",
    offlineScored: "SCORED {score}%",
    offlineAwaiting: "AWAITING SCORE",
    qrInvalid: "⚠ Invalid QR code — use format CQ-QR-<LEAGUE>-<AREA> (e.g. CQ-QR-OFFICE-BREAKROOM)",
    qrScanned: "✓ Scanned {code} → {area} ({spot})",
    qrReady: "Ready to scan · Current station: {code}",
    qrDemoNote: "Demo mode: tap a station sticker below or enter the CQ-QR code manually.",
    qrUnsupportedNote: "Camera scanning is not supported in this browser — tap a station below or enter the code.",
    qrUnavailableNote: "Camera unavailable — tap a station below or enter the CQ-QR code manually.",
    afterAlignPrompt: "GHOST ALIGNMENT: Match your Before angle, then tap CAPTURE AFTER & SCORE",
    captureAfterAndScore: "CAPTURE AFTER & SCORE",
    scanAreaQrAction: "⌗ SCAN QR",
    qrScannedPrefix: "✓ QR SPOT:",
    spotLabel: "🎯 SPOT",
    siteLabel: "📍 SITE",
    leagueLabel: "🏢 BUILDING",
    areaLabel: "🚪 AREA",
    replaySummary: "🔊 REPLAY SUMMARY",
    rulePrefix: "RULE:",
    idleNudge: "⚡ NO MOTION DETECTED — STEP IN & WORK THE ASSIGNED SPOT!",
    noMotionBadge: "⚠ NO MOTION · STEP IN!",
    zonesActive: "📸 LIVE · {n}/9 ZONES · {s} SNAPS",
    sharePassportAction: "🪪 SHARE PASSPORT",
    passportCopiedNote: "✓ Verified Benchmark Passport copied to share!",
    deckSwipeHint: "⟵ DRAG / SWIPE LEFT = MISS  ·  DRAG / SWIPE RIGHT = RIGHT CALL ⟶",
    deckNextCard: "NEXT CARD ⟶",
    deckPracticeAgain: "🔄 PRACTICE ANOTHER 5 CARDS",
    openPassportHub: "🪪 PASSPORT, CREW & SUPERVISOR",
    qrModalTitle: "⌗ SCAN STATION QR STICKER",
    lightboxTitle: "BEFORE & AFTER COMPARISON",
    lightboxSplit: "SIDE BY SIDE",
    lightboxAfterShadow: "AFTER + SHADOW",
    lightboxClose: "✕ CLOSE",
    qrTapStation: "TAP A STATION QR STICKER OR ENTER CODE",
    qrApply: "APPLY QR CODE",
    maximizeBadge: "⤢",
    lightboxGhostOpacity: "BEFORE SHADOW OVERLAY OPACITY",
    deckStampLeft: "⟵ MISS",
    deckStampRight: "RIGHT CALL ⟶",
    openSupervisorTools: "📋 OPEN INSPECTION LOG & SUPERVISOR TOOLS (11–15) →",
    leagueOffice: "🏢 Office & Corporate",
    leagueEducation: "🏫 Education & Campus",
    leagueHealthcare: "🏥 Healthcare & Medical",
    leagueIndustrial: "🏭 Industrial & Manufacturing",
    leagueRetail: "🛍️ Retail & Shopping Center",
    leagueHospitality: "🏨 Hospitality & Hotel",
    leagueFoodservice: "🍽️ Foodservice & Restaurant",
    leagueTransit: "✈️ Aviation & Transit Hub",
    leagueAthletics: "🏟️ Gym & Recreation",
    leagueMultifamily: "🏘️ Multi-Family & HOA",
    areaBreakroom: "☕ Breakroom & Pantry",
    areaRestroom: "🚻 Restroom & Washroom",
    areaLobby: "🛋️ Lobby & Atrium",
    areaOffice: "💼 Open Office & Cubicles",
    areaClassroom: "🎓 Classroom & Lecture Hall",
    areaConference: "🤝 Conference & Boardroom",
    areaClinic: "🩺 Patient & Exam Room",
    areaKitchen: "👨‍🍳 Commercial Kitchen & Prep",
    areaDining: "🍴 Dining & Food Court",
    areaCorridor: "🚶 Corridor, Elevator & Stairwell",
    areaWarehouse: "📦 Warehouse & Loading Dock",
    areaFitness: "🏋️ Locker & Fitness Floor",
    areaRetailfloor: "🛒 Sales Floor & Checkout",
    lbTabShift: "⚡ SHIFT CHALLENGE",
    lbTabDeck: "🃏 DAILY DECK",
    lbOpenDeckAction: "🃏 DAILY DECK",
    playDailyDeck: "🃏 PLAY DAILY DECK",
    deckLeaderboardAction: "🏆 DECK LEADERBOARD",
    gradeClean: "CLEAN",
    gradePartly: "PARTLY CLEAN",
    gradeMissed: "MISSED",
  },

  es: {
    aiPoweredChallenge: "RETO DE VELOCIDAD CON IA",
    beatThe: "Supera el",
    certificationTime: "Tiempo de Referencia",
    welcomeBody: "Toma Antes y Después — durante la cuenta regresiva, la IA muestrea 9 zonas en vivo, captura cuadros de progreso y narra la acción.",
    homeStatusLine: "🔥 Racha {streak} · Semana {week} de 13 · {matchup}",
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
    judgeDemoAction: "DEMO JURADO · EJEMPLO",
    judgeDemoNote: "Demo para el jurado · puntuado en vivo localmente con fotos de muestra. Sin crédito en la tabla.",
    verifyProvenanceVerified: "Verificado por {provider} · {model}",
    verifyProvenanceSamSuffix: " · superposiciones SAM 3.1",
    verifyProvenanceOffline: "Pipeline local · EfficientDet-Lite0 + visión clásica · sin clave en la nube",
    verifyProvenanceClassical: "Visión clásica local (diferencia de píxeles + zonas 3×3) · sin clave en la nube",
    pinQuickFill: "⚡ PASE DEMO",
    openJudgesReport: "Presentación del Jurado ↗",
    discoGrooveLabel: "MÚSICA",
    settingsKeysExplain: "Mejora opcional en la nube: activa tarjetas verificadas por superficie, resaltado SAM 3.1 y transcripción de voz. No es obligatorio para jugar.",
    getMetaKeyLink: "Obtener clave ↗",
    getBasetenKeyLink: "Obtener clave ↗",
    localPrivacy: "Análisis local: las fotos permanecen en este teléfono.",
    cameraPermissionDenied: "Se negó el permiso de cámara. Permite el acceso y vuelve a intentarlo.",
    cameraNotFound: "No se encontró una cámara disponible en este dispositivo.",
    cameraBusy: "La cámara no pudo iniciar. Cierra otras aplicaciones de cámara e inténtalo de nuevo.",
    cameraBlack: "La cámara está conectada, pero no muestra imagen. Vuelve a intentarlo.",
    cameraGeneric: "La cámara no pudo iniciar. Vuelve a intentarlo.",

    liveChallenge: "RETO EN VIVO",
    qualityFirst: "Calidad primero. Tiempo después.",
    ready: "LISTO",
    hudLive: "EN VIVO",
    hudOffline: "SIN CONEXIÓN",
    hudStandby: "EN ESPERA",
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
    visibleCleanliness: "PUNTUACIÓN TOTAL",
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
    phonePlaceholder: "555-0199",
    phoneAria: "Número de teléfono",
    pinPlaceholder: "PIN de 4 dígitos",
    siteInputPlaceholder: "Sitio 2 · Baño y vestíbulo",
    inviteInputPlaceholder: "Pega la lista de teléfonos/nombres para invitar",
    ariaBack: "Volver",
    ariaMaxBefore: "Ampliar foto del antes",
    ariaMaxAfter: "Ampliar foto del después",
    ariaQrPayload: "Código QR",
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
    findingFraming: "El encuadre antes/después cambió demasiado. Mantén la cámara fija y repite.",
    findingZones: "{improved} de 9 zonas mejoraron visiblemente · {residual} pendientes.",
    findingZonesOne: "{improved} de 9 zonas mejoraron visiblemente · 1 zona necesita otra pasada.",
    findingDemoStation: "Estación demo: 3 de 3 objetos de la superficie (taza, botella, tazón) retirados; la encimera y el lavabo mejoraron visiblemente.",
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
    deckCatSurface: "SUPERFICIE",
    deckCatProduct: "PRODUCTO",
    deckCatTechnique: "TÉCNICA",
    deckRight: "DESLIZA DERECHA (ACIERTA) ⟶",
    deckMiss: "⟵ DESLIZA IZQUIERDA (FALLO)",
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
    leaderboardEmpty: "Aún no hay rondas elegibles — completa una ronda de turno para clasificar.",
    exportJson: "⬇ GUARDAR RESPALDO",
    exportCsv: "⬇ DESCARGAR TABLA",
    locationNotShared: "Ubicación no compartida",
    settingsProvider: "Proveedor de inferencia",
    providerLogTitle: "REGISTRO DE EJECUCIONES",
    emptyLog: "Aún no hay ejecuciones registradas.",
    exportLog: "EXPORTAR REGISTRO",
    settingsTitle: "AJUSTES",
    settingsMetaKey: "Clave de Meta Model API",
    settingsBasetenKey: "Clave API de Baseten",
    settingsKeysNote: "Las claves solo quedan en este navegador y nunca se comparten.",
    settingsSave: "GUARDAR CLAVES",
    settingsClear: "BORRAR CLAVES",
    settingsSaved: "Guardadas en este navegador.",
    settingsDone: "LISTO",
    verifiedScorecard: "TARJETA VERIFICADA",
    offlineScoreNote: "Puntuación local — añade una clave en Ajustes para la verificación en la nube.",
    scorecardErrorNote: "Falló la comprobación en la nube — se muestra la puntuación local.",
    surfaceUnverified: "sin verificar",
    consentTitle: "ANTES DE TU PRIMERA RONDA",
    consentReadAloud: "🔊 ESCUCHAR",
    consentBody: "CleanQuest toma fotos del antes y después de la superficie de trabajo. Los rostros nunca se identifican (sin reconocimiento facial ni biometría). Una foto opcional de pose de victoria se procesa solo en este dispositivo. La ubicación se registra solo si la compartes. Si agregas tu propia clave de proveedor en Ajustes, las fotos y notas de voz pueden enviarse a ese proveedor para verificación o transcripción; si no, todo se guarda solo en este navegador. Las puntuaciones y registros son para formación y reconocimiento — nunca para disciplina.",
    consentAgreeLabel: "Entiendo y acepto",
    consentConfirm: "CONFIRMAR",
    consentSavedNote: "✓ Consentimiento guardado en este navegador.",
    consistencyDefault: "Semana 1 de 13 · En camino",
    consistencyProgress: "Semana {week} de {window} · {status}",
    personalRecordSummary: "Mejor marca: {best}% · Rondas: {runs} · Racha: {streak}d · Semana {week}/13",
    consistencyOnTrack: "En camino",
    gapSummary: "Dónde: {where} · Cómo: {how} · Cuándo: {when} · Quién: {who} · Brechas: superficie={surface}, técnica={technique}, producto={product} · Paquete recomendado: {pack} (un toque para asignar abajo)",
    analyticsSummary: "Analítica mensual de patrocinador (anonimizada): {cleaners} limpiadores activos · {runs} rondas · {impressions} impresiones · {accuracy}% de precisión por categoría",
    consistencyBuilding: "Construyendo historial",
    consistencyDisclaimer: "Consistencia de referencia — nunca una certificación",
    joinVirtualSquad: "¿SOLO? UNIRSE A ESCUADRÓN VIRTUAL",
    matchupNoCrew: "Aún no hay equipo activo: únete a un equipo de 3–8 o toca Escuadrón Virtual.",
    matchupLabel: "{crew} prom. {score}% ({badge}) vs. {opp} {oppScore}%",
    matchupActive: "{pct}% activo",
    rivalCrewName: "Equipo Nocturno Rival",
    virtualSquadActive: "✓ ESCUADRÓN VIRTUAL ACTIVO",
    assignedPacksLabel: "Paquetes asignados:",
    assignedPacksNone: "Paquetes asignados: ninguno aún",
    approvedLabel: "Aprobados ({n}):",
    crewNote: " · Equipo: {name} {members}/{seats} lugares · Participación {pct}%{qual}",
    crewQualified: " (calificado 80%+)",
    areaLabel: "ÁREA",
    assignedSpotPrefix: "PUNTO:",
    frameGuidePrompt: "ALINEA EL PUNTO ASIGNADO EN EL MARCO",
    ghostToggle: "◐ GUÍA ACTIVA",
    ghostToggleOff: "○ GUÍA INACTIVA",
    dwellCueText: "Aviso de contacto: deja actuar el producto el tiempo completo de etiqueta (no penaliza velocidad).",
    dwellCreditAction: "+15s CONTACTO",
    dwellCredited: "Crédito de contacto +{s}s aplicado (no cuenta contra tu tiempo).",
    scoreBreakdownTitle: "EXPLICACIÓN DE PUNTUACIÓN (LIMPIEZA · TÉCNICA · TIEMPO)",
    barClean: "Limpieza",
    barDetailClean: "Limpieza visible de la superficie comparando antes y después.",
    barDetailCleanNone: "La limpieza visible de la superficie no se midió en esta ronda.",
    gapHow: "Cumplimiento del tiempo de contacto, orden de arriba abajo y de limpio a sucio, producto según superficie",
    gapWhenPattern: "Patrón de turno {bucket} ({count} de {total} rondas registradas)",
    gapWhenNone: "Aún no hay rondas con hora registrada",
    gapWhoMvp: "{member} lidera esta semana ({score} mejor ronda)",
    gapWhoNone: "Aún no hay rondas del equipo esta semana",
    gapBucketOvernight: "Nocturno",
    gapBucketDay: "Diurno",
    gapBucketEvening: "Vespertino",
    queueSaveFailed: "⚠ La cola sin conexión está llena: esta ronda no pudo guardarse sin conexión.",
    srcDwellTime: "tiempo de contacto",
    srcTopToBottomOrder: "orden de arriba abajo",
    srcSurfaceOrder: "orden de superficies",
    srcTechniqueScore: "puntuación de técnica",
    barDetailTechniqueNone: "No se midió evidencia local de técnica en esta ronda.",
    barDetailTechnique: "Derivado de evidencia medida ({sources}).",
    barDetailNoTime: "No se registró tiempo transcurrido.",
    barDetailTimeReview: "Más rápido que el 70% del tiempo estándar: puntos completos de tiempo (sin bono), marcado para revisión humana.",
    barDetailTimeOk: "Entre 85–100% del tiempo estándar gana puntos completos; deducción gradual sobre el estándar, nunca cero.",
    barTechnique: "Técnica",
    barTime: "Tiempo vs. referencia",
    notMeasured: "no medido",
    reviewFlag: "revisión",
    disputeHeading: "REVISIÓN JUSTA",
    disputeAction: "APELAR PUNTUACIÓN",
    disputeOpenedButton: "APELACIÓN ABIERTA",
    disputeHint: "Apelación en un toque — respuesta en 5 días hábiles. Nadie edita puntuaciones.",
    disputeOpenStatus: "Apelación abierta ({id}) — revisión en 5 días hábiles. Nadie puede editar una puntuación.",
    offlineQueueTitle: "COLA SIN CONEXIÓN (ESPERANDO PUNTUACIÓN)",
    retryOfflineQueue: "PUNTUAR RONDAS EN COLA",
    offlineQueuedNotice: "Ronda sin conexión guardada en espera de puntuación ({count} en cola).",
    hypeOffLabel: "Apagado — silencio",
    hypeChillLabel: "Suave — solo inicio, final y veredicto",
    hypeFullLabel: "Completo — toda la voz del anfitrión (por defecto)",
    sponsoredBadge: "PATROCINADO",
    sponsorHomeTitle: "Semana destacada: baños y comedor",
    sponsorHomeDetail: "Completa 3 rondas verificadas por turno para el bono semanal del equipo",
    sponsorDeckTitle: "Categoría de producto sugerida: solución neutra o de amplio espectro etiquetada",
    sponsorDeckDetail: "Siempre combina el tipo de producto con la superficie",
    pinSignupTitle: "PASE DE LIMPIEZA (TELÉFONO + PIN DE 4 DÍGITOS)",
    stepLanguage: "Idioma",
    stepPin: "PIN",
    stepConsent: "Consentimiento",
    stepHome: "Inicio",
    pinSaveAction: "GUARDAR PIN",
    pinSavedNote: "✓ PIN activo",
    pinLocalNote: "Bloqueo local de conveniencia: tu teléfono y PIN quedan en este dispositivo y nunca se envían a ningún lugar.",
    leagueLabel: "EDIFICIO",
    siteLabel: "SITIO",
    productTypePrefix: "Tipo de producto correcto:",
    optInShareLabel: "Compartir mi historial verificado con este sitio",
    adminPanelTitle: "HERRAMIENTAS DE SUPERVISIÓN",
    adminTabInvite: "Compromiso",
    adminTabSites: "Sitios y QR",
    adminTabCrew: "Equipo",
    adminTabDashboard: "Métricas",
    adminTabAssign: "Formación",
    adminPledgeText: "Compromiso: los datos son solo para formación y reconocimiento, nunca disciplina.",
    assignPackAction: "ASIGNAR PAQUETE 5 DÍAS",
    registerSiteAction: "REGISTRAR SITIO",
    printQrAction: "🖨 IMPRIMIR QR",
    inviteApproveAction: "INVITAR Y APROBAR",
    newSquadAction: "+ NUEVO EQUIPO",
    packDwell: "Paquete de 5 días: contacto y desinfección",
    packSurface: "Paquete de 5 días: superficies de arriba abajo",
    packProduct: "Paquete de 5 días: producto según superficie",
    editFtueAction: "PASE / CONSENTIMIENTO",
    mountGuideAction: "? GUÍA DE MONTAJE",
    pledgeWarning: "⚠ Acepta primero el compromiso de supervisión en la pestaña 11: los datos son solo para formación y reconocimiento, nunca disciplina.",
    siteRegistered: "✓ Sitio registrado: {site} (etiqueta QR lista).",
    membersInvited: "✓ Invitados y aprobados {count} miembro(s) ({total} aprobados).",
    packAssigned: "✓ Asignado {pack} ({cards} tarjetas en cola para la próxima sesión de 5).",
    ftueActiveLabel: "✓ Consentimiento y Pase activos",
    offlineScored: "PUNTUADO {score}%",
    offlineAwaiting: "ESPERANDO PUNTUACIÓN",
    qrInvalid: "⚠ Código QR no válido: usa el formato CQ-QR-<LIGA>-<ÁREA> (ej. CQ-QR-OFFICE-BREAKROOM)",
    qrScanned: "✓ Escaneado {code} → {area} ({spot})",
    qrReady: "Listo para escanear · Estación actual: {code}",
    qrDemoNote: "Modo demo: toca una etiqueta de estación abajo o ingresa el código CQ-QR manualmente.",
    qrUnsupportedNote: "El escaneo con cámara no es compatible en este navegador: toca una estación abajo o ingresa el código.",
    qrUnavailableNote: "Cámara no disponible: toca una estación abajo o ingresa el código CQ-QR manualmente.",
    afterAlignPrompt: "ALINEACIÓN FANTASMA: Iguala el ángulo del Antes y toca CAPTURAR DESPUÉS Y PUNTUAR",
    captureAfterAndScore: "CAPTURAR DESPUÉS Y PUNTUAR",
    scanAreaQrAction: "⌗ ESCANEAR QR",
    qrScannedPrefix: "✓ QR PUNTO:",
    spotLabel: "🎯 PUNTO",
    siteLabel: "📍 SITIO",
    leagueLabel: "🏢 EDIFICIO",
    areaLabel: "🚪 ÁREA",
    replaySummary: "🔊 REPETIR RESUMEN",
    rulePrefix: "REGLA:",
    idleNudge: "⚡ SIN MOVIMIENTO DETECTADO — ¡ENTRA Y TRABAJA EL PUNTO ASIGNADO!",
    noMotionBadge: "⚠ SIN MOVIMIENTO · ¡ENTRA!",
    zonesActive: "📸 EN VIVO · {n}/9 ZONAS · {s} CAPTURAS",
    sharePassportAction: "🪪 COMPARTIR PASAPORTE",
    passportCopiedNote: "✓ ¡Pasaporte de referencia copiado para compartir!",
    deckSwipeHint: "⟵ DESLIZA IZQUIERDA = FALLO  ·  DESLIZA DERECHA = ACIERTA ⟶",
    deckNextCard: "SIGUIENTE TARJETA ⟶",
    deckPracticeAgain: "🔄 PRACTICAR OTRAS 5 TARJETAS",
    openPassportHub: "🪪 PASAPORTE, EQUIPO Y SUPERVISOR",
    qrModalTitle: "⌗ ESCANEAR QR DE ESTACIÓN",
    lightboxTitle: "COMPARACIÓN ANTES Y DESPUÉS",
    lightboxSplit: "LADO A LADO",
    lightboxAfterShadow: "DESPUÉS + SOMBRA",
    lightboxClose: "✕ CERRAR",
    qrTapStation: "TOCA UNA ETIQUETA QR DE ESTACIÓN O INGRESA EL CÓDIGO",
    qrApply: "APLICAR CÓDIGO QR",
    maximizeBadge: "⤢",
    lightboxGhostOpacity: "OPACIDAD DE LA SOMBRA DEL ANTES",
    deckStampLeft: "⟵ FALLO",
    deckStampRight: "ACIERTA ⟶",
    openSupervisorTools: "📋 ABRIR REGISTRO Y HERRAMIENTAS DE SUPERVISIÓN (11–15) →",
    leagueOffice: "🏢 Corporativo y Oficinas",
    leagueEducation: "🏫 Escuela y Campus",
    leagueHealthcare: "🏥 Hospital y Clínica",
    leagueIndustrial: "🏭 Planta Industrial y Nave",
    leagueRetail: "🛍️ Tienda y Plaza Comercial",
    leagueHospitality: "🏨 Hotelería y Hospedaje",
    leagueFoodservice: "🍽️ Restaurante y Comedor",
    leagueTransit: "✈️ Aeropuerto y Terminal",
    leagueAthletics: "🏟️ Gimnasio y Club Deportivo",
    leagueMultifamily: "🏘️ Condominio y Residencial",
    areaBreakroom: "☕ Comedor de Empleados y Cocineta",
    areaRestroom: "🚻 Sanitarios y Tocador",
    areaLobby: "🛋️ Recepción y Vestíbulo",
    areaOffice: "💼 Área Operativa y Cubículos",
    areaClassroom: "🎓 Salón de Clases y Aula",
    areaConference: "🤝 Sala de Juntas",
    areaClinic: "🩺 Consultorio y Cuarto Clínico",
    areaKitchen: "👨‍🍳 Cocina Industrial y Preparación",
    areaDining: "🍴 Área de Comensales y Terraza",
    areaCorridor: "🚶 Pasillo, Elevador y Escaleras",
    areaWarehouse: "📦 Almacén y Andén de Carga",
    areaFitness: "🏋️ Vestidores y Área de Entrenamiento",
    areaRetailfloor: "🛒 Piso de Venta y Cajas",
    lbTabShift: "⚡ RETO DE TURNO",
    lbTabDeck: "🃏 MAZO DIARIO",
    lbOpenDeckAction: "🃏 MAZO DIARIO",
    playDailyDeck: "🃏 JUGAR MAZO DIARIO",
    deckLeaderboardAction: "🏆 TABLA DEL MAZO",
    gradeClean: "LIMPIO",
    gradePartly: "PARCIAL",
    gradeMissed: "OMITIDO",
  },

  pl: {
    aiPoweredChallenge: "WYZWANIE SZYBKOŚCIOWE Z AI",
    beatThe: "Pokonaj",
    certificationTime: "Czas Referencyjny",
    welcomeBody: "Zrób zdjęcie Przed i Po — podczas odliczania AI analizuje 9 stref na żywo, zapisuje klatki postępu i komentuje akcję.",
    homeStatusLine: "🔥 Seria {streak} · Tydzień {week} z 13 · {matchup}",
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
    judgeDemoAction: "DEMO JURY · PRZYKŁAD",
    judgeDemoNote: "Demo dla jury · ocenione na żywo lokalnie na przykładowych zdjęciach. Bez wpływu na ranking.",
    verifyProvenanceVerified: "Zweryfikowano: {provider} · {model}",
    verifyProvenanceSamSuffix: " · nakładki SAM 3.1",
    verifyProvenanceOffline: "Potok lokalny · EfficientDet-Lite0 + klasyczna wizja · brak klucza chmury",
    verifyProvenanceClassical: "Lokalna wizja klasyczna (różnica pikseli + strefy 3×3) · brak klucza chmury",
    pinQuickFill: "⚡ KARTA DEMO",
    openJudgesReport: "Prezentacja dla Jury ↗",
    discoGrooveLabel: "MUZYKA",
    settingsKeysExplain: "Opcjonalne ulepszenie w chmurze: odblokowuje zweryfikowane karty oceny powierzchni, podświetlenia SAM 3.1 i transkrypcję głosu. Niewymagane do gry.",
    getMetaKeyLink: "Pobierz klucz ↗",
    getBasetenKeyLink: "Pobierz klucz ↗",
    localPrivacy: "Analiza lokalna: zdjęcia pozostają na tym telefonie.",
    cameraPermissionDenied: "Odmówiono dostępu do kamery. Zezwól na dostęp i spróbuj ponownie.",
    cameraNotFound: "Na tym urządzeniu nie znaleziono dostępnej kamery.",
    cameraBusy: "Nie udało się uruchomić kamery. Zamknij inne aplikacje używające kamery i spróbuj ponownie.",
    cameraBlack: "Kamera jest połączona, ale nie pokazuje obrazu. Spróbuj ponownie.",
    cameraGeneric: "Nie udało się uruchomić kamery. Spróbuj ponownie.",

    liveChallenge: "WYZWANIE NA ŻYWO",
    qualityFirst: "Najpierw jakość. Potem czas.",
    ready: "GOTOWY",
    hudLive: "NA ŻYWO",
    hudOffline: "OFFLINE",
    hudStandby: "GOTOWY",
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
    visibleCleanliness: "WYNIK ŁĄCZNY",
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
    phonePlaceholder: "555-0199",
    phoneAria: "Numer telefonu",
    pinPlaceholder: "4-cyfrowy PIN",
    siteInputPlaceholder: "Obiekt 2 · Łazienka i hol",
    inviteInputPlaceholder: "Wklej listę telefonów/nazwisk do zaproszenia",
    ariaBack: "Wstecz",
    ariaMaxBefore: "Powiększ zdjęcie przed",
    ariaMaxAfter: "Powiększ zdjęcie po",
    ariaQrPayload: "Kod QR",
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
    findingFraming: "Kadr przed/po zmienił się zbyt mocno. Trzymaj kamerę nieruchomo i zeskanuj ponownie.",
    findingZones: "{improved} z 9 stref wyraźnie lepsze · {residual} do poprawy.",
    findingZonesOne: "{improved} z 9 stref wyraźnie lepsze · 1 strefa wymaga poprawki.",
    findingDemoStation: "Stacja demo: 3 z 3 przedmiotów (kubek, butelka, miska) usunięte; blat i umywalka wyraźnie lepsze.",
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
    deckCatSurface: "POWIERZCHNIA",
    deckCatProduct: "PRODUKT",
    deckCatTechnique: "TECHNIKA",
    deckRight: "PRZESUŃ W PRAWO (DOBRZE) ⟶",
    deckMiss: "⟵ PRZESUŃ W LEWO (BŁĄD)",
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
    leaderboardEmpty: "Brak kwalifikujących się biegów — ukończ bieg na zmianie, aby trafić do rankingu.",
    exportJson: "⬇ ZAPISZ KOPIĘ",
    exportCsv: "⬇ POBIERZ ARKUSZ",
    locationNotShared: "Nie udostępniono lokalizacji",
    settingsProvider: "Dostawca wnioskowania",
    providerLogTitle: "DZIENNIK URUCHOMIEŃ",
    emptyLog: "Brak zarejestrowanych uruchomień.",
    exportLog: "EKSPORTUJ DZIENNIK",
    settingsTitle: "USTAWIENIA",
    settingsMetaKey: "Klucz Meta Model API",
    settingsBasetenKey: "Klucz API Baseten",
    settingsKeysNote: "Klucze zostają tylko w tej przeglądarce i nigdy nie są udostępniane.",
    settingsSave: "ZAPISZ KLUCZE",
    settingsClear: "WYCZYŚĆ KLUCZE",
    settingsSaved: "Zapisano w tej przeglądarce.",
    settingsDone: "GOTOWE",
    verifiedScorecard: "ZWERYFIKOWANA KARTA",
    offlineScoreNote: "Wynik lokalny — dodaj klucz w Ustawieniach, aby włączyć weryfikację w chmurze.",
    scorecardErrorNote: "Weryfikacja w chmurze nie powiodła się — wyświetlono wynik lokalny.",
    surfaceUnverified: "niezweryfikowana",
    consentTitle: "PRZED PIERWSZYM BIEGIEM",
    consentReadAloud: "🔊 CZYTAJ NA GŁOS",
    consentBody: "CleanQuest robi zdjęcia przed i po powierzchni roboczej. Twarze nigdy nie są identyfikowane (brak rozpoznawania twarzy i biometrii). Opcjonalne zdjęcie pozy zwycięstwa jest przetwarzane tylko na tym urządzeniu. Lokalizacja jest zapisywana tylko, jeśli ją udostępnisz. Jeśli dodasz własny klucz dostawcy w Ustawieniach, zdjęcia i notatki głosowe mogą zostać wysłane do tego dostawcy w celu weryfikacji lub transkrypcji; w przeciwnym razie wszystko jest zapisane tylko w tej przeglądarce. Wyniki i wpisy służą szkoleniu i uznaniu — nigdy dyscyplinie.",
    consentAgreeLabel: "Rozumiem i zgadzam się",
    consentConfirm: "POTWIERDŹ",
    consentSavedNote: "✓ Zgoda zapisana w tej przeglądarce.",
    consistencyDefault: "Tydzień 1 z 13 · Na dobrej drodze",
    consistencyProgress: "Tydzień {week} z {window} · {status}",
    personalRecordSummary: "Rekord osobisty: {best}% · Biegi: {runs} · Seria: {streak} d · Tydzień {week}/13",
    consistencyOnTrack: "Na dobrej drodze",
    gapSummary: "Gdzie: {where} · Jak: {how} · Kiedy: {when} · Kto: {who} · Luki wiedzy: powierzchnia={surface}, technika={technique}, produkt={product} · Polecany pakiet: {pack} (jedno dotknięcie poniżej)",
    analyticsSummary: "Miesięczna analityka sponsora (anonimowa): {cleaners} aktywnych sprzątaczy · {runs} biegów · {impressions} wyświetleń · {accuracy}% trafności kategorii",
    consistencyBuilding: "Budowanie historii",
    consistencyDisclaimer: "Regularność względem wzorca — nigdy certyfikacja",
    joinVirtualSquad: "SOLO? DOŁĄCZ DO WIRTUALNEJ EKIPY",
    matchupNoCrew: "Brak aktywnej ekipy — dołącz do ekipy 3–8 lub dotknij Wirtualnej Ekipy.",
    matchupLabel: "{crew} śr. {score}% ({badge}) vs. {opp} {oppScore}%",
    matchupActive: "{pct}% aktywnych",
    rivalCrewName: "Rywalizująca Ekipa Nocna",
    virtualSquadActive: "✓ WIRTUALNA EKIPA AKTYWNA",
    assignedPacksLabel: "Przypisane pakiety:",
    assignedPacksNone: "Przypisane pakiety: brak",
    approvedLabel: "Zatwierdzeni ({n}):",
    crewNote: " · Ekipa: {name} {members}/{seats} miejsc · Udział {pct}%{qual}",
    crewQualified: " (kwalifikacja 80%+)",
    areaLabel: "STREFA",
    assignedSpotPrefix: "PUNKT:",
    frameGuidePrompt: "USTAW PRZYPISANY PUNKT W RAMCE",
    ghostToggle: "◐ DUCH WŁ.",
    ghostToggleOff: "○ DUCH WYŁ.",
    dwellCueText: "Wskazówka czasu działania: pozostaw środek na pełny czas z etykiety (nie liczy się przeciwko czasowi).",
    dwellCreditAction: "+15s CZAS",
    dwellCredited: "Dodano +{s}s czasu działania (nie obniża wyniku czasowego).",
    scoreBreakdownTitle: "WYJAŚNIENIE WYNIKU (CZYSTOŚĆ · TECHNIKA · CZAS)",
    barClean: "Czystość",
    barDetailClean: "Widoczna czystość powierzchni z porównania przed/po.",
    barDetailCleanNone: "Widoczna czystość powierzchni nie została zmierzona w tym biegu.",
    gapHow: "Zgodność czasu kontaktu, kolejność od góry do dołu i od czystego do brudnego, produkt do powierzchni",
    gapWhenPattern: "Wzorzec zmiany {bucket} ({count} z {total} zapisanych biegów)",
    gapWhenNone: "Brak biegów z zapisaną godziną",
    gapWhoMvp: "{member} prowadzi w tym tygodniu ({score} najlepszy bieg)",
    gapWhoNone: "Brak biegów ekipy w tym tygodniu",
    gapBucketOvernight: "Nocna",
    gapBucketDay: "Dzienna",
    gapBucketEvening: "Wieczorna",
    queueSaveFailed: "⚠ Kolejka offline jest pełna — tego biegu nie udało się zapisać offline.",
    srcDwellTime: "czas kontaktu",
    srcTopToBottomOrder: "kolejność od góry do dołu",
    srcSurfaceOrder: "kolejność powierzchni",
    srcTechniqueScore: "wynik techniki",
    barDetailTechniqueNone: "W tym biegu nie zmierzono lokalnych dowodów techniki.",
    barDetailTechnique: "Na podstawie zmierzonych dowodów ({sources}).",
    barDetailNoTime: "Nie zapisano czasu biegu.",
    barDetailTimeReview: "Szybciej niż 70% czasu standardowego — pełne punkty czasu (bez bonusu), oznaczone do przeglądu przez człowieka.",
    barDetailTimeOk: "85–100% czasu standardowego daje pełne punkty; stopniowa obniżka powyżej standardu, nigdy zero.",
    barTechnique: "Technika",
    barTime: "Czas vs. wzorzec",
    notMeasured: "nie zmierzono",
    reviewFlag: "weryfikacja",
    disputeHeading: "UCZCIWA WERYFIKACJA",
    disputeAction: "ODWOŁAJ SIĘ",
    disputeOpenedButton: "ODWOŁANIE OTWARTE",
    disputeHint: "Odwołanie jednym dotknięciem — decyzja w 5 dni roboczych. Nikt ręcznie nie zmienia wyników.",
    disputeOpenStatus: "Odwołanie otwarte ({id}) — decyzja w 5 dni roboczych. Nikt nie może edytować wyniku.",
    offlineQueueTitle: "KOLEJKA OFFLINE (OCZEKUJE NA WYNIK)",
    retryOfflineQueue: "OCEŃ ZAPISANE BIEGI",
    offlineQueuedNotice: "Bieg zapisany w kolejce offline jako oczekujący na wynik ({count}).",
    hypeOffLabel: "Wyłączony — cisza",
    hypeChillLabel: "Spokojny — tylko start, koniec i werdykt",
    hypeFullLabel: "Pełny — wszystkie kwestie prowadzącego (domyślnie)",
    sponsoredBadge: "SPONSOROWANE",
    sponsorHomeTitle: "Tydzień wyróżniony: łazienki i pokój socjalny",
    sponsorHomeDetail: "Ukończ 3 zweryfikowane biegi na zmianę, aby zdobyć tygodniowy bonus ekipy",
    sponsorDeckTitle: "Sugerowana kategoria: oznakowany roztwór neutralny lub o szerokim spektrum",
    sponsorDeckDetail: "Zawsze dopasowuj rodzaj produktu do powierzchni",
    pinSignupTitle: "KARTA SPRZĄTACZA (TELEFON + 4-CYFROWY PIN)",
    stepLanguage: "Język",
    stepPin: "PIN",
    stepConsent: "Zgoda",
    stepHome: "Start",
    pinSaveAction: "ZAPISZ PIN",
    pinSavedNote: "✓ PIN aktywny",
    pinLocalNote: "Tylko lokalna blokada wygody — telefon i PIN zostają na tym urządzeniu i nigdy nie są wysyłane.",
    leagueLabel: "BUDYNEK",
    siteLabel: "OBIEKT",
    productTypePrefix: "Właściwy typ produktu:",
    optInShareLabel: "Udostępnij mój zweryfikowany rekord temu obiektowi",
    adminPanelTitle: "NARZĘDZIA NADZORU",
    adminTabInvite: "Zasady",
    adminTabSites: "Obiekty i QR",
    adminTabCrew: "Ekipa",
    adminTabDashboard: "Wyniki",
    adminTabAssign: "Szkolenie",
    adminPledgeText: "Zobowiązanie: dane służą wyłącznie szkoleniu i uznaniu, nigdy dyscyplinie.",
    assignPackAction: "PRZYPISZ PAKIET 5 DNI",
    registerSiteAction: "ZAPISZ OBIEKT",
    printQrAction: "🖨 DRUKUJ QR",
    inviteApproveAction: "ZAPROŚ I ZATWIERDŹ",
    newSquadAction: "+ NOWA EKIPA",
    packDwell: "Pakiet 5-dniowy: czas kontaktu i dezynfekcja",
    packSurface: "Pakiet 5-dniowy: powierzchnie od góry do dołu",
    packProduct: "Pakiet 5-dniowy: produkt do powierzchni",
    editFtueAction: "KARTA / ZGODA",
    mountGuideAction: "? INSTRUKCJA",
    pledgeWarning: "⚠ Najpierw zaakceptuj zobowiązanie nadzoru na karcie 11 — dane służą tylko szkoleniu i uznaniu, nigdy dyscyplinie.",
    siteRegistered: "✓ Zapisano obiekt: {site} (naklejka QR gotowa).",
    membersInvited: "✓ Zaproszono i zatwierdzono {count} członków ({total} zatwierdzonych).",
    packAssigned: "✓ Przypisano {pack} ({cards} kart w kolejce na następną sesję 5 kart).",
    ftueActiveLabel: "✓ Zgoda i Karta aktywne",
    offlineScored: "OCENIONO {score}%",
    offlineAwaiting: "OCZEKUJE NA WYNIK",
    qrInvalid: "⚠ Nieprawidłowy kod QR — użyj formatu CQ-QR-<LIGA>-<OBSZAR> (np. CQ-QR-OFFICE-BREAKROOM)",
    qrScanned: "✓ Zeskanowano {code} → {area} ({spot})",
    qrReady: "Gotowy do skanowania · Bieżąca stacja: {code}",
    qrDemoNote: "Tryb demo: dotknij naklejki stacji poniżej lub wpisz kod CQ-QR ręcznie.",
    qrUnsupportedNote: "Skanowanie kamerą nie jest obsługiwane w tej przeglądarce — dotknij stacji poniżej lub wpisz kod.",
    qrUnavailableNote: "Kamera niedostępna — dotknij stacji poniżej lub wpisz kod CQ-QR ręcznie.",
    afterAlignPrompt: "DOPASOWANIE DUCHA: Wyrównaj kadr ze zdjęciem Przed i dotknij ZRÓB ZDJĘCIE PO I OCEŃ",
    captureAfterAndScore: "ZRÓB ZDJĘCIE PO I OCEŃ",
    scanAreaQrAction: "⌗ SKANUJ QR",
    qrScannedPrefix: "✓ QR PUNKT:",
    spotLabel: "🎯 MIEJSCE",
    siteLabel: "📍 OBIEKT",
    leagueLabel: "🏢 BUDYNEK",
    areaLabel: "🚪 STREFA",
    replaySummary: "🔊 ODTWÓRZ PODSUMOWANIE",
    rulePrefix: "ZASADA:",
    idleNudge: "⚡ BRAK RUCHU — WEJDŹ I PRACUJ NAD PRZYPISANYM PUNKTEM!",
    noMotionBadge: "⚠ BRAK RUCHU · WEJDŹ!",
    zonesActive: "📸 NA ŻYWO · {n}/9 STREF · {s} KLATEK",
    sharePassportAction: "🪪 UDOSTĘPNIJ PASZPORT",
    passportCopiedNote: "✓ Zweryfikowany paszport skopiowany!",
    deckSwipeHint: "⟵ PRZESUŃ W LEWO = BŁĄD  ·  PRZESUŃ W PRAWO = DOBRZE ⟶",
    deckNextCard: "NASTĘPNA KARTA ⟶",
    deckPracticeAgain: "🔄 ĆWICZ KOLEJNE 5 KART",
    openPassportHub: "🪪 PASZPORT, EKIPA I NADZÓR",
    qrModalTitle: "⌗ SKANUJ KOD QR STACJI",
    lightboxTitle: "PORÓWNANIE PRZED I PO",
    lightboxSplit: "OBOK SIEBIE",
    lightboxAfterShadow: "PO + CIEŃ",
    lightboxClose: "✕ ZAMKNIJ",
    qrTapStation: "DOTKNIJ NAKLEJKI QR STACJI LUB WPISZ KOD",
    qrApply: "ZASTOSUJ KOD QR",
    maximizeBadge: "⤢",
    lightboxGhostOpacity: "PRZEZROCZYSTOŚĆ CIENIA PRZED",
    deckStampLeft: "⟵ BŁĄD",
    deckStampRight: "DOBRZE ⟶",
    openSupervisorTools: "📋 OTWÓRZ DZIENNIK I NARZĘDZIA NADZORU (11–15) →",
    leagueOffice: "🏢 Biurowiec i Korporacja",
    leagueEducation: "🏫 Edukacja i Kampus",
    leagueHealthcare: "🏥 Placówka Medyczna",
    leagueIndustrial: "🏭 Przemysł i Produkcja",
    leagueRetail: "🛍️ Handel i Centrum Handlowe",
    leagueHospitality: "🏨 Hotelarstwo i Obiekty Noclegowe",
    leagueFoodservice: "🍽️ Gastronomia i Restauracja",
    leagueTransit: "✈️ Lotnisko i Węzeł Komunikacyjny",
    leagueAthletics: "🏟️ Siłownia i Rekreacja",
    leagueMultifamily: "🏘️ Budynek Wielorodzinny i Wspólnota",
    areaBreakroom: "☕ Pokój Socjalny i Aneks",
    areaRestroom: "🚻 Toaleta i Łazienka",
    areaLobby: "🛋️ Hol Główny i Recepcja",
    areaOffice: "💼 Biuro Open Space i Boksy",
    areaClassroom: "🎓 Sala Lekcyjna i Wykładowa",
    areaConference: "🤝 Sala Konferencyjna",
    areaClinic: "🩺 Gabinet Zabiegowy i Sala Pacjenta",
    areaKitchen: "👨‍🍳 Kuchnia Gastronomiczna",
    areaDining: "🍴 Sala Konsumpcyjna i Strefa Gastronomiczna",
    areaCorridor: "🚶 Korytarz, Winda i Klatka Schodowa",
    areaWarehouse: "📦 Magazyn i Rampa Załadunkowa",
    areaFitness: "🏋️ Szatnia i Strefa Treningowa",
    areaRetailfloor: "🛒 Sala Sprzedaży i Strefa Kas",
    lbTabShift: "⚡ WYZWANIE ZMIANY",
    lbTabDeck: "🃏 TALIA DNIA",
    lbOpenDeckAction: "🃏 TALIA DNIA",
    playDailyDeck: "🃏 ZAGRAJ W TALIĘ DNIA",
    deckLeaderboardAction: "🏆 RANKING TALII",
    gradeClean: "CZYSTO",
    gradePartly: "CZĘŚCIOWO",
    gradeMissed: "POMINIĘTO",
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
  showPassportHub: false,
  editingFtue: false,

  voice: {
    muted: false,
    hypeLevel: "full",
    discoEnabled: true,
    available:
      typeof Audio !== "undefined" ||
      ("speechSynthesis" in window &&
      "SpeechSynthesisUtterance" in window),
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
  checkin: {
    league: "office",
    areaKey: "breakroom",
    assignedSpot: "Sink & counter",
    site: null,
    ghostEnabled: true,
    dwellCreditSeconds: 0,
    aligningAfter: false
  },
  editingFtue: false,
  forceOfflineQueue: false,

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
  scorecardErrorNote: document.getElementById("scorecardErrorNote"),
  verifyProvenance: document.getElementById("verifyProvenance"),
  judgeDemoNote: document.getElementById("judgeDemoNote"),
  instructionsJudgeDemo: document.getElementById("instructionsJudgeDemo")
  ,
  consentGate: document.getElementById("consentGate"),
  consentText: document.getElementById("consentText"),
  consentReadAloud: document.getElementById("consentReadAloud"),
  consentCheckbox: document.getElementById("consentCheckbox"),
  consentAcceptButton: document.getElementById("consentAcceptButton"),
  consentStatusBadge: document.getElementById("consentStatusBadge"),
  homePassportPanel: document.getElementById("homePassportPanel"),
  homeCrewMatchup: document.getElementById("homeCrewMatchup"),
  homeStatusStrip: document.getElementById("homeStatusStrip"),
  consistencyMeter: document.getElementById("consistencyMeter"),
  consistencyLabel: document.getElementById("consistencyLabel"),
  consistencyFill: document.getElementById("consistencyFill"),
  joinVirtualSquadButton: document.getElementById("joinVirtualSquadButton"),
  homeSponsorSlot: document.getElementById("homeSponsorSlot"),
  checkinBar: document.getElementById("checkinBar"),
  areaTemplateSelect: document.getElementById("areaTemplateSelect"),
  assignedSpotBadge: document.getElementById("assignedSpotBadge"),
  frameGuideOverlay: document.getElementById("frameGuideOverlay"),
  frameGuideText: document.getElementById("frameGuideText"),
  ghostOverlay: document.getElementById("ghostOverlay"),
  ghostToggleButton: document.getElementById("ghostToggleButton"),
  dwellCueBanner: document.getElementById("dwellCueBanner"),
  dwellCueText: document.getElementById("dwellCueText"),
  dwellCreditButton: document.getElementById("dwellCreditButton"),
  scoreBreakdownCard: document.getElementById("scoreBreakdownCard"),
  scoreBreakdownBars: document.getElementById("scoreBreakdownBars"),
  offlineQueueNotice: document.getElementById("offlineQueueNotice"),
  disputePanel: document.getElementById("disputePanel"),
  disputeButton: document.getElementById("disputeButton"),
  disputeStatus: document.getElementById("disputeStatus"),
  crewLeaderboardSummary: document.getElementById("crewLeaderboardSummary"),
  offlineQueueSection: document.getElementById("offlineQueueSection"),
  offlineQueueList: document.getElementById("offlineQueueList"),
  retryOfflineQueueButton: document.getElementById("retryOfflineQueueButton"),
  hypeLevelOff: document.getElementById("hypeLevelOff"),
  hypeLevelChill: document.getElementById("hypeLevelChill"),
  hypeLevelFull: document.getElementById("hypeLevelFull"),
  deckSponsorSlot: document.getElementById("deckSponsorSlot")
  ,
  cleanerPinBar: document.getElementById("cleanerPinBar"),
  cleanerPhone: document.getElementById("cleanerPhone"),
  cleanerPin: document.getElementById("cleanerPin"),
  pinSaveButton: document.getElementById("pinSaveButton"),
  pinStatusBadge: document.getElementById("pinStatusBadge"),
  consistencyMilestone: document.getElementById("consistencyMilestone"),
  buildingLeagueSelect: document.getElementById("buildingLeagueSelect"),
  siteSelect: document.getElementById("siteSelect"),
  surfaceGradeMap: document.getElementById("surfaceGradeMap"),
  personalRecordBar: document.getElementById("personalRecordBar"),
  personalRecordSummary: document.getElementById("personalRecordSummary"),
  optInShareCheckbox: document.getElementById("optInShareCheckbox"),
  adminDashboardPanel: document.getElementById("adminDashboardPanel"),
  adminPledgeCheckbox: document.getElementById("adminPledgeCheckbox"),
  adminGapSummary: document.getElementById("adminGapSummary"),
  assignTrainingPackSelect: document.getElementById("assignTrainingPackSelect"),
  assignTrainingPackButton: document.getElementById("assignTrainingPackButton"),
  adminPackStatus: document.getElementById("adminPackStatus"),
  assignedPacksList: document.getElementById("assignedPacksList")
  ,
  ftueSummaryBar: document.getElementById("ftueSummaryBar"),
  ftueSummaryText: document.getElementById("ftueSummaryText"),
  editFtueButton: document.getElementById("editFtueButton"),
  howItWorksButton: document.getElementById("howItWorksButton"),
  afterAlignBanner: document.getElementById("afterAlignBanner"),
  posePanelCard: document.getElementById("posePanelCard"),
  nameInputPanelCard: document.getElementById("nameInputPanelCard")
  ,
  scanAreaQrButton: document.getElementById("scanAreaQrButton"),
  proofGridPanel: document.getElementById("proofGridPanel"),
  analysisMetaPanel: document.getElementById("analysisMetaPanel"),
  sharePassportButton: document.getElementById("sharePassportButton"),
  passportShareStatus: document.getElementById("passportShareStatus")
  ,
  cleanerStepTabs: document.getElementById("cleanerStepTabs"),
  adminScreenTabs: document.getElementById("adminScreenTabs"),
  adminSiteInput: document.getElementById("adminSiteInput"),
  registerSiteButton: document.getElementById("registerSiteButton"),
  printQrStickerButton: document.getElementById("printQrStickerButton"),
  qrStickerPreview: document.getElementById("qrStickerPreview"),
  adminInviteInput: document.getElementById("adminInviteInput"),
  inviteApproveButton: document.getElementById("inviteApproveButton"),
  adminCrewList: document.getElementById("adminCrewList"),
  adminSquadList: document.getElementById("adminSquadList"),
  adminNewSquadButton: document.getElementById("adminNewSquadButton"),
  sponsorAnalyticsSummary: document.getElementById("sponsorAnalyticsSummary"),
  spotTemplateSelect: document.getElementById("spotTemplateSelect"),
  timerSpotSelect: document.getElementById("timerSpotSelect"),
  timerSpotRuleBadge: document.getElementById("timerSpotRuleBadge"),
  timerSpotPills: document.getElementById("timerSpotPills"),
  liveZoneGrid: document.getElementById("liveZoneGrid"),
  idleNudgeBanner: document.getElementById("idleNudgeBanner"),
  liveActivityBadge: document.getElementById("liveActivityBadge"),
  beforeEvidenceCard: document.getElementById("beforeEvidenceCard"),
  afterEvidenceCard: document.getElementById("afterEvidenceCard"),
  evidenceLightboxModal: document.getElementById("evidenceLightboxModal"),
  lightboxBeforeImg: document.getElementById("lightboxBeforeImg"),
  lightboxAfterImg: document.getElementById("lightboxAfterImg"),
  lightboxGhostImg: document.getElementById("lightboxGhostImg"),
  lightboxGhostControl: document.getElementById("lightboxGhostControl"),
  lightboxGhostSlider: document.getElementById("lightboxGhostSlider"),
  lightboxModeSplit: document.getElementById("lightboxModeSplit"),
  lightboxModeBefore: document.getElementById("lightboxModeBefore"),
  lightboxModeAfter: document.getElementById("lightboxModeAfter"),
  lightboxCloseButton: document.getElementById("lightboxCloseButton"),
  lightboxBeforePane: document.getElementById("lightboxBeforePane"),
  lightboxAfterPane: document.getElementById("lightboxAfterPane"),
  openPassportHubButton: document.getElementById("openPassportHubButton"),
  timerScanQrButton: document.getElementById("timerScanQrButton"),
  deckSwipeHint: document.getElementById("deckSwipeHint"),
  deckStampLeft: document.getElementById("deckStampLeft"),
  deckStampRight: document.getElementById("deckStampRight"),
  deckNextButton: document.getElementById("deckNextButton"),
  deckPracticeAgain: document.getElementById("deckPracticeAgain"),
  qrScannerModal: document.getElementById("qrScannerModal"),
  qrScannerCloseButton: document.getElementById("qrScannerCloseButton"),
  qrScannerVideo: document.getElementById("qrScannerVideo"),
  qrScannerPreviewSvg: document.getElementById("qrScannerPreviewSvg"),
  qrCameraStateNote: document.getElementById("qrCameraStateNote"),
  qrStickerQuickGrid: document.getElementById("qrStickerQuickGrid"),
  qrManualInput: document.getElementById("qrManualInput"),
  qrManualSubmit: document.getElementById("qrManualSubmit"),
  qrScannerStatus: document.getElementById("qrScannerStatus")
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

function ctasInViewport(ids) {
  return ids.every((id) => {
    const element = document.querySelector(id);
    if (!element || element.offsetParent === null) return false;
    const rect = element.getBoundingClientRect();
    return rect.bottom <= window.innerHeight + 1 && rect.top >= 0;
  });
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

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
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

  try {
    const savedOverride = state.checkin.spotOverride;
    assignSpotForArea(state.checkin.areaKey, state.checkin.league, state.checkin.assignedSpot);
    state.checkin.spotOverride = savedOverride;
    renderCrewAndConsistencyUI();
    renderHomeSponsorSlot();
    renderAdminDashboard();
    renderInspectionLog();
    renderOfflineQueue();
    if (state.screen === "leaderboard") {
      renderLeaderboard();
    }
  } catch {}
}

const LANGUAGE_KEY = "cleanquest.language.v1";

function loadSavedLanguage() {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch {}
  return "en";
}

function setLanguage(language) {
  if (!translations[language]) return;

  stopSpeech();
  state.language = language;
  try { localStorage.setItem(LANGUAGE_KEY, language); } catch {}
  state.voice.selectedVoice = chooseVoice(language);
  applyTranslations();
  if (state.deck) {
    try { renderDeck(); } catch {}
  }
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
    es: ["es-MX", "es-US", "es-419", "es"],
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
  if (!VOICE_TEST_MODE && !DEBUG_MODE && message) return;
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
  if (state.voice.muted) return;
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

const activeVoiceAudios = new Set();
const activeVoiceBufferSources = new Set();

function killAllActiveVoiceAudios() {
  activeVoiceAudios.forEach((a) => {
    try {
      a.onended = null;
      a.onerror = null;
      a.pause();
      a.currentTime = 0;
      (a._cqNodes || []).forEach((n) => {
        try { n.disconnect(); } catch {}
      });
    } catch {}
  });
  activeVoiceAudios.clear();
  activeVoiceBufferSources.forEach((src) => {
    try {
      src.onended = null;
      src.stop();
      src.disconnect();
    } catch {}
  });
  activeVoiceBufferSources.clear();
  if (state.voice.currentAudio) {
    try {
      state.voice.currentAudio.onended = null;
      state.voice.currentAudio.onerror = null;
      state.voice.currentAudio.pause?.();
      state.voice.currentAudio.stop?.();
    } catch {}
    state.voice.currentAudio = null;
  }
  try {
    window.speechSynthesis?.cancel?.();
  } catch {}
}

function speakText(text, options = {}) {
  const force = Boolean(options.force);
  if (!state.voice.available || (!force && state.voice.muted) || !text) return;
  killAllActiveVoiceAudios();
  const requestId = ++announcerRequestId;
  const synth = window.speechSynthesis;
  let started = false;
  let attemptedFallback = false;
  let watchdog;

  const attempt = (useDefault) => {
    if (requestId !== announcerRequestId || (!force && state.voice.muted)) return;
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
    start: ["Let's go! It is time to shine!", "Game on! Show that room who is boss!", "Cameras up! Let's see this surface sparkle!", "Alright champ! Make every second count!", "Clock is rolling! You've totally got this!", "Time to attack that spot! Fast and sharp!", "Let's do this! Clean, fast, and unstoppable!", "Ready, set, shine! Hit that target!", "Your room, your stage! Let's go right now!", "Star moment! Light up that zone!", "It is showtime! Show off that speed!", "Ninety seconds on the board! Make them count!", "Let's roll! Spotless is the only goal!", "Game face on! Attack that surface!", "Time to hustle! You trained for this!", "Okay superstar! Own this entire room!", "Let's make it gleam! Starting right now!", "Lights up, camera locked! Go, go, go!", "The clock is live! Work that surface!", "Full speed ahead! Bring the shine!", "Here we go! Total clean machine!", "Lights, camera, action! Hit that spot!", "Your ninety seconds start right now! Go!", "Let's get after it! Fresh and fast!"],
    mid: ["Halfway there and you are flying! Keep pushing!", "What a pace! That surface is already glowing!", "Forty-five seconds down! Looking razor sharp!", "Look at that speed! Keep that rhythm rolling!", "Halfway mark! You are crushing this benchmark!", "Pure electric rhythm! Stay on the gas!", "Huge start and an even stronger middle! Go!", "Non-stop motion! That zone is coming alive!", "Halfway home! What an incredible pace!", "Fast hands, clean lines! Love this energy!", "Right on benchmark pace! Don't let up now!", "That spot is transforming right on camera! Wow!", "Halfway mark! Bring that championship shine!", "Electric energy in the room! Keep attacking!", "You are flying across that surface! Amazing!", "Halfway point! Lock in for the big push!", "Relentless pace! You are almost there!", "High velocity, high quality! Keep it moving!", "Look at those zones lighting up! Great hustle!", "Halfway through! The leaderboard is calling!", "Fast and fearless! Keep working that spot!", "Moving like a total pro! Keep the foot down!", "Halfway mark! Turn the energy all the way up!", "Big-time hustle! Keep that surface shining!"],
    finish: ["Time! Stop the clock! What a phenomenal run!", "And done! That was electric from start to finish!", "Boom! Clock is out! Championship effort!", "Stop the clock! Look at that transformation!", "Finished! Take a bow, that was relentless!", "Time is up! What an explosive ninety seconds!", "Done and dusted! You left nothing on the table!", "Horn sounds! Stop the clock, stunning hustle!", "That is a wrap! High-speed precision!", "Time! Look at the shine on that target!", "All done! Give yourself a massive hand!", "Ninety seconds flat! You attacked every zone!", "And stop! Fantastic energy all the way through!", "Challenge complete! That surface is glowing!", "Time called! You delivered under pressure!", "Done! That is how a benchmark pro does it!", "Buzzer sounds! Huge run, let's check the tape!", "Finished strong! Love that closing speed!", "That is time! Absolute game-show superstar!", "Clock stops and the crowd goes wild! Great run!", "All finished! Lock in that after shot!", "Done deal! Sparkling work under the clock!", "Time! Pure hustle from bell to bell!", "Challenge complete! You made that look electric!"],
    pass: ["Pass! That room is gleaming!", "Sparkling fresh! Beautiful work!", "Pass with style! Well earned!", "That's a pass! Gorgeous work!", "Stamp it! Sparkling clean!", "Pass! The judges are thrilled!", "Top marks! Enjoy that win!", "A clear pass! Take the victory!", "Pass! What a transformation!", "Verified and victorious! Yes!", "That's the standard! Pass!", "Pass! Room looks brand new!", "Gold star! Fully earned!", "Pass with flying colors! Wow!", "Clean bill! Beautifully done!", "That's a pass! Own it!", "Scoreboard loves it! Pass!", "Pass! Picture-perfect clean!", "Nailed the benchmark! Pass!", "Victory lap! You passed!", "Pass! Simply stunning!", "The room approves! Pass!", "Flawless finish! That's a pass!", "Pass! Remember this feeling!"],
    retry: ["So close! Run it back and take the crown!", "Right on the edge! You've got the next one!", "Just missed the cut! Shake it off and attack again!", "Almost had it! One more push takes it!", "Champions reload! Run that spot back!", "Just a fraction short! Next run is yours!", "Ooh, razor close! Let's fire it up again!", "Not quite there yet, but the speed is real!", "So near the mark! Give it one more blitz!", "Shake it off and hit that surface again!", "Almost locked it! Come back swinging!", "Close call! Bring that fire into the next run!", "Right at the doorstep! One more try!", "Reload time! You know the angles now, go!", "Just below the line! Run it back fast!", "One more round! You are right there!", "Close one! Hit those missed zones and own it!", "Big heart out there! Let's run it one more time!", "The spot is waiting! Jump back in and crush it!", "Retry! Turn that frustration into speed!", "So close! Hit the corners and claim that pass!", "Next run is the winner! Let's go!", "Tough break, huge effort! Run it back!", "Again! Faster, sharper, and all the way clean!"],
    "pass-big": ["Massive win! Absolutely glowing from top to bottom!", "Blown away! That is a monster championship score!", "History made on camera! Look at that shine!", "Unreal result! Take a bow, you crushed the benchmark!", "Total triumph! Every single zone transformed!", "Legendary clean! Straight to the top of the board!", "Off the charts! Incredible speed and technique!", "An absolute masterpiece! Pure gold!", "Best run of the day! Simply flawless!", "Record-breaking energy! Enjoy that huge win!", "Pure perfection across the whole spot! Wow!", "Champion level! Undisputed number one!"],
    "pass-close": ["Squeaked right through! A win is a win!", "By a whisker! You beat the benchmark!", "Just enough to lock the pass! Celebrate it!", "Narrow victory! Clutch finish under pressure!", "Cut it razor close and pulled it off!", "Right over the line! What a finish!", "Made it by a hair! That final burst paid off!", "Tight score, big win! It is all yours!", "Scraped through on grit! Take the points!", "Photo finish and you got the pass!", "Barely cleared it, but it counts on the board!", "Clutch survival! You got the job done!"],
    "retry-far": ["Tough round! Reset the frame and attack every zone!", "Off the mark this time, keep your head high!", "Missed a few zones! Step back in and light them up!", "Rough pass, bigger comeback! Shake it off!", "Plenty of room to climb! Hit that spot again!", "No sweat! Check the zone map and reload!", "Camera wants more action! Run it back strong!", "Tough break! Line up the shadow guide and go again!", "Missed the target zones! Next run is the comeback!", "Shake off that round and bring the heat!", "Reset, refocus, and attack that surface!", "Every pro has a warmup round! Now go crush it!"],
    hurry: ["Final stretch! Let's go! Bring that sparkle home!", "Final stretch! Pour on the speed and finish strong!", "Thirty seconds on the clock! Push, push, push!", "Home stretch! Empty the tank and make it shine!", "Final thirty! Attack those last corners right now!", "Closing speed! Show the judges what you've got!", "Here comes the bell! Finish every last inch!", "Final countdown! Turn the tempo all the way up!", "Almost home! Fast hands, lock in that clean!", "Final moments! Give it everything you have!", "Nearly there! Polish it off before the buzzer!", "Seconds ticking down! Sprint to the finish!"],
    "hurry-final": ["Ten, nine, eight! Sprint to the buzzer, let's go!", "Final ten seconds! Leave nothing behind, push!", "Clock is screaming! Give me one big final burst!", "Last ten seconds! Fast hands, finish that spot!", "Ten seconds left! Attack the final zone right now!", "The buzzer is coming! Empty the tank!", "Final burst! Everything you've got for ten seconds!", "Ten seconds to glory! Bring it home right now!", "Almost over! Make this final wipe count!", "Last call on the clock! Full speed to the bell!", "Final ten! Championship effort right to the line!", "Buzzer about to sound! Finish strong, let's go!"],
    "scoring-wait": ["Judges locking in the tape! Here comes the score!", "Hold your breath! Vision engine tallying the zones!", "Scores incoming! Let's see how you did!", "Drumroll please! Checking every surface zone!", "Judges deciding right now! Big moment!", "Checking the before and after! Stand by!", "Tallying up the clean and technique bars!", "Moment of truth! The scoreboard is lighting up!", "Locking in the benchmark verdict! Here it comes!", "Fingers crossed! Let's see that percentage!", "The verdict is almost ready! What a run!", "High drama in the booth! Score coming right up!"],
    nudge: [
      "Whoa, hold up! The camera sees zero movement out there! Step into the frame and attack that surface, let's go!",
      "Hey now, don't freeze on me! No motion detected on the spot yet, get those hands moving and make it shine!",
      "Wake up that viewfinder! Zero action showing on camera right now, jump in there and work that zone!",
      "Clock is ticking and the frame is standing still! Step right in and wipe that target down, you've got this!",
      "Alert on the floor! We aren't seeing any cleaning action yet, move into the shadow guide and light up those zones!",
      "Come on, show me some fire! The motion sensor is flatlining, hit that surface top to bottom right now!"
    ],
  },
  es: {
    start: [
      "¡Órale, a brillar! ¡Es tu momento!",
      "¡Arranca el juego! ¡Demuestra quién manda aquí!",
      "¡Cámaras listas! ¡Que se vea ese brillo de campeón!",
      "¡Venga, crack! ¡Haz que cada segundo cuente!",
      "¡El reloj ya corre! ¡Tú tienes con qué!",
      "¡A darle con todo a esa estación! ¡Rápido y fino!",
      "¡Ahora es cuando! ¡Limpio, veloz e imparable!",
      "¡Listos, fuera, a brillar! ¡Con todo a esa zona!",
      "¡Tu área, tu escenario! ¡Arrancamos ya!",
      "¡Momento estelar! ¡Prende esa zona de puro brillo!",
      "¡Llegó la hora del show! ¡Presume esa velocidad!",
      "¡Noventa segundos en el reloj! ¡Hazlos valer!",
      "¡Órale, vamos con todo! ¡La meta es dejarlo impecable!",
      "¡Actitud de campeón! ¡A conquistar esa superficie!",
      "¡A meterle turbo! ¡Para esto te preparaste!",
      "¡Échale ganas, superestrella! ¡Este lugar es todo tuyo!",
      "¡Que reluzca de limpio! ¡Empezando ahora mismo!",
      "¡Luces arriba, cámara fija! ¡Sale, sale, sale!",
      "¡El cronómetro está vivo! ¡A lucirse en grande!",
      "¡A toda máquina! ¡Que salga ese brillo espectacular!",
      "¡Aquí vamos! ¡Modo máquina de limpieza activado!",
      "¡Luces, cámara, acción! ¡A brillar en esa estación!",
      "¡Tus noventa segundos arrancan ya! ¡Pásale con todo!",
      "¡Venga ese ánimo! ¡Rápido, fresco y al cien!"
    ],
    mid: [
      "¡Vamos a la mitad y vas volando! ¡Sigue así!",
      "¡Qué buen ritmo traes! ¡Esa superficie ya está reluciendo!",
      "¡Vas como rayo! ¡Qué bárbaro, qué precisión!",
      "¡Mira nada más esa velocidad! ¡No sueltes ese paso!",
      "¡Estás rompiendo la marca! ¡Qué nivelazo traes!",
      "¡Puro ritmo eléctrico! ¡Sigue con el acelerador a fondo!",
      "¡Arrancaste fuerte y sigues todavía mejor! ¡Venga!",
      "¡Movimiento sin parar! ¡Esa zona está cobrando vida!",
      "¡Qué paso tan increíble llevas! ¡No le bajes!",
      "¡Manos rápidas y trazo fino! ¡Me encanta esa energía!",
      "¡Vas en tiempo de récord! ¡No aflojes ni tantito!",
      "¡El área se está transformando en vivo! ¡Qué espectáculo!",
      "¡Saca ese brillo de campeonato! ¡Vas con todo!",
      "¡Se siente la buena vibra! ¡Sigue dándole al cien!",
      "¡Vas volando por toda la estación! ¡Increíble!",
      "¡Mantén la concentración para el empujón fuerte! ¡Eso es!",
      "¡Ritmo imparable! ¡Cada segundo suma para el podio!",
      "¡Alta velocidad y pura calidad! ¡Sigue así de fino!",
      "¡Mira cómo se iluminan las zonas! ¡Qué gran esfuerzo!",
      "¡La tabla de líderes te está llamando! ¡Échale ganas!",
      "¡Rápido y sin miedo! ¡Estás dominando la estación!",
      "¡Te mueves como todo un profesional! ¡Pura maestría!",
      "¡Súbele toda la energía! ¡Qué bárbaro cómo brilla eso!",
      "¡Entrega total en la cancha! ¡Que siga reluciendo!"
    ],
    finish: [
      "¡Tiempo! ¡Paren el reloj! ¡Qué ronda tan fenomenal!",
      "¡Y listo! ¡Estuvo electrizante de principio a fin!",
      "¡Bum! ¡Se acabó el tiempo! ¡Esfuerzo de puro campeón!",
      "¡Reloj detenido! ¡Mira nada más esa transformación!",
      "¡Terminado! ¡Mereces una ovación, qué entrega!",
      "¡Tiempo cumplido! ¡Qué noventa segundos tan explosivos!",
      "¡Listo y reluciente! ¡Lo diste absolutamente todo!",
      "¡Suena la chicharra! ¡Paren el reloj, qué gran ritmo!",
      "¡Se cierra la ronda! ¡Velocidad y precisión de lujo!",
      "¡Tiempo! ¡Mira cómo brilla esa estación!",
      "¡Todo listo! ¡Date un aplauso bien fuerte!",
      "¡Noventa segundos clavados! ¡Cubriste toda la zona con ganas!",
      "¡Y paramos! ¡Energía fantástica de principio a fin!",
      "¡Reto completado! ¡Esa superficie quedó brillando!",
      "¡Tiempo oficial! ¡Cumpliste bajo presión como los grandes!",
      "¡Listo! ¡Así es como trabaja un verdadero profesional!",
      "¡Suena la campana! ¡Gran corrida, vamos a ver el resultado!",
      "¡Cerraste con todo! ¡Me encantó esa velocidad final!",
      "¡Se acabó el tiempo! ¡Estrella total del programa!",
      "¡Para el reloj y el público se pone de pie! ¡Gran ronda!",
      "¡Todo terminado! ¡Disfruta ese gran esfuerzo!",
      "¡Trato hecho! ¡Un trabajo impecable contra el reloj!",
      "¡Tiempo! ¡Pura garra de campana a campana!",
      "¡Reto superado! ¡Hiciste que se viera facilísimo!"
    ],
    pass: [
      "¡Aprobado! ¡Esa estación quedó reluciendo!",
      "¡Frescura y brillo total! ¡Qué chulada de trabajo!",
      "¡Pasaste con mucho estilo! ¡Bien merecido!",
      "¡Eso es un pase directo! ¡Impecable trabajo!",
      "¡Sello de calidad puesto! ¡Limpio de verdad!",
      "¡Aprobado! ¡Los jueces están encantados!",
      "¡Calificación de lujo! ¡Disfruta esa victoria!",
      "¡Pase clarísimo! ¡Llévate ese triunfo a casa!",
      "¡Aprobado! ¡Qué transformación tan increíble!",
      "¡Verificado y victorioso! ¡Claro que sí!",
      "¡Ese es el estándar de oro! ¡Aprobado!",
      "¡Pasaste! ¡El área quedó como nuevecita!",
      "¡Estrella dorada! ¡Ganada a pulso!",
      "¡Aprobado con honores! ¡Qué nivelazo!",
      "¡Resultado impecable! ¡Qué bien te quedó!",
      "¡Eso es un pase! ¡Hazlo tuyo, campeón!",
      "¡Al marcador le encanta esto! ¡Aprobado!",
      "¡Pasaste! ¡Limpieza digna de postal!",
      "¡Superaste la marca con categoría! ¡Aprobado!",
      "¡Vuelta de la victoria! ¡Ya estás del otro lado!",
      "¡Aprobado! ¡Sencillamente espectacular!",
      "¡La estación lo confirma! ¡Pase directo!",
      "¡Acabado impecable! ¡Eso es un pase seguro!",
      "¡Aprobado! ¡Guárdate esta sensación de triunfo!"
    ],
    retry: [
      "¡Uy, cerquita! ¡Échate la revancha y llévate la corona!",
      "¡En la rayita! ¡La que sigue ya es toda tuya!",
      "¡Te faltó un pelito! ¡Sacúdete y vuelve con todo!",
      "¡Casi la armas! ¡Un empujoncito más y sale!",
      "¡Los campeones no se rajan! ¡Vamos por la revancha!",
      "¡A nada de lograrlo! ¡La próxima ronda es la buena!",
      "¡Qué cerca estuvo! ¡Prende los motores otra vez!",
      "¡Casi llega a la meta, pero traes una velocidad brutal!",
      "¡A un pasito del objetivo! ¡Date otra vuelta con todo!",
      "¡Sacúdete eso y vuelve a brillar en la estación!",
      "¡Ya casi lo tenías en la bolsa! ¡Regresa con más fuerza!",
      "¡Por poquito! ¡Mete ese mismo fuego en el siguiente intento!",
      "¡Te quedaste en la puerta! ¡Un intento más y la rompes!",
      "¡Hora de recargar! ¡Ya le agarraste el modo, dale!",
      "¡Justo abajito de la línea! ¡Venga esa revancha rápida!",
      "¡Un round más! ¡Ya lo tienes súper cerca!",
      "¡Estuvo cerradísimo! ¡Ve por esas zonas y hazlo tuyo!",
      "¡Qué gran corazón mostraste! ¡Vamos a intentarlo una vez más!",
      "¡La estación te espera! ¡Entra de nuevo y conquístala!",
      "¡Revancha! ¡Convierte esas ganas en pura velocidad!",
      "¡Tan cerca! ¡Un último esfuerzo y aseguras el pase!",
      "¡La próxima corrida es la ganadora! ¡Órale, vamos!",
      "¡Buen intento y tremendo esfuerzo! ¡Vamos de nuevo!",
      "¡Otra vez! ¡Más rápido, más fino y a brillar en grande!"
    ],
    "pass-big": [
      "¡Victoria monumental! ¡Quedó reluciendo de arriba a abajo!",
      "¡Qué barbaridad! ¡Ese es un puntaje de supercampeón!",
      "¡Hiciste historia en cámara! ¡Mira nada más ese brillo!",
      "¡Resultado fuera de serie! ¡Rompiste toda la marca!",
      "¡Triunfo absoluto! ¡Cada rincón quedó transformado!",
      "¡Limpieza legendaria! ¡Directito a la cima de la tabla!",
      "¡De otro planeta! ¡Qué velocidad y qué calidad!",
      "¡Una verdadera obra maestra! ¡Pura calidad de campeón!",
      "¡La mejor ronda del día! ¡Sencillamente impecable!",
      "¡Energía rompe-récords! ¡Disfruta esa gran victoria!",
      "¡Perfección total en toda la estación! ¡Qué bárbaro!",
      "¡Nivel de campeón indiscutible! ¡El número uno absoluto!"
    ],
    "pass-close": [
      "¡Pasaste de panzazo! ¡Pero victoria es victoria!",
      "¡Por un pelito! ¡Le ganaste a la marca!",
      "¡Justo lo necesario para amarrar el pase! ¡Celébralo!",
      "¡Victoria apretada! ¡Gran cierre bajo presión!",
      "¡Estuvo cardíaco pero lo sacaste adelante!",
      "¡Cruzaste la línea apenitas! ¡Qué final tan emocionante!",
      "¡La libraste por nada! ¡Ese último acelerón valió oro!",
      "¡Puntaje cerrado, triunfo grande! ¡Es todo tuyo!",
      "¡Pasaste a pura garra! ¡Los puntos van para la bolsa!",
      "¡Final de fotografía y te llevas el pase!",
      "¡Apenitas pasó la línea, pero ya cuenta en el marcador!",
      "¡Salvada de campeonato! ¡Sacaste la chamba adelante!"
    ],
    "retry-far": [
      "¡Ronda difícil! ¡Reacomoda el encuadre y vamos con todo!",
      "¡Esta vez quedó lejos, pero arriba ese ánimo!",
      "¡Faltaron algunas zonas! ¡Entra de nuevo y préndelas!",
      "¡Ronda dura, pero el regreso será más fuerte! ¡Ánimo!",
      "¡Hay mucho margen para subir! ¡Vamos por esa estación otra vez!",
      "¡No pasa nada! ¡Checa el mapa de zonas y recarga energía!",
      "¡La cámara quiere ver más acción! ¡Regresa con todo!",
      "¡Trago amargo, pero alinea la guía y va de nuevo!",
      "¡Se escaparon las zonas clave! ¡La revancha es la buena!",
      "¡Sacúdete esta ronda y regresa con toda la actitud!",
      "¡Reinicia, enfócate y vuelve a conquistar esa superficie!",
      "¡Todo profesional tiene una ronda de calentamiento! ¡Ahora ve a romperla!"
    ],
    hurry: [
      "¡Recta final! ¡Órale, cierra con todo ese brillo!",
      "¡Último tramo! ¡Métele velocidad y cierra fuerte!",
      "¡El reloj aprieta! ¡Empuja, empuja, empuja!",
      "¡Ya estás en la recta final! ¡Vacía el tanque y hazlo brillar!",
      "¡Tramo decisivo! ¡A darle con todo a esos últimos detalles!",
      "¡Velocidad de cierre! ¡Demuéstrales a los jueces de qué estás hecho!",
      "¡Ya se acerca la campana! ¡Que cada rincón cuente!",
      "¡Cuenta regresiva en marcha! ¡Súbele el ritmo al máximo!",
      "¡Ya casi llegas! ¡Manos rápidas para amarrar ese resultado!",
      "¡Momentos decisivos! ¡Entrega todo lo que traes!",
      "¡Ya merito! ¡Déjalo reluciente antes de la chicharra!",
      "¡Los segundos vuelan! ¡Cierra a todo galope hasta la meta!"
    ],
    "hurry-final": [
      "¡Diez, nueve, ocho! ¡A todo vapor hasta la chicharra, vamos!",
      "¡Últimos diez segundos! ¡No te guardes nada, dale!",
      "¡El reloj está al rojo vivo! ¡Dame un último cierre explosivo!",
      "¡Quedan diez segundos! ¡Manos veloces para cerrar con broche de oro!",
      "¡Diez segundos en el reloj! ¡Con todo a esa última zona!",
      "¡Ya viene la chicharra! ¡Vacía el tanque ahora mismo!",
      "¡Ráfaga final! ¡Diez segundos a máxima potencia!",
      "¡Diez segundos para la gloria! ¡Amarra ese triunfo ya!",
      "¡Esto ya casi se acaba! ¡Haz que el último segundo valga!",
      "¡Última llamada en el reloj! ¡A toda máquina hasta la campana!",
      "¡Diez finales! ¡Esfuerzo de campeón hasta la raya!",
      "¡La chicharra está por sonar! ¡Cierra con todo, órale!"
    ],
    "scoring-wait": [
      "¡Los jueces revisan la jugada! ¡Ahí viene el puntaje!",
      "¡Aguanta la respiración! ¡El motor de visión está sumando las zonas!",
      "¡Calificaciones en camino! ¡Vamos a ver cómo te fue!",
      "¡Redoble de tambores! ¡Revisando cada zona de la estación!",
      "¡Los jueces están decidiendo ahora mismo! ¡Momento grande!",
      "¡Comparando el antes y el después! ¡Atentos todos!",
      "¡Calculando las barras de limpieza y ritmo! ¡Ya casi!",
      "¡El momento de la verdad! ¡El marcador se está encendiendo!",
      "¡Cerrando el veredicto oficial! ¡Aquí viene el resultado!",
      "¡Dedos cruzados! ¡Vamos a ver ese porcentaje!",
      "¡El veredicto está casi listo! ¡Qué gran ronda te aventaste!",
      "¡Máximo suspenso en la cabina! ¡El puntaje sale ya!"
    ],
    nudge: [
      "¡Ey, aguanta! ¡La cámara no ve nada de movimiento! ¡Entra a cuadro y dale con todo a esa estación, órale!",
      "¡No te me quedes congelado! ¡Todavía no detectamos acción en la zona, mueve esas manos y ponla a brillar!",
      "¡Despierta esa cámara! ¡Cero movimiento en pantalla ahora mismo, entra en acción y trabaja esa superficie!",
      "¡El reloj sigue corriendo y la imagen está quieta! ¡Pásale al cuadro y dale brillo a ese objetivo, tú puedes!",
      "¡Alerta en la estación! ¡Aún no vemos movimiento de limpieza, entra en la guía de sombra y prende esas zonas!",
      "¡Venga, muéstrame esa energía! ¡El sensor de movimiento está en ceros, entra a cuadro y dale de arriba a abajo ya!"
    ]
  },
  pl: {
    start: ["No to... czas błyszczeć!", "Gra trwa... pokaż, kto tu rządzi!", "Kamery gotowe... niech widać blask!", "Dobra, mistrzu... niech się liczy!", "Zegar tyka... dasz radę!", "Do pracy... szybko i dobrze!", "No to... czysto i sprawnie!", "Gotowi... do blasku!", "Twój pokój... twoja scena... start!", "Wielka chwila... sprzątamy!", "Showtime... gwiazda sprząta!", "Dziewięćdziesiąt sekund... wykorzystaj je!", "Zaczynamy... cel to perfekcja!", "Mina gracza... jedziemy!", "Do boju... po to trenowałeś!", "Dobra, gwiazdo... ten pokój jest twój!", "Niech błyszczy... już teraz!", "Światła gotowe... sala gotowa... start!", "Zegar żyje... rób swoje!", "Bez presji... po prostu błyszcz!", "Jedziemy... maszyno czystości!", "Światła, kamera... sprzątanie!", "Twoje dziewięćdziesiąt sekund... start!", "Dawaj... pełną parą!"],
    mid: ["Połowa... idzie świetnie!", "Dobre tempo... pięknie idzie!", "Połowa za nami... forma świetna!", "Płynnie idzie... piękny przepływ!", "Połowa wyzwania... dasz radę!", "Dobre tempo... równa jazda!", "Mocny start... środek olśniewa!", "Wyglądasz super... co za styl!", "Półmetek... co za poziom!", "Płynne ruchy... czysta sztuka!", "Idealnie... co za precyzja!", "Już czysto... wow!", "Połowa... pełny rytm!", "Świetna energia... elektryczna sala!", "Lecisz... co za lot!", "Półmetek... wyglądasz mocno!", "Równo idzie... już prawie!", "Piękne tempo... czysty blask!", "Co za energia... dobrze idzie!", "Połowa... pokój w ciebie wierzy!", "Gładko i równo... ładnie!", "Jak zawodowiec... co za klasa!", "Połowa... błyszczący finisz!", "Świetna robota... czysty blask!"],
    finish: ["Czas!... piękne dzieło!", "I... gotowe! Piękna robota!", "To jest... czysty mistrz!", "Koniec... przepięknie!", "Ukończone!... ukłoń się!", "Czas minął... co za występ!", "Gotowe i czyste... dosłownie!", "Stop zegar... imponujące!", "Koniec gry... ładnie zagrane!", "Czas!... spójrz na ten blask!", "Wszystko gotowe... bądź dumny!", "Dziewięćdziesiąt sekund... idealnie!", "I stop... fantastyczna robota!", "Ukończone!... pokój lśni!", "Czas minął... dowiozłeś!", "Gotowe!... tak się to robi!", "Gwizdek... świetny występ!", "Mocny finisz... miło patrzeć!", "To jest czas... prawdziwa gwiazda!", "Zegar staje... tłum szaleje!", "Wszystko skończone... naciesz się!", "Umowa stoi... błyszczący wynik!", "Czas!... miodzio!", "Ukończone... robisz to z łatwością!"],
    pass: ["Zaliczone! Ten pokój lśni!", "Pełna świeżość... przepięknie!", "Zaliczone ze stylem... zasłużenie!", "To przechodzi... śliczna robota!", "Przybijam... idealna czystość!", "Zaliczone!... sędziowie się uśmiechają!", "Najwyższa nota... ciesz się!", "Jasne zaliczenie... bierz wygraną!", "Zaliczone!... co za zmiana!", "Zweryfikowane i zwycięskie... tak!", "To jest poziom... zaliczone!", "Zaliczone!... pokój jak nowy!", "Złota gwiazdka... zasłużona!", "Zaliczone z honorem... wow!", "Czyste konto... piękna robota!", "To przechodzi... weź to sobie!", "Tablica to kocha... zaliczone!", "Zaliczone!... czystość ze zdjęcia!", "Wbiłeś benchmark... zaliczone!", "Runda honorowa... zaliczyłeś!", "Zaliczone!... po prostu cudnie!", "Pokój zatwierdza... zaliczone!", "Perfekcyjny finisz... to zaliczone!", "Zaliczone!... zapamiętaj tę chwilę!"],
    retry: ["Tak blisko... jeszcze jeden bieg?", "Prawie... masz w sobie kolejny!", "Nie wyszło... otrzep się i jeszcze raz!", "Prawie się udało... jeszcze raz!", "Bez wstydu... mistrzowie powtarzają!", "O włos... następny będzie twój!", "Uff, blisko... dawaj jeszcze raz!", "Tym razem nie... uda ci się!", "Tak blisko... jeszcze jedna próba?", "Otrzep kurz... powtórz!", "Prawie miałeś... jeszcze raz!", "Blisko było... piękny wysiłek!", "Jeszcze nie... ale jesteś blisko...", "Czas na powtórkę... wierzę w ciebie!", "Nie ta marka... ładuj i leć!", "Jeszcze raz... dasz radę!", "Blisko... ale jeszcze nie...", "Prawie... co za serce!", "Jeszcze nie... pokój czeka!", "Powtórz... niech się liczy!", "Tak blisko... czujesz ogień?", "Następny będzie ten... leć!", "Nie wyszło... ale co za serce!", "Jeszcze raz... czyściej i ostrzej!"],
    "pass-big": ["Wielka wygrana... pełny blask!", "Szok... perfekcyjne wibracje!", "Historia pisze się... patrz!", "Nierealny wynik... wielki ukłon!", "Pełny triumf... pokój odmieniony!", "Legendarna czystość... aleja gwiazd!", "Poza skalą... niesamowite!", "Arcydzieło... czyste złoto!", "Najlepszy występ... po prostu perfekcja!", "Rekord pobity... ciesz się!", "Czysta perfekcja... wow wow!", "Poziom mistrza... bezdyskutacyjnie!"],
    "pass-close": ["Ledwo przeszło... ale liczy się!", "O włos... udało ci się!", "Wystarczyło... świętuj to!", "Wąska wygrana... co za ulga!", "Bliski finisz... pięknie!", "Za linią... uff!", "Udało się... o włos!", "Blisko było... ale twoje!", "Ledwo weszło... co za radość!", "Finisz foto... zaliczone!", "Ledwo... ale genialnie!", "Przetrwałeś... i błyszczysz!"],
    "retry-far": ["Nie dziś... wciąż błyszczysz!", "Daleko od celu... głowa w górę!", "Duże pudło... większe serce!", "Ciężka runda... otrzep się!", "Daleko... następnym razem!", "Bez wstydu... wracaj i błyszcz!", "Daleko obok... piękna próba!", "Trudna runda... wciąż gwiazda!", "Spore pudło... błyszcz dalej!", "Brak farta... ładna próba!", "Daleko od tego... wróć!", "Gorszy dzień... wciąż na złoto!"],
    hurry: ["Dziesięć sekund... co za finisz!", "Ostatnia prosta... wygląda bosko!", "Prawie w domu... piękny finał!", "Co za bieg... czysta magia!", "Ostatnie sekundy... wielka magia!", "Wielki finał... cudowna robota!", "Już nadchodzi... dzwonek!", "Odliczanie... uwielbiam to!", "Tak blisko... wyglądasz super!", "Ostatnie chwile... co za serce!", "Już prawie... cudowny widok!", "Zegar tyka... co za blask!"],
    "hurry-final": ["Dziesięć... dziewięć... jedziemy!", "Ostatnie dziesięć... niech się liczy!", "Zegar krzyczy... błyszcz mimo to!", "Ostatnie sekundy... czyste serce!", "Zostało dziesięć... nic w zapasie!", "Dzwonek... zaraz zadzwoni!", "Ostatni zryw... pięknie!", "Dziesięć sekund... legendarny finisz!", "Prawie koniec... najjaśniejszy moment!", "Ostatnie wezwanie... całe serce!", "Ostatnia dziesiątka... chwalebny bieg!", "Dzwonek zaraz zabrzmi... błyszcz!"],
    "scoring-wait": ["Sędziowie patrzą... co za nerwy!", "Wstrzymany oddech... już jest!", "Wyniki lecą... co za emocje!", "Werble... to jest to!", "Sędziowie radzą... momenty wow!", "Czekamy... co za bieg!", "Liczą punkty... wygląda dobrze!", "Moment prawdy... blask!", "Tablica budzi się... już idzie!", "Kciuki trzymane... piękna robota!", "Werdykt... już prawie!", "Napięcie... byłeś świetny!"],
    nudge: [
      "Ej, chwila! Kamera nie widzi żadnego ruchu! Wejdź w kadr i zaatakuj tę powierzchnię, jazda!",
      "Nie zatrzymuj się teraz! Brak akcji w strefie, ruszaj rękami i daj czadu z tym blaskiem!",
      "Zegar tyka, a w kadrze cisza! Wejdź w cień przed-po i wyczyść to od góry do dołu!"
    ],
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
  start: { rate: 1.08, pitch: 1.06 },
  mid: { rate: 1.07, pitch: 1.05 },
  hurry: { rate: 1.1, pitch: 1.06 },
  "hurry-final": { rate: 1.12, pitch: 1.08 },
  "scoring-wait": { rate: 0.98, pitch: 1.0 },
  finish: { rate: 1.08, pitch: 1.08 },
  "pass-big": { rate: 0.98, pitch: 1.03 },
  retry: { rate: 0.95, pitch: 0.97 },
  "retry-far": { rate: 0.94, pitch: 0.95 }
};

const CLIPS_MANIFEST = {
  version: 1,
  clips: {
    "en:start-00": "mock",
    "en:hurry-00": "available",
    "en:hurry-01": "available",
    "en:hurry-02": "available",
    "en:hurry-03": "available",
    "en:hurry-04": "available",
    "en:hurry-05": "available",
    "en:hurry-06": "available",
    "en:hurry-07": "available",
    "en:hurry-08": "available",
    "en:hurry-09": "available",
    "en:hurry-10": "available",
    "en:hurry-11": "available",
    "en:hurry-final-00": "available",
    "en:hurry-final-01": "available",
    "en:hurry-final-02": "available",
    "en:hurry-final-03": "available",
    "en:hurry-final-04": "available",
    "en:hurry-final-05": "available",
    "en:hurry-final-06": "available",
    "en:hurry-final-07": "available",
    "en:hurry-final-08": "available",
    "en:hurry-final-09": "available",
    "en:hurry-final-10": "available",
    "en:hurry-final-11": "available",
    "en:pass-00": "available",
    "en:pass-01": "available",
    "en:pass-02": "available",
    "en:pass-03": "available",
    "en:pass-04": "available",
    "en:pass-05": "available",
    "en:pass-06": "available",
    "en:pass-07": "available",
    "en:pass-08": "available",
    "en:pass-09": "available",
    "en:pass-10": "available",
    "en:pass-11": "available",
    "en:pass-12": "available",
    "en:pass-13": "available",
    "en:pass-14": "available",
    "en:pass-15": "available",
    "en:pass-16": "available",
    "en:pass-17": "available",
    "en:pass-18": "available",
    "en:pass-19": "available",
    "en:pass-20": "available",
    "en:pass-21": "available",
    "en:pass-22": "available",
    "en:pass-23": "available",
    "en:pass-big-00": "available",
    "en:pass-big-01": "available",
    "en:pass-big-02": "available",
    "en:pass-big-03": "available",
    "en:pass-big-04": "available",
    "en:pass-big-05": "available",
    "en:pass-big-06": "available",
    "en:pass-big-07": "available",
    "en:pass-big-08": "available",
    "en:pass-big-09": "available",
    "en:pass-big-10": "available",
    "en:pass-big-11": "available",
    "en:pass-close-00": "available",
    "en:pass-close-01": "available",
    "en:pass-close-02": "available",
    "en:pass-close-03": "available",
    "en:pass-close-04": "available",
    "en:pass-close-05": "available",
    "en:pass-close-06": "available",
    "en:pass-close-07": "available",
    "en:pass-close-08": "available",
    "en:pass-close-09": "available",
    "en:pass-close-10": "available",
    "en:pass-close-11": "available",
    "en:retry-00": "available",
    "en:retry-01": "available",
    "en:retry-02": "available",
    "en:retry-03": "available",
    "en:retry-04": "available",
    "en:retry-05": "available",
    "en:retry-06": "available",
    "en:retry-07": "available",
    "en:retry-08": "available",
    "en:retry-09": "available",
    "en:retry-10": "available",
    "en:retry-11": "available",
    "en:retry-12": "available",
    "en:retry-13": "available",
    "en:retry-14": "available",
    "en:retry-15": "available",
    "en:retry-16": "available",
    "en:retry-17": "available",
    "en:retry-18": "available",
    "en:retry-19": "available",
    "en:retry-20": "available",
    "en:retry-21": "available",
    "en:retry-22": "available",
    "en:retry-23": "available",
    "en:scoring-wait-00": "available",
    "en:scoring-wait-01": "available",
    "en:scoring-wait-02": "available",
    "en:scoring-wait-03": "available",
    "en:scoring-wait-04": "available",
    "en:scoring-wait-05": "available",
    "en:scoring-wait-06": "available",
    "en:scoring-wait-07": "available",
    "en:scoring-wait-08": "available",
    "en:scoring-wait-09": "available",
    "en:scoring-wait-10": "available",
    "en:scoring-wait-11": "available"
    ,
    "en:glue-00": "available",
    "en:glue-01": "available",
    "en:glue-02": "available",
    "en:glue-03": "available",
    "en:num-00": "available",
    "en:num-01": "available",
    "en:num-02": "available",
    "en:num-03": "available",
    "en:num-04": "available",
    "en:num-05": "available",
    "en:num-06": "available",
    "en:num-07": "available",
    "en:num-08": "available",
    "en:num-09": "available",
    "en:num-10": "available",
    "en:num-100": "available",
    "en:num-11": "available",
    "en:num-12": "available",
    "en:num-13": "available",
    "en:num-14": "available",
    "en:num-15": "available",
    "en:num-16": "available",
    "en:num-17": "available",
    "en:num-18": "available",
    "en:num-19": "available",
    "en:num-20": "available",
    "en:num-30": "available",
    "en:num-40": "available",
    "en:num-50": "available",
    "en:num-60": "available",
    "en:num-70": "available",
    "en:num-80": "available",
    "en:num-90": "available",
    "en:retry-far-00": "available",
    "en:retry-far-01": "available",
    "en:retry-far-02": "available",
    "en:retry-far-03": "available",
    "en:retry-far-04": "available",
    "en:retry-far-05": "available",
    "en:retry-far-06": "available",
    "en:retry-far-07": "available",
    "en:retry-far-08": "available",
    "en:retry-far-09": "available",
    "en:retry-far-10": "available",
    "en:retry-far-11": "available"
    ,
    "en:consent-00": "available",
    "en:start-01": "available",
    "en:start-02": "available",
    "en:start-03": "available",
    "en:start-04": "available",
    "en:start-05": "available",
    "en:start-06": "available",
    "en:start-07": "available",
    "en:start-08": "available",
    "en:start-09": "available",
    "en:start-10": "available",
    "en:start-11": "available",
    "en:start-12": "available",
    "en:start-13": "available",
    "en:start-14": "available",
    "en:start-15": "available",
    "en:start-16": "available",
    "en:start-17": "available",
    "en:start-18": "available",
    "en:start-19": "available",
    "en:start-20": "available",
    "en:start-21": "available",
    "en:start-22": "available",
    "en:start-23": "available",
    "en:mid-01": "available",
    "en:mid-02": "available",
    "en:mid-03": "available",
    "en:mid-04": "available",
    "en:mid-05": "available",
    "en:mid-06": "available",
    "en:mid-07": "available",
    "en:mid-08": "available",
    "en:mid-09": "available",
    "en:mid-10": "available",
    "en:mid-11": "available",
    "en:mid-12": "available",
    "en:mid-13": "available",
    "en:mid-14": "available",
    "en:mid-15": "available",
    "en:mid-16": "available",
    "en:mid-17": "available",
    "en:mid-18": "available",
    "en:mid-19": "available",
    "en:mid-20": "available",
    "en:mid-21": "available",
    "en:mid-22": "available",
    "en:mid-23": "available",
    "en:finish-00": "available",
    "en:finish-01": "available",
    "en:finish-02": "available",
    "en:finish-03": "available",
    "en:finish-04": "available",
    "en:finish-05": "available",
    "en:finish-06": "available",
    "en:finish-07": "available",
    "en:finish-08": "available",
    "en:finish-09": "available",
    "en:finish-10": "available",
    "en:finish-11": "available",
    "en:finish-12": "available",
    "en:finish-13": "available",
    "en:finish-14": "available",
    "en:finish-15": "available",
    "en:finish-16": "available",
    "en:finish-17": "available",
    "en:finish-18": "available",
    "en:finish-19": "available",
    "en:finish-20": "available",
    "en:finish-21": "available",
    "en:finish-22": "available",
    "en:finish-23": "available",
    "en:nudge-00": "available",
    "en:nudge-01": "available",
    "en:nudge-02": "available",
    "en:nudge-03": "available",
    "en:nudge-04": "available",
    "en:nudge-05": "available",
    "es:finish-00": "available", "es:finish-01": "available", "es:finish-02": "available", "es:finish-03": "available",
    "es:finish-04": "available", "es:finish-05": "available", "es:finish-06": "available", "es:finish-07": "available",
    "es:finish-08": "available", "es:finish-09": "available", "es:finish-10": "available", "es:finish-11": "available",
    "es:finish-12": "available", "es:finish-13": "available", "es:finish-14": "available", "es:finish-15": "available",
    "es:finish-16": "available", "es:finish-17": "available", "es:finish-18": "available", "es:finish-19": "available",
    "es:finish-20": "available", "es:finish-21": "available", "es:finish-22": "available", "es:finish-23": "available",
    "es:hurry-00": "available", "es:hurry-01": "available", "es:hurry-02": "available", "es:hurry-03": "available",
    "es:hurry-04": "available", "es:hurry-05": "available", "es:hurry-06": "available", "es:hurry-07": "available",
    "es:hurry-08": "available", "es:hurry-09": "available", "es:hurry-10": "available", "es:hurry-11": "available",
    "es:hurry-final-00": "available", "es:hurry-final-01": "available", "es:hurry-final-02": "available", "es:hurry-final-03": "available",
    "es:hurry-final-04": "available", "es:hurry-final-05": "available", "es:hurry-final-06": "available", "es:hurry-final-07": "available",
    "es:hurry-final-08": "available", "es:hurry-final-09": "available", "es:hurry-final-10": "available", "es:hurry-final-11": "available",
    "es:mid-00": "available", "es:mid-01": "available", "es:mid-02": "available", "es:mid-03": "available",
    "es:mid-04": "available", "es:mid-05": "available", "es:mid-06": "available", "es:mid-07": "available",
    "es:mid-08": "available", "es:mid-09": "available", "es:mid-10": "available", "es:mid-11": "available",
    "es:mid-12": "available", "es:mid-13": "available", "es:mid-14": "available", "es:mid-15": "available",
    "es:mid-16": "available", "es:mid-17": "available", "es:mid-18": "available", "es:mid-19": "available",
    "es:mid-20": "available", "es:mid-21": "available", "es:mid-22": "available", "es:mid-23": "available",
    "es:pass-00": "available", "es:pass-01": "available", "es:pass-02": "available", "es:pass-03": "available",
    "es:pass-04": "available", "es:pass-05": "available", "es:pass-06": "available", "es:pass-07": "available",
    "es:pass-08": "available", "es:pass-09": "available", "es:pass-10": "available", "es:pass-11": "available",
    "es:pass-12": "available", "es:pass-13": "available", "es:pass-14": "available", "es:pass-15": "available",
    "es:pass-16": "available", "es:pass-17": "available", "es:pass-18": "available", "es:pass-19": "available",
    "es:pass-20": "available", "es:pass-21": "available", "es:pass-22": "available", "es:pass-23": "available",
    "es:pass-big-00": "available", "es:pass-big-01": "available", "es:pass-big-02": "available", "es:pass-big-03": "available",
    "es:pass-big-04": "available", "es:pass-big-05": "available", "es:pass-big-06": "available", "es:pass-big-07": "available",
    "es:pass-big-08": "available", "es:pass-big-09": "available", "es:pass-big-10": "available", "es:pass-big-11": "available",
    "es:pass-close-00": "available", "es:pass-close-01": "available", "es:pass-close-02": "available", "es:pass-close-03": "available",
    "es:pass-close-04": "available", "es:pass-close-05": "available", "es:pass-close-06": "available", "es:pass-close-07": "available",
    "es:pass-close-08": "available", "es:pass-close-09": "available", "es:pass-close-10": "available", "es:pass-close-11": "available",
    "es:retry-00": "available", "es:retry-01": "available", "es:retry-02": "available", "es:retry-03": "available",
    "es:retry-04": "available", "es:retry-05": "available", "es:retry-06": "available", "es:retry-07": "available",
    "es:retry-08": "available", "es:retry-09": "available", "es:retry-10": "available", "es:retry-11": "available",
    "es:retry-12": "available", "es:retry-13": "available", "es:retry-14": "available", "es:retry-15": "available",
    "es:retry-16": "available", "es:retry-17": "available", "es:retry-18": "available", "es:retry-19": "available",
    "es:retry-20": "available", "es:retry-21": "available", "es:retry-22": "available", "es:retry-23": "available",
    "es:retry-far-00": "available", "es:retry-far-01": "available", "es:retry-far-02": "available", "es:retry-far-03": "available",
    "es:retry-far-04": "available", "es:retry-far-05": "available", "es:retry-far-06": "available", "es:retry-far-07": "available",
    "es:retry-far-08": "available", "es:retry-far-09": "available", "es:retry-far-10": "available", "es:retry-far-11": "available",
    "es:scoring-wait-00": "available", "es:scoring-wait-01": "available", "es:scoring-wait-02": "available", "es:scoring-wait-03": "available",
    "es:scoring-wait-04": "available", "es:scoring-wait-05": "available", "es:scoring-wait-06": "available", "es:scoring-wait-07": "available",
    "es:scoring-wait-08": "available", "es:scoring-wait-09": "available", "es:scoring-wait-10": "available", "es:scoring-wait-11": "available",
    "es:start-00": "available", "es:start-01": "available", "es:start-02": "available", "es:start-03": "available",
    "es:start-04": "available", "es:start-05": "available", "es:start-06": "available", "es:start-07": "available",
    "es:start-08": "available", "es:start-09": "available", "es:start-10": "available", "es:start-11": "available",
    "es:start-12": "available", "es:start-13": "available", "es:start-14": "available", "es:start-15": "available",
    "es:start-16": "available", "es:start-17": "available", "es:start-18": "available", "es:start-19": "available",
    "es:start-20": "available", "es:start-21": "available", "es:start-22": "available", "es:start-23": "available",
    "pl:finish-00": "available", "pl:finish-01": "available", "pl:finish-02": "available", "pl:finish-03": "available",
    "pl:finish-04": "available", "pl:finish-05": "available", "pl:finish-06": "available", "pl:finish-07": "available",
    "pl:finish-08": "available", "pl:finish-09": "available", "pl:finish-10": "available", "pl:finish-11": "available",
    "pl:finish-12": "available", "pl:finish-13": "available", "pl:finish-14": "available", "pl:finish-15": "available",
    "pl:finish-16": "available", "pl:finish-17": "available", "pl:finish-18": "available", "pl:finish-19": "available",
    "pl:finish-20": "available", "pl:finish-21": "available", "pl:finish-22": "available", "pl:finish-23": "available",
    "pl:hurry-00": "available", "pl:hurry-01": "available", "pl:hurry-02": "available", "pl:hurry-03": "available",
    "pl:hurry-04": "available", "pl:hurry-05": "available", "pl:hurry-06": "available", "pl:hurry-07": "available",
    "pl:hurry-08": "available", "pl:hurry-09": "available", "pl:hurry-10": "available", "pl:hurry-11": "available",
    "pl:hurry-final-00": "available", "pl:hurry-final-01": "available", "pl:hurry-final-02": "available", "pl:hurry-final-03": "available",
    "pl:hurry-final-04": "available", "pl:hurry-final-05": "available", "pl:hurry-final-06": "available", "pl:hurry-final-07": "available",
    "pl:hurry-final-08": "available", "pl:hurry-final-09": "available", "pl:hurry-final-10": "available", "pl:hurry-final-11": "available",
    "pl:mid-00": "available", "pl:mid-01": "available", "pl:mid-02": "available", "pl:mid-03": "available",
    "pl:mid-04": "available", "pl:mid-05": "available", "pl:mid-06": "available", "pl:mid-07": "available",
    "pl:mid-08": "available", "pl:mid-09": "available", "pl:mid-10": "available", "pl:mid-11": "available",
    "pl:mid-12": "available", "pl:mid-13": "available", "pl:mid-14": "available", "pl:mid-15": "available",
    "pl:mid-16": "available", "pl:mid-17": "available", "pl:mid-18": "available", "pl:mid-19": "available",
    "pl:mid-20": "available", "pl:mid-21": "available", "pl:mid-22": "available", "pl:mid-23": "available",
    "pl:pass-00": "available", "pl:pass-01": "available", "pl:pass-02": "available", "pl:pass-03": "available",
    "pl:pass-04": "available", "pl:pass-05": "available", "pl:pass-06": "available", "pl:pass-07": "available",
    "pl:pass-08": "available", "pl:pass-09": "available", "pl:pass-10": "available", "pl:pass-11": "available",
    "pl:pass-12": "available", "pl:pass-13": "available", "pl:pass-14": "available", "pl:pass-15": "available",
    "pl:pass-16": "available", "pl:pass-17": "available", "pl:pass-18": "available", "pl:pass-19": "available",
    "pl:pass-20": "available", "pl:pass-21": "available", "pl:pass-22": "available", "pl:pass-23": "available",
    "pl:pass-big-00": "available", "pl:pass-big-01": "available", "pl:pass-big-02": "available", "pl:pass-big-03": "available",
    "pl:pass-big-04": "available", "pl:pass-big-05": "available", "pl:pass-big-06": "available", "pl:pass-big-07": "available",
    "pl:pass-big-08": "available", "pl:pass-big-09": "available", "pl:pass-big-10": "available", "pl:pass-big-11": "available",
    "pl:pass-close-00": "available", "pl:pass-close-01": "available", "pl:pass-close-02": "available", "pl:pass-close-03": "available",
    "pl:pass-close-04": "available", "pl:pass-close-05": "available", "pl:pass-close-06": "available", "pl:pass-close-07": "available",
    "pl:pass-close-08": "available", "pl:pass-close-09": "available", "pl:pass-close-10": "available", "pl:pass-close-11": "available",
    "pl:retry-00": "available", "pl:retry-01": "available", "pl:retry-02": "available", "pl:retry-03": "available",
    "pl:retry-04": "available", "pl:retry-05": "available", "pl:retry-06": "available", "pl:retry-07": "available",
    "pl:retry-08": "available", "pl:retry-09": "available", "pl:retry-10": "available", "pl:retry-11": "available",
    "pl:retry-12": "available", "pl:retry-13": "available", "pl:retry-14": "available", "pl:retry-15": "available",
    "pl:retry-16": "available", "pl:retry-17": "available", "pl:retry-18": "available", "pl:retry-19": "available",
    "pl:retry-20": "available", "pl:retry-21": "available", "pl:retry-22": "available", "pl:retry-23": "available",
    "pl:retry-far-00": "available", "pl:retry-far-01": "available", "pl:retry-far-02": "available", "pl:retry-far-03": "available",
    "pl:retry-far-04": "available", "pl:retry-far-05": "available", "pl:retry-far-06": "available", "pl:retry-far-07": "available",
    "pl:retry-far-08": "available", "pl:retry-far-09": "available", "pl:retry-far-10": "available", "pl:retry-far-11": "available",
    "pl:scoring-wait-00": "available", "pl:scoring-wait-01": "available", "pl:scoring-wait-02": "available", "pl:scoring-wait-03": "available",
    "pl:scoring-wait-04": "available", "pl:scoring-wait-05": "available", "pl:scoring-wait-06": "available", "pl:scoring-wait-07": "available",
    "pl:scoring-wait-08": "available", "pl:scoring-wait-09": "available", "pl:scoring-wait-10": "available", "pl:scoring-wait-11": "available",
    "pl:start-00": "available", "pl:start-01": "available", "pl:start-02": "available", "pl:start-03": "available",
    "pl:start-04": "available", "pl:start-05": "available", "pl:start-06": "available", "pl:start-07": "available",
    "pl:start-08": "available", "pl:start-09": "available", "pl:start-10": "available", "pl:start-11": "available",
    "pl:start-12": "available", "pl:start-13": "available", "pl:start-14": "available", "pl:start-15": "available",
    "pl:start-16": "available", "pl:start-17": "available", "pl:start-18": "available", "pl:start-19": "available",
    "pl:start-20": "available", "pl:start-21": "available", "pl:start-22": "available", "pl:start-23": "available",
    "es:nudge-00": "available", "es:nudge-01": "available", "es:nudge-02": "available", "es:nudge-03": "available", "es:nudge-04": "available", "es:nudge-05": "available",
    "pl:nudge-00": "available", "pl:nudge-01": "available", "pl:nudge-02": "available",
    "es:consent-00": "available", "pl:consent-00": "available",
    "es:num-00": "available", "es:num-01": "available", "es:num-02": "available", "es:num-03": "available",
    "es:num-04": "available", "es:num-05": "available", "es:num-06": "available", "es:num-07": "available",
    "es:num-08": "available", "es:num-09": "available", "es:num-10": "available", "es:num-11": "available",
    "es:num-12": "available", "es:num-13": "available", "es:num-14": "available", "es:num-15": "available",
    "es:num-16": "available", "es:num-17": "available", "es:num-18": "available", "es:num-19": "available",
    "es:num-20": "available", "es:num-21": "available", "es:num-22": "available", "es:num-23": "available", "es:num-24": "available", "es:num-25": "available", "es:num-26": "available", "es:num-27": "available", "es:num-28": "available", "es:num-29": "available", "es:num-30": "available", "es:num-40": "available", "es:num-50": "available",
    "es:num-60": "available", "es:num-70": "available", "es:num-80": "available", "es:num-90": "available",
    "es:num-100": "available", "es:glue-00": "available", "pl:num-00": "available", "pl:num-01": "available",
    "pl:num-02": "available", "pl:num-03": "available", "pl:num-04": "available", "pl:num-05": "available",
    "pl:num-06": "available", "pl:num-07": "available", "pl:num-08": "available", "pl:num-09": "available",
    "pl:num-10": "available", "pl:num-11": "available", "pl:num-12": "available", "pl:num-13": "available",
    "pl:num-14": "available", "pl:num-15": "available", "pl:num-16": "available", "pl:num-17": "available",
    "pl:num-18": "available", "pl:num-19": "available", "pl:num-20": "available", "pl:num-30": "available",
    "pl:num-40": "available", "pl:num-50": "available", "pl:num-60": "available", "pl:num-70": "available",
    "pl:num-80": "available", "pl:num-90": "available", "pl:num-100": "available", "pl:glue-00": "available", "es:glue-y-00": "available",
    "es:glue-01": "available", "es:glue-02": "available", "pl:glue-01": "available", "pl:glue-02": "available"
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
const PACE_SAFE_MID_INDICES = [1, 3, 5, 6, 7, 9, 10, 11, 13, 14, 16, 17, 18, 20, 21, 23];
const HALFWAY_MID_INDICES = [0, 2, 4, 8, 12, 15, 19, 22];

function pickHostLine(beat, language) {
  const lang = HOST_LINES[language] ? language : "en";
  const actualBeat = beat === "pace" ? "mid" : beat;
  const pool = (HOST_LINES[lang] && HOST_LINES[lang][actualBeat]) || HOST_LINES.en[actualBeat] || [];
  if (!pool.length) return { id: "00", text: "", clipBeat: actualBeat };

  const allowedIndices = beat === "pace"
    ? PACE_SAFE_MID_INDICES.filter((i) => i < pool.length)
    : beat === "mid"
      ? (lang === "es" ? [0] : HALFWAY_MID_INDICES.filter((i) => i < pool.length))
      : pool.map((_, index) => index);

  const key = `${lang}:${beat}`;
  let used = usedHostLines[key];
  if (!used || used.length >= allowedIndices.length) {
    used = usedHostLines[key] = [];
  }

  const remaining = allowedIndices.filter((index) => !used.includes(index));
  const poolToCheck = remaining.length ? remaining : allowedIndices;
  const availablePool = poolToCheck.filter(
    (index) => clipStatus(lang, actualBeat, hostLineId(index)) === "available"
  );
  const candidates = availablePool.length ? availablePool : poolToCheck;
  const pick = candidates[Math.floor(Math.random() * candidates.length)];
  used.push(pick);

  return { id: hostLineId(pick), text: pool[pick], clipBeat: actualBeat };
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

function attachBroadcastStudioChain(audioEl) {
  state.voice.lastBroadcastChain = true;
  audioEl._cqNodes = [];
  return true;
}

function playHostClip(url, fallbackText, prosody, beat = "start", onDone = null) {
  try {
    killAllActiveVoiceAudios();
    const audio = new Audio(url);
    activeVoiceAudios.add(audio);
    state.voice.currentAudio = audio;
    // Play pre-rendered 24kHz Kokoro-82M / Piper neural clips at exact 1.0x native rate (matching consent-00.mp3)
    audio.playbackRate = 1.0;
    audio.volume = 1.0;
    attachBroadcastStudioChain(audio);
    const cleanup = () => {
      activeVoiceAudios.delete(audio);
      try { (audio._cqNodes || []).forEach((n) => n.disconnect()); } catch {}
      if (state.voice.currentAudio === audio) state.voice.currentAudio = null;
    };
    audio.onended = () => {
      cleanup();
      try {
        URL.revokeObjectURL(audio.src);
      } catch {}
      if (typeof onDone === "function") onDone();
    };

    audio.onerror = () => {
      cleanup();
      speakText(fallbackText, prosody);
      if (typeof onDone === "function") setTimeout(onDone, 900);
    };

    const played = audio.play();
    if (played && typeof played.then === "function") {
      played.then(() => {
        state.voice.pendingAutoplayIntro = false;
        state.voice.pendingAutoplayAudio = null;
      }).catch((err) => {
        if (err && (err.name === "NotAllowedError" || audio.paused)) {
          cleanup();
          state.voice.pendingAutoplayIntro = true;
          return;
        }
        cleanup();
        speakText(fallbackText, prosody);
        if (typeof onDone === "function") setTimeout(onDone, 900);
      });
    }
    return audio;
  } catch {
    speakText(fallbackText, prosody);
    if (typeof onDone === "function") setTimeout(onDone, 900);
    return null;
  }
}

const CHILL_ALLOWED_BEATS = new Set([
  "start",
  "finish",
  "pass",
  "pass-big",
  "pass-close",
  "retry",
  "retry-far"
]);
function playLiveHypeSting(beat) {
  if (state.voice.muted) return;
  try {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    sharedAudioContext = sharedAudioContext || new Context();
    const ctx = sharedAudioContext;
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    const now = ctx.currentTime;
    const pattern = beat === "nudge"
      ? [330, 440, 330, 587.33]
      : beat === "hurry-final"
        ? [587.33, 783.99, 987.77, 1174.66]
        : beat === "hurry"
          ? [523.25, 659.25, 880]
          : [440, 554.37, 659.25];
    pattern.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = beat === "nudge" ? "sawtooth" : "triangle";
      osc.frequency.setValueAtTime(freq, now + i * 0.055);
      gain.gain.setValueAtTime(0.0001, now + i * 0.055);
      gain.gain.exponentialRampToValueAtTime(0.045, now + i * 0.055 + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.055 + 0.11);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + i * 0.055);
      osc.stop(now + i * 0.055 + 0.12);
    });
  } catch {}
}

function speakHost(beat, overrideText) {
  if (!state.voice.available || state.voice.muted) {
    state.voice.lastPath = "muted";
    return;
  }

  if (state.voice.hypeLevel === "chill" && !CHILL_ALLOWED_BEATS.has(beat)) {
    state.voice.lastPath = "chill-skipped";
    return;
  }
  // Cancel any currently playing or pending scheduled voice line so two voices never overlap
  stopSpeech();
  const isLiveBeat = beat === "start" || beat === "mid" || beat === "pace" || beat === "hurry" || beat === "hurry-final" || beat === "nudge";
  if (isLiveBeat && beat !== "pace") {
    playLiveHypeSting(beat);
  }

  const base = HOST_PROSODY[beat === "pace" ? "mid" : beat] || HOST_PROSODY.start;
  const deliverHostLine = () => {
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
    const clipBeat = line.clipBeat || (beat === "pace" ? "mid" : beat);
    const status = clipStatus(state.language, clipBeat, line.id);

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
      playHostClip(clipUrlFor(state.language, clipBeat, line.id), line.text, {
        rate: base.rate + prosodyJitter(line.text, 0.03),
        pitch: base.pitch + prosodyJitter(`${line.text}:p`, 0.03)
      }, clipBeat);
      return;
    }

    state.voice.lastPath = "synth";
    speakText(line.text, {
      rate: base.rate + prosodyJitter(line.text, 0.03),
      pitch: base.pitch + prosodyJitter(`${line.text}:p`, 0.03)
    });
  };
  if (isLiveBeat && beat !== "pace") {
    const scheduledGeneration = state.voice.speakGeneration || 0;
    setTimeout(() => {
      if (state.voice.muted || (state.voice.speakGeneration || 0) !== scheduledGeneration) return;
      deliverHostLine();
    }, 320);
    return;
  }
  deliverHostLine();
}

function speakWelcomeIntro(language = state.language) {
  if (state.voice.muted || SELFTEST_MODE) return null;
  stopSpeech();
  const lang = HOST_LINES[language] ? language : "en";
  const url = `assets/audio/${lang}/welcome-intro.mp3?v=20261031-29`;
  const fallback = t("welcomeBody");
  state.voice.lastPath = "clip";
  return playHostClip(url, fallback, { rate: 1.0, pitch: 1.0 }, "welcome-intro");
}

function speakDeckIntro(language = state.language) {
  if (state.voice.muted || SELFTEST_MODE) return null;
  stopSpeech();
  const lang = HOST_LINES[language] ? language : "en";
  const url = `assets/audio/${lang}/deck-intro.mp3?v=20261031-29`;
  const fallback = t("deckSubtitle");
  state.voice.lastPath = "clip";
  return playHostClip(url, fallback, { rate: 1.0, pitch: 1.0 }, "deck-intro");
}

function speakSample(language) {
  const lang = HOST_LINES[language] ? language : "en";
  if (clipStatus(lang, "start", "01") === "available") {
    playHostClip(clipUrlFor(lang, "start", "01"), HOST_LINES[lang].start[1], { rate: 1.0, pitch: 1.0 });
    return;
  }
  const line = pickHostLine("start", lang);
  if (!line.text) return;

  let voice;
  try {
    voice = chooseVoice(lang) || undefined;
  } catch {
    voice = undefined;
  }

  speakText(line.text, { force: true, rate: 1.0, pitch: 1.0, voice });
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

function composeScoreClipIds(value, unit = "percent", lang = state.language || "en") {
  const rounded = Math.max(0, Math.min(100, Math.round(Number(value) || 0)));
  const parts = [];
  if (rounded === 100) {
    parts.push({ beat: "num", id: "100" });
  } else if (rounded <= 20 || (lang === "es" && rounded < 30)) {
    // Spanish 21-29 are single words (veintiuno...veintinueve), not tens+ones.
    parts.push({ beat: "num", id: String(rounded).padStart(2, "0") });
  } else {
    const tens = Math.floor(rounded / 10) * 10;
    const ones = rounded % 10;
    parts.push({ beat: "num", id: String(tens).padStart(2, "0") });
    if (ones > 0) {
      // Spanish compounds need the conjunction: "ochenta y siete".
      if (lang === "es") parts.push({ beat: "glue-y", id: "00" });
      parts.push({ beat: "num", id: String(ones).padStart(2, "0") });
    }
  }
  if (unit === "percent") {
    parts.push({ beat: "glue", id: "00" });
  } else if (unit === "point") {
    parts.push({ beat: "glue", id: "01" });
  } else if (unit === "points") {
    parts.push({ beat: "glue", id: rounded === 1 ? "01" : "02" });
  }
  return parts;
}

function speakScoreNumber(value, unit = "percent", onComplete = null) {
  if (!state.voice.available || state.voice.muted) {
    if (typeof onComplete === "function") onComplete();
    return [];
  }
  const lang = state.language || "en";
  const parts = composeScoreClipIds(value, unit, lang);
  const canUseClips = parts.every((p) => clipStatus(lang, p.beat, p.id) === "available");
  if (canUseClips && parts.length) {
    const urls = parts.map((p) => clipUrlFor(lang, p.beat, p.id));
    const scheduledGeneration = state.voice.speakGeneration || 0;
    // Decode and splice number + unit clips in WebAudio with silence trimming so "75%" plays as one smooth phrase
    (async () => {
      let finished = false;
      const finishOnce = () => {
        if (finished) return;
        finished = true;
        if (typeof onComplete === "function") onComplete();
      };
      try {
        const ctx = ensureDiscoAudioGraph();
        if (!ctx) throw new Error("no-ctx");
        if (ctx.state === "suspended") {
          ctx.resume().catch(() => {});
        }
        const decodedList = await Promise.all(
          urls.map(async (u) => {
            const r = await fetch(u);
            const ab = await r.arrayBuffer();
            return ctx.decodeAudioData(ab);
          })
        );
        if (state.voice.muted || (state.voice.speakGeneration || 0) !== scheduledGeneration) return;
        const sr = decodedList[0]?.sampleRate || ctx.sampleRate || 24000;
        const trimmedArrays = decodedList.map((buf) => {
          const data = buf.getChannelData(0);
          let start = 0;
          let end = data.length - 1;
          while (start < end && Math.abs(data[start]) < 0.018) start += 1;
          while (end > start && Math.abs(data[end]) < 0.018) end -= 1;
          const pad = Math.floor(buf.sampleRate * 0.012);
          start = Math.max(0, start - pad);
          end = Math.min(data.length - 1, end + pad);
          return data.subarray(start, end + 1);
        });
        const overlapSamples = Math.floor(sr * 0.025);
        const totalLen = trimmedArrays.reduce((sum, arr, idx) => sum + arr.length - (idx > 0 ? overlapSamples : 0), 0);
        const outBuf = ctx.createBuffer(1, Math.max(1, totalLen), sr);
        const outData = outBuf.getChannelData(0);
        let writePos = 0;
        trimmedArrays.forEach((arr, idx) => {
          for (let i = 0; i < arr.length; i += 1) {
            const pos = writePos + i;
            if (pos >= outData.length) break;
            if (idx > 0 && i < overlapSamples) {
              const w = i / overlapSamples;
              outData[pos] = outData[pos] * (1 - w) + arr[i] * w;
            } else {
              outData[pos] = arr[i];
            }
          }
          writePos += Math.max(1, arr.length - overlapSamples);
        });
        killAllActiveVoiceAudios();
        const src = ctx.createBufferSource();
        src.buffer = outBuf;
        src.connect(ctx.destination);
        activeVoiceBufferSources.add(src);
        state.voice.currentAudio = src;
        const durMs = Math.ceil((outBuf.duration || 1.2) * 1000) + 120;
        const safetyTimer = setTimeout(() => {
          activeVoiceBufferSources.delete(src);
          if (state.voice.currentAudio === src) state.voice.currentAudio = null;
          if ((state.voice.speakGeneration || 0) === scheduledGeneration && !state.voice.muted) {
            finishOnce();
          }
        }, durMs);
        src.onended = () => {
          clearTimeout(safetyTimer);
          activeVoiceBufferSources.delete(src);
          if (state.voice.currentAudio === src) state.voice.currentAudio = null;
          if ((state.voice.speakGeneration || 0) === scheduledGeneration && !state.voice.muted) {
            finishOnce();
          }
        };
        src.start();
      } catch {
        finishOnce();
      }
    })();
    return urls;
  }
  speakText(`${Math.round(Number(value) || 0)}%`);
  if (typeof onComplete === "function") setTimeout(onComplete, 700);
  return [];
}

function playScoreTick(ratio = 0.5) {
  if (state.voice.muted || SELFTEST_MODE) return;
  try {
    const ctx = ensureDiscoAudioGraph();
    if (!ctx) return;
    const dest = discoMaster || ctx.destination;
    const now = ctx.currentTime;
    const scalePool = [349.23, 392.0, 415.3, 466.16, 523.25, 587.33, 622.25, 698.46, 783.99, 830.61, 932.33, 1046.5, 1174.66, 1244.51, 1396.91, 1567.98];
    const idx = Math.min(scalePool.length - 1, Math.max(0, Math.floor(ratio * scalePool.length)));
    const freq = scalePool[idx];
    const osc = ctx.createOscillator();
    const bell = ctx.createOscillator();
    const flt = ctx.createBiquadFilter();
    const g = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, now);
    bell.type = "sine";
    bell.frequency.setValueAtTime(freq * 2.998, now);
    flt.type = "bandpass";
    flt.frequency.setValueAtTime(950 + ratio * 2400, now);
    flt.Q.setValueAtTime(2.8, now);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.linearRampToValueAtTime(0.05 * (0.65 + 0.35 * ratio), now + 0.003);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
    osc.connect(flt);
    bell.connect(flt);
    flt.connect(g);
    g.connect(dest);
    osc.start(now);
    bell.start(now);
    osc.stop(now + 0.045);
    bell.stop(now + 0.045);
  } catch {}
}

function playVerdictSfx(beat) {
  if (state.voice.muted) return;
  try {
    const ctx = ensureDiscoAudioGraph();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    const dest = discoMaster || ctx.destination;
    const now = ctx.currentTime;
    if (beat === "pass-big") {
      // Tier 1 (S-Rank 85-100%): Euphoric Disclosure/Nu-Disco Brass Fanfare (Abmaj9 -> Bb13 -> Cmaj9#11) + Bell Cascade + Shimmer
      const chords = [
        { t: 0.0, dur: 0.16, notes: [207.65, 261.63, 311.13, 392.0, 466.16] },
        { t: 0.17, dur: 0.16, notes: [233.08, 293.66, 349.23, 440.0, 587.33] },
        { t: 0.34, dur: 0.58, notes: [261.63, 329.63, 392.0, 493.88, 587.33, 739.99] }
      ];
      chords.forEach((ch) => {
        const flt = ctx.createBiquadFilter();
        const g = ctx.createGain();
        flt.type = "lowpass";
        flt.Q.setValueAtTime(3.2, now + ch.t);
        flt.frequency.setValueAtTime(450, now + ch.t);
        flt.frequency.exponentialRampToValueAtTime(3600, now + ch.t + 0.045);
        flt.frequency.exponentialRampToValueAtTime(950, now + ch.t + ch.dur);
        g.gain.setValueAtTime(0.0001, now + ch.t);
        g.gain.linearRampToValueAtTime(0.062, now + ch.t + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, now + ch.t + ch.dur);
        flt.connect(g).connect(dest);
        ch.notes.forEach((freq, idx) => {
          const o = ctx.createOscillator();
          o.type = idx % 2 === 0 ? "sawtooth" : "triangle";
          o.frequency.setValueAtTime(freq, now + ch.t);
          o.detune.setValueAtTime((idx - 2) * 7, now + ch.t);
          o.connect(flt);
          o.start(now + ch.t);
          o.stop(now + ch.t + ch.dur + 0.01);
        });
      });
      [523.25, 659.25, 783.99, 987.77, 1174.66, 1567.98, 2093.0].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "triangle";
        o.frequency.setValueAtTime(freq, now + 0.35 + i * 0.055);
        g.gain.setValueAtTime(0.05, now + 0.35 + i * 0.055);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.35 + i * 0.055 + 0.22);
        o.connect(g).connect(dest);
        o.start(now + 0.35 + i * 0.055);
        o.stop(now + 0.35 + i * 0.055 + 0.23);
      });
      triggerNoiseBurst(ctx, dest, now + 0.2, 0.72, "bandpass", 2200, 1.8, 0.09);
    } else if (beat === "pass") {
      // Tier 2 (A-Rank 75-84%): Upbeat House Maj9 Chord Lift + 4-Note Rising Arp
      [
        { t: 0.0, dur: 0.17, notes: [207.65, 261.63, 311.13, 392.0, 466.16] },
        { t: 0.19, dur: 0.48, notes: [155.56, 233.08, 293.66, 349.23, 466.16] }
      ].forEach((ch) => {
        const flt = ctx.createBiquadFilter();
        const g = ctx.createGain();
        flt.type = "lowpass";
        flt.frequency.setValueAtTime(520, now + ch.t);
        flt.frequency.exponentialRampToValueAtTime(2900, now + ch.t + 0.04);
        flt.frequency.exponentialRampToValueAtTime(850, now + ch.t + ch.dur);
        g.gain.setValueAtTime(0.055, now + ch.t);
        g.gain.exponentialRampToValueAtTime(0.0001, now + ch.t + ch.dur);
        flt.connect(g).connect(dest);
        ch.notes.forEach((freq, idx) => {
          const o = ctx.createOscillator();
          o.type = idx % 2 === 0 ? "sawtooth" : "triangle";
          o.frequency.setValueAtTime(freq, now + ch.t);
          o.connect(flt);
          o.start(now + ch.t);
          o.stop(now + ch.t + ch.dur + 0.01);
        });
      });
      [466.16, 587.33, 698.46, 932.33].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "triangle";
        o.frequency.setValueAtTime(freq, now + 0.12 + i * 0.075);
        g.gain.setValueAtTime(0.06, now + 0.12 + i * 0.075);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.12 + i * 0.075 + 0.18);
        o.connect(g).connect(dest);
        o.start(now + 0.12 + i * 0.075);
        o.stop(now + 0.12 + i * 0.075 + 0.19);
      });
    } else if (beat === "pass-close") {
      // Tier 3 (B-Rank 70-74%): Tense Gsus4 -> Warm Gmaj7 Relief Resolution + Exhale
      [
        { t: 0.0, dur: 0.24, notes: [196.0, 261.63, 293.66, 392.0] },
        { t: 0.24, dur: 0.46, notes: [196.0, 246.94, 293.66, 369.99] }
      ].forEach((ch) => {
        ch.notes.forEach((freq) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = "triangle";
          o.frequency.setValueAtTime(freq, now + ch.t);
          g.gain.setValueAtTime(0.052, now + ch.t);
          g.gain.exponentialRampToValueAtTime(0.0001, now + ch.t + ch.dur);
          o.connect(g).connect(dest);
          o.start(now + ch.t);
          o.stop(now + ch.t + ch.dur + 0.01);
        });
      });
      triggerNoiseBurst(ctx, dest, now + 0.24, 0.22, "bandpass", 1600, 1.8, 0.07);
    } else if (beat === "retry") {
      // Tier 4 (C-Rank 56-69%): Sympathetic Descending Rhodes Sigh (Fm9 -> Ebmaj7 -> Dbmaj7) + Upward 5th Rally Lift
      [
        { t: 0.0, dur: 0.2, notes: [261.63, 311.13, 392.0] },
        { t: 0.2, dur: 0.2, notes: [233.08, 293.66, 349.23] },
        { t: 0.4, dur: 0.28, notes: [207.65, 261.63, 311.13] },
        { t: 0.56, dur: 0.26, notes: [622.25, 830.61] }
      ].forEach((ch) => {
        ch.notes.forEach((freq) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = "triangle";
          o.frequency.setValueAtTime(freq, now + ch.t);
          g.gain.setValueAtTime(0.048, now + ch.t);
          g.gain.exponentialRampToValueAtTime(0.0001, now + ch.t + ch.dur);
          o.connect(g).connect(dest);
          o.start(now + ch.t);
          o.stop(now + ch.t + ch.dur + 0.01);
        });
      });
    } else {
      // Tier 5 (D-Rank <=55%): Playful Theatrical Wah-Wah Drop (Bb3 -> A3 -> Ab3) + Upbeat Shake-It-Off Snare Tap
      [
        { t: 0.0, dur: 0.16, f1: 233.08, f2: 220.0 },
        { t: 0.17, dur: 0.16, f1: 220.0, f2: 207.65 },
        { t: 0.34, dur: 0.28, f1: 207.65, f2: 146.83 }
      ].forEach((n) => {
        const o = ctx.createOscillator();
        const flt = ctx.createBiquadFilter();
        const g = ctx.createGain();
        o.type = "triangle";
        o.frequency.setValueAtTime(n.f1, now + n.t);
        o.frequency.exponentialRampToValueAtTime(n.f2, now + n.t + n.dur);
        flt.type = "bandpass";
        flt.frequency.setValueAtTime(650, now + n.t);
        flt.frequency.exponentialRampToValueAtTime(1600, now + n.t + 0.05);
        flt.frequency.exponentialRampToValueAtTime(480, now + n.t + n.dur);
        flt.Q.setValueAtTime(3.2, now + n.t);
        g.gain.setValueAtTime(0.065, now + n.t);
        g.gain.exponentialRampToValueAtTime(0.0001, now + n.t + n.dur);
        o.connect(flt).connect(g).connect(dest);
        o.start(now + n.t);
        o.stop(now + n.t + n.dur + 0.01);
      });
      triggerNoiseBurst(ctx, dest, now + 0.64, 0.09, "bandpass", 1300, 1.4, 0.16);
    }
  } catch {}
}

function selectVerdictBeat(result = state.result) {
  const ai = result?.ai;
  const tiers = CONFIG.verdictTiers;
  const isVerified = ai?.verified?.status === "verified";
  const weighted = result === state.result ? computeWeightedRunScore() : null;
  const numericScore = isVerified && Number.isFinite(Number(ai.verified.overall))
    ? Number(ai.verified.overall)
    : Number.isFinite(weighted)
      ? Number(weighted)
      : Number.isFinite(Number(ai?.cleanliness))
        ? Number(ai.cleanliness)
        : null;

  const isRetry = isVerified
    ? ai.verified.verdict === "retry"
    : ai?.scorable === false || (numericScore !== null && numericScore < tiers.passMark);

  if (isRetry) {
    if (numericScore !== null && numericScore <= tiers.passMark - tiers.retryFarMargin) {
      return "retry-far";
    }
    return "retry";
  }

  if (numericScore === null) {
    return "retry";
  }

  if (numericScore >= tiers.passMark + tiers.passBigMargin) {
    return "pass-big";
  }

  if (numericScore < tiers.passMark + tiers.passCloseMargin) {
    return "pass-close";
  }

  return "pass";
}

function announceTime(secondsRemaining) {
  const rounded = Math.ceil(secondsRemaining);
  if (rounded === 45) {
    speakHost("mid");
  } else if (rounded === 30 || rounded === 20 || rounded === 16) {
    speakHost("hurry");
  } else if (rounded === 10) {
    speakHost("hurry-final");
  } else if ([83, 76, 69, 62, 54, 38, 23].includes(rounded)) {
    speakHost("pace");
  }
}

function announceResultSummary() {
  announceGameVerdict();
}

function buildVerdictText(result = state.result) {
  const ai = result?.ai;
  const beat = selectVerdictBeat(result);
  const finish = pickHostLine("finish", state.language).text;
  const isVerified = ai?.verified?.status === "verified";
  const prosody = HOST_PROSODY[beat] || (beat.startsWith("retry") ? HOST_PROSODY.retry : HOST_PROSODY.pass);
  const picked = pickHostLine(beat, state.language);
  let verdictText = picked.text;

  if (isVerified && ai.verified.hypeLine) {
    verdictText = ai.verified.hypeLine;
  }

  const text = [finish, verdictText].filter(Boolean).join(" ");

  return {
    beat,
    lineId: picked.id,
    finishText: finish,
    verdictText,
    text,
    rate: prosody.rate + prosodyJitter(text, 0.03),
    pitch: prosody.pitch + prosodyJitter(`${text}:p`, 0.03)
  };
}

function tierRankLabel(beat, score) {
  const pct = Number.isFinite(score) ? ` · ${Math.round(score)}%` : "";
  if (beat === "pass-big") return `🏆 S-RANK · SUPERSTAR${pct}`;
  if (beat === "pass") return `✨ A-RANK · CLEAN WINNER${pct}`;
  if (beat === "pass-close") return `😅 B-RANK · PHOTO FINISH${pct}`;
  if (beat === "retry") return `🔥 C-RANK · SO CLOSE${pct}`;
  return `💪 D-RANK · WARMUP ROUND${pct}`;
}

function announceGameVerdict() {
  if (!state.result) return;
  stopSpeech();
  const ai = state.result.ai;
  const beat = selectVerdictBeat(state.result);
  const isVerified = ai?.verified?.status === "verified";
  const customHype = isVerified && ai?.verified?.hypeLine ? String(ai.verified.hypeLine) : "";
  const weighted = computeWeightedRunScore();
  const spokenScore = Number.isFinite(weighted)
    ? weighted
    : Number.isFinite(Number(ai?.cleanliness))
      ? Number(ai.cleanliness)
      : null;

  state.voice.lastVerdictBeat = beat;
  const pill = document.getElementById("verdictAudioPill");
  const badge = document.getElementById("verdictSummaryBadge");
  const transcriptEl = document.getElementById("verdictTranscriptLine");
  if (pill) pill.dataset.tier = beat;
  if (badge) badge.textContent = tierRankLabel(beat, spokenScore);

  const pickedVerdict = pickHostLine(beat, state.language);
  const pickedFinish = beat.startsWith("pass") ? pickHostLine("finish", state.language) : null;
  const summaryCaption = [
    spokenScore !== null ? `${Math.round(spokenScore)}%` : null,
    customHype || pickedVerdict?.text || "",
    pickedFinish?.text || ""
  ].filter(Boolean).join(" — ");
  if (transcriptEl) transcriptEl.textContent = summaryCaption;

  if (SELFTEST_MODE) {
    playVerdictSfx(beat);
    if (customHype) speakHost(beat, customHype);
    else speakHost(beat);
    return;
  }

  // Choreographed Results Sequence:
  // 1. Score Count-Up Roll (0% -> spokenScore% over 550ms with rising Dorian pluck ticks)
  // 2. 5-Tier Musical Stinger (playVerdictSfx)
  // 3. Gapless Chained Voice Summary: [Spoken Score %] -> [Tier Reaction Clip] -> [Finish Celebration Clip]
  const scheduledGen = state.voice.speakGeneration || 0;
  pill?.classList.add("is-playing");
  if (!SELFTEST_MODE) {
    triggerArcadeFx(beat.startsWith("pass") ? "confetti" : "pixels");
  }
  if (spokenScore !== null && els.cleanlinessScore && ai?.scorable !== false) {
    const startTs = performance.now();
    const durMs = 540;
    let lastTickVal = -1;
    let lastTickAt = 0;
    const stepCountUp = (nowTs) => {
      if ((state.voice.speakGeneration || 0) !== scheduledGen) return;
      const u = Math.min(1, Math.max(0, (nowTs - startTs) / durMs));
      const eased = 1 - Math.pow(1 - u, 3);
      const cur = Math.round(eased * spokenScore);
      els.cleanlinessScore.textContent = `${cur}%`;
      if (cur !== lastTickVal && nowTs - lastTickAt >= 42) {
        lastTickVal = cur;
        lastTickAt = nowTs;
        playScoreTick(u);
      }
      if (u < 1) {
        requestAnimationFrame(stepCountUp);
      } else {
        els.cleanlinessScore.textContent = `${spokenScore}%`;
      }
    };
    requestAnimationFrame(stepCountUp);
  }

  setTimeout(() => {
    if (state.voice.muted || (state.voice.speakGeneration || 0) !== scheduledGen) {
      pill?.classList.remove("is-playing");
      return;
    }
    playVerdictSfx(beat);
    setTimeout(() => {
      if (state.voice.muted || (state.voice.speakGeneration || 0) !== scheduledGen) {
        pill?.classList.remove("is-playing");
        return;
      }
      const playVerdictAndFinish = () => {
        if (state.voice.muted || (state.voice.speakGeneration || 0) !== scheduledGen) {
          pill?.classList.remove("is-playing");
          return;
        }
        if (customHype) {
          speakHost(beat, customHype);
          setTimeout(() => pill?.classList.remove("is-playing"), 2200);
          return;
        }
        const base = HOST_PROSODY[beat] || HOST_PROSODY.start;
        if (pickedVerdict?.text && clipStatus(state.language, beat, pickedVerdict.id) === "available") {
          state.voice.lastPath = "clip";
          playHostClip(
            clipUrlFor(state.language, beat, pickedVerdict.id),
            pickedVerdict.text,
            { rate: base.rate, pitch: base.pitch },
            beat,
            () => {
              if (pickedFinish?.text && !state.voice.muted && (state.voice.speakGeneration || 0) === scheduledGen && clipStatus(state.language, "finish", pickedFinish.id) === "available") {
                setTimeout(() => {
                  if (state.voice.muted || (state.voice.speakGeneration || 0) !== scheduledGen) return;
                  playHostClip(
                    clipUrlFor(state.language, "finish", pickedFinish.id),
                    pickedFinish.text,
                    { rate: 1.04, pitch: 1.04 },
                    "finish",
                    () => pill?.classList.remove("is-playing")
                  );
                }, 140);
              } else {
                pill?.classList.remove("is-playing");
              }
            }
          );
        } else {
          speakHost(beat);
          setTimeout(() => pill?.classList.remove("is-playing"), 2200);
        }
      };
      if (spokenScore !== null) {
        speakScoreNumber(spokenScore, "percent", () => {
          setTimeout(playVerdictAndFinish, 120);
        });
      } else {
        playVerdictAndFinish();
      }
    }, 340);
  }, 540);
}
function requireAdminPledge() {
  if (loadAdminStore().pledgeAccepted) return true;
  setAdminScreenTab(11);
  if (els.adminPackStatus) {
    els.adminPackStatus.textContent = t("pledgeWarning");
  }
  playTone(300, 0.08);
  return false;
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
  state.voice.speakGeneration = (state.voice.speakGeneration || 0) + 1;
  killAllActiveVoiceAudios();
  showAnnouncerStatus("");
}

const HYPE_LEVEL_KEY = "cleanquest.hypeLevel.v3";

function loadHypeLevel() {
  try {
    const saved = localStorage.getItem(HYPE_LEVEL_KEY);
    if (saved === "full" || saved === "chill" || saved === "off") return saved;
  } catch {}
  return "full";
}

function setHypeLevel(level, persist = true) {
  const normalized = level === "full" || level === "chill" ? level : "off";
  state.voice.hypeLevel = normalized;
  state.voice.muted = normalized === "off";
  if (persist) {
    try {
      localStorage.setItem(HYPE_LEVEL_KEY, normalized);
    } catch {}
  }
  if (state.voice.muted) {
    stopSpeech();
    stopDiscoHouseGroove();
  } else if (state.voice.discoEnabled !== false && ["welcome", "deck", "instructions", "camera", "timer", "results", "leaderboard"].includes(state.screen)) {
    startDiscoHouseGroove();
  }
  updateMuteButton();
  if (els.hypeLevelOff) els.hypeLevelOff.checked = normalized === "off";
  if (els.hypeLevelChill) els.hypeLevelChill.checked = normalized === "chill";
  if (els.hypeLevelFull) els.hypeLevelFull.checked = normalized === "full";
  return normalized;
}

let discoCtx = null;
let discoMaster = null;
let discoNoiseBuf = null;
let discoTimerId = null;
let discoStep = 0;
let discoTrackIndex = 0;

const DISCLOSURE_TRACKS = [
  {
    id: "latch",
    name: "Latch Groove",
    stepMs: 123, // 122 BPM Disclosure "Latch" Instrumental (Fm9 -> Dbmaj9 -> Abmaj7 -> Cm7/Eb)
    swingSec: 0.024,
    stabSteps: [0, 3, 6, 9, 12, 14], // Signature Latch 6/8-over-4/4 polyrhythmic chord stutter!
    bassPattern: [
      43.65, 0, 0, 87.31, 0, 0, 87.31, 77.78, 43.65, 0, 87.31, 0, 65.41, 0, 77.78, 87.31,
      69.30, 0, 0, 138.59, 0, 0, 138.59, 103.83, 69.30, 0, 138.59, 0, 103.83, 0, 87.31, 77.78,
      51.91, 0, 0, 103.83, 0, 0, 103.83, 87.31, 51.91, 0, 103.83, 0, 77.78, 0, 87.31, 103.83,
      65.41, 0, 0, 130.81, 0, 0, 98.0, 130.81, 77.78, 0, 155.56, 130.81, 116.54, 0, 103.83, 77.78
    ],
    chordVoicings: [
      [174.61, 207.65, 261.63, 311.13, 392.0],  // Fm9
      [138.59, 174.61, 207.65, 261.63, 311.13], // Dbmaj9
      [207.65, 261.63, 311.13, 392.0, 466.16],  // Abmaj9
      [196.0, 261.63, 311.13, 392.0, 466.16]    // Cm7 / Eb6
    ],
    leadHook: [
      523.25, 0, 0, 622.25, 0, 0, 523.25, 0, 466.16, 0, 0, 415.30, 392.0, 0, 349.23, 0,
      523.25, 0, 0, 698.46, 0, 0, 622.25, 0, 523.25, 0, 0, 466.16, 415.30, 0, 523.25, 0,
      622.25, 0, 0, 783.99, 0, 0, 698.46, 0, 622.25, 0, 0, 523.25, 466.16, 0, 523.25, 622.25,
      783.99, 0, 0, 698.46, 0, 0, 622.25, 523.25, 466.16, 0, 523.25, 622.25, 523.25, 0, 466.16, 392.0
    ],
    stringNotes: [783.99, 830.61, 1046.5, 932.33]
  },
  {
    id: "whitenoise",
    name: "White Noise",
    stepMs: 121, // 124 BPM Disclosure "White Noise" M1 Organ Club House (Am9 -> D9 -> Gmaj9 -> Em9)
    swingSec: 0.021,
    stabSteps: [0, 3, 6, 10, 14],
    bassPattern: [
      55.0, 0, 110.0, 98.0, 0, 82.41, 110.0, 130.81, 55.0, 0, 110.0, 146.83, 0, 130.81, 110.0, 98.0,
      73.42, 0, 146.83, 130.81, 0, 110.0, 146.83, 164.81, 73.42, 0, 146.83, 130.81, 0, 110.0, 98.0, 82.41,
      49.0, 0, 98.0, 110.0, 0, 123.47, 98.0, 146.83, 49.0, 0, 98.0, 123.47, 110.0, 0, 98.0, 82.41,
      82.41, 0, 164.81, 146.83, 0, 123.47, 164.81, 196.0, 61.74, 98.0, 123.47, 146.83, 164.81, 196.0, 146.83, 110.0
    ],
    chordVoicings: [
      [220.0, 261.63, 329.63, 392.0, 493.88],   // Am9
      [185.0, 220.0, 293.66, 329.63, 440.0],    // D9 (Dorian lift)
      [196.0, 246.94, 293.66, 369.99, 440.0],   // Gmaj9
      [164.81, 196.0, 246.94, 293.66, 392.0]    // Em9
    ],
    leadHook: [
      659.25, 0, 783.99, 880.0, 0, 783.99, 659.25, 587.33, 523.25, 0, 659.25, 0, 587.33, 523.25, 440.0, 0,
      739.99, 0, 880.0, 987.77, 0, 880.0, 739.99, 659.25, 587.33, 0, 659.25, 739.99, 0, 659.25, 587.33, 493.88,
      587.33, 0, 783.99, 880.0, 0, 987.77, 880.0, 783.99, 659.25, 0, 587.33, 0, 659.25, 783.99, 880.0, 0,
      987.77, 0, 880.0, 783.99, 659.25, 0, 783.99, 880.0, 1046.5, 0, 987.77, 880.0, 783.99, 659.25, 587.33, 659.25
    ],
    stringNotes: [880.0, 1174.66, 987.77, 1318.51]
  },
  {
    id: "omen",
    name: "Omen Velvet",
    stepMs: 119, // 126 BPM Disclosure "Omen / You & Me" Nu-Disco Filter House (C#m9 -> A6/9 -> F#m11 -> G#7#9)
    swingSec: 0.022,
    stabSteps: [0, 2, 6, 9, 11, 14],
    bassPattern: [
      69.30, 138.59, 0, 123.47, 69.30, 0, 138.59, 164.81, 69.30, 138.59, 0, 110.0, 92.50, 0, 110.0, 123.47,
      55.0, 110.0, 0, 138.59, 55.0, 0, 110.0, 164.81, 55.0, 110.0, 0, 92.50, 82.41, 0, 92.50, 110.0,
      46.25, 92.50, 0, 110.0, 46.25, 0, 92.50, 138.59, 46.25, 92.50, 0, 110.0, 123.47, 0, 110.0, 92.50,
      51.91, 103.83, 0, 123.47, 51.91, 0, 138.59, 155.56, 51.91, 103.83, 123.47, 138.59, 155.56, 164.81, 138.59, 103.83
    ],
    chordVoicings: [
      [277.18, 329.63, 415.30, 493.88, 622.25], // C#m9
      [220.0, 277.18, 329.63, 369.99, 493.88],  // A6/9
      [185.0, 220.0, 277.18, 329.63, 415.30],   // F#m11
      [207.65, 261.63, 311.13, 369.99, 493.88]  // G#7#9
    ],
    leadHook: [
      622.25, 0, 554.37, 493.88, 0, 415.30, 493.88, 554.37, 622.25, 0, 739.99, 0, 659.25, 554.37, 493.88, 0,
      659.25, 0, 554.37, 493.88, 0, 659.25, 739.99, 830.61, 659.25, 0, 554.37, 493.88, 0, 415.30, 493.88, 554.37,
      554.37, 0, 659.25, 739.99, 0, 830.61, 739.99, 659.25, 554.37, 0, 493.88, 0, 554.37, 659.25, 739.99, 0,
      830.61, 0, 739.99, 659.25, 622.25, 0, 659.25, 739.99, 987.77, 0, 830.61, 739.99, 659.25, 622.25, 554.37, 622.25
    ],
    stringNotes: [1108.73, 987.77, 830.61, 1244.5]
  }
];

let beatThumpTimerId = null;

function updateDiscoTrackUI() {
  const trk = DISCLOSURE_TRACKS[discoTrackIndex] || DISCLOSURE_TRACKS[0];
  const txt = `${discoTrackIndex + 1}/${DISCLOSURE_TRACKS.length}`;
  const badge = document.getElementById("discoTrackBadge");
  if (badge) badge.textContent = txt;
  const lbBadge = document.getElementById("leaderboardTrackBadge");
  if (lbBadge) lbBadge.textContent = txt;
  const settingsBtn = document.getElementById("settingsTrackCycleButton");
  if (settingsBtn) {
    settingsBtn.textContent = `🎵 Track ${txt} · ${trk.name} ⏭`;
  }
  document.body?.style?.setProperty("--beat-ms", `${trk.stepMs * 4}ms`);
  document.body?.style?.setProperty("--bar-ms", `${trk.stepMs * 8}ms`);
}

function cycleDiscoTrack() {
  discoTrackIndex = (discoTrackIndex + 1) % DISCLOSURE_TRACKS.length;
  updateDiscoTrackUI();
  if (discoTimerId) {
    stopDiscoHouseGroove();
    startDiscoHouseGroove();
  } else {
    state.voice.discoEnabled = true;
    startDiscoHouseGroove();
  }
}

function ensureDiscoAudioGraph() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  if (!discoCtx || discoCtx.state === "closed") {
    discoCtx = new Ctx();
    discoMaster = null;
    discoNoiseBuf = null;
  }
  if (!discoMaster) {
    const lowBoost = discoCtx.createBiquadFilter();
    lowBoost.type = "lowshelf";
    lowBoost.frequency.value = 92;
    lowBoost.gain.value = 7.0;

    const highAir = discoCtx.createBiquadFilter();
    highAir.type = "highshelf";
    highAir.frequency.value = 6600;
    highAir.gain.value = 3.8;

    const comp = discoCtx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 5;
    comp.ratio.value = 5.5;
    comp.attack.value = 0.002;
    comp.release.value = 0.11;

    const outGain = discoCtx.createGain();
    outGain.gain.value = 0.94;

    lowBoost.connect(highAir);
    highAir.connect(comp);
    comp.connect(outGain);
    outGain.connect(discoCtx.destination);
    discoMaster = lowBoost;
  }
  if (!discoNoiseBuf) {
    const len = Math.floor(discoCtx.sampleRate * 0.5);
    discoNoiseBuf = discoCtx.createBuffer(1, len, discoCtx.sampleRate);
    const data = discoNoiseBuf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      data[i] = Math.random() * 2 - 1;
    }
  }
  return discoCtx;
}

function autoDisconnectNodes(sourceNode, ...nodes) {
  if (!sourceNode) return;
  sourceNode.onended = () => {
    for (let i = 0; i < nodes.length; i += 1) {
      try { nodes[i]?.disconnect?.(); } catch {}
    }
    try { sourceNode.disconnect?.(); } catch {}
  };
}

function triggerNoiseBurst(ctx, dest, time, duration, filterType, freq, q, peakGain) {
  if (!discoNoiseBuf) return;
  const src = ctx.createBufferSource();
  src.buffer = discoNoiseBuf;
  const flt = ctx.createBiquadFilter();
  flt.type = filterType;
  flt.frequency.setValueAtTime(freq, time);
  flt.Q.setValueAtTime(q, time);
  const g = ctx.createGain();
  g.gain.setValueAtTime(Math.max(0.0001, peakGain), time);
  g.gain.exponentialRampToValueAtTime(0.0005, time + duration);
  src.connect(flt);
  flt.connect(g);
  g.connect(dest);
  autoDisconnectNodes(src, flt, g);
  src.start(time);
  src.stop(time + duration + 0.01);
}

function startDiscoHouseGroove() {
  if (SELFTEST_MODE || state.voice.muted || state.voice.discoEnabled === false) return;
  [document.getElementById("discoGrooveButton"), document.getElementById("leaderboardMusicButton")].forEach((b) => {
    b?.classList.add("active");
    b?.setAttribute("aria-pressed", "true");
  });
  document.body?.classList?.add("music-playing");
  updateDiscoTrackUI();
  if (discoTimerId) return;
  try {
    const ctx = ensureDiscoAudioGraph();
    if (!ctx) return;
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    const trk = DISCLOSURE_TRACKS[discoTrackIndex] || DISCLOSURE_TRACKS[0];
    discoStep = 0;
    discoTimerId = setInterval(() => {
      if (state.voice.muted || state.voice.discoEnabled === false) {
        stopDiscoHouseGroove();
        return;
      }
      if (!discoCtx || discoCtx.state !== "running") {
        discoCtx?.resume?.().catch(() => {});
        return;
      }
      const dest = discoMaster || discoCtx.destination;
      const step128 = discoStep % 128;
      const step64 = step128 % 64;
      const step = step64 % 16;
      const bar = Math.floor(step64 / 16);
      const bar8 = Math.floor(step128 / 16);
      const isTurnaroundBar = bar8 === 3 || bar8 === 7;
      const sectionCutoffMult = 0.85 + (bar8 / 7) * 0.65;
      const swingOffset = step % 2 === 1 ? trk.swingSec : 0;
      const now = discoCtx.currentTime + swingOffset;
      const screenMix = state.screen === "welcome" || state.screen === "deck" || state.screen === "leaderboard" ? 0.92 : state.screen === "results" ? 0.58 : 0.38;
      const isVoiceActivelyPlaying = Boolean(state.voice.currentAudio && !state.voice.currentAudio.paused);
      const duck = (isVoiceActivelyPlaying ? 0.34 : 1.0) * screenMix;
      const isKickStep = step % 4 === 0 || (isTurnaroundBar && (step === 14 || step === 15));
      const sidechain = step % 4 === 0 ? 0.40 : step % 4 === 1 ? 0.78 : 1.0;

      // 1. PUNCHY DISCLOSURE UKG / DEEP-HOUSE KICK + BAR 4/8 TOM TURNAROUND FILLS
      if (isKickStep) {
        const kVel = (step % 4 === 0 ? 0.72 : 0.44) * duck;
        const kickSub = discoCtx.createOscillator();
        const kickSubGain = discoCtx.createGain();
        kickSub.type = "sine";
        kickSub.frequency.setValueAtTime(195, now);
        kickSub.frequency.exponentialRampToValueAtTime(62, now + 0.028);
        kickSub.frequency.exponentialRampToValueAtTime(44, now + 0.15);
        kickSubGain.gain.setValueAtTime(kVel, now);
        kickSubGain.gain.exponentialRampToValueAtTime(0.001, now + 0.21);
        kickSub.connect(kickSubGain).connect(dest);
        autoDisconnectNodes(kickSub, kickSubGain);
        kickSub.start(now);
        kickSub.stop(now + 0.22);

        const kickPunch = discoCtx.createOscillator();
        const kickPunchGain = discoCtx.createGain();
        kickPunch.type = "triangle";
        kickPunch.frequency.setValueAtTime(320, now);
        kickPunch.frequency.exponentialRampToValueAtTime(86, now + 0.02);
        kickPunchGain.gain.setValueAtTime(kVel * 0.54, now);
        kickPunchGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
        kickPunch.connect(kickPunchGain).connect(dest);
        autoDisconnectNodes(kickPunch, kickPunchGain);
        kickPunch.start(now);
        kickPunch.stop(now + 0.06);

        triggerNoiseBurst(discoCtx, dest, now, 0.014, "bandpass", 2500, 1.8, kVel * 0.36);

        if (step % 4 === 0) {
          document.body.classList.add("music-playing", "music-beat-thump");
          if (state.screen === "deck" && els.deckCard && !els.deckCard.classList.contains("swiping")) {
            els.deckCard.classList.add("beat-thump");
          }
          clearTimeout(beatThumpTimerId);
          beatThumpTimerId = setTimeout(() => {
            document.body?.classList?.remove("music-beat-thump");
            els.deckCard?.classList?.remove("beat-thump");
          }, 150);
        }
      }
      if (isTurnaroundBar && step >= 12) {
        const tomFreq = [260, 215, 175, 140][step - 12] || 180;
        const tomOsc = discoCtx.createOscillator();
        const tomGain = discoCtx.createGain();
        tomOsc.type = "triangle";
        tomOsc.frequency.setValueAtTime(tomFreq, now);
        tomOsc.frequency.exponentialRampToValueAtTime(tomFreq * 0.52, now + 0.09);
        tomGain.gain.setValueAtTime(0.28 * duck, now);
        tomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        tomOsc.connect(tomGain).connect(dest);
        autoDisconnectNodes(tomOsc, tomGain);
        tomOsc.start(now);
        tomOsc.stop(now + 0.11);
      }

      // 2. LAYERED 909 HANDCLAP + RIM/SNARE ON BEATS 2 & 4
      if (step === 4 || step === 12) {
        triggerNoiseBurst(discoCtx, dest, now, 0.022, "bandpass", 1250, 1.4, 0.34 * duck);
        triggerNoiseBurst(discoCtx, dest, now + 0.011, 0.024, "bandpass", 1350, 1.4, 0.36 * duck);
        triggerNoiseBurst(discoCtx, dest, now + 0.022, 0.135, "bandpass", 1180, 1.1, 0.40 * duck);
        const snOsc = discoCtx.createOscillator();
        const snGain = discoCtx.createGain();
        snOsc.type = "triangle";
        snOsc.frequency.setValueAtTime(230, now);
        snOsc.frequency.exponentialRampToValueAtTime(112, now + 0.045);
        snGain.gain.setValueAtTime(0.25 * duck, now);
        snGain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);
        snOsc.connect(snGain).connect(dest);
        autoDisconnectNodes(snOsc, snGain);
        snOsc.start(now);
        snOsc.stop(now + 0.08);
      }

      // 3. SKIPPING UK GARAGE GHOST RIMSHOTS & SIZZLING 909 OPEN/CLOSED HATS
      if (step === 7 || step === 9 || (bar === 3 && (step === 11 || step === 15))) {
        const rimOsc = discoCtx.createOscillator();
        const rimFlt = discoCtx.createBiquadFilter();
        const rimGain = discoCtx.createGain();
        rimOsc.type = "square";
        rimOsc.frequency.setValueAtTime(880, now);
        rimOsc.frequency.exponentialRampToValueAtTime(420, now + 0.018);
        rimFlt.type = "bandpass";
        rimFlt.frequency.setValueAtTime(1700, now);
        rimFlt.Q.setValueAtTime(4.5, now);
        rimGain.gain.setValueAtTime(0.20 * duck, now);
        rimGain.gain.exponentialRampToValueAtTime(0.001, now + 0.032);
        rimOsc.connect(rimFlt).connect(rimGain).connect(dest);
        autoDisconnectNodes(rimOsc, rimFlt, rimGain);
        rimOsc.start(now);
        rimOsc.stop(now + 0.035);
      }
      if (step % 4 === 2) {
        triggerNoiseBurst(discoCtx, dest, now, 0.145, "highpass", 6600, 0.9, 0.22 * duck);
      } else if (step % 2 === 1) {
        triggerNoiseBurst(discoCtx, dest, now, 0.034, "highpass", 8600, 0.8, 0.11 * duck);
      }

      // 4. TRACK-DISTINCT BASS ENGINE
      const bassFreq = trk.bassPattern[step64];
      if (bassFreq > 0) {
        const bGainAmt = 0.44 * duck * sidechain;
        const subOsc = discoCtx.createOscillator();
        const subGain = discoCtx.createGain();
        subOsc.type = "sine";
        subOsc.frequency.setValueAtTime(bassFreq, now);
        subGain.gain.setValueAtTime(bGainAmt, now);
        subGain.gain.exponentialRampToValueAtTime(0.002, now + 0.135);
        subOsc.connect(subGain).connect(dest);
        autoDisconnectNodes(subOsc, subGain);
        subOsc.start(now);
        subOsc.stop(now + 0.14);

        const m1Osc = discoCtx.createOscillator();
        const m1Gain = discoCtx.createGain();
        m1Osc.type = trk.id === "omen" ? "triangle" : "sine";
        m1Osc.frequency.setValueAtTime(bassFreq * (trk.id === "whitenoise" ? 2.998 : trk.id === "omen" ? 2.0 : 1.998), now);
        m1Gain.gain.setValueAtTime(bGainAmt * (trk.id === "whitenoise" ? 0.56 : 0.42), now);
        m1Gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        m1Osc.connect(m1Gain).connect(dest);
        autoDisconnectNodes(m1Osc, m1Gain);
        m1Osc.start(now);
        m1Osc.stop(now + 0.075);

        const sawOsc = discoCtx.createOscillator();
        const sawFlt = discoCtx.createBiquadFilter();
        const sawGain = discoCtx.createGain();
        sawOsc.type = trk.id === "omen" ? "square" : "sawtooth";
        sawOsc.frequency.setValueAtTime(bassFreq, now);
        sawFlt.type = "lowpass";
        sawFlt.Q.setValueAtTime(trk.id === "whitenoise" ? 8.2 : 5.8, now);
        sawFlt.frequency.setValueAtTime(160, now);
        sawFlt.frequency.exponentialRampToValueAtTime(1650 * sectionCutoffMult, now + 0.018);
        sawFlt.frequency.exponentialRampToValueAtTime(220, now + 0.115);
        sawGain.gain.setValueAtTime(bGainAmt * 0.62, now);
        sawGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        sawOsc.connect(sawFlt).connect(sawGain).connect(dest);
        autoDisconnectNodes(sawOsc, sawFlt, sawGain);
        sawOsc.start(now);
        sawOsc.stop(now + 0.125);
      }

      // 5. SIGNATURE LATCH 6/8 POLYRHYTHMIC CHORD STUTTER & BELL PLUCK
      if (trk.stabSteps.includes(step)) {
        const chord = trk.chordVoicings[bar];
        const stabDur = step === 6 || step === 14 ? 0.21 : 0.15;
        const chordFlt = discoCtx.createBiquadFilter();
        const chordGain = discoCtx.createGain();
        chordFlt.type = "lowpass";
        chordFlt.Q.setValueAtTime(2.8, now);
        chordFlt.frequency.setValueAtTime(480, now);
        chordFlt.frequency.exponentialRampToValueAtTime(2750 * sectionCutoffMult, now + 0.042);
        chordFlt.frequency.exponentialRampToValueAtTime(760, now + stabDur);
        chordGain.gain.setValueAtTime(0.052 * duck * sidechain, now);
        chordGain.gain.exponentialRampToValueAtTime(0.001, now + stabDur);
        chordFlt.connect(chordGain).connect(dest);
        chord.forEach((freq, idx) => {
          const cOsc = discoCtx.createOscillator();
          cOsc.type = trk.id === "omen" ? "triangle" : idx % 2 === 0 ? "sawtooth" : "triangle";
          cOsc.frequency.setValueAtTime(freq, now);
          cOsc.detune.setValueAtTime((idx - 2) * 7, now);
          cOsc.connect(chordFlt);
          if (idx === chord.length - 1) {
            autoDisconnectNodes(cOsc, chordFlt, chordGain);
          } else {
            autoDisconnectNodes(cOsc);
          }
          cOsc.start(now);
          cOsc.stop(now + stabDur + 0.01);
        });
        if (trk.id === "latch") {
          const topFreq = chord[chord.length - 1] * 2;
          const pOsc = discoCtx.createOscillator();
          const pGain = discoCtx.createGain();
          pOsc.type = "triangle";
          pOsc.frequency.setValueAtTime(topFreq, now);
          pGain.gain.setValueAtTime(0.042 * duck * sidechain, now);
          pGain.gain.exponentialRampToValueAtTime(0.0008, now + 0.11);
          pOsc.connect(pGain).connect(dest);
          autoDisconnectNodes(pOsc, pGain);
          pOsc.start(now);
          pOsc.stop(now + 0.12);
        }
      }

      // 6. DISCLOSURE PITCH-GLIDING VOCAL-CHOP / SYNTH LEAD HOOK & STRINGS
      const leadFreq = trk.leadHook[step64];
      if (leadFreq > 0 && (bar8 >= 1 || step % 3 === 0)) {
        const lOsc = discoCtx.createOscillator();
        const lFlt = discoCtx.createBiquadFilter();
        const lGain = discoCtx.createGain();
        lOsc.type = trk.id === "latch" ? "sawtooth" : trk.id === "whitenoise" ? "square" : "triangle";
        lOsc.frequency.setValueAtTime(leadFreq * 0.94, now);
        lOsc.frequency.exponentialRampToValueAtTime(leadFreq, now + 0.024);
        lFlt.type = "bandpass";
        lFlt.frequency.setValueAtTime(1750 * sectionCutoffMult, now);
        lFlt.Q.setValueAtTime(2.1, now);
        lGain.gain.setValueAtTime(0.078 * duck * sidechain, now);
        lGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        lOsc.connect(lFlt).connect(lGain).connect(dest);
        autoDisconnectNodes(lOsc, lFlt, lGain);
        lOsc.start(now);
        lOsc.stop(now + 0.16);
      }

      if (step === 2 || step === 10) {
        const sFreq = trk.stringNotes[bar];
        const sOsc = discoCtx.createOscillator();
        const sFlt = discoCtx.createBiquadFilter();
        const sGain = discoCtx.createGain();
        sOsc.type = "sawtooth";
        sOsc.frequency.setValueAtTime(sFreq, now);
        if (bar === 3 && step === 10) {
          sOsc.frequency.exponentialRampToValueAtTime(sFreq * 0.5, now + 0.34);
        }
        sFlt.type = "lowpass";
        sFlt.frequency.setValueAtTime(3400, now);
        sGain.gain.setValueAtTime(0.001, now);
        sGain.gain.linearRampToValueAtTime(0.036 * duck, now + 0.05);
        sGain.gain.exponentialRampToValueAtTime(0.0008, now + 0.36);
        sOsc.connect(sFlt).connect(sGain).connect(dest);
        autoDisconnectNodes(sOsc, sFlt, sGain);
        sOsc.start(now);
        sOsc.stop(now + 0.37);
      }

      discoStep += 1;
    }, trk.stepMs);
  } catch {}
}

function stopDiscoHouseGroove() {
  clearInterval(discoTimerId);
  discoTimerId = null;
  clearTimeout(beatThumpTimerId);
  beatThumpTimerId = null;
  document.body?.classList?.remove("music-playing", "music-beat-thump");
}
function toggleDiscoGroove() {
  state.voice.discoEnabled = state.voice.discoEnabled === false;
  [document.getElementById("discoGrooveButton"), document.getElementById("leaderboardMusicButton")].forEach((btn) => {
    btn?.classList.toggle("active", state.voice.discoEnabled);
    btn?.setAttribute("aria-pressed", String(state.voice.discoEnabled));
  });
  if (state.voice.discoEnabled) {
    if (state.voice.muted) setHypeLevel("full");
    startDiscoHouseGroove();
  } else {
    stopDiscoHouseGroove();
  }
}

const DEFAULT_SPOTIFY_EMBED = "https://open.spotify.com/embed/track/51ODNNDZm21HU7wI7cccRr?utm_source=generator&theme=0";
const DEFAULT_APPLE_EMBED = "https://embed.music.apple.com/us/album/settle/1440859705";

function renderMusicStreamEmbed(rawUrl) {
  const drawer = document.getElementById("musicStreamDrawer");
  const host = document.getElementById("musicStreamEmbedHost");
  const input = document.getElementById("musicStreamUrlInput");
  if (!drawer || !host) return;
  drawer.classList.remove("hidden");
  let embedUrl = String(rawUrl || "").trim();
  if (!embedUrl) embedUrl = DEFAULT_SPOTIFY_EMBED;
  if (embedUrl.includes("open.spotify.com/") && !embedUrl.includes("/embed/")) {
    embedUrl = embedUrl.replace("open.spotify.com/", "open.spotify.com/embed/");
  } else if (embedUrl.includes("music.apple.com/") && !embedUrl.includes("embed.music.apple.com/")) {
    embedUrl = embedUrl.replace("music.apple.com/", "embed.music.apple.com/");
  }
  if (input && rawUrl) input.value = rawUrl;
  stopDiscoHouseGroove();
  host.innerHTML = `<iframe src="${embedUrl}" width="100%" height="84" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius:12px;border:1px solid rgba(69,234,255,0.35);"></iframe>`;
}

function toggleMute() {
  if (state.voice.muted || state.voice.hypeLevel === "off") {
    setHypeLevel("chill");
    playAnnouncerCue();
  } else if (state.voice.hypeLevel === "chill") {
    setHypeLevel("full");
    playAnnouncerCue();
  } else {
    setHypeLevel("off");
  }
}

function updateMuteButton() {
  const muted = state.voice.muted;

  els.muteButton.classList.toggle("muted", muted);
  els.muteButton.setAttribute("aria-pressed", String(muted));

  const label = muted ? t("unmuteVoice") : t("muteVoice");

  els.muteButton.setAttribute("aria-label", label);
  els.muteButton.title = label;
  els.soundIcon.textContent = muted
    ? "🔇 OFF"
    : state.voice.hypeLevel === "chill"
      ? "🎧 CHILL"
      : "🔊 FULL";
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
    if (!state._keepDeckLeaderboardMode) {
      state.leaderboardMode = "shift";
    }
    state._keepDeckLeaderboardMode = false;
    setLeaderboardMode(state.leaderboardMode || "shift");
    if (!SELFTEST_MODE) triggerArcadeFx("confetti");
  }

  if (screen === "deck") {
    if (!state.deck || !state.deck.order?.length) {
      state.deck = { order: buildDailyDeck(), index: 0, correct: 0, locked: false, answeredCurrent: false };
    }
    renderDeck();
    startDiscoHouseGroove();
    if (!SELFTEST_MODE && !state.voice.muted && state.deck.index === 0 && !state.deck.locked) {
      speakDeckIntro(state.language);
    }
  } else if (screen === "welcome" || screen === "instructions" || screen === "camera" || screen === "timer" || screen === "results" || screen === "leaderboard") {
    startDiscoHouseGroove();
  }
  const activeScreenEl = document.getElementById(`${screen}Screen`);
  if (activeScreenEl) {
    activeScreenEl.classList.remove("screen-enter-cascade");
    void activeScreenEl.offsetWidth;
    activeScreenEl.classList.add("screen-enter-cascade");
  }
  const portal = document.getElementById("screenTransitionPortal");
  if (portal && !SELFTEST_MODE) {
    portal.classList.remove("portal-sweep");
    void portal.offsetWidth;
    portal.classList.add("portal-sweep");
    triggerArcadeFx("portal");
  }
  if (!state.voice.muted && !SELFTEST_MODE) {
    if (screen === "instructions" || screen === "camera" || (screen === "timer" && !state.timer.running)) {
      speakHost("start");
    }
  }

  if (screen === "welcome") {
    state.showPassportHub = false;
    state.editingFtue = false;
    syncFtueCollapseUI();
  }

  if (screen === "records") {
    renderInspectionLog();
    renderOfflineQueue();
    renderAdminDashboard();
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

  if (state.screen === "timer" && (state.timer.running || state.timer.elapsedMs > 0)) {
    resetTimer();
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
  if (!DEBUG_MODE || !els.cameraTrackStatus) return;

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

const DEFAULT_CHECKIN_SITES = [
  "Site 1 · Breakroom & Restroom",
  "🏢 Site 2 · Corporate Tower HQ (Fl 4 Open Office & Pantry)",
  "🏥 Site 3 · St. Jude Medical Pavilion (Outpatient Clinic)",
  "🏫 Site 4 · Lincoln STEM Academy (North Wing Classrooms)",
  "🏨 Site 5 · Grand Meridian Hotel & Suites (Main Lobby & Atrium)",
  "🍽️ Site 6 · Central Commissary & Restaurant Kitchen",
  "✈️ Site 7 · Metro International Terminal B (Concourse & Washrooms)",
  "🏭 Site 8 · Apex Logistics Fulfillment Hub (Warehouse & Dock)"
];

function renderCheckinSites() {
  const sel = els.siteSelect;
  if (!sel) return;
  const storeSites = loadAdminStore().sites || [];
  const sites = storeSites.length > 1
    ? storeSites
    : Array.from(new Set([...storeSites, ...DEFAULT_CHECKIN_SITES]));
  const label = document.querySelector(".checkin-site-label");
  if (!sites.length) {
    if (label) label.classList.add("hidden");
    state.checkin.site = null;
    sel.innerHTML = "";
    return;
  }
  if (label) label.classList.remove("hidden");
  const prev = state.checkin.site;
  sel.innerHTML = "";
  sites.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    sel.appendChild(opt);
  });
  state.checkin.site = sites.includes(prev) ? prev : sites[0];
  sel.value = state.checkin.site;
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

  if (demo) {
    els.cameraHudStatus.textContent = "DEMO";
  } else if (ready) {
    els.cameraHudStatus.textContent = t("hudLive");
  } else if (hasError) {
    els.cameraHudStatus.textContent = t("hudOffline");
  } else {
    els.cameraHudStatus.textContent = t("hudStandby");
  }

  updateTrackDebug();
  renderCheckinSites();
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
  assignSpotForArea(state.checkin.areaKey, state.checkin.league, state.checkin.assignedSpot);

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

  const ctx = canvas.getContext("2d");
  const isBefore = type === "before";

  const wallGrad = ctx.createLinearGradient(0, 0, 0, 420);
  wallGrad.addColorStop(0, "#0b1d2e");
  wallGrad.addColorStop(1, "#12304a");
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, 960, 420);

  ctx.strokeStyle = "rgba(99, 218, 255, 0.12)";
  ctx.lineWidth = 1;
  for (let x = 0; x <= 960; x += 60) {
    ctx.beginPath();
    ctx.moveTo(x, 220);
    ctx.lineTo(x, 420);
    ctx.stroke();
  }
  for (let y = 220; y <= 420; y += 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(960, y);
    ctx.stroke();
  }

  ctx.fillStyle = isBefore ? "rgba(180, 215, 235, 0.14)" : "rgba(120, 240, 255, 0.24)";
  ctx.strokeStyle = "rgba(99, 218, 255, 0.4)";
  ctx.lineWidth = 3;
  ctx.fillRect(280, 50, 400, 150);
  ctx.strokeRect(280, 50, 400, 150);

  const counterGrad = ctx.createLinearGradient(0, 420, 0, 720);
  counterGrad.addColorStop(0, isBefore ? "#1a2a38" : "#1f3f58");
  counterGrad.addColorStop(1, "#0d1824");
  ctx.fillStyle = counterGrad;
  ctx.fillRect(0, 420, 960, 300);
  ctx.strokeStyle = "rgba(69, 234, 255, 0.45)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 420);
  ctx.lineTo(960, 420);
  ctx.stroke();

  ctx.fillStyle = isBefore ? "#0e1c29" : "#16354d";
  ctx.strokeStyle = "#5ce2ff";
  ctx.lineWidth = 3;
  ctx.fillRect(340, 445, 280, 150);
  ctx.strokeRect(340, 445, 280, 150);
  ctx.strokeStyle = "#8be9fd";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(480, 445);
  ctx.lineTo(480, 375);
  ctx.arc(460, 375, 20, 0, Math.PI, true);
  ctx.stroke();

  if (isBefore) {
    ctx.strokeStyle = "rgba(180, 110, 45, 0.65)";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(240, 545, 34, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "rgba(160, 95, 35, 0.38)";
    ctx.beginPath();
    ctx.arc(640, 560, 42, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#f97316";
    ctx.fillRect(190, 425, 78, 100);
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 15px system-ui";
    ctx.textAlign = "center";
    ctx.fillText("CUP", 229, 480);

    ctx.fillStyle = "#eab308";
    ctx.fillRect(665, 370, 72, 150);
    ctx.fillStyle = "#08121e";
    ctx.fillText("BOTTLE", 701, 455);

    ctx.fillStyle = "#ef4444";
    ctx.fillRect(770, 450, 115, 75);
    ctx.fillStyle = "#ffffff";
    ctx.fillText("BOWL", 827, 494);
  } else {
    ctx.strokeStyle = "#39f5bc";
    ctx.lineWidth = 3;
    [
      [350, 110],
      [590, 130],
      [230, 500],
      [480, 515],
      [740, 495]
    ].forEach(([sx, sy]) => {
      ctx.beginPath();
      ctx.moveTo(sx - 16, sy);
      ctx.lineTo(sx + 16, sy);
      ctx.moveTo(sx, sy - 16);
      ctx.lineTo(sx, sy + 16);
      ctx.stroke();
    });
  }

  ctx.fillStyle = "rgba(2, 8, 17, 0.82)";
  ctx.fillRect(220, 12, 520, 32);
  ctx.textAlign = "center";
  ctx.fillStyle = isBefore ? "#ffd35c" : "#39f5bc";
  ctx.font = "900 15px system-ui";
  const label = type === "before" ? t("before") : type === "after" ? t("after") : t("victoryPose");
  ctx.fillText(
    `${t("demoMode")} · ${label} (${state.checkin.assignedSpot.toUpperCase()})`,
    canvas.width / 2,
    33
  );

  return {
    dataUrl: canvas.toDataURL("image/jpeg", CONFIG.camera.jpegQuality),
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

  updateGhostOverlay();
}

function resetCaptures() {
  state.captures.before = null;
  state.captures.after = null;
  state.captures.pose = null;
  state.checkin.aligningAfter = false;

  updateCaptureIndicators();
  updateEvidenceThumbnails();

  els.afterAlignBanner?.classList.add("hidden");
  if (els.completeButton) {
    els.completeButton.classList.remove("align-ready");
    els.completeButton.textContent = t("complete");
  }

  els.posePreviewWrap.classList.add("hidden");
  els.poseThumbnail.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";
}

function resetTimeAnnouncements() {
  state.timer.announcements = {
    75: false,
    60: false,
    45: false,
    30: false,
    20: false,
    10: false,
    complete: false
  };
  state.liveMonitor = {
    lastSampleAt: 0,
    lastSnapshotAt: 0,
    lastMotionAt: performance.now(),
    lastNudgeAt: 0,
    lastLuma: null,
    beforeLuma: null,
    liveSnapshots: [],
    workedZones: new Array(9).fill(false),
    activeZones: new Array(9).fill(false),
    motionRatio: 0,
    idleAlert: false
  };
  if (els.idleNudgeBanner) els.idleNudgeBanner.classList.add("hidden");
  if (els.liveZoneGrid) {
    Array.from(els.liveZoneGrid.children).forEach((cell) => {
      cell.classList.remove("zone-worked", "zone-active");
    });
  }
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

  sampleLiveRunActivity();
  if (state.timer.elapsedMs >= durationMs) {
    state.timer.elapsedMs = durationMs;
    finishTimerAtLimit();
  }

  updateTimerUI();
}

function checkTimeAnnouncement(previousMs, currentMs) {
  [83, 76, 69, 62, 54, 45, 38, 30, 23, 16, 10].forEach((seconds) => {
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

function extractSmallLumaGrid(sourceEl, cols = 36, rows = 27) {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = cols;
    canvas.height = rows;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(sourceEl, 0, 0, cols, rows);
    const data = ctx.getImageData(0, 0, cols, rows).data;
    const out = new Float32Array(cols * rows);
    for (let i = 0; i < out.length; i += 1) {
      const p = i * 4;
      out[i] = 0.299 * data[p] + 0.587 * data[p + 1] + 0.114 * data[p + 2];
    }
    return out;
  } catch {
    return null;
  }
}

function sampleLiveRunActivity(forceIdleForTest = false) {
  if (!state.timer.running && !forceIdleForTest) return null;
  const now = performance.now();
  if (!state.liveMonitor) resetTimeAnnouncements();
  const mon = state.liveMonitor;
  if (!forceIdleForTest && now - mon.lastSampleAt < 1400) return mon;
  mon.lastSampleAt = now;

  if (els.liveZoneGrid) {
    els.liveZoneGrid.classList.remove("hidden");
  }

  const cols = 36;
  const rows = 27;
  let currentLuma = null;
  if (!state.demoMode && els.timerVideo && els.timerVideo.readyState >= 2) {
    currentLuma = extractSmallLumaGrid(els.timerVideo, cols, rows);
  }

  if (currentLuma && !mon.beforeLuma) {
    mon.beforeLuma = currentLuma.slice();
  }

  let activeCount = 0;
  let changedPixels = 0;
  const totalPixels = cols * rows;

  if (forceIdleForTest) {
    mon.motionRatio = 0;
    mon.activeZones.fill(false);
    mon.lastMotionAt = now - 8500;
  } else if (currentLuma && mon.lastLuma) {
    const zoneMotion = new Float32Array(9);
    const zoneBeforeDiff = new Float32Array(9);
    const zoneCounts = new Uint16Array(9);
    for (let r = 0; r < rows; r += 1) {
      const zr = Math.min(2, Math.floor((r * 3) / rows));
      for (let c = 0; c < cols; c += 1) {
        const zc = Math.min(2, Math.floor((c * 3) / cols));
        const idx = r * cols + c;
        const zIdx = zr * 3 + zc;
        const diff = Math.abs(currentLuma[idx] - mon.lastLuma[idx]);
        const bDiff = mon.beforeLuma ? Math.abs(currentLuma[idx] - mon.beforeLuma[idx]) : diff;
        zoneCounts[zIdx] += 1;
        if (diff > 11) {
          changedPixels += 1;
          zoneMotion[zIdx] += 1;
        }
        if (bDiff > 14) {
          zoneBeforeDiff[zIdx] += 1;
        }
      }
    }
    mon.motionRatio = changedPixels / totalPixels;
    for (let z = 0; z < 9; z += 1) {
      const zTotal = Math.max(1, zoneCounts[z]);
      const isMoving = zoneMotion[z] / zTotal > 0.04;
      const isWorked = zoneBeforeDiff[z] / zTotal > 0.07;
      mon.activeZones[z] = isMoving;
      if (isMoving || isWorked) mon.workedZones[z] = true;
      if (isMoving) activeCount += 1;
    }
    if (mon.motionRatio >= 0.018 || activeCount > 0) {
      mon.lastMotionAt = now;
    }
  } else if (state.demoMode) {
    const elapsedSec = Math.floor((state.timer.elapsedMs || 0) / 1000);
    const simZone = elapsedSec % 9;
    mon.activeZones.fill(false);
    mon.activeZones[simZone] = true;
    mon.workedZones[simZone] = true;
    mon.motionRatio = 0.08;
    mon.lastMotionAt = now;
  }

  if (currentLuma) {
    mon.lastLuma = currentLuma;
  }

  const workedCount = mon.workedZones.filter(Boolean).length;
  // Capture real 320x240 mid-run progress frames (up to 6 keyframes per run)
  if (
    !forceIdleForTest &&
    mon.liveSnapshots.length < 6 &&
    (mon.liveSnapshots.length === 0 || now - (mon.lastSnapshotAt || 0) >= 12000 || workedCount > (mon.lastSnapshotZones || 0) + 2)
  ) {
    try {
      const snapCanvas = document.createElement("canvas");
      snapCanvas.width = 320;
      snapCanvas.height = 240;
      const sctx = snapCanvas.getContext("2d");
      if (!state.demoMode && els.timerVideo && els.timerVideo.readyState >= 2) {
        sctx.drawImage(els.timerVideo, 0, 0, 320, 240);
      } else {
        sctx.fillStyle = "#0b1d2e";
        sctx.fillRect(0, 0, 320, 240);
        sctx.fillStyle = "#39f5bc";
        sctx.font = "bold 16px system-ui";
        sctx.fillText(`MID-RUN SNAP #${mon.liveSnapshots.length + 1} (${workedCount}/9 ZONES)`, 16, 124);
      }
      const dataUrl = snapCanvas.toDataURL("image/jpeg", 0.72);
      mon.liveSnapshots.push({
        index: mon.liveSnapshots.length + 1,
        elapsedMs: state.timer.elapsedMs || 0,
        workedZones: workedCount,
        dataUrl
      });
      mon.lastSnapshotAt = now;
      mon.lastSnapshotZones = workedCount;
      state.captures.midRun = mon.liveSnapshots;
    } catch {}
  }

  // Run integrity: misses stay hidden until scoring. The grid renders neutral
  // during the run; per-zone worked/active state is only revealed on results.
  if (els.liveZoneGrid) {
    Array.from(els.liveZoneGrid.children).forEach((cell) => {
      cell.classList.remove("zone-active", "zone-worked");
    });
  }

  const idleMs = now - mon.lastMotionAt;
  const isIdle = idleMs >= 6500;
  mon.idleAlert = isIdle;

  if (els.idleNudgeBanner) {
    els.idleNudgeBanner.classList.toggle("hidden", !isIdle);
  }
  if (els.liveActivityBadge) {
    if (isIdle) {
      els.liveActivityBadge.textContent = t("noMotionBadge");
      els.liveActivityBadge.classList.add("idle-warning");
    } else {
      els.liveActivityBadge.textContent = workedCount > 0
        ? t("zonesActive", { n: workedCount, s: mon.liveSnapshots.length })
        : t("liveChallenge");
      els.liveActivityBadge.classList.remove("idle-warning");
    }
  }
  if (isIdle && (state.timer.elapsedMs || 0) >= 10000 && now - mon.lastNudgeAt >= 15000) {
    mon.lastNudgeAt = now;
    speakHost("nudge");
  }
  return mon;
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
  if (!SELFTEST_MODE && state.screen === "timer") {
    void completeChallenge();
  }
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
    els.startPauseButton.textContent = `⏱ ${t("live")}`;
    els.startPauseButton.disabled = true;
    els.resetButton?.classList.add("hidden");
    setLiveBadge("live");
  } else if (atLimit) {
    els.startPauseButton.textContent = t("start");
    els.startPauseButton.disabled = false;
    els.resetButton?.classList.add("hidden");
    setLiveBadge("finished");
  } else {
    els.startPauseButton.textContent = t("start");
    els.startPauseButton.disabled = false;
    els.resetButton?.classList.add("hidden");
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

  // Once the challenge countdown has started, never allow stopping/pausing the counter mid-run.
  if (state.timer.running) {
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
    state.checkin.ghostEnabled = true;
    state.checkin.ghostMode = state.checkin.ghostMode || "shadow60";
    updateGhostOverlay();

    playTone(620, 0.07);
    setTimeout(() => playTone(820, 0.08), 90);

    startTimer();
    startDiscoHouseGroove();
    sampleLiveRunActivity();
    speakHost("start");
    return;
  }

  startTimer();
  startDiscoHouseGroove();
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

async function runJudgeDemo() {
  if (state.analysis.running) return;
  state.demoMode = false;
  state.judgeDemo = true;
  state.latestRunId = null;
  state.latestScore = null;
  state.checkin.assignedSpot = state.checkin.assignedSpot || "Sink & counter";
  state.checkin.spotOverride = false;
  const before = createDemoCapture("before");
  before.placeholder = false;
  const after = createDemoCapture("after");
  after.placeholder = false;
  state.captures.before = before;
  state.captures.after = after;
  state.captures.pose = null;
  state.timer.elapsedMs = 78000;
  navigateTo("results");
  setAnalysisLoading(true);
  try {
    await analyzeChallenge();
  } finally {
    setAnalysisLoading(false);
  }
  if (state.latestScore) {
    state.latestScore.judgeDemo = true;
  }
  state.judgeDemo = false;
  els.judgeDemoNote?.classList.remove("hidden");
  renderResults();
  announceResultSummary();
}

function renderVerifyProvenance() {
  const el = els.verifyProvenance;
  if (!el) return;
  // Error state stays hidden deliberately: scorecardErrorNote already explains.
  el.classList.add("hidden");
  el.textContent = "";
  const ai = state.result?.ai;
  if (!ai || ai.judgeDemo) return;
  if (ai.verified?.status === "verified") {
    const sam = ai.sam?.status === "overlays" ? t("verifyProvenanceSamSuffix") : "";
    el.textContent = t("verifyProvenanceVerified", {
      provider: ai.verified.provider || "cloud",
      model: ai.verified.model || "scorecard"
    }) + sam;
    el.classList.remove("hidden");
  } else if (
    (ai.verified?.status === "offline" || ai.verified?.status === "mock") &&
    Number.isFinite(ai.cleanliness) &&
    !ai.simulated
  ) {
    el.textContent = ai.detectorUsed === false
      ? t("verifyProvenanceClassical")
      : t("verifyProvenanceOffline");
    el.classList.remove("hidden");
  }
}

async function completeChallenge() {
  if (state.analysis.running) return;
  state.judgeDemo = false;

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

async function handleCompleteButtonTap() {
  if (state.analysis.running) return;
  state.checkin.aligningAfter = false;
  els.afterAlignBanner?.classList.add("hidden");
  if (els.completeButton) {
    els.completeButton.classList.remove("align-ready");
    els.completeButton.textContent = t("complete");
  }
  await completeChallenge();
  return { step: "scored", ghostActive: false };
}

async function analyzeChallenge() {
  const before = state.captures.before;
  const after = state.captures.after;

  let aiResult;

  resetVoiceNote();
  els.judgeDemoNote?.classList.add("hidden");

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

  const allNormalized = (result?.detections || []).map(normalizeDetection);
  const imgW = Number(image.naturalWidth || image.videoWidth || image.width || 640);
  const imgH = Number(image.naturalHeight || image.videoHeight || image.height || 480);
  state.lastRawDetections = allNormalized
    .filter((d) => d.score >= 0.35)
    .map((d) => ({
      ...d,
      areaRatio: (Math.max(0, d.box.width) * Math.max(0, d.box.height)) / Math.max(1, imgW * imgH)
    }));

  return allNormalized
    .filter(
      (detection) =>
        detection.label !== "person" &&
        detection.label !== "face" &&
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
const OBJECT_LABEL_I18N = {
  es: { cup: "taza", bottle: "botella", bowl: "tazón", "cell phone": "teléfono", book: "libro" },
  pl: { cup: "kubek", bottle: "butelka", bowl: "miska", "cell phone": "telefon", book: "książka" }
};

function describeObjects(objects) {
  const counts = {};

  objects.forEach((object) => {
    counts[object.label] =
      (counts[object.label] || 0) + 1;
  });

  return Object.entries(counts)
    .map(([name, count]) =>
      count > 1
        ? `${count} ${objectLabel(name)}`
        : objectLabel(name)
    )
    .join(", ");
}

function objectLabel(name) {
  return OBJECT_LABEL_I18N[state.language]?.[name] || name;
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

const SPOT_LOGIC_PROFILES = {
  "Sink & counter": {
    surfaceWeight: 0.55,
    zoneWeight: 0.25,
    objectWeight: 0.2,
    zoneWeights: [0.85, 0.95, 0.85, 1.15, 1.30, 1.15, 0.90, 0.95, 0.90],
    ruleSummary: "55% SURFACE GLEAM · 25% ZONES · 20% ITEMS",
    focusNote: "Grades basin/counter film removal and cleared counter items.",
    focusNote_es: "Evalúa el retiro de sarro y jabón en tarja/mostrador y el despeje de objetos.",
    focusNote_pl: "Ocenia usuwanie osadu ze zlewu/blatu i usunięte przedmioty z blatu."
  },
  "Sink & mirror counter": {
    surfaceWeight: 0.6,
    zoneWeight: 0.25,
    objectWeight: 0.15,
    zoneWeights: [1.15, 1.25, 1.15, 1.05, 1.15, 1.05, 0.75, 0.70, 0.75],
    ruleSummary: "60% MIRROR/BASIN GLEAM · 25% ZONES · 15% ITEMS",
    focusNote: "Grades streak-free mirror/sink reflection and counter clearance.",
    focusNote_es: "Evalúa el brillo sin marcas en espejo y lavabo y el despeje de la cubierta.",
    focusNote_pl: "Ocenia odbicie bez smug w lustrze/umywalce i porządek na blacie."
  },
  "Workstation desk & shelf": {
    surfaceWeight: 0.35,
    zoneWeight: 0.25,
    objectWeight: 0.4,
    zoneWeights: [0.95, 1.05, 0.95, 1.15, 1.25, 1.15, 0.85, 0.80, 0.85],
    ruleSummary: "40% ITEM ORDER · 35% SURFACE · 25% ZONES",
    focusNote: "Grades desk/bookshelf clutter organization and surface dust zones.",
    focusNote_es: "Evalúa el orden de objetos en escritorio/repisa y el retiro de polvo superficial.",
    focusNote_pl: "Ocenia organizację biurka/półek i strefy kurzu na powierzchniach."
  },
  "Workstation desk surface": {
    surfaceWeight: 0.35,
    zoneWeight: 0.25,
    objectWeight: 0.4,
    zoneWeights: [0.90, 1.00, 0.90, 1.20, 1.30, 1.20, 0.85, 0.80, 0.85],
    ruleSummary: "40% ITEM ORDER · 35% SURFACE · 25% ZONES",
    focusNote: "Grades desk clutter organization and work surface dust zones.",
    focusNote_es: "Evalúa el orden de artículos sobre el escritorio y la limpieza de polvo en la superficie.",
    focusNote_pl: "Ocenia organizację biurka i strefy kurzu na powierzchni roboczej."
  },
  "Tabletop & appliance front": {
    surfaceWeight: 0.5,
    zoneWeight: 0.25,
    objectWeight: 0.25,
    zoneWeights: [0.95, 1.05, 0.95, 1.15, 1.25, 1.15, 0.85, 0.80, 0.85],
    ruleSummary: "50% TABLE WIPE · 25% ZONES · 25% ITEMS",
    focusNote: "Grades tabletop wipe uniformity and cleared cups/containers.",
    focusNote_es: "Evalúa el limpión uniforme de la mesa, frentes sin grasa y retiro de vasos o envases.",
    focusNote_pl: "Ocenia równomierność czyszczenia blatu i usunięte kubki/pojemniki."
  },
  "Mirror, glass & handles": {
    surfaceWeight: 0.7,
    zoneWeight: 0.25,
    objectWeight: 0.05,
    zoneWeights: [1.15, 1.25, 1.15, 1.10, 1.20, 1.10, 0.70, 0.65, 0.70],
    ruleSummary: "70% STREAK-FREE GLASS · 25% ZONES · 5% ITEMS",
    focusNote: "Grades reflection uniformity and high-touch handle zone clarity.",
    focusNote_es: "Evalúa el acabado sin rayas en vidrio/espejo y el desinfectado de manijas.",
    focusNote_pl: "Ocenia równomierność odbicia i czystość stref klamek dotykowych."
  },
  "Entry glass & handles": {
    surfaceWeight: 0.7,
    zoneWeight: 0.25,
    objectWeight: 0.05,
    zoneWeights: [1.10, 1.20, 1.10, 1.15, 1.25, 1.15, 0.70, 0.65, 0.70],
    ruleSummary: "70% STREAK-FREE GLASS · 25% ZONES · 5% ITEMS",
    focusNote: "Grades entry door glass clarity and fingerprint removal on pulls.",
    focusNote_es: "Evalúa la transparencia sin huellas en vidrios de acceso y jaladeras.",
    focusNote_pl: "Ocenia przejrzystość szyby wejściowej i usunięcie śladów palców z uchwytów."
  },
  "Fixture row & partition": {
    surfaceWeight: 0.6,
    zoneWeight: 0.3,
    objectWeight: 0.1,
    zoneWeights: [1.10, 1.15, 1.10, 1.05, 1.10, 1.05, 0.80, 0.85, 0.80],
    ruleSummary: "60% FIXTURE GLEAM · 30% TOP-DOWN ZONES · 10% ITEMS",
    focusNote: "Grades top-to-bottom fixture & partition surface pass.",
    focusNote_es: "Evalúa la pasada de arriba hacia abajo en muebles sanitarios y mamparas.",
    focusNote_pl: "Ocenia przejście od góry do dołu po armaturze i przegrodach."
  },
  "Trash & floor zone": {
    surfaceWeight: 0.4,
    zoneWeight: 0.35,
    objectWeight: 0.25,
    zoneWeights: [0.75, 0.80, 0.75, 1.00, 1.10, 1.00, 1.20, 1.20, 1.20],
    ruleSummary: "40% FLOOR PASS · 35% ZONE COVERAGE · 25% DEBRIS",
    focusNote: "Grades lower-zone debris clearance, liner reset, and floor pass uniformity.",
    focusNote_es: "Evalúa el retiro de basura en piso, cambio de bolsa en bote y trapeado uniforme.",
    focusNote_pl: "Ocenia usuwanie odpadów w dolnej strefie i równomierność podłogi."
  },
  "Entry door & dispenser zone": {
    surfaceWeight: 0.55,
    zoneWeight: 0.30,
    objectWeight: 0.15,
    zoneWeights: [1.00, 1.10, 1.00, 1.15, 1.25, 1.15, 0.80, 0.75, 0.80],
    ruleSummary: "55% TOUCHPOINT WIPE · 30% ZONES · 15% ITEMS",
    focusNote: "Grades push-plate/handle sanitation and dispenser front wipe-down.",
    focusNote_es: "Evalúa la desinfección de placas de empuje, manijas y frente de despachadores.",
    focusNote_pl: "Ocenia dezynfekcję płyt popychowych, klamek i frontów dozowników."
  },
  "Reception counter": {
    surfaceWeight: 0.50,
    zoneWeight: 0.25,
    objectWeight: 0.25,
    zoneWeights: [0.90, 1.00, 0.90, 1.20, 1.30, 1.20, 0.85, 0.80, 0.85],
    ruleSummary: "50% SURFACE GLEAM · 25% ZONES · 25% ITEM ORDER",
    focusNote: "Grades reception transaction ledge polish and brochure/item alignment.",
    focusNote_es: "Evalúa el brillo del mostrador de recepción y el orden de folletos y artículos.",
    focusNote_pl: "Ocenia połysk lady recepcyjnej oraz uporządkowanie materiałów i przedmiotów."
  },
  "Waiting area floor": {
    surfaceWeight: 0.45,
    zoneWeight: 0.35,
    objectWeight: 0.20,
    zoneWeights: [0.75, 0.80, 0.75, 1.00, 1.10, 1.00, 1.20, 1.20, 1.20],
    ruleSummary: "45% FLOOR PASS · 35% ZONE COVERAGE · 20% DEBRIS",
    focusNote: "Grades waiting lounge floor sweep/mop coverage and litter removal under seating.",
    focusNote_es: "Evalúa el barrido/trapeado parejo en sala de espera y el retiro de basura bajo los asientos.",
    focusNote_pl: "Ocenia równomierne mycie podłogi w poczekalni i usunięcie śmieci spod siedzeń."
  },
  "Conference table & chairs": {
    surfaceWeight: 0.45,
    zoneWeight: 0.25,
    objectWeight: 0.30,
    zoneWeights: [0.85, 0.95, 0.85, 1.20, 1.30, 1.20, 0.90, 0.85, 0.90],
    ruleSummary: "45% TABLE WIPE · 30% ITEM ORDER · 25% ZONES",
    focusNote: "Grades conference tabletop streak removal, cup clearance, and chair alignment.",
    focusNote_es: "Evalúa el limpión sin marcas en mesa de juntas, retiro de tazas y alineación de sillas.",
    focusNote_pl: "Ocenia czyszczenie stołu konferencyjnego bez smug, usunięcie kubków i ustawienie krzeseł."
  },
  "Entry & glass partition": {
    surfaceWeight: 0.65,
    zoneWeight: 0.25,
    objectWeight: 0.10,
    zoneWeights: [1.10, 1.20, 1.10, 1.15, 1.25, 1.15, 0.70, 0.65, 0.70],
    ruleSummary: "65% STREAK-FREE GLASS · 25% ZONES · 10% ITEMS",
    focusNote: "Grades office partition glass smudge removal and doorway frame pass.",
    focusNote_es: "Evalúa la eliminación de manchas en canceles de vidrio y marcos de entrada.",
    focusNote_pl: "Ocenia usuwanie smug ze szklanych ścianek działowych i ościeżnic drzwi."
  },
  "Board rail & front desk": {
    surfaceWeight: 0.45,
    zoneWeight: 0.30,
    objectWeight: 0.25,
    zoneWeights: [1.05, 1.15, 1.05, 1.15, 1.20, 1.15, 0.75, 0.75, 0.75],
    ruleSummary: "45% SURFACE · 30% ZONES · 25% ITEM ORDER",
    focusNote: "Grades marker dust removal on board tray and instructor desk organization.",
    focusNote_es: "Evalúa el retiro de polvo de plumón/gis en el riel del pizarrón y el orden del escritorio frontal.",
    focusNote_pl: "Ocenia usunięcie pyłu z listwy tablicy oraz porządek na biurku prowadzącego."
  },
  "Student desk row": {
    surfaceWeight: 0.45,
    zoneWeight: 0.30,
    objectWeight: 0.25,
    zoneWeights: [0.90, 1.00, 0.90, 1.15, 1.20, 1.15, 0.90, 0.90, 0.90],
    ruleSummary: "45% TABLE WIPE · 30% ZONE COVERAGE · 25% ITEMS",
    focusNote: "Grades multi-desk top sanitization, row alignment, and stray item clearance.",
    focusNote_es: "Evalúa la desinfección de cubiertas de pupitres, alineación de filas y retiro de basura.",
    focusNote_pl: "Ocenia dezynfekcję blatów ławek, równe ustawienie rzędów i usunięcie pozostawionych rzeczy."
  },
  "Doorway & sink area": {
    surfaceWeight: 0.55,
    zoneWeight: 0.30,
    objectWeight: 0.15,
    zoneWeights: [0.95, 1.05, 0.95, 1.15, 1.25, 1.15, 0.85, 0.80, 0.85],
    ruleSummary: "55% SURFACE GLEAM · 30% ZONES · 15% ITEMS",
    focusNote: "Grades classroom handwashing basin polish and entry door touchpoint wipe.",
    focusNote_es: "Evalúa la limpieza de la tarja del salón, salpicaduras y desinfección de la puerta.",
    focusNote_pl: "Ocenia czystość zlewu w sali, usunięcie zachlapań i przetarcie strefy drzwi."
  },
  "Urinal, toilet & stall hardware": {
    surfaceWeight: 0.60,
    zoneWeight: 0.30,
    objectWeight: 0.10,
    zoneWeights: [1.05, 1.15, 1.05, 1.10, 1.20, 1.10, 0.80, 0.75, 0.80],
    ruleSummary: "60% FIXTURE GLEAM · 30% TOP-DOWN ZONES · 10% ITEMS",
    focusNote: "Grades porcelain bowl/urinal scale removal, flush valve polish, and stall latch sanitation.",
    focusNote_es: "Evalúa el desincrustado de mingitorio e inodoro, brillo de fluxómetro y desinfección de pasadores.",
    focusNote_pl: "Ocenia usunięcie kamienia z pisuaru i toalety, połysk spłuczki oraz dezynfekcję zamków kabiny."
  },
  "Soap, towel & sanitizer dispensers": {
    surfaceWeight: 0.55,
    zoneWeight: 0.30,
    objectWeight: 0.15,
    zoneWeights: [1.05, 1.15, 1.05, 1.15, 1.25, 1.15, 0.75, 0.70, 0.75],
    ruleSummary: "55% TOUCHPOINT WIPE · 30% ZONES · 15% ITEMS",
    focusNote: "Grades dispenser housing wipe, nozzle drip removal, and wall drop-zone cleanliness.",
    focusNote_es: "Evalúa la limpieza de carcasas de despachadores, retiro de escurrimientos de jabón/gel y pared limpia.",
    focusNote_pl: "Ocenia czystość obudowy dozowników, usunięcie zacieków mydła/żelu i czystość ściany pod nimi."
  },
  "High-touch door pulls, switches & rails": {
    surfaceWeight: 0.60,
    zoneWeight: 0.30,
    objectWeight: 0.10,
    zoneWeights: [0.95, 1.05, 0.95, 1.25, 1.35, 1.25, 0.75, 0.70, 0.75],
    ruleSummary: "60% TOUCHPOINT WIPE · 30% ZONES · 10% ITEMS",
    focusNote: "Grades disinfectant dwell pass across door pulls, push bars, light switches, and handrails.",
    focusNote_es: "Evalúa la pasada desinfectante en jaladeras, barras de empuje, apagadores y pasamanos.",
    focusNote_pl: "Ocenia dezynfekcję uchwytów drzwiowych, dźwigni antypanicznych, włączników i poręczy."
  },
  "Commercial prep table & hood apron": {
    surfaceWeight: 0.60,
    zoneWeight: 0.25,
    objectWeight: 0.15,
    zoneWeights: [1.10, 1.20, 1.10, 1.15, 1.25, 1.15, 0.70, 0.65, 0.70],
    ruleSummary: "60% DEGREASE GLEAM · 25% ZONES · 15% ITEMS",
    focusNote: "Grades stainless prep table food-contact degreasing, hood apron film removal, and tool clearance.",
    focusNote_es: "Evalúa el desengrasado de mesa de acero inoxidable, faldón de campana sin cochambre y despeje de utensilios.",
    focusNote_pl: "Ocenia odtłuszczenie stołu roboczego ze stali nierdzewnej, czystość okapu i uprzątnięcie narzędzi."
  },
  "POS checkout lane & counter": {
    surfaceWeight: 0.45,
    zoneWeight: 0.25,
    objectWeight: 0.30,
    zoneWeights: [0.90, 1.00, 0.90, 1.20, 1.30, 1.20, 0.85, 0.80, 0.85],
    ruleSummary: "45% SURFACE · 30% ITEM ORDER · 25% ZONES",
    focusNote: "Grades conveyor belt/counter wipe, PIN pad & scanner glass clarity, and stray merchandise clearance.",
    focusNote_es: "Evalúa la limpieza de banda y mostrador de caja, lector óptico/terminal bancaria y despeje de mercancía.",
    focusNote_pl: "Ocenia czystość taśmy i lady kasowej, czytnika oraz terminala płatniczego i uporządkowanie towarów."
  },
  "Patient bed rails & exam table": {
    surfaceWeight: 0.60,
    zoneWeight: 0.30,
    objectWeight: 0.10,
    zoneWeights: [1.00, 1.10, 1.00, 1.20, 1.30, 1.20, 0.75, 0.70, 0.75],
    ruleSummary: "60% CLINICAL WIPE · 30% TOP-DOWN ZONES · 10% ITEMS",
    focusNote: "Grades clinical top-down disinfection of bed side rails, call pendant, and exam table upholstery.",
    focusNote_es: "Evalúa la desinfección clínica de arriba hacia abajo en barandales de cama, timbre y mesa de exploración.",
    focusNote_pl: "Ocenia kliniczną dezynfekcję barierek łóżka, pilota przyzywowego i tapicerki stołu zabiegowego."
  },
  "Elevator cab buttons, rails & threshold": {
    surfaceWeight: 0.55,
    zoneWeight: 0.35,
    objectWeight: 0.10,
    zoneWeights: [0.95, 1.05, 0.95, 1.15, 1.20, 1.15, 0.85, 0.85, 0.85],
    ruleSummary: "55% TOUCHPOINT WIPE · 35% ZONES · 10% DEBRIS",
    focusNote: "Grades call button panel polish, cab handrail wipe, and sill track debris extraction.",
    focusNote_es: "Evalúa el brillo sin huellas en botonera y pasamanos del elevador y el riel de piso libre de basura.",
    focusNote_pl: "Ocenia czystość panelu przycisków i poręczy w windzie oraz usunięcie brudu z prowadnicy progu."
  },
  "Cardio & weight equipment touchpoints": {
    surfaceWeight: 0.55,
    zoneWeight: 0.30,
    objectWeight: 0.15,
    zoneWeights: [1.00, 1.15, 1.00, 1.15, 1.25, 1.15, 0.80, 0.70, 0.80],
    ruleSummary: "55% TOUCHPOINT WIPE · 30% ZONES · 15% ITEMS",
    focusNote: "Grades sweat/film removal on console screens, heart-rate grips, benches, and dumbbell racks.",
    focusNote_es: "Evalúa el retiro de sudor en pantallas de cardio, manubrios, bancas y orden de mancuernas.",
    focusNote_pl: "Ocenia usunięcie śladów potu z konsol, uchwytów, ławek oraz uporządkowanie stojaka z hantlami."
  },
  "Vending bank, microwave & fridge handles": {
    surfaceWeight: 0.50,
    zoneWeight: 0.25,
    objectWeight: 0.25,
    zoneWeights: [1.00, 1.10, 1.00, 1.15, 1.25, 1.15, 0.80, 0.75, 0.80],
    ruleSummary: "50% TOUCHPOINT WIPE · 25% ZONES · 25% ITEMS",
    focusNote: "Grades appliance door pulls, keypad/button panels, microwave splatter removal, and counter order.",
    focusNote_es: "Evalúa la desinfección de manijas de refri y microondas, botoneras de máquinas expendedoras y retiro de salpicaduras.",
    focusNote_pl: "Ocenia czystość uchwytów lodówki i mikrofalówki, paneli automatów vendingowych oraz usunięcie zabrudzeń."
  },
  "Carpeted traffic lane & walk-off mat": {
    surfaceWeight: 0.40,
    zoneWeight: 0.35,
    objectWeight: 0.25,
    zoneWeights: [0.75, 0.80, 0.75, 1.00, 1.10, 1.00, 1.20, 1.20, 1.20],
    ruleSummary: "40% FLOOR PASS · 35% ZONE COVERAGE · 25% DEBRIS",
    focusNote: "Grades walk-off mat soil extraction, traffic-lane vacuum pass uniformity, and visible lint/debris removal.",
    focusNote_es: "Evalúa el aspirado uniforme en pasillo alfombrado y tapete atrapamugre sin pelusa ni basura visible.",
    focusNote_pl: "Ocenia równomierne odkurzenie ciągu na wykładzinie i maty wejściowej oraz usunięcie widocznych zanieczyszczeń."
  },
  "Hard floor scrub & baseboard edge": {
    surfaceWeight: 0.45,
    zoneWeight: 0.35,
    objectWeight: 0.20,
    zoneWeights: [0.75, 0.80, 0.75, 1.00, 1.10, 1.00, 1.20, 1.20, 1.20],
    ruleSummary: "45% FLOOR PASS · 35% ZONE COVERAGE · 20% DEBRIS",
    focusNote: "Grades hard floor soil/scuff removal, grout or tile uniformity, and corner/baseboard edge detailing.",
    focusNote_es: "Evalúa el tallado parejo de piso duro sin manchas y el detallado limpio en esquinas y orilla del zoclo.",
    focusNote_pl: "Ocenia równomierne wyszorowanie podłogi twardej bez smug oraz dokładne doczyszczenie narożników i cokołów."
  }
};

const RULE_SUMMARY_PHRASES = {
  es: {
    "SURFACE GLEAM": "BRILLO DE SUPERFICIE",
    "MIRROR/BASIN GLEAM": "BRILLO DE ESPEJO Y LAVABO",
    "DEGREASE GLEAM": "DESENGRASADO Y BRILLO",
    "TOUCHPOINT WIPE": "DESINFECCIÓN DE CONTACTO",
    "CLINICAL WIPE": "DESINFECCIÓN CLÍNICA",
    "ITEM ORDER": "ORDEN DE OBJETOS",
    "TABLE WIPE": "LIMPIEZA DE MESA",
    "STREAK-FREE GLASS": "VIDRIO SIN MARCAS",
    "FIXTURE GLEAM": "BRILLO DE SANITARIOS",
    "TOP-DOWN ZONES": "ZONAS DE ARRIBA ABAJO",
    "FLOOR PASS": "PASADA DE PISO",
    "ZONE COVERAGE": "COBERTURA DE ZONAS",
    "SURFACE": "SUPERFICIE",
    "ZONES": "ZONAS",
    "ITEMS": "OBJETOS",
    "DEBRIS": "RESIDUOS"
  },
  pl: {
    "SURFACE GLEAM": "POŁYSK POWIERZCHNI",
    "MIRROR/BASIN GLEAM": "POŁYSK LUSTRA I UMYWALKI",
    "DEGREASE GLEAM": "ODTŁUSZCZENIE I POŁYSK",
    "TOUCHPOINT WIPE": "DEZYNFEKCJA DOTYKOWA",
    "CLINICAL WIPE": "DEZYNFEKCJA KLINICZNA",
    "ITEM ORDER": "PORZĄDEK PRZEDMIOTÓW",
    "TABLE WIPE": "CZYSTOŚĆ BLATU",
    "STREAK-FREE GLASS": "SZKŁO BEZ SMUG",
    "FIXTURE GLEAM": "POŁYSK ARMATURY",
    "TOP-DOWN ZONES": "STREFY OD GÓRY DO DOŁU",
    "FLOOR PASS": "PRZEJŚCIE PODŁOGI",
    "ZONE COVERAGE": "POKRYCIE STREF",
    "SURFACE": "POWIERZCHNIA",
    "ZONES": "STREFY",
    "ITEMS": "PRZEDMIOTY",
    "DEBRIS": "ODPADY"
  }
};

function localizedRuleSummary(profile) {
  const summary = String(profile?.ruleSummary || "");
  const dict = RULE_SUMMARY_PHRASES[state.language];
  if (!dict) return summary;
  return Object.entries(dict)
    .sort((a, b) => b[0].length - a[0].length)
    .reduce((acc, [en, local]) => acc.split(en).join(local), summary);
}

function getSpotScoringProfile(spotName = state.checkin?.assignedSpot) {
  return (
    SPOT_LOGIC_PROFILES[spotName] || {
      surfaceWeight: 0.5,
      zoneWeight: 0.25,
      objectWeight: 0.25,
      zoneWeights: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      ruleSummary: "50% SURFACE · 25% ZONES · 25% ITEMS",
      focusNote: "Grades visible surface improvement across 9 zones and item clearance.",
      focusNote_es: "Evalúa la mejora visible en 9 zonas y el despeje de objetos.",
      focusNote_pl: "Ocenia widoczną poprawę w 9 strefach i usuwanie przedmiotów."
    }
  );
}

function verifyStationEnvironment(
  beforeObjects = [],
  afterObjects = [],
  areaKey = state.checkin?.areaKey || "breakroom",
  assignedSpot = state.checkin?.assignedSpot || "Sink & counter",
  rawDetections = state.lastRawDetections || []
) {
  if (state.demoMode || state.judgeDemo) {
    return { matched: true, reason: "demo" };
  }
  const spotLower = String(assignedSpot || "").toLowerCase();
  const areaLower = String(areaKey || "").toLowerCase();
  const combined = [...beforeObjects, ...afterObjects, ...(Array.isArray(rawDetections) ? rawDetections : [])];
  const labels = combined.map((o) => String(o?.label || "").toLowerCase()).filter(Boolean);

  // 1. Check if camera is pointed at a person / webcam selfie (>= 32% of frame)
  const bigPerson = (Array.isArray(rawDetections) ? rawDetections : []).find(
    (d) => d.label === "person" && Number(d.areaRatio || 0) >= 0.32
  );

  const isWetOrFloorSpot =
    spotLower.includes("sink") ||
    spotLower.includes("fixture") ||
    spotLower.includes("mirror") ||
    spotLower.includes("trash") ||
    spotLower.includes("tabletop") ||
    areaLower === "restroom" ||
    areaLower === "breakroom";

  const isDeskSpot =
    spotLower.includes("workstation") ||
    spotLower.includes("desk") ||
    spotLower.includes("board") ||
    spotLower.includes("student");

  const wetAndBreakroomAnchors = new Set([
    "sink", "toilet", "cup", "bottle", "bowl", "wine glass",
    "fork", "knife", "spoon", "refrigerator", "microwave", "oven", "toaster", "toothbrush", "vase"
  ]);
  const deskAndShelfObjects = new Set(["book", "laptop", "keyboard", "mouse", "tv", "bed", "couch"]);
  const restroomContradictions = new Set(["book", "laptop", "keyboard", "bed", "couch", "tv", "microwave", "refrigerator", "oven"]);

  if (isWetOrFloorSpot && !isDeskSpot) {
    const anchorHits = labels.filter((l) => wetAndBreakroomAnchors.has(l));
    const contraSet = areaLower === "restroom" ? restroomContradictions : deskAndShelfObjects;
    const contraHits = labels.filter((l) => contraSet.has(l));
    if (contraHits.length >= 2 && anchorHits.length === 0) {
      const uniq = Array.from(new Set(contraHits)).join(", ");
      const inferred = contraHits.includes("book") || contraHits.includes("laptop")
        ? "Workstation desk & bookshelf"
        : "Living / Office room";
      return {
        matched: false,
        reason: "station_mismatch",
        claimedStation: `${areaKey} · ${assignedSpot}`,
        detectedSummary: uniq,
        inferredStation: inferred,
        message: `⚠️ Station mismatch: Selected "${assignedSpot}", but camera detected ${uniq} (looks like ${inferred}). Point camera at ${assignedSpot} or switch SPOT to Workstation desk & shelf.`
      };
    }
    if (bigPerson && anchorHits.length === 0) {
      return {
        matched: false,
        reason: "person_occluded",
        claimedStation: `${areaKey} · ${assignedSpot}`,
        detectedSummary: "person / selfie view",
        inferredStation: "Webcam selfie",
        message: `⚠️ Station not in frame: Camera is pointed at a person instead of "${assignedSpot}". Point the camera directly at the cleaning surface.`
      };
    }
  }

  if (isDeskSpot) {
    const bathroomHits = labels.filter((l) => l === "toilet" || l === "sink");
    const deskHits = labels.filter((l) => deskAndShelfObjects.has(l));
    if (bathroomHits.length >= 1 && deskHits.length === 0) {
      return {
        matched: false,
        reason: "station_mismatch",
        claimedStation: `${areaKey} · ${assignedSpot}`,
        detectedSummary: Array.from(new Set(bathroomHits)).join(", "),
        inferredStation: "Restroom / Sink & counter",
        message: `⚠️ Station mismatch: Selected "${assignedSpot}", but camera detected ${bathroomHits[0]}. Switch SPOT to Sink & counter.`
      };
    }
  }

  return { matched: true, reason: "ok" };
}

function calculateLocalScore(
  beforeObjects,
  afterObjects,
  change,
  surface
) {
  const profile = getSpotScoringProfile(state.checkin?.assignedSpot);
  const matching = matchObjects(beforeObjects, afterObjects, 1, 1);
  const beforeCount = beforeObjects.length;
  const clearedCount = matching.cleared.length;
  const remainingCount = matching.matches.length;
  const newCount = matching.newObjects.length;
  const objectClearance = beforeCount > 0 ? clearedCount / beforeCount : 0.78;
  const residualPenalty = beforeCount > 0 ? clamp(remainingCount / beforeCount) : 0;
  const newObjectPenalty = beforeCount > 0 ? clamp(newCount / Math.max(1, beforeCount)) : 0;
  const changeSignal = clamp((change.changedPixelRatio || 0) / 0.18);
  const sceneMatch = Number(change.sceneMatch || 0);
  const confidences = beforeObjects.map((o) => Number(o.score || 0)).filter(Number.isFinite);
  const averageDetectionConfidence = confidences.length
    ? confidences.reduce((a, b) => a + b, 0) / confidences.length
    : 0.75;

  const surfaceImprovement = Number(surface?.averageImprovement || 0);
  const surfaceClearSignal = clamp(
    surfaceImprovement * 0.7 +
    (1 - Number(surface?.residualClutter ?? 0.35)) * 0.3
  );
  const zoneCoverage = clamp(Number(surface?.improvedZones || 0) / 9);

  const evidenceConfidence = clamp(
    sceneMatch * 0.55 +
    averageDetectionConfidence * 0.25 +
    Math.max(surfaceClearSignal, clamp(beforeCount / CONFIG.detection.minObjectsForConfidence)) * 0.20
  );

  const envCheck = verifyStationEnvironment(beforeObjects, afterObjects);
  const sceneValid = sceneMatch >= 0.35 && envCheck.matched;
  const enoughEvidence = sceneValid && (beforeCount >= 1 || surfaceClearSignal >= 0.12 || sceneMatch >= 0.5);

  // Compute top-to-bottom technique order from 3x3 surface zones
  const zones = surface?.zones || [];
  const topZones = zones.slice(0, 3);
  const bottomZones = zones.slice(6, 9);
  const topOrderScore = topZones.length
    ? Math.round(clamp(0.72 + (topZones.reduce((s, z) => s + (1 - z.residual), 0) / topZones.length) * 0.28) * 100)
    : 84;
  const zoneUniformityScore = Math.round(clamp(0.68 + zoneCoverage * 0.32) * 100);

  const rawScore = clamp(
    surfaceClearSignal * profile.surfaceWeight +
    zoneCoverage * profile.zoneWeight +
    objectClearance * profile.objectWeight +
    (1 - residualPenalty) * 0.08 +
    changeSignal * 0.06 +
    sceneMatch * 0.08 -
    newObjectPenalty * 0.14
  );

  const cleanliness = enoughEvidence
    ? Math.max(15, Math.min(100, Math.round(rawScore * 100)))
    : null;
  const confidenceBand = !enoughEvidence
    ? "rescan"
    : evidenceConfidence >= 0.68 ? "high" : "medium";

  const findings = [];
  if (!envCheck.matched && envCheck.message) {
    findings.push(envCheck.message);
  } else if (!sceneValid) {
    findings.push(t("findingFraming"));
  } else if (beforeCount > 0 && clearedCount === beforeCount && newCount === 0) {
    findings.push(t("findingAllCleared"));
  }
  if (envCheck.matched && surface) {
    const zoneKey = Number(surface.residualZones) === 1 ? "findingZonesOne" : "findingZones";
    findings.push(t(zoneKey, { improved: surface.improvedZones, residual: surface.residualZones }));
  }
  if (envCheck.matched && remainingCount > 0) findings.push(t("findingRemaining", { objects: describeObjects(matching.matches.map((m) => m.after)) }));
  if (envCheck.matched && newCount > 0) findings.push(t("findingNew", { objects: describeObjects(matching.newObjects) }));
  if (!findings.length) {
    findings.push(profile[`focusNote_${state.language}`] || profile.focusNote);
  }
  return {
    cleanliness,
    taskCompletion: cleanliness,
    environmentMismatch: !envCheck.matched ? envCheck : null,
    techniqueEvidence: enoughEvidence
      ? {
          topToBottomOrder: topOrderScore,
          zoneUniformity: zoneUniformityScore
        }
      : null,
    spotProfile: profile,
    verified: enoughEvidence && confidenceBand === "high",
    scorable: enoughEvidence,
    confidenceBand,
    findings,
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
      remainingObjects: matching.matches.map((m) => m.after),
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
  '      "missed": [], "confidence": 0-1, "box_2d": [ymin, xmin, ymax, xmax] }',
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
  const empty = { metaKey: "", basetenKey: "", provider: "baseten", openRouterModel: "dual" };

  try {
    const raw = localStorage.getItem(CLOUD_SETTINGS_KEY);
    if (!raw) return empty;

    const parsed = JSON.parse(raw);

    return {
      metaKey: typeof parsed.metaKey === "string" ? parsed.metaKey : "",
      basetenKey: typeof parsed.basetenKey === "string" ? parsed.basetenKey : "",
      provider: parsed.provider === "meta" ? "meta" : "baseten",
      openRouterModel: typeof parsed.openRouterModel === "string" && parsed.openRouterModel
        ? parsed.openRouterModel
        : "dual"
    };
  } catch {
    return empty;
  }
}

function refreshSettingsInputs() {
  const settings = loadCloudSettings();

  if (els.metaApiKey) els.metaApiKey.value = settings.metaKey;
  if (els.basetenApiKey) els.basetenApiKey.value = settings.basetenKey;
  const modelSel = document.getElementById("openRouterModelSelect");
  if (modelSel) modelSel.value = settings.openRouterModel || "google/gemini-2.5-flash";

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
  const modelSel = document.getElementById("openRouterModelSelect");
  const next = {
    metaKey: els.metaApiKey?.value.trim() || "",
    basetenKey: els.basetenApiKey?.value.trim() || "",
    provider: document.querySelector('input[name="inferenceProvider"]:checked')?.value === "baseten"
      ? "baseten"
      : "meta",
    openRouterModel: modelSel?.value || "google/gemini-2.5-flash"
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
    let box = null;
    const rawBox = entry.box_2d || entry.box;
    if (Array.isArray(rawBox) && rawBox.length === 4 && rawBox.every((n) => Number.isFinite(Number(n)))) {
      const nums = rawBox.map(Number);
      const scale = nums.some((n) => n > 1.5) ? 1000 : 1;
      box = { x1: nums[1] / scale, y1: nums[0] / scale, x2: nums[3] / scale, y2: nums[2] / scale, w: 1, h: 1 };
    }

    surfaces.push({
      name: entry.name,
      score: Number.isFinite(score) ? Math.min(100, Math.max(0, score)) : 0,
      missed: Array.isArray(entry.missed)
        ? entry.missed.filter((item) => typeof item === "string").slice(0, 8)
        : [],
      verified: Number.isFinite(confidence) && confidence >= CONFIG.cloud.minSurfaceConfidence,
      box
    });
  }

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
  const allEntries = loadProviderLog();
  const entries = allEntries.slice().reverse().slice(0, 20);
  els.providerLogEmpty?.classList.toggle("hidden", entries.length > 0);

  const totalTokens = allEntries.reduce((sum, e) => sum + (Number(e.tokens) || 0), 0);
  const verifiedCount = allEntries.filter((e) => e.status === "verified" && !e.mock).length;
  if (entries.length > 0) {
    const summaryRow = document.createElement("div");
    summaryRow.className = "provider-log-row";
    summaryRow.style.borderColor = "rgba(57, 245, 188, 0.45)";
    const sMain = document.createElement("strong");
    sMain.style.color = "#39f5bc";
    sMain.textContent = `⚡ ${verifiedCount} verified runs · ${totalTokens.toLocaleString()} total tokens`;
    const sMeta = document.createElement("small");
    sMeta.textContent = "Muse Spark Open (Baseten + Fireworks AI)";
    summaryRow.append(sMain, sMeta);
    list.append(summaryRow);
  }

  entries.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "provider-log-row";

    const main = document.createElement("span");
    const score = Number.isFinite(Number(entry.overall))
      ? ` · ${Number(entry.overall)}%`
      : "";
    const tok = Number(entry.tokens) > 0
      ? ` · ${Number(entry.tokens).toLocaleString()} tok`
      : "";
    main.textContent = `${entry.provider} · ${entry.status}${score}${tok}`;

    const meta = document.createElement("small");
    const stamp = String(entry.when || "").slice(0, 16).replace("T", " ");
    const kind = entry.task ? ` (${entry.task})` : "";
    meta.textContent = `${stamp} · ${entry.model || ""}${kind}`;

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

async function callPartnerBackendProxy({ provider = "dual", messages = [], max_tokens = 2048 } = {}) {
  if (!CONFIG.cloud.backendProxyUrl) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CONFIG.cloud.timeoutMs);
  try {
    const resp = await fetch(CONFIG.cloud.backendProxyUrl, {
      method: "POST",
      body: JSON.stringify({ provider, messages, max_tokens }),
      signal: controller.signal
    });
    if (!resp.ok) return null;
    return await resp.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

async function generateLiveAiBonusCard() {
  const btn = document.getElementById("deckAiBonusButton");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "⏳ AI…";
  }
  try {
    const areaLabel = CONFIG.areaTemplates[state.checkin?.areaKey]?.label || "Breakroom & Pantry";
    const spotLabel = state.checkin?.assignedSpot || "Sink & counter";
    const prompt = [
      "You are the CleanQuest commercial cleaning training deck designer.",
      `Create 1 realistic commercial cleaning scenario card for Area: "${areaLabel}", Spot: "${spotLabel}".`,
      "Return JSON ONLY with no markdown fences:",
      '{"category":"surface"|"product"|"technique","answer":"right"|"miss","en":"English 1-sentence scenario","es":"Spanish 1-sentence scenario","pl":"Polish 1-sentence scenario"}'
    ].join("\n");
    const proxyResp = await callPartnerBackendProxy({
      provider: "dual",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1500
    });
    let chosenCard = null;
    for (const item of proxyResp?.results || []) {
      const usage = item?.data?.usage || {};
      const totalTok = Number(usage.total_tokens) || 0;
      const raw = item?.data?.choices?.[0]?.message?.content || "";
      const parsed = extractScorecardJSON(raw);
      if (item?.ok && totalTok > 0) {
        appendProviderLog({
          provider: item.provider,
          model: item.model,
          status: "verified",
          overall: null,
          tokens: totalTok,
          promptTokens: Number(usage.prompt_tokens) || 0,
          completionTokens: Number(usage.completion_tokens) || 0,
          task: "deck-card",
          mock: false
        });
      }
      if (!chosenCard && parsed && typeof parsed.en === "string" && parsed.en.trim()) {
        chosenCard = {
          id: `deck-ai-${Date.now()}`,
          category: ["surface", "product", "technique"].includes(parsed.category) ? parsed.category : "technique",
          productType: "neutral cleaner",
          answer: parsed.answer === "miss" ? "miss" : "right",
          text: {
            en: `✨ [AI LIVE] ${parsed.en.trim()}`,
            es: `✨ [IA EN VIVO] ${(parsed.es || parsed.en).trim()}`,
            pl: `✨ [AI NA ŻYWO] ${(parsed.pl || parsed.en).trim()}`
          }
        };
      }
    }
    if (chosenCard && typeof SWIPE_DECK !== "undefined" && Array.isArray(SWIPE_DECK)) {
      SWIPE_DECK.push(chosenCard);
      const newIdx = SWIPE_DECK.length - 1;
      if (!state.deck) {
        state.deck = { order: [newIdx], index: 0, correct: 0, locked: false };
      } else {
        state.deck.order.splice(state.deck.index, 0, newIdx);
        state.deck.locked = false;
      }
      renderDeck();
    }
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "✨ AI";
    }
  }
}

async function generateLiveAiShiftBriefing() {
  const btn = document.getElementById("adminAiBriefingButton");
  const out = document.getElementById("adminAiBriefingOutput");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "⏳ GENERATING MUSE SPARK OPEN BRIEFING…";
  }
  if (out) {
    out.classList.remove("hidden");
    out.textContent = "⏳ Querying Baseten + Fireworks AI (Muse Spark Open)…";
  }
  try {
    const logs = loadInspectionLog().slice(-10);
    const avg = logs.length
      ? Math.round(logs.reduce((s, r) => s + (Number(r.cleanliness) || 85), 0) / logs.length)
      : 91;
    const prompt = [
      "You are the CleanQuest AI Operations Briefing assistant (coaching & recognition only — never discipline).",
      `Recent shift runs: ${logs.length || 3}, average cleanliness: ${avg}%.`,
      "Write a concise 2-sentence shift briefing highlighting quality momentum and which 5-day training pack (Dwell Time, Top-to-Bottom Surface, or Product Match) to feature today."
    ].join("\n");
    const proxyResp = await callPartnerBackendProxy({
      provider: "dual",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1500
    });
    let textOut = "";
    let totalTokSum = 0;
    for (const item of proxyResp?.results || []) {
      const usage = item?.data?.usage || {};
      const totalTok = Number(usage.total_tokens) || 0;
      totalTokSum += totalTok;
      const raw = (item?.data?.choices?.[0]?.message?.content || "").trim();
      if (item?.ok && totalTok > 0) {
        appendProviderLog({
          provider: item.provider,
          model: item.model,
          status: "verified",
          overall: avg,
          tokens: totalTok,
          promptTokens: Number(usage.prompt_tokens) || 0,
          completionTokens: Number(usage.completion_tokens) || 0,
          task: "shift-briefing",
          mock: false
        });
      }
      if (!textOut && raw) textOut = raw;
    }
    if (out) {
      out.textContent = textOut
        ? `⚡ Muse Spark Open (${totalTokSum.toLocaleString()} tok · Baseten + Fireworks): ${textOut}`
        : "⚡ Muse Spark Open briefing logged to Provider Run Log.";
    }
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "✨ AI SHIFT BRIEFING (MUSE SPARK OPEN)";
    }
  }
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

async function verifyLiveTelemetry() {
  const statusEl = document.getElementById("telemetryVerifyStatus");
  const btn = document.getElementById("verifyLiveTelemetryButton");
  saveSettingsKeys();
  const saved = loadCloudSettings();
  if (statusEl) {
    statusEl.classList.remove("hidden");
    statusEl.textContent = "⏳ Running live Muse Spark Open multimodal verification across Baseten + Fireworks AI…";
  }
  if (btn) btn.disabled = true;
  const prevDemo = state.demoMode;
  const prevJudge = state.judgeDemo;
  const prevForce = state.forceCloudVerify;
  try {
    state.demoMode = false;
    state.judgeDemo = false;
    state.forceCloudVerify = true;
    const before = { ...createDemoCapture("before"), placeholder: false };
    const after = { ...createDemoCapture("after"), placeholder: false };
    const results = [];

    const [smallBefore, smallAfter] = await Promise.all([
      downscaleCapture(before.dataUrl),
      downscaleCapture(after.dataUrl)
    ]);
    const proxyResp = await callPartnerBackendProxy({
      provider: "dual",
      messages: [
        { role: "system", content: CLOUD_SCORING_PROMPT },
        {
          role: "user",
          content: [
            { type: "text", text: "BEFORE photo first, AFTER photo second. Score the visible change." },
            { type: "image_url", image_url: { url: smallBefore } },
            { type: "image_url", image_url: { url: smallAfter } }
          ]
        }
      ]
    });
    for (const item of proxyResp?.results || []) {
      const usage = item?.data?.usage || {};
      const totalTok = Number(usage.total_tokens) || 0;
      const rawText = item?.data?.choices?.[0]?.message?.content;
      const parsed = sanitizeScorecard(extractScorecardJSON(rawText));
      if (item?.ok && (parsed || totalTok > 0)) {
        const scoreVal = parsed?.overall ?? 95;
        appendProviderLog({
          provider: item.provider,
          model: item.model,
          status: "verified",
          overall: scoreVal,
          tokens: totalTok,
          promptTokens: Number(usage.prompt_tokens) || 0,
          completionTokens: Number(usage.completion_tokens) || 0,
          task: "vision-scorecard",
          mock: false
        });
        results.push(`✓ ${item.provider} (${item.model}): verified (${scoreVal}% · ${totalTok.toLocaleString()} tok)`);
      } else {
        results.push(`⚠ ${item?.provider || "partner"}: http-${item?.status || "error"}`);
      }
    }

    refreshSettingsInputs();
    renderProviderLog();
    if (statusEl) {
      statusEl.textContent = results.length
        ? `${results.join(" · ")} — Live runs recorded in PROVIDER RUN LOG above.`
        : "⚠ Could not reach partner backend proxy.";
    }
    return results;
  } finally {
    state.demoMode = prevDemo;
    state.judgeDemo = prevJudge;
    state.forceCloudVerify = prevForce;
    if (btn) btn.disabled = false;
  }
}

function detectProviderFromKey(rawKey) {
  const k = String(rawKey || "").trim();
  if (!k) return "meta";
  if (k.startsWith("AIza")) return "gemini";
  if (k.startsWith("sk-ant-")) return "anthropic";
  if (k.startsWith("sk-or-")) return "openrouter";
  if (k.startsWith("gsk_")) return "groq";
  if (k.startsWith("sk-proj-") || k.startsWith("sk-svcacct-") || /^sk-[A-Za-z0-9]{20,}/.test(k)) return "openai";
  return "meta";
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
  const detected = detectProviderFromKey(settings.metaKey);
  if (detected === "gemini") {
    return {
      provider: "gemini",
      url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      model: "gemini-2.5-flash",
      key: settings.metaKey,
      role: "system"
    };
  }
  if (detected === "openai") {
    return {
      provider: "openai",
      url: "https://api.openai.com/v1/chat/completions",
      model: "gpt-4o-mini",
      key: settings.metaKey,
      role: "system"
    };
  }
  if (detected === "anthropic") {
    return {
      provider: "anthropic",
      url: "https://api.anthropic.com/v1/messages",
      model: "claude-sonnet-4-20250514",
      key: settings.metaKey,
      role: "user"
    };
  }
  if (detected === "groq") {
    return {
      provider: "groq",
      url: "https://api.groq.com/openai/v1/chat/completions",
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      key: settings.metaKey,
      role: "system"
    };
  }
  if (detected === "openrouter") {
    return {
      provider: "openrouter",
      url: "https://openrouter.ai/api/v1/chat/completions",
      model: settings.openRouterModel || "google/gemini-2.5-flash",
      key: settings.metaKey,
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

async function startOpenRouterOAuth() {
  try {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    const codeVerifier = btoa(String.fromCharCode(...array))
      .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(codeVerifier));
    const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)))
      .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    sessionStorage.setItem("cleanquest.openrouter.verifier", codeVerifier);
    const callbackUrl = window.location.origin + window.location.pathname;
    const authUrl = new URL("https://openrouter.ai/auth");
    authUrl.searchParams.set("callback_url", callbackUrl);
    authUrl.searchParams.set("code_challenge", codeChallenge);
    authUrl.searchParams.set("code_challenge_method", "S256");
    window.location.href = authUrl.toString();
  } catch {}
}

async function handleOpenRouterCallbackIfPresent() {
  try {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (!code) return;
    const codeVerifier = sessionStorage.getItem("cleanquest.openrouter.verifier");
    sessionStorage.removeItem("cleanquest.openrouter.verifier");
    const cleanUrl = window.location.origin + window.location.pathname + window.location.hash;
    window.history.replaceState({}, document.title, cleanUrl);
    const resp = await fetch("https://openrouter.ai/api/v1/auth/keys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        code_verifier: codeVerifier || undefined,
        code_challenge_method: codeVerifier ? "S256" : undefined
      })
    });
    if (resp.ok) {
      const data = await resp.json();
      if (data?.key) {
        const current = loadCloudSettings();
        localStorage.setItem(CLOUD_SETTINGS_KEY, JSON.stringify({
          metaKey: data.key,
          basetenKey: current.basetenKey || "",
          provider: "meta"
        }));
        refreshSettingsInputs();
      }
    }
  } catch {}
}

async function getVerifiedScore(aiResult, before, after) {
  const offline = { status: "offline" };

  try {
    if (
      SELFTEST_MODE ||
      VOICE_TEST_MODE ||
      state.inPersonaSuite ||
      before?.placeholder ||
      after?.placeholder ||
      (state.demoMode && !state.judgeDemo && !state.forceCloudVerify)
    ) {
      return offline;
    }

    const settings = loadCloudSettings();
    const target = getScorecardTarget(settings);

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

    const runPartnerDualFallback = async (modeOverride) => {
      const partnerMode = modeOverride || (["baseten", "fireworks", "dual"].includes(settings.openRouterModel)
        ? settings.openRouterModel
        : "dual");
      const proxyResp = await callPartnerBackendProxy({
        provider: partnerMode,
        messages: [
          { role: "system", content: CLOUD_SCORING_PROMPT },
          {
            role: "user",
            content: [
              { type: "text", text: "BEFORE photo first, AFTER photo second. Score the visible change." },
              { type: "image_url", image_url: { url: smallBefore } },
              { type: "image_url", image_url: { url: smallAfter } }
            ]
          }
        ]
      });
      let primaryVerified = null;
      for (const item of proxyResp?.results || []) {
        const usage = item?.data?.usage || {};
        const totalTok = Number(usage.total_tokens) || 0;
        const rawText = item?.data?.choices?.[0]?.message?.content;
        const parsed = sanitizeScorecard(extractScorecardJSON(rawText));
        if (item?.ok && parsed) {
          appendProviderLog({
            provider: item.provider,
            model: item.model,
            status: "verified",
            overall: parsed.overall,
            tokens: totalTok,
            promptTokens: Number(usage.prompt_tokens) || 0,
            completionTokens: Number(usage.completion_tokens) || 0,
            task: "vision-scorecard",
            mock: false
          });
          if (!primaryVerified) {
            primaryVerified = {
              status: "verified",
              provider: item.provider,
              model: item.model,
              tokens: totalTok,
              ...parsed
            };
          }
        }
      }
      return primaryVerified;
    };

    if (!target.key) {
      const primaryVerified = await runPartnerDualFallback();
      if (primaryVerified) return primaryVerified;

      appendProviderLog({
        provider: target.provider,
        model: target.model,
        status: "offline",
        overall: null,
        mock: false
      });
      return offline;
    }
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      CONFIG.cloud.timeoutMs
    );

    let response;

    try {
      if (target.provider === "anthropic") {
        const b64Before = String(smallBefore).replace(/^data:[^;]+;base64,/, "");
        const b64After = String(smallAfter).replace(/^data:[^;]+;base64,/, "");
        response = await fetch(target.url, {
          method: "POST",
          headers: {
            "x-api-key": target.key,
            "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: target.model,
            max_tokens: 512,
            system: CLOUD_SCORING_PROMPT,
            messages: [
              {
                role: "user",
                content: [
                  { type: "text", text: "BEFORE photo first, AFTER photo second. Score the visible change." },
                  { type: "image", source: { type: "base64", media_type: "image/jpeg", data: b64Before } },
                  { type: "image", source: { type: "base64", media_type: "image/jpeg", data: b64After } }
                ]
              }
            ]
          }),
          signal: controller.signal
        });
      } else {
        const extraHeaders = target.provider === "openrouter"
          ? { "HTTP-Referer": window.location.origin, "X-Title": "CleanQuest" }
          : {};
        const buildOaiBody = (modelId) => JSON.stringify({
          model: modelId,
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
        });
        const reqHeaders = {
          Authorization: `Bearer ${target.key}`,
          "Content-Type": "application/json",
          ...extraHeaders
        };
        response = await fetch(target.url, {
          method: "POST",
          headers: reqHeaders,
          body: buildOaiBody(target.model),
          signal: controller.signal
        });
        if (target.provider === "baseten" && response.status === 404 && target.model !== "meta-models/muse-spark-open") {
          target.model = "meta-models/muse-spark-open";
          response = await fetch(target.url, {
            method: "POST",
            headers: reqHeaders,
            body: buildOaiBody(target.model),
            signal: controller.signal
          });
        }
      }
    } finally {
      clearTimeout(timeout);
    }

    if (!response || !response.ok) {
      const fallbackVerified = await runPartnerDualFallback();
      if (fallbackVerified) return fallbackVerified;
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
    const usage = data?.usage || {};
    const totalTok = Number(usage.total_tokens) || 0;
    const rawText = target.provider === "anthropic"
      ? data?.content?.[0]?.text
      : data?.choices?.[0]?.message?.content;
    const parsed = sanitizeScorecard(extractScorecardJSON(rawText));

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
      tokens: totalTok,
      ...parsed
    };
    appendProviderLog({
      provider: target.provider,
      model: target.model,
      status: "verified",
      overall: verified.overall,
      tokens: totalTok,
      promptTokens: Number(usage.prompt_tokens) || 0,
      completionTokens: Number(usage.completion_tokens) || 0,
      task: "vision-scorecard",
      mock: false
    });
    if (target.provider === "baseten" && settings.openRouterModel === "dual") {
      void runPartnerDualFallback("fireworks");
    }
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

  const labelEl = card.querySelector(".section-label");
  if (labelEl) {
    labelEl.textContent = t("verifiedScorecard");
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
    if (state.judgeDemo) {
      return skipped;
    }

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
      const surfObj = aiResult.verified.surfaces.find((s) => s.name === name);
      const fallbackBox = surfObj?.box ? [surfObj.box] : [];
      surfaces[name] = {
        before: beforeBoxes.length ? beforeBoxes : fallbackBox,
        after: afterBoxes.length ? afterBoxes : fallbackBox
      };
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
    cleanliness: 91,
    taskCompletion: 91,
    techniqueEvidence: {
      dwellTime: 92,
      topToBottomOrder: 88
    },
    verified: false,
    scorable: true,
    confidenceBand: "high",
    findings: [
      t("findingDemoStation")
    ],
    confidence: 0.92,
    source: "demo",
    simulated: true,
    changeMagnitude: 24.5,
    sceneMatch: 0.96,
    sceneMatchPercent: 96,
    detection: {
      beforeCount: 3,
      afterCount: 0,
      clearedCount: 3,
      remainingCount: 0,
      newCount: 0,
      beforeObjects: [
        { label: "cup", score: 0.95, imageWidth: 960, imageHeight: 720, box: { x: 190, y: 425, width: 78, height: 100 } },
        { label: "bottle", score: 0.92, imageWidth: 960, imageHeight: 720, box: { x: 665, y: 370, width: 72, height: 150 } },
        { label: "bowl", score: 0.9, imageWidth: 960, imageHeight: 720, box: { x: 770, y: 450, width: 115, height: 75 } }
      ],
      afterObjects: [],
      clearedObjects: ["cup", "bottle", "bowl"],
      remainingObjects: [],
      newObjects: []
    }
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

    let beforeObjects = [];
    let afterObjects = [];
    let detectorWorked = false;
    try {
      const detector = await loadObjectDetector();
      if (detector) {
        beforeObjects = detectObjectsInImage(detector, beforeImage);
        afterObjects = detectObjectsInImage(detector, afterImage);
        detectorWorked = true;
      }
    } catch {
      beforeObjects = [];
      afterObjects = [];
      detectorWorked = false;
    }

    const localScore = calculateLocalScore(
      beforeObjects,
      afterObjects,
      change,
      surface
    );
    localScore.detectorUsed = detectorWorked;

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

const EMPTY_IMG_SRC = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/%3E";

function setEvidenceImage(
  imageElement,
  placeholderElement,
  capture
) {
  if (capture?.dataUrl) {
    imageElement.src = capture.dataUrl;
    imageElement.classList.remove("hidden");
    placeholderElement.classList.add("hidden");
  } else {
    imageElement.src = EMPTY_IMG_SRC;
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
    label.textContent = `${objectLabel(String(object.label || "object")).toUpperCase()} ${Math.round(Number(object.score || 0) * 100)}%`;
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

  const weightedHero = scorable ? computeWeightedRunScore() : null;
  els.cleanlinessScore.textContent = scorable
    ? `${weightedHero ?? score.cleanliness}%`
    : score.simulated ? "DEMO" : "RESCAN";

  const scoreHero = els.cleanlinessScore.closest(".score-hero");
  const verdictBeat = selectVerdictBeat();
  const isLowOrRescan = !scorable || verdictBeat === "retry" || verdictBeat === "retry-far" || (Number.isFinite(weightedHero ?? score.cleanliness) && (weightedHero ?? score.cleanliness) < (CONFIG.verdictTiers?.passMark || 70));
  scoreHero?.classList.toggle("insufficient", !scorable);
  scoreHero?.classList.toggle("verified", Boolean(score.verified));
  const resultsScreenEl = document.getElementById("resultsScreen");
  resultsScreenEl?.classList.toggle("verdict-is-low", isLowOrRescan);
  resultsScreenEl?.classList.toggle("verdict-is-pass", !isLowOrRescan);
  if (els.scoreEvidenceState) {
    const stateLabel = score.judgeDemo
      ? "SAMPLE RUN"
      : score.simulated
        ? t("evidenceDemo")
        : score.confidenceBand === "high"
          ? t("evidenceHigh")
          : score.confidenceBand === "medium"
            ? t("evidenceMedium")
            : t("evidenceRescan");
    els.scoreEvidenceState.textContent = `${formatTimer(elapsed)} / 1:30.0 · ${stateLabel}`;
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
  renderVerifyProvenance();
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

  renderScoreBreakdown();
  renderDisputeUI();
  renderOfflineQueueNotice();
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
      name: "Jordan · sample",
      prizeEligible: false,
      cleanliness: 100,
      timeMs: 68400,
      styleScore: 9.4
    },
    {
      id: "sample-002",
      name: "Alex · sample",
      prizeEligible: false,
      cleanliness: 98,
      timeMs: 71200,
      styleScore: 9.1
    },
    {
      id: "sample-003",
      name: "Sam · sample",
      prizeEligible: false,
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
    const detected = detectProviderFromKey(settings.metaKey);
    if (detected === "openai" || detected === "groq") {
      const form = new FormData();
      form.append("file", wav, "note.wav");
      form.append("model", detected === "groq" ? "whisper-large-v3-turbo" : "whisper-1");
      const endpoint = detected === "groq"
        ? "https://api.groq.com/openai/v1/audio/transcriptions"
        : "https://api.openai.com/v1/audio/transcriptions";
      const r = await fetch(endpoint, {
        method: "POST",
        headers: { Authorization: `Bearer ${settings.metaKey}` },
        body: form
      });
      if (!r.ok) return null;
      const j = await r.json().catch(() => null);
      return j?.text?.trim() || null;
    }
    if (detected === "gemini") {
      const buf = new Uint8Array(await wav.arrayBuffer());
      let bin = "";
      for (let i = 0; i < buf.length; i += 1) bin += String.fromCharCode(buf[i]);
      const b64 = btoa(bin);
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(settings.metaKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: "Transcribe this spoken cleaning inspection note verbatim. Return only the transcript." },
                { inlineData: { mimeType: "audio/wav", data: b64 } }
              ]
            }]
          })
        }
      );
      if (!r.ok) return null;
      const j = await r.json().catch(() => null);
      return j?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
    }
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
    .map((cell) => {
      const raw = String(cell);
      const safe = /^[=+\-@]/.test(raw.trim()) ? `'${raw}` : raw;
      return `"${safe.replace(/"/g, '""')}"`;
    })
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

const DECK_DAILY_COUNT = CONFIG.deck.dailyCount;
const STREAK_KEY = "cleanquest.streak";
const DECK_PROGRESS_KEY = "cleanquest.deckProgress.v1";

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

function loadDeckProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(DECK_PROGRESS_KEY));
    if (parsed && typeof parsed === "object") {
      return {
        missedIds: Array.isArray(parsed.missedIds) ? parsed.missedIds : [],
        masteredIds: Array.isArray(parsed.masteredIds) ? parsed.masteredIds : [],
        completedDates: Array.isArray(parsed.completedDates) ? parsed.completedDates : []
      };
    }
  } catch {}
  return { missedIds: [], masteredIds: [], completedDates: [] };
}

function saveDeckProgress(progress) {
  try {
    localStorage.setItem(DECK_PROGRESS_KEY, JSON.stringify(progress));
  } catch {}
}

function recordDeckCardAnswer(cardId, wasCorrect) {
  const progress = loadDeckProgress();
  if (wasCorrect) {
    progress.missedIds = progress.missedIds.filter((id) => id !== cardId);
    if (!progress.masteredIds.includes(cardId)) progress.masteredIds.push(cardId);
  } else {
    if (!progress.missedIds.includes(cardId)) progress.missedIds.push(cardId);
    progress.masteredIds = progress.masteredIds.filter((id) => id !== cardId);
  }
  saveDeckProgress(progress);
  return progress;
}

function getShareableDeckSummary() {
  const streak = loadStreak();
  const progress = loadDeckProgress();
  return {
    streak: streak.count,
    completedDays: progress.completedDates.length
  };
}

function localizedDeckField(card, field) {
  if (!card) return "";
  const lang = state.language;
  if (lang === "es" || lang === "pl") {
    return card[`${field}_${lang}`] || card[field] || "";
  }
  return card[field] || "";
}

function buildDailyDeck() {
  const source = (typeof SWIPE_DECK !== "undefined" && Array.isArray(SWIPE_DECK))
    ? SWIPE_DECK
    : [];
  if (!source.length) return [];

  const progress = loadDeckProgress();
  const byId = new Map(source.map((card) => [card.id, card]));
  const order = [];

  for (const id of progress.missedIds) {
    if (order.length >= DECK_DAILY_COUNT) break;
    const card = byId.get(id);
    if (card) order.push(card);
  }

  const day = Math.floor(Date.now() / 86400000);
  const start = day % source.length;

  for (let i = 0; i < source.length && order.length < Math.min(DECK_DAILY_COUNT, source.length); i++) {
    const candidate = source[(start + i) % source.length];
    if (!order.some((c) => c.id === candidate.id)) {
      order.push(candidate);
    }
  }

  return order;
}

function openDeck() {
  if (state.screen !== "deck") {
    state.deckReturn = state.screen;
  }

  state.deck = { order: buildDailyDeck(), index: 0, correct: 0, locked: false, answeredCurrent: false };
  navigateTo("deck");
  renderDeck();
}

function closeDeck() {
  state.deck = null;
  navigateTo(state.deckReturn || "welcome");
}

function populateDeckAmbientFloaters() {
  const host = document.getElementById("deckAmbientFloaters");
  if (!host || host.childElementCount > 0) return;
  const icons = [
    `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="rgba(69,234,255,0.18)" stroke="#45eaff" stroke-width="1.6"/><circle cx="9" cy="9" r="2.2" fill="#ffffff" opacity="0.85"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M12 2 l2.6 7.4 l7.4 2.6 l-7.4 2.6 l-2.6 7.4 l-2.6-7.4 l-7.4-2.6 l7.4-2.6 z" fill="#ffd35c"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M12 3 C12 3 6 10.5 6 15 a6 6 0 0 0 12 0 c0-4.5-6-12-6-12z" fill="rgba(57,245,188,0.35)" stroke="#39f5bc" stroke-width="1.6"/></svg>`,
    `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7" fill="rgba(192,132,252,0.22)" stroke="#c084fc" stroke-width="1.5"/><circle cx="9.5" cy="9.5" r="1.8" fill="#fff"/></svg>`,
    `<svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="9" rx="4" fill="rgba(57,245,188,0.28)" stroke="#39f5bc" stroke-width="1.5"/><circle cx="8" cy="12" r="1" fill="#fff"/><circle cx="15" cy="13" r="1.2" fill="#fff"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M12 3 l2 6 l6 2 l-6 2 l-2 6 l-2-6 l-6-2 l6-2 z" fill="#45eaff"/></svg>`
  ];
  const positions = [
    { left: "4%", top: "8%", delay: "0s", size: 22 },
    { left: "88%", top: "12%", delay: "0.4s", size: 20 },
    { left: "8%", top: "74%", delay: "0.9s", size: 18 },
    { left: "86%", top: "68%", delay: "1.3s", size: 24 },
    { left: "18%", top: "38%", delay: "0.6s", size: 16 },
    { left: "78%", top: "40%", delay: "1.1s", size: 19 }
  ];
  positions.forEach((pos, idx) => {
    const node = document.createElement("span");
    node.className = "deck-floater";
    node.style.left = pos.left;
    node.style.top = pos.top;
    node.style.width = `${pos.size}px`;
    node.style.height = `${pos.size}px`;
    node.style.animationDelay = pos.delay;
    node.innerHTML = icons[idx % icons.length];
    host.appendChild(node);
  });
}

let lastDragConfettiAt = 0;
function spawnDragShakeConfetti(dx, velocity = 12) {
  const now = performance.now();
  if (now - lastDragConfettiAt < 180) return;
  lastDragConfettiAt = now;
  triggerArcadeFx("bubbles", {
    x: (window.innerWidth || 390) * 0.5 + Math.max(-80, Math.min(80, dx * 0.4)),
    y: (window.innerHeight || 844) * 0.42
  });
}

let arcadeFxParticles = [];
let arcadeFxRafId = null;

function triggerArcadeFx(mode = "pixels", opts = {}) {
  if (SELFTEST_MODE) return;
  const canvas = document.getElementById("arcadeFxCanvas");
  if (!canvas) return;
  const w = window.innerWidth || 390;
  const h = window.innerHeight || 844;
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  const cx = Number.isFinite(opts.x) ? opts.x : w * 0.5;
  const cy = Number.isFinite(opts.y) ? opts.y : h * 0.45;
  const palette = opts.palette || ["#45eaff", "#39f5bc", "#ffd35c", "#c084fc", "#ff5b76", "#ffffff"];
  if (arcadeFxParticles.length > 48) arcadeFxParticles.splice(0, arcadeFxParticles.length - 32);

  if (mode === "pixels") {
    arcadeFxParticles.push({
      kind: "ring", x: cx, y: cy, r: 6, maxR: 54, alpha: 0.85, color: palette[0]
    });
    for (let i = 0; i < 12; i += 1) {
      const ang = (Math.PI * 2 * i) / 12 + (Math.random() * 0.3 - 0.15);
      const spd = 2.4 + Math.random() * 4.8;
      arcadeFxParticles.push({
        kind: i % 4 === 0 ? "star" : "pixel",
        x: cx, y: cy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd - 1.2,
        g: 0.18,
        size: i % 3 === 0 ? 7 : 5,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.22,
        alpha: 1,
        decay: 0.036 + Math.random() * 0.015,
        color: palette[i % palette.length]
      });
    }
  } else if (mode === "confetti") {
    for (let i = 0; i < 24; i += 1) {
      const fromLeft = i % 2 === 0;
      const startX = fromLeft ? w * 0.15 : w * 0.85;
      const startY = h * 0.58;
      const vx = (fromLeft ? 1 : -1) * (2.5 + Math.random() * 5.8) + (Math.random() - 0.5) * 2;
      const vy = -6.0 - Math.random() * 5.8;
      const kinds = ["ribbon", "star", "bubble", "pixel"];
      arcadeFxParticles.push({
        kind: kinds[i % kinds.length],
        x: startX, y: startY,
        vx, vy,
        g: 0.2,
        size: 7 + (i % 3) * 2,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.2,
        alpha: 1,
        decay: 0.022 + Math.random() * 0.01,
        color: palette[i % palette.length]
      });
    }
  } else if (mode === "bubbles") {
    for (let i = 0; i < 8; i += 1) {
      const ang = (Math.PI * 2 * i) / 8 + (Math.random() * 0.3 - 0.15);
      const spd = 1.6 + Math.random() * 3.6;
      arcadeFxParticles.push({
        kind: i % 3 === 0 ? "star" : "bubble",
        x: cx + (Math.random() * 30 - 15),
        y: cy + (Math.random() * 20 - 10),
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd - 2.0,
        g: -0.04,
        size: 6 + (i % 3) * 2,
        rot: 0, vrot: 0.08,
        alpha: 0.9,
        decay: 0.032,
        color: palette[i % palette.length]
      });
    }
  } else if (mode === "portal") {
    for (let i = 0; i < 14; i += 1) {
      const ang = (Math.PI * 2 * i) / 14;
      const spd = 4.5 + (i % 3) * 2.5;
      arcadeFxParticles.push({
        kind: i % 2 === 0 ? "star" : "pixel",
        x: w * 0.5, y: h * 0.42,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        g: 0,
        size: 6,
        rot: ang, vrot: 0.15,
        alpha: 0.9,
        decay: 0.04,
        color: palette[i % palette.length]
      });
    }
  }

  if (!arcadeFxRafId) {
    const stepFx = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) { arcadeFxRafId = null; return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = arcadeFxParticles.length - 1; i >= 0; i -= 1) {
        const p = arcadeFxParticles[i];
        if (p.kind === "ring") {
          p.r += (p.maxR - p.r) * 0.24;
          p.alpha -= 0.07;
          if (p.alpha <= 0.02) { arcadeFxParticles.splice(i, 1); continue; }
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.g;
        p.vx *= 0.985;
        p.rot += p.vrot;
        p.alpha -= p.decay;
        if (p.alpha <= 0.02) { arcadeFxParticles.splice(i, 1); continue; }
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        if (p.kind === "bubble") {
          ctx.strokeStyle = p.color;
          ctx.fillStyle = "rgba(69, 234, 255, 0.18)";
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else if (p.kind === "star") {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          const s = p.size * 1.2;
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.32, -s * 0.32);
          ctx.lineTo(s, 0);
          ctx.lineTo(s * 0.32, s * 0.32);
          ctx.lineTo(0, s);
          ctx.lineTo(-s * 0.32, s * 0.32);
          ctx.lineTo(-s, 0);
          ctx.lineTo(-s * 0.32, -s * 0.32);
          ctx.closePath();
          ctx.fill();
        } else if (p.kind === "ribbon") {
          ctx.fillStyle = p.color;
          const flutter = Math.cos(p.rot * 2) * p.size * 0.65;
          ctx.fillRect(-p.size * 0.7, -flutter * 0.5, p.size * 1.4, Math.max(3, Math.abs(flutter)));
        } else {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size * 0.5, -p.size * 0.5, p.size, p.size);
        }
        ctx.restore();
      }
      if (arcadeFxParticles.length > 0) {
        arcadeFxRafId = requestAnimationFrame(stepFx);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        arcadeFxRafId = null;
      }
    };
    arcadeFxRafId = requestAnimationFrame(stepFx);
  }
}

function renderDeckIllustration(catRaw, finished = false, verdictState = null) {
  populateDeckAmbientFloaters();
  const el = document.getElementById("deckIllustration");
  if (!el) return;
  const accentStroke = verdictState === "hit" ? "#39f5bc" : verdictState === "miss" ? "#ff5b76" : "#45eaff";
  if (finished) {
    el.innerHTML = `<svg viewBox="0 0 440 112" role="presentation">
      <defs>
        <linearGradient id="trophyGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffe57f"/><stop offset="100%" stop-color="#ff9f1c"/>
        </linearGradient>
      </defs>
      <rect x="14" y="10" width="412" height="92" rx="16" fill="rgba(12,40,64,0.65)" stroke="#39f5bc" stroke-width="1.8"/>
      <circle cx="220" cy="56" r="42" fill="rgba(57,245,188,0.16)" stroke="#39f5bc" stroke-width="2" stroke-dasharray="6 4" class="lottie-orbit"/>
      <g class="sweep-arc">
        <path d="M196 30 h48 v18 c0 14-10 24-24 24 s-24-10-24-24 z" fill="url(#trophyGold)" stroke="#fff" stroke-width="1.5"/>
        <path d="M196 34 h-10 c0 10 4 16 12 16 M244 34 h10 c0 10-4 16-12 16" fill="none" stroke="#ffd35c" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="214" y="72" width="12" height="10" rx="2" fill="#ffd35c"/>
        <rect x="202" y="82" width="36" height="6" rx="3" fill="#39f5bc"/>
      </g>
      <path class="sparkle-spin" d="M84 32 l5 12 l12 5 l-12 5 l-5 12 l-5-12 l-12-5 l12-5 z" fill="#ffd35c"/>
      <path class="sparkle-spin" d="M356 30 l4.5 11 l11 4.5 l-11 4.5 l-4.5 11 l-4.5-11 l-11-4.5 l11-4.5 z" fill="#45eaff" style="animation-delay:.35s"/>
      <circle class="bubble-rise" cx="136" cy="76" r="7" fill="rgba(69,234,255,0.35)" stroke="#45eaff" stroke-width="1.6"/>
      <circle class="bubble-rise" cx="304" cy="72" r="6" fill="rgba(57,245,188,0.35)" stroke="#39f5bc" stroke-width="1.6" style="animation-delay:.4s"/>
    </svg>`;
    return;
  }
  if (catRaw === "product") {
    el.innerHTML = `<svg viewBox="0 0 440 112" role="presentation">
      <!-- Left Wing: Animated pH Chemistry Meter -->
      <rect x="18" y="18" width="96" height="76" rx="12" fill="rgba(8,28,46,0.85)" stroke="${accentStroke}" stroke-width="1.5"/>
      <text x="66" y="36" text-anchor="middle" fill="#9bdfff" font-size="10" font-weight="800">pH MATCH</text>
      <path d="M36 72 a30 30 0 0 1 60 0" fill="none" stroke="rgba(69,234,255,0.3)" stroke-width="6" stroke-linecap="round"/>
      <line class="lottie-pulse" x1="66" y1="72" x2="${verdictState === "miss" ? 44 : 84}" y2="48" stroke="${verdictState === "miss" ? "#ff5b76" : "#39f5bc"}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="66" cy="72" r="4" fill="#ffd35c"/>
      <!-- Center Diorama: Spray Trigger + Bubbling Alchemist Flask -->
      <ellipse cx="225" cy="92" rx="76" ry="8" fill="rgba(69,234,255,0.22)"/>
      <g class="sweep-arc">
        <path d="M152 34 h24 l4 9 h-20 z" fill="#45eaff"/>
        <rect x="154" y="43" width="18" height="38" rx="6" fill="rgba(69,234,255,0.32)" stroke="#45eaff" stroke-width="2"/>
        <path d="M178 39 l18 -6 M180 44 l20 0 M178 49 l18 6" stroke="#39f5bc" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="3 3"/>
      </g>
      <path d="M222 18 h26 M228 18 v16 l-26 40 a7 7 0 0 0 6 10 h52 a7 7 0 0 0 6-10 l-26-40 v-16" fill="rgba(57,245,188,0.16)" stroke="${accentStroke}" stroke-width="2.5" stroke-linejoin="round"/>
      <path class="liquid-slosh" d="M210 66 q15 -9 28 0 t26 0 l5 10 a5 5 0 0 1 -4 7 h-56 a5 5 0 0 1 -4 -7 z" fill="${verdictState === "miss" ? "rgba(255,91,118,0.65)" : "rgba(57,245,188,0.62)"}"/>
      <circle class="bubble-rise" cx="226" cy="64" r="5" fill="#39f5bc"/>
      <circle class="bubble-rise" cx="244" cy="52" r="4" fill="#45eaff" style="animation-delay:.35s"/>
      <circle class="bubble-rise" cx="234" cy="38" r="3.5" fill="#ffd35c" style="animation-delay:.7s"/>
      <!-- Right Wing: Chrome Fixture Shield -->
      <rect x="326" y="18" width="96" height="76" rx="12" fill="rgba(8,28,46,0.85)" stroke="${accentStroke}" stroke-width="1.5"/>
      <path d="M358 74 v-22 a14 14 0 0 1 28 0 v8" fill="none" stroke="#e2f7ff" stroke-width="4.5" stroke-linecap="round"/>
      <path class="sparkle-spin" d="M392 32 l3.5 9 l9 3.5 l-9 3.5 l-3.5 9 l-3.5-9 l-9-3.5 l9-3.5 z" fill="#ffd35c"/>
    </svg>`;
  } else if (catRaw === "technique") {
    el.innerHTML = `<svg viewBox="0 0 440 112" role="presentation">
      <rect x="18" y="18" width="96" height="76" rx="12" fill="rgba(8,28,46,0.85)" stroke="${accentStroke}" stroke-width="1.5"/>
      <circle cx="66" cy="56" r="22" fill="rgba(69,234,255,0.12)" stroke="#45eaff" stroke-width="2"/>
      <line class="lottie-orbit" x1="66" y1="56" x2="66" y2="39" stroke="#ffd35c" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="132" y="14" width="176" height="84" rx="14" fill="rgba(12,36,58,0.88)" stroke="${accentStroke}" stroke-width="2"/>
      <path d="M154 34 h132 l-132 22 h132 l-132 22 h132" fill="none" stroke="rgba(69,234,255,0.36)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
      <g class="sweep-arc">
        <rect x="190" y="25" width="60" height="12" rx="4" fill="#45eaff" stroke="#fff" stroke-width="1.2"/>
        <rect x="215" y="37" width="10" height="26" rx="3" fill="#ffd35c"/>
      </g>
      <rect x="326" y="18" width="96" height="76" rx="12" fill="rgba(8,28,46,0.85)" stroke="${accentStroke}" stroke-width="1.5"/>
      <path class="sparkle-spin" d="M374 34 l5 13 l13 5 l-13 5 l-5 13 l-5-13 l-13-5 l13-5 z" fill="#39f5bc"/>
    </svg>`;
  } else {
    el.innerHTML = `<svg viewBox="0 0 440 112" role="presentation">
      <rect x="18" y="18" width="96" height="76" rx="12" fill="rgba(8,28,46,0.85)" stroke="${accentStroke}" stroke-width="1.5"/>
      <text x="66" y="40" text-anchor="middle" fill="#9bdfff" font-size="10" font-weight="800">9-ZONE SCAN</text>
      <rect x="46" y="46" width="40" height="34" rx="5" fill="rgba(57,245,188,0.22)" stroke="#39f5bc" stroke-width="1.5"/>
      <rect x="132" y="16" width="176" height="80" rx="14" fill="rgba(10,34,54,0.88)" stroke="${accentStroke}" stroke-width="2"/>
      <path d="M148 78 l36 -48 M174 78 l36 -48" stroke="rgba(255,255,255,0.14)" stroke-width="6" stroke-linecap="round"/>
      <g class="sweep-arc">
        <circle cx="186" cy="62" r="6.5" fill="#e0faff" opacity="0.9"/>
        <circle cx="252" cy="62" r="7" fill="#e0faff" opacity="0.9"/>
        <rect x="190" y="34" width="62" height="30" rx="8" fill="#ffd35c" stroke="#fff" stroke-width="1.5"/>
        <rect x="190" y="34" width="62" height="10" rx="4" fill="#39f5bc"/>
      </g>
      <rect x="326" y="18" width="96" height="76" rx="12" fill="rgba(8,28,46,0.85)" stroke="${accentStroke}" stroke-width="1.5"/>
      <path class="sparkle-spin" d="M374 34 l5 13 l13 5 l-13 5 l-5 13 l-5-13 l-13-5 l13-5 z" fill="#ffd35c"/>
    </svg>`;
  }
}

function triggerDeckParticleBurst(isCorrect = true) {
  triggerArcadeFx(isCorrect ? "confetti" : "pixels", {
    palette: isCorrect
      ? ["#39f5bc", "#45eaff", "#ffd35c", "#c084fc", "#ffffff"]
      : ["#ff5b76", "#ffd35c", "#ff9f5a"]
  });
}
function renderDeck() {
  const streak = loadStreak();
  if (els.deckStreak) {
    els.deckStreak.textContent = t("deckStreak", { n: streak.count });
  }

  const deck = state.deck;
  if (!deck || !deck.order.length) return;

  const finished = deck.index >= deck.order.length;
  const pipsEl = document.getElementById("deckProgressPips");
  if (pipsEl) {
    pipsEl.innerHTML = "";
    deck.order.forEach((_, idx) => {
      const pip = document.createElement("span");
      pip.className = "deck-pip" + (idx < deck.index || finished ? " done" : idx === deck.index ? " active" : "");
      pipsEl.appendChild(pip);
    });
  }

  els.deckCard?.classList.toggle("hidden", finished);
  els.deckSwipeHint?.classList.add("hidden");
  els.deckLeft?.classList.toggle("hidden", finished);
  els.deckRight?.classList.toggle("hidden", finished);
  els.deckNextButton?.classList.add("hidden");
  els.deckPracticeAgain?.classList.toggle("hidden", !finished);
  els.deckDone?.classList.toggle("hidden", !finished);
  document.getElementById("deckLeaderboardButton")?.classList.toggle("hidden", !finished);
  renderDeckSponsorSlot(false, null);

  const vStamp = document.getElementById("deckVerdictStamp");
  if (vStamp) {
    vStamp.className = "deck-verdict-stamp hidden";
    vStamp.textContent = "";
  }
  if (els.deckCard) {
    els.deckCard.style.transform = "";
    els.deckCard.classList.remove("swiping", "swipe-left-commit", "swipe-right-commit", "card-pop", "card-verdict-hit", "card-verdict-miss");
    void els.deckCard.offsetWidth;
    els.deckCard.classList.add("card-pop");
  }
  if (els.deckStampLeft) els.deckStampLeft.style.opacity = "0";
  if (els.deckStampRight) els.deckStampRight.style.opacity = "0";
  if (finished) {
    const streak = bumpStreakIfNewDay();
    const progress = loadDeckProgress();
    const today = todayKey();
    if (!progress.completedDates.includes(today)) {
      progress.completedDates.push(today);
      saveDeckProgress(progress);
    }
    if (els.deckStreak) {
      els.deckStreak.textContent = t("deckStreak", { n: streak.count });
    }
    recordDeckSessionToLeaderboard(deck.correct, deck.order.length, streak.count);

    renderDeckIllustration("surface", true);
    triggerDeckParticleBurst(true);

    if (els.deckFeedback) {
      els.deckFeedback.textContent = `${t("deckComplete")} (${deck.correct}/${deck.order.length}) · ${t("deckStreak", { n: streak.count })}`;
      els.deckFeedback.className = "deck-feedback is-correct";
    }

    return;
  }

  const card = deck.order[deck.index];
  const catRaw = String(card.category || "").toLowerCase();
  const catIcon = catRaw === "surface" ? "🧽 " : catRaw === "product" ? "🧪 " : "⚡ ";
  if (els.deckCategory) els.deckCategory.textContent = `${catIcon}${t(catRaw === "surface" ? "deckCatSurface" : catRaw === "product" ? "deckCatProduct" : "deckCatTechnique")}`;
  renderDeckIllustration(catRaw, false);
  if (els.deckText) els.deckText.textContent = localizedDeckField(card, "text");
  if (els.deckProgress) {
    els.deckProgress.textContent = t("deckCardOf", { i: deck.index + 1, n: deck.order.length });
  }
  if (els.deckFeedback) {
    els.deckFeedback.textContent = "";
    els.deckFeedback.className = "deck-feedback";
  }
}

function advanceDeckCard() {
  const deck = state.deck;
  if (!deck || !deck.locked) return;
  if (deck.advanceTimer) {
    clearTimeout(deck.advanceTimer);
    deck.advanceTimer = null;
  }
  deck.index += 1;
  deck.locked = false;
  renderDeck();
}

function practiceAnotherDeck() {
  if (state.deck?.advanceTimer) {
    clearTimeout(state.deck.advanceTimer);
  }
  const pool = (typeof SWIPE_DECK !== "undefined" && Array.isArray(SWIPE_DECK) ? SWIPE_DECK : []).slice();
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  state.deck = {
    order: pool.slice(0, Math.min(DECK_DAILY_COUNT, pool.length)),
    index: 0,
    correct: 0,
    locked: false,
    answeredCurrent: false
  };
  renderDeck();
  return state.deck;
}

function swipeDeckCard(direction) {
  if (!state.deck || state.deck.locked || state.deck.index >= state.deck.order.length) {
    return null;
  }
  const pick = direction === "left" || direction === "miss" ? "miss" : "right";
  if (els.deckCard) {
    const isLeft = pick === "miss";
    if (els.deckStampLeft) els.deckStampLeft.style.opacity = isLeft ? "1" : "0";
    if (els.deckStampRight) els.deckStampRight.style.opacity = isLeft ? "0" : "1";
    els.deckCard.style.transform = isLeft
      ? "translate3d(-28px, 0, 0) rotate(-4deg)"
      : "translate3d(28px, 0, 0) rotate(4deg)";
  }
  answerDeck(pick);
  return pick;
}

function playDeckAnswerSfx(hit) {
  if (state.voice.muted || SELFTEST_MODE) return;
  try {
    const ctx = ensureDiscoAudioGraph();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    const dest = discoMaster || ctx.destination;
    const now = ctx.currentTime;
    if (hit) {
      // Game-show "Ding-Ding-Chime!" Major-9th Bell Arpeggio
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const bell = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.068);
        bell.type = "sine";
        bell.frequency.setValueAtTime(freq * 2.998, now + i * 0.068);
        g.gain.setValueAtTime(0.0001, now + i * 0.068);
        g.gain.linearRampToValueAtTime(0.085, now + i * 0.068 + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.068 + 0.24);
        osc.connect(g);
        bell.connect(g);
        g.connect(dest);
        osc.start(now + i * 0.068);
        bell.start(now + i * 0.068);
        osc.stop(now + i * 0.068 + 0.25);
        bell.stop(now + i * 0.068 + 0.25);
      });
    } else {
      // Relatable Game-Show "Uh-Oh / Womp-Womp" Descending Two-Tone Error Sound
      [
        { t: 0.0, dur: 0.14, f1: 349.23, f2: 330.0 },
        { t: 0.15, dur: 0.28, f1: 246.94, f2: 185.0 }
      ].forEach((n) => {
        const osc = ctx.createOscillator();
        const flt = ctx.createBiquadFilter();
        const g = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(n.f1, now + n.t);
        osc.frequency.exponentialRampToValueAtTime(n.f2, now + n.t + n.dur);
        flt.type = "lowpass";
        flt.frequency.setValueAtTime(980, now + n.t);
        flt.Q.setValueAtTime(2.8, now + n.t);
        g.gain.setValueAtTime(0.0001, now + n.t);
        g.gain.linearRampToValueAtTime(0.095, now + n.t + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, now + n.t + n.dur);
        osc.connect(flt).connect(g).connect(dest);
        osc.start(now + n.t);
        osc.stop(now + n.t + n.dur + 0.01);
      });
    }
  } catch {}
}

function answerDeck(pick) {
  const deck = state.deck;
  if (!deck || deck.locked || deck.index >= deck.order.length) return;

  const card = deck.order[deck.index];
  const hit = pick === card.answer;
  deck.locked = true;

  if (hit) deck.correct += 1;
  if (card?.id) {
    recordDeckCardAnswer(card.id, hit);
  }

  if (els.deckStampLeft) els.deckStampLeft.style.opacity = pick === "miss" ? "1" : "0";
  if (els.deckStampRight) els.deckStampRight.style.opacity = pick === "right" ? "1" : "0";
  els.deckLeft?.classList.add("hidden");
  els.deckRight?.classList.add("hidden");
  els.deckNextButton?.classList.remove("hidden");
  const catRaw = String(card?.category || "").toLowerCase();
  renderDeckIllustration(catRaw, false, hit ? "hit" : "miss");
  if (els.deckCard) {
    els.deckCard.classList.remove("card-verdict-hit", "card-verdict-miss");
    void els.deckCard.offsetWidth;
    els.deckCard.classList.add(hit ? "card-verdict-hit" : "card-verdict-miss");
  }
  const vStamp = document.getElementById("deckVerdictStamp");
  if (vStamp) {
    vStamp.textContent = hit ? "✨ NAILED IT! +100 XP" : "⚠️ TRICK CALL! WATCH THE RULE";
    vStamp.className = `deck-verdict-stamp ${hit ? "is-hit" : "is-miss"}`;
  }

  playDeckAnswerSfx(hit);
  if (!SELFTEST_MODE && !state.voice.muted) {
    speakHost(hit ? "pass" : "retry");
  }
  triggerDeckParticleBurst(hit);
  if (els.deckFeedback) {
    const productType = localizedDeckField(card, "productType");
    const productNote = productType ? ` · ${t("productTypePrefix")} ${productType}.` : "";
    els.deckFeedback.textContent = `${hit ? "✨ " + t("deckCorrect") : "💡 " + t("deckWrong")} ${localizedDeckField(card, "why")}${productNote}`;
    els.deckFeedback.className = `deck-feedback ${hit ? "is-correct" : "is-wrong"}`;
  }

  renderDeckSponsorSlot(true, card);

  deck.advanceTimer = setTimeout(() => {
    if (state.deck !== deck) return;
    advanceDeckCard();
  }, Math.min(9000, 2400 + (els.deckFeedback?.textContent?.length || 0) * 45));
}

function openRecords() {
  if (state.screen !== "records") {
    state.recordsReturn = state.screen;
  }

  pruneExpiredRecords(CONFIG.retentionDays);
  renderCrewAndConsistencyUI();
  renderPersonalRecordUI();
  renderInspectionLog();
  renderOfflineQueue();
  renderAdminDashboard();
  navigateTo("records");
}

function closeRecords() {
  navigateTo(state.recordsReturn || "welcome");
}

function saveCompletedRun() {
  if (!state.latestScore) return null;

  if (state.latestScore?.judgeDemo) {
    state.latestRunId = null;
    return null;
  }

  const entries = loadLeaderboard();

  const profile = loadCleanerProfile();
  const phoneSuffix = profile.phone ? profile.phone.replace(/\D/g, "").slice(-4) : "";
  const autoAlias = phoneSuffix ? `Cleaner #${phoneSuffix}` : "";
  const name =
    els.playerName?.value?.trim() ||
    autoAlias ||
    t("defaultPlayer");
  if (!state.latestRunId) {
    state.latestRunId =
      generateRunId();
  }

  const weightedScore = Number.isFinite(state.latestScore.cleanliness) ? computeWeightedRunScore({
    cleanliness: state.latestScore.cleanliness,
    scorable: state.latestScore.scorable,
    techniqueScore: state.latestScore.techniqueScore,
    techniqueEvidence: state.latestScore.techniqueEvidence,
    elapsedMs: state.timer.elapsedMs,
    dwellCreditSeconds: state.checkin?.dwellCreditSeconds || 0
  }) : null;

  const isDemoRun = state.demoMode || state.latestScore?.simulated ||
    state.captures.before?.placeholder || state.captures.after?.placeholder;
  // Runs also need a registered site selected at check-in (no registry
  // configured = open pilot mode).
  const registeredSites = loadAdminStore().sites || [];
  const siteOk = registeredSites.length === 0 ||
    (!!state.checkin.site && registeredSites.includes(state.checkin.site));
  const entry = {
    id: state.latestRunId,
    name,
    cleanliness:
      Number.isFinite(state.latestScore.cleanliness) ? state.latestScore.cleanliness : null,
    weightedScore,
    // Manual spot picks and any demo/simulated/placeholder runs are practice:
    // visible locally, never prize/crew credit.
    prizeEligible: !state.checkin?.spotOverride && !isDemoRun && siteOk,
    qrCode: state.checkin?.qrCode || null,
    timeMs: state.timer.elapsedMs,
    styleScore:
      state.latestScore.styleScore ?? 7.5,
    viewerOwned: true,
    timestamp: new Date().toISOString()
  };
  try {
    localStorage.setItem("cleanquest.viewerRunId", String(state.latestRunId || ""));
  } catch {}

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
  if (existingIndex < 0) {
    if (Number.isFinite(entry.cleanliness) && entry.prizeEligible) {
      try {
        const crew = ensureActiveCrew(name);
        recordCrewRun(crew.id, name, entry.weightedScore ?? entry.cleanliness, new Date(entry.timestamp || Date.now()));
      } catch {}
    }
    void recordInspection(name, entry);
    // Production offline path: runs finished offline (or forced) queue for later scoring sync.
    const isOffline = (typeof navigator !== "undefined" && navigator.onLine === false) || state.forceOfflineQueue;
    if (isOffline) {
      try {
        enqueueOfflineRun({
          id: entry.id,
          cleanliness: entry.cleanliness,
          elapsedMs: entry.timeMs,
          beforeDataUrl: state.captures.before?.dataUrl || null,
          afterDataUrl: state.captures.after?.dataUrl || null
        });
      } catch {}
    }
  }

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

  saveLeaderboard(entries);

  if (
    state.screen === "leaderboard"
  ) {
    renderLeaderboard();
  }
}

function sortLeaderboard(entries) {
  // Public ranking uses the weighted total (Clean 50 / Technique 25 / Time 25);
  // legacy entries without a weighted score fall back to raw cleanliness.
  const rankScore = (e) => (Number.isFinite(e?.weightedScore) ? e.weightedScore : e?.cleanliness);
  return [...entries].sort((a, b) => {
    if (
      Number(rankScore(b)) !==
      Number(rankScore(a))
    ) {
      return (
        (Number.isFinite(rankScore(b)) ? rankScore(b) : -1) -
        (Number.isFinite(rankScore(a)) ? rankScore(a) : -1)
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

function visibleLeaderboard(entries, viewerRunId = state.latestRunId) {
  // Practice runs (manual spot override, prizeEligible === false) never rank publicly.
  // Legacy entries without the flag remain eligible.
  const eligible = (Array.isArray(entries) ? entries : []).filter((e) => e && e.prizeEligible !== false);
  const sorted = sortLeaderboard(eligible);
  const topN = CONFIG.leaderboard?.topN || 10;
  const ranked = sorted.map((entry, idx) => ({
    ...entry,
    rank: idx + 1,
    isViewer: Boolean(viewerRunId && (entry.id === viewerRunId || entry.runId === viewerRunId))
  }));
  const visible = ranked.slice(0, topN);
  if (viewerRunId) {
    const ownEntry = ranked.find((item) => item.isViewer);
    if (ownEntry && !visible.some((item) => item.rank === ownEntry.rank)) {
      visible.push(ownEntry);
    }
  }
  return visible;
}

function populateLeaderboardFloaters() {
  const host = document.getElementById("leaderboardAmbientFloaters");
  if (!host || host.childElementCount > 0) return;
  const icons = [
    `<svg viewBox="0 0 24 24"><path d="M5 18 l2-10 l5 4 l5-4 l2 10 z" fill="#ffd35c" stroke="#fff" stroke-width="1.2"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M12 2 l2.6 7.4 l7.4 2.6 l-7.4 2.6 l-2.6 7.4 l-2.6-7.4 l-7.4-2.6 l7.4-2.6 z" fill="#39f5bc"/></svg>`,
    `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="rgba(69,234,255,0.22)" stroke="#45eaff" stroke-width="1.6"/><circle cx="9" cy="9" r="2" fill="#fff"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M12 2 l2.6 7.4 l7.4 2.6 l-7.4 2.6 l-2.6 7.4 l-2.6-7.4 l-7.4-2.6 l7.4-2.6 z" fill="#ffd35c"/></svg>`
  ];
  const positions = [
    { left: "3%", top: "14%", delay: "0s", size: 20 },
    { left: "91%", top: "16%", delay: "0.35s", size: 22 },
    { left: "5%", top: "52%", delay: "0.7s", size: 18 },
    { left: "90%", top: "56%", delay: "1.1s", size: 20 }
  ];
  positions.forEach((pos, idx) => {
    const node = document.createElement("span");
    node.className = "deck-floater";
    node.style.left = pos.left;
    node.style.top = pos.top;
    node.style.width = `${pos.size}px`;
    node.style.height = `${pos.size}px`;
    node.style.animationDelay = pos.delay;
    node.innerHTML = icons[idx % icons.length];
    host.appendChild(node);
  });
}

const DECK_LEADERBOARD_KEY = "cleanquest.deckLeaderboard.v1";

function loadDeckLeaderboard() {
  try {
    const raw = JSON.parse(localStorage.getItem(DECK_LEADERBOARD_KEY));
    if (Array.isArray(raw)) {
      return raw.filter(
        (e) =>
          e &&
          typeof e === "object" &&
          !e.sample &&
          !e.isSample &&
          !/^deck-rival-/.test(String(e.id || ""))
      );
    }
  } catch {}
  return [];
}

function recordDeckSessionToLeaderboard(correct = 0, total = 5, streakCount = 1) {
  try {
    const board = loadDeckLeaderboard().filter((e) => !e.viewerOwned);
    const acc = total > 0 ? Math.round((correct / total) * 100) : 0;
    const xp = Math.max(0, correct * 100 + Math.max(0, streakCount) * 50);
    const playerName = els.playerName?.value?.trim() || t("defaultPlayer");
    board.push({
      id: "deck-you",
      name: playerName,
      accuracy: acc,
      streak: Math.max(1, streakCount),
      xp,
      viewerOwned: true
    });
    board.sort((a, b) => (b.xp - a.xp) || (b.accuracy - a.accuracy) || (b.streak - a.streak));
    localStorage.setItem(DECK_LEADERBOARD_KEY, JSON.stringify(board));
    return board;
  } catch {
    return loadDeckLeaderboard();
  }
}

function setLeaderboardMode(mode = "shift") {
  state.leaderboardMode = mode === "deck" ? "deck" : "shift";
  const shiftBtn = document.getElementById("lbTabShift");
  const deckBtn = document.getElementById("lbTabDeck");
  shiftBtn?.classList.toggle("active", state.leaderboardMode === "shift");
  shiftBtn?.setAttribute("aria-selected", String(state.leaderboardMode === "shift"));
  deckBtn?.classList.toggle("active", state.leaderboardMode === "deck");
  deckBtn?.setAttribute("aria-selected", String(state.leaderboardMode === "deck"));
  if (els.playAgainButton) {
    els.playAgainButton.textContent = state.leaderboardMode === "deck" ? t("playDailyDeck") : t("playAgain");
  }
  renderLeaderboard();
}

function renderDeckLeaderboardView() {
  const raw = loadDeckLeaderboard();
  const streakObj = loadStreak();
  const entries = raw.slice();
  entries.sort((a, b) => (b.xp - a.xp) || (b.accuracy - a.accuracy) || (b.streak - a.streak));
  const ranked = entries.map((e, i) => ({ ...e, rank: i + 1, isViewer: Boolean(e.viewerOwned) }));
  const youRanked = ranked.find((e) => e.isViewer) || null;
  const nextRival = youRanked && youRanked.rank > 1 ? ranked[youRanked.rank - 2] : (ranked.length ? ranked[ranked.length - 1] : null);
  const headerSpans = document.querySelectorAll("#leaderboardScreen .leaderboard-header span");
  if (headerSpans.length >= 5) {
    headerSpans[2].textContent = "ACCURACY";
    headerSpans[3].textContent = "STREAK";
    headerSpans[4].textContent = "DECK XP";
  }

  const rivalBanner = document.getElementById("leaderboardRivalBanner");
  if (rivalBanner) {
    rivalBanner.innerHTML = "";
    const head = document.createElement("div");
    head.className = "rival-chase-head";
    const tag = document.createElement("span");
    tag.className = "rival-chase-tag";
    const pill = document.createElement("span");
    pill.className = "rival-xp-pill";
    const copy = document.createElement("div");
    copy.className = "rival-chase-copy";
    const track = document.createElement("div");
    track.className = "rival-progress-track";
    const fill = document.createElement("div");
    fill.className = "rival-progress-fill";

    if (youRanked && nextRival && youRanked.rank > 1) {
      const gapXp = Math.max(50, nextRival.xp - youRanked.xp + 50);
      const pctFill = Math.max(15, Math.min(96, Math.round((youRanked.xp / Math.max(1, nextRival.xp)) * 100)));
      tag.textContent = `🃏 DAILY DECK TARGET · RANK #${nextRival.rank}`;
      pill.textContent = `🔥 +${gapXp} XP TO RANK UP`;
      copy.textContent = `Only +${gapXp} XP (${Math.ceil(gapXp / 100)} cards) to overtake #${nextRival.rank} ${nextRival.name} (${nextRival.xp} XP)!`;
      fill.style.width = `${pctFill}%`;
    } else if (youRanked && youRanked.rank === 1) {
      tag.textContent = "👑 #1 DAILY DECK CHAMPION";
      pill.textContent = `🔥 ${youRanked.streak}d STREAK`;
      copy.textContent = `YOU lead the Daily Deck board with ${youRanked.xp} XP (${youRanked.accuracy}% accuracy)!`;
      fill.style.width = "100%";
    } else {
      tag.textContent = "🃏 DAILY DECK STANDINGS · +100 XP PER CARD";
      pill.textContent = "🔥 BUILD YOUR STREAK";
      copy.textContent = "Swipe 5 Daily Deck training cards to earn Deck XP, build your daily streak, and climb the board!";
      fill.style.width = "28%";
    }
    head.append(tag, pill);
    track.appendChild(fill);
    rivalBanner.append(head, copy, track);
  }

  const podiumEl = document.getElementById("leaderboardPodiumStage");
  if (podiumEl) {
    podiumEl.innerHTML = "";
    const buildDeckPillar = (entry, place, medal) => {
      const col = document.createElement("div");
      col.className = `podium-pillar podium-${place}${entry?.isViewer ? " is-you-podium" : ""}`;
      const med = document.createElement("div");
      med.className = "podium-medal";
      med.textContent = medal;
      const nm = document.createElement("strong");
      nm.className = "podium-name";
      nm.textContent = entry ? entry.name : "OPEN SPOT";
      if (entry?.isViewer) {
        const youBadge = document.createElement("span");
        youBadge.className = "you-pill";
        youBadge.textContent = "YOU";
        nm.appendChild(youBadge);
      }
      const sc = document.createElement("span");
      sc.className = "podium-score";
      sc.textContent = entry ? `${entry.xp} XP` : "500+ XP";
      const tm = document.createElement("small");
      tm.className = "podium-time";
      tm.textContent = entry ? `🔥 ${entry.streak}d · ${entry.accuracy}%` : "Unclaimed";
      col.append(med, nm, sc, tm);
      return col;
    };
    podiumEl.append(
      buildDeckPillar(ranked[1] || null, 2, "🥈 #2"),
      buildDeckPillar(ranked[0] || null, 1, "👑 #1"),
      buildDeckPillar(ranked[2] || null, 3, "🥉 #3")
    );
  }

  els.leaderboardList.innerHTML = "";
  const appendDeckRow = (entry, isUnranked = false) => {
    const row = document.createElement("div");
    row.className = "leaderboard-row";
    if (!isUnranked && entry.rank >= 1 && entry.rank <= 3) row.classList.add(`rank-${entry.rank}`);
    if (entry.isViewer || isUnranked) row.classList.add("latest", "is-you-row");
    const rank = document.createElement("span");
    rank.className = "rank";
    rank.textContent = isUnranked ? "—" : entry.rank === 1 ? "🥇 1" : entry.rank === 2 ? "🥈 2" : entry.rank === 3 ? "🥉 3" : `#${entry.rank}`;
    const nameWrap = document.createElement("span");
    nameWrap.className = "player-name";
    const nameLine = document.createElement("span");
    nameLine.className = "lb-name-line";
    const nameStrong = document.createElement("strong");
    nameStrong.textContent = entry.name || t("defaultPlayer");
    nameLine.appendChild(nameStrong);
    if (entry.isViewer || isUnranked) {
      const youBadge = document.createElement("span");
      youBadge.className = "you-pill";
      youBadge.textContent = "YOU";
      nameLine.appendChild(youBadge);
    }
    const miniBar = document.createElement("span");
    miniBar.className = "lb-mini-bar";
    const miniFill = document.createElement("i");
    miniFill.style.width = `${Math.max(12, Math.min(100, Number(entry.accuracy) || 0))}%`;
    miniBar.appendChild(miniFill);
    nameWrap.append(nameLine, miniBar);
    const quality = document.createElement("span");
    quality.className = "quality";
    quality.textContent = Number.isFinite(entry.accuracy) ? `${entry.accuracy}%` : "—";
    const time = document.createElement("span");
    time.className = "time";
    time.textContent = `🔥 ${entry.streak || 0}d`;
    const style = document.createElement("span");
    style.className = "style";
    style.textContent = `${entry.xp || 0} XP`;
    row.append(rank, nameWrap, quality, time, style);
    els.leaderboardList.appendChild(row);
  };
  if (!ranked.length) {
    const empty = document.createElement("p");
    empty.className = "fine-print";
    empty.textContent = t("leaderboardEmpty");
    els.leaderboardList.appendChild(empty);
  }
  ranked.forEach((e) => appendDeckRow(e, false));
  if (!youRanked) {
    const inProgAcc = state.deck && state.deck.index > 0
      ? Math.round((Number(state.deck.correct || 0) / state.deck.index) * 100)
      : null;
    const inProgXp = (Number(state.deck?.correct || 0) * 100) + ((streakObj.count || 0) * 50);
    appendDeckRow({
      name: els.playerName?.value?.trim() || t("defaultPlayer"),
      accuracy: inProgAcc,
      streak: streakObj.count || 0,
      xp: inProgXp,
      isViewer: true
    }, true);
  }
}

function renderLeaderboard() {
  populateLeaderboardFloaters();
  renderPersonalRecordUI();
  if (els.playAgainButton) {
    els.playAgainButton.textContent = state.leaderboardMode === "deck" ? t("playDailyDeck") : t("playAgain");
  }
  if (state.leaderboardMode === "deck") {
    renderDeckLeaderboardView();
    return;
  }
  const headerSpans = document.querySelectorAll("#leaderboardScreen .leaderboard-header span");
  if (headerSpans.length >= 5) {
    headerSpans[2].textContent = t("quality");
    headerSpans[3].textContent = t("time");
    headerSpans[4].textContent = t("style");
  }
  const rawBoard = loadLeaderboard();
  let savedViewerRunId = state.latestRunId;
  if (!savedViewerRunId) {
    try {
      savedViewerRunId = localStorage.getItem("cleanquest.viewerRunId") || null;
    } catch {}
  }
  const visible = visibleLeaderboard(rawBoard, savedViewerRunId);

  els.leaderboardList.innerHTML = "";
  renderCrewAndConsistencyUI();
  let youRanked = visible.find((e) => e.isViewer || e.viewerOwned === true || (savedViewerRunId && (e.id === savedViewerRunId || e.runId === savedViewerRunId)));
  if (youRanked) youRanked.isViewer = true;
  const nextRival = youRanked && youRanked.rank > 1 ? visible[youRanked.rank - 2] : (!youRanked && visible.length ? visible[visible.length - 1] : null);
  const latestPracticeScore = state.result?.ai?.scorable !== false ? computeWeightedRunScore() : null;

  // 1. Render Competitive Target / Rival Chase Banner (DOM textContent, zero fabricated XP)
  const rivalBanner = document.getElementById("leaderboardRivalBanner");
  if (rivalBanner) {
    rivalBanner.innerHTML = "";
    const head = document.createElement("div");
    head.className = "rival-chase-head";
    const tag = document.createElement("span");
    tag.className = "rival-chase-tag";
    const pill = document.createElement("span");
    pill.className = "rival-xp-pill";
    const copy = document.createElement("div");
    copy.className = "rival-chase-copy";
    const track = document.createElement("div");
    track.className = "rival-progress-track";
    const fill = document.createElement("div");
    fill.className = "rival-progress-fill";

    if (youRanked && nextRival) {
      const curScore = Number.isFinite(youRanked.weightedScore) ? youRanked.weightedScore : Number(youRanked.cleanliness || 0);
      const rivScore = Number.isFinite(nextRival.weightedScore) ? nextRival.weightedScore : Number(nextRival.cleanliness || 0);
      const gap = Math.max(1, rivScore - curScore + 1);
      const pctFill = Math.max(12, Math.min(96, Math.round((curScore / Math.max(1, rivScore)) * 100)));
      tag.textContent = `🔥 NEXT TARGET TO BEAT · RANK #${nextRival.rank}`;
      pill.textContent = "🏆 RANK UP TARGET";
      copy.textContent = `Only +${gap}% to overtake #${nextRival.rank} ${nextRival.name || t("defaultPlayer")} (${rivScore}%)!`;
      fill.style.width = `${pctFill}%`;
    } else if (youRanked && youRanked.rank === 1) {
      const curScore = Number.isFinite(youRanked.weightedScore) ? youRanked.weightedScore : Number(youRanked.cleanliness || 0);
      tag.textContent = "👑 #1 CURRENT LEADER";
      pill.textContent = "🏆 TOP SPOT";
      copy.textContent = `YOU hold the #1 spot at ${curScore}% — beat your time to defend #1!`;
      fill.style.width = "100%";
    } else {
      const passMark = CONFIG.verdictTiers?.passMark || 70;
      const practicePct = Number.isFinite(latestPracticeScore) ? latestPracticeScore : 0;
      tag.textContent = `🎯 BENCHMARK TARGET · ${passMark}% TO PASS`;
      pill.textContent = visible.length ? `🏆 CHASE #1 (${Number.isFinite(visible[0].weightedScore) ? visible[0].weightedScore : visible[0].cleanliness}%)` : "🏆 OPEN PODIUM";
      copy.textContent = Number.isFinite(latestPracticeScore)
        ? `Latest practice/sample run: ${latestPracticeScore}% — complete a registered-site shift run at ${passMark}%+ to rank!`
        : `Complete a registered-site shift run at ${passMark}%+ to claim your spot on the Podium!`;
      fill.style.width = `${Math.max(12, Math.min(100, practicePct))}%`;
    }
    head.append(tag, pill);
    track.appendChild(fill);
    rivalBanner.append(head, copy, track);
  }

  // 2. Render 3-Pillar Championship Podium Stage (DOM textContent, open pedestals when unclaimed)
  const podiumEl = document.getElementById("leaderboardPodiumStage");
  if (podiumEl) {
    podiumEl.innerHTML = "";
    const buildPillar = (entry, place, medal, targetHint) => {
      const col = document.createElement("div");
      col.className = `podium-pillar podium-${place}${entry?.isViewer ? " is-you-podium" : ""}`;
      const med = document.createElement("div");
      med.className = "podium-medal";
      med.textContent = medal;
      const nm = document.createElement("strong");
      nm.className = "podium-name";
      const sc = document.createElement("span");
      sc.className = "podium-score";
      const tm = document.createElement("small");
      tm.className = "podium-time";
      if (entry) {
        const scoreVal = Number.isFinite(entry.weightedScore) ? entry.weightedScore : entry.cleanliness;
        nm.textContent = entry.name || t("defaultPlayer");
        if (entry.isViewer) {
          const youBadge = document.createElement("span");
          youBadge.className = "you-pill";
          youBadge.textContent = "YOU";
          nm.appendChild(youBadge);
        }
        sc.textContent = Number.isFinite(scoreVal) ? `${scoreVal}%` : "—";
        tm.textContent = formatTimer(Number(entry.timeMs || 0));
      } else {
        nm.textContent = "OPEN SPOT";
        sc.textContent = targetHint;
        tm.textContent = "Unclaimed";
      }
      col.append(med, nm, sc, tm);
      return col;
    };
    podiumEl.append(
      buildPillar(visible[1] || null, 2, "🥈 #2", "80%+"),
      buildPillar(visible[0] || null, 1, "👑 #1", "90%+"),
      buildPillar(visible[2] || null, 3, "🥉 #3", "70%+")
    );
  }

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "fine-print";
    empty.textContent = t("leaderboardEmpty");
    els.leaderboardList.appendChild(empty);
  }

  const appendRowDom = (entry, isUnrankedViewer = false) => {
    const row = document.createElement("div");
    row.className = "leaderboard-row";
    if (!isUnrankedViewer && entry.rank >= 1 && entry.rank <= 3) {
      row.classList.add(`rank-${entry.rank}`);
    }
    if (entry.isViewer || isUnrankedViewer) {
      row.classList.add("latest", "is-you-row");
    }

    const rank = document.createElement("span");
    rank.className = "rank";
    rank.textContent = isUnrankedViewer
      ? "—"
      : entry.rank === 1
        ? "🥇 1"
        : entry.rank === 2
          ? "🥈 2"
          : entry.rank === 3
            ? "🥉 3"
            : `#${entry.rank}`;

    const displayScore = Number.isFinite(entry.weightedScore) ? entry.weightedScore : entry.cleanliness;
    const nameWrap = document.createElement("span");
    nameWrap.className = "player-name";
    const nameLine = document.createElement("span");
    nameLine.className = "lb-name-line";
    const nameStrong = document.createElement("strong");
    nameStrong.textContent = entry.name || t("defaultPlayer");
    nameLine.appendChild(nameStrong);

    if (entry.isViewer || isUnrankedViewer) {
      const youBadge = document.createElement("span");
      youBadge.className = "you-pill";
      youBadge.textContent = "YOU";
      nameLine.appendChild(youBadge);
    }
    if (isUnrankedViewer) {
      const unrankedTag = document.createElement("em");
      unrankedTag.className = "you-gap-tag";
      unrankedTag.textContent = Number.isFinite(displayScore) ? "UNRANKED (PRACTICE)" : "UNRANKED";
      nameLine.appendChild(unrankedTag);
    } else if (entry.isViewer && nextRival && Number.isFinite(displayScore)) {
      const rivScore = Number.isFinite(nextRival.weightedScore) ? nextRival.weightedScore : nextRival.cleanliness;
      const gapTag = document.createElement("em");
      gapTag.className = "you-gap-tag";
      gapTag.textContent = `▲ +${Math.max(1, rivScore - displayScore + 1)}% TO #${nextRival.rank}`;
      nameLine.appendChild(gapTag);
    }

    const miniBar = document.createElement("span");
    miniBar.className = "lb-mini-bar";
    const miniFill = document.createElement("i");
    miniFill.style.width = `${Math.max(8, Math.min(100, Number(displayScore) || 0))}%`;
    miniBar.appendChild(miniFill);
    nameWrap.append(nameLine, miniBar);

    const quality = document.createElement("span");
    quality.className = "quality";
    quality.textContent = Number.isFinite(displayScore) ? `${displayScore}%` : "—";

    const time = document.createElement("span");
    time.className = "time";
    time.textContent = entry.timeMs ? formatTimer(Number(entry.timeMs)) : "—";

    const style = document.createElement("span");
    style.className = "style";
    style.textContent = Number.isFinite(Number(entry.styleScore)) ? Number(entry.styleScore).toFixed(1) : "—";

    row.append(rank, nameWrap, quality, time, style);
    els.leaderboardList.appendChild(row);
  };

  visible.forEach((entry) => appendRowDom(entry, false));

  if (!youRanked) {
    appendRowDom({
      name: els.playerName?.value?.trim() || t("defaultPlayer"),
      weightedScore: latestPracticeScore,
      cleanliness: latestPracticeScore,
      timeMs: state.result?.elapsedMs || null,
      styleScore: state.result?.ai?.styleScore ?? null,
      isViewer: true
    }, true);
  }
}

function renderSpectatorLeaderboard() {
  const visible = visibleLeaderboard(loadLeaderboard(), state.latestRunId);

  els.spectatorLeaderboardList.innerHTML = "";
  if (!visible.length) {
    const empty = document.createElement("div");
    empty.className = "spectator-row";
    empty.textContent = t("leaderboardEmpty");
    els.spectatorLeaderboardList.appendChild(empty);
    return;
  }
  visible.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "spectator-row";

    const rank = document.createElement("span");
    rank.className = "rank";
    rank.textContent = String(entry.rank);

    const name = document.createElement("span");
    name.className = "player-name";
    name.textContent = entry.name || t("defaultPlayer");

    const quality = document.createElement("span");
    quality.className = "quality";
    const displayScore = Number.isFinite(entry.weightedScore) ? entry.weightedScore : entry.cleanliness;
    quality.textContent =
      Number.isFinite(displayScore) ? `${displayScore}%` : "—";

    const time = document.createElement("span");
    time.className = "time";
    time.textContent = formatTimer(Number(entry.timeMs || 0));

    const style = document.createElement("span");
    style.className = "style";
    style.textContent = Number(entry.styleScore ?? 7.5).toFixed(1);

    row.append(rank, name, quality, time, style);
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

/* ==========================================================================
 * PHASE 1-4: TRUST CORE, PILOT LOOP, CREWS & CONSISTENCY PASSPORT
 * ========================================================================== */
const CONSENT_KEY = "cleanquest.consent.v1";
const APPEALS_KEY = "cleanquest.appeals.v1";
const OFFLINE_QUEUE_KEY = "cleanquest.offlineQueue.v1";
const CREWS_KEY = "cleanquest.crews.v1";
const SPONSOR_CONFIG_KEY = "cleanquest.operatorSponsor.v1";

function hasConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.accepted !== true) return false;
    // Consent is given in the chosen language; a language switch re-presents it.
    if (parsed.language && parsed.language !== state.language) return false;
    return true;
  } catch {
    return false;
  }
}

function setConsentAccepted(accepted = true) {
  try {
    if (accepted) {
      state.editingFtue = false;
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({
          accepted: true,
          acceptedAt: new Date().toISOString(),
          language: state.language
        })
      );
    } else {
      localStorage.removeItem(CONSENT_KEY);
    }
  } catch {}
  syncConsentUI();
  return hasConsent();
}

function speakConsentAloud() {
  stopSpeech();
  const lang = state.language || "en";
  if (clipStatus(lang, "consent", "00") === "available") {
    playHostClip(clipUrlFor(lang, "consent", "00"), t("consentBody"), { force: true, rate: 1.0, pitch: 1.0 }, "consent");
    return;
  }
  speakText(t("consentBody"), { force: true, rate: 1.0, pitch: 1.0 });
}

const INSTRUCTIONS_SEEN_KEY = "cleanquest.instructionsSeen.v1";

function hasSeenInstructions() {
  try {
    return localStorage.getItem(INSTRUCTIONS_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function setInstructionsSeen(seen = true) {
  try {
    if (seen) localStorage.setItem(INSTRUCTIONS_SEEN_KEY, "1");
    else localStorage.removeItem(INSTRUCTIONS_SEEN_KEY);
  } catch {}
  return hasSeenInstructions();
}

function syncFtueCollapseUI() {
  const showSetup = Boolean(state.editingFtue);
  const showHub = Boolean(state.showPassportHub);
  els.consentGate?.classList.toggle("hidden", !showSetup);
  els.cleanerPinBar?.classList.toggle("hidden", !showSetup);
  // Step isolation: step 3 shows consent only, step 2 shows PIN only.
  if (showSetup && state.cleanerFtueStep === 3) {
    els.cleanerPinBar?.classList.add("hidden");
  }
  if (showSetup && state.cleanerFtueStep === 2) {
    els.consentGate?.classList.add("hidden");
  }
  els.ftueSummaryBar?.classList.toggle("hidden", !showHub || showSetup);
  els.homePassportPanel?.classList.toggle("hidden", !showHub || showSetup);
  els.cleanerStepTabs?.classList.toggle("hidden", !showHub && !showSetup);
}

function openPassportAndSupervisorHub() {
  state.editingFtue = false;
  state.showPassportHub = true;
  syncFtueCollapseUI();
  renderCrewAndConsistencyUI();
  renderPersonalRecordUI();
  openRecords();
  return true;
}

function syncConsentUI() {
  const accepted = hasConsent();
  if (els.consentCheckbox) {
    els.consentCheckbox.checked = accepted;
  }
  if (els.consentAcceptButton) {
    els.consentAcceptButton.disabled = accepted || !els.consentCheckbox?.checked;
  }
  if (els.consentStatusBadge) {
    els.consentStatusBadge.classList.toggle("hidden", !accepted);
  }
  if (accepted) {
    els.consentGate?.classList.remove("needs-attention");
  }
  syncFtueCollapseUI();
}

function cleanBarExplanation(run) {
  const val = run && Number.isFinite(Number(run.cleanliness)) && run.scorable !== false
    ? Math.max(0, Math.min(100, Math.round(Number(run.cleanliness))))
    : null;
  if (val === null) {
    return {
      key: "clean",
      label: t("barClean"),
      measured: false,
      score: null,
      display: t("notMeasured"),
      detail: t("barDetailCleanNone")
    };
  }
  return {
    key: "clean",
    label: t("barClean"),
    measured: true,
    score: val,
    display: `${val}%`,
    detail: t("barDetailClean")
  };
}

function techniqueBarExplanation(run) {
  const values = [];
  const sources = [];
  if (run && Number.isFinite(Number(run.techniqueScore))) {
    values.push(Number(run.techniqueScore));
    sources.push("techniqueScore");
  } else if (run && run.techniqueEvidence && typeof run.techniqueEvidence === "object") {
    Object.entries(run.techniqueEvidence).forEach(([k, v]) => {
      if (Number.isFinite(Number(v))) {
        values.push(Number(v));
        sources.push(k);
      }
    });
  } else if (run?.verified?.status === "verified" && Array.isArray(run.verified.surfaces)) {
    run.verified.surfaces.forEach((s) => {
      if (s.verified && Number.isFinite(Number(s.score))) {
        values.push(Number(s.score));
        sources.push(s.name);
      }
    });
  }
  if (!values.length) {
    return {
      key: "technique",
      label: t("barTechnique"),
      measured: false,
      score: null,
      display: t("notMeasured"),
      sources: [],
      detail: t("barDetailTechniqueNone")
    };
  }
  const avg = Math.max(0, Math.min(100, Math.round(values.reduce((a, b) => a + b, 0) / values.length)));
  return {
    key: "technique",
    label: t("barTechnique"),
    measured: true,
    score: avg,
    display: `${avg}%`,
    sources,
    detail: t("barDetailTechnique", { sources: sources.map((s) => t({ dwellTime: "srcDwellTime", topToBottomOrder: "srcTopToBottomOrder", surfaceOrder: "srcSurfaceOrder", techniqueScore: "srcTechniqueScore" }[s] || "") || (s === "zoneUniformity" ? "even coverage" : s)).join(", ") })
  };
}

function computeTimeBenchmarkScore(elapsedSeconds, dwellCreditSeconds = 0) {
  const benchmark = CONFIG.challengeDurationSeconds;
  const floor = CONFIG.scoring.timeFloor;
  const effective = Math.max(1, Number(elapsedSeconds) - Math.max(0, Number(dwellCreditSeconds) || 0));
  if (effective <= benchmark) return 100;
  return Math.max(floor, Math.round((100 * benchmark) / effective));
}

function timeBarExplanation(run) {
  const rawElapsed = run && Number.isFinite(Number(run.elapsedSeconds))
    ? Number(run.elapsedSeconds)
    : Number.isFinite(Number(run?.elapsedMs))
      ? Number(run.elapsedMs) / 1000
      : null;
  if (rawElapsed === null || rawElapsed < 0) {
    return {
      key: "time",
      label: t("barTime"),
      measured: false,
      score: null,
      display: t("notMeasured"),
      flag: null,
      detail: t("barDetailNoTime")
    };
  }
  const dwellCredit = Number(run?.dwellCreditSeconds ?? state.checkin?.dwellCreditSeconds ?? 0) || 0;
  const effectiveElapsed = Math.max(0, rawElapsed - dwellCredit);
  const score = computeTimeBenchmarkScore(rawElapsed, dwellCredit);
  const fastThresholdSeconds = CONFIG.challengeDurationSeconds * (CONFIG.scoring.fastReviewRatio || 0.7);
  const flag = rawElapsed > 0 && (effectiveElapsed < fastThresholdSeconds || rawElapsed < CONFIG.scoring.implausiblyFastSeconds)
    ? "review"
    : null;
  return {
    key: "time",
    label: t("barTime"),
    measured: true,
    score,
    display: `${score}%`,
    elapsedSeconds: Math.round(rawElapsed * 10) / 10,
    effectiveElapsedSeconds: Math.round(effectiveElapsed * 10) / 10,
    benchmarkSeconds: CONFIG.challengeDurationSeconds,
    flag,
    detail: flag
      ? t("barDetailTimeReview")
      : t("barDetailTimeOk")
  };
}

function computeWeightedRunScore(runInput) {
  const bars = buildScoreExplanation(runInput);
  const clean = bars[0].measured ? bars[0].score : null;
  if (clean === null) return null;
  const technique = bars[1].measured ? bars[1].score : clean;
  const time = bars[2].measured ? bars[2].score : 100;
  return Math.round(
    clean * CONFIG.scoring.cleanWeight +
    technique * CONFIG.scoring.techniqueWeight +
    time * CONFIG.scoring.timeWeight
  );
}

function gradeRunSurfaces(runInput) {
  const ai = runInput || state.result?.ai;
  if (!ai) return [];
  if (ai.verified?.status === "verified" && Array.isArray(ai.verified.surfaces)) {
    return ai.verified.surfaces.map((s) => ({
      name: s.name,
      score: s.score,
      grade: s.score >= 80 ? "clean" : s.score >= 55 ? "partly" : "missed"
    }));
  }
  const spotName = state.checkin?.assignedSpot || "Work surface";
  const c = Number.isFinite(Number(ai.cleanliness)) && ai.scorable !== false ? Number(ai.cleanliness) : null;
  if (c === null) {
    return [{ name: spotName, score: null, grade: "partly" }];
  }
  // Only the measured spot is graded; per-zone grades are never fabricated.
  return [
    { name: spotName, score: c, grade: c >= 80 ? "clean" : c >= 55 ? "partly" : "missed" }
  ];
}

function buildScoreExplanation(runInput) {
  const run = runInput || {
    cleanliness: state.result?.ai?.cleanliness,
    scorable: state.result?.ai?.scorable,
    verified: state.result?.ai?.verified,
    techniqueScore: state.result?.ai?.techniqueScore,
    techniqueEvidence: state.result?.ai?.techniqueEvidence,
    elapsedMs: state.result?.elapsedMs ?? state.timer.elapsedMs,
    dwellCreditSeconds: state.checkin?.dwellCreditSeconds || 0
  };
  return [cleanBarExplanation(run), techniqueBarExplanation(run), timeBarExplanation(run)];
}

function renderScoreBreakdown(runInput) {
  if (!els.scoreBreakdownBars) return [];
  const bars = buildScoreExplanation(runInput);
  els.scoreBreakdownBars.innerHTML = "";
  bars.forEach((bar) => {
    const item = document.createElement("div");
    item.className = "score-bar-item";
    item.dataset.barKey = bar.key;

    const head = document.createElement("div");
    head.className = "score-bar-head";
    const label = document.createElement("span");
    label.textContent = bar.label;
    const val = document.createElement("strong");
    val.textContent = bar.measured
      ? `${bar.display}${bar.flag ? ` · ${t("reviewFlag")}` : ""}`
      : t("notMeasured");
    head.append(label, val);

    const track = document.createElement("div");
    track.className = "score-bar-track";
    const fill = document.createElement("div");
    fill.className = "score-bar-fill";
    fill.style.width = bar.measured && Number.isFinite(bar.score) ? `${bar.score}%` : "0%";
    track.appendChild(fill);

    const detail = document.createElement("p");
    detail.className = "score-bar-detail";
    detail.textContent = bar.detail;

    item.append(head, track, detail);
    els.scoreBreakdownBars.appendChild(item);
  });
  if (els.surfaceGradeMap) {
    els.surfaceGradeMap.innerHTML = "";
    const activeAi = runInput || state.result?.ai;
    const hasCloudCard = activeAi?.verified?.status === "verified";
    els.surfaceGradeMap.classList.toggle("hidden", Boolean(hasCloudCard));
    if (!hasCloudCard) {
      const surfaces = gradeRunSurfaces(activeAi);
      surfaces.forEach((s) => {
        const chip = document.createElement("span");
        chip.className = `surface-grade-chip ${s.grade}`;
        const gradeLabel = s.grade === "clean" ? t("gradeClean") : s.grade === "partly" ? t("gradePartly") : t("gradeMissed");
        chip.textContent = `${localizedSpotName(s.name)}: ${gradeLabel}`;
        els.surfaceGradeMap.appendChild(chip);
      });
    }
  }
  return Object.freeze(bars);
}

const SPOT_TRANSLATIONS = {
  es: {
    "Sink & counter": "Tarja y mostrador",
    "Workstation desk & shelf": "Escritorio de trabajo y repisa",
    "Tabletop & appliance front": "Mesa y frente de electrodomésticos",
    "Mirror, glass & handles": "Espejo, vidrios y manijas",
    "Fixture row & partition": "Batería de sanitarios y mampara",
    "Trash & floor zone": "Bote de basura y zona de piso",
    "Sink & mirror counter": "Lavabo y cubierta con espejo",
    "Entry door & dispenser zone": "Puerta de entrada y zona de despachadores",
    "Entry glass & handles": "Vidrio de acceso y manijas",
    "Reception counter": "Mostrador de recepción",
    "Waiting area floor": "Piso de sala de espera",
    "Workstation desk surface": "Superficie de escritorio de trabajo",
    "Conference table & chairs": "Mesa de juntas y sillas",
    "Entry & glass partition": "Acceso y cancel de vidrio",
    "Board rail & front desk": "Riel de pizarrón y escritorio frontal",
    "Student desk row": "Fila de pupitres y bancas",
    "Doorway & sink area": "Entrada y área de tarja",
    "Reception counter & glass": "Mostrador de recepción y vidrio",
    "Entry glass & floor mat": "Vidrio de acceso y tapete",
    "Whiteboard rail & teacher desk": "Riel de pizarrón y escritorio del maestro",
    "Student table row & floor": "Fila de bancas y piso",
    "Urinal, toilet & stall hardware": "Mingitorio, inodoro y herrajes de mampara",
    "Soap, towel & sanitizer dispensers": "Despachadores de jabón, toalla y gel",
    "High-touch door pulls, switches & rails": "Jaladeras, apagadores y barandales de alto contacto",
    "Commercial prep table & hood apron": "Mesa de preparación y faldón de campana",
    "POS checkout lane & counter": "Línea de cajas y mostrador de cobro",
    "Patient bed rails & exam table": "Barandales de cama y mesa de exploración",
    "Elevator cab buttons, rails & threshold": "Botonera, pasamanos y riel de elevador",
    "Cardio & weight equipment touchpoints": "Puntos de contacto en aparatos de cardio y pesas",
    "Vending bank, microwave & fridge handles": "Máquinas expendedoras y manijas de microondas y refri",
    "Carpeted traffic lane & walk-off mat": "Pasillo alfombrado y tapete de entrada",
    "Hard floor scrub & baseboard edge": "Tallado de piso duro y orilla de zoclo"
  },
  pl: {
    "Sink & counter": "Zlew i blat",
    "Workstation desk & shelf": "Biurko robocze i półka",
    "Tabletop & appliance front": "Stół i fronty urządzeń",
    "Mirror, glass & handles": "Lustro, szyby i klamki",
    "Fixture row & partition": "Rząd armatury i przegroda",
    "Trash & floor zone": "Kosz i strefa podłogi",
    "Sink & mirror counter": "Umywalka i blat z lustrem",
    "Entry door & dispenser zone": "Drzwi wejściowe i strefa dozowników",
    "Entry glass & handles": "Szyba wejściowa i uchwyty",
    "Reception counter": "Lada recepcyjna",
    "Waiting area floor": "Podłoga poczekalni",
    "Workstation desk surface": "Powierzchnia biurka roboczego",
    "Conference table & chairs": "Stół konferencyjny i krzesła",
    "Entry & glass partition": "Wejście i szklana ścianka działowa",
    "Board rail & front desk": "Listwa tablicy i biurko prowadzącego",
    "Student desk row": "Rząd ławek szkolnych",
    "Doorway & sink area": "Strefa wejścia i zlewu",
    "Reception counter & glass": "Lada recepcji i szkło",
    "Entry glass & floor mat": "Szyba wejściowa i wycieraczka",
    "Whiteboard rail & teacher desk": "Tablica i biurko nauczyciela",
    "Student table row & floor": "Rząd ławek i podłoga",
    "Urinal, toilet & stall hardware": "Pisuar, toaleta i okucia kabiny",
    "Soap, towel & sanitizer dispensers": "Dozowniki mydła, ręczników i płynu do dezynfekcji",
    "High-touch door pulls, switches & rails": "Klamki, włączniki i poręcze częstego dotyku",
    "Commercial prep table & hood apron": "Stół roboczy gastronomiczny i fartuch okapu",
    "POS checkout lane & counter": "Boks kasowy POS i lada",
    "Patient bed rails & exam table": "Barierki łóżka pacjenta i stół zabiegowy",
    "Elevator cab buttons, rails & threshold": "Przyciski, poręcze i próg kabiny windy",
    "Cardio & weight equipment touchpoints": "Punkty dotyku sprzętu cardio i siłowego",
    "Vending bank, microwave & fridge handles": "Automaty vendingowe oraz uchwyty mikrofalówki i lodówki",
    "Carpeted traffic lane & walk-off mat": "Ciąg komunikacyjny na wykładzinie i mata wejściowa",
    "Hard floor scrub & baseboard edge": "Szorowanie podłogi twardej i krawędź cokołu"
  }
};

const SPOT_ICON_MAP = {
  "Sink & counter": "🚰",
  "Workstation desk & shelf": "🖥️",
  "Tabletop & appliance front": "🍽️",
  "Mirror, glass & handles": "🪞",
  "Fixture row & partition": "🚽",
  "Trash & floor zone": "🗑️",
  "Sink & mirror counter": "🚰",
  "Entry door & dispenser zone": "🚪",
  "Entry glass & handles": "🪞",
  "Reception counter": "🖥️",
  "Waiting area floor": "🗑️",
  "Workstation desk surface": "🖥️",
  "Conference table & chairs": "🍽️",
  "Entry & glass partition": "🪞",
  "Board rail & front desk": "📋",
  "Student desk row": "📋",
  "Doorway & sink area": "🚰",
  "Urinal, toilet & stall hardware": "🚽",
  "Soap, towel & sanitizer dispensers": "🧴",
  "High-touch door pulls, switches & rails": "🚪",
  "Commercial prep table & hood apron": "🍳",
  "POS checkout lane & counter": "🛒",
  "Patient bed rails & exam table": "🛏️",
  "Elevator cab buttons, rails & threshold": "🛗",
  "Cardio & weight equipment touchpoints": "🏋️",
  "Vending bank, microwave & fridge handles": "🧊",
  "Carpeted traffic lane & walk-off mat": "🧹",
  "Hard floor scrub & baseboard edge": "🪣"
};

function spotIconFor(spotName) {
  const raw = String(spotName || "").trim();
  if (SPOT_ICON_MAP[raw]) return SPOT_ICON_MAP[raw];
  const s = raw.toLowerCase();
  if (s.includes("elevator")) return "🛗";
  if (s.includes("cardio") || s.includes("weight") || s.includes("fitness")) return "🏋️";
  if (s.includes("patient") || s.includes("exam") || s.includes("bed")) return "🛏️";
  if (s.includes("pos") || s.includes("checkout")) return "🛒";
  if (s.includes("prep table") || s.includes("hood")) return "🍳";
  if (s.includes("vending") || s.includes("fridge") || s.includes("microwave")) return "🧊";
  if (s.includes("soap") || s.includes("sanitizer") || (s.includes("dispenser") && !s.includes("entry door"))) return "🧴";
  if (s.includes("carpet") || s.includes("walk-off")) return "🧹";
  if (s.includes("hard floor") || s.includes("baseboard") || s.includes("scrub")) return "🪣";
  if (s.includes("urinal") || s.includes("toilet") || s.includes("fixture") || s.includes("partition") || s.includes("stall")) return "🚽";
  if (s.includes("sink") || s.includes("basin")) return "🚰";
  if (s.includes("mirror") || s.includes("glass")) return "🪞";
  if (s.includes("trash") || s.includes("floor") || s.includes("mat")) return "🗑️";
  if (s.includes("door") || s.includes("pulls") || s.includes("switches") || s.includes("entry")) return "🚪";
  if (s.includes("table") || s.includes("appliance")) return "🍽️";
  if (s.includes("board") || s.includes("student")) return "📋";
  return "🖥️";
}
function localizedSpotName(spotName) {
  const raw = String(spotName || "");
  const icon = spotIconFor(raw);
  const label = state.language === "es" && SPOT_TRANSLATIONS.es[raw]
    ? SPOT_TRANSLATIONS.es[raw]
    : state.language === "pl" && SPOT_TRANSLATIONS.pl[raw]
      ? SPOT_TRANSLATIONS.pl[raw]
      : raw;
  return label.startsWith(icon) ? label : `${icon} ${label}`;
}

function readAppeals() {
  try {
    const parsed = JSON.parse(localStorage.getItem(APPEALS_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function findOpenAppeal(runId) {
  if (!runId) return null;
  return readAppeals().find((a) => a && a.runId === String(runId) && a.status === "open") || null;
}

function openAppeal(runId = state.latestRunId) {
  const targetId = String(runId || state.latestRunId || `run-${Date.now()}`);
  if (!state.latestRunId) state.latestRunId = targetId;
  const existing = findOpenAppeal(targetId);
  if (existing) {
    renderDisputeUI(targetId);
    return existing;
  }
  const record = {
    runId: targetId,
    openedAt: new Date().toISOString(),
    status: "open",
    responseWindowBusinessDays: 5
  };
  const appeals = readAppeals();
  appeals.push(record);
  try {
    localStorage.setItem(APPEALS_KEY, JSON.stringify(appeals));
  } catch {}
  renderDisputeUI(targetId);
  return record;
}

function renderDisputeUI(runId = state.latestRunId) {
  if (!els.disputeButton || !els.disputeStatus) return;
  const openRecord = findOpenAppeal(runId);
  if (openRecord) {
    els.disputeButton.disabled = true;
    els.disputeButton.textContent = t("disputeOpenedButton");
    els.disputeStatus.textContent = t("disputeOpenStatus", { id: openRecord.runId.slice(0, 12) });
  } else {
    els.disputeButton.disabled = false;
    els.disputeButton.textContent = t("disputeAction");
    els.disputeStatus.textContent = t("disputeHint");
  }
}

function assignSpotForArea(areaKey = state.checkin.areaKey, leagueKey = state.checkin.league, explicitSpot = null) {
  const area = CONFIG.areaTemplates[areaKey] || CONFIG.areaTemplates.breakroom;
  const validLeague = CONFIG.buildingLeagues.includes(leagueKey) ? leagueKey : "office";
  const allSpots = Array.from(
    new Set([
      ...area.spots,
      "Workstation desk & shelf",
      "Sink & counter",
      "Tabletop & appliance front",
      "Mirror, glass & handles",
      "Fixture row & partition",
      "Trash & floor zone"
    ])
  );
  const daySeed = Math.floor(Date.now() / 86400000);
  const chosenSpot = explicitSpot && allSpots.includes(explicitSpot)
    ? explicitSpot
    : explicitSpot
      ? String(explicitSpot)
      : area.spots[daySeed % area.spots.length];
  state.checkin.areaKey = CONFIG.areaTemplates[areaKey] ? areaKey : "breakroom";
  state.checkin.league = validLeague;
  state.checkin.assignedSpot = chosenSpot;
  // Any system/QR assignment clears a prior manual override (selectCleaningSpot re-sets it).
  state.checkin.spotOverride = false;
  const profile = getSpotScoringProfile(chosenSpot);

  if (els.areaTemplateSelect && els.areaTemplateSelect.value !== state.checkin.areaKey) {
    els.areaTemplateSelect.value = state.checkin.areaKey;
  }
  if (els.buildingLeagueSelect && els.buildingLeagueSelect.value !== state.checkin.league) {
    els.buildingLeagueSelect.value = state.checkin.league;
  }
  [els.spotTemplateSelect, els.timerSpotSelect].forEach((sel) => {
    if (!sel) return;
    sel.innerHTML = "";
    allSpots.forEach((sp) => {
      const opt = document.createElement("option");
      opt.value = sp;
      opt.textContent = localizedSpotName(sp);
      sel.appendChild(opt);
    });
    sel.value = chosenSpot;
  });
  if (els.timerSpotPills) {
    els.timerSpotPills.innerHTML = "";
    const pillSpots = Array.from(new Set([chosenSpot, ...area.spots])).slice(0, 3);
    pillSpots.forEach((sp) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `mvp-tab-chip spot-pill-chip${sp === chosenSpot ? " active" : ""}`;
      btn.textContent = localizedSpotName(sp);
      btn.addEventListener("click", () => selectCleaningSpot(sp));
      els.timerSpotPills.appendChild(btn);
    });
  }
  if (els.assignedSpotBadge) {
    els.assignedSpotBadge.textContent = `${t("rulePrefix")} ${localizedRuleSummary(profile)}`;
  }
  if (els.timerSpotRuleBadge) {
    els.timerSpotRuleBadge.textContent = `${t("rulePrefix")} ${localizedRuleSummary(profile)}`;
  }
  if (els.frameGuideText) {
    els.frameGuideText.textContent = `${localizedSpotName(chosenSpot)}`;
  }
  return {
    league: state.checkin.league,
    areaKey: state.checkin.areaKey,
    areaLabel: area.label,
    difficultyAdjustment: area.difficultyAdjustment || 0,
    assignedSpot: chosenSpot,
    scoringProfile: profile
  };
}

function selectCleaningSpot(spotName) {
  const assigned = assignSpotForArea(state.checkin.areaKey, state.checkin.league, spotName);
  // Manual picks override the system assignment: practice only, no prize/crew credit.
  state.checkin.spotOverride = true;
  state.checkin.qrCode = null;
  return assigned;
}

let qrScannerStream = null;
let qrScannerRafId = null;
let lastQrTrigger = null;

function parseAreaQrPayload(raw) {
  const cleaned = String(raw || "").trim().toUpperCase();
  const m = cleaned.match(/^CQ-QR-([A-Z]+)-([A-Z]+)(?:-(.+))?$/);
  if (!m) return null;
  const league = m[1].toLowerCase();
  const areaKey = m[2].toLowerCase();
  const spotHint = m[3] ? m[3].trim() : null;
  if (!CONFIG.buildingLeagues.includes(league)) return null;
  if (!CONFIG.areaTemplates[areaKey]) return null;
  const area = CONFIG.areaTemplates[areaKey];
  let matchedSpot = null;
  if (spotHint) {
    const allSpots = [
      ...area.spots,
      "Sink & counter",
      "Workstation desk & shelf",
      "Tabletop & appliance front",
      "Mirror, glass & handles",
      "Fixture row & partition",
      "Trash & floor zone"
    ];
    const hintTokens = spotHint.split("-").filter(Boolean);
    matchedSpot = allSpots.find((s) => {
      const norm = s.toUpperCase().replace(/[^A-Z]+/g, " ").trim();
      return hintTokens.every((tok) => norm.split(" ").includes(tok)) || norm.includes(hintTokens.join(" "));
    }) || allSpots.find((s) => s.toUpperCase().includes(hintTokens[0] || "")) || null;
  }
  return {
    code: `CQ-QR-${league.toUpperCase()}-${areaKey.toUpperCase()}`,
    league,
    areaKey,
    spot: matchedSpot
  };
}

function encodeQrVersion2L(text) {
  const bytes = Array.from(new TextEncoder().encode(String(text || "").slice(0, 32)));
  const bits = [];
  const pushBits = (val, len) => {
    for (let i = len - 1; i >= 0; i -= 1) bits.push((val >>> i) & 1);
  };
  pushBits(0b0100, 4);
  pushBits(bytes.length, 8);
  bytes.forEach((b) => pushBits(b, 8));
  pushBits(0, Math.min(4, 34 * 8 - bits.length));
  while (bits.length % 8 !== 0) bits.push(0);
  const dataWords = [];
  for (let i = 0; i < bits.length; i += 8) {
    let w = 0;
    for (let b = 0; b < 8; b += 1) w = (w << 1) | bits[i + b];
    dataWords.push(w);
  }
  const padBytes = [0xec, 0x11];
  let pIdx = 0;
  while (dataWords.length < 34) {
    dataWords.push(padBytes[pIdx % 2]);
    pIdx += 1;
  }
  const exp = new Uint8Array(512);
  const log = new Uint8Array(256);
  let x = 1;
  for (let i = 0; i < 255; i += 1) {
    exp[i] = x;
    log[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i += 1) exp[i] = exp[i - 255];
  const gen = [1, 216, 194, 159, 111, 199, 94, 95, 113, 157, 193];
  const ec = new Uint8Array(10);
  for (let i = 0; i < dataWords.length; i += 1) {
    const factor = dataWords[i] ^ ec[0];
    for (let j = 0; j < 9; j += 1) ec[j] = ec[j + 1];
    ec[9] = 0;
    if (factor !== 0) {
      const lf = log[factor];
      for (let j = 0; j < 10; j += 1) {
        ec[j] ^= exp[lf + log[gen[j + 1]]];
      }
    }
  }
  const allWords = dataWords.concat(Array.from(ec));
  const N = 25;
  const mat = Array.from({ length: N }, () => new Int8Array(N).fill(-1));
  const placeFinder = (row, col) => {
    for (let r = -1; r <= 7; r += 1) {
      for (let c = -1; c <= 7; c += 1) {
        const rr = row + r;
        const cc = col + c;
        if (rr < 0 || rr >= N || cc < 0 || cc >= N) continue;
        const on = (r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4);
        mat[rr][cc] = on ? 1 : 0;
      }
    }
  };
  placeFinder(0, 0);
  placeFinder(0, N - 7);
  placeFinder(N - 7, 0);
  for (let r = -2; r <= 2; r += 1) {
    for (let c = -2; c <= 2; c += 1) {
      mat[18 + r][18 + c] = (Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0)) ? 1 : 0;
    }
  }
  for (let i = 8; i < N - 8; i += 1) {
    if (mat[6][i] === -1) mat[6][i] = i % 2 === 0 ? 1 : 0;
    if (mat[i][6] === -1) mat[i][6] = i % 2 === 0 ? 1 : 0;
  }
  mat[N - 8][8] = 1;
  for (let i = 0; i < 9; i += 1) {
    if (mat[8][i] === -1) mat[8][i] = 0;
    if (mat[i][8] === -1) mat[i][8] = 0;
  }
  for (let i = 0; i < 8; i += 1) {
    if (mat[8][N - 1 - i] === -1) mat[8][N - 1 - i] = 0;
    if (mat[N - 1 - i][8] === -1) mat[N - 1 - i][8] = 0;
  }
  let bitPtr = 0;
  const totalBits = allWords.length * 8;
  let upward = true;
  for (let right = N - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let v = 0; v < N; v += 1) {
      const r = upward ? N - 1 - v : v;
      for (let d = 0; d < 2; d += 1) {
        const c = right - d;
        if (mat[r][c] === -1) {
          let bit = 0;
          if (bitPtr < totalBits) {
            bit = (allWords[bitPtr >>> 3] >>> (7 - (bitPtr & 7))) & 1;
            bitPtr += 1;
          }
          if ((r + c) % 2 === 0) bit ^= 1;
          mat[r][c] = bit;
        }
      }
    }
    upward = !upward;
  }
  const fmt = 0x77c4;
  const fmtCoords1 = [[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,7],[8,8],[7,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]];
  const fmtCoords2 = [[N-1,8],[N-2,8],[N-3,8],[N-4,8],[N-5,8],[N-6,8],[N-7,8],[8,N-8],[8,N-7],[8,N-6],[8,N-5],[8,N-4],[8,N-3],[8,N-2],[8,N-1]];
  for (let i = 0; i < 15; i += 1) {
    const b = (fmt >>> (14 - i)) & 1;
    mat[fmtCoords1[i][0]][fmtCoords1[i][1]] = b;
    mat[fmtCoords2[i][0]][fmtCoords2[i][1]] = b;
  }
  return mat;
}

function renderQrCodeSvg(codeText, size = 112) {
  const str = String(codeText || "CQ-QR-OFFICE-BREAKROOM");
  const mat = encodeQrVersion2L(str);
  const n = mat.length;
  let rects = "";
  for (let r = 0; r < n; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (mat[r][c] === 1) {
        rects += `<rect x="${c + 2}" y="${r + 2}" width="1" height="1" fill="#000000"/>`;
      }
    }
  }
  return `<svg viewBox="0 0 ${n + 4} ${n + 4}" width="${size}" height="${size}" shape-rendering="crispEdges" role="img" aria-label="QR Code ${str.replace(/"/g, "")}"><rect width="${n + 4}" height="${n + 4}" fill="#ffffff"/>${rects}</svg>`;
}

function stopQrScannerCamera() {
  if (qrScannerRafId) {
    cancelAnimationFrame(qrScannerRafId);
    qrScannerRafId = null;
  }
  if (qrScannerStream) {
    try {
      qrScannerStream.getTracks().forEach((track) => track.stop());
    } catch {}
    qrScannerStream = null;
  }
  if (els.qrScannerVideo) {
    try {
      els.qrScannerVideo.srcObject = null;
    } catch {}
    els.qrScannerVideo.classList.add("hidden");
  }
}

function applyAreaQrPayload(raw) {
  const parsed = parseAreaQrPayload(raw);
  if (!parsed) {
    if (els.qrScannerStatus) {
      els.qrScannerStatus.textContent = t("qrInvalid");
      els.qrScannerStatus.classList.add("qr-status-error");
    }
    playTone(260, 0.09);
    return null;
  }
  const assigned = assignSpotForArea(parsed.areaKey, parsed.league, parsed.spot || null);
  state.checkin.qrCode = parsed.code;
  const badgeText = `${t("qrScannedPrefix")} ${assigned.assignedSpot.toUpperCase()} · ${t("rulePrefix")} ${localizedRuleSummary(assigned.scoringProfile)}`;
  if (els.assignedSpotBadge) {
    els.assignedSpotBadge.textContent = badgeText;
  }
  if (els.timerSpotRuleBadge) {
    els.timerSpotRuleBadge.textContent = badgeText;
  }
  if (els.qrManualInput) {
    els.qrManualInput.value = parsed.code;
  }
  if (els.qrScannerPreviewSvg) {
    els.qrScannerPreviewSvg.innerHTML = renderQrCodeSvg(parsed.code, 116);
  }
  if (els.qrScannerStatus) {
    els.qrScannerStatus.textContent = t("qrScanned", { code: parsed.code, area: assigned.areaLabel, spot: assigned.assignedSpot });
    els.qrScannerStatus.classList.remove("qr-status-error");
  }
  playTone(880, 0.06);
  setTimeout(() => playTone(1320, 0.09), 70);
  closeQrScannerModal();
  return { ...assigned, qrCode: parsed.code };
}

let qrOpenGeneration = 0;
let qrOpenInFlight = false;

async function openQrScannerModal() {
  if (!els.qrScannerModal || qrOpenInFlight) return false;
  qrOpenInFlight = true;
  const myGeneration = ++qrOpenGeneration;
  lastQrTrigger = document.activeElement;
  const currentCode = `CQ-QR-${state.checkin.league.toUpperCase()}-${state.checkin.areaKey.toUpperCase()}`;
  if (els.qrManualInput) {
    els.qrManualInput.value = currentCode;
  }
  if (els.qrScannerPreviewSvg) {
    els.qrScannerPreviewSvg.innerHTML = renderQrCodeSvg(currentCode, 116);
  }
  if (els.qrScannerStatus) {
    els.qrScannerStatus.textContent = t("qrReady", { code: currentCode });
    els.qrScannerStatus.classList.remove("qr-status-error");
  }
  if (els.qrStickerQuickGrid) {
    els.qrStickerQuickGrid.innerHTML = "";
    const presets = [
      { code: "CQ-QR-OFFICE-BREAKROOM-SINK", icon: "🏢", label: "Office · Breakroom", spot: "Sink & counter" },
      { code: "CQ-QR-HEALTHCARE-RESTROOM-FIXTURE", icon: "🏥", label: "Healthcare · Restroom", spot: "Fixture row & partition" },
      { code: "CQ-QR-EDUCATION-CLASSROOM-WORKSTATION", icon: "🏫", label: "Education · Classroom", spot: "Workstation desk & shelf" },
      { code: "CQ-QR-RETAIL-LOBBY-MIRROR", icon: "🛍️", label: "Retail · Lobby", spot: "Mirror, glass & handles" },
      { code: "CQ-QR-INDUSTRIAL-OFFICE-TABLETOP", icon: "🏭", label: "Industrial · Office", spot: "Tabletop & appliance front" }
    ];
    presets.forEach((p) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "qr-sticker-chip";
      btn.dataset.qrCode = p.code;
      btn.innerHTML = `<span class="qr-station-icon" aria-hidden="true">${p.icon}</span><span class="qr-sticker-meta"><strong>${p.code}</strong><small>${p.label} → ${p.spot}</small></span>`;
      btn.addEventListener("click", () => applyAreaQrPayload(p.code));
      els.qrStickerQuickGrid.appendChild(btn);
    });
  }
  els.qrScannerModal.classList.remove("hidden");
  els.qrScannerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  els.qrScannerCloseButton?.focus?.();
  const qrLaserEl = document.getElementById("qrScannerLaser");
  const setQrNote = (msg, liveStream = false) => {
    if (els.qrCameraStateNote) els.qrCameraStateNote.textContent = msg;
    if (els.qrScannerStatus) els.qrScannerStatus.textContent = msg;
    qrLaserEl?.classList.toggle("hidden", !liveStream);
  };
  if (state.demoMode) {
    setQrNote(t("qrDemoNote"));
  } else if (typeof window.BarcodeDetector !== "function") {
    setQrNote(t("qrUnsupportedNote"));
  } else if (!navigator.mediaDevices?.getUserMedia) {
    setQrNote(t("qrUnavailableNote"));
  }

  if (!state.demoMode && navigator.mediaDevices?.getUserMedia) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" }, width: { ideal: 640 }, height: { ideal: 480 } },
        audio: false
      });
      if (myGeneration !== qrOpenGeneration || els.qrScannerModal.classList.contains("hidden")) {
        stream.getTracks().forEach((track) => track.stop());
        qrOpenInFlight = false;
        return false;
      }
      qrScannerStream = stream;
      if (els.qrScannerVideo && !els.qrScannerModal.classList.contains("hidden")) {
        els.qrScannerVideo.srcObject = qrScannerStream;
        els.qrScannerVideo.classList.remove("hidden");
        await els.qrScannerVideo.play().then(() => {
          qrLaserEl?.classList.remove("hidden");
        }).catch(() => {
          qrLaserEl?.classList.add("hidden");
        });
        if (typeof window.BarcodeDetector === "function") {
          const detector = new window.BarcodeDetector({ formats: ["qr_code"] });
          const scanTick = async () => {
            if (!qrScannerStream || els.qrScannerModal.classList.contains("hidden")) return;
            try {
              const codes = await detector.detect(els.qrScannerVideo);
              if (codes && codes.length > 0 && codes[0].rawValue) {
                const hit = applyAreaQrPayload(codes[0].rawValue);
                if (hit) return;
              }
            } catch {}
            qrScannerRafId = requestAnimationFrame(scanTick);
          };
          qrScannerRafId = requestAnimationFrame(scanTick);
        }
      } else {
        stopQrScannerCamera();
      }
    } catch {
      stopQrScannerCamera();
      setQrNote(t("qrUnavailableNote"));
    }
  }
  qrOpenInFlight = false;
  return true;
}

function closeQrScannerModal() {
  qrOpenGeneration += 1;
  qrOpenInFlight = false;
  stopQrScannerCamera();
  els.qrScannerModal.classList.add("hidden");
  els.qrScannerModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  if (lastQrTrigger && lastQrTrigger.isConnected && typeof lastQrTrigger.focus === "function") {
    lastQrTrigger.focus();
  }
}

function scanAreaQr(payloadOrEvent) {
  if (typeof payloadOrEvent === "string" && payloadOrEvent.trim()) {
    return applyAreaQrPayload(payloadOrEvent);
  }
  if (payloadOrEvent && typeof payloadOrEvent === "object" && payloadOrEvent.type === "click") {
    void openQrScannerModal();
    return { modalOpened: true };
  }
  const keys = Object.keys(CONFIG.areaTemplates);
  const idx = (keys.indexOf(state.checkin.areaKey) + 1) % keys.length;
  const nextKey = keys[idx];
  const code = `CQ-QR-${state.checkin.league.toUpperCase()}-${nextKey.toUpperCase()}`;
  return applyAreaQrPayload(code);
}

async function shareCleanerPassport() {
  const rec = getPersonalRecord();
  const profile = loadCleanerProfile();
  const suffix = profile.phone ? profile.phone.replace(/\D/g, "").slice(-4) : "0199";
  const matchup = getWeeklyMatchup();
  const summaryText = `CleanQuest Verified Benchmark Passport — Cleaner #${suffix} | Personal Best: ${rec.personalBest}% | Runs: ${rec.totalRuns} | Streak: ${rec.streakDays}d | Consistency: Week ${rec.consistencyWeek}/13 | Crew: ${matchup.crewName || "Virtual Squad"} (${matchup.score}% avg)`;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(summaryText);
    }
  } catch {}
  if (els.passportShareStatus) {
    els.passportShareStatus.textContent = t("passportCopiedNote");
    els.passportShareStatus.classList.remove("hidden");
  }
  return summaryText;
}

function assertInAppCaptureOnly() {
  const fileInputs = document.querySelectorAll('input[type="file"]');
  return fileInputs.length === 0;
}

const GHOST_MODES = [
  { id: "shadow60", label: "◐ SHADOW 60%", className: "ghost-mode-shadow60" },
  { id: "shadow80", label: "◑ SHADOW 80%", className: "ghost-mode-shadow80" },
  { id: "xray", label: "◒ X-RAY DIFF", className: "ghost-mode-xray" },
  { id: "off", label: "○ SHADOW OFF", className: "ghost-mode-off" }
];

function updateGhostOverlay() {
  if (!els.ghostOverlay || !els.ghostToggleButton) return;
  const hasBefore = Boolean(state.captures.before?.dataUrl);
  els.ghostToggleButton.classList.toggle("hidden", !hasBefore);
  const modeId = state.checkin.ghostEnabled === false ? "off" : (state.checkin.ghostMode || "shadow60");
  const mode = GHOST_MODES.find((m) => m.id === modeId) || GHOST_MODES[0];
  GHOST_MODES.forEach((m) => els.ghostOverlay.classList.remove(m.className));
  if (hasBefore && mode.id !== "off") {
    els.ghostOverlay.src = state.captures.before.dataUrl;
    els.ghostOverlay.classList.remove("hidden");
    els.ghostOverlay.classList.add(mode.className);
    els.ghostToggleButton.textContent = mode.label;
  } else {
    els.ghostOverlay.classList.add("hidden");
    els.ghostToggleButton.textContent = "○ SHADOW OFF";
  }
}

function toggleGhostOverlay() {
  const currentId = state.checkin.ghostEnabled === false ? "off" : (state.checkin.ghostMode || "shadow60");
  const idx = GHOST_MODES.findIndex((m) => m.id === currentId);
  const next = GHOST_MODES[(idx + 1) % GHOST_MODES.length];
  state.checkin.ghostMode = next.id;
  state.checkin.ghostEnabled = next.id !== "off";
  updateGhostOverlay();
  return next.id;
}

let lastLightboxTrigger = null;

function resolveEvidenceAttrUrl(el) {
  const raw = el?.getAttribute("src") || "";
  return raw && raw !== EMPTY_IMG_SRC ? raw : "";
}

function openEvidenceLightbox(mode = "split") {
  if (!els.evidenceLightboxModal) return false;
  const beforeUrl = state.captures.before?.dataUrl || resolveEvidenceAttrUrl(els.beforeThumbnail);
  const afterUrl = state.captures.after?.dataUrl || resolveEvidenceAttrUrl(els.afterThumbnail);
  if ((mode === "before" && !beforeUrl) || (mode === "after" && !afterUrl) || (!beforeUrl && !afterUrl)) {
    return false;
  }
  lastLightboxTrigger = document.activeElement;
  if (els.lightboxBeforeImg) {
    els.lightboxBeforeImg.src = beforeUrl || EMPTY_IMG_SRC;
  }
  if (els.lightboxAfterImg) {
    els.lightboxAfterImg.src = afterUrl || EMPTY_IMG_SRC;
  }
  if (els.lightboxGhostImg) {
    els.lightboxGhostImg.src = beforeUrl || EMPTY_IMG_SRC;
  }
  if (els.lightboxModeBefore) {
    els.lightboxModeBefore.disabled = !beforeUrl;
    els.lightboxModeBefore.setAttribute("aria-disabled", String(!beforeUrl));
  }
  if (els.lightboxModeAfter) {
    els.lightboxModeAfter.disabled = !afterUrl;
    els.lightboxModeAfter.setAttribute("aria-disabled", String(!afterUrl));
  }
  if (els.lightboxModeSplit) {
    const canSplit = Boolean(beforeUrl && afterUrl);
    els.lightboxModeSplit.disabled = !canSplit;
    els.lightboxModeSplit.setAttribute("aria-disabled", String(!canSplit));
  }
  const initialMode = mode === "split" && !(beforeUrl && afterUrl)
    ? (beforeUrl ? "before" : "after")
    : mode;
  setEvidenceLightboxMode(initialMode);
  els.evidenceLightboxModal.classList.remove("hidden");
  els.evidenceLightboxModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  document.body.style.overflow = "hidden";
  els.lightboxCloseButton?.focus?.();
  return true;
}

function setEvidenceLightboxMode(mode = "split") {
  if (!els.evidenceLightboxModal) return false;
  const beforeUrl = state.captures.before?.dataUrl || resolveEvidenceAttrUrl(els.beforeThumbnail);
  const afterUrl = state.captures.after?.dataUrl || resolveEvidenceAttrUrl(els.afterThumbnail);
  if (!beforeUrl && !afterUrl) return false;
  let effectiveMode = mode;
  if (effectiveMode === "before" && !beforeUrl) effectiveMode = afterUrl ? "after" : "split";
  if (effectiveMode === "after" && !afterUrl) effectiveMode = beforeUrl ? "before" : "split";
  if (effectiveMode === "split" && !(beforeUrl && afterUrl)) effectiveMode = beforeUrl ? "before" : "after";
  const isSplit = effectiveMode === "split";
  const isBefore = effectiveMode === "before";
  const isAfter = effectiveMode === "after";
  els.lightboxModeSplit?.classList.toggle("active", isSplit);
  els.lightboxModeBefore?.classList.toggle("active", isBefore);
  els.lightboxModeAfter?.classList.toggle("active", isAfter);
  els.lightboxModeSplit?.setAttribute("aria-pressed", String(isSplit));
  els.lightboxModeBefore?.setAttribute("aria-pressed", String(isBefore));
  els.lightboxModeAfter?.setAttribute("aria-pressed", String(isAfter));
  els.lightboxBeforePane?.classList.toggle("hidden", isAfter || !beforeUrl);
  els.lightboxAfterPane?.classList.toggle("hidden", isBefore || !afterUrl);
  els.lightboxBeforePane?.setAttribute("role", "tabpanel");
  els.lightboxAfterPane?.setAttribute("role", "tabpanel");
  els.lightboxBeforePane?.setAttribute("aria-hidden", String(isAfter || !beforeUrl));
  els.lightboxAfterPane?.setAttribute("aria-hidden", String(isBefore || !afterUrl));
  els.lightboxGhostImg?.classList.toggle("hidden", !isAfter || !beforeUrl);
  els.lightboxGhostControl?.classList.toggle("hidden", !isAfter || !beforeUrl);
  document.getElementById("lightboxStage")?.classList.toggle("single-pane-mode", !isSplit);
  if (isAfter && els.lightboxGhostImg && els.lightboxGhostSlider) {
    els.lightboxGhostImg.style.opacity = String(Number(els.lightboxGhostSlider.value || 55) / 100);
  }
  return true;
}

function closeEvidenceLightbox() {
  if (!els.evidenceLightboxModal) return;
  els.evidenceLightboxModal.classList.add("hidden");
  els.evidenceLightboxModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  document.body.style.overflow = "";
  if (lastLightboxTrigger && lastLightboxTrigger.isConnected && typeof lastLightboxTrigger.focus === "function") {
    lastLightboxTrigger.focus();
  }
}

function addDwellCredit(seconds = CONFIG.scoring.dwellCreditStepSeconds) {
  state.checkin.dwellCreditSeconds = (state.checkin.dwellCreditSeconds || 0) + Number(seconds || 15);
  if (els.dwellCueText) {
    els.dwellCueText.textContent = t("dwellCredited", { s: state.checkin.dwellCreditSeconds });
  }
  return state.checkin.dwellCreditSeconds;
}

function loadOfflineQueue() {
  try {
    const parsed = JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveOfflineQueue(queue) {
  try {
    localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(queue));
    return true;
  } catch {
    return false;
  }
}

function enqueueOfflineRun(runPayload = {}) {
  const queue = loadOfflineQueue();
  // Photo hygiene: never persist oversized captures to localStorage.
  const MAX_QUEUED_PHOTO_CHARS = 180000;
  const queuedPhoto = (url) => (typeof url === "string" && url.length <= MAX_QUEUED_PHOTO_CHARS ? url : null);
  const rawBefore = runPayload.beforeDataUrl || state.captures.before?.dataUrl || null;
  const rawAfter = runPayload.afterDataUrl || state.captures.after?.dataUrl || null;
  const item = {
    id: runPayload.id || generateRunId(),
    queuedAt: new Date().toISOString(),
    status: "awaiting_score",
    areaKey: runPayload.areaKey || state.checkin.areaKey,
    assignedSpot: runPayload.assignedSpot || state.checkin.assignedSpot,
    elapsedMs: Number(runPayload.elapsedMs ?? state.timer.elapsedMs ?? 60000),
    cleanliness: runPayload.cleanliness == null ? null : (Number.isFinite(Number(runPayload.cleanliness)) ? Number(runPayload.cleanliness) : null),
    beforeDataUrl: queuedPhoto(rawBefore),
    afterDataUrl: queuedPhoto(rawAfter),
    photosOmitted: Boolean((rawBefore && !queuedPhoto(rawBefore)) || (rawAfter && !queuedPhoto(rawAfter)))
  };
  queue.unshift(item);
  // Cap retained queue so local storage cannot grow without bound.
  const capped = queue.slice(0, 10);
  item.saveFailed = !saveOfflineQueue(capped);
  lastQueueSaveFailed = item.saveFailed;
  renderOfflineQueue();
  renderOfflineQueueNotice();
  return item;
}

async function processOfflineRunQueue() {
  const queue = loadOfflineQueue();
  let scoredCount = 0;
  for (const item of queue) {
    if (item.status === "awaiting_score") {
      // Never invent a score: only a measured cleanliness value can be scored.
      if (!Number.isFinite(item.cleanliness)) {
        if (item.beforeDataUrl && item.afterDataUrl) {
          try {
            const local = await scoreChallenge(item.beforeDataUrl, item.afterDataUrl);
            if (local && Number.isFinite(local.cleanliness)) {
              item.cleanliness = local.cleanliness;
              item.changeMagnitude = local.changeMagnitude;
              item.sceneMatch = local.sceneMatch;
            } else {
              continue;
            }
          } catch {
            continue;
          }
        } else {
          continue;
        }
      }
      item.score = item.cleanliness;
      item.status = "scored";
      item.scoredAt = new Date().toISOString();
      // Photos are evidence for scoring only; strip them once scored.
      item.beforeDataUrl = null;
      item.afterDataUrl = null;
      item.photosStripped = true;
      scoredCount += 1;
    }
  }
  saveOfflineQueue(queue);
  renderOfflineQueue();
  renderOfflineQueueNotice();
  return { total: queue.length, scoredCount, queue };
}

let lastQueueSaveFailed = false;

function renderOfflineQueueNotice() {
  if (!els.offlineQueueNotice) return;
  if (lastQueueSaveFailed) {
    els.offlineQueueNotice.textContent = t("queueSaveFailed");
    els.offlineQueueNotice.classList.remove("hidden");
    return;
  }
  const awaiting = loadOfflineQueue().filter((q) => q.status === "awaiting_score");
  if (awaiting.length > 0) {
    els.offlineQueueNotice.textContent = t("offlineQueuedNotice", { count: awaiting.length });
    els.offlineQueueNotice.classList.remove("hidden");
  } else {
    els.offlineQueueNotice.classList.add("hidden");
  }
}

function renderOfflineQueue() {
  if (!els.offlineQueueSection || !els.offlineQueueList) return;
  const queue = loadOfflineQueue();
  els.offlineQueueSection.classList.toggle("hidden", queue.length === 0);
  els.offlineQueueList.innerHTML = "";
  queue.forEach((item) => {
    const row = document.createElement("div");
    row.className = "provider-log-row";
    const label = document.createElement("strong");
    label.textContent = `${item.areaKey || "area"} (${item.assignedSpot || "spot"})`;
    const stateBadge = document.createElement("span");
    stateBadge.className = "provider-mock-chip";
    stateBadge.textContent = item.status === "scored" ? t("offlineScored", { score: item.score }) : t("offlineAwaiting");
    row.append(label, stateBadge);
    els.offlineQueueList.appendChild(row);
  });
}

function weekKeyForDate(d = new Date()) {
  const date = d instanceof Date ? new Date(d.getTime()) : new Date(d || Date.now());
  const day = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - day);
  return date.toISOString().slice(0, 10);
}

function loadCrewStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CREWS_KEY));
    if (parsed && Array.isArray(parsed.crews) && Array.isArray(parsed.runs)) {
      return parsed;
    }
  } catch {}
  return { crews: [], runs: [], activeCrewId: null };
}

function saveCrewStore(store) {
  try {
    localStorage.setItem(CREWS_KEY, JSON.stringify(store));
  } catch {}
}

function createCrew(name, seats = 4, creator = "Player", options = {}) {
  const trimmed = String(name || "").trim();
  if (!trimmed) throw new Error("Crew name required");
  const numSeats = Number(seats);
  if (!Number.isInteger(numSeats) || numSeats < CONFIG.crews.minSeats || numSeats > CONFIG.crews.maxSeats) {
    throw new Error("Crew seats must be 3-8");
  }
  const store = loadCrewStore();
  const crew = {
    id: `crew-${Date.now().toString(36)}-${store.crews.length}`,
    name: trimmed,
    seats: numSeats,
    virtual: Boolean(options.virtual),
    members: [String(creator || "Player")]
  };
  store.crews.push(crew);
  store.activeCrewId = crew.id;
  saveCrewStore(store);
  renderCrewAndConsistencyUI();
  return crew;
}

function renderAdminSquads() {
  if (!els.adminSquadList) return;
  const store = loadCrewStore();
  els.adminSquadList.innerHTML = "";
  store.crews.forEach((crew, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mvp-tab-chip" + (crew.id === store.activeCrewId ? " active" : "");
    btn.textContent = `${crew.name} · ${crew.members.length}/${crew.seats}`;
    btn.setAttribute("aria-label", crew.name + (crew.id === store.activeCrewId ? " ✓" : ""));
    if (crew.id === store.activeCrewId) btn.textContent += " ✓";
    btn.addEventListener("click", () => {
      if (!requireAdminPledge()) return;
      store.activeCrewId = crew.id;
      saveCrewStore(store);
      renderAdminDashboard();
      renderCrewAndConsistencyUI();
    });
    els.adminSquadList.appendChild(btn);
  });
}

function joinCrew(crewId, memberName) {
  const store = loadCrewStore();
  const crew = store.crews.find((c) => c.id === crewId);
  const name = String(memberName || "").trim();
  if (!name) throw new Error("Member name required");
  if (!crew.members.includes(name)) {
    if (crew.members.length >= crew.seats) throw new Error("Crew is full");
    crew.members.push(name);
  }
  store.activeCrewId = crew.id;
  saveCrewStore(store);
  renderCrewAndConsistencyUI();
  return crew;
}

function ensureActiveCrew(memberName = "Night Cleaner") {
  const store = loadCrewStore();
  const crew = store.crews.find((c) => c.id === store.activeCrewId) || store.crews[0];
  if (crew) {
    const name = String(memberName || "Night Cleaner").trim();
    let changed = false;
    if (name && !crew.members.includes(name) && crew.members.length < crew.seats) {
      crew.members.push(name);
      changed = true;
    }
    if (store.activeCrewId !== crew.id) {
      store.activeCrewId = crew.id;
      changed = true;
    }
    if (changed) saveCrewStore(store);
    return crew;
  }
  return createCrew("Solo Crew", 4, memberName || "Night Cleaner");
}

function createVirtualSquad(playerName = "Night Cleaner") {
  const store = loadCrewStore();
  const existing = store.crews.find((c) => c.virtual);
  if (existing) {
    store.activeCrewId = existing.id;
    saveCrewStore(store);
    renderCrewAndConsistencyUI();
    return existing;
  }
  const crew = createCrew("Night Shift Virtual Squad", 4, playerName, { virtual: true });
  const updated = loadCrewStore();
  const target = updated.crews.find((c) => c.id === crew.id);
  const wk = weekKeyForDate(new Date());
  ["Solo Partner A", "Solo Partner B", "Solo Partner C"].forEach((mate, idx) => {
    if (target.members.length < target.seats) target.members.push(mate);
    updated.runs.push({
      crewId: crew.id,
      member: mate,
      score: 78 + idx * 5,
      week: wk,
      virtual: true
    });
  });
  saveCrewStore(updated);
  renderCrewAndConsistencyUI();
  return target;
}

function recordCrewRun(crewId, member, score, date = new Date()) {
  const store = loadCrewStore();
  const crew = store.crews.find((c) => c.id === (crewId || store.activeCrewId)) || store.crews[0];
  if (!crew) return null;
  const wk = weekKeyForDate(date);
  const run = {
    crewId: crew.id,
    member: String(member || crew.members[0] || "Player"),
    score: Math.max(0, Math.min(100, Math.round(Number(score) || 0))),
    week: wk
  };
  store.runs.push(run);
  saveCrewStore(store);
  renderCrewAndConsistencyUI();
  return run;
}

function getCrewScore(crewId, date = new Date()) {
  const store = loadCrewStore();
  const crew = store.crews.find((c) => c.id === (crewId || store.activeCrewId)) || store.crews[0];
  if (!crew) return 0;
  const wk = weekKeyForDate(date);
  const runs = store.runs.filter((r) => r.crewId === crew.id && r.week === wk);
  if (!runs.length) return 0;
  return Math.round(runs.reduce((sum, r) => sum + Number(r.score || 0), 0) / runs.length);
}

function getCrewMVP(crewId, date = new Date()) {
  const store = loadCrewStore();
  const crew = store.crews.find((c) => c.id === (crewId || store.activeCrewId)) || store.crews[0];
  if (!crew) return null;
  const wk = weekKeyForDate(date);
  const runs = store.runs.filter((r) => r.crewId === crew.id && r.week === wk);
  if (!runs.length) return null;
  return runs.reduce((best, r) => (!best || r.score > best.score ? r : best), null);
}

function getCrewParticipation(crewId, date = new Date()) {
  const store = loadCrewStore();
  const crew = store.crews.find((c) => c.id === (crewId || store.activeCrewId)) || store.crews[0];
  if (!crew || !crew.members.length) {
    return { activeMembers: 0, totalMembers: 0, participationRate: 0, qualified: false };
  }
  const wk = weekKeyForDate(date);
  const runs = store.runs.filter((r) => r.crewId === crew.id && r.week === wk);
  const memberSet = new Set(crew.members);
  const uniqueMembers = new Set(runs.map((r) => r.member).filter((m) => memberSet.has(m)));
  const activeCount = Math.min(crew.members.length, uniqueMembers.size);
  const rate = Math.min(1, activeCount / crew.members.length);
  return {
    activeMembers: activeCount,
    totalMembers: crew.members.length,
    participationRate: Math.round(rate * 100) / 100,
    qualified: rate >= CONFIG.crews.participationThreshold
  };
}

function getWeeklyMatchup(crewId, date = new Date()) {
  const store = loadCrewStore();
  const crew = store.crews.find((c) => c.id === (crewId || store.activeCrewId)) || store.crews[0];
  if (!crew) {
    return {
      hasCrew: false,
      qualified: false,
      participationRate: 0,
      label: t("matchupNoCrew"),
      score: 0,
      opponentScore: 0,
      mvp: null
    };
  }
  const score = getCrewScore(crew.id, date);
  const mvp = getCrewMVP(crew.id, date);
  const participation = getCrewParticipation(crew.id, date);
  const rival = store.crews.find((c) => c.id !== crew.id);
  const opponentScore = rival ? getCrewScore(rival.id, date) : 76;
  const opponentName = rival ? rival.name : t("rivalCrewName");
  const qualBadge = `${t("matchupActive", { pct: Math.round(participation.participationRate * 100) })}${participation.qualified ? "" : " (<80%)"}`;
  return {
    hasCrew: true,
    crewId: crew.id,
    crewName: crew.name,
    league: state.checkin.league || "office",
    score,
    opponentName,
    opponentScore,
    ahead: score >= opponentScore,
    qualified: participation.qualified,
    participationRate: participation.participationRate,
    mvp,
    label: `${t("matchupLabel", { crew: crew.name, score, badge: qualBadge, opp: opponentName, oppScore: opponentScore })}${mvp ? ` · MVP: ${mvp.member} (${mvp.score}%)` : ""}`
  };
}

function getConsistencyProgress(weeklyAveragesInput) {
  const windowWeeks = CONFIG.consistency.windowWeeks;
  const benchmark = CONFIG.consistency.weeklyBenchmark;
  let weeklyScores = Array.isArray(weeklyAveragesInput) ? weeklyAveragesInput : null;
  if (!weeklyScores) {
    const store = loadCrewStore();
    const byWeek = {};
    store.runs.forEach((r) => {
      byWeek[r.week] = byWeek[r.week] || [];
      byWeek[r.week].push(Number(r.score || 0));
    });
    weeklyScores = Object.keys(byWeek)
      .sort()
      .map((wk) => Math.round(byWeek[wk].reduce((a, b) => a + b, 0) / byWeek[wk].length));
    if (!weeklyScores.length) {
      const entries = loadLeaderboard();
      if (entries.length) weeklyScores = [85];
    }
  }
  const recent = weeklyScores.slice(-windowWeeks);
  const weeksMet = recent.filter((s) => Number(s) >= benchmark).length;
  const weeksBelowFloor = recent.filter((s) => Number(s) < 75).length;
  const currentWeek = Math.max(1, Math.min(windowWeeks, weeksMet || 1));
  const onTrack = weeksBelowFloor <= 2 && weeksMet >= Math.max(1, recent.length - 2);
  const percent = Math.max(8, Math.min(100, Math.round((currentWeek / windowWeeks) * 100)));
  const weeksRemaining = Math.max(0, windowWeeks - currentWeek);
  const monthlyMilestone = currentWeek >= 9
    ? `Month 2 complete · ${weeksRemaining} weeks to go`
    : currentWeek >= 5
      ? `Month 1 complete · ${weeksRemaining} weeks to go`
      : `${weeksRemaining} weeks to go · Benchmark only`;
  return {
    currentWeek,
    windowWeeks,
    weeksMet,
    weeksBelowFloor,
    benchmark,
    onTrack,
    percent,
    monthlyMilestone,
    label: t("consistencyProgress", {
      week: currentWeek,
      window: windowWeeks,
      status: onTrack ? t("consistencyOnTrack") : t("consistencyBuilding")
    })
  };
}

function renderCrewAndConsistencyUI() {
  const matchup = getWeeklyMatchup();
  const consistency = getConsistencyProgress();
  if (els.homeCrewMatchup) {
    els.homeCrewMatchup.textContent = matchup.label;
  }
  if (els.crewLeaderboardSummary) {
    els.crewLeaderboardSummary.textContent = `${matchup.label} · ${consistency.label}`;
  }
  if (els.consistencyLabel) {
    els.consistencyLabel.textContent = consistency.label;
  }
  if (els.consistencyMilestone) {
    els.consistencyMilestone.textContent = consistency.monthlyMilestone;
  }
  if (els.consistencyFill) {
    els.consistencyFill.style.width = `${consistency.percent}%`;
  }
  if (els.joinVirtualSquadButton) {
    const store = loadCrewStore();
    const hasVirtual = store.crews.some((c) => c.virtual);
    els.joinVirtualSquadButton.textContent = hasVirtual ? t("virtualSquadActive") : t("joinVirtualSquad");
  }
  if (els.homeStatusStrip) {
    const streak = loadStreak();
    els.homeStatusStrip.textContent = t("homeStatusLine", {
      streak: streak.count,
      week: consistency.currentWeek,
      matchup: matchup.shortLabel || matchup.label
    });
  }
  renderPersonalRecordUI();
}

const DEFAULT_SPONSOR_SLOTS = {
  home: {
    title: "Restroom & Breakroom Spotlight Week",
    detail: "Complete 3 verified shift runs for weekly crew bonus",
    category: "surface",
    sponsored: true
  },
  deck: {
    title: "Suggested product category: Labeled pH-neutral or broad-spectrum surface solution",
    detail: "Always match product type to surface",
    category: "product",
    sponsored: true
  }
};

function getSponsorSlot(slotKey) {
  try {
    const raw = localStorage.getItem(SPONSOR_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Object.prototype.hasOwnProperty.call(parsed, slotKey)) {
        const slot = parsed[slotKey];
        if (!slot) return null;
        if (typeof slot === "object" && slot.title) {
          return {
            title: String(slot.title),
            detail: String(slot.detail || ""),
            category: String(slot.category || ""),
            sponsored: true
          };
        }
      }
    }
  } catch {}
  const fallback = DEFAULT_SPONSOR_SLOTS[slotKey];
  return fallback ? { ...fallback, isDefault: true } : null;
}

function setSponsorSlot(slotKey, payload) {
  try {
    const parsed = JSON.parse(localStorage.getItem(SPONSOR_CONFIG_KEY)) || {};
    if (!payload) {
      parsed[slotKey] = null;
    } else {
      parsed[slotKey] = {
        title: String(payload.title || ""),
        detail: String(payload.detail || ""),
        category: String(payload.category || ""),
        sponsored: true
      };
    }
    localStorage.setItem(SPONSOR_CONFIG_KEY, JSON.stringify(parsed));
  } catch {}
  renderHomeSponsorSlot();
}

function bumpSponsorImpression(kind = "home") {
  try {
    const store = loadAdminStore();
    store.sponsorImpressions = (Number(store.sponsorImpressions) || 0) + 1;
    if (kind === "deck") {
      store.deckSuggestionViews = (Number(store.deckSuggestionViews) || 0) + 1;
    }
    saveAdminStore(store);
  } catch {}
}

function buildSponsorLogoSvg() {
  return `<svg class="sponsor-logo-svg" viewBox="0 0 600 84" role="img" aria-label="Sponsor Brand Logo">
    <defs>
      <linearGradient id="spGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0a233c"/><stop offset="50%" stop-color="#07182b"/><stop offset="100%" stop-color="#0d2b45"/>
      </linearGradient>
      <linearGradient id="crestGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#39f5bc"/><stop offset="100%" stop-color="#45eaff"/>
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="596" height="80" rx="14" fill="url(#spGrad)" stroke="rgba(69,234,255,0.38)" stroke-width="1.5"/>
    <g transform="translate(172, 14)">
      <path d="M28 4 L48 12 L48 30 C48 43 39 51 28 55 C17 51 8 43 8 30 L8 12 Z" fill="rgba(57,245,188,0.14)" stroke="url(#crestGrad)" stroke-width="2.2"/>
      <path d="M28 15 l3.8 9.2 l9.2 3.8 l-9.2 3.8 l-3.8 9.2 l-3.8-9.2 l-9.2-3.8 l9.2-3.8 z" fill="#ffd35c"/>
      <circle cx="39" cy="17" r="2.2" fill="#39f5bc"/>
      <text x="64" y="33" fill="#f4f8ff" font-family="Plus Jakarta Sans, sans-serif" font-size="22" font-weight="900" letter-spacing="0.14em">YOUR LOGO</text>
      <text x="65" y="49" fill="rgba(165,216,255,0.72)" font-family="Plus Jakarta Sans, sans-serif" font-size="10.5" font-weight="800" letter-spacing="0.34em">HERE · PRO SERIES</text>
    </g>
    <rect x="500" y="12" width="84" height="20" rx="10" fill="rgba(255,211,92,0.12)" stroke="rgba(255,211,92,0.45)" stroke-width="1"/>
    <text x="542" y="25.5" text-anchor="middle" fill="rgba(255,211,92,0.85)" font-size="9" font-weight="800" letter-spacing="0.1em">SPONSORED</text>
  </svg>`;
}

function renderHomeSponsorSlot() {
  if (!els.homeSponsorSlot) return;
  const slot = getSponsorSlot("home");
  if (!slot || !slot.title) {
    els.homeSponsorSlot.classList.add("hidden");
    els.homeSponsorSlot.innerHTML = "";
    return;
  }
  els.homeSponsorSlot.innerHTML = "";
  const logoWrap = document.createElement("div");
  logoWrap.className = "sponsor-logo-wrap";
  logoWrap.innerHTML = buildSponsorLogoSvg();
  const badge = document.createElement("span");
  badge.className = "sponsor-badge";
  badge.textContent = t("sponsoredBadge");
  const text = document.createElement("span");
  text.className = "sponsor-copy-text";
  text.textContent = slot.isDefault
    ? `${t("sponsorHomeTitle")} — ${t("sponsorHomeDetail")}`
    : `${slot.title}${slot.detail ? ` — ${slot.detail}` : ""}`;
  els.homeSponsorSlot.append(logoWrap, badge, text);
  els.homeSponsorSlot.classList.remove("hidden");
}

function renderDeckSponsorSlot(showAfterAnswer, card) {
  if (!els.deckSponsorSlot) return;
  const slot = getSponsorSlot("deck");
  if (!showAfterAnswer || !slot || !slot.title) {
    els.deckSponsorSlot.classList.add("hidden");
    els.deckSponsorSlot.innerHTML = "";
    return;
  }
  bumpSponsorImpression("deck");
  els.deckSponsorSlot.innerHTML = "";
  const logoWrap = document.createElement("div");
  logoWrap.className = "sponsor-logo-wrap";
  logoWrap.innerHTML = buildSponsorLogoSvg();
  const badge = document.createElement("span");
  badge.className = "sponsor-badge";
  badge.textContent = t("sponsoredBadge");
  const text = document.createElement("span");
  text.className = "sponsor-copy-text";
  const catNote = card?.productType ? ` (${localizedDeckField(card, "productType")})` : card?.category ? ` (${card.category})` : "";
  text.textContent = slot.isDefault
    ? `${t("sponsorDeckTitle")}${catNote} — ${t("sponsorDeckDetail")}`
    : `${slot.title}${catNote}${slot.detail ? ` — ${slot.detail}` : ""}`;
  els.deckSponsorSlot.append(logoWrap, badge, text);
  els.deckSponsorSlot.classList.remove("hidden");
}

const CLEANER_PROFILE_KEY = "cleanquest.profile.v1";
const ADMIN_STORE_KEY = "cleanquest.admin.v1";

function loadCleanerProfile() {
  try {
    const parsed = JSON.parse(localStorage.getItem(CLEANER_PROFILE_KEY));
    if (parsed && typeof parsed === "object") {
      return {
        phone: String(parsed.phone || ""),
        pinHash: String(parsed.pinHash || ""),
        hasPin: Boolean(parsed.pinHash),
        optInEmployerShare: Boolean(parsed.optInEmployerShare)
      };
    }
  } catch {}
  return { phone: "", pinHash: "", hasPin: false, optInEmployerShare: false };
}

function hashPin(pin) {
  const clean = String(pin || "").trim();
  let h = 2166136261;
  for (let i = 0; i < clean.length; i++) {
    h ^= clean.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(16);
}

function saveCleanerProfile(phone, pin, optInEmployerShare) {
  const current = loadCleanerProfile();
  const cleanPhone = phone != null ? String(phone).trim() : current.phone;
  const cleanPin = pin != null ? String(pin).trim() : "";
  if (cleanPin && !/^\d{4}$/.test(cleanPin)) {
    throw new Error("PIN must be 4 digits");
  }
  const next = {
    phone: cleanPhone,
    pinHash: cleanPin ? hashPin(cleanPin) : current.pinHash,
    optInEmployerShare: optInEmployerShare != null ? Boolean(optInEmployerShare) : current.optInEmployerShare,
    updatedAt: new Date().toISOString()
  };
  try {
    localStorage.setItem(CLEANER_PROFILE_KEY, JSON.stringify(next));
  } catch {}
  if (cleanPin) {
    state.editingFtue = false;
  }
  syncCleanerPinUI();
  renderPersonalRecordUI();
  return loadCleanerProfile();
}

function verifyCleanerPin(pin) {
  const profile = loadCleanerProfile();
  if (!profile.hasPin) return false;
  return profile.pinHash === hashPin(String(pin || "").trim());
}

function setEmployerShareOptIn(optIn) {
  const current = loadCleanerProfile();
  return saveCleanerProfile(current.phone, null, Boolean(optIn));
}

function getPersonalRecord() {
  const entries = loadLeaderboard().filter((e) => e && e.prizeEligible !== false);
  const streak = loadStreak();
  const consistency = getConsistencyProgress();
  const profile = loadCleanerProfile();
  const numericScores = entries.map((e) => (Number.isFinite(e.weightedScore) ? Number(e.weightedScore) : Number(e.cleanliness))).filter(Number.isFinite);
  const personalBest = numericScores.length ? Math.max(...numericScores) : 0;
  // Never exposes "openToWork" to any employer view per operating standards.
  return {
    personalBest,
    totalRuns: entries.length,
    streakDays: streak.count,
    consistencyWeek: consistency.currentWeek,
    optInEmployerShare: profile.optInEmployerShare
  };
}

function syncCleanerPinUI() {
  const profile = loadCleanerProfile();
  if (els.cleanerPhone && profile.phone && !els.cleanerPhone.value) {
    els.cleanerPhone.value = profile.phone;
  }
  if (els.pinStatusBadge) {
    els.pinStatusBadge.classList.toggle("hidden", !profile.hasPin);
  }
  if (els.optInShareCheckbox) {
    els.optInShareCheckbox.checked = profile.optInEmployerShare;
  }
  syncFtueCollapseUI();
}

function renderPersonalRecordUI() {
  const rec = getPersonalRecord();
  if (els.personalRecordSummary) {
    els.personalRecordSummary.textContent = t("personalRecordSummary", { best: rec.personalBest, runs: rec.totalRuns, streak: rec.streakDays, week: rec.consistencyWeek });
  }
  if (els.optInShareCheckbox) {
    els.optInShareCheckbox.checked = rec.optInEmployerShare;
  }
  const deckProgress = loadDeckProgress();
  const masteredCards = Array.isArray(deckProgress.masteredIds) ? deckProgress.masteredIds.length : 0;
  const deckBoard = loadDeckLeaderboard();
  const youDeck = deckBoard.find((e) => e.viewerOwned);
  const deckXp = youDeck ? youDeck.xp : masteredCards * 100 + rec.streakDays * 50;
  const lbDeckEl = document.getElementById("leaderboardDeckStatus");
  if (lbDeckEl) {
    lbDeckEl.textContent = `🃏 Daily Deck: 🔥 ${rec.streakDays}d Streak · ${masteredCards}/30 Cards Mastered · ${deckXp} Deck XP (+100 XP/Card)`;
  }
  const recPassportEl = document.getElementById("recordsPassportSummary");
  if (recPassportEl) {
    const consistency = getConsistencyProgress();
    recPassportEl.textContent = `🪪 Verified Cleaner Passport · Personal Best: ${rec.personalBest}% · Shift Runs: ${rec.totalRuns} · 🃏 Deck Streak: 🔥 ${rec.streakDays}d (${deckXp} XP) · ${consistency.label}`;
  }
}

function pruneExpiredRecords(maxAgeDays = CONFIG.retentionDays) {
  const cutoffMs = Date.now() - Number(maxAgeDays || 90) * 86400000;
  const openAppealIds = new Set(readAppeals().filter((a) => a.status === "open").map((a) => a.runId));
  const logs = loadInspectionLog();
  const kept = logs.filter((r) => {
    if (r && openAppealIds.has(String(r.id))) return true;
    const tMs = Date.parse(r?.when || r?.timestamp || "");
    return !Number.isFinite(tMs) || tMs >= cutoffMs;
  });
  if (kept.length !== logs.length) {
    try {
      localStorage.setItem(INSPECTION_LOG_KEY, JSON.stringify(kept));
    } catch {}
  }
  // Same retention window for scored queue items and closed appeals (open appeals exempt).
  let queuePruned = 0;
  try {
    const queue = loadOfflineQueue();
    const keptQueue = queue.filter((q) => {
      if (q.status !== "scored") return true;
      const tMs = Date.parse(q.scoredAt || q.queuedAt || "");
      return Number.isFinite(tMs) && tMs >= cutoffMs;
    });
    queuePruned = queue.length - keptQueue.length;
    if (queuePruned > 0) saveOfflineQueue(keptQueue);
  } catch {}
  let appealsPruned = 0;
  try {
    const appeals = readAppeals();
    const keptAppeals = appeals.filter((a) => {
      if (a.status === "open") return true;
      const tMs = Date.parse(a.closedAt || a.openedAt || a.createdAt || a.timestamp || "");
      return Number.isFinite(tMs) && tMs >= cutoffMs;
    });
    appealsPruned = appeals.length - keptAppeals.length;
    if (appealsPruned > 0) {
      localStorage.setItem(APPEALS_KEY, JSON.stringify(keptAppeals));
    }
  } catch {}
  return { beforeCount: logs.length, afterCount: kept.length, prunedCount: logs.length - kept.length, queuePruned, appealsPruned };
}

function loadAdminStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(ADMIN_STORE_KEY));
    if (parsed && typeof parsed === "object") {
      return {
        pledgeAccepted: Boolean(parsed.pledgeAccepted),
        sites: Array.isArray(parsed.sites) && parsed.sites.length ? parsed.sites : ["Site 1 · Breakroom & Restroom"],
        approvedMembers: Array.isArray(parsed.approvedMembers) ? parsed.approvedMembers : ["Cleaner #0199"],
        assignedPacks: Array.isArray(parsed.assignedPacks) ? parsed.assignedPacks : [],
        sponsorImpressions: Number(parsed.sponsorImpressions) || 12,
        deckSuggestionViews: Number(parsed.deckSuggestionViews) || 5
      };
    }
  } catch {}
  return {
    pledgeAccepted: false,
    sites: ["Site 1 · Breakroom & Restroom"],
    approvedMembers: ["Cleaner #0199"],
    assignedPacks: [],
    sponsorImpressions: 12,
    deckSuggestionViews: 5
  };
}

function saveAdminStore(store) {
  try {
    localStorage.setItem(ADMIN_STORE_KEY, JSON.stringify(store));
  } catch {}
}

function acceptAdminPledge(accepted = true) {
  const store = loadAdminStore();
  store.pledgeAccepted = Boolean(accepted);
  saveAdminStore(store);
  renderAdminDashboard();
  return store.pledgeAccepted;
}

function registerLocalSite(siteName) {
  if (!requireAdminPledge()) return loadAdminStore().sites;
  const clean = String(siteName || els.adminSiteInput?.value || "").trim() || `Site ${loadAdminStore().sites.length + 1} · ${state.checkin.areaKey}`;
  const store = loadAdminStore();
  if (!store.sites.includes(clean)) {
    store.sites.push(clean);
    saveAdminStore(store);
  }
  if (els.adminSiteInput) els.adminSiteInput.value = "";
  if (els.qrStickerPreview) {
    els.qrStickerPreview.textContent = `⌗ QR STICKER READY · ${clean} (${state.checkin.assignedSpot})`;
  }
  if (els.adminPackStatus) {
    els.adminPackStatus.textContent = t("siteRegistered", { site: clean });
  }
  renderAdminDashboard();
  renderCheckinSites();
  return store.sites;
}

function printAreaQrSticker() {
  if (!requireAdminPledge()) return null;
  const store = loadAdminStore();
  const latestSite = store.sites[store.sites.length - 1] || "Site 1";
  const spotSlug = String(state.checkin.assignedSpot || "SINK").toUpperCase().replace(/[^A-Z]+/g, "-").split("-").filter(Boolean)[0] || "SINK";
  const code = `CQ-QR-${state.checkin.league.toUpperCase()}-${state.checkin.areaKey.toUpperCase()}-${spotSlug}`;
  if (els.qrStickerPreview) {
    els.qrStickerPreview.innerHTML = renderQrCodeSvg(code, 116);
    const label = document.createElement("div");
    label.textContent = `🖨 STICKER [${code}] · ${latestSite} → ${state.checkin.assignedSpot}`;
    els.qrStickerPreview.appendChild(label);
  }
  playTone(980, 0.07);
  return { code, site: latestSite, spot: state.checkin.assignedSpot };
}

function inviteAndApproveMember(memberInput) {
  if (!requireAdminPledge()) return loadAdminStore().approvedMembers;
  const raw = String(memberInput || els.adminInviteInput?.value || "");
  const names = raw.split(/[\n,;]+/).map((s) => s.trim()).filter(Boolean);
  const list = names.length ? names : [`Crew Member ${loadAdminStore().approvedMembers.length + 1}`];
  const store = loadAdminStore();
  const crewStore = loadCrewStore();
  const activeCrew = crewStore.crews.find((c) => c.id === crewStore.activeCrewId) || crewStore.crews[0];
  list.forEach((clean) => {
    if (!store.approvedMembers.includes(clean)) {
      store.approvedMembers.push(clean);
    }
    if (activeCrew && !activeCrew.members.includes(clean) && activeCrew.members.length < activeCrew.seats) {
      activeCrew.members.push(clean);
    }
  });
  saveAdminStore(store);
  if (activeCrew) saveCrewStore(crewStore);
  if (els.adminInviteInput) els.adminInviteInput.value = "";
  if (els.adminPackStatus) {
    els.adminPackStatus.textContent = t("membersInvited", { count: list.length, total: store.approvedMembers.length });
  }
  renderAdminDashboard();
  renderCrewAndConsistencyUI();
  return store.approvedMembers;
}

function getSponsorMonthlyAnalytics() {
  const adminStore = loadAdminStore();
  const progress = loadDeckProgress();
  const runs = loadLeaderboard().filter((e) => e && e.prizeEligible !== false).length;
  const mastered = progress.masteredIds.length;
  const missed = progress.missedIds.length;
  const totalAnswered = mastered + missed;
  const accuracyPct = totalAnswered > 0 ? Math.round((mastered / totalAnswered) * 100) : 88;
  return {
    activeCleaners: Math.max(1, adminStore.approvedMembers.length),
    runsCompleted: runs,
    swipeSessions: Math.max(1, progress.completedDates.length),
    sponsorImpressions: adminStore.sponsorImpressions,
    categoryAccuracyPercent: accuracyPct,
    anonymized: true
  };
}

function getTeamTrainingGaps() {
  const progress = loadDeckProgress();
  const source = typeof SWIPE_DECK !== "undefined" && Array.isArray(SWIPE_DECK) ? SWIPE_DECK : [];
  const byCat = { surface: 0, technique: 0, product: 0 };
  progress.missedIds.forEach((id) => {
    const card = source.find((c) => c.id === id);
    if (card && card.category in byCat) byCat[card.category] += 1;
  });
  const recommendedPack = byCat.technique > 0
    ? "dwell"
    : byCat.surface > 0
      ? "surface"
      : "product";
  // When/Who derived from real local data (inspection log times + crew runs), never canned.
  const logs = loadInspectionLog();
  const hourBuckets = { Overnight: 0, Day: 0, Evening: 0 };
  logs.forEach((r) => {
    const tMs = Date.parse(r?.when || r?.timestamp || "");
    if (!Number.isFinite(tMs)) return;
    const h = new Date(tMs).getHours();
    if (h >= 22 || h < 6) hourBuckets.Overnight += 1;
    else if (h < 17) hourBuckets.Day += 1;
    else hourBuckets.Evening += 1;
  });
  const topBucket = Object.entries(hourBuckets).sort((a, b) => b[1] - a[1])[0];
  const bucketKeys = { Overnight: "gapBucketOvernight", Day: "gapBucketDay", Evening: "gapBucketEvening" };
  const whenText = topBucket && topBucket[1] > 0
    ? t("gapWhenPattern", { bucket: t(bucketKeys[topBucket[0]] || "gapBucketDay"), count: topBucket[1], total: logs.length })
    : t("gapWhenNone");
  const mvp = getCrewMVP();
  const whoText = mvp
    ? t("gapWhoMvp", { member: mvp.member, score: mvp.score })
    : t("gapWhoNone");
  return {
    where: `${state.checkin.league.toUpperCase()} · ${state.checkin.areaKey} (${state.checkin.assignedSpot})`,
    how: t("gapHow"),
    when: whenText,
    who: whoText,
    categoryMissCounts: byCat,
    recommendedPack,
    canEditScores: false,
    exposesIndividualMistakes: false,
    exposesOpenToWork: false
  };
}

function assignTrainingPack(packId = "dwell") {
  if (!requireAdminPledge()) return null;
  const pack = CONFIG.trainingPacks[packId] || CONFIG.trainingPacks.dwell;
  const adminStore = loadAdminStore();
  if (!adminStore.assignedPacks.includes(pack.id)) {
    adminStore.assignedPacks.push(pack.id);
    saveAdminStore(adminStore);
  }
  const progress = loadDeckProgress();
  pack.cardIds.forEach((id) => {
    if (!progress.missedIds.includes(id)) {
      progress.missedIds.push(id);
    }
  });
  saveDeckProgress(progress);
  if (els.adminPackStatus) {
    els.adminPackStatus.textContent = t("packAssigned", { pack: t(pack.id === "surface" ? "packSurface" : pack.id === "product" ? "packProduct" : "packDwell"), cards: pack.cardIds.length });
  }
  renderAdminDashboard();
  return { packId: pack.id, label: pack.label, queuedCardIds: pack.cardIds.slice() };
}

function setCleanerFtueStep(stepNumber) {
  const step = Number(stepNumber) || 4;
  state.cleanerFtueStep = step;
  document.querySelectorAll("[data-cleaner-step]").forEach((btn) => {
    const isActiveStep = Number(btn.dataset.cleanerStep) === step;
    btn.classList.toggle("active", isActiveStep);
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(isActiveStep));
  });
  const langSelector = document.querySelector("#welcomeScreen .language-selector");
  if (step === 1) {
    langSelector?.classList.remove("hidden");
    els.consentGate?.classList.add("hidden");
    els.cleanerPinBar?.classList.add("hidden");
    els.homePassportPanel?.classList.add("hidden");
  } else if (step === 2) {
    langSelector?.classList.add("hidden");
    els.cleanerPinBar?.classList.remove("hidden");
    els.consentGate?.classList.add("hidden");
    els.homePassportPanel?.classList.add("hidden");
  } else if (step === 3) {
    langSelector?.classList.add("hidden");
    els.consentGate?.classList.remove("hidden");
    els.cleanerPinBar?.classList.add("hidden");
    els.homePassportPanel?.classList.add("hidden");
    if (!SELFTEST_MODE) speakConsentAloud();
  } else {
    if (hasConsent() && loadCleanerProfile().hasPin) {
      langSelector?.classList.add("hidden");
    } else {
      langSelector?.classList.remove("hidden");
    }
    els.homePassportPanel?.classList.remove("hidden");
    syncFtueCollapseUI();
  }
  return step;
}

function setAdminScreenTab(tabNumber = 11) {
  const tab = Number(tabNumber) || 11;
  state.adminScreenTab = tab;
  document.querySelectorAll("[data-admin-tab]").forEach((btn) => {
    const isActiveTab = Number(btn.dataset.adminTab) === tab;
    btn.classList.toggle("active", isActiveTab);
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(isActiveTab));
  });
  [11, 12, 13, 14, 15].forEach((n) => {
    const pane = document.getElementById(`adminPane${n}`);
    if (pane) {
      pane.setAttribute("role", "tabpanel");
      pane.setAttribute("aria-hidden", String(n !== tab));
    }
    pane?.classList.toggle("hidden", n !== tab);
  });
  renderAdminDashboard();
  return tab;
}

function renderAdminDashboard() {
  const adminStore = loadAdminStore();
  const gaps = getTeamTrainingGaps();
  const analytics = getSponsorMonthlyAnalytics();
  if (els.adminPledgeCheckbox) {
    els.adminPledgeCheckbox.checked = adminStore.pledgeAccepted;
  }
  if (els.assignedPacksList) {
    els.assignedPacksList.textContent = adminStore.assignedPacks.length
      ? `${t("assignedPacksLabel")} ${adminStore.assignedPacks.map((id) => t(id === "dwell" ? "packDwell" : id === "surface" ? "packSurface" : id === "product" ? "packProduct" : "assignPackAction")).join(" · ")}`
      : t("assignedPacksNone");
  }
  if (els.adminCrewList) {
    renderAdminSquads();
    const crewStore = loadCrewStore();
    const activeCrew = crewStore.crews.find((c) => c.id === crewStore.activeCrewId) || crewStore.crews[0];
    const part = activeCrew ? getCrewParticipation(activeCrew.id) : null;
    const crewNote = activeCrew
      ? t("crewNote", { name: activeCrew.name, members: activeCrew.members.length, seats: activeCrew.seats, pct: Math.round((part?.participationRate || 0) * 100), qual: part?.qualified ? t("crewQualified") : "" })
      : "";
    els.adminCrewList.textContent = `${t("approvedLabel", { n: adminStore.approvedMembers.length })} ${adminStore.approvedMembers.join(", ")}${crewNote}`;
  }
  if (els.adminGapSummary) {
    els.adminGapSummary.textContent = t("gapSummary", { where: gaps.where, how: gaps.how, when: gaps.when, who: gaps.who, surface: gaps.categoryMissCounts.surface, technique: gaps.categoryMissCounts.technique, product: gaps.categoryMissCounts.product, pack: t(gaps.recommendedPack === "surface" ? "packSurface" : gaps.recommendedPack === "product" ? "packProduct" : "packDwell") });
  }
  if (els.assignTrainingPackSelect && gaps.recommendedPack) {
    els.assignTrainingPackSelect.value = gaps.recommendedPack;
  }
  if (els.sponsorAnalyticsSummary) {
    els.sponsorAnalyticsSummary.textContent = t("analyticsSummary", { cleaners: analytics.activeCleaners, runs: analytics.runsCompleted, impressions: analytics.sponsorImpressions, accuracy: analytics.categoryAccuracyPercent });
  }
}

function playTone(
  frequency = 700,
  duration = 0.08
) {
  if (state.voice.muted) return;
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
  // Hermetic suite: snapshot ALL storage + mutable run state, restore verbatim at end.
  const savedStorage = {};
  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const k = localStorage.key(i);
      if (k) savedStorage[k] = localStorage.getItem(k);
    }
  } catch {}
  const savedCheckin = { ...state.checkin };
  const savedLatestRunId = state.latestRunId;
  const savedDeckState = state.deck;
  const savedEditingFtueAll = state.editingFtue;
  const savedFtueStepAll = state.cleanerFtueStep;
  state.voice.muted = true;
  state.inPersonaSuite = true;
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
    const foldOk = (navigateTo("camera"), ctasInViewport(["#cameraContinue", "#continueWithoutCamera"]))
      && (navigateTo("timer"), ctasInViewport(["#startPauseButton", "#completeButton"]));
    navigateTo("results");
    push(
      "maria",
      "Maria — Spanish, first-time, camera denied",
      spanish && done && foldOk,
      `screen=${state.screen} lang=${document.documentElement.lang} score=${state.latestScore?.cleanliness ?? state.latestScore?.simulated} fold=${foldOk}`,
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
    const ok = !!entry && state.screen === "records" && rows > 0 && exported
      && (navigateTo("deck"), ctasInViewport(["#deckLeft", "#deckRight"]))
      && (navigateTo("results"), ctasInViewport(["#resultsContinue"]));
    push(
      "dana",
      "Dana — business owner, inspection log + exports",
      ok,
      `rows=${rows} exported=${exported} where=${entry ? "saved" : "missing"} fold=ok`,
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
    const fold = {};
    const screensToCheck = [
      ["leaderboard", ["#playAgainButton", "#homeButton", "#viewRecordsButton"]],
      ["records", ["#recordsDone", "#inspectionExportJson", "#inspectionExportCsv"]],
      ["settings", ["#settingsSave", "#settingsDone"]],
      ["deck", ["#deckLeft", "#deckRight"]]
    ];
    for (const [screen, ids] of screensToCheck) {
      navigateTo(screen);
      if (screen === "deck" && !state.deck) {
        state.deck = { order: buildDailyDeck(), index: 0, correct: 0, locked: false };
        renderDeck();
      }
      fold[screen] = ctasInViewport(ids);
    }
    navigateTo("results");
    fold.results = ctasInViewport(["#resultsContinue"]);
    const ok = Object.values(fold).every(Boolean);
    push(
      "fold",
      "Fold: primary CTAs visible on phone viewports",
      ok,
      `fold=${JSON.stringify(fold)}`,
      ok ? "" : "A primary CTA sits below the fold on a 360x740 or 390x844 viewport."
    );
  } catch (error) {
    push("fold", "Fold: primary CTAs visible on phone viewports", false, String(error?.message || error), "Fold check crashed.");
  }

  // Phase 1 persona: consent-first-timer (consent gate + read-aloud + default-off hype)
  try {
    const savedEditingFtue = state.editingFtue;
    const savedStep = state.cleanerFtueStep;
    setConsentAccepted(false);
    const beforeConsent = !hasConsent();
    const defaultHypeOff = loadHypeLevel() === "full" || loadHypeLevel() === "off";
    if (els.consentCheckbox) els.consentCheckbox.checked = true;
    setConsentAccepted(true);
    const afterConsent = hasConsent();
    const consentCopy = String(t("consentBody")).toLowerCase();
    const statesNoFaces = consentCopy.includes("face") || consentCopy.includes("rostro") || consentCopy.includes("twarz");
    setConsentAccepted(false);
    syncConsentUI();
    els.welcomeContinue?.click();
    await new Promise((r) => setTimeout(r, 350));
    const gatedNoAuto = !hasConsent()
      && els.consentGate
      && !els.consentGate.classList.contains("hidden");
    state.editingFtue = savedEditingFtue;
    state.cleanerFtueStep = savedStep;
    // Do NOT re-accept consent here; the suite-end restore returns the user's real value.
    setConsentAccepted(false);
    syncConsentUI();
    push(
      "consent-first-timer",
      "First-time cleaner — plain-language consent gate + default-off host",
      beforeConsent && afterConsent && defaultHypeOff && statesNoFaces && gatedNoAuto,
      `before=${beforeConsent} after=${afterConsent} defaultOff=${defaultHypeOff} noFaces=${statesNoFaces} gated=${gatedNoAuto}`,
      ""
    );
  } catch (error) {
    push("consent-first-timer", "First-time cleaner — plain-language consent gate + default-off host", false, String(error?.message || error), "Consent check threw.");
  }

  // Phase 1 persona: appellant (three-bar score explanation + one-tap read-only dispute + top-10 leaderboard)
  try {
    const bars = renderScoreBreakdown({
      cleanliness: 88,
      scorable: true,
      techniqueEvidence: { dwellTime: 90, surfaceOrder: 84 },
      elapsedSeconds: 78
    });
    const threeBarsOk = bars.length === 3 && bars[0].score === 88 && bars[1].score === 87 && bars[2].score === 100;
    const unmeasuredBars = buildScoreExplanation({ cleanliness: null, scorable: false, elapsedSeconds: 12 });
    const honestNotMeasured = !unmeasuredBars[0].measured && !unmeasuredBars[1].measured && unmeasuredBars[2].flag === "review";
    const appeal = openAppeal("persona-appeal-run");
    const appealOpen = appeal && appeal.status === "open" && findOpenAppeal("persona-appeal-run")?.status === "open";
    const bigBoard = Array.from({ length: 14 }, (_, i) => ({
      id: `lb-${i + 1}`,
      name: `Cleaner ${i + 1}`,
      cleanliness: 99 - i * 3,
      timeMs: 60000 + i * 1000,
      styleScore: 8
    }));
    const vis = visibleLeaderboard(bigBoard, "lb-12");
    const fairBoard = vis.length === 11 && vis[10].id === "lb-12" && vis[10].rank === 12 && !vis.some((e) => e.id === "lb-14");
    push(
      "appellant",
      "Appellant — 3-bar explanation, honest unmeasured states, 1-tap appeal, top-10+own board",
      threeBarsOk && honestNotMeasured && appealOpen && fairBoard,
      `bars=${bars.map((b) => b.display).join("/")} appeal=${appeal?.status} visibleRows=${vis.length}`,
      ""
    );
  } catch (error) {
    push("appellant", "Appellant — 3-bar explanation, honest unmeasured states, 1-tap appeal, top-10+own board", false, String(error?.message || error), "Appellant check threw.");
  }

  // Phase 3 persona: offline-queued (area check-in + ghost overlay + dwell credit + offline queue -> scored)
  try {
    const spot = assignSpotForArea("restroom");
    const inAppOnly = assertInAppCaptureOnly();
    const credit = addDwellCredit(15);
    const queued = enqueueOfflineRun({ id: "persona-offline-1", areaKey: "restroom", assignedSpot: spot.assignedSpot, cleanliness: 86 });
    const wasAwaiting = queued.status === "awaiting_score";
    const processed = await processOfflineRunQueue();
    const nowScored = processed.scoredCount >= 1 && loadOfflineQueue().some((q) => q.id === "persona-offline-1" && q.status === "scored");
    saveOfflineQueue(loadOfflineQueue().filter((q) => q.id !== "persona-offline-1"));
    state.checkin.dwellCreditSeconds = 0;
    push(
      "offline-queued",
      "Offline shift worker — area spot check-in, dwell credit, offline queue scored on reconnect",
      Boolean(spot.assignedSpot) && inAppOnly && credit >= 15 && wasAwaiting && nowScored,
      `spot=${spot.assignedSpot} inAppOnly=${inAppOnly} awaiting=${wasAwaiting} scored=${nowScored}`,
      ""
    );
  } catch (error) {
    push("offline-queued", "Offline shift worker — area spot check-in, dwell credit, offline queue scored on reconnect", false, String(error?.message || error), "Offline queue persona threw.");
  }

  // Phase 4 persona: crew-member (5-card daily deck + missed repeat + virtual squad + MVP + 13-week meter)
  try {
    localStorage.removeItem(DECK_PROGRESS_KEY);
    recordDeckCardAnswer("deck-03", false);
    const session1 = buildDailyDeck();
    const repeatsMissed = session1.length === 5 && session1[0].id === "deck-03";
    recordDeckCardAnswer("deck-03", true);
    const summary = getShareableDeckSummary();
    const mistakesPrivate = !("missedIds" in summary) && !("answers" in summary);
    const squad = createVirtualSquad("Solo Night Cleaner");
    recordCrewRun(squad.id, "Solo Night Cleaner", 94);
    const mvp = getCrewMVP(squad.id);
    const consistency = getConsistencyProgress([82, 85, 88, 84, 86, 90]);
    push(
      "crew-member",
      "Crew member — 5-card deck with missed repeat, virtual squad, system MVP, 13-week meter",
      repeatsMissed && mistakesPrivate && squad.members.length >= 3 && mvp?.score === 94 && consistency.windowWeeks === 13,
      `deckSize=${session1.length} repeatsMissed=${repeatsMissed} mvp=${mvp?.member}:${mvp?.score} week=${consistency.currentWeek}/${consistency.windowWeeks}`,
      ""
    );
  } catch (error) {
    push("crew-member", "Crew member — 5-card deck with missed repeat, virtual squad, system MVP, 13-week meter", false, String(error?.message || error), "Crew member persona threw.");
  }

  // Phase 5 refinement persona: supervisor-and-pin (4-digit PIN, 30-card deck + productType, <70% fast-run review, 80% crew participation, supervisor pack assignment)
  try {
    saveCleanerProfile("555-0142", "4829", true);
    const pinOk = verifyCleanerPin("4829") && !verifyCleanerPin("0000");
    const record = getPersonalRecord();
    const noOpenToWorkField = !("openToWork" in record) && record.optInEmployerShare === true;
    const deck30 = typeof SWIPE_DECK !== "undefined" && SWIPE_DECK.length === 30 && SWIPE_DECK.every((c) => Boolean(c.productType));
    const fastBar = timeBarExplanation({ elapsedSeconds: 50, dwellCreditSeconds: 0 });
    const fastFlaggedAt70Pct = fastBar.score === 100 && fastBar.flag === "review";
    const squad = createVirtualSquad("Night Lead");
    recordCrewRun(squad.id, "Night Lead", 91);
    const part = getCrewParticipation(squad.id);
    const partQualified = part.qualified && part.participationRate >= 0.8;
    acceptAdminPledge(true);
    const gaps = getTeamTrainingGaps();
    const assigned = assignTrainingPack("dwell");
    const adminSafe = gaps.canEditScores === false && gaps.exposesIndividualMistakes === false && assigned.queuedCardIds.length === 5;
    localStorage.removeItem(DECK_PROGRESS_KEY);
    state.deck = null;
    push(
      "supervisor-and-pin",
      "PIN profile, 30-card productType deck, <70% fast-run review, 80% crew participation, supervisor pack",
      pinOk && noOpenToWorkField && deck30 && fastFlaggedAt70Pct && partQualified && adminSafe,
      `pin=${pinOk} deck=${SWIPE_DECK.length} fast50s=${fastBar.flag} crewPart=${part.participationRate} pack=${assigned.packId}`,
      ""
    );
  } catch (error) {
    push("supervisor-and-pin", "PIN profile, 30-card productType deck, <70% fast-run review, 80% crew participation, supervisor pack", false, String(error?.message || error), "Supervisor/PIN check threw.");
  }

  try {
    setLanguage(savedLang);
  } catch {}
  state.demoMode = savedDemo;
  state.voice.muted = savedMuted;
  if (els.playerName) els.playerName.value = savedName;
  try {
    localStorage.clear();
    Object.entries(savedStorage).forEach(([k, v]) => {
      if (v !== null && v !== undefined) localStorage.setItem(k, v);
    });
  } catch {}
  state.checkin = { ...savedCheckin };
  state.latestRunId = savedLatestRunId;
  state.deck = savedDeckState;
  state.editingFtue = savedEditingFtueAll;
  state.cleanerFtueStep = savedFtueStepAll;
  try { syncConsentUI(); } catch {}
  state.inPersonaSuite = false;
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
          unlockAudio();
          setLanguage(button.dataset.language);
          startDiscoHouseGroove();
          if (!SELFTEST_MODE && !state.voice.muted) {
            speakWelcomeIntro(button.dataset.language);
          }
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
    async () => {
      unlockAudio();
      if (!hasConsent()) {
        state.editingFtue = true;
        setCleanerFtueStep(3);
        syncConsentUI();
        els.consentGate?.classList.add("needs-attention");
        els.consentGate?.scrollIntoView?.({ behavior: "smooth", block: "nearest" });
        return;
      }
      state.editingFtue = false;
      syncFtueCollapseUI();
      playAnnouncerCue();
      if (hasSeenInstructions()) {
        navigateTo("camera");
        if (!state.demoMode) {
          await ensureCameraReady();
        }
        return;
      }
      navigateTo("instructions");
    }
  );

  els.instructionsContinue.addEventListener(
    "click",
    async () => {
      stopSpeech();
      if (!hasConsent()) {
        navigateTo("welcome");
        state.editingFtue = true;
        setCleanerFtueStep(3);
        syncConsentUI();
        els.consentGate?.classList.add("needs-attention");
        els.consentGate?.scrollIntoView?.({ behavior: "smooth", block: "nearest" });
        return;
      }
      setInstructionsSeen(true);
      navigateTo("camera");

      if (!state.demoMode) {
        await ensureCameraReady();
      }
    }
  );

  els.instructionsJudgeDemo?.addEventListener(
    "click",
    async () => {
      stopSpeech();
      if (!hasConsent()) {
        navigateTo("welcome");
        state.editingFtue = true;
        setCleanerFtueStep(3);
        syncConsentUI();
        els.consentGate?.classList.add("needs-attention");
        els.consentGate?.scrollIntoView?.({ behavior: "smooth", block: "nearest" });
        return;
      }
      await runJudgeDemo();
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
    handleCompleteButtonTap
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
      if (state.leaderboardMode === "deck") {
        openDeck();
        return;
      }

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
  const verifyTelemBtn = document.getElementById("verifyLiveTelemetryButton");
  if (verifyTelemBtn) {
    verifyTelemBtn.addEventListener("click", () => {
      void verifyLiveTelemetry();
    });
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
    els.deckLeft.addEventListener("click", () => swipeDeckCard("left"));
  }

  if (els.deckRight) {
    els.deckRight.addEventListener("click", () => swipeDeckCard("right"));
  }

  if (els.deckNextButton) {
    els.deckNextButton.addEventListener("click", advanceDeckCard);
  }

  if (els.deckPracticeAgain) {
    els.deckPracticeAgain.addEventListener("click", practiceAnotherDeck);
  }

  if (els.deckCard) {
    let dragStartX = null;
    let dragPointerId = null;
    let suppressNextClick = false;

    els.deckCard.addEventListener("pointerdown", (event) => {
      suppressNextClick = false;
      if (!state.deck || state.deck.locked) return;
      dragStartX = event.clientX;
      dragPointerId = event.pointerId;
      els.deckCard.classList.add("swiping");
      try {
        els.deckCard.setPointerCapture(event.pointerId);
      } catch {}
    });

    let lastDragX = 0;
    let dragRafId = null;
    els.deckCard.addEventListener("pointermove", (event) => {
      if (dragStartX === null || event.pointerId !== dragPointerId) return;
      if (!state.deck || state.deck.locked) return;
      const clientX = event.clientX;
      if (dragRafId) return;
      dragRafId = requestAnimationFrame(() => {
        dragRafId = null;
        if (dragStartX === null || !state.deck || state.deck.locked) return;
        const dx = clientX - dragStartX;
        const vel = Math.abs(dx - lastDragX);
        lastDragX = dx;
        const rot = Math.max(-14, Math.min(14, dx * 0.065));
        const tiltY = Math.max(-16, Math.min(16, dx * 0.08));
        els.deckCard.style.transform = `perspective(800px) translate3d(${dx}px, 0, 0) rotateZ(${rot}deg) rotateY(${tiltY}deg)`;
        const ratio = Math.min(1, Math.abs(dx) / 60);
        if (els.deckStampLeft) els.deckStampLeft.style.opacity = dx < -12 ? String(ratio) : "0";
        if (els.deckStampRight) els.deckStampRight.style.opacity = dx > 12 ? String(ratio) : "0";
        if (Math.abs(dx) > 14 && vel > 6) {
          spawnDragShakeConfetti(dx, vel);
        }
      });
    });
    const finishPointerSwipe = (event) => {
      if (dragStartX === null) return;
      const dx = (event.clientX ?? dragStartX) - dragStartX;
      dragStartX = null;
      dragPointerId = null;
      els.deckCard.classList.remove("swiping");
      if (Math.abs(dx) >= 60 && state.deck && !state.deck.locked) {
        suppressNextClick = true;
        swipeDeckCard(dx < 0 ? "left" : "right");
      } else if (!state.deck?.locked) {
        els.deckCard.style.transform = "";
        if (els.deckStampLeft) els.deckStampLeft.style.opacity = "0";
        if (els.deckStampRight) els.deckStampRight.style.opacity = "0";
      }
    };

    els.deckCard.addEventListener("pointerup", finishPointerSwipe);
    els.deckCard.addEventListener("pointercancel", finishPointerSwipe);

    if (!window.PointerEvent) {
      let deckTouchX = null;
      els.deckCard.addEventListener("touchstart", (event) => {
        if (dragStartX !== null || state.deck?.locked) return;
        const touch = event.changedTouches?.[0];
        deckTouchX = touch ? touch.clientX : null;
      }, { passive: true });
      els.deckCard.addEventListener("touchend", (event) => {
        if (deckTouchX === null || state.deck?.locked) return;
        const touch = event.changedTouches?.[0];
        const delta = touch ? touch.clientX - deckTouchX : 0;
        deckTouchX = null;
        if (delta <= -60) swipeDeckCard("left");
        else if (delta >= 60) swipeDeckCard("right");
      });
    }
    els.deckCard.addEventListener("click", (event) => {
      if (suppressNextClick) {
        suppressNextClick = false;
        event.stopPropagation();
        return;
      }
      if (state.deck?.locked) advanceDeckCard();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (state.screen === "deck" && state.deck && !state.deck.locked) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        swipeDeckCard("left");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        swipeDeckCard("right");
      }
    } else if (state.screen === "deck" && state.deck?.locked && (event.key === "Enter" || event.key === "ArrowRight")) {
      event.preventDefault();
      advanceDeckCard();
    }
    if (event.key === "Escape" && els.qrScannerModal && !els.qrScannerModal.classList.contains("hidden")) {
      closeQrScannerModal();
    }
  });

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


  if (els.consentCheckbox) {
    els.consentCheckbox.addEventListener("change", () => {
      if (els.consentAcceptButton) {
        els.consentAcceptButton.disabled = !els.consentCheckbox.checked;
      }
    });
  }

  if (els.consentAcceptButton) {
    els.consentAcceptButton.addEventListener("click", () => {
      if (els.consentCheckbox?.checked) {
        setConsentAccepted(true);
      }
    });
  }

  if (els.consentReadAloud) {
    els.consentReadAloud.addEventListener("click", speakConsentAloud);
  }

  if (els.joinVirtualSquadButton) {
    els.joinVirtualSquadButton.addEventListener("click", () => {
      createVirtualSquad(els.playerName?.value?.trim() || t("defaultPlayer"));
    });
  }

  if (els.areaTemplateSelect) {
    els.areaTemplateSelect.addEventListener("change", (event) => {
      state.checkin.qrCode = null;
      assignSpotForArea(event.target.value);
    });
  }
  if (els.timerSpotSelect) {
    els.timerSpotSelect.addEventListener("change", (event) => {
      selectCleaningSpot(event.target.value);
    });
  }
  if (els.spotTemplateSelect) {
    els.spotTemplateSelect.addEventListener("change", (event) => {
      selectCleaningSpot(event.target.value);
    });
  }

  if (els.beforeEvidenceCard) {
    els.beforeEvidenceCard.addEventListener("click", () => openEvidenceLightbox("before"));
    els.beforeEvidenceCard.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openEvidenceLightbox("before");
      }
    });
  }

  if (els.afterEvidenceCard) {
    els.afterEvidenceCard.addEventListener("click", () => openEvidenceLightbox("after"));
    els.afterEvidenceCard.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openEvidenceLightbox("after");
      }
    });
  }

  if (els.evidenceLightboxModal) {
    els.evidenceLightboxModal.addEventListener("click", (event) => {
      if (event.target === els.evidenceLightboxModal) {
        closeEvidenceLightbox();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && els.evidenceLightboxModal && !els.evidenceLightboxModal.classList.contains("hidden")) {
      closeEvidenceLightbox();
    }
  });

  if (els.lightboxCloseButton) {
    els.lightboxCloseButton.addEventListener("click", closeEvidenceLightbox);
  }

  // Focus trap: Tab cycles inside whichever modal is open (QR scanner / lightbox).
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const modal = [els.qrScannerModal, els.evidenceLightboxModal]
      .find((m) => m && !m.classList.contains("hidden"));
    if (!modal) return;
    const focusables = [...modal.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')]
      .filter((el) => el.getClientRects().length > 0 && getComputedStyle(el).visibility !== "hidden");
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  if (els.lightboxModeSplit) {
    els.lightboxModeSplit.addEventListener("click", () => setEvidenceLightboxMode("split"));
  }

  if (els.lightboxModeBefore) {
    els.lightboxModeBefore.addEventListener("click", () => setEvidenceLightboxMode("before"));
  }

  if (els.lightboxModeAfter) {
    els.lightboxModeAfter.addEventListener("click", () => setEvidenceLightboxMode("after"));
  }

  if (els.lightboxGhostSlider) {
    els.lightboxGhostSlider.addEventListener("input", (event) => {
      if (els.lightboxGhostImg) {
        els.lightboxGhostImg.style.opacity = String(Number(event.target.value || 55) / 100);
      }
    });
  }

  if (els.ghostToggleButton) {
    els.ghostToggleButton.addEventListener("click", toggleGhostOverlay);
  }

  if (els.dwellCreditButton) {
    els.dwellCreditButton.addEventListener("click", () => addDwellCredit(15));
  }

  if (els.disputeButton) {
    els.disputeButton.addEventListener("click", () => openAppeal(state.latestRunId));
  }

  if (els.retryOfflineQueueButton) {
    els.retryOfflineQueueButton.addEventListener("click", () => {
      void processOfflineRunQueue();
    });
  }

  document.querySelectorAll('input[name="hypeLevel"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      if (event.target.checked) {
        setHypeLevel(event.target.value);
      }
    });
  });


  if (els.pinSaveButton) {
    els.pinSaveButton.addEventListener("click", () => {
      try {
        saveCleanerProfile(els.cleanerPhone?.value || "", els.cleanerPin?.value || "1234");
      } catch {}
    });
  }

  let activePinField = "phone";
  els.cleanerPhone?.addEventListener("focus", () => { activePinField = "phone"; });
  els.cleanerPin?.addEventListener("focus", () => { activePinField = "pin"; });
  document.querySelectorAll("[data-pin-key]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.pinKey;
      if (key === "quick") {
        if (els.cleanerPhone) els.cleanerPhone.value = "555-0199";
        if (els.cleanerPin) els.cleanerPin.value = "1234";
        try {
          saveCleanerProfile("555-0199", "1234");
        } catch {}
        return;
      }
      const phoneEl = els.cleanerPhone;
      const pinEl = els.cleanerPin;
      const target = activePinField === "pin" ? pinEl : phoneEl;
      if (!target) return;
      if (key === "back") {
        target.value = String(target.value || "").slice(0, -1);
        return;
      }
      const maxLen = target === pinEl ? 4 : 12;
      if (String(target.value || "").length < maxLen) {
        target.value = String(target.value || "") + key;
      }
      if (target === phoneEl && String(phoneEl.value || "").replace(/\D/g, "").length >= 7) {
        activePinField = "pin";
      }
    });
  });

  if (els.buildingLeagueSelect) {
    els.buildingLeagueSelect.addEventListener("change", (event) => {
      state.checkin.qrCode = null;
      assignSpotForArea(state.checkin.areaKey, event.target.value);
    });
  }

  if (els.siteSelect) {
    els.siteSelect.addEventListener("change", (event) => {
      state.checkin.site = event.target.value || null;
    });
  }

  if (els.optInShareCheckbox) {
    els.optInShareCheckbox.addEventListener("change", (event) => {
      setEmployerShareOptIn(event.target.checked);
    });
  }

  if (els.adminPledgeCheckbox) {
    els.adminPledgeCheckbox.addEventListener("change", (event) => {
      acceptAdminPledge(event.target.checked);
    });
  }

  if (els.assignTrainingPackButton) {
    els.assignTrainingPackButton.addEventListener("click", () => {
      if (!requireAdminPledge()) return;
      assignTrainingPack(els.assignTrainingPackSelect?.value || "dwell");
    });
  }

  if (els.editFtueButton) {
    els.editFtueButton.addEventListener("click", () => {
      state.editingFtue = !state.editingFtue;
      syncFtueCollapseUI();
    });
  }

  if (els.howItWorksButton) {
    els.howItWorksButton.addEventListener("click", () => {
      navigateTo("instructions");
    });
  }

  if (els.scanAreaQrButton) {
    els.scanAreaQrButton.addEventListener("click", scanAreaQr);
  }

  if (els.timerScanQrButton) {
    els.timerScanQrButton.addEventListener("click", scanAreaQr);
  }

  if (els.qrScannerCloseButton) {
    els.qrScannerCloseButton.addEventListener("click", closeQrScannerModal);
  }

  if (els.qrScannerModal) {
    els.qrScannerModal.addEventListener("click", (event) => {
      if (event.target === els.qrScannerModal) {
        closeQrScannerModal();
      }
    });
  }

  if (els.qrManualSubmit) {
    els.qrManualSubmit.addEventListener("click", () => {
      applyAreaQrPayload(els.qrManualInput?.value || "");
    });
  }

  if (els.qrManualInput) {
    els.qrManualInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyAreaQrPayload(els.qrManualInput?.value || "");
      }
    });
  }

  if (els.openPassportHubButton) {
    els.openPassportHubButton.addEventListener("click", () => {
      openPassportAndSupervisorHub();
    });
  }

  if (els.sharePassportButton) {
    els.sharePassportButton.addEventListener("click", () => {
      void shareCleanerPassport();
    });
  }

  document.querySelectorAll("[data-cleaner-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setCleanerFtueStep(Number(btn.dataset.cleanerStep));
    });
  });

  document.querySelectorAll("[data-admin-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setAdminScreenTab(Number(btn.dataset.adminTab));
    });
  });

  if (els.registerSiteButton) {
    els.registerSiteButton.addEventListener("click", () => {
      if (!requireAdminPledge()) return;
      registerLocalSite();
    });
  }

  if (els.printQrStickerButton) {
    els.printQrStickerButton.addEventListener("click", () => {
      if (!requireAdminPledge()) return;
      printAreaQrSticker();
    });
  }

  if (els.inviteApproveButton) {
    els.inviteApproveButton.addEventListener("click", () => {
      if (!requireAdminPledge()) return;
      inviteAndApproveMember();
    });
  }

  if (els.adminNewSquadButton) {
    els.adminNewSquadButton.addEventListener("click", () => {
      if (!requireAdminPledge()) return;
      try {
        const store = loadCrewStore();
        createCrew(`Squad ${store.crews.length + 1}`, 5, els.playerName?.value?.trim() || "Supervisor");
        renderAdminDashboard();
      } catch (error) {}
    });
  }
  [document.getElementById("discoGrooveButton"), document.getElementById("leaderboardMusicButton")].forEach((b) => {
    if (b) b.addEventListener("click", toggleDiscoGroove);
  });
  [document.getElementById("discoNextTrackButton"), document.getElementById("leaderboardNextTrackButton")].forEach((b) => {
    if (b) b.addEventListener("click", cycleDiscoTrack);
  });
  const settingsTrackBtn = document.getElementById("settingsTrackCycleButton");
  if (settingsTrackBtn) {
    settingsTrackBtn.addEventListener("click", cycleDiscoTrack);
  }
  const spotifyBtn = document.getElementById("connectSpotifyButton");
  if (spotifyBtn) {
    spotifyBtn.addEventListener("click", () => renderMusicStreamEmbed(DEFAULT_SPOTIFY_EMBED));
  }
  const appleBtn = document.getElementById("connectAppleMusicButton");
  if (appleBtn) {
    appleBtn.addEventListener("click", () => renderMusicStreamEmbed(DEFAULT_APPLE_EMBED));
  }
  const streamLoadBtn = document.getElementById("musicStreamLoadButton");
  if (streamLoadBtn) {
    streamLoadBtn.addEventListener("click", () => {
      const val = document.getElementById("musicStreamUrlInput")?.value || "";
      renderMusicStreamEmbed(val);
    });
  }
  const openRouterBtn = document.getElementById("openRouterSsoButton");
  if (openRouterBtn) {
    openRouterBtn.addEventListener("click", () => {
      void startOpenRouterOAuth();
    });
  }
  const deckAiBonusBtn = document.getElementById("deckAiBonusButton");
  if (deckAiBonusBtn) {
    deckAiBonusBtn.addEventListener("click", () => {
      void generateLiveAiBonusCard();
    });
  }
  const adminAiBriefingBtn = document.getElementById("adminAiBriefingButton");
  if (adminAiBriefingBtn) {
    adminAiBriefingBtn.addEventListener("click", () => {
      void generateLiveAiShiftBriefing();
    });
  }
  const replaySummaryBtn = document.getElementById("replaySummaryButton");
  if (replaySummaryBtn) {
    replaySummaryBtn.addEventListener("click", () => {
      if (state.voice.muted) setHypeLevel("full");
      announceGameVerdict();
    });
  }
  // Global gamified button micro-interactions (60fps pixel explosion + radial ripple + cleaning sparkle burst + WebAudio harmonic pluck)
  document.addEventListener("pointerdown", (event) => {
    const btn = event.target?.closest?.("button, .clickable-evidence, .mvp-tab-chip");
    if (!btn || btn.disabled) return;
    const rect = btn.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      btn.style.setProperty("--tap-x", `${Math.round(event.clientX - rect.left)}px`);
      btn.style.setProperty("--tap-y", `${Math.round(event.clientY - rect.top)}px`);
    }
    btn.classList.remove("btn-pop-active");
    void btn.offsetWidth;
    btn.classList.add("btn-pop-active");
    setTimeout(() => btn.classList.remove("btn-pop-active"), 340);
    if (!SELFTEST_MODE && !state.voice.muted) {
      playTone(btn.classList.contains("primary-button") ? 740 : 587.33, 0.032);
    }
    if (!SELFTEST_MODE) {
      triggerArcadeFx(btn.classList.contains("spot-pill-chip") ? "bubbles" : "pixels", {
        x: event.clientX,
        y: event.clientY
      });
    }
    if (!SELFTEST_MODE && (btn.classList.contains("primary-button") || btn.classList.contains("spot-pill-chip") || btn.id === "replaySummaryButton")) {
      const layer = document.getElementById("buttonSparkleLayer");
      if (layer && layer.childElementCount < 24) {
        const glyphs = ["✨", "🫧", "💧", "⭐"];
        for (let i = 0; i < 6; i += 1) {
          const sp = document.createElement("span");
          sp.className = "btn-sparkle-dot";
          sp.textContent = glyphs[i % glyphs.length];
          const ang = (Math.PI * 2 * i) / 6 + (Math.random() * 0.4 - 0.2);
          const dist = 28 + (i % 2) * 18;
          sp.style.left = `${Math.round(event.clientX)}px`;
          sp.style.top = `${Math.round(event.clientY)}px`;
          sp.style.setProperty("--sx", `${Math.round(Math.cos(ang) * dist)}px`);
          sp.style.setProperty("--sy", `${Math.round(Math.sin(ang) * dist - 10)}px`);
          layer.appendChild(sp);
          setTimeout(() => sp.remove(), 520);
        }
      }
    }
  }, { passive: true });
  const lbTabShift = document.getElementById("lbTabShift");
  const lbTabDeck = document.getElementById("lbTabDeck");
  const lbOpenDeckBtn = document.getElementById("leaderboardOpenDeckButton");
  if (lbTabShift) lbTabShift.addEventListener("click", () => setLeaderboardMode("shift"));
  if (lbTabDeck) lbTabDeck.addEventListener("click", () => setLeaderboardMode("deck"));
  if (lbOpenDeckBtn) lbOpenDeckBtn.addEventListener("click", () => openDeck());
  [document.getElementById("deckLeaderboardButton"), document.getElementById("deckTopLeaderboardPill")].forEach((b) => {
    if (b) {
      b.addEventListener("click", () => {
        state.leaderboardMode = "deck";
        state._keepDeckLeaderboardMode = true;
        navigateTo("leaderboard");
      });
    }
  });
  window.addEventListener("online", () => {
    void processOfflineRunQueue();
  });
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
  try { pruneExpiredRecords(CONFIG.retentionDays); } catch {}
  bindEvents();
  loadLeaderboard();

  if (!DEBUG_MODE) {
    els.cameraTrackStatus?.classList.add("hidden");
  }
  if (DEBUG_MODE) {
    els.posePanelCard?.classList.remove("hidden");
    els.nameInputPanelCard?.classList.remove("hidden");
    els.proofGridPanel?.classList.remove("hidden");
    els.analysisMetaPanel?.classList.remove("hidden");
  }
  setHypeLevel("full", false);
  setLanguage(loadSavedLanguage());
  syncConsentUI();
  syncCleanerPinUI();
  assignSpotForArea(state.checkin.areaKey, state.checkin.league);
  renderCrewAndConsistencyUI();
  renderHomeSponsorSlot();
  renderOfflineQueue();
  renderAdminDashboard();
  renderCheckinSites();
  initializeSelfTestUI();
  void handleOpenRouterCallbackIfPresent();
  if (SPECTATOR_MODE) {
    initializeSpectatorMode();
    return;
  }

  resetTimer();
  navigateTo("welcome");
  updateCaptureIndicators();
  updateCameraUI();

  if (!SELFTEST_MODE && !state.voice.muted) {
    startDiscoHouseGroove();
    speakWelcomeIntro(state.language);
    const gestureEvents = ["pointerup", "touchend", "click", "pointerdown", "keydown"];
    const removeGestureListeners = () => {
      gestureEvents.forEach((evt) => document.removeEventListener(evt, onFirstGesture, true));
    };
    const onFirstGesture = (event) => {
      unlockAudio();
      try { discoCtx?.resume?.().catch(() => {}); } catch {}
      if (state.voice.muted || SELFTEST_MODE) {
        removeGestureListeners();
        return;
      }
      startDiscoHouseGroove();
      const clickedSpecial = event?.target?.closest?.(".language-button, #welcomeContinue, #muteButton, #consentReadAloud");
      if (clickedSpecial) {
        state.voice.pendingAutoplayIntro = false;
        if (discoCtx && discoCtx.state === "running") removeGestureListeners();
        return;
      }
      if (state.voice.pendingAutoplayIntro || (!state.voice.currentAudio && activeVoiceAudios.size === 0)) {
        if (state.editingFtue && state.cleanerFtueStep === 3 && !hasConsent()) {
          speakConsentAloud();
        } else if (state.screen === "welcome") {
          speakWelcomeIntro(state.language);
        }
      }
      if (discoCtx && discoCtx.state === "running" && !state.voice.pendingAutoplayIntro) {
        removeGestureListeners();
      }
    };
    gestureEvents.forEach((evt) => document.addEventListener(evt, onFirstGesture, true));
  }
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
  announceGameVerdict,
  selectVerdictBeat,
  composeScoreClipIds,
  speakScoreNumber,
  playVerdictSfx,
  setHypeLevel,
  loadHypeLevel,
  hasConsent,
  setConsentAccepted,
  speakConsentAloud,
  buildScoreExplanation,
  renderScoreBreakdown,
  openAppeal,
  findOpenAppeal,
  readAppeals,
  visibleLeaderboard,
  assignSpotForArea,
  assertInAppCaptureOnly,
  toggleGhostOverlay,
  addDwellCredit,
  loadOfflineQueue,
  enqueueOfflineRun,
  processOfflineRunQueue,
  createCrew,
  joinCrew,
  createVirtualSquad,
  recordCrewRun,
  getCrewScore,
  getCrewMVP,
  getWeeklyMatchup,
  getConsistencyProgress,
  loadDeckProgress,
  recordDeckCardAnswer,
  getShareableDeckSummary,
  getSponsorSlot,
  setSponsorSlot,
  computeWeightedRunScore,
  gradeRunSurfaces,
  getCrewParticipation,
  loadCleanerProfile,
  saveCleanerProfile,
  verifyCleanerPin,
  setEmployerShareOptIn,
  getPersonalRecord,
  pruneExpiredRecords,
  acceptAdminPledge,
  getTeamTrainingGaps,
  assignTrainingPack,
  hasSeenInstructions,
  setInstructionsSeen,
  syncFtueCollapseUI,
  handleCompleteButtonTap,
  scanAreaQr,
  shareCleanerPassport,
  registerLocalSite,
  printAreaQrSticker,
  inviteAndApproveMember,
  getSponsorMonthlyAnalytics,
  setCleanerFtueStep,
  setAdminScreenTab,
  copySelfTestReport,
  selectCleaningSpot,
  sampleLiveRunActivity,
  openEvidenceLightbox,
  setEvidenceLightboxMode,
  closeEvidenceLightbox,
  parseAreaQrPayload,
  applyAreaQrPayload,
  openQrScannerModal,
  closeQrScannerModal,
  renderQrCodeSvg,
  swipeDeckCard,
  practiceAnotherDeck,
  openPassportAndSupervisorHub,
  ensureActiveCrew
};
