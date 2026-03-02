"use client";

import { motion } from "framer-motion";
import NeonButton from "@/components/ui/NeonButton";

export default function CTASection() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Layered glass bg */}
          <div className="absolute inset-0 glass-premium rounded-3xl" />

          {/* Animated gradient border */}
          <div className="absolute -inset-px rounded-3xl overflow-hidden">
            <motion.div
              className="w-full h-full rounded-3xl"
              style={{
                background: "linear-gradient(90deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3), rgba(6,182,212,0.3), rgba(236,72,153,0.3), rgba(99,102,241,0.3))",
                backgroundSize: "300% 100%",
              }}
              animate={{ backgroundPosition: ["0% 50%", "300% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <div className="absolute inset-[1px] bg-background rounded-3xl" />

          {/* Background orbs */}
          <motion.div
            className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/8 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-accent-purple/8 blur-[100px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, delay: 3 }}
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-30 rounded-3xl pointer-events-none" />

          <div className="relative z-10">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to{" "}
              <span className="text-gradient">Build the Future?</span>
            </motion.h2>
            <motion.p
              className="text-slate-400 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Join the CSE Association and be part of a community that pushes
              boundaries, creates innovation, and shapes the tech leaders of
              tomorrow.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <NeonButton href="/contact" variant="primary" size="lg">
                Get in Touch
              </NeonButton>
              <NeonButton href="/team" variant="outline" size="lg">
                Meet the Team
              </NeonButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
