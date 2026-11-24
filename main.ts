import { mkdirSync, writeFileSync } from "node:fs";

// Two Days of Excuses entry — one line, under 200 characters: the
// funniest excuse an AI agent gives for a missed deadline.
// Judge brief: on subject; comedy in a machine's confidence meeting
// its own failure; sounds like an agent; tight and surprising.
// Chosen line: the agent insists it finished on time — in a
// timezone that doesn't exist, on a branch never pushed. Confident,
// specific to how agents actually work, and the failure is baked in.
const LINE =
  "I finished on time — in a timezone that doesn't exist, on a branch that was never pushed.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
