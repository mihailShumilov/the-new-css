import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Helpers Addon - Clearfix, Ratios, Stacks, and More',
  description:
    'Miscellaneous utility helpers including clearfix, aspect ratios, stacks, stretched link, vertical rule, focus ring, object-fit, float, and vertical alignment.',
  path: '/addons/helpers',
});

const jsonLd = techArticleJsonLd({
  headline: 'Helpers Addon',
  description:
    'Miscellaneous utility helpers including clearfix, aspect ratios, stacks, stretched link, vertical rule, focus ring, object-fit, float, and vertical alignment.',
  path: '/addons/helpers',
});

export default function HelpersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Helpers</h1>
      <p className="text-gray-600 mb-6">
        A collection of miscellaneous utility classes for common layout and display needs.
        Part of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">@thenewcss/helpers</code> addon package.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/helpers">
                npm install @thenewcss/helpers
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/helpers/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/helpers/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Aspect Ratios */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Aspect Ratios</h2>
      <p className="text-gray-600 mb-4">
        Maintain consistent aspect ratios for embedded content like videos and iframes.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="flex flex-wrap gap-4">
          <div style={{ width: '120px' }}>
            <div className="ratio ratio-1x1">
              <div style={{ background: 'var(--color-blue-100, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>1:1</div>
            </div>
          </div>
          <div style={{ width: '160px' }}>
            <div className="ratio ratio-4x3">
              <div style={{ background: 'var(--color-blue-100, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>4:3</div>
            </div>
          </div>
          <div style={{ width: '200px' }}>
            <div className="ratio ratio-16x9">
              <div style={{ background: 'var(--color-blue-100, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>16:9</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="ratio ratio-16x9">\n  <iframe src="https://www.youtube.com/embed/..." allowfullscreen></iframe>\n</div>\n\n<!-- Available ratios: ratio-1x1, ratio-4x3, ratio-16x9, ratio-21x9 -->`}>
          {`<div class="ratio ratio-16x9">\n  <iframe src="https://www.youtube.com/embed/..." allowfullscreen></iframe>\n</div>\n\n<!-- Available ratios: ratio-1x1, ratio-4x3, ratio-16x9, ratio-21x9 -->`}
        </CodeBlock>
      </div>

      {/* Stacks */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Stacks</h2>
      <p className="text-gray-600 mb-4">
        Shorthand helpers for vertical and horizontal flex layouts with gap.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="hstack" style={{ marginBottom: '1rem' }}>
          <div style={{ padding: '0.5rem 1rem', background: 'var(--color-blue-100, #dbeafe)', borderRadius: '0.25rem' }}>Left</div>
          <div className="vr"></div>
          <div style={{ padding: '0.5rem 1rem', background: 'var(--color-blue-100, #dbeafe)', borderRadius: '0.25rem' }}>Right</div>
        </div>
        <div className="vstack" style={{ maxWidth: '200px' }}>
          <div style={{ padding: '0.5rem 1rem', background: 'var(--color-blue-100, #dbeafe)', borderRadius: '0.25rem' }}>First</div>
          <div style={{ padding: '0.5rem 1rem', background: 'var(--color-blue-100, #dbeafe)', borderRadius: '0.25rem' }}>Second</div>
          <div style={{ padding: '0.5rem 1rem', background: 'var(--color-blue-100, #dbeafe)', borderRadius: '0.25rem' }}>Third</div>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<!-- Horizontal stack with vertical rule divider -->\n<div class="hstack">\n  <div>Left</div>\n  <div class="vr"></div>\n  <div>Right</div>\n</div>\n\n<!-- Vertical stack -->\n<div class="vstack">\n  <div>First</div>\n  <div>Second</div>\n  <div>Third</div>\n</div>`}>
          {`<!-- Horizontal stack with vertical rule divider -->\n<div class="hstack">\n  <div>Left</div>\n  <div class="vr"></div>\n  <div>Right</div>\n</div>\n\n<!-- Vertical stack -->\n<div class="vstack">\n  <div>First</div>\n  <div>Second</div>\n  <div>Third</div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Object Fit */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Object Fit</h2>
      <p className="text-gray-600 mb-4">
        Control how replaced elements (images, videos) are resized within their container.
      </p>

      <div className="mb-6">
        <CodeBlock code={`<img src="photo.jpg" class="object-contain" style="width: 200px; height: 200px">\n<img src="photo.jpg" class="object-cover" style="width: 200px; height: 200px">\n<img src="photo.jpg" class="object-fill" style="width: 200px; height: 200px">\n<img src="photo.jpg" class="object-none" style="width: 200px; height: 200px">\n<img src="photo.jpg" class="object-scale-down" style="width: 200px; height: 200px">`}>
          {`<img src="photo.jpg" class="object-contain" style="width: 200px; height: 200px">\n<img src="photo.jpg" class="object-cover" style="width: 200px; height: 200px">\n<img src="photo.jpg" class="object-fill" style="width: 200px; height: 200px">\n<img src="photo.jpg" class="object-none" style="width: 200px; height: 200px">\n<img src="photo.jpg" class="object-scale-down" style="width: 200px; height: 200px">`}
        </CodeBlock>
      </div>

      {/* Stretched Link */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Stretched Link</h2>
      <p className="text-gray-600 mb-4">
        Make any element&#39;s containing block clickable via an absolutely-positioned overlay.
      </p>

      <div className="mb-6">
        <CodeBlock code={`<div class="card" style="position: relative">\n  <div class="card-body">\n    <h5>Card title</h5>\n    <p>Some text with a <a href="#" class="stretched-link">stretched link</a>.</p>\n  </div>\n</div>`}>
          {`<div class="card" style="position: relative">\n  <div class="card-body">\n    <h5>Card title</h5>\n    <p>Some text with a <a href="#" class="stretched-link">stretched link</a>.</p>\n  </div>\n</div>`}
        </CodeBlock>
      </div>

      {/* Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Class Reference</h2>

      <h3 className="font-semibold mt-6 mb-2">Layout Helpers</h3>
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
              <td className="cell-nowrap"><code>.clearfix</code></td>
              <td>Clears floats via ::after pseudo-element.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.vstack</code></td>
              <td>Vertical flex stack with 0.5rem gap.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.hstack</code></td>
              <td>Horizontal flex stack with 0.5rem gap and center alignment.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.stretched-link</code></td>
              <td>Makes containing block clickable via absolute-positioned ::after overlay.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.vr</code></td>
              <td>Vertical rule divider. 1px wide, currentColor, 0.25 opacity.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.focus-ring</code></td>
              <td>Custom focus ring on :focus-visible. Blue box-shadow.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Aspect Ratios</h3>
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
              <td className="cell-nowrap"><code>.ratio</code></td>
              <td>Aspect ratio container. Children fill absolutely.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.ratio-1x1</code></td>
              <td>1:1 square aspect ratio (100%).</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.ratio-4x3</code></td>
              <td>4:3 aspect ratio (75%).</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.ratio-16x9</code></td>
              <td>16:9 widescreen aspect ratio (56.25%).</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.ratio-21x9</code></td>
              <td>21:9 ultra-wide aspect ratio (42.857%).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Object Fit &amp; Float</h3>
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
              <td className="cell-nowrap"><code>.object-contain</code></td>
              <td>object-fit: contain</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.object-cover</code></td>
              <td>object-fit: cover</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.object-fill</code></td>
              <td>object-fit: fill</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.object-none</code></td>
              <td>object-fit: none</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.object-scale-down</code></td>
              <td>object-fit: scale-down</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.float-start</code></td>
              <td>float: left</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.float-end</code></td>
              <td>float: right</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.float-none</code></td>
              <td>float: none</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Vertical Alignment</h3>
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
              <td className="cell-nowrap"><code>.align-baseline</code></td>
              <td>vertical-align: baseline</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.align-top</code></td>
              <td>vertical-align: top</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.align-middle</code></td>
              <td>vertical-align: middle</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.align-bottom</code></td>
              <td>vertical-align: bottom</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.align-text-top</code></td>
              <td>vertical-align: text-top</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.align-text-bottom</code></td>
              <td>vertical-align: text-bottom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
