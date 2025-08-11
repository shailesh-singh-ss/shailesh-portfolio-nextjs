"use client";

import { portfolioData } from "@/data/portfolio";
import { Send } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

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

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus("idle"), 3000);
        }, 2000);
    };

    return (
        <div ref={sectionRef} className="section-padding bg-gray-900">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Ready to start your next project? Let&apos;s discuss how
                        we can work together to bring your ideas to life
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8 animate-slide-in-left">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Let&apos;s Connect
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                I&apos;m always excited to discuss new
                                opportunities, collaborate on interesting
                                projects, or just have a chat about technology
                                and innovation. Feel free to reach out!
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            <a
                                href={`mailto:${portfolioData.personal.email}`}
                                className="flex items-center gap-4 glass-card p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                                    <Image
                                        src="/assets/contact/emailIcon.png"
                                        alt="Email"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                                        Email
                                    </h4>
                                    <p className="text-gray-400">
                                        {portfolioData.personal.email}
                                    </p>
                                </div>
                            </a>

                            <a
                                href={portfolioData.personal.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 glass-card p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                                    <Image
                                        src="/assets/contact/linkedinIcon.png"
                                        alt="LinkedIn"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                                        LinkedIn
                                    </h4>
                                    <p className="text-gray-400">
                                        Let&apos;s connect professionally
                                    </p>
                                </div>
                            </a>

                            <a
                                href={portfolioData.personal.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 glass-card p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                                    <Image
                                        src="/assets/contact/githubIcon.png"
                                        alt="GitHub"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                                        GitHub
                                    </h4>
                                    <p className="text-gray-400">
                                        Check out my code
                                    </p>
                                </div>
                            </a>
                        </div>

                        {/* Quick Stats */}
                        <div className="glass-card p-6">
                            <h4 className="text-lg font-semibold text-white mb-4">
                                Response Time
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gradient mb-1">
                                        24hrs
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        Email Response
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gradient mb-1">
                                        100%
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        Professional
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-slide-in-right">
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Send Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-semibold text-white mb-2"
                                        >
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold text-white mb-2"
                                        >
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-semibold text-white mb-2"
                                    >
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold text-white mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                                        placeholder="Tell me about your project or just say hello..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full glow-button bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {submitStatus === "success" && (
                                    <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                                        Thank you! Your message has been sent
                                        successfully.
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
                                        Sorry, there was an error sending your
                                        message. Please try again.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-12 border-t border-gray-700 text-center">
                    <p className="text-gray-400 mb-4">
                        Made with ❤️ by{" "}
                        <span className="text-gradient font-semibold">
                            Shailesh Singh
                        </span>
                    </p>
                    <p className="text-gray-500 text-sm">
                        © 2025 Shailesh Singh. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
