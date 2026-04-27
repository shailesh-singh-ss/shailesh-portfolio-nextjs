"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { Skill } from "@/data/portfolio";

type Props = {
  skills: Skill[];
  highlightedCategory?: string | null;
};

type Node = {
  skill: Skill;
  position: THREE.Vector3;
};

const RADIUS = 2.4;

function fibonacciSphere(samples: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / Math.max(samples - 1, 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  return points;
}

function Edges({
  nodes,
  highlightedCategory,
}: {
  nodes: Node[];
  highlightedCategory?: string | null;
}) {
  const { activePositions, idlePositions } = useMemo(() => {
    const byCategory = new Map<string, Node[]>();
    for (const n of nodes) {
      const arr = byCategory.get(n.skill.category) ?? [];
      arr.push(n);
      byCategory.set(n.skill.category, arr);
    }

    const active: number[] = [];
    const idle: number[] = [];

    for (const [category, group] of byCategory.entries()) {
      const isActive = highlightedCategory === category;
      const target = isActive ? active : idle;
      for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
          const a = group[i].position;
          const b = group[j].position;
          target.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }

    return {
      activePositions: new Float32Array(active),
      idlePositions: new Float32Array(idle),
    };
  }, [nodes, highlightedCategory]);

  return (
    <group>
      {idlePositions.length > 0 && (
        <lineSegments key={`idle-${idlePositions.length}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[idlePositions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#3a3a45"
            transparent
            opacity={highlightedCategory ? 0.18 : 0.32}
          />
        </lineSegments>
      )}
      {activePositions.length > 0 && (
        <lineSegments key={`active-${activePositions.length}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[activePositions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#a3e635" transparent opacity={0.7} />
        </lineSegments>
      )}
    </group>
  );
}

function SkillNode({
  skill,
  position,
  highlighted,
  dimmed,
  onHover,
}: {
  skill: Skill;
  position: THREE.Vector3;
  highlighted: boolean;
  dimmed: boolean;
  onHover: (name: string | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const active = highlighted || hovered;

  useFrame(() => {
    if (!meshRef.current) return;
    const target = active ? 1.6 : dimmed ? 0.7 : 1;
    const current = meshRef.current.scale.x;
    const next = current + (target - current) * 0.15;
    meshRef.current.scale.setScalar(next);
  });

  const color = active ? "#a3e635" : dimmed ? "#2a2a32" : "#7c7c84";

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(skill.name);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={dimmed && !active ? 0.5 : 1}
        />
      </mesh>
      {active && (
        <mesh>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshBasicMaterial color="#a3e635" transparent opacity={0.18} />
        </mesh>
      )}
    </group>
  );
}

function HoverLabel({
  position,
  text,
}: {
  position: THREE.Vector3;
  text: string;
}) {
  return (
    <Html
      position={position}
      center
      distanceFactor={8}
      zIndexRange={[10, 0]}
      style={{ pointerEvents: "none" }}
    >
      <div className="px-2 py-1 rounded bg-ink-900/90 border border-lime-400/40 font-mono text-[11px] text-lime-400 whitespace-nowrap shadow-lg -translate-y-6">
        {text}
      </div>
    </Html>
  );
}

function Cluster({ skills, highlightedCategory }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const nodes: Node[] = useMemo(() => {
    const positions = fibonacciSphere(skills.length, RADIUS);
    return skills.map((s, i) => ({ skill: s, position: positions[i] }));
  }, [skills]);

  const hoveredNode = hoveredName
    ? nodes.find((n) => n.skill.name === hoveredName)
    : null;

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.06;
    groupRef.current.rotation.x = Math.sin(t * 0.12) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* faint shell */}
      <mesh>
        <sphereGeometry args={[RADIUS, 24, 24]} />
        <meshBasicMaterial
          color="#a3e635"
          wireframe
          transparent
          opacity={0.04}
        />
      </mesh>

      <Edges nodes={nodes} highlightedCategory={highlightedCategory} />

      {nodes.map((node, i) => (
        <SkillNode
          key={`${node.skill.name}-${i}`}
          skill={node.skill}
          position={node.position}
          highlighted={
            !!highlightedCategory &&
            node.skill.category === highlightedCategory
          }
          dimmed={
            !!highlightedCategory &&
            node.skill.category !== highlightedCategory
          }
          onHover={setHoveredName}
        />
      ))}

      {hoveredNode && (
        <HoverLabel
          position={hoveredNode.position}
          text={hoveredNode.skill.name}
        />
      )}
    </group>
  );
}

export default function SkillCluster({ skills, highlightedCategory }: Props) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.7} />
      <Cluster skills={skills} highlightedCategory={highlightedCategory} />
    </Canvas>
  );
}
