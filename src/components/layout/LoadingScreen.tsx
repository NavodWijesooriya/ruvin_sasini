"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => setIsVisible(false), 1000);
    }, 4000); // Slightly longer to appreciate the enhanced animation

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden transition-opacity duration-1000 ease-in-out",
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Drifting Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart 
            key={i}
            className="loading-heart absolute text-accent/10 fill-accent/5"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: '-30px',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 4 + 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative text-center z-10">
        <div className="relative mb-8 inline-block">
          {/* Animated Heart Path */}
          <svg 
            width="140" 
            height="140" 
            viewBox="0 0 100 100" 
            className="mx-auto drop-shadow-sm scale-110"
          >
            <path
              d="M50 30 C 50 15, 10 15, 10 45 C 10 70, 50 90, 50 90 C 50 90, 90 70, 90 45 C 90 15, 50 15, 50 30"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="heart-path"
            />
            <circle cx="50" cy="45" r="2" fill="hsl(var(--accent))" className="center-dot" />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center mt-2">
            <span className="font-headline text-xl tracking-[0.2em] text-primary font-light animate-heart-beat">
              A & E
            </span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="font-headline text-5xl tracking-[0.4em] text-primary uppercase reveal-text mb-2">
            Aethel
          </h1>
          <div className="overflow-hidden">
            <p className="font-headline italic text-lg text-muted-foreground opacity-0 animate-[fade-in-up_1s_ease-out_1.2s_forwards]">
              Celebrating our love story
            </p>
          </div>
        </div>

        <div className="mt-16 w-40 h-[1px] bg-muted mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/10" />
          <div className="h-full bg-accent w-0 animate-[loading-bar_3.5s_ease-in-out_forwards]" />
        </div>
      </div>

      <style jsx global>{`
        .heart-path {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw-heart 3s ease-in-out forwards;
        }

        .center-dot {
          opacity: 0;
          animation: fade-in 0.5s ease-out 2.5s forwards;
        }

        .reveal-text {
          animation: letter-spacing 2.5s ease-out forwards;
        }

        .loading-heart {
          animation: heart-fall linear infinite;
        }

        .animate-heart-beat {
          opacity: 0;
          animation: heart-pulse 2s ease-in-out 2.8s infinite, fade-in 0.5s ease-out 2.8s forwards;
        }

        @keyframes draw-heart {
          0% { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes heart-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes letter-spacing {
          from { letter-spacing: -0.2em; opacity: 0; }
          to { letter-spacing: 0.4em; opacity: 1; }
        }

        @keyframes heart-fall {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% {
            transform: translateY(100vh) rotate(360deg) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
