"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/lib/useIsMobile";

const TITLE = "TECH MATRIX";
const SCRAMBLE_CHARS = "01█▓▒░│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦";

function MatrixText() {
  const [letters, setLetters] = useState<string[]>(Array(TITLE.length).fill(""));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const timers: NodeJS.Timeout[] = [];

    TITLE.split("").forEach((char, index) => {
      let iterations = 0;
      const interval = setInterval(() => {
        setLetters((prev) => {
          const next = [...prev];
          if (iterations < 14) {
            next[index] = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          } else {
            next[index] = char;
            clearInterval(interval);
          }
          return next;
        });
        iterations++;
      }, 40 + index * 20);
      timers.push(interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  if (!ready) return null;

  return (
    <div className="flex justify-center flex-wrap gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className={cn(
            "inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
            "font-extrabold font-heading tracking-tighter",
            letter === " " ? "w-4 sm:w-6 md:w-8" : "text-gradient"
          )}
          initial={{ opacity: 0, y: -30, scale: 0.5, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{
            delay: i * 0.07,
            type: "spring",
            stiffness: 250,
            damping: 18,
          }}
          whileHover={{
            scale: 1.2,
            textShadow: "0 0 60px rgba(99,102,241,0.6)",
            transition: { duration: 0.15 },
          }}
          style={{
            textShadow: "0 0 40px rgba(99,102,241,0.25), 0 0 80px rgba(168,85,247,0.1)",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

/* Animated orbiting rings */
function OrbitRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[200, 320, 440].map((size, i) => (
        <motion.div
          key={size}
          className="absolute border border-dashed rounded-full"
          style={{
            width: size,
            height: size,
            borderColor: `rgba(99, 102, 241, ${0.08 - i * 0.02})`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 15, repeat: Infinity, ease: "linear" }}
        />
      ))}
      {/* Extra outer pulsing ring */}
      <motion.div
        className="absolute rounded-full border border-primary/5"
        style={{ width: 560, height: 560 }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* Glowing orb decoration */
function GlowingOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.06, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-purple/[0.04] blur-[100px] pointer-events-none"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.04, 0.06, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-cyan/[0.03] blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </>
  );
}

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      {!isMobile && <GlowingOrbs />}
      {!isMobile && <OrbitRings />}

      {/* Floating particles — varied sizes and colors */}
      {Array.from({ length: isMobile ? 8 : 35 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 1 + Math.random() * 3,
            height: 1 + Math.random() * 3,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? "rgba(99,102,241,0.5)" : i % 3 === 1 ? "rgba(168,85,247,0.4)" : "rgba(6,182,212,0.4)",
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 120],
            x: [0, (Math.random() - 0.5) * 80],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-premium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Dept. of Computer Science & Engineering
          </span>
        </motion.div>

        {/* Title */}
        <div className="mb-6">
          <MatrixText />
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="space-y-2"
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            CSE Students Association
          </motion.p>
          <motion.p
            className="text-base sm:text-lg text-primary/80 font-medium font-mono"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            Nandha Engineering College, Erode
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent-purple text-white font-medium shadow-lg shadow-primary/25 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300"
            >
              Explore More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-primary/40 text-slate-300 hover:text-white hover:border-primary/70 hover:bg-primary/5 font-medium transition-all duration-300"
            >
              View Events
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-slate-600 uppercase tracking-[0.25em] font-mono">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
