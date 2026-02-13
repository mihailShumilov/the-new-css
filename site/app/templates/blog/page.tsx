import type { Metadata } from 'next';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Blog template',
  description: 'A typography-first blog template built with The New CSS. Clean reading experience for content sites.',
  alternates: { canonical: 'https://thenewcss.com/templates/blog' },
};

const templateCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog</title>
  <link rel="stylesheet" href="https://unpkg.com/the-new-css/dist/the-new-css.min.css">
</head>
<body class="bg-gray-50 text-gray-900">

  <!-- Header -->
  <header class="border-b border-gray-200">
    <nav class="container mx-auto flex items-center
      justify-between px-4 py-4">
      <a href="/" class="font-bold text-lg">My Blog</a>
      <div class="flex gap-4 text-sm">
        <a href="#" class="text-gray-600 hover:text-blue-600">
          Home</a>
        <a href="#" class="text-gray-600 hover:text-blue-600">
          About</a>
        <a href="#" class="text-gray-600 hover:text-blue-600">
          Archive</a>
      </div>
    </nav>
  </header>

  <!-- Post -->
  <main class="container mx-auto px-4 py-12 max-w-2xl">
    <article>
      <header class="mb-8">
        <p class="text-sm text-gray-500 mb-2">
          February 13, 2026</p>
        <h1 class="text-3xl font-extrabold tracking-tight
          mb-4">How to build fast sites with less CSS</h1>
        <p class="text-gray-600">
          A practical guide to shipping lightweight
          stylesheets for faster page loads.
        </p>
      </header>

      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p>Performance starts with what you ship. Every
          kilobyte of CSS is a render-blocking resource
          that delays first paint.</p>

        <h2 class="text-xl font-bold mt-8">
          Start with a minimal baseline</h2>
        <p>Instead of loading a full framework and
          purging what you don't need, start small.
          A lightweight library gives you defaults
          and utilities without the overhead.</p>

        <blockquote class="border-l-4 border-blue-500
          pl-4 text-gray-500 italic">
          The fastest CSS is the CSS you don't ship.
        </blockquote>

        <h2 class="text-xl font-bold mt-8">
          Use modern CSS features</h2>
        <p>Features like @layer, CSS variables, and
          oklch() let you do more with less code.
          No preprocessor, no build step.</p>
      </div>
    </article>
  </main>

  <!-- Footer -->
  <footer class="py-8 border-t border-gray-200">
    <div class="container mx-auto px-4 text-center
      text-sm text-gray-500">
      &copy; 2026 My Blog. Built with The New CSS.
    </div>
  </footer>

</body>
</html>`;

export default function BlogTemplatePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-sm text-gray-500 mb-2"><a href="/templates" className="hover:text-blue-600">&larr; All templates</a></p>
          <h1 className="text-3xl font-extrabold tracking-tight mb-4">Blog template</h1>
          <p className="text-gray-600">Typography-first layout for content sites. This is plain HTML + The New CSS.</p>
        </div>

        {/* Live Preview */}
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="px-4 py-2 bg-gray-100 border-b border-gray-200 text-sm font-medium text-gray-500">Preview</div>
          <div className="bg-gray-50">
            <header className="border-b border-gray-200">
              <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                <span className="font-bold text-lg">My Blog</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-gray-600">Home</span>
                  <span className="text-gray-600">About</span>
                  <span className="text-gray-600">Archive</span>
                </div>
              </nav>
            </header>
            <main className="container mx-auto px-4 py-12 max-w-2xl">
              <article>
                <header className="mb-8">
                  <p className="text-sm text-gray-500 mb-2">February 13, 2026</p>
                  <h2 className="text-3xl font-extrabold tracking-tight mb-4">How to build fast sites with less CSS</h2>
                  <p className="text-gray-600">A practical guide to shipping lightweight stylesheets for faster page loads.</p>
                </header>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Performance starts with what you ship. Every kilobyte of CSS is a render-blocking resource that delays first paint.</p>
                  <h3 className="text-xl font-bold mt-8">Start with a minimal baseline</h3>
                  <p>Instead of loading a full framework and purging what you don&apos;t need, start small. A lightweight library gives you defaults and utilities without the overhead.</p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 text-gray-500 italic">
                    The fastest CSS is the CSS you don&apos;t ship.
                  </blockquote>
                </div>
              </article>
            </main>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Source code</h2>
          <CodeBlock code={templateCode}>{templateCode}</CodeBlock>
        </div>
      </div>
    </div>
  );
}
