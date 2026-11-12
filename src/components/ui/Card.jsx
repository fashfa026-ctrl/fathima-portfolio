import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hoverEffect = true }) => {
  const baseStyle =
    'bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 transition-all duration-300 relative overflow-hidden';

  if (!hoverEffect) {
    return (
      <div className={`${baseStyle} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{
        y: -6,
        borderColor: 'rgba(59, 130, 246, 0.4)',
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.08), 0 8px 16px rgba(0,0,0,0.12)',
      }}
      transition={{ type: 'tween', duration: 0.25 }}
      className={`${baseStyle} ${className}`}
    >
      {children}
    </motion.div>
  );
};
