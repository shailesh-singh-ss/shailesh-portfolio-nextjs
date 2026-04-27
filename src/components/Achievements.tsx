"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  const competitive = portfolioData.achievements.competitive;
  const certs = portfolioData.achievements.certifications;

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="mb-10">
          <div className="font-mono text-xs text-ink-500 mb-2">
            <span className="text-lime-400">$</span> top --sort=rating
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl text-bone-50 font-bold tracking-tight">
            ~/achievements
          </h2>
        </div>

        <div className="bg-ink-900 border border-ink-700 rounded-md overflow-hidden">
          <div className="px-4 py-3 border-b border-ink-700 bg-ink-800/50">
            <div className="grid grid-cols-[40px_1fr_1fr_auto] sm:grid-cols-[60px_1.4fr_1fr_1fr_auto] gap-3 font-mono text-[11px] text-ink-500 uppercase tracking-wider">
              <span>rank</span>
              <span>platform / handle</span>
              <span className="hidden sm:block">title</span>
              <span>rating</span>
              <span className="text-right">link</span>
            </div>
          </div>

          <div>
            {competitive.map((c, i) => (
              <motion.a
                key={c.platform}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="block px-4 py-4 border-t border-ink-700 first:border-t-0 hover:bg-lime-400/[0.03] transition-colors group"
              >
                <div className="grid grid-cols-[40px_1fr_1fr_auto] sm:grid-cols-[60px_1.4fr_1fr_1fr_auto] gap-3 items-center font-mono text-sm">
                  <span className="text-lime-400 font-bold">
                    #{(i + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <div className="text-bone-100">{c.platform}</div>
                    <div className="text-xs text-bone-500">@{c.handle}</div>
                  </div>
                  <span className="hidden sm:block text-bone-300">
                    {c.title}
                  </span>
                  <span className="text-lime-400 font-bold text-base sm:text-lg">
                    {c.rating}
                  </span>
                  <span className="text-right text-bone-400 group-hover:text-lime-400 transition-colors">
                    <ExternalLink size={14} className="inline" />
                  </span>
                </div>
                <div className="mt-3 sm:pl-[60px] grid sm:grid-cols-2 gap-1.5">
                  {c.highlights.map((h, j) => (
                    <div
                      key={j}
                      className="font-mono text-xs text-bone-400 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-lime-400/60">─</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="font-mono text-xs text-ink-500 mb-3">
            <span className="text-lime-400">$</span> ls ~/certs
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certs.map((c, i) => (
              <motion.a
                key={c.title}
                href={c.certificate}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-ink-900 border border-ink-700 hover:border-lime-400/40 rounded-md p-4 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-ink-800 border border-ink-700 flex items-center justify-center text-lime-400 flex-shrink-0">
                    <Award size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-sm text-bone-100 truncate">
                      {c.title}
                    </div>
                    <div className="font-mono text-xs text-bone-500">
                      {c.issuer} · {c.date}
                    </div>
                    <div className="font-mono text-xs text-lime-400 mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      view <ExternalLink size={11} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
