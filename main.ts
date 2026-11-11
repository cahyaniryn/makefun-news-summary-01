const { mkdirSync, readFileSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

const summary = readFileSync(join(__dirname, 'summary.txt'), 'utf8');
const characterCount = Array.from(summary).length;

if (characterCount < 1 || characterCount > 2000 || summary.trim().length === 0) {
  throw new Error('summary.txt must contain 1–2,000 Unicode code points and include non-whitespace text');
}

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const summaryBytes = Buffer.from(summary, 'utf8');

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), summaryBytes);
process.stdout.write(summaryBytes);
