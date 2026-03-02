"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 40, suffix: "+", label: "Team Members", color: "from-primary to-accent-purple" },
  { end: 15, suffix: "+", label: "Events Organized", color: "from-accent-purple to-accent-pink" },
  { end: 700, suffix: "+", label: "Students Engaged", color: "from-accent-cyan to-primary" },
];

export default function StatsSection() {
  return (
    <section className="relative py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-premium rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 neon-glow overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <AnimatedCounter {...stat} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
