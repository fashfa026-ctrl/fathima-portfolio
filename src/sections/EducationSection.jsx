import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { GraduationCap } from 'lucide-react';
import { timeline } from '../data/timeline';

export const EducationSection = () => {
  const { education, schooling } = timeline;

  return (
    <section id="education" className="py-20 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Education" eyebrow="Academic Background" />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main Education Card (3/5) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <Card hoverEffect={false} className="space-y-6">
              <div className="flex justify-between items-start flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[var(--accent-glow)] text-[var(--accent)] flex items-center justify-center shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-[var(--text-primary)]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {education.degree}
                    </h3>
                    <div className="text-sm text-[var(--text-secondary)] mt-0.5">
                      {education.institution}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] opacity-80">
                      {education.campus}
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-[var(--accent)] bg-[var(--accent-glow)] text-[var(--accent)] font-mono">
                  {education.status}
                </span>
              </div>

              {/* Coursework */}
              <div className="pt-4 border-t border-[var(--border)]/50 space-y-3">
                <h5 className="text-xs font-bold font-mono uppercase text-[var(--text-primary)] tracking-wider">
                  Relevant Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-mono border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text-secondary)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Academic Background (2/5) */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h5 className="text-xs font-bold font-mono uppercase text-[var(--accent)] tracking-wider mb-4">
              // Academic Background
            </h5>
            {schooling &&
              schooling.map((item, idx) => (
                  <motion.div
                  key={idx}
                  className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] space-y-2 hover:border-[var(--accent)]/30 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.15, duration: 0.4 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-[var(--text-primary)]">
                      {item.level}
                    </span>
                    <span className="text-xs font-mono text-[var(--accent)] font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">
                    {item.institution}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] font-mono">
                    {item.stream}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--text-secondary)] pt-1 border-t border-[var(--border)]/30">
                    {item.results}
                  </div>
                  </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
