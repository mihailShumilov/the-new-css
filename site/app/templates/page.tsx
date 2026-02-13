import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Templates - Ready-to-use HTML templates',
  description:
    'Free HTML templates built with The New CSS. Landing page, dashboard, and blog layouts. Copy and paste, no build step required.',
  alternates: { canonical: 'https://thenewcss.com/templates' },
  openGraph: {
    type: 'website',
    title: 'Templates | The New CSS',
    description: 'Free HTML templates built with The New CSS. Copy and paste, no build step.',
    url: 'https://thenewcss.com/templates',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS' }],
  },
};

export default function TemplatesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-center">Templates</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Real layouts built with plain HTML + The New CSS. Copy the code and customize.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          <a href="/templates/landing" className="group p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
            </div>
            <h2 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">Landing page</h2>
            <p className="text-sm text-gray-600">Hero + features + CTA, perfect for product pages.</p>
          </a>

          <a href="/templates/dashboard" className="group p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 10h16M10 4v16" /></svg>
            </div>
            <h2 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">Dashboard</h2>
            <p className="text-sm text-gray-600">Navigation + cards + tables, for admin UIs.</p>
          </a>

          <a href="/templates/blog" className="group p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
            <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            </div>
            <h2 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">Blog layout</h2>
            <p className="text-sm text-gray-600">Typography-first layout for content sites.</p>
          </a>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          All templates are plain HTML + The New CSS. No JavaScript required.
        </p>
      </div>
    </div>
  );
}
