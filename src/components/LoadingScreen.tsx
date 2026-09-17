import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    tl.to('.loading-text', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
    })
    .to('.loading-text', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power4.in',
      delay: 0.5,
    })
    .to('.loading-screen', {
      yPercent: -100,
      duration: 1,
      ease: 'expo.inOut',
    });

  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-[200] bg-foreground flex items-center justify-center text-background">
      <div className="overflow-hidden flex gap-4 text-4xl md:text-6xl font-display font-bold">
        {['T', 'I', 'A', 'N', 'S', 'A', 'P', 'U', 'T', 'R', 'A'].map((char, i) => (
          <span 
            key={i} 
            className="loading-text opacity-0 translate-y-12 inline-block"
            style={{ margin: char === '—' ? '0 10px' : 0 }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
