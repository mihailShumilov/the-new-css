import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Progress Addon - Bars, Spinners, and Skeleton Loaders',
  description:
    'Progress bars with striped and animated variants, border and grow spinners, and placeholder skeleton loaders with glow and wave animations.',
  path: '/addons/progress',
});

const jsonLd = techArticleJsonLd({
  headline: 'Progress Addon',
  description:
    'Progress bars with striped and animated variants, border and grow spinners, and placeholder skeleton loaders with glow and wave animations.',
  path: '/addons/progress',
});

export default function ProgressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Progress</h1>
      <p className="text-gray-600 mb-6">
        Progress indicators, loading spinners, and skeleton placeholder loaders.
        Part of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">@thenewcss/progress</code> addon package.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/progress">
                npm install @thenewcss/progress
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/progress/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/progress/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Progress Bar */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Progress Bar</h2>
      <p className="text-gray-600 mb-4">
        Set the width via inline style to indicate progress. Color variants available for contextual meaning.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="progress mb-3">
          <div className="progress-bar" style={{ width: '25%' }}>25%</div>
        </div>
        <div className="progress mb-3">
          <div className="progress-bar" style={{ width: '50%' }}>50%</div>
        </div>
        <div className="progress mb-3">
          <div className="progress-bar" style={{ width: '75%' }}>75%</div>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: '100%' }}>100%</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="progress">\n  <div class="progress-bar" style="width: 75%">75%</div>\n</div>`}>
          {`<div class="progress">\n  <div class="progress-bar" style="width: 75%">75%</div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Color Variants */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Color Variants</h2>
      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="progress mb-3">
          <div className="progress-bar progress-bar-success" style={{ width: '40%' }}>Success</div>
        </div>
        <div className="progress mb-3">
          <div className="progress-bar progress-bar-warning" style={{ width: '60%' }}>Warning</div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-danger" style={{ width: '80%' }}>Danger</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="progress">\n  <div class="progress-bar progress-bar-success" style="width: 40%">Success</div>\n</div>\n<div class="progress">\n  <div class="progress-bar progress-bar-warning" style="width: 60%">Warning</div>\n</div>\n<div class="progress">\n  <div class="progress-bar progress-bar-danger" style="width: 80%">Danger</div>\n</div>`}>
          {`<div class="progress">\n  <div class="progress-bar progress-bar-success" style="width: 40%">Success</div>\n</div>\n<div class="progress">\n  <div class="progress-bar progress-bar-warning" style="width: 60%">Warning</div>\n</div>\n<div class="progress">\n  <div class="progress-bar progress-bar-danger" style="width: 80%">Danger</div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Striped & Animated */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Striped &amp; Animated</h2>
      <p className="text-gray-600 mb-4">
        Add <code className="bg-gray-100 px-2 py-1 rounded text-sm">.progress-bar-striped</code> for diagonal stripes
        and <code className="bg-gray-100 px-2 py-1 rounded text-sm">.progress-bar-animated</code> for moving stripes.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="progress mb-3">
          <div className="progress-bar progress-bar-striped" style={{ width: '50%' }}>Striped</div>
        </div>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '75%' }}>Animated</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="progress">\n  <div class="progress-bar progress-bar-striped" style="width: 50%">Striped</div>\n</div>\n<div class="progress">\n  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%">Animated</div>\n</div>`}>
          {`<div class="progress">\n  <div class="progress-bar progress-bar-striped" style="width: 50%">Striped</div>\n</div>\n<div class="progress">\n  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%">Animated</div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Spinners */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Spinners</h2>
      <p className="text-gray-600 mb-4">
        Two spinner styles for loading states. Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">.spinner-border</code> for
        a spinning border or <code className="bg-gray-100 px-2 py-1 rounded text-sm">.spinner-grow</code> for a pulsing dot.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex items-center gap-4">
          <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
          <div className="spinner-grow" role="status"><span className="sr-only">Loading...</span></div>
          <div className="spinner-border spinner-border-sm" role="status"><span className="sr-only">Loading...</span></div>
          <div className="spinner-grow spinner-grow-sm" role="status"><span className="sr-only">Loading...</span></div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="spinner-border" role="status">\n  <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow" role="status">\n  <span class="sr-only">Loading...</span>\n</div>\n<!-- Small variants -->\n<div class="spinner-border spinner-border-sm" role="status"></div>\n<div class="spinner-grow spinner-grow-sm" role="status"></div>`}>
          {`<div class="spinner-border" role="status">\n  <span class="sr-only">Loading...</span>\n</div>\n<div class="spinner-grow" role="status">\n  <span class="sr-only">Loading...</span>\n</div>\n<!-- Small variants -->\n<div class="spinner-border spinner-border-sm" role="status"></div>\n<div class="spinner-grow spinner-grow-sm" role="status"></div>`}
        </CodeBlock>
      </div>

      {/* Placeholders */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Placeholders</h2>
      <p className="text-gray-600 mb-4">
        Skeleton loading placeholders with glow and wave animations for content that hasn&apos;t loaded yet.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <p className="placeholder-glow mb-3">
          <span className="placeholder" style={{ width: '100%' }}>&nbsp;</span>
          <span className="placeholder" style={{ width: '75%' }}>&nbsp;</span>
          <span className="placeholder" style={{ width: '50%' }}>&nbsp;</span>
        </p>
        <p className="placeholder-wave">
          <span className="placeholder" style={{ width: '100%' }}>&nbsp;</span>
          <span className="placeholder" style={{ width: '66%' }}>&nbsp;</span>
        </p>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<p class="placeholder-glow">\n  <span class="placeholder" style="width: 100%"></span>\n  <span class="placeholder" style="width: 75%"></span>\n</p>\n<p class="placeholder-wave">\n  <span class="placeholder" style="width: 100%"></span>\n  <span class="placeholder" style="width: 66%"></span>\n</p>`}>
          {`<p class="placeholder-glow">\n  <span class="placeholder" style="width: 100%"></span>\n  <span class="placeholder" style="width: 75%"></span>\n</p>\n<p class="placeholder-wave">\n  <span class="placeholder" style="width: 100%"></span>\n  <span class="placeholder" style="width: 66%"></span>\n</p>`}
        </CodeBlock>
      </div>

      {/* Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Class Reference</h2>

      <h3 className="font-semibold mt-6 mb-2">Progress Bar</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.progress</code></td>
              <td>Container with gray background and rounded corners.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.progress-bar</code></td>
              <td>Fill bar. Set width via inline style. Blue by default.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.progress-bar-striped</code></td>
              <td>Diagonal stripe pattern via background gradient.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.progress-bar-animated</code></td>
              <td>Animates the stripes with a moving effect.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.progress-bar-success</code></td>
              <td>Green progress bar.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.progress-bar-warning</code></td>
              <td>Yellow progress bar.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.progress-bar-danger</code></td>
              <td>Red progress bar.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Spinners</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.spinner-border</code></td>
              <td>Spinning border circle. 2rem size, uses currentColor.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.spinner-grow</code></td>
              <td>Pulsing grow animation. 2rem size, uses currentColor.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.spinner-border-sm</code></td>
              <td>Small spinner variant. 1rem size.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.spinner-grow-sm</code></td>
              <td>Small grow variant. 1rem size.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Placeholders</h3>
      <div className="table-responsive mb-6">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell-nowrap"><code>.placeholder</code></td>
              <td>Inline-block skeleton element with currentColor background.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.placeholder-glow</code></td>
              <td>Container that applies a pulsing glow animation to placeholders.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.placeholder-wave</code></td>
              <td>Container that applies a shimmer wave animation to placeholders.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
