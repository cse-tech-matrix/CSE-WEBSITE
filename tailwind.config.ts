import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        heading: ["var(--font-orbitron)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        border: "rgba(255, 255, 255, 0.08)",
        background: "#030014",
        foreground: "#f1f5f9",
        primary: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
        },
        accent: {
          cyan: "#06b6d4",
          purple: "#a855f7",
          pink: "#ec4899",
          amber: "#f59e0b",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          hover: "rgba(255, 255, 255, 0.06)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 30s linear infinite",
        "spin-slower": "spin 50s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "glow-intense": "glowIntense 3s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        shimmer: "shimmer 2s linear infinite",
        "shimmer-slow": "shimmer 4s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "morph": "morph 8s ease-in-out infinite",
        "aurora": "aurora 6s ease-in-out infinite",
        "ripple": "ripple 2s ease-out infinite",
        "magnetic": "magnetic 4s ease-in-out infinite",
        "text-reveal": "textReveal 1s ease-out forwards",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "rotate-glow": "rotateGlow 6s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(99,102,241,0.2), 0 0 20px rgba(99,102,241,0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(99,102,241,0.4), 0 0 60px rgba(99,102,241,0.2)" },
        },
        glowIntense: {
          "0%": { boxShadow: "0 0 10px rgba(99,102,241,0.3), 0 0 40px rgba(168,85,247,0.15), 0 0 80px rgba(6,182,212,0.1)" },
          "100%": { boxShadow: "0 0 30px rgba(99,102,241,0.5), 0 0 80px rgba(168,85,247,0.25), 0 0 120px rgba(6,182,212,0.15)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(99, 102, 241, 0.3)" },
          "33%": { borderColor: "rgba(168, 85, 247, 0.5)" },
          "66%": { borderColor: "rgba(6, 182, 212, 0.4)" },
        },
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
        },
        aurora: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg) scale(1)", opacity: "0.5" },
          "33%": { transform: "translateY(-20px) rotate(2deg) scale(1.05)", opacity: "0.8" },
          "66%": { transform: "translateY(10px) rotate(-1deg) scale(0.98)", opacity: "0.6" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        magnetic: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "25%": { transform: "translateY(-5px) scale(1.02)" },
          "75%": { transform: "translateY(3px) scale(0.98)" },
        },
        textReveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        rotateGlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
