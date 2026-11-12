import React from 'react';
import { ExternalLink, Play, CheckCircle2, Clock } from 'lucide-react';
import { Github } from '../ui/BrandIcons';
import { motion } from 'framer-motion';
import { TechIcon } from '../ui/TechIcon';

export const ProjectCard = ({ project, onOpenModal }) => {
  const hasVideo = !!project.video;
  const hasThumbnail = !!project.thumbnail;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group flex flex-col h-full bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-xl hover:shadow-[var(--accent)]/5 cursor-pointer"
      onClick={() => onOpenModal(project)}
    >
      {/* ── Top: Screenshot / Thumbnail ── */}
      <div className="relative overflow-hidden aspect-[16/10] bg-[var(--bg-secondary)] shrink-0">
        {hasThumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          /* Styled placeholder */
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg)] to-[var(--bg-secondary)]">
            <div className="text-center px-4">
              <p
                className="text-lg font-bold text-[var(--text-primary)] leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {project.title.split('–')[0].trim()}
              </p>
              <p className="text-[10px] font-mono text-[var(--text-secondary)] mt-1">
                Screenshot coming soon
              </p>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-white text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
            Click to view
          </span>
        </div>

        {/* Top-right: Status Badge */}
        <div className="absolute top-3 right-3">
          {project.isCompleted ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500 text-white shadow-sm">
              <CheckCircle2 size={10} /> Completed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-amber-500 text-white shadow-sm">
              <Clock size={10} /> In Progress
            </span>
          )}
        </div>

        {/* Top-left: High-contrast Video badge */}
        {hasVideo && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/40 ring-1 ring-white/30 backdrop-blur-md">
              <Play size={10} fill="white" /> Video Demo
            </span>
          </div>
        )}
      </div>

      {/* ── Middle: Project Info ── */}
      <div className="flex flex-col flex-1 p-5 space-y-3">

        {/* Category */}
        <p className="text-[10px] font-mono font-semibold text-[var(--accent)] uppercase tracking-widest">
          {project.category}
        </p>

        {/* Title */}
        <h3
          className="text-base font-bold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent)] transition-colors"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech Icons */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <TechIcon name={tech} size={16} />
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-[11px] font-mono text-[var(--text-secondary)]">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* ── Bottom: Actions ── */}
      <div
        className="flex items-center justify-between gap-3 px-5 py-4 border-t border-[var(--border)]/50"
        onClick={(e) => e.stopPropagation()} // prevent modal open on link click
      >
        <div className="flex items-center gap-3.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Github size={13} /> GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ExternalLink size={13} /> Live Demo ↗
            </a>
          )}
        </div>

        {hasVideo && (
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-rose-500 hover:text-rose-400 transition-colors cursor-pointer"
          >
            <Play size={11} fill="currentColor" /> Watch Video
          </button>
        )}
      </div>
    </motion.div>
  );
};
