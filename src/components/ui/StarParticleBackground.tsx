import { useMemo } from "react";

export default function StarParticleBackground() {
  // Generate stable star positions using useMemo to prevent re-randomization on re-renders
  const smallStars = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      size: Math.random() * 6 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  }, []);

  const tinyStars = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 3 + 1,
      delay: Math.random() * 6,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Medium Star Blobs */}
      <div className="absolute top-1/2 -left-20 w-48 h-48 bg-gradient-to-r from-yot-red-glow/50 to-transparent rounded-full blur-2xl animate-pulse opacity-40" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-10 w-56 h-56 bg-gradient-to-l from-yot-red-glow/15 to-transparent rounded-full blur-xl animate-pulse opacity-60" style={{ animationDuration: '9s', animationDelay: '3s' }} />
      <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-tl from-yot-red-glow/10 to-transparent rounded-full blur-2xl animate-pulse opacity-45" style={{ animationDuration: '5s', animationDelay: '2.5s' }} />
      
      {/* Small Star Particles - More scattered */}
      {smallStars.map((star, i) => (
        <div
          key={`star-${i}`}
          className="absolute bg-yot-red-glow rounded-full animate-pulse"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
          }}
        />
      ))}
      
      {/* Tiny Twinkling Stars */}
      {tinyStars.map((star, i) => (
        <div
          key={`twinkle-${i}`}
          className="absolute w-1 h-1 bg-yot-red/50 rounded-full animate-ping"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      
      {/* Floating Accent Elements */}
      {/* circular gradient fading downward (top accent) */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-b from-yot-red-glow/30 to-transparent blur-2xl animate-pulse opacity-10" style={{ animationDuration: '4s' }} />

      {/* circular gradient fading upward (center-bottom accent) */}
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-t from-yot-red-glow/30 to-transparent blur-2xl animate-pulse opacity-8" style={{ animationDuration: '4.5s', animationDelay: '1s' }} />

      <div className="absolute bottom-1/4 left-[20%] w-32 h-32 bg-gradient-to-r from-yot-red-glow/10 to-transparent rounded-full blur-xl animate-pulse opacity-40" style={{ animationDuration: '6s', animationDelay: '3s' }} />
      <div className="absolute top-3/4 right-[20%] w-28 h-28 bg-gradient-to-r from-yot-red/10 to-transparent rounded-full blur-xl animate-pulse opacity-45" style={{ animationDuration: '5s', animationDelay: '1.5s' }} />
      
      {/* Constellation Pattern */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`constellation-${i}`}
          className="absolute w-1.5 h-1.5 bg-yot-red/40 rounded-full animate-pulse"
          style={{
            top: `${15 + (i % 5) * 20}%`,
            left: `${5 + (i % 7) * 15}%`,
            animationDuration: `${2 + (i % 3)}s`,
            animationDelay: `${(i % 4) * 0.7}s`,
          }}
        />
      ))}
      
      {/* Depth Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/3 to-background/8 opacity-80" />
    </div>
  );
}