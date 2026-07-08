import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  isTransitioning?: boolean;
}

export function LoadingScreen({ onLoadingComplete, isTransitioning = false }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 600);
          return 100;
        }
        // Smoothly accelerate loading curve
        const increment = prev > 85 ? 1 : 2;
        return prev + increment;
      });
    }, 35);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isTransitioning ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
    }`}>
      
      {/* Massive subtle typography watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[22rem] font-black text-primary/[0.03] tracking-tighter select-none pointer-events-none">
        {progress.toString().padStart(3, '0')}
      </div>

      {/* Dynamic Galaxy Starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* We generate an array of 40 stars with random positions and animation delays */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() > 0.8 ? '2px' : '1px',
              height: Math.random() > 0.8 ? '2px' : '1px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              boxShadow: Math.random() > 0.5 ? '0 0 4px 1px rgba(56, 189, 248, 0.4)' : 'none'
            }}
          />
        ))}
      </div>

      {/* Technical Background Grid / Crosshairs */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>
      
      {/* Decorative technical corners */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-primary/20"></div>
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-primary/20"></div>
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-primary/20"></div>
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-primary/20"></div>

      <div className={`relative z-10 flex flex-col items-center justify-center w-full max-w-sm px-8 transition-all duration-1000 delay-100 ${
        isTransitioning ? 'opacity-0 translate-y-12' : 'opacity-100 translate-y-0'
      }`}>
        
        {/* Top elegant indicator */}
        <div className="mb-16 text-[10px] md:text-xs font-mono tracking-[0.4em] text-primary/40 uppercase flex items-center gap-6">
          <span className="w-12 h-[1px] bg-primary/20"></span>
          <span className="animate-pulse" style={{ animationDuration: '3s' }}>Sequence Initiated</span>
          <span className="w-12 h-[1px] bg-primary/20"></span>
        </div>

        {/* Minimalist Breathing Core with technical brackets */}
        <div className="relative w-40 h-40 mb-20 flex items-center justify-center group">
           
           {/* Corner Brackets */}
           <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-primary/40 transition-all duration-300"></div>
           <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-primary/40 transition-all duration-300"></div>
           <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-primary/40 transition-all duration-300"></div>
           <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-primary/40 transition-all duration-300"></div>

           {/* Ambient Glow */}
           <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
           
           {/* Expanding Center Orb */}
           <div 
             className="relative bg-gradient-to-tr from-cyan-400 via-primary to-blue-600 rounded-full transition-all duration-[50ms] ease-linear shadow-[0_0_60px_rgba(56,189,248,0.4)]"
             style={{ 
               width: `${20 + (progress / 100) * 45}px`, 
               height: `${20 + (progress / 100) * 45}px`,
               opacity: 0.5 + (progress / 100) * 0.5
             }}
           ></div>
           
           {/* Outer orbital trace 1 */}
           <div className="absolute inset-2 border border-primary/10 rounded-full animate-[spin_8s_linear_infinite]">
              <div className="absolute -top-[1px] left-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent -translate-x-1/2 shadow-[0_0_8px_#22d3ee]"></div>
           </div>
           
           {/* Outer orbital trace 2 (Reverse) */}
           <div className="absolute -inset-2 border border-primary/5 rounded-full animate-[spin_12s_linear_infinite_reverse]">
              <div className="absolute bottom-[10px] left-2 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_5px_#22d3ee]"></div>
           </div>
        </div>

        {/* Razor-thin Progress Track */}
        <div className="w-full relative h-[1px] bg-primary/20 overflow-hidden mb-6">
          <div 
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-75 ease-linear shadow-[0_0_10px_#38bdf8]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Footer info */}
        <div className="w-full flex justify-between items-center text-[10px] md:text-xs font-mono tracking-[0.2em] text-primary/40">
          <span className="uppercase flex flex-col gap-1">
            <span>{progress < 100 ? 'Establishing connection' : 'System online'}</span>
            <span className="text-[8px] opacity-50">T-{progress * 13} MS</span>
          </span>
          <span className="text-primary font-semibold text-lg">{progress.toString().padStart(3, '0')} %</span>
        </div>

      </div>
    </div>
  );
}