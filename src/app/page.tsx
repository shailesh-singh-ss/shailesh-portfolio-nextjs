"use client";

import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect } from "react";


import ScrollToTop from "@/components/ScrollToTop";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "");
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        };

        // Handle initial hash on page load
        if (window.location.hash) {
            handleHashChange();
        }

        // Add event listener for hash changes
        window.addEventListener("hashchange", handleHashChange);

        // Cleanup
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [router]);

    return (
        <main className="relative min-h-screen bg-gray-900 overflow-x-hidden">
            

            <Navbar />

            <div className="relative z-10">
                <section id="hero">
                    <Hero />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="experience">
                    <Experience />
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
