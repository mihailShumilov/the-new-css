import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/assets/images/logo.svg" alt="" width={32} height={32} />
          The New CSS
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="/docs/getting-started" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Docs</a>
          <a href="/docs/layout-utilities" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Utilities</a>
          <a href="/donate" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Donate</a>
          <ThemeToggle />
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
