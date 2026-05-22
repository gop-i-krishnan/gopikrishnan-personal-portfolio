"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ParticleCanvas = dynamic(() => import("@/components/ParticleCanvas"), {
  ssr: false,
});

export default function ParticleBackground() {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const canRunCanvas = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)").matches;
    const timer = window.setTimeout(() => setShowCanvas(canRunCanvas), 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {showCanvas && <ParticleCanvas />}
      {/* Background ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-black opacity-80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,240,255,0.12),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(112,0,255,0.12),transparent_26%),radial-gradient(circle_at_50%_85%,rgba(0,240,255,0.08),transparent_30%)] md:hidden" />
    </div>
  );
}
