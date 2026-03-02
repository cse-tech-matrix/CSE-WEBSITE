"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Calendar, ExternalLink, Filter, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import PageTransition from "@/components/layout/PageTransition";
import GradientOrb from "@/components/effects/GradientOrb";
import { eventsData } from "@/data/events";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All Events", icon: "🎯" },
  { key: "symposium", label: "Symposiums", icon: "🏆" },
  { key: "celebration", label: "Celebrations", icon: "🎉" },
  { key: "ceremony", label: "Ceremonies", icon: "🎓" },
  { key: "competition", label: "Competitions", icon: "⚡" },
];

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

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const allEvents = eventsData.flatMap((y) =>
    y.events.map((e) => ({ ...e, year: y.year }))
  );

  const filtered =
    activeFilter === "all"
      ? allEvents
      : allEvents.filter((e) => e.category === activeFilter);

  return (
    <>
      <ScrollProgress />
      <FloatingShapes />
      <Navbar />
      <PageTransition>
        <main className="relative z-10 pt-24">
          {/* Hero */}
          <section className="relative py-14 px-4 text-center overflow-hidden">
            <GradientOrb className="-top-40 left-1/2 -translate-x-1/2" size={500} />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-amber" />
                <span className="text-xs text-slate-400 tracking-wider uppercase font-medium">Event Timeline</span>
              </motion.div>
              <motion.h1
                className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="text-gradient">Our Events</span>
              </motion.h1>
              <motion.p
                className="mt-5 text-lg text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Technical symposiums, cultural celebrations, and everything in between
              </motion.p>
            </div>
          </section>

          {/* Filters */}
          <section className="px-4 pb-8">
            <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
              {categories.map((cat, i) => (
                <motion.button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                    activeFilter === cat.key
                      ? "bg-gradient-to-r from-primary to-accent-purple text-white shadow-lg shadow-primary/20"
                      : "glass-premium text-slate-400 hover:text-white hover:bg-white/[0.06]"
                  )}
                >
                  <span className="mr-1.5">{cat.icon}</span>
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="py-12 px-4">
            <div className="max-w-5xl mx-auto relative">
              {/* Vertical line with glow */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5">
                <div className="w-full h-full bg-gradient-to-b from-primary/40 via-accent-purple/40 to-accent-pink/40" />
                <div className="absolute inset-0 w-full bg-gradient-to-b from-primary/20 via-accent-purple/20 to-accent-pink/20 blur-sm" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-12"
                >
                  {filtered.map((event, i) => (
                    <motion.div
                      key={`${event.title}-${event.year}`}
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.7, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                      className={cn(
                        "relative flex items-start gap-6 pl-12 md:pl-0",
                        i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      )}
                    >
                      {/* Dot with pulse */}
                      <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 z-10">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent-purple border-4 border-background shadow-lg shadow-primary/30" />
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary/30"
                          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                        />
                      </div>

                      {/* Card */}
                      <div className={cn("w-full md:w-[calc(50%-2rem)]", i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8")}>
                        <motion.div
                          className="glass-premium rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group"
                          whileHover={{ y: -4, boxShadow: "0 0 40px -10px rgba(99,102,241,0.2)" }}
                        >
                          {/* Year badge */}
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-primary to-accent-purple text-white mb-3 shadow-sm">
                            {event.year}
                          </span>

                          <div className={cn("flex items-center gap-2 text-sm text-primary mb-2", i % 2 === 0 ? "md:justify-end" : "")}>
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                            {event.title}
                          </h3>
                          <p className="text-sm text-slate-400 mb-4">
                            {event.description}
                          </p>

                          <motion.a
                            href={event.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 transition-all",
                              i % 2 === 0 ? "md:ml-auto" : ""
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Gallery
                            <ExternalLink className="w-3.5 h-3.5" />
                          </motion.a>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filtered.length === 0 && (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Filter className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">No events found for this filter.</p>
                </motion.div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
