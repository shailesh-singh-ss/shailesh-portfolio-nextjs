"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import TermWindow from "@/components/ui/TermWindow";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const missing = [
        !serviceId && "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
        !templateId && "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
        !publicKey && "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
      ]
        .filter(Boolean)
        .join(", ");
      console.error(
        `[contact] EmailJS env vars missing: ${missing}. Set them in .env.local and restart dev server.`,
      );
      setErrorMessage("contact form is not configured · email shailesh directly");
      setStatus("error");
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: unknown) {
      const e = error as { text?: string; status?: number; message?: string };
      const detail =
        e?.text ?? e?.message ?? (typeof error === "string" ? error : "");
      const code = e?.status ? `${e.status} · ` : "";
      console.error(
        `[contact] EmailJS send failed: ${code}${detail || JSON.stringify(error)}`,
      );
      setErrorMessage(detail ? `${code}${detail}` : "delivery failed · try again");
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className="section-padding pb-12">
      <div className="container-custom">
        <div className="mb-10">
          <div className="font-mono text-xs text-ink-500 mb-2">
            <span className="text-lime-400">$</span> ssh shailesh@portfolio
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl text-bone-50 font-bold tracking-tight">
            ~/contact
          </h2>
          <p className="font-mono text-sm text-bone-400 mt-2">
            {"// open a session — i'll reply within 24h"}
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <TermWindow title="contact.json" subtitle="readonly">
              <pre className="font-mono text-sm text-bone-300 leading-relaxed whitespace-pre-wrap">
{`{
  "name":     "${portfolioData.personal.name}",
  "role":     "${portfolioData.personal.title}",
  "email":    "${portfolioData.personal.email}",
  "phone":    "${portfolioData.personal.phone}",
  "location": "${portfolioData.personal.location}",
  "timezone": "Asia/Kolkata (IST)",
  "status":   `}<span className="text-lime-400">{`"open to opportunities"`}</span>{`
}`}
              </pre>
            </TermWindow>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-sm">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-2 px-3 py-2.5 bg-ink-900 border border-ink-700 hover:border-lime-400/40 rounded transition-colors group"
              >
                <Mail size={14} className="text-lime-400" />
                <span className="text-bone-300 group-hover:text-bone-100 truncate">
                  {portfolioData.personal.email}
                </span>
              </a>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="flex items-center gap-2 px-3 py-2.5 bg-ink-900 border border-ink-700 hover:border-lime-400/40 rounded transition-colors group"
              >
                <Phone size={14} className="text-lime-400" />
                <span className="text-bone-300 group-hover:text-bone-100 truncate">
                  {portfolioData.personal.phone}
                </span>
              </a>
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 bg-ink-900 border border-ink-700 hover:border-lime-400/40 rounded transition-colors group"
              >
                <Github size={14} className="text-lime-400" />
                <span className="text-bone-300 group-hover:text-bone-100">
                  github / shailesh-singh-ss
                </span>
              </a>
              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 bg-ink-900 border border-ink-700 hover:border-lime-400/40 rounded transition-colors group"
              >
                <Linkedin size={14} className="text-lime-400" />
                <span className="text-bone-300 group-hover:text-bone-100">
                  linkedin / shailesh-singh
                </span>
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-ink-500">
              <MapPin size={12} className="text-lime-400" />
              {portfolioData.personal.location}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-ink-900 border border-ink-700 rounded-md p-5 sm:p-6"
          >
            <div className="font-mono text-xs text-ink-500 mb-4 flex items-center gap-2">
              <span className="text-lime-400">●</span> session active · /dev/pts/0
            </div>

            <div className="space-y-4">
              <Field
                label="from"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="your name"
                required
              />
              <Field
                label="reply-to"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                required
              />
              <Field
                label="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="what's this about?"
                required
              />
              <div>
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-lime-400 font-mono text-sm">&gt;</span>
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-xs text-ink-500 uppercase tracking-wider"
                  >
                    message
                  </label>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="paste your message here..."
                  className="term-input resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="term-button-primary disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-dots">
                        <div /><div /><div />
                      </span>
                      transmitting
                    </>
                  ) : (
                    <>
                      <Send size={14} /> send-mail
                    </>
                  )}
                </button>

                {status === "success" && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-sm text-lime-400">
                    <CheckCircle2 size={14} /> 200 ok · message delivered
                  </span>
                )}
                {status === "error" && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-sm text-signal-rose">
                    <AlertCircle size={14} />
                    {errorMessage || "delivery failed · try again"}
                  </span>
                )}
              </div>
            </div>
          </motion.form>
        </div>

        <div className="mt-16 pt-6 border-t border-ink-700">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-ink-500">
            <div>
              <span className="text-lime-400">▌</span> built with next.js · framer-motion · three.js
            </div>
            <div>
              © {new Date().getFullYear()} {portfolioData.personal.name} · all
              rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-2 mb-1.5">
        <span className="text-lime-400 font-mono text-sm">&gt;</span>
        <label
          htmlFor={`contact-${name}`}
          className="font-mono text-xs text-ink-500 uppercase tracking-wider"
        >
          {label}
        </label>
        {required && <span className="text-signal-amber text-xs">*</span>}
      </div>
      <input
        id={`contact-${name}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="term-input"
      />
    </div>
  );
}
