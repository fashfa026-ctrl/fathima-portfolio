import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Github } from '../components/ui/BrandIcons';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { projects } from '../data/projects';
import { Button } from '../components/ui/Button';

export const ProjectsList = () => {
  const featuredProject = projects.find(p => p.id === 'careerhub');
  const otherProjects = projects.filter(p => p.id !== 'careerhub');

  return (
    <section id="projects" className="py-16 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="Projects & Case Studies" eyebrow="Engineering Builds" />

        {/* Flagship Featured Project Card (CareerHub Case Study Preview) */}
        {featuredProject && (
          <div className="mb-12">
            <Card className="relative overflow-hidden group">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <Badge variant="primary">{featuredProject.category}</Badge>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                    {featuredProject.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProject.stack.map(tech => (
                      <span key={tech} className="px-2 py-0.5 text-[11px] font-mono border border-[var(--border)] rounded bg-[var(--bg)] text-[var(--text-primary)]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button variant="primary" to={`/case-study/${featuredProject.id}`}>
                      Read Technical Case Study <ArrowRight size={16} />
                    </Button>
                    <Button variant="secondary" href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> View Code Base ↗
                    </Button>
                  </div>
                </div>

                {/* Structured UI Mockup Side Panel */}
                <div className="w-full lg:w-80 border border-[var(--border)] rounded-lg bg-[var(--bg)] p-4 font-mono text-xs text-[var(--text-secondary)] space-y-3">
                  <div className="flex items-center justify-between border-b border-[var(--border)]/50 pb-2">
                    <span className="font-bold text-[var(--text-primary)]">CareerHub System Flow</span>
                    <span className="text-[var(--success)]">● Codebase Ready</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 rounded bg-[var(--bg-card)] border border-[var(--border)]/30">
                      <div className="font-semibold text-[var(--text-primary)]">1. Auth Middleware</div>
                      <div className="mt-1 text-[10px]">Verifies client JWT cookie validation.</div>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-card)] border border-[var(--border)]/30">
                      <div className="font-semibold text-[var(--text-primary)]">2. Express REST Router</div>
                      <div className="mt-1 text-[10px]">Executes controllers based on candidate/recruiter roles.</div>
                    </div>
                    <div className="p-2 rounded bg-[var(--bg-card)] border border-[var(--border)]/30">
                      <div className="font-semibold text-[var(--text-primary)]">3. MongoDB Atlas</div>
                      <div className="mt-1 text-[10px]">Performs database schema CRUD executions.</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Other Projects Grid */}
        <h4 className="text-sm font-bold tracking-wider text-[var(--text-primary)] uppercase font-mono mb-6">
          // Coursework Projects
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map(project => (
            <Card key={project.id} className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="default">{project.category}</Badge>
                  <span className="text-[10px] font-mono text-[var(--text-secondary)]">{project.status}</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-1.5 py-0.5 text-[10px] font-mono border border-[var(--border)] rounded bg-[var(--bg)] text-[var(--text-secondary)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 mt-6 border-t border-[var(--border)]/40">
                <Link 
                  to={`/case-study/${project.id}`} 
                  className="text-xs font-semibold text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
                >
                  {project.isCompleted === false ? "Preview Case Study" : "Technical Case Study"} <ArrowRight size={12} />
                </Link>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
                >
                  GitHub ↗
                </a>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
