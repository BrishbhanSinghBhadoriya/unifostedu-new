'use client';

import React, { useEffect } from "react";

const N8N_STYLESHEET_URL = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
const N8N_CHAT_BUNDLE = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";
const N8N_WEBHOOK_URL = "http://n8n.unifostedu.com:5678/webhook/fa76c212-548a-49a2-847e-b432690d7d6c/chat"

const ChatbotWidget = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let isMounted = true;
    let linkElement = document.querySelector('link[data-n8n-chat="true"]');
    let styleElement = document.querySelector('style[data-n8n-chat-override="true"]');

    if (!linkElement) {
      linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = N8N_STYLESHEET_URL;
      linkElement.dataset.n8nChat = "true";
      document.head.appendChild(linkElement);
    }

    // CSS override to hide "Powered by n8n" if it appears in the widget
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.type = "text/css";
      styleElement.dataset.n8nChatOverride = "true";
      styleElement.appendChild(
        document.createTextNode(`
          /* Hide n8n branding footer if present */
          .chat-get-started-footer .chat-powered-by,
          .chat-powered-by {
            display: none !important;
            visibility: hidden !important;
          }
        `)
      );
      document.head.appendChild(styleElement);
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
          // Override footer via i18n to avoid "Powered by n8n"
          i18n: {
            en: {
              footer: "",
              inputPlaceholder: "Type your question...",
            },
          },
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
