import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { gzipSizeSync } from 'gzip-size';

const root = join(import.meta.dirname, '..', '..', '..');
const addonDist = join(root, 'addons', 'colors-extended', 'dist');

describe('@thenewcss/colors-extended', () => {
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

  it('is under 15KB gzipped', () => {
    const content = readFileSync(join(addonDist, 'index.min.css'));
    const gzipped = gzipSizeSync(content);
    expect(gzipped).toBeLessThanOrEqual(15 * 1024);
  });

  const COLORS = ['indigo', 'violet', 'slate', 'emerald', 'cyan', 'rose', 'amber', 'lime', 'fuchsia', 'sky', 'stone', 'zinc', 'neutral'];
  const css = () => readFileSync(join(addonDist, 'index.css'), 'utf8');

  it('contains all 13 color token palettes', () => {
    const content = css();
    for (const color of COLORS) {
      expect(content).toContain(`--color-${color}-500`);
      expect(content).toContain(`--color-${color}-50`);
      expect(content).toContain(`--color-${color}-950`);
    }
  });

  it('contains text utility classes', () => {
    const content = css();
    for (const color of COLORS) {
      expect(content).toContain(`.text-${color}-600`);
    }
  });

  it('contains bg utility classes', () => {
    const content = css();
    for (const color of COLORS) {
      expect(content).toContain(`.bg-${color}-500`);
    }
  });

  it('contains border utility classes', () => {
    const content = css();
    for (const color of COLORS) {
      expect(content).toContain(`.border-${color}-200`);
    }
  });

  it('contains gradient utility classes', () => {
    const content = css();
    for (const color of COLORS) {
      expect(content).toContain(`.from-${color}-500`);
      expect(content).toContain(`.to-${color}-500`);
    }
  });

  it('contains hover variants', () => {
    const content = css();
    expect(content).toContain('.hover\\:text-indigo-600:hover');
    expect(content).toContain('.hover\\:bg-rose-700:hover');
  });

  it('contains dark mode for gray-like palettes', () => {
    const content = css();
    expect(content).toContain('prefers-color-scheme: dark');
    expect(content).toContain('[data-theme="dark"]');
    expect(content).toContain('--color-slate-50');
    expect(content).toContain('--color-stone-50');
    expect(content).toContain('--color-zinc-50');
    expect(content).toContain('--color-neutral-50');
  });

  it('uses oklch color space', () => {
    const content = css();
    expect(content).toContain('oklch(');
  });
});
