import React from 'react';
import { motion } from 'motion/react';
import { ViewfinderOverlay } from '../cinematic/ViewfinderOverlay';
import { ShimmerText } from '../ui/ShimmerText';
import { ShinyButton } from '../ui/ShinyButton';
import { ArrowDown, Film, Play, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenJoinModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="hero" className="relative min-h-screen min-h-[850px] w-full flex items-center justify-center overflow-hidden bg-[#050507] pt-24 pb-16">
      
      {/* Cinematic Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&q=80&w=2000"
          alt="Cinematic film set background"
          className="w-full h-full object-cover opacity-15 scale-105 filter brightness-75 contrast-125"
        />
        {/* Deep Black Film Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-[#050507]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050507]/90 to-[#050507]" />
        
        {/* Soft Aqua Atmospheric Illumination */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[300px] bg-[#00e5ff]/12 blur-[160px] rounded-full" />
      </div>

      {/* Viewfinder Camera HUD */}
      <ViewfinderOverlay />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Top Micro Label */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#0b0b0d]/90 border border-[#00e5ff]/30 backdrop-blur-md rounded-full mb-10 text-xs font-mono text-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-widest uppercase">INDEPENDENT FILM COLLECTIVE // VOL. 01</span>
        </motion.div>

        {/* PROMINENT INTEGRATED CINERA LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mb-10 flex items-center justify-center group"
        >
          {/* Subtle Ambient Radial Aura behind Logo */}
          <div className="absolute inset-0 w-full h-full bg-[#00e5ff]/20 blur-[50px] rounded-full scale-125 opacity-70 pointer-events-none" />
          
          <img
            src="/logo.png"
            alt="CINERA Brand Logo"
            className="w-[200px] sm:w-[240px] md:w-[280px] h-auto object-contain relative z-10 logo-screen-blend filter drop-shadow-[0_0_35px_rgba(0,229,255,0.35)] transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* Display Tagline Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold uppercase tracking-tight text-[#F5F5F0] leading-[0.95] break-words">
            <ShimmerText text="STORIES IN MOTION." />
          </h1>
        </motion.div>

        {/* Supporting Copy — High Readability (#C7CDD1, 18-20px) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-[#C7CDD1] font-sans font-normal leading-relaxed mb-10 px-2"
        >
          A filmmaking collective for creators who see stories everywhere. Writing, directing, shooting, and cutting independent cinema.
        </motion.p>

        {/* Call-To-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a href="#films" className="w-full sm:w-auto">
            <ShinyButton variant="primary" className="w-full sm:w-auto">
              <Play className="w-4 h-4 fill-current text-[#050507]" />
              <span>EXPLORE FILMS</span>
            </ShinyButton>
          </a>

          <ShinyButton onClick={onOpenJoinModal} variant="secondary" className="w-full sm:w-auto">
            <Film className="w-4 h-4 text-[#00e5ff]" />
            <span>JOIN THE COLLECTIVE</span>
          </ShinyButton>
        </motion.div>

        {/* Bottom Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 flex flex-col items-center space-y-2 text-[#9CA3AF] hover:text-[#00e5ff] transition-colors"
        >
          <a href="#manifesto" className="flex flex-col items-center text-[11px] font-mono tracking-widest uppercase">
            <span>SCROLL TO ENTER MANIFESTO</span>
            <ArrowDown className="w-4 h-4 mt-2 animate-bounce text-[#00e5ff]" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
