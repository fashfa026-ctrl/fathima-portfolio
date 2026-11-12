import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { SkillsSection } from '../sections/SkillsSection';
import { ProjectsList } from '../sections/ProjectsList';
import { CertificatesSection } from '../sections/CertificatesSection';
import { Workflow } from '../components/ui/Workflow';
import { EducationSection } from '../sections/EducationSection';
import { Contact } from '../sections/Contact';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="dot-grid min-h-screen">
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsList />
      <CertificatesSection />
      <Workflow />
      <EducationSection />
      <Contact />
    </div>
  );
}
