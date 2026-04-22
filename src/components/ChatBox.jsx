'use client';
import { useState, useEffect, useRef } from 'react';

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
  
  // DRAGGABLE STATE
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // DRAG HANDLERS
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    setHasMoved(false);
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Check if moved enough to be considered a drag
    if (Math.abs(newX - position.x) > 5 || Math.abs(newY - position.y) > 5) {
      setHasMoved(true);
    }
    
    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleButtonClick = () => {
    if (!hasMoved) {
      setIsOpen(true);
      setShowWelcome(false);
    }
  };

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
        .robot-button {
          width: 150px;
          height: 150px;
          border: none;
          background: none;
          cursor: grab;
          padding: 0;
          transition: transform 0.1s ease-out;
          touch-action: none;
        }

        .robot-button:active {
          cursor: grabbing;
        }

        .robot-button:hover {
          transform: scale(1.05);
        }

        .robot-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .robot-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .cloud-bubble {
          position: absolute;
          bottom: 140px;
          right: 30px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 15px 20px;
          border-radius: 25px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          width: 240px;
          z-index: 10001;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: floatCloud 3s ease-in-out infinite, colorCycle 8s linear infinite;
        }

        @keyframes colorCycle {
          0% { background: rgba(255, 255, 255, 0.4); }
          25% { background: rgba(230, 243, 255, 0.5); }
          50% { background: rgba(243, 230, 255, 0.5); }
          75% { background: rgba(255, 235, 230, 0.5); }
          100% { background: rgba(255, 255, 255, 0.4); }
        }

        .thinking-dot {
          position: absolute;
          backdrop-filter: blur(8px);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: colorCycle 8s linear infinite;
        }

        .dot-1 {
          width: 15px;
          height: 15px;
          bottom: -20px;
          right: 50px;
        }

        .dot-2 {
          width: 10px;
          height: 10px;
          bottom: -35px;
          right: 40px;
        }

        @keyframes floatCloud {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

      `}</style>

      {/* 🤖 CUTE ROBOT BUTTON */}
      <button
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleButtonClick}
        className="robot-button fixed z-[9999]"
        style={{ 
          bottom: '20px', 
          right: '20px', 
          transform: `translate(${position.x}px, ${position.y}px)` 
        }}
      >
        {showWelcome && !isOpen && (
          <div className="cloud-bubble">
            <p className="text-[#001e3c] text-sm font-semibold leading-tight m-0">
              Hello! 👋 I'm Prof.Unique. How can I help you today?
            </p>
            <div className="thinking-dot dot-1"></div>
            <div className="thinking-dot dot-2"></div>
          </div>
        )}
        <div className="robot-image-container">
          <video
            src="https://res.cloudinary.com/deht3c1bt/video/upload/q_auto/f_auto/v1776842384/a5e9e83fe38a4cddadea17b03907a874_nx6d0i.webm"
            autoPlay
            loop
            muted
            playsInline
            className="robot-image"
          />
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div 
          className="fixed z-[10002] w-[calc(100%-40px)] max-w-[350px]"
          style={{ 
            bottom: '180px', 
            right: '20px',
            transform: `translate(${position.x}px, ${position.y}px)`
          }}
        >
          <div className="bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 flex flex-col h-[450px]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <span className="text-2xl">✕</span>
            </button>
            <div className="flex items-center gap-3 mb-4 border-b pb-3 shrink-0">
              <div className="relative">
                <img src="/uni.webp" alt="bot" width={40} height={40} className="rounded-full ring-2 ring-blue-100" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Prof.Unique</h2>
                <p className="text-xs text-green-600 font-medium">Online | AI Assistant</p>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gray-50/50 rounded-xl mb-4 scrollbar-thin scrollbar-thumb-gray-200">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex mb-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[85%] text-sm ${
                      msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-3">
                  <div className="bg-gray-200 px-3 py-2 rounded-lg text-sm text-gray-500 animate-pulse">
                    Typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2 shrink-0">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about courses..."
                className="flex-1 border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" disabled={isLoading} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
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