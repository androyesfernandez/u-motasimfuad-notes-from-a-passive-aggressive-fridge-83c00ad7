// Notes From a Passive-Aggressive Fridge
// A program that writes one funny passive-aggressive note a smart fridge
// leaves for its owner. This line won the internal tournament of rival
// drafts: the lettuce files for emancipation rather than watch more takeout.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The lettuce in my crisper has filed for emancipation. It would rather be compost than watch you order takeout again.";

// Guard: the competition gate requires UTF-8 text of 1 to 200 characters,
// not only whitespace, on one line. A bad line should fail the run loudly
// instead of silently writing an entry the judge would reject.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `Entry line must be 1-200 non-whitespace characters, got ${LINE.length} chars`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
