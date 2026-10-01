"use client";

import { useEffect, useRef } from "react";
import "./Eyes.css";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Owl eyes that track the pointer.
 * Default: small fixed widget (bottom-left, every page).
 * `inline`: large in-flow version sized by `size` (eye width in px).
 */
export default function Eyes({
  inline = false,
  size = 24,
  className = "",
}: {
  inline?: boolean;
  size?: number;
  className?: string;
}) {
  const leftPupilRef = useRef<HTMLSpanElement | null>(null);
  const rightPupilRef = useRef<HTMLSpanElement | null>(null);
  const leftEyeRef = useRef<HTMLDivElement | null>(null);
  const rightEyeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const maxOffset = size * 0.25;
    const movePupil = (eye: HTMLDivElement | null, pupil: HTMLSpanElement | null, clientX: number, clientY: number) => {
      if (!eye || !pupil) return;
      const rect = eye.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = clientX - cx;
      const dy = clientY - cy;
      const distance = Math.hypot(dx, dy) || 1;
      const offset = clamp(distance * 0.08, 0, maxOffset);
      const ox = (dx / distance) * offset;
      const oy = (dy / distance) * offset;
      pupil.style.transform = `translate(${ox}px, ${oy}px)`;
    };

    const handlePointerMove = (event: PointerEvent) => {
      movePupil(leftEyeRef.current, leftPupilRef.current, event.clientX, event.clientY);
      movePupil(rightEyeRef.current, rightPupilRef.current, event.clientX, event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [size]);

  return (
    <div
      className={`${inline ? "eyes-inline" : "eyes-widget"} ${className}`}
      style={{ ["--eye" as string]: `${size}px` }}
      aria-hidden
    >
      <div ref={leftEyeRef} className="eyes-eye">
        <span ref={leftPupilRef} className="eyes-pupil" />
      </div>
      <div ref={rightEyeRef} className="eyes-eye">
        <span ref={rightPupilRef} className="eyes-pupil" />
      </div>
    </div>
  );
}
