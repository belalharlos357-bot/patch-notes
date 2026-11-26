// patch-notes entry: print the one-line entry from entry.txt
// The entry is a single line; trailing whitespace is trimmed before printing.
// Output goes to stdout with a trailing newline, exactly one line.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Resolve the entry file relative to this module, then read and print it.
const dir = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(dir, "entry.txt"), "utf8");
const line = raw.trim();
process.stdout.write(line + "\n");
