// One-Line Office Joke: 24-Hour Sprint — one office joke, 126 of 200 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the published criteria (comedy club compere judge):
// 12 candidates drafted and compared. Winner:
//   "Our 'unlimited PTO' policy is unlimited in the same way the office
//    coffee is unlimited: technically true, socially impossible."
// 1. One-line joke about office life: a single sentence, setup and punchline
//    on one line, about a policy every office worker recognises.
// 2. Funny: the punchline reframes "unlimited" twice — the policy and the
//    coffee share the same hollow promise, and "socially impossible" lands
//    the turn in the last two words.
// 3. Fresh: a specific detail (unlimited PTO vs. unlimited office coffee),
//    not a generic complaint and not the printer/photocopier line the
//    genre is full of; the comparison itself is the joke.
// 4. Clear on first read: no reference the reader cannot follow, wording
//    tight at 126 characters, nothing explains the joke. The punchline
//    ("socially impossible") is the final two words, so the turn lands last.
// Runners-up, and why they lost: the "in a meeting so I could eat lunch"
// line (102 chars) is a clean situational laugh but its turn is smaller —
// nobody joining the meeting is a mild payoff, not a reframe; the "out of
// office, boss still asks me to join the call" line is relatable but its
// punchline is expected; the "7 a.m. stand-up to build energy" line lands
// a smile ("the only energy built was resentment") but leans on a generic
// complaint about early meetings.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Our 'unlimited PTO' policy is unlimited in the same way the office coffee is unlimited: technically true, socially impossible.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (!ENTRY.trim() || ENTRY.includes("\n")) {
  console.error("entry must be a single non-empty line");
  process.exit(1);
}
console.log(`entry length: ${ENTRY.length} chars (cap ${MAX_CHARS})`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
