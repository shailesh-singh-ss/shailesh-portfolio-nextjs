"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

function shortHash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h << 5) - h + seed.charCodeAt(i);
  return Math.abs(h).toString(16).padStart(7, "0").slice(0, 7);
}

export default function Experience() {
  const [open, setOpen] = useState<number[]>([0]);

  const toggle = (i: number) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="mb-10">
          <div className="font-mono text-xs text-ink-500 mb-2">
            <span className="text-lime-400">$</span> git log --author=&quot;Shailesh&quot; --oneline
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl text-bone-50 font-bold tracking-tight">
            ~/work_history
          </h2>
          <p className="font-mono text-sm text-bone-400 mt-2">
            {"// commits in reverse chronological order"}
          </p>
        </div>

        <div className="relative pl-8 sm:pl-10">
          <div
            className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-lime-400/60 via-ink-700 to-transparent"
            aria-hidden
          />

          <div className="space-y-4">
            {portfolioData.experience.map((exp, i) => {
              const isOpen = open.includes(i);
              const hash = shortHash(`${exp.company}-${exp.title}`);
              return (
                <motion.div
                  key={exp.company + i}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.06 }}
                  className="relative"
                >
                  <div
                    className="absolute -left-[26px] sm:-left-[34px] top-3 w-3.5 h-3.5 rounded-full border-2 border-lime-400 bg-ink-950 shadow-[0_0_0_4px_rgba(163,230,53,0.08)]"
                    aria-hidden
                  />

                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full text-left bg-ink-900 border border-ink-700 hover:border-lime-400/40 rounded-md transition-colors group"
                  >
                    <div className="px-4 sm:px-5 py-3.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm">
                      <ChevronRight
                        size={14}
                        className={`text-ink-500 transition-transform ${
                          isOpen ? "rotate-90 text-lime-400" : ""
                        }`}
                      />
                      <span className="text-lime-400">{hash}</span>
                      {exp.type === "current" && (
                        <span className="text-bone-400">
                          (HEAD &rarr;{" "}
                          <span className="text-lime-400">main</span>)
                        </span>
                      )}
                      <span className="text-bone-100 font-medium">
                        {exp.title}
                      </span>
                      <span className="text-bone-500">@</span>
                      <span className="text-bone-100">{exp.company}</span>
                      <span className="ml-auto text-bone-500 text-xs">
                        {exp.duration}
                      </span>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-ink-700">
                        <div className="font-mono text-sm text-bone-300 mb-4">
                          <span className="text-ink-500">| Author:</span>{" "}
                          {exp.title} @ {exp.company}
                        </div>
                        <div className="font-mono text-sm text-bone-300 mb-4">
                          <span className="text-ink-500">| Date:</span>{" "}
                          {exp.duration}
                          {exp.location && (
                            <>
                              {"  "}
                              <span className="text-ink-500">| Location:</span>{" "}
                              {exp.location}
                            </>
                          )}
                        </div>
                        <div className="font-mono text-sm text-bone-100 mb-3">
                          <span className="text-ink-500">|</span>{" "}
                          <span className="text-lime-400">Summary:</span>{" "}
                          {exp.summary}
                        </div>
                        <ul className="space-y-2 mb-5">
                          {exp.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="font-mono text-sm text-bone-300 leading-relaxed"
                            >
                              <span className="text-ink-500">|</span>{" "}
                              <span className="text-lime-400/80">─</span> {b}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((t) => (
                            <span key={t} className="badge-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </button>
                </motion.div>
              );
            })}

            <div className="font-mono text-xs text-ink-500 pl-1 pt-2">
              <span className="text-lime-400">▌</span> end of log · 2 commits
              shown
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
