"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";

export default function ParticleCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
      <Stars radius={90} depth={45} count={1800} factor={4} saturation={0} fade speed={0.6} />
      <Sparkles count={80} scale={12} size={2} speed={0.25} opacity={0.18} color="#00f0ff" />
      <Sparkles count={40} scale={12} size={3} speed={0.15} opacity={0.08} color="#7000ff" />
    </Canvas>
  );
}
