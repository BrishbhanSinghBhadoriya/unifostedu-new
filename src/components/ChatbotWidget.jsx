'use client';

import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaSpinner } from "react-icons/fa";
import axios from "axios";
import { retrieveRelevantDocs } from "@/knowledge/siteContent";
import catalog from "@/knowledge/catalog.json";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    { 
      from: "bot", 
      text: "Hello! 👋 I'm your Unifost AI assistant. How can I help you with your educational journey today? Ask me about courses, universities, admissions, or anything related to online education!" 
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;

    const userMsg = { from: "user", text: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setLoading(true);

    try {
      const contextDocs = retrieveRelevantDocs(prompt, 4);

      // If we have no matching context, reply without calling the API
      if (contextDocs.length === 0) {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text:
              "Maaf kijiye, is prashn ka jawab hamari website ke content me upalabdh nahi hai. Kripya apna sawal aur specific karein ya counselor se baat karein (Book a Video Call / Home Demo).",
          },
        ]);
        return;
      }

      const instruction =
        "You are Unifost website assistant. Answer strictly and only from the provided Context. If the answer is not explicitly present in the Context, say you don't have this information on the site and suggest contacting a counselor. Keep answers concise and helpful.";

      const contextBlock =
        "\n\nContext (from Unifost site):\n" +
        contextDocs.map((d) => `- ${d.title}: ${d.text}`).join("\n");

      const finalPrompt = `${instruction}\n\nQuestion: ${prompt}${contextBlock}`;

      const response = await axios.post("https://api.unifostedu.com/api/v1/openai/ask", {
        prompt: finalPrompt,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 30000 // 30 seconds timeout
      });

      if (response.data && response.data.response) {
        const botMsg = { from: "bot", text: response.data.response };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Chatbot API Error:', err);
      let errorMessage = "⚠️ Sorry, I'm having trouble connecting right now. Please try again in a moment.";
      
      if (err.response?.status === 429) {
        errorMessage = "⚠️ Too many requests. Please wait a moment before trying again.";
      } else if (err.code === 'ECONNABORTED') {
        errorMessage = "⚠️ Request timed out. Please try again.";
      } else if (err.response?.status >= 500) {
        errorMessage = "⚠️ Server is temporarily unavailable. Please try again later.";
      }
      
      setMessages((prev) => [...prev, { from: "bot", text: errorMessage }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e);
    }
  };

  return (
    <>
      {/* Floating Icon */}
      <div
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] hover:from-[#00d4c4] hover:to-[#00ffe0] text-[#001e3c] p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with AI Assistant"
      >
        <FaRobot size={24} />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-[#001e3c] to-[#003b6c] text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#00ffe0] rounded-full flex items-center justify-center">
                <FaRobot size={16} className="text-[#001e3c]" />
              </div>
              <div>
                <h2 className="font-bold text-sm">Unifost AI Assistant</h2>
                <p className="text-xs text-[#00ffe0] opacity-90">Online Education Expert</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-[#00ffe0] transition-colors duration-200 p-1 rounded-full hover:bg-white/10"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.type === 'cta' ? (
                  <a
                    href={msg.href}
                    className="inline-block max-w-[85%] px-4 py-2 rounded-full text-sm font-semibold bg-[#00d4c4] text-[#001e3c] hover:bg-[#00c0b1] border border-[#00cbb9] shadow-sm"
                  >
                    {msg.text}
                  </a>
                ) : (
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] font-medium"
                        : "bg-white text-gray-800 border border-gray-200 shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaSpinner className="animate-spin" size={14} />
                    <span className="text-sm">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about courses, universities, admissions..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] p-2 rounded-full hover:from-[#00d4c4] hover:to-[#00ffe0] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading || !prompt.trim()}
              >
                {loading ? (
                  <FaSpinner className="animate-spin" size={16} />
                ) : (
                  <FaPaperPlane size={16} />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send • Shift+Enter for new line
            </p>
            {/* End Chat + Recommendations */}
            <div className="mt-3 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  const items = [
                    {
                      from: "bot",
                      text: "Recommended Universities:",
                    },
                    ...catalog.universities.slice(0, 6).map((u) => ({
                      from: "bot",
                      text: `• ${u.name}`,
                    })),
                    {
                      from: "bot",
                      text: "Recommended Courses:",
                    },
                    ...catalog.courses.slice(0, 6).map((c) => ({
                      from: "bot",
                      text: `• ${c.title}`,
                    })),
                    catalog.cta ? { from: 'bot', type: 'cta', text: catalog.cta.label, href: catalog.cta.href } : null,
                  ];
                  setMessages((prev) => [...prev, ...items.filter(Boolean)]);
                }}
                className="text-xs text-[#001e3c] underline hover:no-underline"
              >
                End chat and show recommendations
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
