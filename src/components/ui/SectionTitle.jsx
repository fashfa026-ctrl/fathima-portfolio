import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({ title, eyebrow, description, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block text-xs font-semibold tracking-widest text-[var(--accent)] uppercase mb-3 font-mono"
        >
          // {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </motion.h2>
      {/* Animated underline accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] origin-left"
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-base text-[var(--text-secondary)] max-w-xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
