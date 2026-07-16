import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hoverEffect = true }) => {
  const baseStyle = "bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 transition-all duration-300 relative overflow-hidden";
  
  if (!hoverEffect) {
    return (
      <div className={`${baseStyle} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ type: "tween", duration: 0.2 }}
      className={`${baseStyle} hover:border-[var(--accent)] hover:shadow-md ${className}`}
    >
      {children}
    </motion.div>
  );
};
