"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let columns: number[] = [];
    let lastFrame = 0;
    const FPS = 15; // Throttled frame rate
    const frameInterval = 1000 / FPS;

    const chars = "01アイウエオカキクケコ<>{}[]=/\\|@#$%";
    const fontSize = 16;
    const colSpacing = fontSize * 1.5; // Fewer columns by spacing them out

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const colCount = Math.floor(canvas.width / colSpacing);
      columns = Array(colCount)
        .fill(0)
        .map(() => Math.random() * -50);
    }

    resize();
    window.addEventListener("resize", resize);

    function draw(timestamp: number) {
      if (!ctx || !canvas) return;

      // Throttle to target FPS
      if (timestamp - lastFrame < frameInterval) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;

      ctx.fillStyle = "rgba(3, 0, 20, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const charIndex = Math.floor(Math.random() * chars.length);
        const x = i * colSpacing;
        const y = columns[i] * fontSize;

        ctx.fillStyle =
          i % 3 === 0
            ? "rgba(99, 102, 241, 0.2)"
            : i % 3 === 1
              ? "rgba(168, 85, 247, 0.15)"
              : "rgba(6, 182, 212, 0.12)";

        ctx.fillText(chars[charIndex], x, y);

        if (y > canvas.height && Math.random() > 0.98) {
          columns[i] = 0;
        }
        columns[i] += 0.4 + Math.random() * 0.2;
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.35 }}
      aria-hidden="true"
    />
  );
}
