"use client";

import { motion } from "framer-motion";
import NeonButton from "@/components/ui/NeonButton";

export default function CTASection() {
  return (
    <section className="relative py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Glass bg */}
          <div className="absolute inset-0 glass-premium rounded-3xl" />

          {/* Static gradient border */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/20 via-accent-purple/20 to-accent-cyan/20" />
          <div className="absolute inset-[1px] bg-background rounded-3xl" />

          {/* Static background glows */}
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/[0.06] blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-accent-purple/[0.06] blur-[100px]" />

          <div className="absolute inset-0 bg-grid opacity-30 rounded-3xl pointer-events-none" />

          <div className="relative z-10">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4"
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
