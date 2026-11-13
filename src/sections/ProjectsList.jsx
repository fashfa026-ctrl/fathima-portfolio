import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectModal } from '../components/projects/ProjectModal';
import { projects } from '../data/projects';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-20 border-t border-[var(--border)] scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section Title */}
          <SectionTitle
            title="Featured Projects"
            eyebrow="My Work"
            description="Real-world applications built with modern technologies"
          />

          {/* ── 3-Column Grid ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={item} className="flex">
                <ProjectCard
                  project={project}
                  onOpenModal={setSelectedProject}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Modal ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};
