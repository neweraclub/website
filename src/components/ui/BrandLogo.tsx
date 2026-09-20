import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
  inverted?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  showSubtitle = true,
  inverted = false,
  className = "",
}) => {
  const sizeMap = {
    sm: { width: 140, height: 36, sub: "text-[9px]" },
    md: { width: 180, height: 47, sub: "text-[10px]" },
    lg: { width: 230, height: 60, sub: "text-xs" },
    xl: { width: 280, height: 73, sub: "text-sm" },
  };

  const dim = sizeMap[size];

  return (
    <div className={`flex flex-col select-none group ${className}`}>
      <div className="relative inline-flex items-center">
        {/* Soft back-glow if inverted or on dark backgrounds */}
        {inverted && (
          <div className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10 transform scale-105 pointer-events-none" />
        )}

        <div
          className={`relative flex items-center transition-transform group-hover:scale-105 duration-300 ${
            inverted ? "p-1.5 rounded-xl bg-white/90 backdrop-blur-md shadow-lg" : ""
          }`}
        >
          <Image
            src="/logo.png"
            alt="Club Médical New Era Logo"
            width={dim.width}
            height={dim.height}
            className="object-contain h-auto"
            priority
          />
        </div>
      </div>

      {showSubtitle && (
        <span
          className={`font-extrabold tracking-widest uppercase transition-colors mt-1 ${
            inverted
              ? "text-slate-300 group-hover:text-brand-yellow"
              : "text-slate-500 group-hover:text-brand-blue"
          } ${dim.sub}`}
        >
          Club Médical New Era
        </span>
      )}
    </div>
  );
};
