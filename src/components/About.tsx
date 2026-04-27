"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import TermWindow from "@/components/ui/TermWindow";

export default function About() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="mb-10">
          <div className="font-mono text-xs text-ink-500 mb-2">
            <span className="text-lime-400">$</span> cat about.md
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl text-bone-50 font-bold tracking-tight">
            ~/about_me
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TermWindow title="~/identity.png" subtitle="image · 100%" glow>
              <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden border border-ink-700 bg-ink-800">
                <Image
                  src={portfolioData.about.image}
                  alt={`Portrait of ${portfolioData.personal.name}`}
                  fill
                  className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] flex items-center justify-between">
                  <span className="text-lime-400">● recording</span>
                  <span className="text-bone-300">
                    {portfolioData.personal.location.split(",")[0]}
                  </span>
                </div>
              </div>
            </TermWindow>

            <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-xs">
              <div className="bg-ink-900 border border-ink-700 rounded px-3 py-2">
                <div className="text-ink-500">phone</div>
                <div className="text-bone-200 truncate">
                  {portfolioData.personal.phone}
                </div>
              </div>
              <div className="bg-ink-900 border border-ink-700 rounded px-3 py-2">
                <div className="text-ink-500">email</div>
                <div className="text-bone-200 truncate">
                  {portfolioData.personal.email}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="font-sans text-bone-200 text-base sm:text-lg leading-relaxed">
              {portfolioData.about.intro}
            </p>
            <p className="font-sans text-bone-300 leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            <div className="pt-2">
              <div className="font-mono text-xs text-ink-500 mb-2">
                <span className="text-lime-400">$</span> tags --grep .
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.about.tags.map((t) => (
                  <div
                    key={t.label}
                    className="group bg-ink-900 border border-ink-700 hover:border-lime-400/40 rounded px-3 py-2 transition-colors"
                  >
                    <div className="font-mono text-sm text-lime-400">
                      [{t.label}]
                    </div>
                    <div className="font-mono text-xs text-bone-400 mt-0.5">
                      {t.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
