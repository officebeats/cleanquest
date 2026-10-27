/* CleanQuest daily swipe deck — static training cards, no network calls.
 * Card shape: { id, category: "surface" | "product" | "technique",
 *   text: the call to judge, answer: "right" | "miss", why: one-line note shown after answering. */
const SWIPE_DECK = [
  { id: "deck-01", category: "surface", text: "Dust the window sills before mopping the floor.", answer: "right", why: "Top-down order keeps settled dust off the clean floor." },
  { id: "deck-02", category: "technique", text: "Mop in overlapping passes so no strip is skipped.", answer: "right", why: "Overlap is the visible proof nothing was missed." },
  { id: "deck-03", category: "product", text: "Spray glass cleaner directly onto the touchscreen.", answer: "miss", why: "Spray the cloth, not the screen — liquid seeps into edges." },
  { id: "deck-04", category: "surface", text: "Vacuum carpet edges with the crevice tool, not just open areas.", answer: "right", why: "Edges collect the soil open passes leave behind." },
  { id: "deck-05", category: "technique", text: "Rinse the mop in the same dirty bucket all shift.", answer: "miss", why: "Dirty rinse water spreads soil back onto the floor." },
  { id: "deck-06", category: "product", text: "Use a neutral cleaner on marble instead of vinegar.", answer: "right", why: "Acid etches stone — neutral keeps the finish intact." },
  { id: "deck-07", category: "surface", text: "Wipe elevator buttons with a damp — not dripping — cloth.", answer: "right", why: "Damp cleans; dripping risks the electronics behind the panel." },
  { id: "deck-08", category: "technique", text: "Work toward the exit so you never walk across the wet floor.", answer: "right", why: "Footprints on a fresh floor undo the pass." },
  { id: "deck-09", category: "product", text: "Mix bleach and ammonia for extra strength.", answer: "miss", why: "That mix releases toxic gas — never combine them." },
  { id: "deck-10", category: "surface", text: "Dust the ceiling vents before wiping the desks below.", answer: "right", why: "Vents rain dust down — clean them first." },
  { id: "deck-11", category: "technique", text: "Fold the microfiber cloth to expose a fresh face per surface.", answer: "right", why: "A fresh face prevents carrying soil surface to surface." },
  { id: "deck-12", category: "product", text: "Use the same cloth for restroom fixtures and lobby glass.", answer: "miss", why: "One cloth per zone — never cross restroom soil to glass." },
  { id: "deck-13", category: "surface", text: "Squeegee lobby glass top to bottom in overlapping columns.", answer: "right", why: "Gravity pulls drips down — chase them downward." },
  { id: "deck-14", category: "technique", text: "Let disinfectant dwell the full label time before wiping.", answer: "right", why: "Dwell time is what makes the kill claim real." },
  { id: "deck-15", category: "product", text: "Polish stainless steel against the grain.", answer: "miss", why: "Always go with the grain or the finish streaks." },
  { id: "deck-16", category: "surface", text: "Empty the trash before wiping the break-room counters.", answer: "right", why: "Trash first — bags drip onto finished surfaces." },
  { id: "deck-17", category: "technique", text: "Two-bucket method: one rinse bucket, one solution bucket.", answer: "right", why: "Separation keeps the solution clean longer." },
  { id: "deck-18", category: "product", text: "Use abrasive powder on a ceramic cooktop.", answer: "miss", why: "Abrasive scratches ceramic — use a soft pad and cooktop cream." },
  { id: "deck-19", category: "surface", text: "Scrub carpet spills by rubbing hard in circles.", answer: "miss", why: "Blot, don't rub — rubbing spreads the stain and frays fiber." },
  { id: "deck-20", category: "technique", text: "Check your work with a flashlight at a low angle.", answer: "right", why: "Raking light reveals film and misses overhead light hides." },
  { id: "deck-21", category: "surface", text: "Dust first, then vacuum, then mop hard floors.", answer: "right", why: "Each step removes what the previous one knocked loose." },
  { id: "deck-22", category: "product", text: "Spray disinfectant and wipe it dry immediately.", answer: "miss", why: "Wiping early cuts the dwell time the label requires." }
];
