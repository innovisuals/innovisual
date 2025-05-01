
import { useCallback, useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit,
  once: boolean = true
) {
  const localRef = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  // Create a callback ref that can be safely passed to elements
  const setRef = useCallback((node: T | null) => {
    localRef.current = node;
  }, []);

  useEffect(() => {
    const node = localRef.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.2, ...options }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [options, once]);

  return [setRef, inView] as const;
}
