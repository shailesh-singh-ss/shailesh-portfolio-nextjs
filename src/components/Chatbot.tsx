'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, Bot, User } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { chatbotService } from '@/lib/chatbot'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: portfolioData.chatbot.greeting,
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateTyping = async (userMessage: string) => {
    setIsTyping(true)
    const message = await generateResponse(userMessage)
    setIsTyping(false)
    return message
  }

  const generateResponse = async (userMessage: string): Promise<string> => {
    const message = userMessage.toLowerCase()

    const response = await chatbotService.sendMessage(message, portfolioData.chatbot.context)
    // Default response
    return response
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')

    // Simulate AI thinking
    const message = await simulateTyping(userMessage.text)

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: message,
      sender: 'bot',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, botResponse])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
      <>
          {/* Chat Button */}
          <button
              onClick={() => setIsOpen(!isOpen)}
              className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center ${
                  isOpen
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-gradient-to-r from-primary-500 to-accent-500 hover:scale-110 animate-pulse"
              }`}
          >
              {isOpen ? (
                  <X size={24} className="text-white" />
              ) : (
                  <Image
                      src="/assets/chat/chat_icon.png"
                      alt="Chatbot"
                      width={100}
                      height={100}
                  />
              )}

              {/* Floating chat icon with animation */}
              {!isOpen && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
              )}
          </button>

          {/* Chat Window */}
          {isOpen && (
              <div className="fixed bottom-24 right-6 w-[400px] h-[700px] glass-card shadow-2xl z-40 flex flex-col overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                          <Image
                              src="/assets/chat/chat_icon.png"
                              alt="Chatbot"
                              width={40}
                              height={40}
                          />
                      </div>
                      <div>
                          <h3 className="text-white font-semibold">
                              AI Assistant
                          </h3>
                          <p className="text-primary-100 text-sm">
                              Ask me about Shailesh
                          </p>
                      </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/50">
                      {messages.map((message) => (
                          <div
                              key={message.id}
                              className={`flex gap-3 ${
                                  message.sender === "user"
                                      ? "justify-end"
                                      : "justify-start"
                              }`}
                          >
                              {message.sender === "bot" && (
                                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                                      <Bot className="text-white" size={16} />
                                  </div>
                              )}

                              <div
                                  className={`max-w-[75%] p-3 rounded-2xl ${
                                      message.sender === "user"
                                          ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                                          : "bg-gray-700 text-gray-100"
                                  }`}
                              >
                                  <div className="text-sm leading-relaxed">
                                      <ReactMarkdown
                                          components={{
                                              // Custom styling for markdown elements
                                              p: ({ children }) => (
                                                  <p className="mb-2 last:mb-0">
                                                      {children}
                                                  </p>
                                              ),
                                              h1: ({ children }) => (
                                                  <h1 className="text-lg font-bold mb-2">
                                                      {children}
                                                  </h1>
                                              ),
                                              h2: ({ children }) => (
                                                  <h2 className="text-md font-semibold mb-2">
                                                      {children}
                                                  </h2>
                                              ),
                                              h3: ({ children }) => (
                                                  <h3 className="text-sm font-medium mb-1">
                                                      {children}
                                                  </h3>
                                              ),
                                              ul: ({ children }) => (
                                                  <ul className="list-disc list-inside mb-2 space-y-1">
                                                      {children}
                                                  </ul>
                                              ),
                                              ol: ({ children }) => (
                                                  <ol className="list-decimal list-inside mb-2 space-y-1">
                                                      {children}
                                                  </ol>
                                              ),
                                              li: ({ children }) => (
                                                  <li className="text-sm">
                                                      {children}
                                                  </li>
                                              ),
                                              code: ({
                                                  children,
                                                  className,
                                              }) => {
                                                  const isInline = !className;
                                                  return isInline ? (
                                                      <code className="bg-gray-600 px-1 py-0.5 rounded text-xs font-mono">
                                                          {children}
                                                      </code>
                                                  ) : (
                                                      <code className="block bg-gray-800 p-2 rounded text-xs font-mono overflow-x-auto">
                                                          {children}
                                                      </code>
                                                  );
                                              },
                                              blockquote: ({ children }) => (
                                                  <blockquote className="border-l-2 border-gray-500 pl-3 italic text-gray-300 mb-2">
                                                      {children}
                                                  </blockquote>
                                              ),
                                              a: ({ children, href }) => (
                                                  <a
                                                      href={href}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="text-blue-400 hover:text-blue-300 underline"
                                                  >
                                                      {children}
                                                  </a>
                                              ),
                                              strong: ({ children }) => (
                                                  <strong className="font-semibold">
                                                      {children}
                                                  </strong>
                                              ),
                                              em: ({ children }) => (
                                                  <em className="italic">
                                                      {children}
                                                  </em>
                                              ),
                                          }}
                                      >
                                          {message.text}
                                      </ReactMarkdown>
                                  </div>
                                  <span className="text-xs opacity-70 mt-1 block">
                                      {message.timestamp.toLocaleTimeString(
                                          [],
                                          {
                                              hour: "2-digit",
                                              minute: "2-digit",
                                          }
                                      )}
                                  </span>
                              </div>

                              {message.sender === "user" && (
                                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                                      <User className="text-white" size={16} />
                                  </div>
                              )}
                          </div>
                      ))}

                      {/* Typing Indicator */}
                      {isTyping && (
                          <div className="flex gap-3 justify-start">
                              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <Bot className="text-white" size={16} />
                              </div>
                              <div className="bg-gray-700 p-3 rounded-2xl">
                                  <div className="flex gap-1">
                                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                  </div>
                              </div>
                          </div>
                      )}

                      <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="p-4 bg-gray-800/50 border-t border-gray-600">
                      <div className="flex gap-2">
                          <input
                              type="text"
                              value={inputMessage}
                              onChange={(e) => setInputMessage(e.target.value)}
                              onKeyPress={handleKeyPress}
                              placeholder="Ask me anything about Shailesh..."
                              className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300 text-sm"
                          />
                          <button
                              onClick={handleSendMessage}
                              disabled={!inputMessage.trim() || isTyping}
                              className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                              <Send size={16} className="text-white" />
                          </button>
                      </div>
                  </div>
              </div>
          )}
      </>
  );
}
