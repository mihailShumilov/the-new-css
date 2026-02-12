import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';

export const metadata = docMeta({
  title: 'Dark Mode',
  description: 'Enable automatic and manual dark mode with The New CSS. Gray token swapping approach with OS detection and data-theme toggle support.',
  path: '/docs/dark-mode',
});

const jsonLd = techArticleJsonLd({
  headline: 'Dark Mode',
  description: 'Enable automatic and manual dark mode with The New CSS. Gray token swapping approach with OS detection and data-theme toggle support.',
  path: '/docs/dark-mode',
});

export default function DarkModePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Dark Mode</h1>

      <p className="text-gray-600 mb-6">The New CSS supports dark mode out of the box using a gray token swapping approach. No extra classes are needed -- your existing <code className="bg-gray-100 px-2 py-1 rounded text-sm">bg-gray-*</code> and <code className="bg-gray-100 px-2 py-1 rounded text-sm">text-gray-*</code> utilities automatically adapt.</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">How It Works</h2>

      <p className="text-gray-600 mb-4">Instead of adding separate dark-prefixed utilities, The New CSS <strong>inverts the gray scale</strong> when dark mode is active. The CSS custom properties for gray colors are remapped so that light values become dark and vice versa:</p>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Token</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Light Mode</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Dark Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-50</code></td><td className="px-4 py-2 border-b border-gray-200">Near white (0.985)</td><td className="px-4 py-2 border-b border-gray-200">Near black (0.13)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-100</code></td><td className="px-4 py-2 border-b border-gray-200">Very light (0.97)</td><td className="px-4 py-2 border-b border-gray-200">Very dark (0.17)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-200</code></td><td className="px-4 py-2 border-b border-gray-200">Light (0.92)</td><td className="px-4 py-2 border-b border-gray-200">Dark (0.22)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-500</code></td><td className="px-4 py-2 border-b border-gray-200">Mid (0.55)</td><td className="px-4 py-2 border-b border-gray-200">Mid (0.55)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-900</code></td><td className="px-4 py-2 border-b border-gray-200">Near black (0.21)</td><td className="px-4 py-2 border-b border-gray-200">Near white (0.92)</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">--color-gray-950</code></td><td className="px-4 py-2">Darkest (0.13)</td><td className="px-4 py-2">Lightest (0.97)</td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 mb-6">This means <code className="bg-gray-100 px-2 py-1 rounded text-sm">bg-white text-gray-900</code> on your <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;body&gt;</code> gives a white background with dark text in light mode, and automatically flips to a dark background with light text in dark mode.</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Activation Methods</h2>

      <h3 className="font-semibold mt-6 mb-2">1. Automatic (OS Preference)</h3>
      <p className="text-gray-600 mb-3">Dark mode activates automatically when the user{"'"}s OS is set to dark mode, using <code className="bg-gray-100 px-2 py-1 rounded text-sm">@media (prefers-color-scheme: dark)</code>. No JavaScript required.</p>
      <p className="text-gray-600 mb-4">The automatic mode respects an opt-out: if <code className="bg-gray-100 px-2 py-1 rounded text-sm">data-theme=&quot;light&quot;</code> is set on <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;html&gt;</code>, dark mode will not apply even if the OS prefers it.</p>
      <div className="mb-6">
        <CodeBlock code={`<!-- Automatic: follows OS preference (default behavior) -->\n<html lang="en">\n\n<!-- Force light mode regardless of OS -->\n<html lang="en" data-theme="light">`}>
          {`<!-- Automatic: follows OS preference (default behavior) -->\n<html lang="en">\n\n<!-- Force light mode regardless of OS -->\n<html lang="en" data-theme="light">`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">2. Manual (data-theme attribute)</h3>
      <p className="text-gray-600 mb-3">Force dark mode by adding <code className="bg-gray-100 px-2 py-1 rounded text-sm">data-theme=&quot;dark&quot;</code> to any element (typically <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;html&gt;</code>). This activates dark mode regardless of OS preference.</p>
      <div className="mb-6">
        <CodeBlock code={`<!-- Force dark mode -->\n<html lang="en" data-theme="dark">`}>
          {`<!-- Force dark mode -->\n<html lang="en" data-theme="dark">`}
        </CodeBlock>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Toggle Button</h2>
      <p className="text-gray-600 mb-3">Implement a theme toggle with a small script. This example cycles between auto, light, and dark, persisting the choice in <code className="bg-gray-100 px-2 py-1 rounded text-sm">localStorage</code>:</p>
      <div className="mb-6">
        <CodeBlock code={`<button id="theme-toggle" class="p-2 rounded-lg hover:bg-gray-100">\n  Toggle Theme\n</button>\n\n<script>\nconst btn = document.getElementById('theme-toggle');\nconst html = document.documentElement;\n\n// Restore saved preference\nconst saved = localStorage.getItem('theme');\nif (saved) html.setAttribute('data-theme', saved);\n\nbtn.addEventListener('click', () => {\n  const current = html.getAttribute('data-theme');\n  let next;\n  if (!current) next = 'dark';\n  else if (current === 'dark') next = 'light';\n  else { next = null; }\n\n  if (next) {\n    html.setAttribute('data-theme', next);\n    localStorage.setItem('theme', next);\n  } else {\n    html.removeAttribute('data-theme');\n    localStorage.removeItem('theme');\n  }\n});\n</script>`}>
          {`<button id="theme-toggle" class="p-2 rounded-lg hover:bg-gray-100">\n  Toggle Theme\n</button>\n\n<script>\nconst btn = document.getElementById('theme-toggle');\nconst html = document.documentElement;\n\n// Restore saved preference\nconst saved = localStorage.getItem('theme');\nif (saved) html.setAttribute('data-theme', saved);\n\nbtn.addEventListener('click', () => {\n  const current = html.getAttribute('data-theme');\n  let next;\n  if (!current) next = 'dark';\n  else if (current === 'dark') next = 'light';\n  else { next = null; }\n\n  if (next) {\n    html.setAttribute('data-theme', next);\n    localStorage.setItem('theme', next);\n  } else {\n    html.removeAttribute('data-theme');\n    localStorage.removeItem('theme');\n  }\n});\n</script>`}
        </CodeBlock>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Swapped Tokens Reference</h2>
      <p className="text-gray-600 mb-4">All eleven gray tokens are swapped in dark mode. The <code className="bg-gray-100 px-2 py-1 rounded text-sm">color-scheme: dark</code> property is also set, which tells the browser to use dark form controls, scrollbars, and other native UI elements.</p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Token</th>
              <th className="px-4 py-2 font-semibold border-b border-gray-200">Dark Value (oklch)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-50</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.13 0.005 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-100</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.17 0.007 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-200</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.22 0.009 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-300</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.31 0.012 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-400</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.45 0.014 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-500</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.55 0.014 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-600</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.71 0.01 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-700</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.79 0.008 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-800</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.87 0.006 260)</td></tr>
            <tr><td className="px-4 py-2 border-b border-gray-200"><code className="text-sm">--color-gray-900</code></td><td className="px-4 py-2 border-b border-gray-200">oklch(0.92 0.004 260)</td></tr>
            <tr><td className="px-4 py-2"><code className="text-sm">--color-gray-950</code></td><td className="px-4 py-2">oklch(0.97 0.001 260)</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Examples</h2>

      <h3 className="font-semibold mt-6 mb-2">Card that adapts automatically</h3>
      <p className="text-gray-600 mb-3">This card uses standard gray utilities. Toggle your OS dark mode (or use the button in the nav) to see it adapt with no extra classes:</p>

      <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg mb-4">
        <h4 className="font-semibold text-gray-900 mb-1">Adaptive Card</h4>
        <p className="text-gray-600 text-sm mb-3">This text and background swap automatically in dark mode via token remapping.</p>
        <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">Tag</span>
      </div>

      <div className="mb-6">
        <CodeBlock code={`<div class="p-6 bg-gray-50 border border-gray-200 rounded-lg">\n  <h4 class="font-semibold text-gray-900 mb-1">Adaptive Card</h4>\n  <p class="text-gray-600 text-sm mb-3">Swaps automatically in dark mode.</p>\n  <span class="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">Tag</span>\n</div>`}>
          {`<div class="p-6 bg-gray-50 border border-gray-200 rounded-lg">\n  <h4 class="font-semibold text-gray-900 mb-1">Adaptive Card</h4>\n  <p class="text-gray-600 text-sm mb-3">Swaps automatically in dark mode.</p>\n  <span class="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">Tag</span>\n</div>`}
        </CodeBlock>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Side-by-side comparison</h3>
      <p className="text-gray-600 mb-3">Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">data-theme</code> on individual elements to force a theme within a region:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div data-theme="light" className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm font-semibold text-gray-900 mb-1">Light Mode</p>
          <p className="text-xs text-gray-600">data-theme=&quot;light&quot;</p>
        </div>
        <div data-theme="dark" className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm font-semibold text-gray-900 mb-1">Dark Mode</p>
          <p className="text-xs text-gray-600">data-theme=&quot;dark&quot;</p>
        </div>
      </div>

      <div className="mb-6">
        <CodeBlock code={`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">\n  <div data-theme="light" class="p-4 bg-gray-50 rounded-lg">\n    <p class="font-semibold text-gray-900">Light Mode</p>\n  </div>\n  <div data-theme="dark" class="p-4 bg-gray-50 rounded-lg">\n    <p class="font-semibold text-gray-900">Dark Mode</p>\n  </div>\n</div>`}>
          {`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">\n  <div data-theme="light" class="p-4 bg-gray-50 rounded-lg">\n    <p class="font-semibold text-gray-900">Light Mode</p>\n  </div>\n  <div data-theme="dark" class="p-4 bg-gray-50 rounded-lg">\n    <p class="font-semibold text-gray-900">Dark Mode</p>\n  </div>\n</div>`}
        </CodeBlock>
      </div>
    </>
  );
}
