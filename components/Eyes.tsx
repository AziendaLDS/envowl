"use client";

import { useEffect, useRef } from "react";
import "./Eyes.css";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function Eyes() {
  const leftPupilRef = useRef<HTMLSpanElement | null>(null);
  const rightPupilRef = useRef<HTMLSpanElement | null>(null);
  const leftEyeRef = useRef<HTMLDivElement | null>(null);
  const rightEyeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const movePupil = (eye: HTMLDivElement | null, pupil: HTMLSpanElement | null, clientX: number, clientY: number) => {
      if (!eye || !pupil) return;
      const rect = eye.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = clientX - cx;
      const dy = clientY - cy;
      const distance = Math.hypot(dx, dy) || 1;
      const maxOffset = 6;
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
  }, []);

  return (
    <div className="eyes-widget" aria-hidden>
      <div ref={leftEyeRef} className="eyes-eye">
        <span ref={leftPupilRef} className="eyes-pupil" />
      </div>
      <div ref={rightEyeRef} className="eyes-eye">
        <span ref={rightPupilRef} className="eyes-pupil" />
      </div>
    </div>
  );
}
