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
              I transitioned to full-stack JavaScript (MERN) and desktop solutions to build complete software products. Through my academic and personal projects, I learned to design REST API endpoints, validate request payloads, model relational and document databases, and build desktop billing applications. I am actively seeking an industrial training opportunity to apply my engineering foundations.
            </p>
          </div>
        </div>

        {/* Tech Stack Grid - Option B (Balanced with Details) */}
        <div>
          <SectionTitle title="Tech Stack" eyebrow="Technologies & Tools" className="mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Skill categories */}
            {Object.entries(skills).map(([category, list]) => {
              const categoryNames = {
                languages: "Languages",
                frontend: "Frontend",
                backend: "Backend",
                desktop: "Desktop Dev",
                database: "Databases",
                tools: "Tools & Platforms"
              };
              return (
                <div 
                  key={category} 
                  className="p-3.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]/60 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-[11px] font-bold tracking-wider text-[var(--accent)] uppercase font-mono mb-2 pb-1.5 border-b border-[var(--border)]/40 flex items-center justify-between">
                      <span>// {categoryNames[category] || category}</span>
                      <span className="text-[9px] text-[var(--text-secondary)] font-mono opacity-80">{list.length}</span>
                    </h4>
                    <div className="space-y-1.5">
                      {list.map((skill) => (
                        <div 
                          key={skill.name} 
                          className="p-2 rounded-lg border border-[var(--border)]/40 bg-[var(--bg)] hover:border-[var(--accent)] transition-all duration-200"
                        >
                          <div className="text-xs font-semibold text-[var(--text-primary)] font-mono leading-none">
                            {skill.name}
                          </div>
                          <div className="text-[10px] text-[var(--text-secondary)] font-sans mt-1 leading-tight">
                            {skill.level}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};
