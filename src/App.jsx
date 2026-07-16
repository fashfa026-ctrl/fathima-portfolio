import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

const Home = lazy(() => import('./pages/Home'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));

const Loading = () => (
  <div className="flex h-screen w-screen items-center justify-center bg-[var(--bg)] text-[var(--text-secondary)] font-mono text-sm">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />
      Loading modules...
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text-primary)] transition-all duration-300">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/case-study/:id" element={<CaseStudyDetail />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
