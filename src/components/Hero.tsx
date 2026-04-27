"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";
import TermWindow from "@/components/ui/TermWindow";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-ink-500 font-mono text-xs">
      <span className="animate-pulse">{"// loading geometry..."}</span>
    </div>
  ),
});

const lines = [
  { glyph: "$", cmd: "whoami", out: "Shailesh Singh" },
  { glyph: "$", cmd: "role", out: "AI Engineer · Real-time AI Systems" },
  { glyph: "$", cmd: "company", out: "Zykrr · Sep 2025 — Present" },
  { glyph: "$", cmd: "location", out: "Gurgaon, Haryana, India" },
  { glyph: "$", cmd: "stack | head", out: "Gen AI · ClickHouse · K8s · LiveKit · LangChain" },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />

      <div className="container-custom px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 6 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-xs text-bone-500 font-mono mb-3 tracking-wider"
            >
              <span className="text-lime-400">▌</span> connection established
            </motion.p>

            <TermWindow
              title="~/shailesh — bash"
              subtitle={`status: 200 ok`}
              glow
            >
              <div className="space-y-2.5">
                {lines.map((line, i) => (
                  <motion.div
                    key={line.cmd}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.18, duration: 0.3 }}
                  >
                    <div className="flex items-baseline gap-2 text-sm">
                      <span className="text-lime-400">{line.glyph}</span>
                      <span className="text-bone-100">{line.cmd}</span>
                    </div>
                    <div className="pl-4 mt-0.5 text-bone-300 text-sm">
                      {i === 0 ? (
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-bone-50 tracking-tight block py-1">
                          {line.out}
                        </span>
                      ) : i === 1 ? (
                        <span className="text-lime-400 font-medium text-base sm:text-lg">
                          {line.out}
                        </span>
                      ) : (
                        line.out
                      )}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + lines.length * 0.18 }}
                  className="flex items-baseline gap-2 text-sm pt-1"
                >
                  <span className="text-lime-400">$</span>
                  <span
                    className="text-lime-400 inline-block"
                    style={{ animation: "blink 1s steps(2) infinite" }}
                  >
                    ▌
                  </span>
                </motion.div>
              </div>
            </TermWindow>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-6 text-bone-400 font-sans leading-relaxed max-w-xl"
            >
              {portfolioData.personal.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="term-button-primary"
              >
                <span className="text-current">$</span> ./contact --message
                <ArrowRight size={14} />
              </button>
              <a
                href={portfolioData.personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="term-button"
              >
                <Download size={14} /> resume.pdf
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="mt-6 flex items-center gap-3 text-bone-400"
            >
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-lime-400 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-lime-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                aria-label="Email"
                className="hover:text-lime-400 transition-colors"
              >
                <Mail size={18} />
              </a>
              <span className="text-ink-600 mx-1">·</span>
              <span className="text-xs font-mono text-ink-500">
                press{" "}
                <span className="kbd">tab</span> to traverse · pid{" "}
                <span className="text-lime-400">2026</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="relative h-[420px] sm:h-[520px] lg:h-[560px]"
          >
            <div className="absolute inset-0 rounded-2xl border border-ink-700 bg-ink-900/40 overflow-hidden">
              <div className="absolute top-0 inset-x-0 px-4 py-2 border-b border-ink-700 bg-ink-800/40 flex items-center justify-between font-mono text-[11px] z-10">
                <span className="text-bone-400">~/system-render.glsl</span>
                <span className="text-lime-400 animate-pulse-soft">● live</span>
              </div>
              <div className="absolute inset-0 pt-8">
                <HeroCanvas />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 font-mono text-[11px] border-t border-ink-700 bg-ink-800/40 flex items-center justify-between z-10">
                <span className="text-ink-500">fps: <span className="text-bone-300">~60</span></span>
                <span className="text-ink-500">geom: icosahedron@1.4r</span>
                <span className="text-ink-500">∫ {`{drift, bob, rot}`}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
