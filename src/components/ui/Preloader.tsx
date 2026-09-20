"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  useEffect(() => {
    // Give enough time for the GIF animation cycle to complete smoothly
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden select-none"
      >
        {/* GIF on its own with no frame, border, shadow, or extra elements */}
        <div className="w-full max-w-lg md:max-w-2xl px-4 flex items-center justify-center">
          <img
            src="/loading.gif"
            alt="Club Médical New Era"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
