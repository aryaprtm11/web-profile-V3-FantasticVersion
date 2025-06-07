"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useMemo, useCallback } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

// Pre-calculate random values untuk mengurangi computation
const generatePrecomputedValues = (count: number) => {
  return Array.from({ length: count }, () => ({
    leftPosition: Math.random(),
    delay: Math.random(),
    duration: Math.random(),
  }));
};

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  
  // Pre-compute random values untuk performance
  const precomputedValues = useMemo(() => 
    generatePrecomputedValues(number), 
    [number]
  );

  // Memoize meteor styles untuk mencegah re-calculation
  const meteorStyles = useMemo(() => {
    if (windowWidth === 0) return [];
    
    return precomputedValues.map((values) => ({
      "--angle": angle + "deg",
      top: -5,
      left: `calc(-50% + ${Math.floor(values.leftPosition * windowWidth)}px)`,
      animationDelay: (values.delay * (maxDelay - minDelay) + minDelay) + "s",
      animationDuration: (Math.floor(values.duration * (maxDuration - minDuration) + minDuration)) + "s",
    } as React.CSSProperties));
  }, [precomputedValues, windowWidth, angle, minDelay, maxDelay, minDuration, maxDuration]);

  // Throttled resize handler
  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
  }, []);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    // Throttle resize events untuk performance
    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250); // Throttle ke 250ms
    };

    window.addEventListener('resize', throttledResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(resizeTimeout);
    };
  }, [handleResize]);

  // Early return jika windowWidth belum di-set
  if (windowWidth === 0) return null;

  return (
    <>
      {meteorStyles.map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={style}
          className={cn(
            "pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10] meteor",
            className,
          )}
        >
          {/* Meteor Tail - simplified untuk performance */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  );
};
