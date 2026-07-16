import React from 'react';

export const SectionTitle = ({ title, eyebrow, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest text-[var(--accent)] uppercase mb-3 font-mono">
          // {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl font-sans">
        {title}
      </h2>
    </div>
  );
};
