"use client";

import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./SpotlightCard.module.css";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.18)",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) {
      return;
    }

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={cn(styles.cardSpotlight, className)}>
      {children}
    </div>
  );
}
