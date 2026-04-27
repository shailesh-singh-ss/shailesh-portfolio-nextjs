"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData, type Skill } from "@/data/portfolio";

const SkillCluster = dynamic(
  () => import("@/components/three/SkillCluster"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center text-ink-500 font-mono text-xs">
        <span className="animate-pulse">{"// indexing nodes..."}</span>
      </div>
    ),
  },
);

const categoryOrder: Skill["category"][] = [
  "Languages",
  "AI/ML & GenAI",
  "Backend & Systems",
  "DevOps & Cloud",
  "Databases",
  "Core Strengths",
];

const categoryCmd: Record<Skill["category"], string> = {
  Languages: "list --languages",
  "AI/ML & GenAI": "pip list | grep ai/ml",
  "Backend & Systems": "ls ~/backend",
  "DevOps & Cloud": "kubectl get pods --all",
  Databases: "psql -c '\\dt'",
  "Core Strengths": "echo $STRENGTHS",
};

export default function Skills() {
  const [hovered, setHovered] = useState<Skill["category"] | null>(null);

  const grouped = useMemo(() => {
    const map = new Map<Skill["category"], Skill[]>();
    for (const c of categoryOrder) map.set(c, []);
    for (const s of portfolioData.skills) {
      const arr = map.get(s.category);
      if (arr) arr.push(s);
    }
    return map;
  }, []);

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="mb-10">
          <div className="font-mono text-xs text-ink-500 mb-2">
            <span className="text-lime-400">$</span> ls -la ~/.stack
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl text-bone-50 font-bold tracking-tight">
            ~/stack
          </h2>
          <p className="font-mono text-sm text-bone-400 mt-2">
            {"// hover a category to highlight its nodes"}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 items-start">
          <div className="space-y-5">
            {categoryOrder.map((category, i) => {
              const items = grouped.get(category) ?? [];
              if (items.length === 0) return null;
              const isHovered = hovered === category;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.04 }}
                  onMouseEnter={() => setHovered(category)}
                  onMouseLeave={() => setHovered(null)}
                  className={`bg-ink-900 border rounded-md p-4 sm:p-5 transition-colors ${
                    isHovered
                      ? "border-lime-400/40 bg-lime-400/[0.03]"
                      : "border-ink-700 hover:border-ink-600"
                  }`}
                >
                  <div className="font-mono text-xs text-ink-500 mb-3 flex items-center gap-2">
                    <span className="text-lime-400">$</span>
                    <span>{categoryCmd[category]}</span>
                    <span className="ml-auto text-bone-500">
                      {items.length} entries
                    </span>
                  </div>
                  <div className="font-mono text-sm text-bone-100 mb-3 flex items-center gap-2">
                    {isHovered && <span className="text-lime-400">▌</span>}
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((s) => (
                      <span
                        key={s.name}
                        className={`badge-tag ${
                          isHovered ? "badge-tag-active" : ""
                        }`}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-24 h-[460px] lg:h-[640px] rounded-2xl border border-ink-700 bg-ink-900/40 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 px-4 py-2 border-b border-ink-700 bg-ink-800/50 z-10 flex items-center justify-between font-mono text-[11px]">
              <span className="text-bone-400">~/stack-graph.tsx</span>
              <span className="text-lime-400">{portfolioData.skills.length} nodes</span>
            </div>
            <div className="absolute inset-0 pt-8">
              <SkillCluster
                skills={portfolioData.skills}
                highlightedCategory={hovered}
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 px-4 py-2 border-t border-ink-700 bg-ink-800/50 z-10 font-mono text-[11px] text-ink-500">
              {hovered ? (
                <span>
                  <span className="text-lime-400">●</span> highlighted: {hovered}
                </span>
              ) : (
                <span>{"// hover a panel on the left"}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
