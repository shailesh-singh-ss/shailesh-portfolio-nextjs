"use client";

import { portfolioData } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [currentProject, setCurrentProject] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const featuredProjects = portfolioData.projects.filter(
        (project) => project.featured
    );
    const displayProjects = showAll ? portfolioData.projects : [];

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
    };

    const prevProject = () => {
        setCurrentProject(
            (prev) =>
                (prev - 1 + featuredProjects.length) % featuredProjects.length
        );
    };

    return (
        <div
            ref={sectionRef}
            className="relative section-padding bg-black overflow-hidden"
        >
            {/* Matrix-style background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

            {/* Geometric patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(60deg,rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            </div>

            {/* Moving light streaks */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse delay-1000"></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-pulse delay-2000"></div>

            {/* Floating tech elements */}
            <div
                className="absolute top-20 left-10 w-8 h-8 border border-cyan-400/30 rounded rotate-45 animate-spin"
                style={{ animationDuration: "10s" }}
            ></div>
            <div className="absolute bottom-32 right-20 w-12 h-12 border border-purple-400/30 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-10 w-6 h-6 bg-green-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-10 h-10 border-2 border-blue-400/30 rounded-lg rotate-12 animate-pulse"></div>

            {/* Circuit board pattern */}
            <div className="absolute top-1/4 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
            <div className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
            <div className="absolute bottom-1/3 right-1/4 w-px h-24 bg-gradient-to-b from-transparent via-purple-400/40 to-transparent"></div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A showcase of my recent work, featuring innovative
                        solutions and cutting-edge technologies
                    </p>
                </div>

                {/* Featured Project Carousel */}
                <div className="mb-20">
                    <div className="relative glass-card p-8 md:p-12 group border border-gray-800">
                        {/* Tech-inspired card background effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 border border-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            {/* Project Image */}
							<div className="relative overflow-hidden rounded-xl">
								{/* Tech-style background effects */}
								<div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
								<div className="absolute -inset-2 border border-cyan-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Image Container with smooth fading transition */}
                                <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
                                    {featuredProjects.map((project, index) => (
                                        <div 
                                            key={index} 
                                            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                                                index === currentProject ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        >
                                            <Image
                                                src={project?.image || "/assets/projects/project.png"}
                                                alt={project?.title || "Project"}
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        </div>
                                    ))}

                                    {/* Navigation Arrows */}
                                    <button
                                        type="button"
                                        onClick={prevProject}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 z-10"
                                    >
                                        <ChevronLeft size={24} className="transition-transform duration-200 hover:scale-110" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextProject}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all duration-300 ease-in-out opacity-80 hover:opacity-100 z-10"
                                    >
                                        <ChevronRight size={24} className="transition-transform duration-200 hover:scale-110" />
                                    </button>
                                </div>
							</div>

                            {/* Project Details */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {
                                            featuredProjects[currentProject]
                                                ?.title
                                        }
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {
                                            featuredProjects[currentProject]
                                                ?.description
                                        }
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3">
                                        Technologies Used:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {featuredProjects[
                                            currentProject
                                        ]?.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm border border-gray-600 hover:border-primary-500 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={
                                            featuredProjects[currentProject]
                                                ?.demo
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        <ExternalLink size={20} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={
                                            featuredProjects[currentProject]
                                                ?.source
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 border border-primary-500 text-primary-400 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary-500 hover:text-white hover:scale-105"
                                    >
                                        <Github size={20} />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project Indicators */}
                        <div className="flex justify-center gap-2 mt-8">
                            {featuredProjects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentProject(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentProject
                                            ? "bg-gradient-to-r from-primary-500 to-accent-500"
                                            : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* All Projects Grid */}
                <div className="space-y-8">
                    <div className="flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 group overflow-hidden"
                        >
                            {/* Animated border glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 rounded-xl blur-sm opacity-75 group-hover:opacity-100 animate-spin"></div>
                            <div className="absolute inset-0.5 bg-gradient-to-r from-gray-900 to-black rounded-xl"></div>

                            {/* Sliding shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            {/* Tech circuit pattern */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-2 left-4 w-2 h-2 border border-cyan-300 rounded-full animate-ping"></div>
                                <div className="absolute bottom-2 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                                <div className="absolute top-1/2 left-1/2 w-3 h-0.5 bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                            </div>

                            {/* Button text with glow */}
                            <span className="relative z-10 drop-shadow-lg">
                                {showAll
                                    ? "← Featured Projects"
                                    : "View All Projects →"}
                            </span>
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayProjects.map((project) => (
                            <div
                                key={project.title}
                                className="glass-card p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden rounded-lg mb-6">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Project Info */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies
                                            .slice(0, 3)
                                            .map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                                                +
                                                {project.technologies.length -
                                                    3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Project Links */}
                                    <div className="flex gap-3">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-semibold"
                                        >
                                            <ExternalLink size={16} />
                                            Demo
                                        </a>
                                        <a
                                            href={project.source}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-semibold"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="glass-card p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-2">
                            6+
                        </div>
                        <p className="text-gray-400">Projects Built</p>
                    </div>

                    <div className="glass-card p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-2">
                            10+
                        </div>
                        <p className="text-gray-400">Technologies Used</p>
                    </div>

                    <div className="glass-card p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-2">
                            100%
                        </div>
                        <p className="text-gray-400">Open Source</p>
                    </div>

                    <div className="glass-card p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-2">
                            24/7
                        </div>
                        <p className="text-gray-400">Learning Mode</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
