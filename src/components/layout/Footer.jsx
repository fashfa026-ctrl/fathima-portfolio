import React from 'react';
import { contactInfo } from '../../data/contact';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[var(--border)] py-12 mt-32">
      <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-[var(--text-secondary)]">
        {/* Left Side */}
        <div className="space-y-1">
          <p className="font-sans text-[var(--text-primary)] font-semibold">
            &copy; 2026 Fathima Ashfa.
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Built with React, Vite & Tailwind CSS.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex gap-6 font-mono text-xs">
          <a 
            href={contactInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            GitHub ↗
          </a>
          <a 
            href={contactInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a 
            href={`mailto:${contactInfo.email}`} 
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
