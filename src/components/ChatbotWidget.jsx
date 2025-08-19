'use client';

import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import axios from "axios";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! 👋 How can I assist you today?" }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMsg = { from: "user", text: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5001/api/openai/ask", { prompt });
      const botMsg = { from: "bot", text: res.data.response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Sorry, something went wrong." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Icon */}
      <div
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg cursor-pointer transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaRobot size={24} />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 h-96 bg-white rounded-xl shadow-2xl border border-gray-300 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b">
            <h2 className="font-semibold text-gray-800">Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-600 text-xl">×</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-md max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-blue-100 text-right self-end ml-auto"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-gray-500 text-xs">Thinking...</div>}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-2 border-t flex gap-1">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 px-2 py-1 border rounded text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 rounded text-sm hover:bg-blue-700"
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
