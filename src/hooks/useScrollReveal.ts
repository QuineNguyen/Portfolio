import { useEffect, useRef, useState } from "react";

type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  variant?: AnimationVariant;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  triggerOnce = true,
  variant = "fade-up",
  delay = 0,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  const style: React.CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: "0.8s",
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
  };

  if (!isVisible) {
    style.opacity = 0;
    switch (variant) {
      case "fade-up":
        style.transform = "translateY(50px)";
        break;
      case "fade-down":
        style.transform = "translateY(-50px)";
        break;
      case "fade-left":
        style.transform = "translateX(50px)";
        break;
      case "fade-right":
        style.transform = "translateX(-50px)";
        break;
      case "zoom-in":
        style.transform = "scale(0.9)";
        break;
      case "fade":
        style.transform = "none";
        break;
    }
  } else {
    style.opacity = 1;
    style.transform = "none";
  }

  return { ref, style, isVisible };
}
