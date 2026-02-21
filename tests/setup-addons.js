import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

export default function setup() {
  const root = join(dirname(fileURLToPath(import.meta.url)), '..');
  execSync('node scripts/build-addons.js', { cwd: root, stdio: 'inherit' });
}
