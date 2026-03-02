"use client";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div
        className="absolute rounded-full bg-gradient-to-br from-primary/5 to-accent-purple/5 blur-[80px] animate-float"
        style={{ width: 250, height: 250, left: "10%", top: "20%" }}
      />
      <div
        className="absolute rounded-full bg-gradient-to-br from-accent-cyan/5 to-primary/5 blur-[80px] animate-float-delayed"
        style={{ width: 180, height: 180, left: "75%", top: "55%" }}
      />
      <div
        className="absolute rounded-full bg-gradient-to-br from-accent-pink/5 to-accent-purple/5 blur-[80px] animate-float"
        style={{ width: 140, height: 140, left: "55%", top: "10%" }}
      />
    </div>
  );
}
