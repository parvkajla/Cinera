import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StaggerTestimonials } from '../ui/StaggerTestimonials';
import { Film, Camera, ShieldCheck, Headphones, Scissors, Palette, Users } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('DIRECTOR');

  const roles = [
    { name: 'DIRECTOR', icon: Film, desc: 'Guide narrative vision, lead table reads, and direct live set blocking.' },
    { name: 'WRITER', icon: Users, desc: 'Craft Fountain scripts, develop complex character arcs, and workshop scenes.' },
    { name: 'ACTOR', icon: ShieldCheck, desc: 'Bring emotional depth on camera and build dramatic ensemble chemistry.' },
    { name: 'EDITOR', icon: Scissors, desc: 'Cut raw clips in DaVinci Resolve and construct narrative pacing.' },
    { name: 'CINEMATOGRAPHER', icon: Camera, desc: 'Rig cinema camera packages, set up anamorphic glass, and sculpt key lights.' },
    { name: 'SOUND DESIGNER', icon: Headphones, desc: 'Record clean production boom audio and score atmospheric background tracks.' },
    { name: 'COLORIST', icon: Palette, desc: 'Grade 35mm film looks and balance skin tones for high-end festival screens.' },
  ];

  const currentRoleObj = roles.find((r) => r.name === selectedRole) || roles[0];
  const IconComponent = currentRoleObj.icon;

  return (
    <section id="community" className="py-28 sm:py-36 bg-[#08080a] relative border-t border-[#202025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-mono text-[#00e5ff] tracking-widest uppercase">
            04 // INCLUSIVE CREATIVE COLLECTIVE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase text-[#F5F5F0] break-words">
            YOUR ROLE DOESN'T DEFINE YOUR STORY.
          </h2>
          <p className="text-base sm:text-lg text-[#C7CDD1] font-sans font-normal leading-relaxed px-2">
            Engineers, writers, designers, and artists united by visual storytelling. Every discipline finds a crew at CINERA.
          </p>
        </div>

        {/* Roles Responsive Selector Grid (High Contrast Button Text #D1D5DB) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 mb-12">
          {roles.map((r) => {
            const isSelected = r.name === selectedRole;
            return (
              <button
                key={r.name}
                onClick={() => setSelectedRole(r.name)}
                className={`py-3.5 sm:py-4 px-2 font-display text-[11px] sm:text-xs font-bold tracking-wider uppercase text-center border transition-all min-w-0 flex items-center justify-center break-words overflow-hidden ${
                  isSelected
                    ? 'bg-[#00e5ff] text-[#050507] border-[#00e5ff] font-extrabold shadow-[0_0_20px_rgba(0,229,255,0.25)]'
                    : 'bg-[#0b0b0d] text-[#D1D5DB] border-[#202025] hover:border-[#00e5ff]/60 hover:text-[#F5F5F0]'
                }`}
              >
                <span className="truncate max-w-full">{r.name}</span>
              </button>
            );
          })}
        </div>

        {/* Role Brief Info Box with Smooth Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoleObj.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto bg-[#0b0b0d] border border-[#202025] p-6 sm:p-8 mb-20 text-center flex flex-col items-center justify-center space-y-3"
          >
            <div className="p-3 bg-[#121215] border border-[#00e5ff]/40 text-[#00e5ff] rounded-full">
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-[#00e5ff] tracking-widest uppercase">
              CRAFT PROFILE // {currentRoleObj.name}
            </span>
            <p className="text-base sm:text-lg text-[#C7CDD1] font-sans max-w-lg leading-relaxed">
              {currentRoleObj.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Stagger Testimonials / Community Voices Section */}
        <div className="mt-8">
          <StaggerTestimonials />
        </div>

      </div>
    </section>
  );
};
