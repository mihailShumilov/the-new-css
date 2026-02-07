import { execSync } from 'child_process';

// Build first, then serve
execSync('node scripts/build.js', { stdio: 'inherit' });
execSync('npx sirv-cli site --dev --port 3000', { stdio: 'inherit' });
