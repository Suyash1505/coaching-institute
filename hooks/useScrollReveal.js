"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const allRevealElements = element.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
      );
      allRevealElements.forEach((el) => el.classList.add("revealed"));

      if (
        element.classList.contains("scroll-reveal") ||
        element.classList.contains("scroll-reveal-left") ||
        element.classList.contains("scroll-reveal-right") ||
        element.classList.contains("scroll-reveal-scale")
      ) {
        element.classList.add("revealed");
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px 0px -60px 0px",
      }
    );

    // Observe all children with scroll-reveal classes
    const revealSelectors =
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale";

    const revealElements = element.querySelectorAll(revealSelectors);
    revealElements.forEach((el) => observer.observe(el));

    // Also observe the container itself if it has a scroll-reveal class
    if (element.matches(revealSelectors)) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
