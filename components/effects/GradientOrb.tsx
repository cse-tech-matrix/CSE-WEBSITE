"use client";

interface GradientOrbProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function GradientOrb({
  className = "",
  color = "from-primary/20 to-accent-purple/20",
  size = 400,
}: GradientOrbProps) {
  return (
    <div
      className={`absolute rounded-full bg-gradient-to-br ${color} blur-[100px] pointer-events-none ${className}`}
      style={{ width: size, height: size, opacity: 0.4 }}
    />
  );
}
