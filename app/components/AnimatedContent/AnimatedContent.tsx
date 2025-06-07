import { useRef, useEffect, useState, ReactNode, useCallback } from "react";
import { useSpring, animated, SpringConfig } from "@react-spring/web";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  config?: SpringConfig;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  config = { tension: 50, friction: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounce function untuk mencegah terlalu banyak state updates
  const debouncedSetInView = useCallback((value: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setInView(value);
    }, delay);
  }, [delay]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Gunakan options yang lebih optimal
    const observerOptions = {
      threshold,
      rootMargin: '50px', // Preload sebelum element terlihat
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !inView) {
            debouncedSetInView(true);
            // Unobserve setelah animasi dimulai untuk mengurangi beban
            if (observerRef.current) {
              observerRef.current.unobserve(element);
            }
          }
        });
      },
      observerOptions
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, debouncedSetInView, inView]);

  const directions: Record<"vertical" | "horizontal", string> = {
    vertical: "Y",
    horizontal: "X",
  };

  const springProps = useSpring({
    from: {
      transform: `translate${directions[direction]}(${
        reverse ? `-${distance}px` : `${distance}px`
      }) scale(${scale})`,
      opacity: animateOpacity ? initialOpacity : 1,
    },
    to: inView
      ? {
          transform: `translate${directions[direction]}(0px) scale(1)`,
          opacity: 1,
        }
      : undefined,
    config: {
      ...config,
      // Tambahkan will-change untuk optimasi GPU
      tension: config.tension || 50,
      friction: config.friction || 25,
    },
  });

  return (
    <animated.div 
      ref={ref} 
      style={{
        ...springProps,
        willChange: 'transform, opacity', // Optimasi GPU
      }}
    >
      {children}
    </animated.div>
  );
};

export default AnimatedContent;
