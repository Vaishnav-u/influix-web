import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navigation = ({ onNavigate, currentPage = 'home' }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // Auto-hide header on scroll down, show on scroll up for a "smart" feel
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 md:top-6 w-full z-[9999] px-2 md:px-6"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 py-2 md:py-4 
                      bg-white/5 backdrop-blur-xl border border-white/10 
                      rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
      >

        <div
          onClick={() => onNavigate && onNavigate('home')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="text-white font-jeffith stamp text-lg md:text-xl tracking-tighter">
            Influix
          </span>
        </div>


        <nav className="flex items-center gap-3 md:gap-10">
          {['Services', 'Case Studies', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => {
                if (item === 'Case Studies') {
                  e.preventDefault();
                  if (onNavigate) onNavigate('case-studies');
                } else if (item === 'Contact') {
                  e.preventDefault();
                  if (onNavigate) onNavigate('contact');
                } else if (onNavigate && currentPage !== 'home') {
                  e.preventDefault();
                  onNavigate('home');
                  setTimeout(() => {
                    const el = document.querySelector(`#${item.toLowerCase()}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                (currentPage === 'case-studies' && item === 'Case Studies') ||
                (currentPage === 'contact' && item === 'Contact')
                  ? 'text-[#ffcc00] font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>


        <a
          href="https://calendly.com/production-influixindia/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block group relative overflow-hidden px-4 md:px-6 py-2 rounded-full bg-white text-black text-[9px] md:text-[10px] font-bold tracking-wider md:tracking-widest uppercase transition-all duration-500 md:hover:pr-10"
        >
          <span className="relative z-10 whitespace-nowrap">Book a Call</span>
          <span className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-all duration-500">
            ↗
          </span>
        </a>
      </div>
    </motion.header>
  );
};
export default Navigation;