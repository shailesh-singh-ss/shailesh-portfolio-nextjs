"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function ImpactStrip() {
  return (
    <div className="relative section-padding pt-8 pb-12 lg:pt-12 lg:pb-20">
      <div className="container-custom">
        <div className="font-mono text-xs text-ink-500 mb-4 flex items-center gap-2">
          <span className="text-lime-400">$</span> cat /var/log/zykrr/impact.json
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {portfolioData.impact.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group relative bg-ink-900 border border-ink-700 rounded-md p-4 lg:p-5 hover:border-lime-400/40 transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-500 mb-2 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-lime-400 animate-pulse-soft" />
                  metric_{String(i).padStart(2, "0")}
                </div>
                <div className="font-mono text-2xl lg:text-3xl font-bold text-lime-400 leading-none mb-2 truncate">
                  {item.metric}
                </div>
                <div className="font-mono text-sm text-bone-100 mb-1">{item.label}</div>
                <div className="font-mono text-[11px] text-bone-500 leading-snug">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
