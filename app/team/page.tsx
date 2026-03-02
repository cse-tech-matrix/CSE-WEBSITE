"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Crown, Shield, Star, Sparkles, Users, Zap, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import PageTransition from "@/components/layout/PageTransition";
import GradientOrb from "@/components/effects/GradientOrb";
import {
  hod,
  incharges,
  officeBearers,
  executiveMembers,
  coreMembers,
} from "@/data/team";
import type { TeamMember } from "@/data/team";
import { useIsMobile } from "@/lib/useIsMobile";

/* ─── Card Wrapper (no tilt) ─── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/* ─── Premium Holographic Member Card ─── */
function HoloCard({
  member,
  index,
  size = "default",
}: {
  member: TeamMember;
  index: number;
  size?: "featured" | "default" | "compact";
}) {
  const sizeMap = {
    featured: { img: "w-32 h-32 sm:w-40 sm:h-40", text: "text-lg sm:text-xl", pad: "p-6 sm:p-8" },
    default: { img: "w-24 h-24 sm:w-28 sm:h-28", text: "text-base", pad: "p-5" },
    compact: { img: "w-20 h-20 sm:w-24 sm:h-24", text: "text-sm", pad: "p-4" },
  };
  const s = sizeMap[size];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
      className="h-full"
    >
      <TiltCard className="h-full">
        <motion.div
          whileHover={{ y: -12, scale: 1.03 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group h-full"
        >
          <div
            className={`relative overflow-hidden rounded-2xl h-full flex flex-col items-center text-center
            glass-premium
            hover:border-primary/40
            transition-all duration-700 ${s.pad}
            shadow-[0_0_0_0_rgba(99,102,241,0)] hover:shadow-[0_0_50px_-8px_rgba(99,102,241,0.3)]`}
          >
            {/* Animated holographic sweep */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>

            {/* Animated border gradient on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/30 via-accent-purple/30 to-accent-cyan/30 animate-border" />
              <div className="absolute inset-0 rounded-2xl bg-background" />
            </div>

            {/* Corner accent dots */}
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all duration-500" />
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-accent-purple/30 group-hover:bg-accent-purple group-hover:shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all duration-500" />

            {/* Avatar */}
            <div className="relative mb-4 z-10">
              <motion.div
                className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary/50 via-accent-purple/50 to-accent-cyan/50 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700"
              />
              <motion.div
                className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                style={{
                  background: "conic-gradient(from 0deg, #6366f1, #a855f7, #06b6d4, #ec4899, #6366f1)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div
                className={`relative ${s.img} rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-all duration-500`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Tag badge */}
            {member.tag && (
              <motion.span
                className="relative z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-accent-amber/20 to-accent-pink/20 border border-accent-amber/30 text-accent-amber text-[10px] font-bold uppercase tracking-wider mb-2"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.3, type: "spring", stiffness: 300 }}
              >
                <Crown className="w-2.5 h-2.5" />
                {member.tag}
              </motion.span>
            )}

            {/* Info */}
            <h4 className={`relative z-10 font-bold text-white/90 group-hover:text-white transition-colors whitespace-nowrap ${s.text}`}>
              {member.name}
            </h4>

            {member.role && (
              <p className="relative z-10 mt-1 text-xs font-semibold text-accent-purple group-hover:text-accent-cyan transition-colors duration-500">
                {member.role}
              </p>
            )}

            {member.year && (
              <p className="relative z-10 mt-1 text-[11px] text-slate-500 font-mono">{member.year}</p>
            )}

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-700" />
          </div>
        </motion.div>
      </TiltCard>
    </motion.div>
  );
}

/* ─── Animated Section Divider ─── */
function SectionDivider({ icon: Icon, title, subtitle }: { icon: typeof Users; title: string; subtitle?: string }) {
  return (
    <motion.div
      className="relative flex flex-col items-center mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Glowing icon with pulse ring */}
      <motion.div
        className="relative mb-5"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse-slow" />
        <motion.div
          className="absolute -inset-3 rounded-2xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-full h-full rounded-2xl border border-primary/20" />
        </motion.div>
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center shadow-lg shadow-primary/30">
          <Icon className="w-7 h-7 text-white" />
        </div>
      </motion.div>

      {/* Title with staggered letters */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
        <span className="text-gradient">{title}</span>
      </h2>

      {subtitle && (
        <motion.p
          className="mt-3 text-sm sm:text-base text-slate-400 text-center max-w-md"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Animated underline */}
      <motion.div
        className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 150, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Side decorations */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/20" />
        <div className="w-40" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/20" />
      </div>
    </motion.div>
  );
}

/* ─── Premium Leadership Card (HOD & Incharges) ─── */
function LeadershipCard({ member, label, delay = 0 }: { member: TeamMember; label: string; delay?: number }) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] }}
      className="group"
    >
      <TiltCard>
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 transition-all duration-700 p-8 sm:p-10 text-center shadow-[0_0_0_0_rgba(99,102,241,0)] hover:shadow-[0_0_80px_-15px_rgba(99,102,241,0.3)]">
            {/* Background mesh */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            {/* Aurora effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-conic-gradient animate-spin-slower opacity-5" />
            </div>

            {/* Floating particles — desktop only */}
            {!isMobile && [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/30"
                style={{ top: `${15 + i * 13}%`, left: `${8 + i * 16}%` }}
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2], scale: [0.5, 1.2, 0.5] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              />
            ))}

            {/* Label */}
            <motion.span
              className="relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
            >
              <Crown className="w-3.5 h-3.5" />
              {label}
            </motion.span>

            {/* Avatar with rotating gradient ring */}
            <div className="relative mx-auto mb-6 w-40 h-40 sm:w-48 sm:h-48">
              {!isMobile ? (
                <>
                  <motion.div
                    className="absolute -inset-3 rounded-full opacity-20 group-hover:opacity-60 blur-lg transition-opacity duration-700"
                    style={{
                      background: "conic-gradient(from 0deg, #6366f1, #a855f7, #06b6d4, #ec4899, #6366f1)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -inset-[3px] rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, #6366f1, #a855f7, #06b6d4, #ec4899, #6366f1)",
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </>
              ) : (
                <div
                  className="absolute -inset-[3px] rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #6366f1, #a855f7, #06b6d4, #ec4899, #6366f1)",
                  }}
                />
              )}
              <div className="absolute inset-[2px] rounded-full bg-background" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-transparent">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
              </div>
            </div>

            <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-white">{member.name}</h3>
            <p className="relative z-10 mt-1 text-accent-purple font-medium text-sm sm:text-base">{member.role}</p>
          </div>
        </motion.div>
      </TiltCard>
    </motion.div>
  );
}

/* ─── Scroll Progress Bar ─── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent-purple to-accent-cyan z-[60] origin-left"
      style={{ scaleX }}
    />
  );
}

/* ─── Main Page ─── */
export default function TeamPage() {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <ScrollProgress />
      <FloatingShapes />
      <Navbar />
      <PageTransition>
        <main ref={containerRef} className="relative z-10 pt-24">
          {/* ─── Hero ─── */}
          <section className="relative py-14 px-4 text-center overflow-hidden">
            {!isMobile && (
              <>
                <GradientOrb className="-top-40 left-1/2 -translate-x-1/2" size={600} />
                <GradientOrb className="top-20 -right-40" size={300} color="from-accent-cyan/10 to-primary/10" />
                <GradientOrb className="top-40 -left-40" size={250} color="from-accent-pink/10 to-accent-purple/10" />
              </>
            )}

            {/* Background particle field */}
            {[...Array(isMobile ? 6 : 40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 1 + Math.random() * 2,
                  height: 1 + Math.random() * 2,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: i % 3 === 0 ? "rgba(99,102,241,0.4)" : i % 3 === 1 ? "rgba(168,85,247,0.3)" : "rgba(6,182,212,0.3)",
                }}
                animate={{
                  y: [0, (Math.random() - 0.5) * 80],
                  x: [0, (Math.random() - 0.5) * 50],
                  opacity: [0, 0.7, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            ))}

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-premium mb-8"
              >
                <Sparkles className="w-4 h-4 text-accent-amber animate-pulse-slow" />
                <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">
                  2025-26 Association Team
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="text-gradient">Meet Our Team</span>
              </motion.h1>

              <motion.p
                className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                The brilliant minds powering innovation, leadership, and tech excellence
              </motion.p>

              {/* Decorative animated circles */}
              <motion.div
                className="mt-10 flex justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${
                        ["#6366f1", "#a855f7", "#06b6d4", "#ec4899", "#f59e0b"][i]
                      }, ${
                        ["#a855f7", "#06b6d4", "#ec4899", "#f59e0b", "#6366f1"][i]
                      })`,
                    }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.3, 1, 0.3],
                      y: [0, -8, 0],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
                  />
                ))}
              </motion.div>

              {/* Scroll hint */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-[10px] text-slate-600 uppercase tracking-[0.25em] font-mono">Scroll to explore</span>
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* ─── HOD ─── */}
          <section className="py-10 px-4">
            <div className="max-w-lg mx-auto">
              <LeadershipCard member={hod} label="Head of the Department" />
            </div>
          </section>

          {/* ─── Association Incharges ─── */}
          <section className="py-10 px-4">
            <SectionDivider icon={Shield} title="Association Incharges" subtitle="Guiding the association with vision and expertise" />
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {incharges.map((member, i) => (
                <LeadershipCard key={member.name} member={member} label="Association Incharge" delay={i * 0.15} />
              ))}
            </div>
          </section>

          {/* ─── Office Bearers ─── */}
          <section className="py-12 px-4">
            <SectionDivider icon={Star} title="Office Bearers" subtitle="Leading from the front with dedication and passion" />
            <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
              {officeBearers.map((member, i) => (
                <HoloCard key={member.name} member={member} index={i} size="featured" />
              ))}
            </div>
          </section>

          {/* ─── Executive Members ─── */}
          <section className="py-12 px-4">
            <SectionDivider icon={Users} title="Executive Members" subtitle="The driving force behind every successful event" />
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {executiveMembers.map((member, i) => (
                <HoloCard key={member.name} member={member} index={i} size="compact" />
              ))}
            </div>
          </section>

          {/* ─── Core Members ─── */}
          <section className="py-12 px-4">
            <SectionDivider icon={Zap} title="Core Members" subtitle="The creative backbone of Tech Matrix" />
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {coreMembers.map((member, i) => (
                <HoloCard key={member.name} member={member} index={i} />
              ))}
            </div>
          </section>

          {/* ─── Group Photos ─── */}
          <section className="py-14 px-4">
            <div className="max-w-6xl mx-auto space-y-14">
              {[
                { src: "/allmem/image.png", label: "CSE Association Team 2025-26", gradient: "from-primary/40 via-accent-purple/40 to-accent-cyan/40" },
                { src: "/allmem/oldimage.png", label: "CSE Association Team 2024-25", gradient: "from-accent-purple/40 via-accent-pink/40 to-accent-amber/40" },
              ].map((photo, i) => (
                <motion.div
                  key={photo.label}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.92, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  {/* Multi-layered glow */}
                  <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${photo.gradient} opacity-20 group-hover:opacity-50 blur-md transition-all duration-1000`} />
                  <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${photo.gradient} opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-700`} />

                  <div className="relative rounded-3xl overflow-hidden bg-background">
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-1000"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex justify-center">
                      <motion.div
                        className="glass-premium px-8 py-4 rounded-2xl"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                          {photo.label}
                        </h3>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
