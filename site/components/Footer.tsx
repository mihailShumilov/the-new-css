export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">The New CSS - MIT License</p>
        <nav className="flex flex-wrap gap-6 text-sm text-gray-500">
          <a href="/docs" className="hover:text-blue-600 transition-colors">Docs</a>
          <a href="/examples" className="hover:text-blue-600 transition-colors">Examples</a>
          <a href="/compare" className="hover:text-blue-600 transition-colors">Compare</a>
          <a href="/faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          <a href="https://github.com/mihailShumilov/the-new-css" className="hover:text-blue-600 transition-colors">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
