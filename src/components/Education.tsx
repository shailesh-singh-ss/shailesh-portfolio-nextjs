"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  return (
    <div className="section-padding pt-8 lg:pt-12">
      <div className="container-custom">
        <div className="mb-8">
          <div className="font-mono text-xs text-ink-500 mb-2">
            <span className="text-lime-400">$</span> education --institute IET-Lucknow --verbose
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl text-bone-50 font-bold tracking-tight">
            ~/education
          </h2>
        </div>

        <div className="space-y-4">
          {portfolioData.education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative bg-ink-900 border border-ink-700 hover:border-lime-400/30 rounded-md transition-colors overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-400/60" />
              <div className="p-5 sm:p-6 grid sm:grid-cols-[auto_1fr_auto] gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 rounded-md bg-ink-800 border border-ink-700 flex items-center justify-center text-lime-400">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h3 className="font-mono text-lg sm:text-xl text-bone-50 font-semibold">
                    {edu.school}
                  </h3>
                  <p className="font-mono text-sm text-bone-300 mt-1">
                    {edu.degree}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 font-mono text-xs text-bone-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} className="text-lime-400" />
                      {edu.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={12} className="text-lime-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
                    cgpa
                  </div>
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-lime-400">
                    {edu.cgpa}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
