export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">The New CSS - MIT License</p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="/docs/getting-started" className="hover:text-blue-600 transition-colors">Docs</a>
          <a href="https://github.com/mihailShumilov/the-new-css" className="hover:text-blue-600 transition-colors">GitHub</a>
          <a href="/donate" className="hover:text-blue-600 transition-colors">Donate</a>
        </div>
      </div>
    </footer>
  );
}
