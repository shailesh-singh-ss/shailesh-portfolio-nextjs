"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField({ count = 500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.x = Math.sin(t * 0.15) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#a3e635"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function Core() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = t * 0.18;
    groupRef.current.rotation.y = t * 0.22;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Icosahedron args={[1.35, 1]}>
          <MeshDistortMaterial
            color="#a3e635"
            wireframe
            distort={0.32}
            speed={1.6}
            roughness={0.4}
          />
        </Icosahedron>
        <Icosahedron args={[1.7, 0]}>
          <meshBasicMaterial
            color="#a3e635"
            wireframe
            transparent
            opacity={0.18}
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#a3e635" />
      <Core />
      <ParticleField count={550} />
    </Canvas>
  );
}
