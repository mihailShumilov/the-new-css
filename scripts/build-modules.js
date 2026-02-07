import { bundle } from 'lightningcss';
import { writeFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcDir = join(root, 'src');
const modulesDir = join(root, 'dist', 'modules');

mkdirSync(modulesDir, { recursive: true });

const folders = ['base', 'tokens', 'utilities', 'variants'];

for (const folder of folders) {
  const folderPath = join(srcDir, folder);
  try {
    const files = readdirSync(folderPath).filter(f => f.endsWith('.css') && !f.startsWith('_'));
    for (const file of files) {
      const filePath = join(folderPath, file);
      if (!statSync(filePath).isFile()) continue;
      try {
        const { code } = bundle({ filename: filePath, minify: true });
        const outName = `${folder}-${basename(file, '.css')}.min.css`;
        writeFileSync(join(modulesDir, outName), code);
      } catch (e) {
        console.warn(`Warning: Could not build ${folder}/${file}: ${e.message}`);
      }
    }
  } catch {
    // folder may not exist
  }
}

console.log('Module build complete.');
