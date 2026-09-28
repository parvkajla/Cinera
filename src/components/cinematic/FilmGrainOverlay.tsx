import React from 'react';

export const FilmGrainOverlay: React.FC = () => {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.035] film-grain mix-blend-overlay"
      aria-hidden="true"
    />
  );
};
