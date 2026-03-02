"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

interface GradientOrbProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function GradientOrb({
  className = "",
  color = "from-primary/20 to-accent-purple/20",
  size = 400,
}: GradientOrbProps) {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${color} blur-[100px] pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
