import { useEffect, useRef } from "react";

/**
 * Attach this ref to any element you want to fade/slide in as it enters the
 * viewport. Optionally pass a variant ("from-left" | "from-right" | "scale-up")
 * and a stagger flag for list containers.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options?: {
  variant?: "from-left" | "from-right" | "scale-up";
  stagger?: boolean;
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply base class
    if (options?.stagger) {
      el.classList.add("stagger-children");
    } else {
      el.classList.add("will-animate");
      if (options?.variant) el.classList.add(options.variant);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin ?? "0px 0px -60px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.variant, options?.stagger, options?.threshold, options?.rootMargin]);

  return ref;
}
