'use client';

import { useEffect } from "react";



const N8N_STYLESHEET_URL =
  "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";

const N8N_CHAT_BUNDLE =
  "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

const N8N_WEBHOOK_URL =
  "https://n8n.unifostedu.com/webhook/fa76c212-548a-49a2-847e-b432690d7d6c/chat";



declare global {
  interface Window {
    __n8nChatInitialized?: boolean;
  }
}



const ChatbotWidget = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let isMounted = true;

    

    let linkElement = document.querySelector<HTMLLinkElement>(
      'link[data-n8n-chat="true"]'
    );

    if (!linkElement) {
      linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = N8N_STYLESHEET_URL;
      linkElement.dataset.n8nChat = "true";
      document.head.appendChild(linkElement);
    }

    

    let styleElement = document.querySelector<HTMLStyleElement>(
      'style[data-n8n-chat-override="true"]'
    );

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.type = "text/css";
      styleElement.dataset.n8nChatOverride = "true";
      styleElement.appendChild(
        document.createTextNode(`
          .chat-powered-by,
          .chat-get-started-footer .chat-powered-by {
            display: none !important;
            visibility: hidden !important;
          }
        `)
      );
      document.head.appendChild(styleElement);
    }

   

    const loadChat = async () => {
      try {
        if (window.__n8nChatInitialized) return;

        const module = await import(
          /* webpackIgnore: true */ N8N_CHAT_BUNDLE
        );

        if (!isMounted) return;

        module.createChat?.({
          webhookUrl: N8N_WEBHOOK_URL,
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
