'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const ChatBox = dynamic(() => import('@/components/ChatBox'), {
  loading: () => null,
  ssr: false
});

export default function ChatBoxWrapper() {
  const pathname = usePathname();
  const [showChatBox, setShowChatBox] = useState(true);
  const [chatReady, setChatReady] = useState(false);

  useEffect(() => {
    const mountChat = () => setChatReady(true);
    if (typeof window === 'undefined') return;

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(mountChat, { timeout: 3500 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(mountChat, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hideHeaderRoutes = [
      "/amity",
      "/lpu-online",
      "/manipal",
      "/cuOnline",
      "/ku-online",
      "/smu",
      "/jain",
      "/dypatil",
      "/sharda",
      "/shoolini",
      "/vgu",
      "/upes",
      "/opjindal",
      "/nmims",
      "/uu",
      "/amrita",
      "/amity-online-mba-total-fees",
      "/best-online-mca-university-in-india",
      "/muj-online-bba",
      "/muj-online-bca",
      "/muj-online-ba",
      "/muj-online-mba",
      "/muj-online-mca"
    ];

    const shouldHideChatBox = hideHeaderRoutes.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    );

    setShowChatBox(!shouldHideChatBox);
  }, [pathname]);
  if (!showChatBox || !chatReady) return null;
  return <ChatBox />;
}

