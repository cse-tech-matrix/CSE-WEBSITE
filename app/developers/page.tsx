"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Code2, Palette, Server, Terminal } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import PageTransition from "@/components/layout/PageTransition";
import GradientOrb from "@/components/effects/GradientOrb";
import { developers } from "@/data/team";

const roleIcons: Record<string, typeof Code2> = {
  "Lead Developer": Code2,
  "Principal Designer": Palette,
  "Technical Architect": Server,
};

const roleColors: Record<string, { gradient: string; glow: string; accent: string }> = {
  "Lead Developer": {
    gradient: "from-cyan-400 to-blue-500",
    glow: "rgba(6, 182, 212, 0.3)",
    accent: "#06b6d4",
  },
  "Principal Designer": {
    gradient: "from-pink-400 to-purple-500",
    glow: "rgba(236, 72, 153, 0.3)",
    accent: "#ec4899",
  },
  "Technical Architect": {
    gradient: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.3)",
    accent: "#10b981",
  },
};

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan via-primary to-accent-purple z-[60] origin-left"
      style={{ scaleX }}
    />
  );
}

export default function DevelopersPage() {
  return (
    <>
      <ScrollProgress />
      <FloatingShapes />
      <Navbar />
      <PageTransition>
        <main className="relative z-10 pt-24">
          {/* Hero */}
          <section className="relative py-14 px-4 text-center overflow-hidden">
            <GradientOrb className="-top-40 left-1/2 -translate-x-1/2" size={600} color="from-accent-cyan/20 to-primary/20" />

            {/* Floating code symbols */}
            {["</>", "{}", "=>", "//", "**", "[]", "&&", "||"].map((sym, i) => (
              <motion.span
                key={i}
                className="absolute text-primary/10 font-mono text-lg sm:text-2xl select-none pointer-events-none"
                style={{
                  top: `${10 + Math.random() * 80}%`,
                  left: `${5 + Math.random() * 90}%`,
                }}
                animate={{
                  y: [0, (Math.random() - 0.5) * 60],
                  opacity: [0.05, 0.15, 0.05],
                  rotate: [0, (Math.random() - 0.5) * 20],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                {sym}
              </motion.span>
            ))}

            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-premium mb-8"
              >
                <Terminal className="w-4 h-4 text-accent-cyan" />
                <span className="text-xs font-mono text-accent-cyan tracking-wider uppercase">
                  Built with passion
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="text-gradient-cyan">Meet the Builders</span>
              </motion.h1>
              <motion.p
                className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                The team behind this digital experience — crafting every pixel, animation, and line of code
              </motion.p>
            </div>
          </section>

          {/* Developer Cards */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {developers.map((dev, i) => {
                  const Icon = roleIcons[dev.role || ""] || Code2;
                  const colors = roleColors[dev.role || ""] || roleColors["Lead Developer"];

                  return (
                    <motion.div
                      key={dev.name}
                      initial={{ opacity: 0, y: 60, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.2, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <TiltCard className="h-full">
                        <motion.div
                          whileHover={{ y: -12 }}
                          transition={{ duration: 0.4 }}
                          className="group h-full"
                        >
                          <div className="relative overflow-hidden rounded-3xl glass-premium hover:border-white/[0.15] transition-all duration-700 h-full">
                            {/* Animated top accent */}
                            <div className={`h-1 bg-gradient-to-r ${colors.gradient}`} />

                            {/* Holographic background sweep */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>

                            {/* Background glow */}
                            <div
                              className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                              style={{ background: `radial-gradient(circle, ${colors.glow}, transparent)` }}
                            />

                            <div className="relative z-10 p-8 sm:p-10 flex flex-col items-center text-center">
                              {/* Avatar with animated ring */}
                              <motion.div
                                className="relative mb-8"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              >
                                {/* Conic gradient ring */}
                                <motion.div
                                  className="absolute -inset-3 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                                  style={{
                                    background: `conic-gradient(from 0deg, ${colors.accent}, transparent 30%, ${colors.accent} 60%, transparent 90%, ${colors.accent})`,
                                  }}
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                />
                                <div className="absolute -inset-2 rounded-full bg-background" />
                                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/20 transition-colors">
                                  <img
                                    src={dev.image}
                                    alt={dev.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </motion.div>

                              {/* Role badge */}
                              <motion.div
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4`}
                                style={{
                                  background: `linear-gradient(135deg, ${colors.accent}15, ${colors.accent}08)`,
                                  border: `1px solid ${colors.accent}30`,
                                }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Icon className="w-4 h-4" style={{ color: colors.accent }} />
                                <span className="text-xs font-bold tracking-wide" style={{ color: colors.accent }}>
                                  {dev.role}
                                </span>
                              </motion.div>

                              {/* Name */}
                              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                {dev.name}
                              </h3>
                              <p className="text-sm text-slate-500 font-mono">{dev.year}</p>
                            </div>
                          </div>
                        </motion.div>
                      </TiltCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
