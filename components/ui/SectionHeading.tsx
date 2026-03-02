"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <motion.h2
        className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        className={cn(
          "mt-4 h-1 w-24 bg-gradient-to-r from-primary via-accent-purple to-accent-pink rounded-full",
          align === "center" && "mx-auto"
        )}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  );
}
