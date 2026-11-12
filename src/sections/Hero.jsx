import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/ui/BrandIcons';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { contactInfo } from '../data/contact';

/* ── Stagger helpers ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

/* ── Typing hook ── */
const useTypingEffect = (lines, speed = 40, lineDelay = 600) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }
    if (currentChar === 0 && currentLine > 0) {
      const t = setTimeout(() => setCurrentChar(1), lineDelay);
      return () => clearTimeout(t);
    }
    const line = lines[currentLine];
    if (currentChar <= line.length) {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => {
          const copy = [...prev];
          copy[currentLine] = line.slice(0, currentChar);
          return copy;
        });
        if (currentChar === line.length) {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        } else {
          setCurrentChar((c) => c + 1);
        }
      }, speed);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, lines, speed, lineDelay]);

  return { displayedLines, done, cursorLine: currentLine, cursorChar: currentChar };
};

/* ── Code lines for the terminal ── */
const codeLines = [
  'const developer = {',
  '  name: "Fathima Ashfa",',
  '  role: "Software Developer",',
  '  education: "HNDIT @ SLIATE",',
  '  skills: [',
  '    "React", "Node.js",',
  '    "Java", "C#"',
  '  ],',
  '  seeking: "Industrial Training"',
  '};',
];

/* ── Syntax highlighting ── */
const highlightCode = (text) => {
  if (!text) return null;
  return text
    .replace(/(const|let|var)/g, '‹kw›$1‹/kw›')
    .replace(/"([^"]*)"/g, '‹str›"$1"‹/str›')
    .replace(/(developer|name|role|education|skills|seeking)/g, (m) =>
      text.includes('const') && m === 'developer'
        ? `‹var›${m}‹/var›`
        : `‹key›${m}‹/key›`
    )
    .split(/(‹\/?(?:kw|str|var|key)›)/)
    .reduce((acc, part, i, arr) => {
      if (part === '‹kw›') return acc;
      if (part === '‹/kw›') return acc;
      if (part === '‹str›') return acc;
      if (part === '‹/str›') return acc;
      if (part === '‹var›') return acc;
      if (part === '‹/var›') return acc;
      if (part === '‹key›') return acc;
      if (part === '‹/key›') return acc;

      const prev = arr[i - 1];
      if (prev === '‹kw›')
        return [...acc, <span key={i} className="text-[#C678DD]">{part}</span>];
      if (prev === '‹str›')
        return [...acc, <span key={i} className="text-[#98C379]">{part}</span>];
      if (prev === '‹var›')
        return [...acc, <span key={i} className="text-[var(--accent)]">{part}</span>];
      if (prev === '‹key›')
        return [...acc, <span key={i} className="text-[#E06C75]">{part}</span>];

      return [...acc, <span key={i} className="text-[var(--text-secondary)]">{part}</span>];
    }, []);
};

export const Hero = () => {
  const { displayedLines, done, cursorLine } = useTypingEffect(codeLines, 30, 200);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-[#8B5CF6]/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* ─── Left Side (3 / 5) ─── */}
          <div className="lg:col-span-3 space-y-6">
            {/* Availability Badge */}
            <motion.div {...fadeUp(0)}>
              <Badge variant="success">
                <span className="h-2 w-2 rounded-full bg-[var(--success)] animate-pulse" />
                Open to Industrial Training Opportunities
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.15)}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="text-[var(--text-primary)]">HNDIT Student &</span>
              <br />
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Aspiring Software Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.25)}
              className="text-base md:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed"
            >
              HNDIT student at SLIATE with hands-on experience developing web and
              desktop applications through academic and personal projects. Interested
              in software development, full-stack technologies, and building practical
              application solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-3 pt-2">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button variant="primary" onClick={scrollToProjects}>
                  View My Projects <ArrowRight size={16} />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button variant="secondary" href="/resume.pdf?v=2" download="Fathima_Ashfa_Resume.pdf">
                  <FileText size={16} /> Download Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button variant="ghost" href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> GitHub ↗
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeUp(0.45)} className="flex items-center gap-4 pt-2">
              {[
                { href: contactInfo.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: contactInfo.github, Icon: Github, label: 'GitHub' },
                { href: `mailto:${contactInfo.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ─── Right Side (2 / 5) — Floating Terminal ─── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="animate-float">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-2xl shadow-[var(--accent)]/5 animate-glow">
                {/* Terminal top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--bg)]">
                  <motion.span
                    className="w-3 h-3 rounded-full bg-[#EF4444]/70"
                    whileHover={{ scale: 1.3 }}
                  />
                  <motion.span
                    className="w-3 h-3 rounded-full bg-[#F59E0B]/70"
                    whileHover={{ scale: 1.3 }}
                  />
                  <motion.span
                    className="w-3 h-3 rounded-full bg-[#10B981]/70"
                    whileHover={{ scale: 1.3 }}
                  />
                  <span className="ml-3 text-xs font-mono text-[var(--text-secondary)]">
                    developer.js
                  </span>
                </div>

                {/* Terminal content with typing effect */}
                <div className="p-5 font-mono text-[13px] leading-7 min-h-[280px]">
                  {codeLines.map((_, idx) => {
                    const text = displayedLines[idx];
                    if (text === undefined && idx > 0) return null;
                    const lineText = text || '';

                    return (
                      <div key={idx} className="flex">
                        {/* Line number */}
                        <span className="select-none text-[var(--text-secondary)]/30 w-6 text-right mr-4 text-[11px]">
                          {idx + 1}
                        </span>
                        <span>
                          {highlightCode(lineText)}
                          {/* Blinking cursor on current line */}
                          {!done && idx === cursorLine && (
                            <span className="animate-blink text-[var(--accent)] font-bold">▌</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Info Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-[var(--border)] bg-[var(--border)] overflow-hidden"
        >
          {[
            { label: 'Education', value: 'HNDIT – SLIATE' },
            { label: 'Focus', value: 'Software Development' },
            { label: 'Projects', value: '5+ Academic & Personal' },
            { label: 'Availability', value: 'Industrial Training' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-[var(--bg-card)] px-5 py-4 flex flex-col gap-1 group hover:bg-[var(--bg-secondary)] transition-colors"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
            >
              <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                {item.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
