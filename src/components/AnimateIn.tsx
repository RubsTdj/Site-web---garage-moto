"use client";

import { useEffect, useRef, useState } from "react";

type Animation = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "fade-in";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: Animation;
};

const initialStyles: Record<Animation, React.CSSProperties> = {
  "fade-up":    { opacity: 0, transform: "translateY(28px)" },
  "fade-left":  { opacity: 0, transform: "translateX(-28px)" },
  "fade-right": { opacity: 0, transform: "translateX(28px)" },
  "scale-in":   { opacity: 0, transform: "scale(0.94)" },
  "fade-in":    { opacity: 0 },
};

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
        ...(visible ? { opacity: 1, transform: "none" } : initialStyles[animation]),
      }}
    >
      {children}
    </div>
  );
}
