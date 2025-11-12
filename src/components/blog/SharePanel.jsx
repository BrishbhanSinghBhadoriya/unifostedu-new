"use client";

import { useState, useCallback } from "react";

export default function SharePanel({ shareUrl, title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy share URL", error);
      window.prompt("Copy this link", shareUrl);
    }
  }, [shareUrl]);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-8 sm:px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">
          Share this article
        </h2>
        <p className="text-sm text-slate-600 mt-2 max-w-lg">
          Found this insightful? Spread the word and help more learners discover
          verified guidance on online education.
        </p>
      </div>
      <div className="flex flex-col w-full gap-3 text-sm font-semibold xs:flex-row xs:flex-wrap md:justify-end md:items-center">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            shareUrl,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#003b6c] px-4 py-2 text-[#003b6c] hover:bg-[#003b6c] hover:text-white transition-colors w-full sm:w-auto"
          aria-label="Share on LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `Check out this UNIFOST article: ${shareUrl}`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500 px-4 py-2 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors w-full sm:w-auto"
          aria-label="Share on WhatsApp"
        >
          WhatsApp
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl,
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400 px-4 py-2 text-sky-500 hover:bg-sky-500 hover:text-white transition-colors w-full sm:w-auto"
          aria-label="Share on X (Twitter)"
        >
          X (Twitter)
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-slate-600 hover:bg-slate-100 transition-colors w-full sm:w-auto"
          aria-live="polite"
        >
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </div>
  );
}

