
"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'animate-fade-in-up' | 'animate-fade-in-left' | 'animate-fade-in-right' | 'animate-zoom-in';
  delay?: string;
}

export default function ScrollReveal({ 
  children, 
  className, 
  animation = "animate-fade-in-up",
  delay = "0s"
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && animation,
        className
      )}
      style={{ 
        animationDelay: delay,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
}
