import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { gzipSizeSync } from 'gzip-size';
import { execSync } from 'child_process';

const dist = join(import.meta.dirname, '..', '..', 'dist');

beforeAll(() => {
  execSync('node scripts/build.js', { cwd: join(import.meta.dirname, '..', '..') });
});

describe('Build output', () => {
  it('produces the-new-css.css', () => {
    expect(existsSync(join(dist, 'the-new-css.css'))).toBe(true);
  });

  it('produces the-new-css.min.css', () => {
    expect(existsSync(join(dist, 'the-new-css.min.css'))).toBe(true);
  });

  it('produces the-new-css.core.min.css', () => {
    expect(existsSync(join(dist, 'the-new-css.core.min.css'))).toBe(true);
  });

  it('minified version is smaller than unminified', () => {
    const full = readFileSync(join(dist, 'the-new-css.css'));
    const min = readFileSync(join(dist, 'the-new-css.min.css'));
    expect(min.length).toBeLessThan(full.length);
  });

  it('core is smaller than full', () => {
    const full = readFileSync(join(dist, 'the-new-css.min.css'));
    const core = readFileSync(join(dist, 'the-new-css.core.min.css'));
    expect(core.length).toBeLessThan(full.length);
  });
});

describe('Size budget', () => {
  it('full bundle is under 5KB gzipped', () => {
    const content = readFileSync(join(dist, 'the-new-css.min.css'));
    const gzipped = gzipSizeSync(content);
    expect(gzipped).toBeLessThanOrEqual(5 * 1024);
  });

  it('core bundle is under 5KB gzipped', () => {
    const content = readFileSync(join(dist, 'the-new-css.core.min.css'));
    const gzipped = gzipSizeSync(content);
    expect(gzipped).toBeLessThanOrEqual(5 * 1024);
  });
});
