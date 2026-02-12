import React from 'react';
import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';

export const metadata = docMeta({
  title: 'Customization',
  description: 'Customize The New CSS by overriding design tokens. Change colors, spacing, typography, and more using CSS custom properties on :root.',
  path: '/docs/customization',
});

const jsonLd = techArticleJsonLd({
  headline: 'Customization',
  description: 'Customize The New CSS by overriding design tokens. Change colors, spacing, typography, and more using CSS custom properties on :root.',
  path: '/docs/customization',
});

export default function CustomizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Customization</h1>

      <p className="text-gray-600 mb-6">The New CSS is built on CSS custom properties (design tokens). Override them in your own stylesheet to change colors, spacing, typography, and more -- no build step required.</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">How to Override Tokens</h2>
      <p className="text-gray-600 mb-3">Add a <code className="bg-gray-100 px-2 py-1 rounded text-sm">:root</code> block in your own CSS <strong>after</strong> the library import. Because The New CSS uses <code className="bg-gray-100 px-2 py-1 rounded text-sm">@layer</code>, your unlayered styles always win:</p>
      <div className="mb-6">
        <CodeBlock code={`<link rel="stylesheet" href="the-new-css.min.css">\n<style>\n  :root {\n    --color-blue-500: oklch(0.65 0.25 250);\n    --font-sans: "Inter", system-ui, sans-serif;\n    --spacing-4: 1.25rem;\n  }\n</style>`}>
          {`<link rel="stylesheet" href="the-new-css.min.css">\n<style>\n  :root {\n    --color-blue-500: oklch(0.65 0.25 250);\n    --font-sans: "Inter", system-ui, sans-serif;\n    --spacing-4: 1.25rem;\n  }\n</style>`}
        </CodeBlock>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Color Tokens</h2>
      <p className="text-gray-600 mb-4">All colors use the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch" className="text-blue-600 hover:underline">oklch()</a> color space for perceptual uniformity. Override any token to rebrand your project.</p>

      <h3 className="font-semibold mt-6 mb-2">Gray Scale</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Token</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-50</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.985 0 0)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-100</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.97 0.001 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-200</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.92 0.004 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-300</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.87 0.006 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-400</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.71 0.01 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-500</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.55 0.014 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-600</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.45 0.014 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-700</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.37 0.013 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-800</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.27 0.01 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-900</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.21 0.008 260)</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">--color-gray-950</code></td><td className="px-4 py-2">oklch(0.13 0.005 260)</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Brand Colors</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Token</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-blue-50</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.97 0.014 250)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-blue-100</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.93 0.034 250)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-blue-500</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.59 0.2 255)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-blue-600</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.52 0.2 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-blue-700</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.45 0.18 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-red-50</code> / <code className="text-sm">500</code> / <code className="text-sm">600</code></td><td className="px-4 py-2 border-b border-gray-200">Red tones (hue 20-25)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-green-50</code> / <code className="text-sm">500</code> / <code className="text-sm">600</code></td><td className="px-4 py-2 border-b border-gray-200">Green tones (hue 150-155)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-yellow-50</code> / <code className="text-sm">500</code> / <code className="text-sm">600</code></td><td className="px-4 py-2 border-b border-gray-200">Yellow tones (hue 65-95)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-purple-50</code> / <code className="text-sm">500</code> / <code className="text-sm">600</code></td><td className="px-4 py-2 border-b border-gray-200">Purple tones (hue 295-300)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-pink-500</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.59 0.2 345)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-orange-500</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.7 0.19 40)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-teal-500</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.59 0.14 180)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-white</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(1 0 0)</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">--color-black</code></td><td className="px-4 py-2">oklch(0 0 0)</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Adding a Custom Brand Color</h3>
      <p className="text-gray-600 mb-3">Override the blue tokens to rebrand the primary color across all utilities:</p>
      <div className="mb-6">
        <CodeBlock code={`:root {\n  /* Rebrand to indigo */\n  --color-blue-50: oklch(0.97 0.02 280);\n  --color-blue-100: oklch(0.93 0.04 280);\n  --color-blue-500: oklch(0.55 0.25 280);\n  --color-blue-600: oklch(0.48 0.25 280);\n  --color-blue-700: oklch(0.40 0.22 280);\n}`}>
          {`:root {\n  /* Rebrand to indigo */\n  --color-blue-50: oklch(0.97 0.02 280);\n  --color-blue-100: oklch(0.93 0.04 280);\n  --color-blue-500: oklch(0.55 0.25 280);\n  --color-blue-600: oklch(0.48 0.25 280);\n  --color-blue-700: oklch(0.40 0.22 280);\n}`}
        </CodeBlock>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Spacing Tokens</h2>
      <p className="text-gray-600 mb-4">Spacing tokens control padding, margin, and gap utilities. Values follow a 4px base scale.</p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Token</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Default</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Pixels</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-0</code></td><td className="px-4 py-2 border-b border-gray-200">0px</td><td className="px-4 py-2 border-b border-gray-200">0</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-px</code></td><td className="px-4 py-2 border-b border-gray-200">1px</td><td className="px-4 py-2 border-b border-gray-200">1</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-0-5</code></td><td className="px-4 py-2 border-b border-gray-200">0.125rem</td><td className="px-4 py-2 border-b border-gray-200">2</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-1</code></td><td className="px-4 py-2 border-b border-gray-200">0.25rem</td><td className="px-4 py-2 border-b border-gray-200">4</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-2</code></td><td className="px-4 py-2 border-b border-gray-200">0.5rem</td><td className="px-4 py-2 border-b border-gray-200">8</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-3</code></td><td className="px-4 py-2 border-b border-gray-200">0.75rem</td><td className="px-4 py-2 border-b border-gray-200">12</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-4</code></td><td className="px-4 py-2 border-b border-gray-200">1rem</td><td className="px-4 py-2 border-b border-gray-200">16</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-5</code></td><td className="px-4 py-2 border-b border-gray-200">1.25rem</td><td className="px-4 py-2 border-b border-gray-200">20</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-6</code></td><td className="px-4 py-2 border-b border-gray-200">1.5rem</td><td className="px-4 py-2 border-b border-gray-200">24</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-8</code></td><td className="px-4 py-2 border-b border-gray-200">2rem</td><td className="px-4 py-2 border-b border-gray-200">32</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-10</code></td><td className="px-4 py-2 border-b border-gray-200">2.5rem</td><td className="px-4 py-2 border-b border-gray-200">40</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-12</code></td><td className="px-4 py-2 border-b border-gray-200">3rem</td><td className="px-4 py-2 border-b border-gray-200">48</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-16</code></td><td className="px-4 py-2 border-b border-gray-200">4rem</td><td className="px-4 py-2 border-b border-gray-200">64</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--spacing-20</code></td><td className="px-4 py-2 border-b border-gray-200">5rem</td><td className="px-4 py-2 border-b border-gray-200">80</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">--spacing-24</code></td><td className="px-4 py-2">6rem</td><td className="px-4 py-2">96</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Typography Tokens</h2>

      <h3 className="font-semibold mt-6 mb-2">Font Families</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Token</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--font-sans</code></td><td className="px-4 py-2 border-b border-gray-200">system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, sans-serif</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--font-serif</code></td><td className="px-4 py-2 border-b border-gray-200">Georgia, Cambria, &quot;Times New Roman&quot;, Times, serif</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">--font-mono</code></td><td className="px-4 py-2">ui-monospace, SFMono-Regular, &quot;SF Mono&quot;, Menlo, monospace</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Font Sizes</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Token</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Default</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Pixels</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--text-xs</code></td><td className="px-4 py-2 border-b border-gray-200">0.75rem</td><td className="px-4 py-2 border-b border-gray-200">12px</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--text-sm</code></td><td className="px-4 py-2 border-b border-gray-200">0.875rem</td><td className="px-4 py-2 border-b border-gray-200">14px</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--text-base</code></td><td className="px-4 py-2 border-b border-gray-200">1rem</td><td className="px-4 py-2 border-b border-gray-200">16px</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--text-lg</code></td><td className="px-4 py-2 border-b border-gray-200">1.125rem</td><td className="px-4 py-2 border-b border-gray-200">18px</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--text-xl</code></td><td className="px-4 py-2 border-b border-gray-200">1.25rem</td><td className="px-4 py-2 border-b border-gray-200">20px</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--text-2xl</code></td><td className="px-4 py-2 border-b border-gray-200">1.5rem</td><td className="px-4 py-2 border-b border-gray-200">24px</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--text-3xl</code></td><td className="px-4 py-2 border-b border-gray-200">1.875rem</td><td className="px-4 py-2 border-b border-gray-200">30px</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">--text-4xl</code></td><td className="px-4 py-2">2.25rem</td><td className="px-4 py-2">36px</td></tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Font Weights, Line Heights & Letter Spacing</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Token</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--font-light</code></td><td className="px-4 py-2 border-b border-gray-200">300</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--font-normal</code></td><td className="px-4 py-2 border-b border-gray-200">400</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--font-medium</code></td><td className="px-4 py-2 border-b border-gray-200">500</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--font-semibold</code></td><td className="px-4 py-2 border-b border-gray-200">600</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--font-bold</code></td><td className="px-4 py-2 border-b border-gray-200">700</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--font-extrabold</code></td><td className="px-4 py-2 border-b border-gray-200">800</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--leading-none</code> ... <code className="text-sm">--leading-loose</code></td><td className="px-4 py-2 border-b border-gray-200">1 / 1.25 / 1.375 / 1.5 / 1.625 / 2</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">--tracking-tight</code> / <code className="text-sm">normal</code> / <code className="text-sm">wide</code></td><td className="px-4 py-2">-0.025em / 0em / 0.025em</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Examples</h2>

      <h3 className="font-semibold mt-6 mb-2">Changing the Font</h3>
      <p className="text-gray-600 mb-3">Load a Google Font and assign it to the sans-serif token:</p>
      <div className="mb-6">
        <CodeBlock code={`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">\n<style>\n  :root {\n    --font-sans: "Inter", system-ui, sans-serif;\n  }\n</style>`}>
          {`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">\n<style>\n  :root {\n    --font-sans: "Inter", system-ui, sans-serif;\n  }\n</style>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Tighter Spacing Scale</h3>
      <p className="text-gray-600 mb-3">Reduce the larger spacing values for a more compact layout:</p>
      <div className="mb-6">
        <CodeBlock code={`:root {\n  --spacing-8: 1.75rem;   /* was 2rem */\n  --spacing-12: 2.5rem;   /* was 3rem */\n  --spacing-16: 3.5rem;   /* was 4rem */\n  --spacing-20: 4.25rem;  /* was 5rem */\n  --spacing-24: 5rem;     /* was 6rem */\n}`}>
          {`:root {\n  --spacing-8: 1.75rem;   /* was 2rem */\n  --spacing-12: 2.5rem;   /* was 3rem */\n  --spacing-16: 3.5rem;   /* was 4rem */\n  --spacing-20: 4.25rem;  /* was 5rem */\n  --spacing-24: 5rem;     /* was 6rem */\n}`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Live: Custom Brand Color Override</h3>
      <p className="text-gray-600 mb-3">The card below uses a scoped custom property override to change the blue accent to purple within a single container:</p>

      <div style={{ '--color-blue-500': 'oklch(0.59 0.2 295)', '--color-blue-600': 'oklch(0.52 0.2 295)' } as React.CSSProperties} className="p-6 bg-gray-50 border border-gray-200 rounded-lg mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Purple-branded card</h4>
        <p className="text-gray-600 text-sm mb-3">The button below uses the standard <code className="bg-gray-100 px-2 py-1 rounded text-sm">bg-blue-600</code> class, but the token has been overridden to purple on this container.</p>
        <a href="#" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Purple Action</a>
      </div>

      <div className="mb-6">
        <CodeBlock code={`<div style="--color-blue-500: oklch(0.59 0.2 295); --color-blue-600: oklch(0.52 0.2 295);"\n     class="p-6 bg-gray-50 border border-gray-200 rounded-lg">\n  <h4 class="font-semibold">Purple-branded card</h4>\n  <p class="text-gray-600 text-sm">Token overridden to purple.</p>\n  <a class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">\n    Purple Action\n  </a>\n</div>`}>
          {`<div style="--color-blue-500: oklch(0.59 0.2 295); --color-blue-600: oklch(0.52 0.2 295);"\n     class="p-6 bg-gray-50 border border-gray-200 rounded-lg">\n  <h4 class="font-semibold">Purple-branded card</h4>\n  <p class="text-gray-600 text-sm">Token overridden to purple.</p>\n  <a class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">\n    Purple Action\n  </a>\n</div>`}
        </CodeBlock>
      </div>
    </>
  );
}
