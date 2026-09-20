"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const { progress, active } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Guarantee minimum visible time so user enjoys the loading GIF without abrupt flash
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  // Smoothly interpolate display progress
  useEffect(() => {
    const target = Math.max(progress, minTimeElapsed ? 100 : 35);
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return Math.min(prev + 3, target);
      });
    }, 20);
    return () => clearInterval(interval);
  }, [progress, minTimeElapsed]);

  // Complete when progress reaches 100 and min time elapsed
  useEffect(() => {
    if (minTimeElapsed && displayProgress >= 100 && !isFinished) {
      setIsFinished(true);
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [minTimeElapsed, displayProgress, isFinished, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF6EE] via-[#F6EFE4] to-[#F0E8DB] overflow-hidden select-none px-6"
        >
          {/* Ambient Glows */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#3B33FF]/10 via-[#8B3EE1]/08 to-[#F97316]/08 blur-[120px] pointer-events-none" />

          {/* Central Branded Loading GIF */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-sm sm:max-w-md flex flex-col items-center relative z-10"
          >
            {/* The user's loading.gif asset */}
            <div className="w-48 sm:w-64 h-auto mb-6 flex items-center justify-center">
              <img
                src="/loading.gif"
                alt="Club Médical New Era Loading"
                className="w-full h-auto object-contain drop-shadow-sm"
              />
            </div>

            {/* Dynamic Progress Indicator */}
            <div className="w-56 sm:w-72 space-y-2.5 text-center">
              {/* Progress Track */}
              <div className="h-1.5 w-full bg-[#E8DFD1] rounded-full overflow-hidden p-0.5 border border-[#E4DAC8]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#3B33FF] via-[#8B3EE1] to-[#F97316]"
                  style={{ width: `${displayProgress}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>

              {/* Status and Percentage */}
              <div className="flex items-center justify-between text-[11px] font-mono font-bold tracking-widest text-slate-700">
                <span className="uppercase text-[10px] text-slate-500">
                  {displayProgress < 100 ? "Syncing 3D Clinical Models" : "Ready"}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3EE1] to-[#E53888]">
                  {Math.round(displayProgress)}%
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
