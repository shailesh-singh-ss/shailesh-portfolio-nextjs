"use client";

import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);


  return (
    <div ref={sectionRef} className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {portfolioData.about.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl"></div>

              {/* Main image container - hidden on mobile */}
              <div className="relative glass-card p-6 hidden md:block">
                <Image
                  src={portfolioData.about.image}
                  alt="About Shailesh"
                  width={500}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>

              {/* Floating elements - hidden on mobile */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full  items-center justify-center animate-pulse-slow hidden md:flex">
                <span className="text-white font-bold text-lg">AI</span>
              </div>

              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full  items-center justify-center animate-bounce-slow hidden md:flex">
                <span className="text-white font-bold">&lt;/&gt;</span>
              </div>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-8 animate-slide-in-right">
            {portfolioData.about.skills.map((skill, index) => (
              <div
                key={skill.category}
                className="glass-card p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex gap-4 items-center">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
                    <Image
                      src={skill.icon}
                      alt={skill.category}
                      width={32}
                      height={32}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {skill.category}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Why Choose Me?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Innovation</h4>
                <p className="text-gray-400">
                  Always exploring cutting-edge technologies and implementing
                  creative solutions
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Quality</h4>
                <p className="text-gray-400">
                  Committed to writing clean, efficient, and maintainable code
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-xl font-semibold text-white">Growth</h4>
                <p className="text-gray-400">
                  Continuously learning and adapting to new challenges and
                  technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
