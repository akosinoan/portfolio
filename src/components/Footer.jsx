const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-1 py-4 text-sm">
      <span>© 2026 Noanworks Development</span>
      <a
        href="/backend/"
        className="text-xs text-gray-500 hover:text-red-900 transition-colors"
      >
        See the backend-engineer rebuild →
      </a>
    </footer>
  );
};

export default Footer;
