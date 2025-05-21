"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  once = true,
  threshold = 0.1,
}) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    once,
  });

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";

    switch (animation) {
      case "fade-up":
        return "animate-fade-up";
      case "fade-down":
        return "animate-fade-down";
      case "fade-left":
        return "animate-fade-left";
      case "fade-right":
        return "animate-fade-right";
      case "zoom-in":
        return "animate-zoom-in";
      case "zoom-out":
        return "animate-zoom-out";
      default:
        return "animate-fade-up";
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}
