import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { gzipSizeSync } from 'gzip-size';

const root = join(import.meta.dirname, '..', '..', '..');
const addonDist = join(root, 'addons', 'badges', 'dist');

describe('@thenewcss/badges', () => {
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

  it('is under 2KB gzipped', () => {
    const content = readFileSync(join(addonDist, 'index.min.css'));
    const gzipped = gzipSizeSync(content);
    expect(gzipped).toBeLessThanOrEqual(2 * 1024);
  });

  const css = () => readFileSync(join(addonDist, 'index.css'), 'utf8');

  it('contains .badge base class', () => {
    const content = css();
    expect(content).toContain('.badge');
    expect(content).toContain('inline-flex');
  });

  it('contains color variants', () => {
    const content = css();
    expect(content).toContain('.badge-primary');
    expect(content).toContain('.badge-danger');
    expect(content).toContain('.badge-success');
    expect(content).toContain('.badge-warning');
    expect(content).toContain('.badge-dark');
  });

  it('contains style variants', () => {
    const content = css();
    expect(content).toContain('.badge-outline');
    expect(content).toContain('.badge-dot');
  });

  it('contains size variants', () => {
    const content = css();
    expect(content).toContain('.badge-sm');
    expect(content).toContain('.badge-lg');
  });

  it('contains tag classes', () => {
    const content = css();
    expect(content).toContain('.tag');
    expect(content).toContain('.tag-list');
  });

  it('uses @layer utilities', () => {
    const content = css();
    expect(content).toContain('@layer utilities');
  });
});
