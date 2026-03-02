"use client";

import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

interface MemberCardProps extends TeamMember {
  index?: number;
  featured?: boolean;
}

export default function MemberCard({
  name,
  role,
  year,
  image,
  index = 0,
  featured = false,
}: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div
        className={`relative overflow-hidden rounded-2xl h-full flex flex-col items-center text-center
        bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]
        hover:bg-white/[0.06] hover:border-primary/30
        hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]
        transition-all duration-500
        ${featured ? "p-8" : "p-5"}`}
      >
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Avatar */}
        <div
          className={`relative rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-500 mb-4 ${
            featured ? "w-40 h-40" : "w-24 h-24"
          }`}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Info */}
        <h4
          className={`font-semibold text-slate-100 line-clamp-2 ${
            featured ? "text-xl" : "text-sm"
          }`}
        >
          {name}
        </h4>

        {role && (
          <p
            className={`mt-1 font-medium text-accent-purple ${
              featured ? "text-base" : "text-xs"
            }`}
          >
            {role}
          </p>
        )}

        {year && (
          <p
            className={`mt-1 font-medium text-primary/70 ${
              featured ? "text-sm" : "text-xs"
            }`}
          >
            {year}
          </p>
        )}

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}
