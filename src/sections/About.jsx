import React from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { skills } from '../data/skills';

export const About = () => {
  return (
    <section id="about" className="py-16 border-t border-[var(--border)]">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
        
        {/* Profile Narrative (About Me) */}
        <div>
          <SectionTitle title="Academic Foundations & Stack" eyebrow="The Developer Journey" className="mb-6" />
          <div className="space-y-4 text-[var(--text-secondary)] text-sm md:text-base leading-relaxed font-sans">
            <p>
              My coding journey started with designing client interfaces using HTML, CSS, and basic JavaScript. To solidify my understanding of software logic, I enrolled in the Higher National Diploma in IT (HNDIT) program at SLIATE.
            </p>
            <p>
              Coursework introduced me to the rules of object-oriented programming in Java and C#, as well as building relational database applications with MySQL. This academic grounding taught me to structure objects cleanly and model normalised databases.
            </p>
            <p>
              I transitioned to full-stack Javascript (MERN) to build complete web products. Through my final-year project, I learned to design REST API endpoints, validate request payloads, model document relations, and manage application states. I am looking for a software development internship to apply my engineering foundations.
            </p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div>
          <SectionTitle title="Tech Stack" eyebrow="Technologies & Tools" className="mb-6" />
          <div className="space-y-6">
            
            {/* Skill categories */}
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className="space-y-2">
                <h4 className="text-xs font-bold tracking-wider text-[var(--text-primary)] uppercase font-mono">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <div 
                      key={skill.name} 
                      title={skill.level}
                      className="inline-flex flex-col items-start px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] cursor-default hover:border-[var(--accent)] transition-colors duration-200"
                    >
                      <span className="text-xs font-semibold text-[var(--text-primary)] font-mono">{skill.name}</span>
                      <span className="text-[10px] text-[var(--text-secondary)] mt-0.5">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};
