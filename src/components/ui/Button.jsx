import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ children, variant = 'primary', onClick, className = '', href, to, target, rel, download }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border cursor-pointer select-none active:scale-[0.98]";

  const variants = {
    primary: "bg-[var(--accent)] border-[var(--accent)] text-white hover:opacity-90 shadow-sm",
    secondary: "bg-transparent border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-card)]",
    ghost: "bg-transparent border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
  };

  const buttonClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel} 
        download={download}
        className={buttonClass}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};
