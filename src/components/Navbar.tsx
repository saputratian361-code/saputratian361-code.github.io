import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['WORK', 'ABOUT', 'EXPERIENCE', 'SKILLS', 'CONTACT'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
      className={`fixed top-0 left-0 w-full z-[90] px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent'
      }`}
    >
      <div className="font-display font-bold text-xl md:text-2xl tracking-tighter interactive">
        TS 
      </div>

      <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        {links.map((link) => (
          <li key={link}>
            <a 
              href={`#${link.toLowerCase()}`} 
              className="relative interactive group"
            >
              <span className="inline-block transition-colors duration-300 group-hover:text-accent">{link}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu Toggle - Simplified for now */}
      <button className="md:hidden font-medium interactive">
        MENU
      </button>
    </motion.nav>
  );
}
