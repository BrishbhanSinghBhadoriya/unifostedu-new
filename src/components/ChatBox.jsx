'use client';
import { useState, useEffect, useRef } from 'react';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

import Image from 'next/image';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm Prof.Unique. How can I help you today?",
      sender: "bot",
      timestamp: null,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [openEnquiryModal, setOpenEnquiryModal] = useState(false);
  const [sessionLead, setSessionLead] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  
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
    setIsMounted(true);
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // DRAG HANDLERS
  const handlePointerDown = (e) => {
    e.preventDefault();
    document.body.classList.add('dragging-chatbox');
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    setHasMoved(false);
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
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
    document.body.classList.remove('dragging-chatbox');
  };

  const handleButtonClick = () => {
    // On mobile, we open it directly without checking hasMoved to be more reliable
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setIsOpen(true);
      setShowWelcome(false);
      return;
    }

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
        body: JSON.stringify({ 
          message: userText,
          leadData: sessionLead, // Pass existing lead data if any
          history: messages.slice(-5) // Pass last 5 messages for context
        }),
      });

      const data = await res.json();
      
      // If AI extracted new lead data, update the session
      if (data.leadData) {
        setSessionLead((prev) => ({
          ...prev,
          ...data.leadData
        }));
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: data.reply || "No response",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);

      if (data.openEnquiry) {
        setOpenEnquiryModal(true);
      }
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
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 150px;
          height: 150px;
          border: none;
          background: none;
          cursor: grab;
          padding: 0;
          transition: transform 0.1s ease-out;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          z-index: 999999 !important;
          pointer-events: auto !important;
          display: block !important;
        }

        .chat-modal-container {
          position: fixed;
          bottom: 0px;
          right: 20px;
          top: 20px;
          width: 400px;
          max-width: 400px;
          z-index: 1000000;
          height: calc(100vh - 40px);
        }

        .chatbot-modal {
          position: fixed !important;
          bottom: 0px !important;
          right: 20px !important;
          top: 20px !important;
          width: 400px !important;
          max-width: 400px !important;
          z-index: 1000000 !important;
          height: calc(100vh - 40px) !important;
        }

        .chatbot-modal .chat-modal-content {
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        /* Mobile specific adjustments */
        @media (max-width: 768px) {
          .robot-button {
            width: 85px !important;
            height: 85px !important;
            bottom: 20px !important;
            right: 20px !important;
            transform: none !important; /* Disable dragging transform on mobile to prevent off-screen */
          }
          .chat-modal-container {
            width: 95vw !important;
            max-width: 95vw !important;
            right: 2.5vw !important;
            left: 2.5vw !important;
            bottom: 0px !important;
            top: 20px !important;
            height: calc(100vh - 20px) !important;
            transform: none !important;
            z-index: 1000000 !important;
          }
          .chatbot-modal {
            width: 95vw !important;
            max-width: 95vw !important;
            right: 2.5vw !important;
            left: 2.5vw !important;
            bottom: 0px !important;
            top: 20px !important;
            height: calc(100vh - 20px) !important;
            transform: none !important;
            z-index: 1000000 !important;
          }
          .chat-modal-content {
            height: 100% !important;
            max-height: 100% !important;
            width: 100% !important;
          }
          .cloud-bubble {
            width: 180px !important;
            bottom: 90px !important;
            right: 10px !important;
            padding: 10px 15px !important;
          }
          .cloud-bubble p {
            font-size: 12px !important;
          }
          .dot-1 {
            right: 30px !important;
            bottom: -15px !important;
          }
          .dot-2 {
            right: 20px !important;
            bottom: -25px !important;
          }
        }

        .robot-button:active {
          cursor: grabbing;
        }

        .robot-button:hover {
          transform: scale(1.05);
        }
        
        body.dragging-chatbox {
          overflow: hidden !important;
          position: fixed !important;
          width: 100% !important;
          height: 100% !important;
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

        .chat-messages-container {
          scrollbar-width: thin; /* Firefox */
          scrollbar-color: #cbd5e1 transparent; /* Firefox */
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch; /* iOS momentum scrolling */
          touch-action: pan-y; /* Allow vertical touch panning */
          overflow-y: auto !important;
          overflow-x: hidden !important; /* Prevent horizontal sliding */
          overscroll-behavior: contain; /* Prevent scroll chaining to body */
        }
        .chat-messages-container::-webkit-scrollbar {
          width: 8px; /* Slightly wider for easier touch/see */
          display: block !important;
        }
        .chat-messages-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .chat-messages-container::-webkit-scrollbar-thumb {
          background: #94a3b8; /* Darker thumb */
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        .chat-messages-container::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>

      {/* 🤖 CUTE ROBOT BUTTON */}
      <button
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleButtonClick}
        className="robot-button fixed"
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={isOpen}
        style={{ 
          transform: isMounted && typeof window !== 'undefined' && window.innerWidth > 768 
            ? `translate(${position.x}px, ${position.y}px)` 
            : 'none'
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
            preload="none"
            aria-hidden="true"
            className="robot-image"
          />
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div 
          className="chatbot-modal fixed"
          role="dialog"
          aria-modal="true"
          aria-label="Chat with Prof.Unique AI Assistant"
          style={{ 
            position: 'fixed',
            bottom: '0px',
            right: '20px',
            top: '20px',
            width: typeof window !== 'undefined' && window.innerWidth <= 768 ? '95vw' : '400px',
            maxWidth: typeof window !== 'undefined' && window.innerWidth <= 768 ? '95vw' : '400px',
            height: 'calc(100vh - 40px)',
            zIndex: 1000000,
            transform: isMounted && typeof window !== 'undefined' && window.innerWidth > 768 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'none'
          }}
        >
          <div className="chat-modal-content bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 flex flex-col h-full w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              aria-label="Close chat"
            >
              <span className="text-2xl" aria-hidden="true">✕</span>
            </button>
            <div className="flex items-center gap-3 mb-4 border-b pb-3 shrink-0">
              <div className="relative">
                <Image src="/uni.webp" alt="Prof.Unique AI Assistant" width={40} height={40} className="rounded-full ring-2 ring-blue-100" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Prof.Unique</h2>
                <p className="text-xs text-green-600 font-medium">Online | AI Assistant</p>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gray-50/50 rounded-xl mb-4 chat-messages-container" aria-live="polite" aria-label="Chat messages" role="log">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex mb-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-4 py-3 rounded-2xl max-w-[90%] text-sm shadow-sm ${
                      msg.sender === "user" 
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-tr-none" 
                        : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                    }`}
                  >
                    {msg.sender === "bot" ? (
                      <div className="space-y-2 whitespace-pre-wrap leading-relaxed">
                        {msg.text.split('\n').map((line, i) => {
                          if (line.startsWith('# ')) {
                            return <h1 key={i} className="text-xl font-bold text-blue-800 mb-2 mt-1">{line.replace('# ', '')}</h1>;
                          }
                          if (line.startsWith('## ')) {
                            return <h2 key={i} className="text-lg font-semibold text-gray-800 mb-1 mt-2">{line.replace('## ', '')}</h2>;
                          }
                          if (line.startsWith('### ')) {
                            return <h3 key={i} className="text-md font-semibold text-gray-700 mb-1">{line.replace('### ', '')}</h3>;
                          }
                          
                          // Handle bold text **bold**
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={i} className="mb-1">
                              {parts.map((part, j) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={j} className="font-bold text-blue-700">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              })}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-3">
                  <div className="bg-white border border-gray-100 px-4 py-2 rounded-2xl rounded-tl-none text-sm text-gray-500 shadow-sm flex items-center gap-2">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </span>
                    Prof.Unique is thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2 shrink-0 bg-white p-1 rounded-xl border border-gray-100 shadow-sm" role="search" aria-label="Chat input">
              <label htmlFor="chat-input" className="sr-only">Type your message</label>
              <input
                id="chat-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about courses, fees..."
                className="flex-1 px-4 py-2 text-sm focus:outline-none bg-transparent"
                aria-label="Type your message"
              />
              <button 
                type="submit" 
                disabled={isLoading} 
                aria-label="Send message"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {openEnquiryModal && (
        <ApplyEnquiryModal
          open={openEnquiryModal}
          onOpenChange={(v) => !v && setOpenEnquiryModal(false)}
          title="Speak with Expert Counselor"
          subtitle="Share your details and our counselor will reach out to you"
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327867/uu_form_ipzqyg.webp"
          universityName=""
          defaultProgram=""
          formType="general"
        />
      )}
    </>
  );
};

export default ChatBox;