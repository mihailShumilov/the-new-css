import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { gzipSizeSync } from 'gzip-size';

const root = join(import.meta.dirname, '..', '..', '..');
const addonDist = join(root, 'addons', 'tables', 'dist');

describe('@thenewcss/tables', () => {
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

  it('contains .table base class', () => {
    const content = css();
    expect(content).toContain('.table');
    expect(content).toContain('border-collapse');
  });

  it('contains table variants', () => {
    const content = css();
    expect(content).toContain('.table-striped');
    expect(content).toContain('.table-hover');
    expect(content).toContain('.table-bordered');
    expect(content).toContain('.table-compact');
    expect(content).toContain('.table-fixed');
  });

  it('contains responsive wrapper', () => {
    const content = css();
    expect(content).toContain('.table-responsive');
    expect(content).toContain('overflow-x');
  });

  it('contains cell utilities', () => {
    const content = css();
    expect(content).toContain('.cell-nowrap');
    expect(content).toContain('.cell-truncate');
    expect(content).toContain('.cell-center');
    expect(content).toContain('.cell-right');
    expect(content).toContain('.cell-middle');
  });

  it('uses @layer utilities', () => {
    const content = css();
    expect(content).toContain('@layer utilities');
  });
});
