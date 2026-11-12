import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contactInfo } from '../../data/contact';
import { Github, Linkedin } from '../ui/BrandIcons';
import { Mail } from 'lucide-react';

const quickLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
];

export const Footer = () => {
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-[var(--border)] pt-16 pb-8 mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div className="space-y-3">
            <h3
              className="text-lg font-bold text-[var(--text-primary)]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Fathima Ashfa
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Aspiring Software Developer | HNDIT Student
            </p>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-xs">
              Seeking an industrial training opportunity to contribute to
              real-world projects and grow as a developer.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[var(--accent)]">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) =>
                location.pathname === '/' ? (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="cursor-pointer text-left text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-fit"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.id}
                    to={`/#${link.id}`}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors w-fit"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Column 3 — Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-[var(--accent)]">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-secondary)]">
            &copy; 2026 Fathima Ashfa. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Built with React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
