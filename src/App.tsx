import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import CustomCursor from './components/ui/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let animationFrame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    (window as any).lenis = lenis;

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';

    const elements = document.querySelectorAll(
      'section, .reveal, .project, .skill, .experience-item, .contact-item'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    setTimeout(() => {
      document.body.classList.add('page-ready');
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <>
      <CustomCursor />

      {loading && (
        <LoadingScreen
          onComplete={() => setLoading(false)}
        />
      )}

      <div
        className={`site-wrapper ${
          loading ? 'site-loading' : 'site-loaded'
        }`}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;