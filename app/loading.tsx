"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      {/* Ambient glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

      {/* Logo pulse */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hexagon loader */}
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 border-2 border-primary/40 rounded-xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 border-2 border-accent-purple/40 rounded-lg"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 border-2 border-accent-cyan/40 rounded-md"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold font-heading text-gradient">TM</span>
          </div>
        </div>

        {/* Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm font-mono text-primary tracking-[0.3em] uppercase">
            Loading
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent-purple to-accent-cyan rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
