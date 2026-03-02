"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, ArrowUpRight, Code } from "lucide-react";
import { contactInfo } from "@/data/contact";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/grievance", label: "Grievance Redressal" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-[var(--background)]">
                <img src="/logo/logocse.png" alt="CSE Dept Logo" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]" style={{ mixBlendMode: "screen" }} />
              </div>
              <div>
                <span className="text-lg font-bold font-heading text-gradient">Tech Matrix</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Department of Computer Science & Engineering Students Association,
              Nandha Engineering College. Where innovation meets code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="break-all">{contactInfo.email}</span>
              </li>
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: contactInfo.socials.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: contactInfo.socials.instagram, label: "Instagram" },
                { icon: Facebook, href: contactInfo.socials.facebook, label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Follow us for updates on events, workshops, and tech news.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Tech Matrix — CSE Association, Nandha Engineering College.
          </p>
          <Link
            href="/developers"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <Code className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-slate-400 group-hover:text-white transition-colors duration-300">
              Meet the Developers
            </span>
            <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-primary transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
