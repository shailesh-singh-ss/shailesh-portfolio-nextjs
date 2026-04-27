"use client";

import { useEffect } from "react";

import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

export default function Home() {
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            if (!hash) return;
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        };

        if (window.location.hash) handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <main className="relative min-h-screen bg-ink-950 text-bone-200 overflow-x-hidden selection:bg-lime-400/20">
            <Navbar />

            <div className="relative z-10">
                <section id="hero">
                    <Hero />
                </section>

                <section id="impact">
                    <ImpactStrip />
                </section>

                <section id="experience">
                    <Experience />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="education">
                    <Education />
                </section>

                <section id="skills">
                    <Skills />
                </section>

                <section id="achievements">
                    <Achievements />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </div>

            <Chatbot />
            <ScrollToTop />
        </main>
    );
}
