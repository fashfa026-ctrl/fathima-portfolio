import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll for header background opacity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver — highlight active section in nav
  useEffect(() => {
    if (location.pathname !== '/') return;

    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Small delay to ensure DOM is ready after lazy load
    const timer = setTimeout(() => {
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const observer = new IntersectionObserver(handleIntersect, {
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
          });
          observer.observe(el);
          observers.push(observer);
        }
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      observers.forEach((o) => o.disconnect());
    };
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)]'
          : 'bg-[var(--bg)]/60 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-tight text-[var(--text-primary)]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Fathima Ashfa<span className="text-[var(--accent)]">.</span>
        </Link>

        {/* Desktop Nav — center */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id && location.pathname === '/';

            return location.pathname === '/' ? (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`cursor-pointer relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[var(--accent)] rounded-full" />
                )}
              </button>
            ) : (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf?v=2"
            download="Fathima_Ashfa_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--accent)] text-white hover:opacity-90 transition-opacity"
          >
            <FileText size={14} /> Resume
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="cursor-pointer lg:hidden p-2 rounded-lg text-[var(--text-primary)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[var(--bg)]/98 backdrop-blur-2xl z-40">
          <div className="flex flex-col p-6 gap-1">
            {navLinks.map((link) =>
              location.pathname === '/' ? (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`cursor-pointer text-left text-lg font-medium py-3 px-4 rounded-xl transition-colors ${
                    activeSection === link.id
                      ? 'text-[var(--accent)] bg-[var(--accent-glow)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-3 px-4 rounded-xl hover:bg-[var(--bg-card)] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="/resume.pdf?v=2"
              download="Fathima_Ashfa_Resume.pdf"
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl bg-[var(--accent)] text-white hover:opacity-90 transition-opacity"
            >
              <FileText size={16} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
