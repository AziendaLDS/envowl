"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { CARD_SPOTLIGHT_PURPLE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import "./SpotlightFace.css";

type CardSpotlightProps = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
};

/** Radial spotlight for non-BorderGlow cards (e.g. ArticleCard grid on /resources). */
export default function CardSpotlight({
  children,
  className,
  spotlightColor = CARD_SPOTLIGHT_PURPLE,
}: CardSpotlightProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    rootRef.current?.style.setProperty("--spotlight-color", spotlightColor);
  }, [spotlightColor]);

  const onPointerMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spotlight-mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      className={cn("card-with-spotlight", className)}
      onPointerMove={onPointerMove}
    >
      <div className="spotlight-face" aria-hidden />
      {children}
    </div>
  );
}
