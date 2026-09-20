"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export const BackgroundOrbs: React.FC = () => {
  // Generate subtle light-mode ambient particle dust
  const particles = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: (i * 37) % 100,
      y: (i * 43) % 100,
      size: (i % 3) + 1.5,
      duration: 16 + (i % 8),
      delay: (i % 6) * 1.5,
      opacity: i % 3 === 0 ? 0.3 : 0.15,
      color: i % 3 === 0 ? "#8B3EE1" : i % 3 === 1 ? "#3B33FF" : "#F97316",
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none bg-gradient-to-b from-[#FAF6EE] via-[#F6EFE4] to-[#F0E8DB]">
      {/* Primary Soft Radial Glow: Royal Blue Atmospheric Mist */}
      <motion.div
        animate={{
          x: [0, 30, -25, 0],
          y: [0, -25, 25, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="absolute -top-36 left-1/4 w-[750px] h-[750px] rounded-full bg-gradient-to-br from-[#3B33FF]/06 via-[#8B3EE1]/04 to-transparent blur-[140px]"
      />

      {/* Soft Violet Accent Halo */}
      <motion.div
        animate={{
          x: [0, -35, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.12, 0.94, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-24 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#8B3EE1]/05 via-[#E53888]/03 to-transparent blur-[130px]"
      />

      {/* Warm Sunset Ambient Touch */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -20, 25, 0],
          scale: [0.95, 1.08, 0.96, 0.95],
        }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-10 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#E53888]/04 via-[#F97316]/03 to-transparent blur-[120px]"
      />

      {/* Minimal Light-Mode Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#3B33FF 1px, transparent 1px), linear-gradient(90deg, #3B33FF 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating Microscopic Particle Dust */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [`${p.y}%`, `${(p.y + 12) % 100}%`, `${p.y}%`],
            x: [`${p.x}%`, `${(p.x + 6) % 100}%`, `${p.x}%`],
            opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            backgroundColor: p.color,
            boxShadow: `0 0 6px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
};
