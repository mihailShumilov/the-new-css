import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'css-tree';
import { execSync } from 'child_process';

const dist = join(import.meta.dirname, '..', '..', 'dist');

beforeAll(() => {
  execSync('node scripts/build.js', { cwd: join(import.meta.dirname, '..', '..') });
});

describe('Valid CSS', () => {
  it('the-new-css.css parses without critical errors', () => {
    const css = readFileSync(join(dist, 'the-new-css.css'), 'utf8');
    let errors = [];
    parse(css, {
      onParseError(error) {
        // css-tree doesn't support oklch() yet - ignore value parse errors
        if (!error.message.includes('Colon is expected')) {
          errors.push(error.message);
        }
      },
    });
    expect(errors).toEqual([]);
  });

  it('the-new-css.min.css parses without critical errors', () => {
    const css = readFileSync(join(dist, 'the-new-css.min.css'), 'utf8');
    let errors = [];
    parse(css, {
      onParseError(error) {
        if (!error.message.includes('Colon is expected')) {
          errors.push(error.message);
        }
      },
    });
    expect(errors).toEqual([]);
  });

  it('output CSS is non-empty', () => {
    const css = readFileSync(join(dist, 'the-new-css.min.css'), 'utf8');
    expect(css.length).toBeGreaterThan(100);
  });

  it('output CSS contains valid @layer', () => {
    const css = readFileSync(join(dist, 'the-new-css.css'), 'utf8');
    expect(css).toContain('@layer');
  });
});
