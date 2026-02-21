import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { gzipSizeSync } from 'gzip-size';

const root = join(import.meta.dirname, '..', '..', '..');
const addonDist = join(root, 'addons', 'buttons', 'dist');

describe('@thenewcss/buttons', () => {
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

  it('is under 3KB gzipped', () => {
    const content = readFileSync(join(addonDist, 'index.min.css'));
    const gzipped = gzipSizeSync(content);
    expect(gzipped).toBeLessThanOrEqual(3 * 1024);
  });

  const css = () => readFileSync(join(addonDist, 'index.css'), 'utf8');

  it('contains .btn base class', () => {
    const content = css();
    expect(content).toContain('.btn');
    expect(content).toContain('inline-flex');
  });

  it('contains size variants', () => {
    const content = css();
    expect(content).toContain('.btn-xs');
    expect(content).toContain('.btn-sm');
    expect(content).toContain('.btn-lg');
    expect(content).toContain('.btn-xl');
  });

  it('contains color variants', () => {
    const content = css();
    expect(content).toContain('.btn-primary');
    expect(content).toContain('.btn-secondary');
    expect(content).toContain('.btn-danger');
    expect(content).toContain('.btn-success');
    expect(content).toContain('.btn-warning');
    expect(content).toContain('.btn-dark');
  });

  it('contains style variants', () => {
    const content = css();
    expect(content).toContain('.btn-outline');
    expect(content).toContain('.btn-ghost');
    expect(content).toContain('.btn-link');
  });

  it('contains disabled state', () => {
    const content = css();
    expect(content).toContain(':disabled');
    expect(content).toContain('cursor: not-allowed');
  });

  it('contains loading state with spinner', () => {
    const content = css();
    expect(content).toContain('.btn-loading');
    expect(content).toContain('@keyframes');
    expect(content).toContain('btn-spin');
  });

  it('contains layout utilities', () => {
    const content = css();
    expect(content).toContain('.btn-block');
    expect(content).toContain('.btn-icon');
    expect(content).toContain('.btn-group');
  });

  it('uses @layer utilities', () => {
    const content = css();
    expect(content).toContain('@layer utilities');
  });
});
