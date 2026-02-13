import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles about modern CSS, semantic HTML, and building fast websites with less code.',
  alternates: { canonical: 'https://thenewcss.com/blog' },
  openGraph: {
    type: 'website',
    title: 'Blog | The New CSS',
    description: 'Articles about modern CSS, semantic HTML, and building fast websites.',
    url: 'https://thenewcss.com/blog',
    siteName: 'The New CSS',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'The New CSS' }],
  },
};

export default function BlogIndexPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Blog</h1>
        <p className="text-gray-600 mb-8">
          Articles about modern CSS, semantic HTML, and building fast websites with less code.
        </p>
        <div className="flex justify-end mb-8">
          <a
            href="/rss.xml"
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.18 15.64a2.18 2.18 0 010 4.36 2.18 2.18 0 010-4.36M4 4.44A15.56 15.56 0 0119.56 20h-2.83A12.73 12.73 0 004 7.27V4.44M4 10.1a9.9 9.9 0 019.9 9.9h-2.83A7.07 7.07 0 004 12.93V10.1z"/></svg>
            RSS Feed
          </a>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-b-0">
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <h2 className="text-xl font-bold mb-2">
                <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-600 text-sm mb-3">{post.description}</p>
              <a href={`/blog/${post.slug}`} className="text-blue-600 text-sm font-medium hover:underline">
                Read more &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
