"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import TermWindow from "@/components/ui/TermWindow";

export default function Projects() {
    const featured = portfolioData.projects.filter((p) => p.featured);
    const others = portfolioData.projects.filter((p) => !p.featured);
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="section-padding">
            <div className="container-custom">
                <div className="mb-10">
                    <div className="font-mono text-xs text-ink-500 mb-2">
                        <span className="text-lime-400">$</span> ls ~/projects
                        --featured
                    </div>
                    <h2 className="font-mono text-3xl sm:text-4xl text-bone-50 font-bold tracking-tight">
                        ~/projects
                    </h2>
                </div>

                <div className="space-y-6">
                    {featured.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <TermWindow
                                title={`${p.title.toLowerCase()}/README.md`}
                                subtitle="● featured"
                                glow
                                bodyClassName="p-0"
                            >
                                <div className="grid lg:grid-cols-[1.1fr_1.4fr]">
                                    <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px] bg-ink-800 border-b lg:border-b-0 lg:border-r border-ink-700 overflow-hidden">
                                        <Image
                                            src={p.image}
                                            alt={p.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent pointer-events-none" />
                                        <div className="absolute top-3 left-3 font-mono text-[11px] text-lime-400 bg-ink-950/70 backdrop-blur px-2 py-0.5 rounded">
                                            ● featured
                                        </div>
                                    </div>

                                    <div className="p-5 sm:p-6 flex flex-col">
                                        <h3 className="font-mono text-xl sm:text-2xl text-bone-50 font-bold mb-1">
                                            # {p.title}
                                        </h3>
                                        <p className="font-mono text-sm text-lime-400 mb-3">
                                            &gt; {p.tagline}
                                        </p>
                                        <p className="font-sans text-bone-300 leading-relaxed mb-4">
                                            {p.description}
                                        </p>

                                        {p.metric && (
                                            <div className="mb-4 px-3 py-2 border-l-2 border-lime-400 bg-lime-400/[0.04] font-mono text-xs text-bone-200">
                                                <span className="text-lime-400">
                                                    ▸
                                                </span>{" "}
                                                {p.metric}
                                            </div>
                                        )}

                                        <div className="mb-5">
                                            <div className="font-mono text-[11px] text-ink-500 mb-2">
                                                {"// requirements.txt"}
                                            </div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {p.technologies.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="badge-tag"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-auto flex flex-wrap gap-2">
                                            {p.demo && p.demo !== p.source && (
                                                <a
                                                    href={p.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="term-button-primary"
                                                >
                                                    <ExternalLink size={14} />{" "}
                                                    live ↗
                                                </a>
                                            )}
                                            <a
                                                href={p.source}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="term-button"
                                            >
                                                <Github size={14} /> git remote
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </TermWindow>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10">
                    <button
                        type="button"
                        onClick={() => setShowAll(!showAll)}
                        className="term-button"
                        aria-expanded={showAll ? "true" : "false"}
                    >
                        <ChevronDown
                            size={14}
                            className={`transition-transform ${showAll ? "rotate-180" : ""}`}
                        />
                        {showAll ? "hide" : "show"} other projects (
                        {others.length})
                    </button>

                    <AnimatePresence initial={false}>
                        {showAll && (
                            <motion.div
                                key="other-projects"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {others.map((p) => (
                                        <a
                                            key={p.title}
                                            href={p.source}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-ink-900 border border-ink-700 hover:border-lime-400/40 rounded-md p-4 transition-colors flex flex-col"
                                        >
                                            <div className="font-mono text-sm text-bone-100 group-hover:text-lime-400 transition-colors">
                                                # {p.title}
                                            </div>
                                            <div className="font-mono text-xs text-bone-500 mt-1">
                                                {p.tagline}
                                            </div>
                                            <div className="mt-3 flex flex-wrap gap-1">
                                                {p.technologies
                                                    .slice(0, 4)
                                                    .map((t) => (
                                                        <span
                                                            key={t}
                                                            className="badge-tag"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                {p.technologies.length > 4 && (
                                                    <span className="badge-tag">
                                                        +
                                                        {p.technologies.length -
                                                            4}
                                                    </span>
                                                )}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
