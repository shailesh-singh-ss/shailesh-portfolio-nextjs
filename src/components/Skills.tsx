"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

const skillCategories = [
    "All",
    "Frontend",
    "Backend",
    "Programming",
    "Database",
    "AI/ML",
    "Tools",
];

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredSkills, setFilteredSkills] = useState(portfolioData.skills);

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

    useEffect(() => {
        if (activeCategory === "All") {
            setFilteredSkills(portfolioData.skills);
        } else {
            setFilteredSkills(
                portfolioData.skills.filter(
                    (skill) => skill.category === activeCategory
                )
            );
        }
    }, [activeCategory]);

    return (
        <div
            ref={sectionRef}
            className="relative section-padding bg-gray-900 overflow-hidden"
        >
            
            {/* Subtle animated floating orbs */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div 
                className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-accent-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: '1s' }}
            ></div>
            <div 
                className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: '2s' }}
            ></div>
            <div 
                className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-r from-purple-500/30 to-primary-500/30 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: '3s' }}
            ></div>

            {/* Subtle rotating gradient */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-500/8 via-accent-500/8 to-blue-500/8 rounded-full blur-3xl animate-spin"
                style={{ animationDuration: "40s" }}
            ></div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Skills &{" "}
                        <span className="text-gradient">
                            Technologies
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Technical expertise across multiple domains
                    </p>
                </div>

                {/* Category Filter - Compact Style */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {skillCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid - Ultra Compact */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3 mb-8">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="relative group"
                            style={{
                                animationDelay: `${index * 0.02}s`,
                            }}
                        >
                            {/* Compact Skill Card */}
                            <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-lg p-3 border border-gray-700/40 hover:border-primary-500/60 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Icon */}
                                <div className="relative mb-3">
                                    <div className="w-12 h-12 mx-auto bg-gray-700/80 rounded-lg p-1.5 group-hover:bg-gray-600/80 transition-all duration-300">
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={50}
                                            height={50}
                                            className="mx-auto transition-all duration-300 group-hover:scale-110 brightness-90 group-hover:brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                                            style={{
                                                filter: "brightness(1.2) contrast(1.1) drop-shadow(0 0 8px rgba(255,255,255,0.6))",
                                            }}
                                        />
                                    </div>

                                    {/* Icon Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                                </div>

                                {/* Skill Name - Hidden by default, shows on hover */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 border border-gray-700">
                                    {skill.name}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                </div>

                                {/* Category Dot */}
                                <div className="text-center">
                                    <div className="w-1 h-1 bg-gray-500 group-hover:bg-primary-400 rounded-full mx-auto transition-colors duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skills Summary */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <div className="glass-card p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                                10+
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                            Technologies
                        </h3>
                        <p className="text-gray-400">
                            Proficient in a diverse range of modern technologies
                            and frameworks
                        </p>
                    </div>

                    <div className="glass-card p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                                4+
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                            Years Learning
                        </h3>
                        <p className="text-gray-400">
                            Continuously learning and staying updated with the
                            latest tech trends
                        </p>
                    </div>

                    <div className="glass-card p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                                15+
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                            Projects Built
                        </h3>
                        <p className="text-gray-400">
                            Applied skills in real-world projects and practical
                            applications
                        </p>
                    </div>
                </div>

                {/* Learning Path */}
                <div className="mt-20">
                    <div className="glass-card p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Continuous Learning Journey
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold text-primary-400 mb-4">
                                    Currently Mastering
                                </h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                        Advanced React Patterns & Next.js 13+
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                        Large Language Models (LLMs) &
                                        Fine-tuning
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                        Advanced Python & Data Structures
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-accent-400 mb-4">
                                    Next on the List
                                </h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                                        GraphQL & Apollo
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                                        Docker & Kubernetes
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                                        Machine Learning Engineering
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
