import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { MapPin, GraduationCap, Target, User } from 'lucide-react';

const infoCards = [
  { icon: <User size={16} />, label: 'Name', value: 'Fathima Ashfa' },
  { icon: <GraduationCap size={16} />, label: 'Education', value: 'HNDIT – SLIATE' },
  { icon: <MapPin size={16} />, label: 'Location', value: 'Wattala, Sri Lanka' },
  { icon: <Target size={16} />, label: 'Career Goal', value: 'Software Development' },
];

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const textItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-[var(--border)] relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[var(--accent)]/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 rounded-full bg-[#8B5CF6]/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionTitle title="About Me" eyebrow="Who I Am" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ── Left Side: Beautiful Portrait Card matching user screenshot (5 / 12) ── */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative group w-full max-w-sm">
              {/* Soft colorful backglow with blue-purple theme */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[var(--accent)]/25 via-[#8B5CF6]/20 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Card Frame: exactly the size and framing from the screenshot */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] shadow-2xl p-2.5">
                <div className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-xl md:rounded-2xl bg-[var(--bg-secondary)] relative">
                  <img
                    src="/profile.jpg?v=3"
                    alt="Fathima Ashfa"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Side: Details & Info Cards (7 / 12) ── */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              className="space-y-4"
              variants={textContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.p variants={textItem} className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                I am an <span className="text-[var(--text-primary)] font-medium">HNDIT student</span> at the Sri Lanka Institute of Advanced Technological Education (SLIATE), passionate about software development and modern web applications.
              </motion.p>
              <motion.p variants={textItem} className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                Through academic and practical projects, I have gained <span className="text-[var(--text-primary)] font-medium">hands-on experience</span> in full-stack web development, database design, and desktop systems — building applications with the <span className="text-[var(--text-primary)] font-medium">MERN stack</span> as well as <span className="text-[var(--text-primary)] font-medium">C# & Java</span>.
              </motion.p>
              <motion.p variants={textItem} className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                I am actively seeking an <span className="text-[var(--accent)] font-semibold">Industrial Training Opportunity</span> where I can contribute to real-world software solutions, collaborate with experienced engineers, and accelerate my professional growth.
              </motion.p>
            </motion.div>

            {/* ── 2x2 Info Cards Grid ── */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {infoCards.map((card) => (
                <motion.div
                  key={card.label}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="relative flex items-center gap-3.5 p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden group transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-md hover:shadow-[var(--accent)]/5 cursor-default"
                >
                  <div className="relative p-2.5 rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <div className="relative min-w-0">
                    <div className="text-[10px] uppercase tracking-wider font-mono text-[var(--text-secondary)]">
                      {card.label}
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)] truncate">
                      {card.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
