import React from 'react';
import { ShieldCheck, Database, Zap, Cpu } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Card } from './Card';

export const Highlights = () => {
  const highlights = [
    {
      icon: <ShieldCheck className="text-[var(--accent)]" size={24} />,
      title: "API Design & Security",
      description: "Implementing token authorization rules, modular request controllers, and robust security middleware validation layers."
    },
    {
      icon: <Database className="text-[var(--accent)]" size={24} />,
      title: "Database Modeling",
      description: "Designing normalized SQL schema tables with entity relationships and structured mongoose document schemas."
    },
    {
      icon: <Zap className="text-[var(--accent)]" size={24} />,
      title: "Asynchronous Workflows",
      description: "Managing API route states, dynamic client fetching, and clean error control wrappers."
    },
    {
      icon: <Cpu className="text-[var(--accent)]" size={24} />,
      title: "OOP Systems Programming",
      description: "Applying abstraction, inheritance, encapsulation, and interface structures in Java and C# coursework."
    }
  ];

  return (
    <section id="highlights" className="py-16 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="Technical Capabilities" eyebrow="Engineering Strengths" />
        
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="flex gap-4 items-start">
              <div className="p-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-[var(--text-primary)] font-sans">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
