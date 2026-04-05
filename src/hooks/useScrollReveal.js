import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const REVEAL_SELECTOR = "main .reveal, footer.site-footer.reveal";

/**
 * Fade/slide-in for `.reveal` blocks on scroll. Re-runs on route change.
 * Respects `prefers-reduced-motion: reduce`.
 */
export function useScrollReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      el.classList.add("reveal--visible");
    });
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const nodes = document.querySelectorAll(REVEAL_SELECTOR);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    const id = window.requestAnimationFrame(() => {
      nodes.forEach((el) => io.observe(el));
    });

    return () => {
      window.cancelAnimationFrame(id);
      io.disconnect();
    };
  }, [pathname]);
}
