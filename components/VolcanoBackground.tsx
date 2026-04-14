"use client";

import { useEffect, useRef } from "react";

const DEFAULT_SKY_TOP = "#0f0c29";
const DEFAULT_SKY_BOTTOM = "#302b63";
const DEFAULT_LAVA = "#f54927";

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim());
  if (!m) return { r: 245, g: 73, b: 39 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

type Star = { x: number; y: number; r: number; phase: number; speed: number };
type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  life: number;
};
type LavaParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
};
type Ember = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  r: number;
  wobble: number;
};

export type VolcanoBackgroundProps = {
  skyTop?: string;
  skyBottom?: string;
  lavaColor?: string;
  meteorCount?: number;
  eruptionIntensity?: number;
  starCount?: number;
  enableMeteors?: boolean;
  enableEmbers?: boolean;
  className?: string;
};

export function VolcanoBackground({
  skyTop = DEFAULT_SKY_TOP,
  skyBottom = DEFAULT_SKY_BOTTOM,
  lavaColor = DEFAULT_LAVA,
  meteorCount = 5,
  eruptionIntensity = 1,
  starCount = 50,
  enableMeteors = true,
  enableEmbers = true,
  className = "",
}: VolcanoBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const settingsRef = useRef({
    skyTop,
    skyBottom,
    lavaColor,
    meteorCount,
    eruptionIntensity,
    starCount,
    enableMeteors,
    enableEmbers,
  });

  settingsRef.current = {
    skyTop,
    skyBottom,
    lavaColor,
    meteorCount,
    eruptionIntensity,
    starCount,
    enableMeteors,
    enableEmbers,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const rawContext = canvas.getContext("2d");
    if (!rawContext) return;
    const c: CanvasRenderingContext2D = rawContext;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let lavaPool: LavaParticle[] = [];
    let emberPool: Ember[] = [];
    let time = 0;
    let lavaSpawnAcc = 0;
    let emberSpawnAcc = 0;

    function initStars() {
      const s = settingsRef.current;
      stars = [];
      for (let i = 0; i < s.starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.65,
          r: Math.random() * 1.2 + 0.3,
          phase: Math.random() * Math.PI * 2,
          speed: 0.5 + Math.random() * 1.5,
        });
      }
    }

    function initMeteors() {
      const s = settingsRef.current;
      meteors = [];
      for (let i = 0; i < s.meteorCount; i++) {
        meteors.push(spawnMeteor());
      }
    }

    function spawnMeteor(): Meteor {
      const side = Math.floor(Math.random() * 2);
      if (side === 0) {
        return {
          x: Math.random() * width * 0.4,
          y: -20 - Math.random() * 80,
          vx: 180 + Math.random() * 120,
          vy: 120 + Math.random() * 100,
          len: 80 + Math.random() * 60,
          life: 1,
        };
      }
      return {
        x: width + 20 + Math.random() * 100,
        y: Math.random() * height * 0.35,
        vx: -(200 + Math.random() * 150),
        vy: 100 + Math.random() * 120,
        len: 80 + Math.random() * 70,
        life: 1,
      };
    }

    function spawnLavaParticle(intensity: number): LavaParticle {
      const ventX = width * 0.5;
      const ventW = width * 0.22 * intensity;
      const angle = (Math.random() - 0.5) * 1.1;
      const speed =
        (220 + Math.random() * 180) * (0.85 + intensity * 0.35);
      return {
        x: ventX + (Math.random() - 0.5) * ventW,
        y: height - 2,
        vx: Math.sin(angle) * speed * 0.35,
        vy: -Math.cos(angle) * speed * 0.95,
        life: 1,
        maxLife: 0.85 + Math.random() * 0.5,
        size: (2 + Math.random() * 3.5) * intensity,
      };
    }

    function spawnEmber(intensity: number): Ember {
      const ventX = width * 0.5;
      const ventW = width * 0.18 * intensity;
      return {
        x: ventX + (Math.random() - 0.5) * ventW,
        y: height - 4 - Math.random() * 20,
        vx: (Math.random() - 0.5) * 40,
        vy: -(40 + Math.random() * 70) * intensity,
        life: 1,
        maxLife: 1.2 + Math.random() * 0.8,
        r: 0.8 + Math.random() * 1.8,
        wobble: Math.random() * Math.PI * 2,
      };
    }

    function resize() {
      if (!wrap || !canvas) return;
      const rect = wrap.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
      initMeteors();
      lavaPool = [];
      emberPool = [];
    }

    function drawSky() {
      const s = settingsRef.current;
      const g = c.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, s.skyTop);
      g.addColorStop(1, s.skyBottom);
      c.fillStyle = g;
      c.fillRect(0, 0, width, height);
    }

    function drawStars() {
      for (const st of stars) {
        const tw = 0.35 + 0.65 * Math.sin(time * st.speed + st.phase);
        c.beginPath();
        c.fillStyle = `rgba(255,255,255,${0.25 + tw * 0.75})`;
        c.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        c.fill();
      }
    }

    function drawMeteors(dt: number) {
      const s = settingsRef.current;
      if (!s.enableMeteors) return;
      c.lineCap = "round";
      for (let i = 0; i < meteors.length; i++) {
        const m = meteors[i];
        const nx = m.x + m.vx * dt;
        const ny = m.y + m.vy * dt;
        const tailX = m.x - (m.vx / Math.hypot(m.vx, m.vy)) * m.len;
        const tailY = m.y - (m.vy / Math.hypot(m.vx, m.vy)) * m.len;

        const grad = c.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(0.4, "rgba(200,220,255,0.35)");
        grad.addColorStop(1, "rgba(255,255,255,0.95)");
        c.strokeStyle = grad;
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(tailX, tailY);
        c.lineTo(m.x, m.y);
        c.stroke();

        m.x = nx;
        m.y = ny;
        if (m.x < -100 || m.x > width + 100 || m.y > height + 100) {
          meteors[i] = spawnMeteor();
        }
      }
    }

    function stepLava(dt: number) {
      const s = settingsRef.current;
      const rgb = hexToRgb(s.lavaColor);
      const intensity = s.eruptionIntensity;
      const targetLava = Math.floor(28 * intensity);
      lavaSpawnAcc += dt * 14 * intensity;
      while (lavaSpawnAcc >= 1 && lavaPool.length < targetLava) {
        lavaSpawnAcc -= 1;
        lavaPool.push(spawnLavaParticle(intensity));
      }

      for (let i = lavaPool.length - 1; i >= 0; i--) {
        const p = lavaPool[i];
        p.vy += 420 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= dt / p.maxLife;
        const a = Math.max(0, p.life);
        c.beginPath();
        c.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${0.35 + a * 0.55})`;
        c.arc(p.x, p.y, p.size * (0.5 + a * 0.5), 0, Math.PI * 2);
        c.fill();
        if (p.life <= 0 || p.y > height + 20) lavaPool.splice(i, 1);
      }
    }

    function stepEmbers(dt: number) {
      const s = settingsRef.current;
      if (!s.enableEmbers) return;
      const rgb = hexToRgb(s.lavaColor);
      const intensity = s.eruptionIntensity;
      const cap = Math.floor(45 * intensity);
      emberSpawnAcc += dt * 18 * intensity;
      while (emberSpawnAcc >= 1 && emberPool.length < cap) {
        emberSpawnAcc -= 1;
        emberPool.push(spawnEmber(intensity));
      }

      for (let i = emberPool.length - 1; i >= 0; i--) {
        const e = emberPool[i];
        e.wobble += dt * 4;
        e.x += (Math.sin(e.wobble) * 25 + e.vx) * dt;
        e.y += e.vy * dt;
        e.vy *= 1 - dt * 0.15;
        e.life -= dt / e.maxLife;
        const a = Math.max(0, e.life);
        const flicker = 0.4 + 0.6 * Math.sin(time * 8 + e.wobble);
        c.beginPath();
        c.fillStyle = `rgba(${Math.min(255, rgb.r + 40)},${Math.min(255, rgb.g + 30)},${rgb.b},${a * flicker * 0.85})`;
        c.arc(e.x, e.y, e.r * (0.6 + a * 0.4), 0, Math.PI * 2);
        c.fill();
        if (e.life <= 0 || e.y < -30) emberPool.splice(i, 1);
      }
    }

    function drawVolcanoGlow() {
      const s = settingsRef.current;
      const rgb = hexToRgb(s.lavaColor);
      const cx = width * 0.5;
      const baseY = height;
      const g = c.createRadialGradient(
        cx,
        baseY,
        0,
        cx,
        baseY,
        width * 0.45,
      );
      g.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},0.45)`);
      g.addColorStop(0.35, `rgba(${rgb.r},${rgb.g},${rgb.b},0.12)`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = g;
      c.fillRect(0, height * 0.55, width, height * 0.45);
    }

    let last = performance.now();
    function tick(now: number) {
      const dt = Math.min((now - last) / 1000, 0.064);
      last = now;

      drawSky();
      drawVolcanoGlow();
      drawStars();
      drawMeteors(dt);
      stepLava(dt);
      stepEmbers(dt);
      time += dt;

      rafId = requestAnimationFrame(tick);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none absolute inset-0 z-0 max-h-full min-h-0 min-w-0 max-w-full overflow-hidden ${className}`}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="block h-full max-h-full w-full max-w-full"
      />
    </div>
  );
}
