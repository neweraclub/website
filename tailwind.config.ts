import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#3B33FF",          // Deep Royal Blue
          violet: "#8B3EE1",        // Vibrant Violet
          magenta: "#E53888",       // Hot Magenta
          orange: "#F97316",        // Warm Sunset Orange
          yellow: "#FACC15",        // Golden Yellow
          space: "#070814",         // Deep Space-Black Canvas
          card: "rgba(255, 255, 255, 0.03)",
          cardHover: "rgba(255, 255, 255, 0.06)",
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #3B33FF 0%, #8B3EE1 25%, #E53888 50%, #F97316 75%, #FACC15 100%)',
        'brand-cta': 'linear-gradient(135deg, #F97316 0%, #FACC15 100%)',
        'brand-cta-hover': 'linear-gradient(135deg, #EA580C 0%, #EAB308 100%)',
        'brand-violet-magenta': 'linear-gradient(135deg, #8B3EE1 0%, #E53888 100%)',
        'brand-blue-violet': 'linear-gradient(135deg, #3B33FF 0%, #8B3EE1 100%)',
        'space-radial': 'radial-gradient(circle at 50% 30%, rgba(59, 51, 255, 0.12), rgba(139, 62, 225, 0.08) 40%, transparent 70%)',
      },
      boxShadow: {
        'brand-glow': '0 10px 30px -10px rgba(59, 51, 255, 0.45)',
        'sunset-glow': '0 10px 25px -5px rgba(249, 115, 22, 0.45)',
        'magenta-glow': '0 10px 25px -5px rgba(229, 56, 136, 0.4)',
        'violet-glow': '0 10px 25px -5px rgba(139, 62, 225, 0.4)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
