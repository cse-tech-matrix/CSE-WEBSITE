"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function NeonButton({
  children,
  href,
  external = false,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  onClick,
  type = "button",
}: NeonButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-accent-purple text-white shadow-lg shadow-primary/20 hover:shadow-primary/40",
    outline:
      "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  };

  const content = (
    <motion.span
      className={cn(
        "relative z-10 inline-flex items-center gap-2 font-medium rounded-xl transition-all duration-300 group",
        sizes[size],
        variants[variant],
        className
      )}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {icon && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      )}
    </motion.span>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
}
