import { transform, bundle } from 'lightningcss';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const src = join(root, 'src', 'the-new-css.css');
const dist = join(root, 'dist');

mkdirSync(dist, { recursive: true });

// Bundle all CSS
const { code: bundled } = bundle({
  filename: src,
  minify: false,
});

writeFileSync(join(dist, 'the-new-css.css'), bundled);

// Minified version
const { code: minified } = bundle({
  filename: src,
  minify: true,
});

writeFileSync(join(dist, 'the-new-css.min.css'), minified);

// Core bundle (base + tokens + utilities only, no variants)
const coreSrc = join(root, 'src', 'the-new-css-core.css');
try {
  const { code: coreMinified } = bundle({
    filename: coreSrc,
    minify: true,
  });
  writeFileSync(join(dist, 'the-new-css.core.min.css'), coreMinified);
} catch {
  // Core entry may not exist yet
}


console.log('Build complete.');
console.log(`  dist/the-new-css.css      (${(bundled.length / 1024).toFixed(1)} KB)`);
console.log(`  dist/the-new-css.min.css  (${(minified.length / 1024).toFixed(1)} KB)`);
