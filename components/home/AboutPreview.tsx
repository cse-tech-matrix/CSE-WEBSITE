"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Lightbulb, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Code,
    title: "Advanced Curriculum",
    description:
      "Cutting-edge courses in AI, Machine Learning, Cloud Computing, and Blockchain with industry-aligned certification programs.",
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    icon: Cpu,
    title: "Tech Labs",
    description:
      "State-of-the-art labs with high-performance computing clusters and modern development environments.",
    gradient: "from-purple-500 to-pink-600",
    glow: "rgba(168, 85, 247, 0.15)",
  },
  {
    icon: Lightbulb,
    title: "Industry Connect",
    description:
      "Exclusive partnerships with tech giants offering internships, workshops, and direct recruitment pathways.",
    gradient: "from-cyan-500 to-teal-600",
    glow: "rgba(6, 182, 212, 0.15)",
  },
];

export default function AboutPreview() {
  return (
    <section className="relative py-10 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="What We Offer"
          subtitle="Empowering students with real-world skills through innovation and collaboration"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl glass-premium hover:border-primary/30 transition-all duration-700 p-8 h-full">
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Background glow */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${feature.glow}, transparent)` }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  {feature.title}
                  <Sparkles className="w-4 h-4 text-accent-amber opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
