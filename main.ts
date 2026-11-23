import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh: Office Jokes — entry.
// A single one-line joke about office life: the boss asks for an honest
// opinion, then books a follow-up meeting to discuss why it was given.
// Setup lands on the boss's request; the punch lands on the follow-up —
// the meeting exists to interrogate the honesty itself, which is the turn
// the judge brief asks for. The program writes exactly this line to
// /output/entry.txt (1-199 chars, UTF-8).
const LINE =
  "My boss asked for my honest opinion, then scheduled a follow-up to discuss why I gave it.";

// The gate requires 1-199 characters of non-whitespace UTF-8 text.
// Checked before writing so a bad line fails loudly instead of silently.
if (LINE.length < 1 || LINE.length > 199 || !LINE.trim()) {
  throw new Error("line must be 1-199 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
