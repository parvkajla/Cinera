import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DISCIPLINES_DATA } from '@/data/disciplines';
import { 
  Clapperboard, Camera, FileText, Video, 
  UserCheck, Scissors, Headphones, Eye 
} from 'lucide-react';

export const DisciplinesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(DISCIPLINES_DATA[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clapperboard': return <Clapperboard className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Camera': return <Camera className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'FileText': return <FileText className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Video': return <Video className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Scissors': return <Scissors className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Headphones': return <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Eye': return <Eye className="w-5 h-5 sm:w-6 sm:h-6" />;
      default: return <Clapperboard className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section id="disciplines" className="py-28 sm:py-36 bg-[#050507] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 border-b border-[#202025] pb-8 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono text-[#00e5ff] tracking-widest uppercase">
              01 // CORE CRAFTS & DISCIPLINES
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold uppercase text-[#F5F5F0] mt-2 break-words">
              WHAT WE CREATE
            </h2>
          </div>
          <p className="max-w-lg text-base sm:text-lg text-[#C7CDD1] font-sans font-normal leading-relaxed">
            Eight interconnected cinematic crafts. Whether you sculpt light, write dialogue, direct actors, or mix spatial sound—CINERA provides gear and crews.
          </p>
        </div>

        {/* Disciplines Grid with High Contrast Typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {DISCIPLINES_DATA.map((disc, idx) => {
            const isSelected = disc.id === activeId;
            return (
              <motion.div
                key={disc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setActiveId(disc.id)}
                className={`group relative p-6 bg-[#0b0b0d] border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[285px] overflow-hidden ${
                  isSelected 
                    ? 'border-[#00e5ff] bg-[#121215] shadow-[0_0_25px_rgba(0,229,255,0.15)] -translate-y-1' 
                    : 'border-[#202025] hover:border-[#00e5ff]/60 hover:bg-[#0e0e12] hover:-translate-y-1'
                }`}
              >
                {/* Top Corner Icon & Index */}
                <div className="flex justify-between items-start">
                  <div className={`p-2.5 transition-colors ${
                    isSelected ? 'bg-[#00e5ff] text-[#050507]' : 'bg-[#121215] text-[#00e5ff] group-hover:bg-[#00e5ff] group-hover:text-[#050507]'
                  }`}>
                    {getIcon(disc.iconName)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#00e5ff]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Craft Title & Description */}
                <div className="mt-5 space-y-2">
                  <h3 className="font-display font-extrabold text-xl uppercase text-[#F5F5F0] tracking-tight group-hover:text-[#00e5ff] transition-colors break-words">
                    {disc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8C0C5] leading-relaxed line-clamp-2">
                    {disc.tagline}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="mt-5 pt-4 border-t border-[#202025] flex flex-wrap gap-1.5">
                  {disc.skills.slice(0, 2).map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 bg-[#121215] border border-[#202025] text-[10px] font-mono text-[#E5E7EB] uppercase tracking-wider truncate max-w-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Aqua Top Accent Bar on Selection */}
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#00e5ff]" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
