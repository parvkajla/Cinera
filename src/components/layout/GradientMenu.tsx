import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PlusCircle } from 'lucide-react';

interface GradientMenuProps {
  onOpenJoinModal: () => void;
}

export const GradientMenu: React.FC<GradientMenuProps> = ({ onOpenJoinModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section intersection detection
      const sections = ['hero', 'films', 'events', 'community', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero', id: 'hero' },
    { name: 'FILMS', href: '#films', id: 'films' },
    { name: 'EVENTS', href: '#events', id: 'events' },
    { name: 'COMMUNITY', href: '#community', id: 'community' },
    { name: 'ABOUT', href: '#about', id: 'about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#050507]/90 backdrop-blur-md border-b border-[#202025]/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-gradient-to-b from-[#050507]/95 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* CINERA LOGO */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="CINERA Logo" 
              className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 logo-screen-blend" 
            />
            <div className="flex flex-col">
              <span className="font-display font-black tracking-widest text-xs sm:text-sm text-[#F5F5F0] uppercase group-hover:text-[#00e5ff] transition-colors">
                CINERA
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-[#9CA3AF] uppercase">
                STORIES IN MOTION
              </span>
            </div>
          </a>

          {/* DESKTOP NAV LINKS (High contrast light gray #D1D5DB) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#0b0b0d]/90 border border-[#202025] rounded-full px-5 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 font-display text-xs font-bold tracking-widest uppercase transition-colors group ${
                    isActive ? 'text-[#00e5ff]' : 'text-[#D1D5DB] hover:text-[#F5F5F0]'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Electric Cyan Active / Hover Indicator */}
                  <span className={`absolute bottom-1 left-4 right-4 h-[2px] bg-[#00e5ff] transition-transform duration-300 transform origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* CTA & MOBILE TOGGLE */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenJoinModal}
              className="relative inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 bg-[#00e5ff] hover:bg-[#22d3ee] text-[#050507] font-display text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.2)] group cursor-pointer whitespace-nowrap"
            >
              <PlusCircle className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
              <span>JOIN THE COLLECTIVE</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 text-[#F5F5F0] hover:text-[#00e5ff] focus:outline-none"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050507]/98 border-b border-[#202025] px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-base font-extrabold tracking-widest text-[#F5F5F0] hover:text-[#00e5ff] transition-colors py-2 border-b border-[#202025]/60 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-[#00e5ff]">→</span>
                </a>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenJoinModal();
                  }}
                  className="w-full py-3 bg-[#00e5ff] text-[#050507] font-display text-xs font-bold tracking-widest uppercase text-center border border-[#00e5ff]"
                >
                  JOIN THE COLLECTIVE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
