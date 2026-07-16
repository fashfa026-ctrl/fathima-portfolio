import React from 'react';
import { SectionTitle } from './SectionTitle';
import { timeline } from '../../data/timeline';
import { Card } from './Card';
import { GraduationCap, Check } from 'lucide-react';

export const Timeline = () => {
  const { education, certifications } = timeline;

  return (
    <section id="experience" className="py-16 border-t border-[var(--border)]">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
        
        {/* SECTION 1 - EDUCATION */}
        <div>
          <SectionTitle title="Education" eyebrow="Academic History" className="mb-8" />
          <Card hoverEffect={false} className="space-y-6">
            <div className="flex justify-between items-start flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--accent)] flex items-center justify-center shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] font-sans">
                    {education.degree}
                  </h4>
                  <div className="text-xs text-[var(--text-secondary)] font-sans mt-0.5">
                    {education.institution}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] font-sans opacity-80">
                    {education.campus}
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border border-[var(--accent)] bg-[var(--accent-glow)] text-[var(--accent)] font-mono">
                {education.status}
              </span>
            </div>

            {/* Coursework Chips */}
            <div className="pt-4 border-t border-[var(--border)]/55 space-y-3">
              <h5 className="text-xs font-bold font-mono uppercase text-[var(--text-primary)] tracking-wide">
                Relevant Coursework
              </h5>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 text-xs font-mono border border-[var(--border)] rounded-md bg-[var(--bg)] text-[var(--text-secondary)]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* SECTION 2 - CERTIFICATIONS */}
        <div>
          <SectionTitle title="Certifications" eyebrow="Credentials & Studies" className="mb-8" />
          <div className="grid grid-cols-1 gap-4 h-full">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="flex flex-col justify-between p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-all duration-300 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded bg-[var(--success-glow)] text-[var(--success)] flex items-center justify-center" title="Verified Credential">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <h4 className="text-sm font-bold text-[var(--text-primary)] font-sans">
                        {cert.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-[var(--text-secondary)]">
                      {cert.date}
                    </span>
                  </div>
                  
                  <div className="text-[11px] text-[var(--text-secondary)] font-mono">
                    {cert.issuer}
                  </div>
                  
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans pt-1">
                    {cert.details}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border)]/35 flex justify-end">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1 font-mono"
                  >
                    View Credential ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
