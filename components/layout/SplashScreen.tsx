"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

const TITLE = "TECH MATRIX";
const SCRAMBLE_CHARS = "01█▓▒░│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦";

function SplashMatrixText() {
  const [letters, setLetters] = useState<string[]>(
    Array(TITLE.length).fill("")
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const timers: NodeJS.Timeout[] = [];

    TITLE.split("").forEach((char, index) => {
      let iterations = 0;
      const interval = setInterval(() => {
        setLetters((prev) => {
          const next = [...prev];
          if (iterations < 12) {
            next[index] =
              SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          } else {
            next[index] = char;
            clearInterval(interval);
          }
          return next;
        });
        iterations++;
      }, 35 + index * 15);
      timers.push(interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  if (!ready) return null;

  return (
    <div className="flex justify-center flex-wrap gap-x-1 sm:gap-x-2">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className={
            letter === " "
              ? "w-3 sm:w-4"
              : "inline-block text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-gradient"
          }
          initial={{ opacity: 0, y: -20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.8 + i * 0.05,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          style={{
            textShadow:
              "0 0 30px rgba(99,102,241,0.3), 0 0 60px rgba(168,85,247,0.15)",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

export default function SplashScreen() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip if already shown this session
    if (sessionStorage.getItem("splash-shown") === "true") {
      setPhase("done");
      return;
    }

    // Lock scroll during splash
    document.body.style.overflow = "hidden";

    const revealTimer = setTimeout(() => setPhase("reveal"), 3000);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("splash-shown", "true");
      document.body.style.overflow = "";
    }, 3800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background overflow-hidden"
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
          {/* Grid background */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

          {/* Pulsing orb glow — desktop only */}
          {!isMobile && (
            <>
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[150px] pointer-events-none"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.06, 0.1, 0.06],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-[300px] h-[300px] rounded-full bg-accent-purple/[0.05] blur-[100px] pointer-events-none"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.05, 0.08, 0.05],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />

              {/* Decorative orbit rings */}
              {[180, 280, 380].map((size, i) => (
                <motion.div
                  key={size}
                  className="absolute border border-dashed rounded-full pointer-events-none"
                  style={{
                    width: size,
                    height: size,
                    borderColor: `rgba(99, 102, 241, ${0.08 - i * 0.02})`,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: i % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.2 + i * 0.1 },
                    scale: { duration: 0.6, delay: 0.2 + i * 0.1 },
                    rotate: {
                      duration: 20 + i * 10,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                />
              ))}
            </>
          )}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Dept logo with spring spin-in */}
            <motion.div
              className="relative w-24 h-24 sm:w-28 sm:h-28"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
            >
              <img
                src="/logo/dept-logo.png"
                alt="CSE Dept Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                style={{ mixBlendMode: "screen" }}
              />
            </motion.div>

            {/* Scramble text title */}
            <SplashMatrixText />

            {/* Subtitle fade-in */}
            <motion.p
              className="text-sm sm:text-base text-slate-400 tracking-widest uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              CSE Students Association
            </motion.p>

            {/* Animated gradient progress bar */}
            <motion.div
              className="w-48 sm:w-56 h-0.5 bg-white/5 rounded-full overflow-hidden mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent-purple to-accent-cyan rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
          </div>
        </motion.div>
    </AnimatePresence>
  );
}
