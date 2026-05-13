"use client";

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartParticle {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  opacity: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    const heartCount = 15;
    const newHearts = Array.from({ length: heartCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 20 + 10,
      duration: `${Math.random() * 15 + 15}s`,
      delay: `${Math.random() * 20}s`,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute animate-heart text-accent fill-accent/20"
          style={{
            left: heart.left,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: heart.duration,
            animationDelay: heart.delay,
            opacity: heart.opacity,
          }}
        />
      ))}
    </div>
  );
}
