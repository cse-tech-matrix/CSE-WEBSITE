"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

export default function FloatingShapes() {
  const isMobile = useIsMobile();

  // Show only 2 shapes on mobile (no dots), all 5 + dots on desktop
  const shapes = [
    { size: 300, x: "10%", y: "20%", color: "from-primary/5 to-accent-purple/5", duration: 25 },
    { size: 200, x: "80%", y: "60%", color: "from-accent-cyan/5 to-primary/5", duration: 30 },
    { size: 150, x: "60%", y: "10%", color: "from-accent-pink/5 to-accent-purple/5", duration: 20 },
    { size: 250, x: "20%", y: "70%", color: "from-primary/5 to-accent-cyan/5", duration: 35 },
    { size: 180, x: "45%", y: "40%", color: "from-accent-amber/3 to-accent-pink/3", duration: 28 },
  ];

  const visibleShapes = isMobile ? shapes.slice(0, 2) : shapes;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {visibleShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-[80px]`}
          style={{
            width: isMobile ? shape.size * 0.6 : shape.size,
            height: isMobile ? shape.size * 0.6 : shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle moving dots — desktop only */}
      {!isMobile &&
        [...Array(6)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 16}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
    </div>
  );
}
