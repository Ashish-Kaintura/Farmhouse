import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function UniversalCursor() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Disable on mobile
    if (window.innerWidth < 768) return;

    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
      });

      gsap.to(glowRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Small Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-green-400 rounded-full pointer-events-none z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-40 h-40 bg-green-500/20 rounded-full blur-3xl pointer-events-none z-[9998]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
