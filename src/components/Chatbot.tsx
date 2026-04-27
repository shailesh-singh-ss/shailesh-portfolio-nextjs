"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { chatbotService } from "@/lib/chatbot";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: portfolioData.chatbot.greeting,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const text = inputMessage.trim();
    if (!text || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((p) => [...p, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    const response = await chatbotService.sendMessage(
      text,
      portfolioData.chatbot.context,
    );

    setMessages((p) => [
      ...p,
      {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        className={`fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-3.5 py-2.5 font-mono text-sm rounded-md transition-all shadow-lg ${
          isOpen
            ? "bg-ink-900 border border-ink-700 text-bone-300 hover:border-lime-400"
            : "bg-lime-400 border border-lime-400 text-ink-950 hover:bg-lime-300"
        }`}
      >
        {isOpen ? (
          <>
            <X size={14} /> close
          </>
        ) : (
          <>
            <span className="inline-block animate-pulse">▌</span>
            ask-shailesh
          </>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-[400px] h-[560px] bg-ink-900 border border-ink-700 rounded-md shadow-2xl flex flex-col overflow-hidden">
          <div className="px-3 py-2 border-b border-ink-700 bg-ink-800/60 flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="term-dot bg-signal-rose/70" />
              <span className="term-dot bg-signal-amber/70" />
              <span className="term-dot bg-lime-400/70" />
            </div>
            <span className="font-mono text-[11px] text-bone-400 ml-1 flex items-center gap-1.5">
              <Terminal size={11} className="text-lime-400" />
              ai-assistant — bash
            </span>
            <span className="ml-auto font-mono text-[11px] text-lime-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              live
            </span>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 font-mono text-sm grid-bg-fine">
            {messages.map((m) => (
              <div key={m.id} className="space-y-0.5">
                <div className="flex items-baseline gap-2 text-xs">
                  <span
                    className={
                      m.sender === "user"
                        ? "text-signal-sky"
                        : "text-lime-400"
                    }
                  >
                    {m.sender === "user" ? "you:>" : "ai:>"}
                  </span>
                  <span className="text-ink-500">
                    {m.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div
                  className={`pl-4 leading-relaxed ${
                    m.sender === "user" ? "text-bone-100" : "text-bone-200"
                  }`}
                >
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <p className="mb-2 last:mb-0">{children}</p>
                      ),
                      h1: ({ children }) => (
                        <h1 className="text-base font-bold mb-1 text-bone-50">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-sm font-bold mb-1 mt-2 text-bone-50">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-sm font-semibold mb-1 mt-2 text-bone-100">
                          {children}
                        </h3>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-none ml-0 mb-2 space-y-0.5">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside mb-2 space-y-0.5">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="text-sm">
                          <span className="text-lime-400/60 mr-1.5">─</span>
                          {children}
                        </li>
                      ),
                      code: ({ children, className }) => {
                        const isInline = !className;
                        return isInline ? (
                          <code className="bg-ink-800 px-1 py-0.5 rounded text-xs text-lime-300">
                            {children}
                          </code>
                        ) : (
                          <code className="block bg-ink-950 border border-ink-700 p-2 rounded text-xs my-2 overflow-x-auto text-bone-200">
                            {children}
                          </code>
                        );
                      },
                      a: ({ children, href }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="term-link"
                        >
                          {children}
                        </a>
                      ),
                      strong: ({ children }) => (
                        <strong className="text-bone-50 font-semibold">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => <em>{children}</em>,
                    }}
                  >
                    {m.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="space-y-0.5">
                <div className="text-xs text-lime-400">ai:&gt;</div>
                <div className="pl-4">
                  <span className="loading-dots">
                    <div /><div /><div />
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="px-3 py-2.5 border-t border-ink-700 bg-ink-800/40">
            <div className="flex items-center gap-2">
              <span className="text-lime-400 font-mono text-sm">you:&gt;</span>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="ask anything about Shailesh..."
                className="flex-1 bg-transparent text-bone-100 placeholder-ink-500 focus:outline-none font-mono text-sm caret-lime-400"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!inputMessage.trim() || isTyping}
                aria-label="Send message"
                className="text-lime-400 hover:text-lime-300 disabled:text-ink-600 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
