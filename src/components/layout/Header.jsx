import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { contactInfo } from '../../data/contact';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Workflow', id: 'workflow' },
    { label: 'Experience', id: 'experience' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-sans text-xl font-bold tracking-tight text-[var(--text-primary)]"
        >
          Fathima Ashfa<span className="text-[var(--accent)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            location.pathname === '/' ? (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="cursor-pointer text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
          
          {/* Action Button */}
          {location.pathname === '/' ? (
            <button
              onClick={() => handleNavClick('contact')}
              className="cursor-pointer inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--text-primary)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white transition-colors"
            >
              Get in touch
            </button>
          ) : (
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--text-primary)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white transition-colors"
            >
              Get in touch
            </Link>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="cursor-pointer p-2 rounded-lg border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        {/* Mobile Nav Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="cursor-pointer p-2 rounded-lg border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-colors flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="cursor-pointer text-[var(--text-primary)] hover:text-[var(--accent)] flex items-center justify-center"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--bg)] px-6 py-4 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              location.pathname === '/' ? (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="cursor-pointer text-left text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 border-b border-[var(--border)]/30"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 border-b border-[var(--border)]/30"
                >
                  {link.label}
                </Link>
              )
            ))}
            {location.pathname === '/' ? (
              <button
                onClick={() => { handleNavClick('contact'); setIsOpen(false); }}
                className="cursor-pointer inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-[var(--text-primary)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                Get in touch
              </button>
            ) : (
              <Link
                to="/#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg bg-[var(--text-primary)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                Get in touch
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
