import React from 'react';
import { motion } from 'motion/react';
import { STUDIO_FEATURES_DATA } from '@/data/about';
import { Sparkles, Camera, Cpu, Film } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#050507] relative border-t border-[#202025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#202025] pb-8 gap-6">
          <div>
            <span className="text-xs font-mono text-[#00e5ff] tracking-widest uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>05 // THE CINERA ECOSYSTEM & STUDIO</span>
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase text-[#F5F5F0] mt-2">
              ABOUT THE COLLECTIVE
            </h2>
          </div>
          <p className="max-w-lg text-base sm:text-lg text-[#C7CDD1] font-sans font-normal leading-relaxed">
            CINERA is an independent filmmaking community providing creators with professional cinema gear, editing bays, production support, and big-screen premieres.
          </p>
        </div>

        {/* 3 Ecosystem Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-[#0b0b0d] border border-[#202025] space-y-3">
            <div className="text-xs font-mono text-[#00e5ff] uppercase tracking-wider flex items-center gap-2 font-semibold">
              <Camera className="w-4 h-4" />
              <span>01 // PRODUCTION LAB</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#F5F5F0] uppercase">
              CINEMA GEAR & CREWS
            </h3>
            <p className="text-xs sm:text-sm text-[#C7CDD1] leading-relaxed">
              Equipping student productions with anamorphic glass, wireless focus systems, gimbal rigs, lighting packages, and sound recorders.
            </p>
          </div>

          <div className="p-6 bg-[#0b0b0d] border border-[#202025] space-y-3">
            <div className="text-xs font-mono text-[#00e5ff] uppercase tracking-wider flex items-center gap-2 font-semibold">
              <Cpu className="w-4 h-4" />
              <span>02 // POST-PRODUCTION</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#F5F5F0] uppercase">
              COLOR & EDITING SUITES
            </h3>
            <p className="text-xs sm:text-sm text-[#C7CDD1] leading-relaxed">
              Calibrated OLED reference monitors, DaVinci Resolve color suites, and 5.1 surround sound mixing environments for high-end post.
            </p>
          </div>

          <div className="p-6 bg-[#0b0b0d] border border-[#202025] space-y-3">
            <div className="text-xs font-mono text-[#00e5ff] uppercase tracking-wider flex items-center gap-2 font-semibold">
              <Film className="w-4 h-4" />
              <span>03 // EXHIBITION & FESTIVALS</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#F5F5F0] uppercase">
              SCREENINGS & DISTRIBUTION
            </h3>
            <p className="text-xs sm:text-sm text-[#C7CDD1] leading-relaxed">
              Premiere student short films on auditorium screens, submit to national indie film festivals, and publish 4K visual showcases.
            </p>
          </div>
        </div>

        {/* Feature Touchpoint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_FEATURES_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#0b0b0d] border border-[#202025] overflow-hidden flex flex-col justify-between hover:border-[#00e5ff]/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/85 text-[#00e5ff] font-mono text-[10px] uppercase border border-white/10">
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-display text-base sm:text-lg font-bold uppercase text-[#F5F5F0] group-hover:text-[#00e5ff] transition-colors break-words">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C7CDD1] leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-[#202025] text-[10px] sm:text-xs font-mono text-[#00e5ff] truncate">
                  <span>{item.specs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
