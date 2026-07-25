import React, { useState } from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { contactInfo } from '../data/contact';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from '../components/ui/BrandIcons';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault(); // Prevent navigating mailto link when clicking copy button
    e.stopPropagation();
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-16 pb-24 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* SECTION 3 - CONTACT (Left Column) */}
          <div className="space-y-6">
            <SectionTitle title="Get In Touch" eyebrow="Collaboration" className="mb-4" />
            <p className="text-base text-[var(--text-secondary)] leading-relaxed font-sans">
              I am currently seeking a Software Engineering Internship where I can contribute to real-world projects, strengthen my technical skills, and continue learning from experienced developers.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="primary" href="/resume.pdf" download="Fathima_Ashfa_Resume.pdf">
                Download Resume
              </Button>
              <Button variant="secondary" href={`mailto:${contactInfo.email}`}>
                Send Email
              </Button>
            </div>
          </div>

          {/* Right Column Card */}
          <div className="space-y-4">
            <Card hoverEffect={false} className="space-y-4">
              
              {/* Clickable & Copyable Email Row */}
              <div 
                className="flex items-center justify-between p-3 rounded-lg border border-[var(--border)] bg-[var(--bg)]"
              >
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="p-2 rounded bg-[var(--accent-glow)] text-[var(--accent)] flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-mono text-[var(--text-secondary)]">Email</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)] font-mono">{contactInfo.email}</span>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="cursor-pointer p-2 rounded-md hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all flex items-center justify-center"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} className="text-[var(--success)]" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Clickable Phone Row */}
              <a 
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] transition-colors duration-200"
              >
                <div className="p-2 rounded bg-[var(--accent-glow)] text-[var(--accent)] flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-[var(--text-secondary)]">Phone</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)] font-mono">{contactInfo.phone}</span>
                </div>
              </a>

              {/* Location Row */}
              <div className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border)] bg-[var(--bg)]">
                <div className="p-2 rounded bg-[var(--accent-glow)] text-[var(--accent)] flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-[var(--text-secondary)]">Location</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)] font-sans">{contactInfo.location}</span>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] transition-colors duration-200"
                >
                  <Linkedin size={18} className="text-[var(--text-secondary)] shrink-0" />
                  <span className="text-xs font-semibold font-mono text-[var(--text-primary)]">LinkedIn ↗</span>
                </a>
                <a 
                  href={contactInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] transition-colors duration-200"
                >
                  <Github size={18} className="text-[var(--text-secondary)] shrink-0" />
                  <span className="text-xs font-semibold font-mono text-[var(--text-primary)]">GitHub ↗</span>
                </a>
              </div>

            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
