import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { gzipSizeSync } from 'gzip-size';
import { execSync } from 'child_process';

const root = join(import.meta.dirname, '..', '..', '..');
const addonDist = join(root, 'addons', 'typography-extended', 'dist');

beforeAll(() => {
  execSync('node scripts/build-addons.js', { cwd: root });
});

describe('@thenewcss/typography-extended', () => {
  it('produces dist/index.css', () => {
    expect(existsSync(join(addonDist, 'index.css'))).toBe(true);
  });

  it('produces dist/index.min.css', () => {
    expect(existsSync(join(addonDist, 'index.min.css'))).toBe(true);
  });

  it('minified is smaller than unminified', () => {
    const full = readFileSync(join(addonDist, 'index.css'));
    const min = readFileSync(join(addonDist, 'index.min.css'));
    expect(min.length).toBeLessThan(full.length);
  });

  it('is under 5KB gzipped', () => {
    const content = readFileSync(join(addonDist, 'index.min.css'));
    const gzipped = gzipSizeSync(content);
    expect(gzipped).toBeLessThanOrEqual(5 * 1024);
  });

  const css = () => readFileSync(join(addonDist, 'index.css'), 'utf8');

  it('contains extended text size tokens', () => {
    const content = css();
    expect(content).toContain('--text-5xl');
    expect(content).toContain('--text-6xl');
    expect(content).toContain('--text-7xl');
    expect(content).toContain('--text-8xl');
    expect(content).toContain('--text-9xl');
  });

  it('contains text size utility classes', () => {
    const content = css();
    expect(content).toContain('.text-5xl');
    expect(content).toContain('.text-9xl');
  });

  it('contains .text-gradient utility', () => {
    const content = css();
    expect(content).toContain('.text-gradient');
    expect(content).toContain('background-clip');
  });

  it('contains .prose class', () => {
    const content = css();
    expect(content).toContain('.prose');
    expect(content).toContain('.prose h1');
    expect(content).toContain('.prose h2');
    expect(content).toContain('.prose h3');
    expect(content).toContain('.prose a');
    expect(content).toContain('.prose code');
    expect(content).toContain('.prose blockquote');
  });

  it('contains .text-pretty utility', () => {
    const content = css();
    expect(content).toContain('.text-pretty');
    expect(content).toContain('text-wrap');
  });

  it('uses @layer utilities', () => {
    const content = css();
    expect(content).toContain('@layer utilities');
  });
});
