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

describe('Core selectors exist', () => {
  const expected = [
    '.flex', '.grid', '.hidden', '.block',
    '.items-center', '.justify-between', '.flex-col', '.flex-row',
    '.gap-4', '.gap-6',
    '.p-4', '.px-4', '.py-4',
    '.m-0', '.mx-auto', '.mt-4', '.mb-4',
    '.w-full', '.h-full', '.h-screen',
    '.text-sm', '.text-lg', '.text-xl', '.text-2xl',
    '.font-bold', '.font-semibold',
    '.text-center', '.text-left',
    '.bg-white', '.bg-black', '.bg-blue-500',
    '.text-white', '.text-gray-500', '.text-blue-600',
    '.rounded', '.rounded-lg', '.rounded-full',
    '.border', '.border-gray-200',
    '.shadow', '.shadow-md', '.shadow-lg',
    '.opacity-0', '.opacity-100',
    '.transition', '.duration-300',
    '.relative', '.absolute', '.sticky', '.fixed',
    '.overflow-hidden', '.overflow-auto',
    '.cursor-pointer',
    '.sr-only',
    '.container',
    '.truncate',
  ];

  for (const selector of expected) {
    it(`contains ${selector}`, () => {
      expect(css).toContain(selector);
    });
  }
});

describe('Responsive selectors exist', () => {
  const expected = [
    '.sm\\:flex', '.sm\\:hidden', '.sm\\:grid',
    '.md\\:flex', '.md\\:hidden', '.md\\:grid', '.md\\:grid-cols-2',
    '.lg\\:flex', '.lg\\:hidden', '.lg\\:grid-cols-3',
  ];

  for (const selector of expected) {
    it(`contains ${selector}`, () => {
      expect(css).toContain(selector);
    });
  }
});

describe('Hover selectors exist', () => {
  it('contains hover variants', () => {
    expect(css).toContain('.hover\\:bg-blue-600:hover');
    expect(css).toContain('.hover\\:shadow-lg:hover');
  });
});

describe('Focus selectors exist', () => {
  it('contains focus variants', () => {
    expect(css).toContain('.focus\\:ring-2:focus');
    expect(css).toContain('.focus-visible\\:outline-2:focus-visible');
  });
});
