import { bundle } from 'lightningcss';
import { writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const addonsDir = join(root, 'addons');

if (!existsSync(addonsDir)) {
  console.log('No addons/ directory found.');
  process.exit(0);
}

const addons = readdirSync(addonsDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

if (addons.length === 0) {
  console.log('No addons found.');
  process.exit(0);
}

for (const name of addons) {
  const src = join(addonsDir, name, 'src', 'index.css');
  if (!existsSync(src)) {
    console.warn(`  Skipping ${name} — no src/index.css`);
    continue;
  }

  const dist = join(addonsDir, name, 'dist');
  mkdirSync(dist, { recursive: true });

  const { code: bundled } = bundle({ filename: src, minify: false });
  writeFileSync(join(dist, 'index.css'), bundled);

  const { code: minified } = bundle({ filename: src, minify: true });
  writeFileSync(join(dist, 'index.min.css'), minified);

  console.log(`  ${name}: index.css (${(bundled.length / 1024).toFixed(1)} KB) / index.min.css (${(minified.length / 1024).toFixed(1)} KB)`);
}

console.log('Addon build complete.');
