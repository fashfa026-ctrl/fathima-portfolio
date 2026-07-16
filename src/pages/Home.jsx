import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Highlights } from '../components/ui/Highlights';
import { ProjectsList } from '../sections/ProjectsList';
import { Workflow } from '../components/ui/Workflow';
import { Timeline } from '../components/ui/Timeline';
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
      <Highlights />
      <ProjectsList />
      <Workflow />
      <Timeline />
      <Contact />
    </div>
  );
}
