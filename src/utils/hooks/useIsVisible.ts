import { RefObject, useEffect, useState } from "react";

export function useIsVisible(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
    return;
  }, [ref]);

  return isIntersecting;
}