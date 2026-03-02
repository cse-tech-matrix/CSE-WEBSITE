"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 40, suffix: "+", label: "Team Members", color: "from-primary to-accent-purple" },
  { end: 15, suffix: "+", label: "Events Organized", color: "from-accent-purple to-accent-pink" },
  { end: 800, suffix: "+", label: "Students Engaged", color: "from-accent-cyan to-primary" },
];

export default function StatsSection() {
  return (
    <section className="relative py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-premium rounded-3xl p-10 md:p-14 neon-glow-intense overflow-hidden"
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-accent-purple/10 to-accent-cyan/10 animate-pulse-slow" />

          {/* Decorative grid */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

          {/* Floating accent particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? "#6366f1" : "#a855f7",
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                className="relative"
              >
                {/* Glow behind counter */}
                <motion.div
                  className={`absolute -inset-4 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 blur-2xl`}
                  whileInView={{ opacity: 0.08 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.5 }}
                />
                <AnimatedCounter {...stat} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
