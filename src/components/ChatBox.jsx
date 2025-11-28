'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import axios from 'axios';
import Image from 'next/image';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm EduAI Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Play notification sound
  const playNotificationSound = () => {
    try {
      // Create a simple notification sound using Web Audio API
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
      console.log('Could not play sound:', error);
    }
  };

  // Auto-open chat after 10 seconds
  useEffect(() => {
    if (hasAutoOpened) return;

    const timer = setTimeout(() => {
      if (!isOpen) {
        playNotificationSound();
        setIsOpen(true);
        setHasAutoOpened(true);
        
        // Add welcome message
        const welcomeMessage = {
          id: Date.now(),
          text: "Hi there! 👋 Welcome to UNIFOST! I'm here to help you find the perfect online degree program. Feel free to ask me anything about courses, universities, or admissions!",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, welcomeMessage]);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [hasAutoOpened, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when chat opens
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const messageToSend = inputValue.trim();
      
      
      // Use Next.js API route as proxy to avoid CORS issues
      const response = await axios.post(
        '/api/v1/n8n-webhook',
        { 
          message: messageToSend,
          
          
        },
        {
          headers: { 
            'Content-Type': 'application/json'
          },
          timeout: 30000 // 30 seconds timeout
        }
      );
      
      console.log('Webhook response:', response.data); // Debug log
      
      // Handle response from proxy
      const botResponse = response.data?.response || 
                         response.data?.message || 
                         'I received your message, but the response format was unexpected.';
      
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        code: error.code
      });
      
      let errorText = 'Sorry, I encountered an error. Please try again later.';
      
      if (error.response?.data) {
        // Try to extract error message from response
        const errorData = error.response.data;
        errorText = errorData.error || errorData.message || errorData.text || errorText;
      } else if (error.message) {
        errorText = `Error: ${error.message}`;
      }
      
      const errorMessage = {
        id: Date.now() + 1,
        text: errorText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl hover:from-blue-500 hover:via-blue-400 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 animate-pulse"
        aria-label="Open chat"
      >
        <MessageCircle className="h-7 w-7 text-white drop-shadow-lg" />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-xs font-bold text-white shadow-lg animate-bounce">
            1
          </span>
        )}
      </button>

      {/* Chat Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="flex h-[600px] max-w-md flex-col p-0 sm:h-[650px] overflow-hidden shadow-2xl border-0"
          showCloseButton={true}
        >
          {/* Dialog Title for accessibility - visually hidden */}
          <DialogTitle className="sr-only">EduAI Assistant Chat</DialogTitle>
          
          {/* Chat Header */}
          <div className="flex items-center gap-3 border-b border-blue-400/20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 px-5 py-4 shadow-lg">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white/50">
              <Image
                src="/uni.webp"
                alt="EduAI Assistant"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-white drop-shadow-sm">EduAI Assistant</h3>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-lg"></span>
                  </span>
                  <p className="text-xs font-medium text-blue-100">Active now</p>
                </div>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 via-blue-50/30 to-gray-50 p-5">
            <div className="space-y-5">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 transition-all duration-300 ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-md ring-2 ${
                      message.sender === 'bot'
                        ? 'bg-gradient-to-br from-blue-100 to-blue-200 ring-blue-200'
                        : 'bg-gradient-to-br from-gray-200 to-gray-300 ring-gray-200'
                    }`}
                  >
                    {message.sender === 'bot' ? (
                      <Image
                        src="/uni.webp"
                        alt="Bot"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <User className="h-5 w-5 text-gray-600" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-md transition-all hover:shadow-lg ${
                      message.sender === 'bot'
                        ? 'bg-white text-gray-800 border border-gray-100'
                        : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                      {message.text}
                    </p>
                    <span
                      className={`mt-2 block text-xs font-medium ${
                        message.sender === 'bot'
                          ? 'text-gray-400'
                          : 'text-blue-100'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-start gap-3 transition-all duration-300">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-md ring-2 ring-blue-200">
                    <Image
                      src="/uni.webp"
                      alt="Bot"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="max-w-[80%] rounded-2xl bg-white px-4 py-3 shadow-md border border-gray-100">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.3s]"></div>
                      <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]"></div>
                      <div className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600"></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-200 bg-gradient-to-r from-white to-gray-50/50 p-4 shadow-lg"
          >
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-100 placeholder:text-gray-400"
              />
              <Button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 p-0 shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="h-5 w-5 text-white" />
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBox;

