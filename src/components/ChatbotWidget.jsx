'use client';

import React, { useEffect } from "react";

const N8N_STYLESHEET_URL = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
const N8N_CHAT_BUNDLE = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";
const N8N_WEBHOOK_URL = "https://shivamjha18.app.n8n.cloud/webhook/d8eff321-c30c-41c3-8f94-f821fdd2119a/chat";

const ChatbotWidget = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let isMounted = true;
    let linkElement = document.querySelector('link[data-n8n-chat="true"]');

    if (!linkElement) {
      linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = N8N_STYLESHEET_URL;
      linkElement.dataset.n8nChat = "true";
      document.head.appendChild(linkElement);
    }

    const loadChat = async () => {
      try {
        if (window.__n8nChatInitialized) {
          return;
        }

        const module = await import(/* webpackIgnore: true */ N8N_CHAT_BUNDLE);
        if (!isMounted) return;

        module.createChat?.({
          webhookUrl: N8N_WEBHOOK_URL,
        });

        window.__n8nChatInitialized = true;
      } catch (error) {
        console.error("Failed to initialize n8n chat:", error);
      }
    };

    loadChat();

    return () => {
      isMounted = false;
    };
  }, []);

  return null;
};

export default ChatbotWidget;
