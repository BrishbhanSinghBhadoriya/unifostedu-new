'use client';
import { useState, useEffect } from 'react';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm Prof.Unique. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    const userMessage = {
      id: Date.now(),
      text: userText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: data.reply || "No response",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Something went wrong. Please try again.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <>
      <style>{`
        @keyframes bounceRobot {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          25% { 
            transform: translateY(-15px) scale(1.05);
          }
          50% { 
            transform: translateY(0px) scale(1.1);
          }
          75% { 
            transform: translateY(-10px) scale(1.02);
          }
        }

        @keyframes waveHand {
          0%, 100% { 
            transform: rotateZ(0deg);
            transform-origin: 70% 30%;
          }
          25% { 
            transform: rotateZ(-25deg);
            transform-origin: 70% 30%;
          }
          50% { 
            transform: rotateZ(0deg);
            transform-origin: 70% 30%;
          }
          75% { 
            transform: rotateZ(-25deg);
            transform-origin: 70% 30%;
          }
        }

        @keyframes spin3d {
          0% { 
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
          }
          25% { 
            transform: perspective(1000px) rotateY(15deg) rotateX(-5deg);
          }
          50% { 
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
          }
          75% { 
            transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
          }
          100% { 
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
          }
        }

        @keyframes glowPulse {
          0%, 100% { 
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          50% { 
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          }
        }

        .robot-button {
          width: 150px;
          height: 150px;
          border: none;
          background: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
          perspective: 1000px;
        }

        .robot-button:hover {
          transform: scale(1.1);
        }

        .robot-button:active {
          transform: scale(0.95);
        }

        .robot-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: bounceRobot 2.5s ease-in-out infinite, spin3d 5s ease-in-out infinite;
          position: relative;
          transform-style: preserve-3d;
        }

        .robot-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .speech-bubble {
          position: absolute;
          right: 140px;
          bottom: 60px;
          background: white;
          padding: 12px 20px;
          border-radius: 20px 20px 0 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          width: 220px;
          animation: slideInLeft 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
                     bubbleFloat 3s ease-in-out infinite 0.8s;
          border: 1px solid rgba(0, 0, 0, 0.05);
          pointer-events: none;
          z-index: 10000;
          transform-origin: bottom right;
        }

        .speech-bubble::after {
          content: '';
          position: absolute;
          right: -10px;
          bottom: 0;
          width: 20px;
          height: 20px;
          background: white;
          clip-path: polygon(0 0, 0% 100%, 100% 100%);
        }

        .speech-bubble-text {
          color: #001e3c;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
          margin: 0;
        }

        .robot-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #64c8ff;
          border-radius: 50%;
          opacity: 0;
          animation: float 2s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            opacity: 0;
            transform: translateY(0px) translateX(0px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-20px) translateX(var(--tx));
          }
        }

        .particle:nth-child(1) { --tx: 10px; left: 30%; top: 50%; animation-delay: 0s; }
        .particle:nth-child(2) { --tx: -10px; left: 70%; top: 50%; animation-delay: 0.3s; }
        .particle:nth-child(3) { --tx: 15px; left: 40%; top: 60%; animation-delay: 0.6s; }
      `}</style>

      {/* 🤖 CUTE ROBOT BUTTON */}
      <button
        onClick={() => {
          setIsOpen(true);
          setShowWelcome(false);
        }}
        className="robot-button fixed z-[9999]"
        style={{ bottom: '20px', right: '20px' }}
      >
        {showWelcome && !isOpen && (
          <div className="speech-bubble">
            <p className="speech-bubble-text">
              Hello! 👋 I'm Prof.Unique. How can I help you today?
            </p>
          </div>
        )}
        <div className="robot-image-container">
          <img
            src="https://res.cloudinary.com/deht3c1bt/image/upload/q_auto/f_auto/v1776771185/robot-removebg-preview_ag0ftm.png"
            alt="Cute Robot"
            className="robot-image"
          />
        </div>
        <div className="robot-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div 
          className="fixed z-[9998] w-[calc(100%-40px)] max-w-md"
          style={{ bottom: '100px', right: '20px' }}
        >
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-100">
            <button
              onClick={() => setIsOpen(false)}
              className="float-right text-gray-400 hover:text-gray-600 transition-colors"
            >
              <span className="text-2xl">✕</span>
            </button>
            <div className="flex items-center gap-3 mb-4 border-b pb-3">
              <div className="relative">
                <img src="/uni.webp" alt="bot" width={40} height={40} className="rounded-full ring-2 ring-blue-100" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Prof.Unique</h2>
                <p className="text-xs text-green-600 font-medium">Online | AI Assistant</p>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gray-50/50 rounded-xl mb-4 h-80 scrollbar-thin scrollbar-thumb-gray-200">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex mb-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[75%] text-sm ${
                      msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && <p className="text-sm text-gray-500">Typing...</p>}
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about courses..."
                className="flex-1 border px-3 py-2 rounded-md text-sm"
              />
              <button type="submit" disabled={isLoading} className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;