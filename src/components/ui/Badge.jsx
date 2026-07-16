import React from 'react';

export const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseStyle = "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border transition-colors";
  
  const variants = {
    default: "bg-transparent border-[var(--border)] text-[var(--text-secondary)]",
    primary: "bg-[var(--accent-glow)] border-[var(--accent)] text-[var(--accent)]",
    success: "bg-[var(--success-glow)] border-[var(--success)] text-[var(--success)]"
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
