import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { gzipSizeSync } from 'gzip-size';

const root = join(import.meta.dirname, '..', '..', '..');
const addonDist = join(root, 'addons', 'cards', 'dist');

describe('@thenewcss/cards', () => {
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

  it('contains .card base class', () => {
    const content = css();
    expect(content).toContain('.card');
    expect(content).toContain('border-radius');
  });

  it('contains card sections', () => {
    const content = css();
    expect(content).toContain('.card-header');
    expect(content).toContain('.card-body');
    expect(content).toContain('.card-footer');
    expect(content).toContain('.card-img-top');
  });

  it('contains hover effect', () => {
    const content = css();
    expect(content).toContain('.card-hover');
    expect(content).toContain('translateY');
  });

  it('contains layout variants', () => {
    const content = css();
    expect(content).toContain('.card-horizontal');
    expect(content).toContain('.card-compact');
    expect(content).toContain('.card-flat');
  });

  it('contains padding variants', () => {
    const content = css();
    expect(content).toContain('.card-p-0');
    expect(content).toContain('.card-p-lg');
  });

  it('uses @layer utilities', () => {
    const content = css();
    expect(content).toContain('@layer utilities');
  });
});
