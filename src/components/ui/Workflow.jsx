import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './SectionTitle';
import { ClipboardList, Code2, Database, Bug } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <ClipboardList size={22} />,
    title: 'Planning',
    description:
      'Understanding requirements and identifying application features.',
  },
  {
    num: '02',
    icon: <Code2 size={22} />,
    title: 'Development',
    description:
      'Building frontend interfaces and backend functionalities.',
  },
  {
    num: '03',
    icon: <Database size={22} />,
    title: 'Database Integration',
    description:
      'Connecting applications with databases and managing application data.',
  },
  {
    num: '04',
    icon: <Bug size={22} />,
    title: 'Testing & Debugging',
    description:
      'Checking application functionality and fixing identified issues.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

export const Workflow = () => {
  return (
    <section id="workflow" className="py-20 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Development Workflow" eyebrow="My Process" />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="relative p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)]/40 transition-all duration-300 group overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              {/* Step number */}
              <span className="relative text-3xl font-bold font-mono bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                {step.num}
              </span>

              {/* Icon */}
              <motion.div
                className="relative mt-4 mb-3 p-2.5 rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] w-fit"
                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
              >
                {step.icon}
              </motion.div>

              {/* Content */}
              <h4
                className="relative text-base font-semibold text-[var(--text-primary)] mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {step.title}
              </h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (hidden on last & mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-[var(--border)]" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
