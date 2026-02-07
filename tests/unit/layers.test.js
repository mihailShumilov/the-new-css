import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const dist = join(import.meta.dirname, '..', '..', 'dist');
let css;

beforeAll(() => {
  execSync('node scripts/build.js', { cwd: join(import.meta.dirname, '..', '..') });
  css = readFileSync(join(dist, 'the-new-css.css'), 'utf8');
});

describe('@layer declarations', () => {
  it('starts with @layer base', () => {
    expect(css.trimStart()).toMatch(/^@layer base/);
  });

  it('contains @layer base', () => {
    expect(css).toContain('@layer base');
  });

  it('contains @layer utilities', () => {
    expect(css).toContain('@layer utilities');
  });

  it('contains @layer variants', () => {
    expect(css).toContain('@layer variants');
  });

  it('base comes before utilities', () => {
    const baseIdx = css.indexOf('@layer base');
    const utilitiesIdx = css.indexOf('@layer utilities');
    expect(baseIdx).toBeLessThan(utilitiesIdx);
  });

  it('utilities comes before variants', () => {
    const utilitiesIdx = css.indexOf('@layer utilities');
    const variantsIdx = css.indexOf('@layer variants');
    expect(utilitiesIdx).toBeLessThan(variantsIdx);
  });
});
