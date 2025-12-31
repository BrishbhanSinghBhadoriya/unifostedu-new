'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import axios from 'axios';
import { Send, User } from 'lucide-react';
import Image from 'next/image';
import { FormEvent, useEffect, useRef, useState } from 'react';

type MenuKey = 'blogs' | 'careers' | 'courses' | null;

type SenderType = 'user' | 'bot';

type ChatMessage = {
  id: number;
  text: string;
  sender: SenderType;
  timestamp: Date;
};


declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}



const ChatBox = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasAutoOpened, setHasAutoOpened] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    
    {
      id: 1,
      text: "Hello! 👋 I'm Prof.Uni. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<MenuKey>(null);


  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  /* ================= SOUND ================= */

  const playNotificationSound = () => {
    try {
      const AudioCtx =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioCtx) return;

      const audioContext = new AudioCtx();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.5
      );

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch {
      // silent fail
    }
  };


  useEffect(() => {
    if (hasAutoOpened) return;

    const timer = setTimeout(() => {
      if (!isOpen) {
        playNotificationSound();
        setIsOpen(true);
        setHasAutoOpened(true);

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text:
              "Hi there! 👋 Welcome to UNIFOST! I'm here to help you find the perfect online degree program. Feel free to ask me anything!",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasAutoOpened, isOpen]);

  

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages]);

  

  const handleSendMessage = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: userText,
        sender: 'user',
        timestamp: new Date(),
      },
    ]);

    setInputValue('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        '/api/v1/n8n-webhook',
        { message: userText },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 30000,
        }
      );

      const cleanedRawResponse =
        Array.isArray(response.data?.raw)
          ? response.data.raw
              .map((entry: any) => entry?.cleaned?.trim())
              .filter(Boolean)
              .join('\n\n')
          : null;

      const botResponse =
        cleanedRawResponse ||
        response.data?.response ||
        response.data?.message ||
        'I received your message, but the response format was unexpected.';

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: botResponse,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } catch (err: unknown) {
      let errorText =
        'Sorry, I encountered an error. Please try again later.';

      if (axios.isAxiosError(err)) {
        errorText =
          err.response?.data?.error ||
          err.response?.data?.message ||
          err.message;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: errorText,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]"
        aria-label="Open chat"
      >
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1764325099/chat-bot_iczljl.gif"
          alt="Chatbot"
          width={96}
          height={96}
          className="rounded-full shadow-lg"
          unoptimized
        />
      </button>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="flex h-[600px] max-w-md flex-col p-0">
          <DialogTitle className="sr-only">
            Prof.Uni Chat
          </DialogTitle>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-xl px-4 py-2 text-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="flex gap-2 border-t p-3"
          >
            <input
              ref={inputRef}
              value={inputValue}
              onChange={(e) =>
                setInputValue(e.target.value)
              }
              placeholder="Type your message..."
              className="flex-1 rounded-lg border px-3 py-2 text-sm"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
            >
              <Send size={18} />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBox;
