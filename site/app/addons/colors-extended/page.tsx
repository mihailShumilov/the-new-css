import { Fragment } from 'react';
import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Colors Extended',
  description:
    'Extended color palettes for The New CSS. 13 additional oklch color palettes with text, background, border, gradient, hover, and dark mode utilities.',
  path: '/addons/colors-extended',
});

const jsonLd = techArticleJsonLd({
  headline: 'Colors Extended',
  description:
    'Extended color palettes for The New CSS. 13 additional oklch color palettes with text, background, border, gradient, hover, and dark mode utilities.',
  path: '/addons/colors-extended',
});

const palettes = [
  'indigo',
  'violet',
  'slate',
  'emerald',
  'cyan',
  'rose',
  'amber',
  'lime',
  'fuchsia',
  'sky',
  'stone',
  'zinc',
  'neutral',
] as const;

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const neutralPalettes = ['slate', 'stone', 'zinc', 'neutral'];
const chromaticPalettes = palettes.filter((p) => !neutralPalettes.includes(p));

export default function ColorsExtendedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-3xl font-bold mb-6">Colors Extended</h1>
      <p className="text-gray-600 mb-6 leading-relaxed">
        13 additional color palettes built with oklch() for perceptually uniform, vibrant colors.
        Each palette provides 11 shades (50-950), plus text, background, border, gradient, hover, and
        dark mode utility classes.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <p className="text-gray-600 mb-4">
        Install the addon via npm or load it from a CDN alongside the core library.
      </p>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/colors-extended">
                npm install @thenewcss/colors-extended
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/colors-extended/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/colors-extended/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* ====================== PALETTES ====================== */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Color Palettes</h2>
      <p className="text-gray-600 mb-6">
        Each palette defines 11 CSS custom properties on{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">:root</code> using the pattern{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'--color-{palette}-{shade}'}</code>.
        All values use the oklch() color space for perceptual uniformity.
      </p>

      <h3 className="font-semibold mt-6 mb-4">Token Reference</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Token Pattern</th>
              <th>Shades</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {palettes.map((palette) => (
              <tr key={palette}>
                <td>
                  <code>--color-{palette}-*</code>
                </td>
                <td>50-950</td>
                <td>
                  <code>var(--color-{palette}-500)</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-4">Palette Swatches</h3>
      <div className="space-y-4 mb-8">
        {palettes.map((palette) => (
          <div key={palette}>
            <p className="text-sm font-medium text-gray-700 mb-1 capitalize">{palette}</p>
            <div className="flex gap-1">
              {shades.map((shade) => (
                <div
                  key={shade}
                  className="w-8 h-8 rounded"
                  style={{ backgroundColor: `var(--color-${palette}-${shade})` }}
                  title={`--color-${palette}-${shade}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ====================== TEXT UTILITIES ====================== */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Text Color Utilities</h2>
      <p className="text-gray-600 mb-4">
        Text utilities are available for shades 500, 600, and 700 across all 13 palettes (39 classes
        total). Use{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'text-{color}-{shade}'}</code> to
        set the text color.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Examples</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 flex flex-wrap gap-4">
        <span className="text-indigo-600 font-medium">Indigo 600</span>
        <span className="text-violet-600 font-medium">Violet 600</span>
        <span className="text-emerald-600 font-medium">Emerald 600</span>
        <span className="text-cyan-600 font-medium">Cyan 600</span>
        <span className="text-rose-600 font-medium">Rose 600</span>
        <span className="text-amber-600 font-medium">Amber 600</span>
        <span className="text-lime-600 font-medium">Lime 600</span>
        <span className="text-fuchsia-600 font-medium">Fuchsia 600</span>
        <span className="text-sky-600 font-medium">Sky 600</span>
      </div>
      <div className="mb-6">
        <CodeBlock
          code={`<span class="text-indigo-600">Indigo text</span>\n<span class="text-rose-500">Rose text</span>\n<span class="text-emerald-700">Emerald text</span>`}
        >
          {`<span class="text-indigo-600">Indigo text</span>\n<span class="text-rose-500">Rose text</span>\n<span class="text-emerald-700">Emerald text</span>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Class Reference</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>CSS Property</th>
            </tr>
          </thead>
          <tbody>
            {palettes.map((palette) =>
              [500, 600, 700].map((shade) => (
                <tr key={`${palette}-${shade}`}>
                  <td>
                    <code>
                      text-{palette}-{shade}
                    </code>
                  </td>
                  <td>
                    color: var(--color-{palette}-{shade})
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ====================== BACKGROUND UTILITIES ====================== */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Background Color Utilities</h2>
      <p className="text-gray-600 mb-4">
        Background utilities use{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'bg-{color}-{shade}'}</code>.
        Chromatic palettes include shades 50, 100, 500, 600, 700. Neutral palettes (slate, stone,
        zinc, neutral) include additional shades for UI surfaces: 200, 800, 900, 950.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Examples</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3">
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-indigo-50)' }} />
            <span className="text-xs text-gray-500">indigo-50</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-indigo-500)' }} />
            <span className="text-xs text-gray-500">indigo-500</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-indigo-700)' }} />
            <span className="text-xs text-gray-500">indigo-700</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-rose-50)' }} />
            <span className="text-xs text-gray-500">rose-50</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-rose-500)' }} />
            <span className="text-xs text-gray-500">rose-500</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-rose-700)' }} />
            <span className="text-xs text-gray-500">rose-700</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-emerald-50)' }} />
            <span className="text-xs text-gray-500">emerald-50</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-emerald-500)' }} />
            <span className="text-xs text-gray-500">emerald-500</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-cyan-50)' }} />
            <span className="text-xs text-gray-500">cyan-50</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-cyan-500)' }} />
            <span className="text-xs text-gray-500">cyan-500</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-amber-50)' }} />
            <span className="text-xs text-gray-500">amber-50</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-amber-500)' }} />
            <span className="text-xs text-gray-500">amber-500</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-slate-100)' }} />
            <span className="text-xs text-gray-500">slate-100</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-slate-500)' }} />
            <span className="text-xs text-gray-500">slate-500</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-slate-800)' }} />
            <span className="text-xs text-gray-500">slate-800</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: 'var(--color-slate-950)' }} />
            <span className="text-xs text-gray-500">slate-950</span>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock
          code={`<div class="bg-indigo-500 text-white p-4 rounded-lg">\n  Indigo background\n</div>\n<div class="bg-slate-900 text-white p-4 rounded-lg">\n  Slate dark background\n</div>`}
        >
          {`<div class="bg-indigo-500 text-white p-4 rounded-lg">\n  Indigo background\n</div>\n<div class="bg-slate-900 text-white p-4 rounded-lg">\n  Slate dark background\n</div>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Class Reference &mdash; Chromatic Palettes</h3>
      <p className="text-gray-600 mb-4">
        Chromatic palettes provide shades 50, 100, 500, 600, and 700.
      </p>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>CSS Property</th>
            </tr>
          </thead>
          <tbody>
            {chromaticPalettes.map((palette) =>
              [50, 100, 500, 600, 700].map((shade) => (
                <tr key={`bg-${palette}-${shade}`}>
                  <td>
                    <code>
                      bg-{palette}-{shade}
                    </code>
                  </td>
                  <td>
                    background-color: var(--color-{palette}-{shade})
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Class Reference &mdash; Neutral Palettes</h3>
      <p className="text-gray-600 mb-4">
        Neutral palettes (slate, stone, zinc, neutral) include extra shades for UI surfaces and dark
        backgrounds.
      </p>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>CSS Property</th>
            </tr>
          </thead>
          <tbody>
            {neutralPalettes.map((palette) =>
              [50, 100, 200, 500, 600, 700, 800, 900, 950].map((shade) => (
                <tr key={`bg-${palette}-${shade}`}>
                  <td>
                    <code>
                      bg-{palette}-{shade}
                    </code>
                  </td>
                  <td>
                    background-color: var(--color-{palette}-{shade})
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ====================== BORDER UTILITIES ====================== */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Border Color Utilities</h2>
      <p className="text-gray-600 mb-4">
        Border utilities are available for shades 200, 300, and 500 across all 13 palettes. Use{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'border-{color}-{shade}'}</code> to
        set the border color.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Examples</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 flex flex-wrap gap-4">
        <div className="p-4 border-2 rounded" style={{ borderColor: 'var(--color-indigo-500)' }}>
          border-indigo-500
        </div>
        <div className="p-4 border-2 rounded" style={{ borderColor: 'var(--color-rose-300)' }}>
          border-rose-300
        </div>
        <div className="p-4 border-2 rounded" style={{ borderColor: 'var(--color-emerald-500)' }}>
          border-emerald-500
        </div>
        <div className="p-4 border-2 rounded" style={{ borderColor: 'var(--color-slate-200)' }}>
          border-slate-200
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock
          code={`<div class="border-2 border-indigo-500 rounded p-4">Indigo border</div>\n<div class="border border-rose-300 rounded p-4">Rose border</div>`}
        >
          {`<div class="border-2 border-indigo-500 rounded p-4">Indigo border</div>\n<div class="border border-rose-300 rounded p-4">Rose border</div>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Class Reference</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>CSS Property</th>
            </tr>
          </thead>
          <tbody>
            {palettes.map((palette) =>
              [200, 300, 500].map((shade) => (
                <tr key={`border-${palette}-${shade}`}>
                  <td>
                    <code>
                      border-{palette}-{shade}
                    </code>
                  </td>
                  <td>
                    border-color: var(--color-{palette}-{shade})
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ====================== GRADIENT UTILITIES ====================== */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Gradient Utilities</h2>
      <p className="text-gray-600 mb-4">
        Gradient stop utilities set the{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">--gradient-from</code> and{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">--gradient-to</code> custom
        properties at the 500 shade. Combine with the core library&apos;s{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">bg-gradient-to-r</code> (or other
        direction) class to create gradients.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 space-y-4">
        <div
          className="p-4 rounded-lg text-white font-medium"
          style={{
            background: 'linear-gradient(to right, var(--color-indigo-500), var(--color-violet-500))',
          }}
        >
          Indigo to Violet
        </div>
        <div
          className="p-4 rounded-lg text-white font-medium"
          style={{
            background: 'linear-gradient(to right, var(--color-rose-500), var(--color-fuchsia-500))',
          }}
        >
          Rose to Fuchsia
        </div>
        <div
          className="p-4 rounded-lg text-white font-medium"
          style={{
            background: 'linear-gradient(to right, var(--color-emerald-500), var(--color-cyan-500))',
          }}
        >
          Emerald to Cyan
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock
          code={`<div class="bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-4 rounded-lg">\n  Indigo to Violet gradient\n</div>`}
        >
          {`<div class="bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-4 rounded-lg">\n  Indigo to Violet gradient\n</div>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Class Reference</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>CSS Property</th>
            </tr>
          </thead>
          <tbody>
            {palettes.map((palette) => (
              <Fragment key={palette}>
                <tr>
                  <td>
                    <code>from-{palette}-500</code>
                  </td>
                  <td>--gradient-from: var(--color-{palette}-500)</td>
                </tr>
                <tr>
                  <td>
                    <code>to-{palette}-500</code>
                  </td>
                  <td>--gradient-to: var(--color-{palette}-500)</td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* ====================== HOVER VARIANTS ====================== */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Hover Variants</h2>
      <p className="text-gray-600 mb-4">
        Hover variants allow color changes on hover for text and background colors at shades 600 and
        700. Use the escaped colon syntax:{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'hover\\:text-{color}-{shade}'}</code>{' '}
        and{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">{'hover\\:bg-{color}-{shade}'}</code>.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Example</h3>
      <div className="p-6 border border-gray-200 rounded-lg mb-3 flex flex-wrap gap-4">
        <button
          className="px-4 py-2 rounded-lg text-white font-medium"
          style={{ backgroundColor: 'var(--color-indigo-600)' }}
        >
          Hover me (indigo)
        </button>
        <button
          className="px-4 py-2 rounded-lg text-white font-medium"
          style={{ backgroundColor: 'var(--color-rose-600)' }}
        >
          Hover me (rose)
        </button>
      </div>
      <div className="mb-6">
        <CodeBlock
          code={`<button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">\n  Hover me\n</button>\n<a class="text-rose-600 hover:text-rose-700" href="#">Link text</a>`}
        >
          {`<button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">\n  Hover me\n</button>\n<a class="text-rose-600 hover:text-rose-700" href="#">Link text</a>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Class Reference &mdash; Hover Text</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>CSS Property</th>
            </tr>
          </thead>
          <tbody>
            {palettes.map((palette) =>
              [600, 700].map((shade) => (
                <tr key={`hover-text-${palette}-${shade}`}>
                  <td>
                    <code>
                      hover\:text-{palette}-{shade}
                    </code>
                  </td>
                  <td>
                    color: var(--color-{palette}-{shade}) on :hover
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Class Reference &mdash; Hover Background</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>CSS Property</th>
            </tr>
          </thead>
          <tbody>
            {palettes.map((palette) =>
              [600, 700].map((shade) => (
                <tr key={`hover-bg-${palette}-${shade}`}>
                  <td>
                    <code>
                      hover\:bg-{palette}-{shade}
                    </code>
                  </td>
                  <td>
                    background-color: var(--color-{palette}-{shade}) on :hover
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ====================== DARK MODE ====================== */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Dark Mode</h2>
      <p className="text-gray-600 mb-4">
        The neutral palettes (slate, stone, zinc, neutral) include automatic dark mode support. Shades
        are inverted so that light surfaces become dark and dark surfaces become light. Dark mode
        activates via{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">prefers-color-scheme: dark</code> or
        the{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">[data-theme=&quot;dark&quot;]</code>{' '}
        attribute for manual toggle.
      </p>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
        <p className="text-blue-800 text-sm font-medium">
          Chromatic palettes (indigo, violet, emerald, cyan, rose, amber, lime, fuchsia, sky) do not
          include shade inversion in dark mode. Only the four neutral palettes remap their shades.
        </p>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Shade Inversion</h3>
      <p className="text-gray-600 mb-4">
        In dark mode, neutral palette shades are inverted. For example,{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">bg-slate-50</code> (nearly white in
        light mode) becomes dark, while{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">bg-slate-950</code> (nearly black in
        light mode) becomes light.
      </p>
      <div className="mb-6">
        <CodeBlock
          code={`/* Dark mode shade inversion (applied automatically) */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --color-slate-50: /* dark value */;\n    --color-slate-950: /* light value */;\n    /* ...all shades remapped */\n  }\n}\n\n/* Also works with manual toggle */\n[data-theme="dark"] {\n  --color-slate-50: /* dark value */;\n  /* ... */\n}`}
        >
          {`/* Dark mode shade inversion (applied automatically) */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --color-slate-50: /* dark value */;\n    --color-slate-950: /* light value */;\n    /* ...all shades remapped */\n  }\n}\n\n/* Also works with manual toggle */\n[data-theme="dark"] {\n  --color-slate-50: /* dark value */;\n  /* ... */\n}`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Dark Mode Palettes</h3>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Palette</th>
              <th>Dark Mode Support</th>
              <th>Behavior</th>
            </tr>
          </thead>
          <tbody>
            {neutralPalettes.map((palette) => (
              <tr key={`dark-${palette}`}>
                <td className="capitalize">{palette}</td>
                <td>Yes</td>
                <td>Shade inversion (50 swaps with 950, 100 with 900, etc.)</td>
              </tr>
            ))}
            {chromaticPalettes.map((palette) => (
              <tr key={`dark-${palette}`}>
                <td className="capitalize">{palette}</td>
                <td>No</td>
                <td>Colors remain unchanged in dark mode</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ====================== FULL CLASS SUMMARY ====================== */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Summary</h2>
      <div className="table-responsive mb-8">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Category</th>
              <th>Pattern</th>
              <th>Shades</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tokens</td>
              <td>
                <code>{'--color-{palette}-{shade}'}</code>
              </td>
              <td>50-950</td>
              <td>143</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>
                <code>{'text-{color}-{shade}'}</code>
              </td>
              <td>500, 600, 700</td>
              <td>39</td>
            </tr>
            <tr>
              <td>Background (chromatic)</td>
              <td>
                <code>{'bg-{color}-{shade}'}</code>
              </td>
              <td>50, 100, 500, 600, 700</td>
              <td>45</td>
            </tr>
            <tr>
              <td>Background (neutral)</td>
              <td>
                <code>{'bg-{color}-{shade}'}</code>
              </td>
              <td>50, 100, 200, 500, 600, 700, 800, 900, 950</td>
              <td>36</td>
            </tr>
            <tr>
              <td>Border</td>
              <td>
                <code>{'border-{color}-{shade}'}</code>
              </td>
              <td>200, 300, 500</td>
              <td>39</td>
            </tr>
            <tr>
              <td>Gradient from</td>
              <td>
                <code>{'from-{color}-500'}</code>
              </td>
              <td>500</td>
              <td>13</td>
            </tr>
            <tr>
              <td>Gradient to</td>
              <td>
                <code>{'to-{color}-500'}</code>
              </td>
              <td>500</td>
              <td>13</td>
            </tr>
            <tr>
              <td>Hover text</td>
              <td>
                <code>{'hover\\:text-{color}-{shade}'}</code>
              </td>
              <td>600, 700</td>
              <td>26</td>
            </tr>
            <tr>
              <td>Hover background</td>
              <td>
                <code>{'hover\\:bg-{color}-{shade}'}</code>
              </td>
              <td>600, 700</td>
              <td>26</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
