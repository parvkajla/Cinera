import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030305] border-t border-[#202025] text-[#80808a] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#202025]/80">
          
          {/* Brand Info & Logo */}
          <div className="space-y-4 md:col-span-1">
            <a href="#hero" className="flex items-center space-x-3 group">
              <img
                src="/logo.png"
                alt="CINERA Logo"
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-sm text-[#f4f4f0] uppercase tracking-widest group-hover:text-[#00e5ff] transition-colors">
                  CINERA
                </span>
                <span className="text-[10px] font-mono text-[#00e5ff] uppercase tracking-widest">
                  STORIES IN MOTION.
                </span>
              </div>
            </a>

            <p className="text-xs leading-relaxed text-[#80808a]">
              An independent student filmmaking collective & visual storytelling community. Writing, directing, shooting, and cutting cinema.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#f4f4f0] mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#hero" className="hover:text-[#00e5ff] transition-colors">HOME</a>
              </li>
              <li>
                <a href="#films" className="hover:text-[#00e5ff] transition-colors">FILMS</a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#00e5ff] transition-colors">EVENTS</a>
              </li>
              <li>
                <a href="#community" className="hover:text-[#00e5ff] transition-colors">COMMUNITY</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00e5ff] transition-colors">ABOUT THE COLLECTIVE</a>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#f4f4f0] mb-4">
              CONNECT
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center space-x-2 hover:text-[#00e5ff] transition-colors"
                >
                  <FaInstagram className="w-4 h-4 text-[#00e5ff]" />
                  <span>Instagram @cinera.collective</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center space-x-2 hover:text-[#00e5ff] transition-colors"
                >
                  <FaYoutube className="w-4 h-4 text-[#00e5ff]" />
                  <span>YouTube CINERA Cinema</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center space-x-2 hover:text-[#00e5ff] transition-colors"
                >
                  <FaLinkedin className="w-4 h-4 text-[#00e5ff]" />
                  <span>LinkedIn / CINERA</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Location */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#f4f4f0] mb-4">
              HEADQUARTERS
            </h4>
            <div className="text-xs font-mono space-y-1 text-[#80808a]">
              <p className="text-[#f4f4f0] font-semibold">BLACKBOX STUDIO & GEAR LAB</p>
              <p>Creative Arts Hub, Suite 104</p>
              <p>Open Daily: 10:00 - 22:00 IST</p>
              <p className="text-[#00e5ff] pt-2">contact@cinera-collective.org</p>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#80808a]">
          <p>© 2026 CINERA — Student Filmmaking & Visual Storytelling Community</p>
          <p className="mt-2 sm:mt-0 text-[#00e5ff]">STORIES IN MOTION // ALL RIGHTS RESERVED</p>
        </div>

      </div>
    </footer>
  );
};
