"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/developers", label: "Developers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className="relative w-10 h-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/logo/dept-logo.png"
                  alt="CSE Dept Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]"
                  style={{ mixBlendMode: "screen" }}
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-heading text-gradient leading-tight">
                  Tech Matrix
                </span>
                <span className="text-[10px] text-slate-500 tracking-wider uppercase">
                  CSE Association
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/[0.08] border border-white/[0.08] rounded-lg"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}

              {/* Grievance Redressal - Separate CTA Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-2">
                <Link
                  href="/grievance"
                  className={cn(
                    "relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 overflow-hidden",
                    pathname === "/grievance"
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25"
                      : "bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 text-red-400 hover:from-red-500 hover:to-orange-500 hover:text-white hover:shadow-lg hover:shadow-red-500/25"
                  )}
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Grievance Redressal
                </Link>
              </motion.div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="relative z-10 flex flex-col items-center justify-center h-full gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-8 py-3 text-2xl font-medium rounded-xl transition-all duration-300",
                        isActive
                          ? "text-white bg-white/[0.08]"
                          : "text-slate-400 hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Grievance Redressal - Separate in mobile too */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4"
              >
                <Link
                  href="/grievance"
                  className={cn(
                    "flex items-center gap-3 px-8 py-3 text-xl font-semibold rounded-xl transition-all duration-300",
                    pathname === "/grievance"
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                      : "bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 text-red-400"
                  )}
                >
                  <AlertTriangle className="w-5 h-5" />
                  Grievance Redressal
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
