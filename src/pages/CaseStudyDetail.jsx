import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ArrowLeft, Globe, Layout, Database, ShieldAlert, Cpu } from 'lucide-react';
import { Github } from '../components/ui/BrandIcons';

export default function CaseStudyDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center bg-[var(--bg)] font-mono text-sm text-[var(--text-secondary)]">
        <div className="text-center space-y-4">
          <div>Case Study not found</div>
          <Link to="/" className="text-[var(--accent)] hover:underline">Return to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dot-grid min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-6 space-y-16">
        
        {/* Back navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
          <ArrowLeft size={16} /> Back to dashboard
        </Link>

        {/* 1. Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Badge variant="primary">{project.category}</Badge>
            <span className="text-xs font-mono text-[var(--text-secondary)]">{project.status}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-sans leading-tight">
            {project.title}
          </h1>

          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl font-sans">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map(tech => (
              <span key={tech} className="px-2.5 py-1 text-xs font-mono border border-[var(--border)] rounded-md bg-[var(--bg-card)] text-[var(--text-primary)]">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" href={project.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> View Repository
            </Button>
            {project.demo && (
              <Button variant="secondary" href={project.demo} target="_blank" rel="noopener noreferrer">
                <Globe size={16} /> Live Demo
              </Button>
            )}
          </div>
        </motion.div>

        {/* 2. Project Overview */}
        <section className="space-y-6 border-t border-[var(--border)] pt-12">
          <SectionTitle title="Project Overview" eyebrow="The Context" />
          <div className="grid md:grid-cols-3 gap-6">
            <Card hoverEffect={false} className="md:col-span-2">
              <h4 className="text-xs font-bold font-mono uppercase text-[var(--text-primary)] mb-3">Problem Statement</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-sans">{project.problem}</p>
            </Card>
            <Card hoverEffect={false} className="space-y-4">
              <div>
                <h4 className="text-xs font-bold font-mono uppercase text-[var(--text-primary)] mb-2">Objective</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">{project.objective}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono uppercase text-[var(--text-primary)] mb-2">Target Users</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">{project.targetUsers}</p>
              </div>
            </Card>
          </div>
        </section>

        {/* 3. Technologies Used */}
        <section className="space-y-6 border-t border-[var(--border)] pt-12">
          <SectionTitle title="Technologies Used" eyebrow="The Stack" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(project.techDetails).map(([layer, list]) => (
              <div key={layer} className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] space-y-3">
                <h4 className="text-xs font-bold font-mono uppercase text-[var(--accent)]">{layer}</h4>
                <ul className="space-y-1.5">
                  {list.map(tech => (
                    <li key={tech} className="text-xs font-semibold text-[var(--text-primary)] font-mono">{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Key Features */}
        <section className="space-y-6 border-t border-[var(--border)] pt-12">
          <SectionTitle title="Key Features" eyebrow="Core Mechanics" />
          <div className="grid md:grid-cols-3 gap-6">
            {project.features.map((feat, idx) => (
              <Card key={idx} hoverEffect={true} className="space-y-2">
                <div className="text-xs font-mono text-[var(--accent)] font-bold">0{idx + 1}</div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] font-sans">{feat.title}</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">{feat.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. System Architecture */}
        <section className="space-y-6 border-t border-[var(--border)] pt-12">
          <SectionTitle title="System Architecture" eyebrow="Flow & Logic" />
          <Card hoverEffect={false} className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--accent)] shrink-0 flex items-center justify-center">
                <Layout size={18} />
              </div>
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-[var(--text-primary)] font-sans">Frontend Tier</h5>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">{project.architecture.client}</p>
              </div>
            </div>

            {project.architecture.server && (
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--accent)] shrink-0 flex items-center justify-center">
                  <Cpu size={18} />
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-[var(--text-primary)] font-sans">Application Server Tier</h5>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">{project.architecture.server}</p>
                </div>
              </div>
            )}

            <div className="flex gap-4 items-start">
              <div className="p-2 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--accent)] shrink-0 flex items-center justify-center">
                <Database size={18} />
              </div>
              <div className="space-y-1">
                <h5 className="text-sm font-bold text-[var(--text-primary)] font-sans">Persistence Layer</h5>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">{project.architecture.database}</p>
              </div>
            </div>
          </Card>
        </section>

        {/* 6. Database Design */}
        <section className="space-y-6 border-t border-[var(--border)] pt-12">
          <SectionTitle title="Database Design" eyebrow="Schema Structure" />
          <div className="grid md:grid-cols-3 gap-6">
            {project.dbDesign.map((table, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] space-y-4">
                <div className="border-b border-[var(--border)] pb-2">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] font-sans">{table.name}</h4>
                  <span className="text-[10px] text-[var(--text-secondary)] font-mono">{table.description}</span>
                </div>
                <ul className="space-y-2">
                  {table.fields.map(field => (
                    <li key={field} className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg)] p-1.5 rounded border border-[var(--border)]/50">
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Challenges & Solutions */}
        <section className="space-y-6 border-t border-[var(--border)] pt-12">
          <SectionTitle title="Challenges & Solutions" eyebrow="Problem Solving" />
          <div className="space-y-4">
            {project.challenges.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] space-y-3">
                <div className="flex items-center gap-2 text-[var(--accent)]">
                  <ShieldAlert size={18} />
                  <h4 className="text-sm font-bold font-sans">Challenge: {item.challenge}</h4>
                </div>
                <div className="pl-6 border-l-2 border-[var(--border)]">
                  <span className="text-[10px] uppercase font-mono text-[var(--text-secondary)] block mb-1">Solution</span>
                  <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Project Gallery (Conditional) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-6 border-t border-[var(--border)] pt-12">
            <SectionTitle title="Project Gallery" eyebrow="Screenshots" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[16/10] rounded-xl border border-dashed border-[var(--border)] flex flex-col items-center justify-center p-4 text-center bg-[var(--bg-card)]">
                <span className="text-xs font-bold text-[var(--text-primary)]">Desktop Layout</span>
                <span className="text-[10px] text-[var(--text-secondary)] mt-1 font-mono">1920x1080 Placeholder</span>
              </div>
              <div className="aspect-[4/3] rounded-xl border border-dashed border-[var(--border)] flex flex-col items-center justify-center p-4 text-center bg-[var(--bg-card)]">
                <span className="text-xs font-bold text-[var(--text-primary)]">Tablet Layout</span>
                <span className="text-[10px] text-[var(--text-secondary)] mt-1 font-mono">768x1024 Placeholder</span>
              </div>
              <div className="aspect-[9/16] max-w-[180px] mx-auto w-full rounded-xl border border-dashed border-[var(--border)] flex flex-col items-center justify-center p-4 text-center bg-[var(--bg-card)]">
                <span className="text-xs font-bold text-[var(--text-primary)]">Mobile Layout</span>
                <span className="text-[10px] text-[var(--text-secondary)] mt-1 font-mono">375x812 Placeholder</span>
              </div>
            </div>
          </section>
        )}

        {/* 9. Project Outcome */}
        {project.outcome && (
          <section className="space-y-6 border-t border-[var(--border)] pt-12">
            <SectionTitle title={project.outcomeTitle || "Project Outcome"} eyebrow="Retrospective" />
            <Card hoverEffect={false}>
              <ul className="space-y-3">
                {project.outcome.map((item, idx) => (
                  <li key={idx} className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-sans flex items-start gap-2.5">
                    <span className="text-[var(--accent)] mt-1.5 shrink-0 select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        )}

        {/* Back navigation footer */}
        <div className="flex items-center justify-between pt-6 border-t border-[var(--border)]">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <ArrowLeft size={16} /> Back to dashboard
          </Link>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            GitHub Repo ↗
          </a>
        </div>

      </div>
    </div>
  );
}
