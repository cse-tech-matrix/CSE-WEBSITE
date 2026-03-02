"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import PageTransition from "@/components/layout/PageTransition";
import GradientOrb from "@/components/effects/GradientOrb";
import { contactInfo } from "@/data/contact";

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

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <FloatingShapes />
      <Navbar />
      <PageTransition>
        <main className="relative z-10 pt-24">
          {/* Hero */}
          <section className="relative py-16 px-4 text-center overflow-hidden">
            <GradientOrb className="-top-40 left-1/2 -translate-x-1/2" size={500} />
            <div className="relative z-10">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              >
                <span className="text-gradient">Contact Us</span>
              </motion.h1>
              <motion.p
                className="mt-4 text-lg text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Reach out to the Computer Science and Engineering Department
              </motion.p>
            </div>
          </section>

          {/* Contact Info */}
          <section className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="glass-premium rounded-2xl overflow-hidden neon-glow-intense p-8 md:p-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-accent-purple rounded-full" />
                  <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                  {[
                    { icon: MapPin, title: "Address", content: contactInfo.address },
                    { icon: Phone, title: "Phone", content: contactInfo.phone },
                    { icon: Mail, title: "Email", content: contactInfo.email },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-accent-purple/20 group-hover:from-primary/30 group-hover:to-accent-purple/30 transition-colors shrink-0">
                        <item.icon className="w-5 h-5 text-accent-purple" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{item.title}</h3>
                        <p className="text-sm text-slate-400 mt-1 break-all">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  className="pt-6 border-t border-white/[0.06]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-lg font-bold text-white mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, href: contactInfo.socials.linkedin, bg: "from-[#0077B5] to-[#0077B5]" },
                      { icon: Instagram, href: contactInfo.socials.instagram, bg: "from-[#833AB4] via-[#FD1D1D] to-[#FCB045]" },
                      { icon: Facebook, href: contactInfo.socials.facebook, bg: "from-[#1877F2] to-[#1877F2]" },
                    ].map(({ icon: Icon, href, bg }) => (
                      <motion.a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-11 h-11 rounded-xl bg-gradient-to-r ${bg} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Map */}
          <section className="py-10 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <motion.h2
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Our Location
                </motion.h2>
                <motion.p
                  className="text-slate-400 mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Visit us at our campus in Erode
                </motion.p>
              </div>
              <motion.div
                className="rounded-2xl overflow-hidden glass-premium h-80 md:h-[450px] neon-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <iframe
                  src={contactInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nandha Engineering College Location"
                />
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
