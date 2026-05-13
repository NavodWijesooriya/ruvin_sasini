"use client";

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulate initial loading time or wait for critical assets
    const timer = setTimeout(() => {
      setIsFading(true);
      // Wait for fade animation to complete before removing from DOM
      setTimeout(() => setIsVisible(false), 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ease-in-out",
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="text-center space-y-6">
        <div className="relative inline-block">
          <Heart 
            className="w-16 h-16 text-accent animate-pulse fill-accent/10" 
            strokeWidth={1}
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="font-headline text-xs tracking-tighter text-primary font-bold">A & E</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="font-headline text-3xl tracking-widest text-primary uppercase opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
            Aethel
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 bg-accent/30" />
            <p className="font-headline italic text-sm text-muted-foreground">The journey begins</p>
            <div className="h-[1px] w-8 bg-accent/30" />
          </div>
        </div>

        <div className="w-48 h-[2px] bg-muted mx-auto rounded-full overflow-hidden">
          <div className="h-full bg-accent w-0 animate-[loading-bar_2s_ease-in-out_forwards]" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
