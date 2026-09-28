import { useState } from 'react';
import { FilmGrainOverlay } from '@/components/cinematic/FilmGrainOverlay';
import { CinematicCursor } from '@/components/cinematic/CinematicCursor';
import { GradientMenu } from '@/components/layout/GradientMenu';
import { HeroSection } from '@/components/sections/HeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { DisciplinesSection } from '@/components/sections/DisciplinesSection';
import { FilmShowcaseSection } from '@/components/sections/FilmShowcaseSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { AboutSection } from '@/components/sections/AboutSection';
import { JoinSection } from '@/components/sections/JoinSection';
import { Footer } from '@/components/layout/Footer';

import { FilmDetailModal } from '@/components/modals/FilmDetailModal';
import { EventRSVPModal } from '@/components/modals/EventRSVPModal';
import { JoinCollectiveModal } from '@/components/modals/JoinCollectiveModal';

import { Film, EventItem } from '@/types';

export function App() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050507] text-[#f4f4f0] relative font-sans selection:bg-[#00e5ff]/30 selection:text-[#00e5ff]">
      {/* 35mm Film Grain Noise Layer */}
      <FilmGrainOverlay />

      {/* Cinema Focus Reticle Custom Cursor */}
      <CinematicCursor />

      {/* Navigation Header */}
      <GradientMenu onOpenJoinModal={() => setIsJoinModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenJoinModal={() => setIsJoinModalOpen(true)} />
        <ManifestoSection />
        <DisciplinesSection />
        <FilmShowcaseSection onSelectFilm={(film) => setSelectedFilm(film)} />
        <EventsSection onRSVP={(evt) => setSelectedEvent(evt)} />
        <CommunitySection />
        <AboutSection />
        <JoinSection onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <FilmDetailModal
        film={selectedFilm}
        onClose={() => setSelectedFilm(null)}
      />

      <EventRSVPModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <JoinCollectiveModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
}

export default App;
