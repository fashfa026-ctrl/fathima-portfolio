import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';
import { Github } from '../ui/BrandIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { TechIcon } from '../ui/TechIcon';

export const ProjectModal = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const images = project?.images || [];
  const hasVideo = !!project?.video;
  const totalSlides = images.length + (hasVideo ? 1 : 0);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, totalSlides]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const goNext = useCallback(() => {
    setIsPlayingVideo(false);
    setActiveIndex((i) => (i + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setIsPlayingVideo(false);
    setActiveIndex((i) => (i - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const isVideoSlide = hasVideo && activeIndex === images.length;

  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Panel */}
        <motion.div
          className="relative z-10 w-full max-w-3xl bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* ── Header ── */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] shrink-0">
            <div>
              <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-0.5">
                {project.category}
              </p>
              <h2 className="text-lg font-bold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* ── Scrollable Content ── */}
          <div className="overflow-y-auto flex-1">

            {/* ── Main Media Area ── */}
            <div className="relative bg-black aspect-[16/9] group">
              {isVideoSlide ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  {isPlayingVideo ? (
                    <video
                      src={project.video}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <>
                      {/* Video thumbnail placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--bg-secondary)] to-black/50">
                        <span className="text-[var(--text-secondary)] text-sm font-mono">Demo Video</span>
                      </div>
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="relative z-10 w-16 h-16 rounded-full bg-[var(--accent)]/90 hover:bg-[var(--accent)] flex items-center justify-center transition-all shadow-lg shadow-[var(--accent)]/30 hover:scale-105"
                      >
                        <Play size={26} fill="white" className="text-white ml-1" />
                      </button>
                    </>
                  )}
                </div>
              ) : images.length > 0 ? (
                <img
                  src={images[activeIndex]}
                  alt={`${project.title} screenshot ${activeIndex + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              ) : (
                /* Placeholder when no images */
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg)]">
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {project.title.split('–')[0].trim()}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] font-mono">Screenshots coming soon</p>
                  </div>
                </div>
              )}

              {/* Nav arrows (only if multiple slides) */}
              {totalSlides > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>

            {/* ── Thumbnail Strip ── */}
            {totalSlides > 1 && (
              <div className="flex items-center gap-2.5 px-6 py-3 border-b border-[var(--border)] bg-[var(--bg-secondary)]/50 overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveIndex(i); setIsPlayingVideo(false); }}
                    className={`shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                      activeIndex === i && !isVideoSlide ? 'border-[var(--accent)] ring-2 ring-[var(--accent)]/30' : 'border-[var(--border)] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
                {hasVideo && (
                  <button
                    onClick={() => { setActiveIndex(images.length); setIsPlayingVideo(true); }}
                    className={`shrink-0 h-10 px-3.5 rounded-lg border-2 font-mono text-xs font-semibold flex items-center gap-2 transition-all ${
                      isVideoSlide
                        ? 'border-red-500 bg-red-600 text-white shadow-lg shadow-red-600/40 ring-2 ring-red-500/40'
                        : 'border-red-500/50 bg-red-950/40 text-red-400 hover:bg-red-900/60 hover:border-red-400 hover:text-white'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isVideoSlide ? 'bg-white text-red-600' : 'bg-red-500 text-white'}`}>
                      <Play size={10} fill="currentColor" className="ml-0.5" />
                    </span>
                    <span>Demo Video</span>
                  </button>
                )}
              </div>
            )}

            {/* ── Project Info ── */}
            <div className="px-6 py-5 space-y-5">
              {/* Description */}
              <div>
                <h3 className="text-xs font-mono font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-2">
                  Project Overview
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-mono font-semibold text-[var(--text-secondary)] uppercase tracking-widest mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono border border-[var(--border)] rounded-md bg-[var(--bg)] text-[var(--text-primary)]"
                    >
                      <TechIcon name={tech} size={14} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[var(--border)]/50">
                {hasVideo && (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveIndex(images.length);
                      setIsPlayingVideo(true);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-600/25 transition-all hover:scale-[1.02]"
                  >
                    <Play size={15} fill="currentColor" />
                    {isVideoSlide && isPlayingVideo ? 'Playing Demo Video' : 'Watch Demo Video'}
                  </button>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-all"
                  >
                    <Github size={15} /> GitHub Repository
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--accent)] text-white hover:opacity-90 transition-all"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
