"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, ArrowUpRight, Code, Home } from "lucide-react";
import { contactInfo } from "@/data/contact";

export default function Footer() {
  const pathname = usePathname();
  const isDevPage = pathname === "/developers";
  return (
    <footer className="relative border-t border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-[var(--background)]">
                <img src="/logo/logocse.png" alt="CSE Dept Logo" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]" style={{ mixBlendMode: "screen" }} />
              </div>
              <span className="text-base sm:text-lg font-bold font-heading text-gradient">Tech Matrix</span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Department of Computer Science & Engineering Students Association,
              Nandha Engineering College.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="break-all">{contactInfo.email}</span>
              </li>
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Connect
            </h3>
            <div className="flex gap-2.5">
              {[
                { icon: Linkedin, href: contactInfo.socials.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: contactInfo.socials.instagram, label: "Instagram" },
                { icon: Facebook, href: contactInfo.socials.facebook, label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-[10px] sm:text-xs text-slate-500">
              Follow us for updates on events, workshops, and tech news.
            </p>
          </motion.div>
        </div>

        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] sm:text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Tech Matrix — CSE Association, Nandha Engineering College.
          </p>
          <Link
            href={isDevPage ? "/" : "/developers"}
            className="group inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            {isDevPage ? (
              <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
            ) : (
              <Code className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
            )}
            <span className="text-[10px] sm:text-xs text-slate-400 group-hover:text-white transition-colors duration-300">
              {isDevPage ? "Back to Home" : "Meet the Developers"}
            </span>
            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-600 group-hover:text-primary transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
