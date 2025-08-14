"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Download, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    
    useEffect(() => {
        const titles = [
            "Software Developer",
            "AI Enthusiast",
            "Full Stack Developer",
            "Competitive Programmer",
        ];
        const handleTyping = () => {
            const current = loopNum % titles.length;
            const fullText = titles[current];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <div className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Animated background effects */}
            <div className="absolute inset-0">
                {/* Floating orbs */}
                <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float-fast"></div>
                <div className="absolute top-40 right-32 w-48 h-48 bg-accent-500/10 rounded-full blur-2xl animate-float-medium"></div>
                <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-float-fast"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-float-medium"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
                            backgroundSize: "50px 50px",
                        }}
                    ></div>
                </div>
            </div>
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-32 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-slide-in-left">
                        {/* Greeting */}
                        <div className="space-y-4">
                            <p className="text-primary-400 text-lg font-semibold">
                                Hello, I&apos;m
                            </p>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                                {portfolioData.personal.name}
                            </h1>
                            <h2 className="text-2xl lg:text-3xl text-gray-300 min-h-[40px]">
                                I&apos;m a{" "}
                                <span className="text-gradient font-semibold">
                                    {text}
                                    <span className="animate-pulse">|</span>
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                                {portfolioData.personal.subtitle}
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => {
                                    console.log("Contact button clicked");
                                    scrollToSection("contact");
                                }}
                                className="glow-button flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                <Mail size={20} />
                                Contact Me
                            </button>
                            <a
                                href={portfolioData.personal.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 border border-primary-500 text-primary-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-500 hover:text-white hover:scale-105"
                            >
                                <Download size={20} />
                                Download CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a
                                href={portfolioData.personal.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-primary-500 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                            >
                                <Image
                                    src="/assets/contact/githubIcon.png"
                                    alt="GitHub"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a
                                href={portfolioData.personal.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-primary-500 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                            >
                                <Image
                                    src="/assets/contact/linkedinIcon.png"
                                    alt="LinkedIn"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a
                                href={`mailto:${portfolioData.personal.email}`}
                                aria-label="Email Contact"
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-primary-500 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                            >
                                <Image
                                    src="/assets/contact/emailIcon.png"
                                    alt="Email"
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative animate-slide-in-right">
                        <div className="relative">
                            {/* Enhanced floating animation container */}
                            <div className="animate-float-slow">
                                <div className="relative w-full max-w-md mx-auto">
                                    {/* Enhanced glow effect with multiple layers */}
                                    {/* <div className="absolute -inset-6 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full blur-3xl animate-pulse-glow"></div> */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-morph"></div>

                                    {/* Main image with enhanced styling */}
                                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-6 border border-gray-700 glass-card-enhanced hover-lift">
                                        <Image
                                            src="/assets/hero/heroImage.png"
                                            alt="Shailesh Singh"
                                            width={400}
                                            height={400}
                                            className="rounded-full w-full h-auto"
                                            priority
                                        />

                                        {/* Floating particles around image */}
                                        <div className="absolute inset-0 animate-float-medium">
                                            <div className="absolute -top-4 -left-4 w-3 h-3 bg-primary-400 rounded-full animate-float-fast"></div>
                                            <div className="absolute -top-2 -right-6 w-2 h-2 bg-accent-400 rounded-full animate-float-medium"></div>
                                            <div className="absolute -bottom-6 -left-2 w-4 h-4 bg-emerald-400 rounded-full animate-float-slow"></div>
                                            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-float-fast"></div>
                                            <div className="absolute top-1/4 -left-8 w-1 h-1 bg-white rounded-full animate-float-medium"></div>
                                            <div className="absolute top-3/4 -right-8 w-1 h-1 bg-blue-300 rounded-full animate-float-slow"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating tech icons */}
                            <div className="absolute top-10 -left-10 animate-float-medium">
                                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 glass-card">
                                    <Image
                                        src="/assets/skills/react.png"
                                        alt="React"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            </div>

                            <div className="absolute top-20 -right-10 animate-float-fast">
                                <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 glass-card">
                                    <Image
                                        src="/assets/skills/python.png"
                                        alt="Python"
                                        width={28}
                                        height={28}
                                    />
                                </div>
                            </div>

                            <div className="absolute bottom-20 -left-8 animate-float-fast">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 glass-card">
                                    <Image
                                        src="/assets/skills/node.png"
                                        alt="Node.js"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                            <div className="absolute bottom-10 -right-10 animate-float-slow">
                                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 glass-card">
                                    <Image
                                        src="/assets/skills/langchain.png"
                                        alt="LangChain"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            </div>
                            <div className="absolute left-20 animate-float-medium">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 glass-card">
                                    <Image
                                        src="/assets/skills/html.png"
                                        alt="HTML"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex">
                    <button
                        onClick={() => {
                            console.log("Scroll down button clicked");
                            scrollToSection("about");
                        }}
                        className="flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                        <span className="text-sm mb-2">Scroll Down</span>
                        <ChevronDown size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}
