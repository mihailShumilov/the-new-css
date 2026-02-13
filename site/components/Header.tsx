import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 relative">
        <a href="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/assets/images/logo.svg" alt="" width={32} height={32} aria-hidden="true" />
          The New CSS
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <a href="/docs" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Docs</a>
          <a href="/examples" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Examples</a>
          <a href="/templates" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Templates</a>
          <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Blog</a>
          <a href="/compare" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Compare</a>
          <a href="https://github.com/mihailShumilov/the-new-css" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">GitHub</a>
          <ThemeToggle />
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
