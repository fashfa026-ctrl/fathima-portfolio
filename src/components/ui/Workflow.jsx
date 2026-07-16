import React from 'react';
import { SectionTitle } from './SectionTitle';

export const Workflow = () => {
  const steps = [
    {
      num: "01",
      title: "Model Data Structures",
      description: "Define entities, schema indices, database normalization tables, and relational constraints first to create a stable foundation."
    },
    {
      num: "02",
      title: "Establish REST APIs",
      description: "Construct controllers, secure router endpoints, and validate middleware handling checks before coding frontend UIs."
    },
    {
      num: "03",
      title: "Integrate Component UI",
      description: "Build state-driven modular client views and bind them directly to live API routers using asynchronous request states."
    },
    {
      num: "04",
      title: "Validate & Test Logic",
      description: "Perform CRUD operations audit checks, check exception edge cases, and inspect interface responsiveness across devices."
    }
  ];

  return (
    <section id="workflow" className="py-16 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="Development Workflow" eyebrow="Engineering Standards" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="space-y-3 relative group">
              <span className="text-2xl font-bold font-mono text-[var(--accent)] block">
                {step.num}
              </span>
              <h4 className="text-base font-semibold text-[var(--text-primary)] font-sans">
                {step.title}
              </h4>
              <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
