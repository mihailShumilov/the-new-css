/**
 * SEO audit script — checks built site for common SEO issues.
 * Run: npm run seo:audit (after npm run build:site)
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'site', 'out');

let errors = 0;
let warnings = 0;

function error(msg) { errors++; console.error(`  ERROR: ${msg}`); }
function warn(msg) { warnings++; console.warn(`  WARN:  ${msg}`); }
function ok(msg) { console.log(`  OK:    ${msg}`); }

// ── Check build output exists ────────────────────────────
console.log('\n[1] Build output');
if (!existsSync(outDir)) {
  console.error('FATAL: site/out/ does not exist. Run npm run build:site first.');
  process.exit(1);
}
ok('site/out/ exists');

// ── Check robots.txt ─────────────────────────────────────
console.log('\n[2] robots.txt');
const robotsPath = join(outDir, 'robots.txt');
if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, 'utf-8');
  if (robots.includes('Sitemap:')) ok('robots.txt has Sitemap directive');
  else error('robots.txt missing Sitemap directive');
  if (robots.includes('Disallow: /') && !robots.includes('Disallow: /$')) {
    warn('robots.txt has broad Disallow — intentional?');
  }
} else {
  error('robots.txt not found in build output');
}

// ── Check sitemap.xml ────────────────────────────────────
console.log('\n[3] sitemap.xml');
const sitemapPath = join(outDir, 'sitemap.xml');
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf-8');
  const urlCount = (sitemap.match(/<loc>/g) || []).length;
  ok(`sitemap.xml has ${urlCount} URLs`);
  if (urlCount < 5) warn('Sitemap has fewer than 5 URLs');
  if (sitemap.includes('<lastmod>')) ok('sitemap.xml includes <lastmod>');
  else warn('sitemap.xml missing <lastmod> dates');
} else {
  error('sitemap.xml not found in build output');
}

// ── Scan HTML pages ──────────────────────────────────────
console.log('\n[4] HTML pages audit');

function findHtmlFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      // skip _next and asset directories
      if (!entry.name.startsWith('_')) files.push(...findHtmlFiles(full));
    } else if (entry.name.endsWith('.html') && entry.name !== '404.html') {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = findHtmlFiles(outDir);
console.log(`  Found ${htmlFiles.length} HTML files\n`);

const titles = new Map();
const descriptions = new Map();

for (const file of htmlFiles) {
  const relPath = relative(outDir, file);
  const html = readFileSync(file, 'utf-8');

  // Title
  const titleMatch = html.match(/<title>(.*?)<\/title>/s);
  if (!titleMatch) {
    error(`${relPath}: missing <title>`);
  } else {
    const title = titleMatch[1].trim();
    if (title.length > 70) warn(`${relPath}: title too long (${title.length} chars)`);
    if (title.length < 10) warn(`${relPath}: title too short (${title.length} chars)`);
    if (titles.has(title)) warn(`${relPath}: duplicate title "${title}" (also in ${titles.get(title)})`);
    titles.set(title, relPath);
  }

  // Meta description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  if (!descMatch) {
    error(`${relPath}: missing meta description`);
  } else {
    const desc = descMatch[1];
    if (desc.length > 170) warn(`${relPath}: description too long (${desc.length} chars)`);
    if (desc.length < 50) warn(`${relPath}: description too short (${desc.length} chars)`);
    if (descriptions.has(desc)) warn(`${relPath}: duplicate description (also in ${descriptions.get(desc)})`);
    descriptions.set(desc, relPath);
  }

  // Canonical
  if (!html.includes('rel="canonical"')) {
    warn(`${relPath}: missing canonical link`);
  }

  // OG tags
  if (!html.includes('og:title')) {
    warn(`${relPath}: missing og:title`);
  }

  // H1 count
  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  if (h1Count === 0) warn(`${relPath}: no H1 tag found`);
  if (h1Count > 1) warn(`${relPath}: multiple H1 tags (${h1Count})`);

  // lang attribute
  if (!html.includes('lang="en"')) {
    warn(`${relPath}: missing lang="en" on <html>`);
  }

  // noindex check
  if (html.includes('noindex')) {
    error(`${relPath}: contains noindex directive`);
  }
}

// ── Internal link check ──────────────────────────────────
console.log('\n[5] Internal links');
const allPaths = new Set(htmlFiles.map(f => {
  let p = '/' + relative(outDir, f).replace(/\/index\.html$/, '').replace(/\.html$/, '');
  if (p === '/index') p = '/';
  return p;
}));

let brokenLinks = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf-8');
  const relPath = relative(outDir, file);
  const linkRegex = /href="(\/[^"#]*?)"/g;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    let href = match[1].replace(/\/$/, '') || '/';
    // Skip asset paths
    if (href.startsWith('/_next') || href.startsWith('/assets') || href.endsWith('.css') || href.endsWith('.xml') || href.endsWith('.txt') || href.endsWith('.svg')) continue;
    if (!allPaths.has(href)) {
      error(`${relPath}: broken internal link ${href}`);
      brokenLinks++;
    }
  }
}
if (brokenLinks === 0) ok('No broken internal links');

// ── Summary ──────────────────────────────────────────────
console.log('\n────────────────────────────────');
console.log(`SEO Audit: ${errors} errors, ${warnings} warnings`);
console.log('────────────────────────────────\n');

process.exit(errors > 0 ? 1 : 0);
