import { useEffect, useRef } from "react";

const COLORS = ["#10b981", "#06b6d4", "#3b82f6"];
const PARTICLE_COUNT = 30;
const LINK_DISTANCE = 150;
const LINK_OPACITY = 0.3;
const LINK_COLOR = "6,182,212";
const SPEED = 0.6;
const FPS_LIMIT = 60;
const FRAME_MS = 1000 / FPS_LIMIT;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
}

function createParticle(w: number, h: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * SPEED * (0.5 + Math.random() * 0.5),
    vy: Math.sin(angle) * SPEED * (0.5 + Math.random() * 0.5),
    radius: 1 + Math.random() * 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    opacity: 0.35 + Math.random() * 0.3,
  };
}

export function ParticlesBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let particles: Particle[] = [];
    let raf: number;
    let lastFrame = 0;

    function resize() {
      const { offsetWidth: w, offsetHeight: h } = canvas!.parentElement!;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.scale(dpr, dpr);
      particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(w, h));
    }

    function tick(now: number) {
      raf = requestAnimationFrame(tick);
      if (now - lastFrame < FRAME_MS) return;
      lastFrame = now;

      const w = canvas!.offsetWidth;
      const h = canvas!.offsetHeight;
      ctx!.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      // Draw links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = LINK_OPACITY * (1 - dist / LINK_DISTANCE);
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(${LINK_COLOR},${alpha.toFixed(3)})`;
            ctx!.lineWidth = 1;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, "0");
        ctx!.fill();
      }
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
