import React from 'react';

export const ViewfinderOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 md:p-8 select-none text-[10px] md:text-xs font-mono tracking-widest text-[#f4f4f0]/40">
      {/* Top Corners & Status */}
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 border-t-2 border-l-2 border-[#00e5ff]/80"></div>
          <span className="flex items-center space-x-1.5 text-[#00e5ff]">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse"></span>
            <span className="font-semibold tracking-wider">REC</span>
          </span>
          <span className="hidden sm:inline">00:24:16:02</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span>RAW 4K DCI</span>
          <span>FPS 24</span>
          <span>ISO 800</span>
          <div className="w-3 h-3 border-t-2 border-r-2 border-[#00e5ff]/80"></div>
        </div>
      </div>

      {/* Center Reticle / Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-[#00e5ff] rounded-full"></div>
        </div>
      </div>

      {/* Bottom Corners & Framing Specs */}
      <div className="flex justify-between items-end">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 border-b-2 border-l-2 border-[#00e5ff]/80"></div>
          <span>CINERA // 35MM ANAMORPHIC</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <span>ASPECT [ 2.39 : 1 ]</span>
          <div className="w-3 h-3 border-b-2 border-r-2 border-[#00e5ff]/80"></div>
        </div>
      </div>
    </div>
  );
};
