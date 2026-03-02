"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { FileWarning, ExternalLink, Phone, Mail, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import PageTransition from "@/components/layout/PageTransition";
import GlassCard from "@/components/ui/GlassCard";
import GradientOrb from "@/components/effects/GradientOrb";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactInfo } from "@/data/contact";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 z-[60] origin-left"
      style={{ scaleX }}
    />
  );
}

export default function GrievancePage() {
  return (
    <>
      <ScrollProgress />
      <FloatingShapes />
      <Navbar />
      <PageTransition>
        <main className="relative z-10 pt-24">
          {/* Hero */}
          <section className="relative py-14 px-4 text-center overflow-hidden">
            <GradientOrb className="-top-40 left-1/2 -translate-x-1/2" size={500} color="from-red-500/10 to-orange-500/10" />

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 rounded-full bg-red-500/20"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                animate={{ y: [0, (Math.random() - 0.5) * 40], opacity: [0, 0.5, 0] }}
                transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
              />
            ))}

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium mb-6"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                <span className="text-xs text-slate-400 tracking-wider uppercase font-medium">Confidential & Secure</span>
              </motion.div>
              <motion.h1
                className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Grievance Redressal
                </span>
              </motion.h1>
              <motion.p
                className="mt-5 text-lg text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Your voice matters — submit concerns confidentially
              </motion.p>
            </div>
          </section>

          {/* Submit Grievance */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-8 md:p-10" glow>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/20"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <FileWarning className="w-6 h-6 text-white" />
                        </motion.div>
                        <h2 className="text-2xl font-bold text-white">
                          Submit Your Grievance
                        </h2>
                      </div>
                      <p className="text-slate-400 mb-6">
                        Please use the form linked below to submit your grievances or
                        feedback. All submissions are treated with confidentiality and
                        will be addressed promptly.
                      </p>
                      <motion.a
                        href={contactInfo.grievanceFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Open Grievance Form
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                    <motion.div
                      className="hidden md:block"
                      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full animate-pulse-slow" />
                        <FileWarning size={100} className="relative text-red-500/60" />
                      </div>
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Student Coordinators */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                title="Student Coordinators"
                subtitle="Feel free to contact our coordinators regarding any redressal"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.coordinators.map((coord, i) => (
                  <motion.div
                    key={coord.name}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -4 }}
                  >
                    <GlassCard className="p-6" delay={i * 0.1}>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {coord.name}
                      </h4>
                      <p className="text-sm text-primary mb-3">{coord.dept}</p>
                      <p className="text-slate-400 flex items-center gap-2 mb-4">
                        <Phone className="w-4 h-4" /> {coord.phone}
                      </p>
                      <motion.a
                        href={`tel:${coord.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Phone className="w-3.5 h-3.5" /> Call Now
                      </motion.a>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Policy */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <ShieldCheck className="w-6 h-6 text-accent-purple" />
                    <h3 className="text-xl font-bold text-gradient">
                      Grievance Policy
                    </h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    The Department of Computer Science and Engineering is committed to
                    providing a supportive and inclusive environment for all students.
                    Our grievance resolution system ensures that all concerns are
                    addressed fairly and promptly. We maintain strict confidentiality
                    throughout the process and aim to resolve all matters within 7-10
                    working days.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  For technical issues with the form, email{" "}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary hover:text-accent-purple hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </p>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
