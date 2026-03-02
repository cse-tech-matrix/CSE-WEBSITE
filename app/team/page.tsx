"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Shield, Star, Sparkles, Users, ChevronDown,
  Code, Calendar, Truck, Microscope, Palette, Video, PenTool, Layers,
} from "lucide-react";
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

/* ─── Category configuration ─── */
const categories = [
  { key: "Research & Development", icon: Microscope, gradient: "from-violet-500 to-purple-600", accent: "#8b5cf6", label: "Research & Development" },
  { key: "Event Management", icon: Calendar, gradient: "from-orange-500 to-red-500", accent: "#f97316", label: "Event Management" },
  { key: "Technical", icon: Code, gradient: "from-cyan-500 to-blue-600", accent: "#06b6d4", label: "Technical" },
  { key: "Logistics", icon: Truck, gradient: "from-emerald-500 to-teal-600", accent: "#10b981", label: "Logistics" },
  { key: "Web Designing", icon: Palette, gradient: "from-pink-500 to-rose-600", accent: "#ec4899", label: "Web Designing" },
  { key: "Video Editing", icon: Video, gradient: "from-amber-500 to-yellow-600", accent: "#f59e0b", label: "Video Editing" },
  { key: "Content Writing", icon: PenTool, gradient: "from-indigo-500 to-blue-600", accent: "#6366f1", label: "Content Writing" },
  { key: "General", icon: Layers, gradient: "from-slate-500 to-zinc-600", accent: "#64748b", label: "General" },
];

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

/* ─── Section Divider ─── */
function SectionDivider({ icon: Icon, title, subtitle }: { icon: typeof Users; title: string; subtitle?: string }) {
  return (
    <motion.div
      className="relative flex flex-col items-center mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative mb-5"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse-slow" />
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center shadow-lg shadow-primary/30">
          <Icon className="w-7 h-7 text-white" />
        </div>
      </motion.div>
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
      <motion.div
        className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 150, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </motion.div>
  );
}

/* ─── Premium Leadership Card (HOD & Incharges) — NO crown ─── */
function LeadershipCard({ member, label, delay = 0 }: { member: TeamMember; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] }}
      className="group"
    >
      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.4 }}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.08] hover:border-primary/40 transition-all duration-700 p-8 sm:p-10 text-center shadow-[0_0_0_0_rgba(99,102,241,0)] hover:shadow-[0_0_80px_-15px_rgba(99,102,241,0.3)]">
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

          {/* Label badge */}
          <motion.span
            className="relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
          >
            {label}
          </motion.span>

          {/* Avatar */}
          <div className="relative mx-auto mb-6 w-40 h-40 sm:w-48 sm:h-48">
            <div
              className="absolute -inset-[3px] rounded-full animate-spin-slow"
              style={{ background: "conic-gradient(from 0deg, #6366f1, #a855f7, #06b6d4, #ec4899, #6366f1)" }}
            />
            <div className="absolute inset-[2px] rounded-full bg-background" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-transparent">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-white">{member.name}</h3>
          <p className="relative z-10 mt-1 text-accent-purple font-medium text-sm sm:text-base">{member.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Office Bearer Card ─── */
function OfficeBearerCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group h-full"
      >
        <div className="relative overflow-hidden rounded-2xl h-full flex flex-col items-center text-center glass-premium hover:border-primary/40 transition-all duration-700 p-6 sm:p-8">
          <div className="relative mb-4 z-10">
            <motion.div
              className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary/50 via-accent-purple/50 to-accent-cyan/50 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700"
            />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-all duration-500">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
          {member.role && (
            <span className="relative z-10 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/15 to-accent-purple/15 border border-primary/25 text-primary text-[10px] font-bold uppercase tracking-wider mb-2">
              {member.role}
            </span>
          )}
          <h4 className="relative z-10 font-bold text-white/90 group-hover:text-white transition-colors text-base sm:text-lg">
            {member.name}
          </h4>
          {member.year && (
            <p className="relative z-10 mt-1 text-[11px] text-slate-500 font-mono">{member.year}</p>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-700" />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Category Member Card ─── */
function CategoryMemberCard({
  member,
  index,
  accent,
  isCore,
}: {
  member: TeamMember;
  index: number;
  accent: string;
  isCore: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group h-full"
      >
        <div className="relative overflow-hidden rounded-xl h-full flex flex-col items-center text-center glass-premium hover:border-primary/30 transition-all duration-500 p-4">
          {/* Hover sweep */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </div>

          {/* Avatar */}
          <div className="relative mb-3 z-10">
            <div
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 transition-all duration-500"
              style={{ borderColor: `${accent}30` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Info */}
          <h4 className="relative z-10 font-bold text-white/90 group-hover:text-white transition-colors text-xs sm:text-sm leading-tight">
            {member.name}
          </h4>
          <p className="relative z-10 mt-1 text-[10px] text-slate-500 font-mono">{member.year}</p>
          <span
            className="relative z-10 mt-1.5 inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide uppercase border"
            style={{
              color: accent,
              borderColor: `${accent}40`,
              background: `${accent}15`,
            }}
          >
            {isCore ? "Core Member" : "Executive Member"}
          </span>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Category Section ─── */
function CategorySection({
  category,
  members,
  coreNames,
  sectionIndex,
}: {
  category: typeof categories[0];
  members: TeamMember[];
  coreNames: Set<string>;
  sectionIndex: number;
}) {
  const Icon = category.icon;

  return (
    <motion.section
      className="py-8 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Category header */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg shrink-0`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{category.label}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-slate-500 font-mono">{members.length} members</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent" style={{ backgroundImage: `linear-gradient(to right, ${category.accent}30, transparent)` }} />
            </div>
          </div>
        </motion.div>

        {/* Members grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {members.map((member, i) => (
            <CategoryMemberCard
              key={member.name}
              member={member}
              index={i}
              accent={category.accent}
              isCore={coreNames.has(member.name)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Main Page ─── */
export default function TeamPage() {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);

  // Build category groups from executive + core members
  const { categoryGroups, coreNameSet } = useMemo(() => {
    const coreNameSet = new Set(coreMembers.map((m) => m.name));
    const allMembers = [...executiveMembers, ...coreMembers];

    const grouped: Record<string, TeamMember[]> = {};
    for (const member of allMembers) {
      const tag = member.tag || "General";
      if (!grouped[tag]) grouped[tag] = [];
      // Avoid duplicates (if someone appears in both lists)
      if (!grouped[tag].some((m) => m.name === member.name)) {
        grouped[tag].push(member);
      }
    }

    // Explicit ordering per category
    const manualOrder: Record<string, string[]> = {
      "Event Management": [
        "Mr. M. Dhilip", "Mr. Santhosh Dinakaran", "Ms. S. Aashiqa Fathima",
        "Ms. T. L. Jana Sri", "Mr. P. Y. Ashwin Uvraj", "Ms. Sruthi S",
      ],
      "Logistics": ["Mr. K. Rumesh Kumaran", "Mr. A. Mohamed Abu Bakkar Siddiq"],
      "Web Designing": ["Mr. S. S. Arunesh", "Mr. M. Pradeesh", "Mr. U. Mahendran"],
      "Video Editing": ["Mr. R. Sree Nandhu", "Mr. B. Harish Kumar", "Mr. Prithiv Krishna"],
      "Content Writing": [
        "Ms. T. Saarumathi", "Ms. S. Subaranjani", "Ms. A. K. Nandhana",
        "Ms. S. Dhivya", "Ms. R. Shamiksha", "Ms. E. Subitcha", "Ms. R. Dhanu Shree",
      ],
    };
    const yearOrder: Record<string, number> = { "IV Year": 0, "III Year": 1, "II Year": 2, "I Year": 3 };
    for (const tag of Object.keys(grouped)) {
      const order = manualOrder[tag];
      if (order) {
        grouped[tag].sort((a, b) => {
          const ai = order.indexOf(a.name);
          const bi = order.indexOf(b.name);
          return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
        });
      } else {
        grouped[tag].sort((a, b) => (yearOrder[a.year] ?? 9) - (yearOrder[b.year] ?? 9));
      }
    }

    return { categoryGroups: grouped, coreNameSet };
  }, []);

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
              </>
            )}

            <div className="relative z-10 max-w-4xl mx-auto">
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
                <OfficeBearerCard key={member.name} member={member} index={i} />
              ))}
            </div>
          </section>

          {/* ─── Category-based Member Sections ─── */}
          <section className="py-10 px-4">
            <SectionDivider
              icon={Users}
              title="Association Members"
              subtitle="Organized by their domain expertise"
            />

            {categories.map((cat, i) => {
              const members = categoryGroups[cat.key];
              if (!members || members.length === 0) return null;
              return (
                <CategorySection
                  key={cat.key}
                  category={cat}
                  members={members}
                  coreNames={coreNameSet}
                  sectionIndex={i}
                />
              );
            })}
          </section>

          {/* ─── Group Photos ─── */}
          <section className="py-14 px-4">
            <div className="max-w-6xl mx-auto space-y-14">
              {[
                { src: "/allmem/image.jpg", label: "CSE Association Team 2025-26", gradient: "from-primary/40 via-accent-purple/40 to-accent-cyan/40" },
                { src: "/allmem/oldimage.jpg", label: "CSE Association Team 2024-25", gradient: "from-accent-purple/40 via-accent-pink/40 to-accent-amber/40" },
              ].map((photo) => (
                <motion.div
                  key={photo.label}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.92, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${photo.gradient} opacity-20 group-hover:opacity-50 blur-md transition-all duration-1000`} />

                  <div className="relative rounded-3xl overflow-hidden bg-background">
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-1000"
                      loading="lazy"
                    />
                  </div>

                  {/* Label below the photo */}
                  <motion.div
                    className="mt-4 flex justify-center"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="glass-premium px-6 sm:px-8 py-3 sm:py-4 rounded-2xl">
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white text-center">{photo.label}</h3>
                    </div>
                  </motion.div>
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
