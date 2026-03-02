"use client";

import { motion } from "framer-motion";
import { Calendar, Trophy, BookOpen, Rocket } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Trophy,
    title: "SYNECTICS'26",
    description: "National Level Technical Symposium — the biggest edition yet.",
    gradient: "from-amber-500 to-orange-600",
    href: "/events",
  },
  {
    icon: Calendar,
    title: "Aura'25",
    description: "Inter-department technical and cultural event with innovative showcases.",
    gradient: "from-primary to-accent-purple",
    href: "/events",
  },
  {
    icon: BookOpen,
    title: "Workshops & Seminars",
    description: "Regular hands-on sessions on AI, Web Dev, Cloud Computing, and more.",
    gradient: "from-accent-cyan to-teal-600",
    href: "/events",
  },
  {
    icon: Rocket,
    title: "Industry Connections",
    description: "Bridging academics and industry through tech talks and placements.",
    gradient: "from-pink-500 to-rose-600",
    href: "/about",
  },
];

export default function HighlightsSection() {
  return (
    <section className="relative py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Recent <span className="text-gradient">Highlights</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={item.href} className="block group">
                <div className="relative overflow-hidden rounded-xl glass-premium hover:border-primary/30 transition-all duration-500 p-5 h-full">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-gradient transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
