import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Github } from '../components/ui/BrandIcons';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { contactInfo } from '../data/contact';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-6">
        
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Badge variant="success">
            <span className="h-2 w-2 rounded-full bg-[var(--success)] animate-pulse" />
            {contactInfo.availability}
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight font-sans"
        >
          Building clean, <br className="hidden sm:inline" />
          <span className="text-[var(--accent)]">production-ready</span> systems.
        </motion.h1>

        {/* Lede / Intro Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed font-sans"
        >
          HNDIT student at SLIATE seeking an industrial training opportunity, with hands-on experience developing full-stack web applications and desktop software using React, Node.js, Express.js, MongoDB, PHP, Java, and .NET.
        </motion.p>

        {/* Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <Button variant="primary" to="/case-study/careerhub">
            View CareerHub Case Study <ArrowRight size={16} />
          </Button>

          <Button variant="secondary" href="/resume.pdf?v=2" download="Fathima_Ashfa_Resume.pdf">
            <FileText size={16} /> Download Resume
          </Button>

          <Button variant="ghost" href={contactInfo.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> GitHub ↗
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
