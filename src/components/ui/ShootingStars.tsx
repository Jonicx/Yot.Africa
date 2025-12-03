import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number; // ms
  age: number; // ms
  trail: { x: number; y: number }[];
};

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const lastRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let dpr = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      const { innerWidth: w, innerHeight: h } = window;
      const c = canvasRef.current;
      if (!c) return;
      const localCtx = c.getContext('2d');
      if (!localCtx) return;
      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
      c.style.width = w + 'px';
      c.style.height = h + 'px';
      localCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);


    // random spawn timer
    let nextSpawn = Math.random() * 29000 + 1000; // 1s to 30s
    let spawnTimer = 0;

    function spawnStar() {
      const c = canvasRef.current;
      if (!c) return;
      const w = c.width / dpr;
      const h = c.height / dpr;

      // spawn from any edge
      const edge = Math.floor(Math.random() * 4); // 0=left, 1=top, 2=right, 3=bottom
      let startX = 0, startY = 0, vx = 0, vy = 0;
      const speed = 800 + Math.random() * 700;
      switch (edge) {
        case 0: // left
          startX = -20;
          startY = Math.random() * h;
          vx = speed * (0.7 + Math.random() * 0.3);
          vy = (Math.random() - 0.5) * speed * 0.5;
          break;
        case 1: // top
          startX = Math.random() * w;
          startY = -20;
          vx = (Math.random() - 0.5) * speed * 0.5;
          vy = speed * (0.7 + Math.random() * 0.3);
          break;
        case 2: // right
          startX = w + 20;
          startY = Math.random() * h;
          vx = -speed * (0.7 + Math.random() * 0.3);
          vy = (Math.random() - 0.5) * speed * 0.5;
          break;
        case 3: // bottom
          startX = Math.random() * w;
          startY = h + 20;
          vx = (Math.random() - 0.5) * speed * 0.5;
          vy = -speed * (0.7 + Math.random() * 0.3);
          break;
      }

      const life = 600 + Math.random() * 400;
      const star: Star = {
        x: startX,
        y: startY,
        vx,
        vy,
        life,
        age: 0,
        trail: [],
      };
      starsRef.current.push(star);
    }

    function updateAndDraw(now: number) {
      if (!lastRef.current) lastRef.current = now;
      const dt = Math.min(40, now - lastRef.current);
      lastRef.current = now;

      const dtSec = dt / 1000;
      spawnTimer += dt;
      if (spawnTimer > nextSpawn) {
        spawnTimer = 0;
        nextSpawn = Math.random() * 29000 + 1000; // 1s to 30s
        spawnStar();
      }

      const c = canvasRef.current;
      if (!c) return;
      const ctx = c.getContext('2d');
      if (!ctx) return;

      const w = c.width / dpr;
      const h = c.height / dpr;

      ctx.clearRect(0, 0, w, h);

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      const stars = starsRef.current;
      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i];
        s.age += dt;
        const t = dtSec;
        s.x += s.vx * t;
        s.y += s.vy * t;

        s.trail.unshift({ x: s.x, y: s.y });
        if (s.trail.length > 6) s.trail.pop();

        // draw trail (Yot red glow)
        for (let j = 0; j < s.trail.length - 1; j++) {
          const p1 = s.trail[j];
          const p2 = s.trail[j + 1];
          const alpha = (1 - j / s.trail.length) * 0.9;
          const grd = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          grd.addColorStop(0, `rgba(255,58,58,${alpha})`); // yot-red-glow
          grd.addColorStop(1, `rgba(255,58,58,${alpha * 0.1})`);
          ctx.strokeStyle = grd;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }

        // draw head (Yot red)
        const headAlpha = 1 - s.age / s.life;
        ctx.fillStyle = `rgba(214,40,40,${Math.max(0, headAlpha)})`; // yot-red
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.6 + 1.4 * headAlpha, 0, Math.PI * 2);
        ctx.fill();

        if (s.age >= s.life) {
          stars.splice(i, 1);
        }
      }

      ctx.restore();

      rafRef.current = requestAnimationFrame(updateAndDraw);
    }

    rafRef.current = requestAnimationFrame(updateAndDraw);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

    return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden={true}
    />
  );
}
