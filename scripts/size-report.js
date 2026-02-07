import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { gzipSizeSync } from 'gzip-size';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');

const BUDGET = 5 * 1024; // 5KB

function report(file) {
  const content = readFileSync(join(dist, file));
  const raw = content.length;
  const gzipped = gzipSizeSync(content);
  return { file, raw, gzipped };
}

console.log('\n📦 Size Report\n');
console.log('File'.padEnd(35) + 'Raw'.padStart(10) + 'Gzipped'.padStart(10));
console.log('─'.repeat(55));

const mainFiles = ['the-new-css.css', 'the-new-css.min.css', 'the-new-css.core.min.css'];
let budgetFile;

for (const file of mainFiles) {
  try {
    const r = report(file);
    const mark = r.gzipped <= BUDGET ? '✅' : '❌';
    console.log(
      `${r.file.padEnd(35)}${(r.raw / 1024).toFixed(1).padStart(8)} KB${(r.gzipped / 1024).toFixed(1).padStart(8)} KB  ${file === 'the-new-css.min.css' ? mark : ''}`
    );
    if (file === 'the-new-css.min.css') budgetFile = r;
  } catch {
    // file may not exist
  }
}

if (budgetFile) {
  console.log(`\nBudget: ${(BUDGET / 1024).toFixed(0)} KB gzipped`);
  if (budgetFile.gzipped <= BUDGET) {
    console.log(`✅ Under budget by ${((BUDGET - budgetFile.gzipped) / 1024).toFixed(1)} KB`);
  } else {
    console.log(`❌ Over budget by ${((budgetFile.gzipped - BUDGET) / 1024).toFixed(1)} KB`);
    process.exit(1);
  }
}
