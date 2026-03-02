"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Users, Eye, Target, Rocket, Zap, Code2, Lightbulb } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import PageTransition from "@/components/layout/PageTransition";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrb from "@/components/effects/GradientOrb";
import { useIsMobile } from "@/lib/useIsMobile";

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

export default function AboutPage() {
  const isMobile = useIsMobile();

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

            {/* Floating particles */}
            {[...Array(isMobile ? 5 : 20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 rounded-full bg-primary/20"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                animate={{ y: [0, (Math.random() - 0.5) * 40], opacity: [0, 0.5, 0] }}
                transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
              />
            ))}

            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="text-gradient">About Tech Matrix</span>
              </motion.h1>
              <motion.p
                className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Where curiosity meets creativity and learning extends beyond the classroom
              </motion.p>
            </div>
          </section>

          {/* About the Association */}
          <section className="py-12 px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-8 md:p-10" glow>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent-purple shadow-lg shadow-primary/20"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Users className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      About the Association
                    </h2>
                  </div>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      The{" "}
                      <span className="text-accent-purple font-medium">
                        Computer Science and Engineering Students Association
                      </span>{" "}
                      is a dynamic platform run by passionate and innovative students
                      of the CSE department. Our mission is to foster a vibrant tech
                      culture where curiosity meets creativity and learning extends
                      beyond the classroom.
                    </p>
                    <p>
                      We actively organize technical events, hackathons, coding
                      challenges, workshops, and guest lectures to empower students
                      with real-world skills. By encouraging collaboration and
                      innovation, we aim to build a community of future-ready
                      technologists and problem-solvers.
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="py-12 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-8 h-full" delay={0.1}>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-accent-purple to-primary shadow-lg"
                      whileHover={{ rotate: -10, scale: 1.1 }}
                    >
                      <Eye className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    {[
                      "To be a leading student-driven association in Computer Science and Engineering education",
                      "Nurture future innovators and responsible tech leaders through continuous learning",
                      "Promote technological innovation and professional development in a collaborative environment",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="text-accent-purple mt-1 shrink-0">&#9670;</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GlassCard className="p-8 h-full" delay={0.2}>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="p-3 rounded-xl bg-gradient-to-br from-accent-amber to-accent-pink shadow-lg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Target className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                  </div>
                  <ul className="space-y-3 text-slate-300">
                    {[
                      "Enhance technical skills through industry-relevant events and workshops",
                      "Foster innovation, critical thinking, and leadership among students",
                      "Bridge the gap between academia and industry through hands-on activities",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="text-accent-amber mt-1 shrink-0">&#9670;</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-10 px-4">
            <div className="max-w-5xl mx-auto">
              <SectionHeading
                title="What Drives Us"
                subtitle="Our pillars of excellence"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Code2, title: "Hackathons & Coding", desc: "Intense coding events and programming challenges to sharpen skills.", gradient: "from-blue-500 to-indigo-600" },
                  { icon: Rocket, title: "Tech Symposiums", desc: "SYNECTICS — our flagship national level technical symposium.", gradient: "from-purple-500 to-pink-600" },
                  { icon: Lightbulb, title: "Workshops", desc: "Hands-on workshops on trending technologies and development tools.", gradient: "from-amber-500 to-orange-600" },
                  { icon: Users, title: "Community", desc: "A thriving network of CSE students across all years.", gradient: "from-cyan-500 to-teal-600" },
                  { icon: Zap, title: "Leadership", desc: "Developing future leaders through event management and team coordination.", gradient: "from-green-500 to-emerald-600" },
                  { icon: Target, title: "Industry Connect", desc: "Guest lectures and seminars from industry professionals.", gradient: "from-rose-500 to-red-600" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <GlassCard className="p-6 group h-full" delay={i * 0.08}>
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
