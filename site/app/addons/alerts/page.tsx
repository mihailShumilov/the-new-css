import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Alerts Addon - Info, Success, Warning, and Danger',
  description:
    'Alert boxes with info, success, warning, and danger color variants. Includes a reusable close button and dismissible alert pattern.',
  path: '/addons/alerts',
});

const jsonLd = techArticleJsonLd({
  headline: 'Alerts Addon',
  description:
    'Alert boxes with info, success, warning, and danger color variants. Includes a reusable close button and dismissible alert pattern.',
  path: '/addons/alerts',
});

export default function AlertsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Alerts</h1>
      <p className="text-gray-600 mb-6">
        Contextual alert boxes for feedback messages with color variants and a reusable close button.
        Part of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">@thenewcss/alerts</code> addon package.
      </p>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/alerts">
                npm install @thenewcss/alerts
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/alerts/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/alerts/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Color Variants */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Color Variants</h2>
      <p className="text-gray-600 mb-4">
        The base <code className="bg-gray-100 px-2 py-1 rounded text-sm">.alert</code> creates a styled container.
        Add a color modifier to match the message context.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="alert alert-info">This is an info alert — check it out!</div>
        <div className="alert alert-success">This is a success alert — well done!</div>
        <div className="alert alert-warning">This is a warning alert — be careful!</div>
        <div className="alert alert-danger">This is a danger alert — something went wrong!</div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="alert alert-info">This is an info alert — check it out!</div>\n<div class="alert alert-success">This is a success alert — well done!</div>\n<div class="alert alert-warning">This is a warning alert — be careful!</div>\n<div class="alert alert-danger">This is a danger alert — something went wrong!</div>`}>
          {`<div class="alert alert-info">This is an info alert — check it out!</div>\n<div class="alert alert-success">This is a success alert — well done!</div>\n<div class="alert alert-warning">This is a warning alert — be careful!</div>\n<div class="alert alert-danger">This is a danger alert — something went wrong!</div>`}
        </CodeBlock>
      </div>

      {/* Close Button */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Close Button</h2>
      <p className="text-gray-600 mb-4">
        The <code className="bg-gray-100 px-2 py-1 rounded text-sm">.btn-close</code> is a reusable
        close button with an X icon that can be used in alerts, modals, and other components.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <button className="btn-close" aria-label="Close"></button>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<button class="btn-close" aria-label="Close"></button>`}>
          {`<button class="btn-close" aria-label="Close"></button>`}
        </CodeBlock>
      </div>

      {/* Dismissible */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Dismissible Alerts</h2>
      <p className="text-gray-600 mb-4">
        Add <code className="bg-gray-100 px-2 py-1 rounded text-sm">.alert-dismissible</code> to position
        a close button inside the alert with extra right padding.
      </p>

      <h3 className="font-semibold mt-6 mb-2">Preview</h3>
      <div className="border border-gray-200 rounded-lg p-6 mb-4">
        <div className="alert alert-warning alert-dismissible">
          <strong>Warning!</strong> Something needs your attention.
          <button className="btn-close" aria-label="Close"></button>
        </div>
        <div className="alert alert-success alert-dismissible">
          <strong>Success!</strong> Your changes have been saved.
          <button className="btn-close" aria-label="Close"></button>
        </div>
      </div>
      <div className="mb-6">
        <CodeBlock code={`<div class="alert alert-warning alert-dismissible">\n  <strong>Warning!</strong> Something needs your attention.\n  <button class="btn-close" aria-label="Close"></button>\n</div>`}>
          {`<div class="alert alert-warning alert-dismissible">\n  <strong>Warning!</strong> Something needs your attention.\n  <button class="btn-close" aria-label="Close"></button>\n</div>`}
        </CodeBlock>
      </div>

      {/* Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Class Reference</h2>

      <h3 className="font-semibold mt-6 mb-2">Base</h3>
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
              <td className="cell-nowrap"><code>.alert</code></td>
              <td>Base alert container with padding, border, border-radius, and default blue/info styling.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.alert-dismissible</code></td>
              <td>Adds extra right padding and positions .btn-close in the top-right corner.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.btn-close</code></td>
              <td>Reusable close button with X icon. Opacity transitions on hover/focus.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Colors</h3>
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
              <td className="cell-nowrap"><code>.alert-info</code></td>
              <td>Blue background and text for informational messages.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.alert-success</code></td>
              <td>Green background and text for success messages.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.alert-warning</code></td>
              <td>Yellow background and text for warning messages.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.alert-danger</code></td>
              <td>Red background and text for error/danger messages.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
