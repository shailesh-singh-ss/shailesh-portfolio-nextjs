"use client";

import { portfolioData } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="section-padding bg-gray-900">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Professional{" "}
                        <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        My career path and professional experiences in software
                        development and AI
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform md:-translate-x-1/2"></div>

                    {/* Experience items */}
                    <div className="space-y-12">
                        {portfolioData.experience.map((exp, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row gap-8 items-center ${
                                    index % 2 === 0
                                        ? "md:flex-row"
                                        : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full transform md:-translate-x-1/2 border-4 border-gray-900"></div>

                                {/* Content */}
                                <div
                                    className={`flex-1 ml-16 md:ml-0 ${
                                        index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                                    }`}
                                >
                                    <div className="glass-card p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                                        {/* Header */}
                                        <div className="mb-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                {exp.type === "current" && (
                                                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full">
                                                        Current
                                                    </span>
                                                )}
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <Calendar size={16} />
                                                    <span>{exp.duration}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-1">
                                                {exp.title}
                                            </h3>

                                            <div className="flex items-center gap-2 text-primary-400 font-semibold">
                                                <MapPin size={16} />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="space-y-4">
                                            <h4 className="text-lg font-semibold text-white">
                                                Technologies Used:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map(
                                                    (tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm border border-gray-600 hover:border-primary-500 transition-colors duration-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Placeholder for company logo or illustration */}
                                <div
                                    className={`flex-shrink-0 hidden md:block ${
                                        index % 2 === 0
                                            ? "md:order-last"
                                            : "md:order-first"
                                    }`}
                                >
                                    <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl border border-gray-600 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                                <Image
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    width={64}
                                                    height={64}
                                                    className="object-contain rounded-full"
                                                />
                                            </div>
                                            <span className="text-gray-400 text-sm font-medium">
                                                {exp.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future goals section */}
                <div className="mt-20">
                    <div className="glass-card p-8 md:p-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What&apos;s Next?
                        </h3>
                        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                            I&apos;m actively seeking opportunities to contribute to
                            innovative projects in full-stack development and
                            generative AI. Looking forward to collaborating with
                            teams that value creativity, technical excellence,
                            and cutting-edge solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => {
                                    console.log("Let's Connect button clicked");
                                    scrollToSection("contact");
                                }}
                                className="glow-button bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                Let&apos;s Connect
                            </button>
                            <button
                                onClick={() => {
                                    console.log("View Projects button clicked");
                                    scrollToSection("projects");
                                }}
                                className="border border-primary-500 text-primary-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-500 hover:text-white hover:scale-105"
                            >
                                View Projects
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
