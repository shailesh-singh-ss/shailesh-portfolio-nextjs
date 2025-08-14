"use client";

import { portfolioData } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";
import { Award, ExternalLink, Star, Trophy } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Achievements() {
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
                        Achievements &{" "}
                        <span className="text-gradient">Recognition</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Competitive programming accomplishments and professional
                        certifications that showcase my dedication to excellence
                    </p>
                </div>

                {/* Competitive Programming Section */}
                <div className="mb-20">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <Trophy className="text-primary-400" size={32} />
                        <h3 className="text-3xl font-bold text-white">
                            Competitive Programming
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {portfolioData.achievements.competitive.map(
                            (achievement) => (
                                <div
                                    key={achievement.platform}
                                    className="glass-card p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                                >
                                    {/* Platform Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border border-gray-600 group-hover:border-primary-500 transition-all duration-300">
                                            <Image
                                                src={achievement.icon}
                                                alt={achievement.platform}
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white">
                                                {achievement.platform}
                                            </h4>
                                            <p className="text-primary-400 font-semibold">
                                                {achievement.title}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Star
                                                className="text-yellow-400"
                                                size={20}
                                            />
                                            <span className="text-lg font-semibold text-white">
                                                {achievement.rating}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="space-y-3 mb-6">
                                        {achievement.highlights.map(
                                            (highlight, highlightIndex) => (
                                                <div
                                                    key={highlightIndex}
                                                    className="flex items-start gap-2"
                                                >
                                                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-300 text-sm leading-relaxed">
                                                        {highlight}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* Link */}
                                    <a
                                        href={achievement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 font-semibold"
                                    >
                                        View Profile
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mb-20">
                    <div className="flex items-center justify-center gap-3 mb-12">
                        <Award className="text-accent-400" size={32} />
                        <h3 className="text-3xl font-bold text-white">
                            Certifications
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Placeholder for certificates */}
                        {portfolioData.achievements.certifications.map(
                            (certification, index) => (
                                <div
                                    key={index}
                                    className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                                >
                                    <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mx-auto mb-6 flex items-center justify-center border border-gray-600 border-dashed">
                                        <Award
                                            className="text-gray-400"
                                            size={32}
                                        />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        {certification.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Issuer: {certification.issuer}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Date: {certification.date}
                                    </p>
                                    <a
                                        href={certification.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 font-semibold"
                                    >
                                        View Certificate
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="glass-card p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-2">
                            1800+
                        </div>
                        <p className="text-gray-400">Average Rating</p>
                    </div>

                    <div className="glass-card p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-2">
                            1000+
                        </div>
                        <p className="text-gray-400">Problems Solved</p>
                    </div>

                    <div className="glass-card p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-2">
                            3
                        </div>
                        <p className="text-gray-400">Platforms</p>
                    </div>

                    <div className="glass-card p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-2">
                            Top 10%
                        </div>
                        <p className="text-gray-400">Global Ranking</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <div className="glass-card p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Ready to Tackle New Challenges
                        </h3>
                        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                            My competitive programming journey has sharpened my
                            problem-solving skills and algorithmic thinking. I&apos;m
                            always excited to apply these skills to real-world
                            challenges and innovative projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/shailesh-singh-ss"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glow-button bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                View My Code
                            </a>
                            <button
                                onClick={() => {
                                    console.log("See Projects button clicked");
                                    scrollToSection("projects");
                                }}
                                className="border border-primary-500 text-primary-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-500 hover:text-white hover:scale-105"
                            >
                                See Projects
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
