import { docMeta, techArticleJsonLd } from '@/lib/seo';
import CodeBlock from '@/components/CodeBlock';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata = docMeta({
  title: 'Modal Addon - Dialog and Offcanvas Components',
  description:
    'Modal dialogs and offcanvas panels using native dialog element. Built-in backdrop, focus trap, Escape key, and size variants including fullscreen.',
  path: '/addons/modal',
});

const jsonLd = techArticleJsonLd({
  headline: 'Modal Addon',
  description:
    'Modal dialogs and offcanvas panels using native dialog element. Built-in backdrop, focus trap, Escape key, and size variants including fullscreen.',
  path: '/addons/modal',
});

export default function ModalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold mb-6">Modal</h1>
      <p className="text-gray-600 mb-6">
        Modal dialogs and offcanvas slide-in panels using the native{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;dialog&gt;</code> element.
        Part of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">@thenewcss/modal</code> addon package.
      </p>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-8">
        <p className="text-blue-800 text-sm font-medium">
          Uses the native <code className="bg-blue-100 px-1 rounded">&lt;dialog&gt;</code> element which provides
          built-in backdrop, focus trap, and Escape key support. Open with{' '}
          <code className="bg-blue-100 px-1 rounded">element.showModal()</code> and close with{' '}
          <code className="bg-blue-100 px-1 rounded">element.close()</code>.
        </p>
      </div>

      {/* Installation */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Installation</h2>
      <TabSwitcher
        tabs={[
          {
            label: 'npm',
            content: (
              <CodeBlock code="npm install @thenewcss/modal">
                npm install @thenewcss/modal
              </CodeBlock>
            ),
          },
          {
            label: 'CDN',
            content: (
              <CodeBlock code='<link rel="stylesheet" href="https://unpkg.com/@thenewcss/modal/dist/index.min.css">'>
                {'<link rel="stylesheet" href="https://unpkg.com/@thenewcss/modal/dist/index.min.css">'}
              </CodeBlock>
            ),
          },
        ]}
      />

      {/* Modal */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Basic Modal</h2>
      <p className="text-gray-600 mb-4">
        A centered dialog with header, body, and footer sections.
        Use <code className="bg-gray-100 px-2 py-1 rounded text-sm">showModal()</code> to open with backdrop.
      </p>

      <div className="mb-6">
        <CodeBlock code={`<dialog class="modal" id="myModal">\n  <div class="modal-header">\n    <h2 class="modal-title">Modal Title</h2>\n    <button class="btn-close" onclick="this.closest('dialog').close()"></button>\n  </div>\n  <div class="modal-body">\n    <p>Modal body content goes here.</p>\n  </div>\n  <div class="modal-footer">\n    <button onclick="this.closest('dialog').close()">Close</button>\n    <button class="btn btn-primary">Save changes</button>\n  </div>\n</dialog>\n\n<button onclick="document.getElementById('myModal').showModal()">\n  Open Modal\n</button>`}>
          {`<dialog class="modal" id="myModal">\n  <div class="modal-header">\n    <h2 class="modal-title">Modal Title</h2>\n    <button class="btn-close" onclick="this.closest('dialog').close()"></button>\n  </div>\n  <div class="modal-body">\n    <p>Modal body content goes here.</p>\n  </div>\n  <div class="modal-footer">\n    <button onclick="this.closest('dialog').close()">Close</button>\n    <button class="btn btn-primary">Save changes</button>\n  </div>\n</dialog>\n\n<button onclick="document.getElementById('myModal').showModal()">\n  Open Modal\n</button>`}
        </CodeBlock>
      </div>

      {/* Sizes */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Modal Sizes</h2>
      <p className="text-gray-600 mb-4">
        Add a size modifier class to the <code className="bg-gray-100 px-2 py-1 rounded text-sm">.modal</code> for
        different widths.
      </p>

      <div className="mb-6">
        <CodeBlock code={`<dialog class="modal modal-sm">...</dialog>  <!-- max-width: 300px -->\n<dialog class="modal">...</dialog>           <!-- max-width: 500px (default) -->\n<dialog class="modal modal-lg">...</dialog>  <!-- max-width: 800px -->\n<dialog class="modal modal-xl">...</dialog>  <!-- max-width: 1140px -->\n<dialog class="modal modal-fullscreen">...</dialog>  <!-- full viewport -->`}>
          {`<dialog class="modal modal-sm">...</dialog>  <!-- max-width: 300px -->\n<dialog class="modal">...</dialog>           <!-- max-width: 500px (default) -->\n<dialog class="modal modal-lg">...</dialog>  <!-- max-width: 800px -->\n<dialog class="modal modal-xl">...</dialog>  <!-- max-width: 1140px -->\n<dialog class="modal modal-fullscreen">...</dialog>  <!-- full viewport -->`}
        </CodeBlock>
      </div>

      {/* Offcanvas */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Offcanvas</h2>
      <p className="text-gray-600 mb-4">
        A slide-in panel from the left or right edge. Also uses the{' '}
        <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;dialog&gt;</code> element.
      </p>

      <div className="mb-6">
        <CodeBlock code={`<!-- Left sidebar -->\n<dialog class="offcanvas offcanvas-start" id="sidebar">\n  <div class="offcanvas-header">\n    <h3>Sidebar</h3>\n    <button class="btn-close" onclick="this.closest('dialog').close()"></button>\n  </div>\n  <div class="offcanvas-body">\n    <p>Offcanvas content here.</p>\n  </div>\n</dialog>\n\n<!-- Right panel -->\n<dialog class="offcanvas offcanvas-end" id="panel">\n  <div class="offcanvas-header">\n    <h3>Panel</h3>\n    <button class="btn-close" onclick="this.closest('dialog').close()"></button>\n  </div>\n  <div class="offcanvas-body">\n    <p>Panel content here.</p>\n  </div>\n</dialog>\n\n<button onclick="document.getElementById('sidebar').showModal()">Open Sidebar</button>\n<button onclick="document.getElementById('panel').showModal()">Open Panel</button>`}>
          {`<!-- Left sidebar -->\n<dialog class="offcanvas offcanvas-start" id="sidebar">\n  <div class="offcanvas-header">\n    <h3>Sidebar</h3>\n    <button class="btn-close" onclick="this.closest('dialog').close()"></button>\n  </div>\n  <div class="offcanvas-body">\n    <p>Offcanvas content here.</p>\n  </div>\n</dialog>\n\n<!-- Right panel -->\n<dialog class="offcanvas offcanvas-end" id="panel">\n  <div class="offcanvas-header">\n    <h3>Panel</h3>\n    <button class="btn-close" onclick="this.closest('dialog').close()"></button>\n  </div>\n  <div class="offcanvas-body">\n    <p>Panel content here.</p>\n  </div>\n</dialog>\n\n<button onclick="document.getElementById('sidebar').showModal()">Open Sidebar</button>\n<button onclick="document.getElementById('panel').showModal()">Open Panel</button>`}
        </CodeBlock>
      </div>

      {/* Class Reference */}
      <h2 className="text-xl font-semibold mt-10 mb-4">Class Reference</h2>

      <h3 className="font-semibold mt-6 mb-2">Modal</h3>
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
              <td className="cell-nowrap"><code>.modal</code></td>
              <td>Applied to dialog element. Centered with backdrop, max-width 500px.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.modal-header</code></td>
              <td>Flex header with space-between alignment and bottom border.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.modal-title</code></td>
              <td>Modal heading with semibold weight.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.modal-body</code></td>
              <td>Scrollable content area with padding.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.modal-footer</code></td>
              <td>Flex footer with end-aligned actions and top border.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.modal-sm</code></td>
              <td>Small modal, max-width 300px.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.modal-lg</code></td>
              <td>Large modal, max-width 800px.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.modal-xl</code></td>
              <td>Extra large modal, max-width 1140px.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.modal-fullscreen</code></td>
              <td>Full viewport modal with no border-radius.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Offcanvas</h3>
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
              <td className="cell-nowrap"><code>.offcanvas</code></td>
              <td>Applied to dialog element. Fixed position slide-in panel, 300px wide.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.offcanvas-start</code></td>
              <td>Slides in from the left edge.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.offcanvas-end</code></td>
              <td>Slides in from the right edge.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.offcanvas-header</code></td>
              <td>Flex header with space-between alignment.</td>
            </tr>
            <tr>
              <td className="cell-nowrap"><code>.offcanvas-body</code></td>
              <td>Scrollable content area with flex-grow.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
