"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "glass-premium",
        "transition-all duration-500",
        hover && "hover:bg-white/[0.06] hover:border-primary/30",
        glow && "neon-glow-intense",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent-purple/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full animate-shimmer-slow" />
      </div>

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
