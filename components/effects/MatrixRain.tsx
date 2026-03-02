"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/lib/useIsMobile";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // skip entirely on mobile

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let columns: number[] = [];

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>{}[]=/\\|@#$%^&*";
    const fontSize = 14;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const colCount = Math.floor(canvas.width / fontSize);
      columns = Array(colCount).fill(0).map(() => Math.random() * -100);
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(3, 0, 20, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < columns.length; i++) {
        const charIndex = Math.floor(Math.random() * chars.length);
        const x = i * fontSize;
        const y = columns[i] * fontSize;

        const colorChoice = i % 5;
        if (colorChoice === 0) {
          ctx.fillStyle = "rgba(99, 102, 241, 0.25)";
        } else if (colorChoice === 1) {
          ctx.fillStyle = "rgba(168, 85, 247, 0.2)";
        } else if (colorChoice === 2) {
          ctx.fillStyle = "rgba(6, 182, 212, 0.18)";
        } else {
          ctx.fillStyle = "rgba(99, 102, 241, 0.12)";
        }

        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        ctx.fillText(chars[charIndex], x, y);

        if (Math.random() > 0.98) {
          ctx.fillStyle = "rgba(99, 102, 241, 0.6)";
          ctx.fillText(chars[charIndex], x, y);
        }

        if (y > canvas.height && Math.random() > 0.985) {
          columns[i] = 0;
        }
        columns[i] += 0.5 + Math.random() * 0.3;
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
      aria-hidden="true"
    />
  );
}
