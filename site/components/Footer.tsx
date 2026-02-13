export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-semibold mb-2">The New CSS</p>
            <p className="text-sm text-gray-500">Lightweight, zero-config CSS library.</p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <div>
              <p className="text-sm font-medium mb-2" id="footer-resources">Resources</p>
              <nav className="flex flex-col gap-1 text-sm text-gray-500" aria-labelledby="footer-resources">
                <a href="/docs" className="hover:text-blue-600 transition-colors">Docs</a>
                <a href="/#examples" className="hover:text-blue-600 transition-colors">Examples</a>
                <a href="/templates" className="hover:text-blue-600 transition-colors">Templates</a>
                <a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a>
              </nav>
            </div>
            <div>
              <p className="text-sm font-medium mb-2" id="footer-compare">Compare</p>
              <nav className="flex flex-col gap-1 text-sm text-gray-500" aria-labelledby="footer-compare">
                <a href="/vs-tailwind" className="hover:text-blue-600 transition-colors">vs Tailwind</a>
                <a href="/vs-bootstrap" className="hover:text-blue-600 transition-colors">vs Bootstrap</a>
                <a href="/compare" className="hover:text-blue-600 transition-colors">Full comparison</a>
              </nav>
            </div>
            <div>
              <p className="text-sm font-medium mb-2" id="footer-community">Community</p>
              <nav className="flex flex-col gap-1 text-sm text-gray-500" aria-labelledby="footer-community">
                <a href="https://github.com/mihailShumilov/the-new-css" className="hover:text-blue-600 transition-colors">GitHub</a>
                <a href="/rss.xml" className="hover:text-blue-600 transition-colors">RSS</a>
                <a href="/faq" className="hover:text-blue-600 transition-colors">FAQ</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500 text-center">
          MIT License &middot; The New CSS
        </div>
      </div>
    </footer>
  );
}
