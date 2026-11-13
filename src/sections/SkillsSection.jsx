import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Monitor, Wrench } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { TechIcon } from '../components/ui/TechIcon';
import { skills, categoryMeta } from '../data/skills';

const iconMap = { Code2, Layout, Server, Database, Monitor, Wrench };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const tagContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.7, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 border-t border-[var(--border)] scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Technical Skills" eyebrow="Technologies" />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {Object.entries(skills).map(([category, list]) => {
            const meta = categoryMeta[category];
            const IconComponent = iconMap[meta.icon];

            return (
              <motion.div
                key={category}
                variants={cardVariant}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                className="relative p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden group cursor-default"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Animated top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Category header */}
                <div className="relative flex items-center gap-3 mb-5 pb-3 border-b border-[var(--border)]/50">
                  <motion.div
                    className="p-2.5 rounded-xl bg-[var(--accent-glow)] text-[var(--accent)] flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </motion.div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {meta.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[var(--text-secondary)]">
                      {list.length} {list.length === 1 ? 'technology' : 'technologies'}
                    </span>
                  </div>
                </div>

                {/* Tech tags with logos */}
                <motion.div
                  className="relative flex flex-wrap gap-2.5"
                  variants={tagContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {list.map((skill) => (
                    <motion.span
                      key={skill.name}
                      variants={tagVariant}
                      whileHover={{
                        scale: 1.08,
                        borderColor: 'var(--accent)',
                        transition: { duration: 0.2 },
                      }}
                      className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] cursor-default transition-shadow hover:shadow-md hover:shadow-[var(--accent)]/10"
                    >
                      <TechIcon name={skill.name} size={18} />
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
