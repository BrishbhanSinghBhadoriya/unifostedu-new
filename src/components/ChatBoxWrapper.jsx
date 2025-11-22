'use client';

import dynamic from 'next/dynamic';

const ChatBox = dynamic(() => import('@/components/ChatBox'), { 
  loading: () => null, 
  ssr: false 
});

export default function ChatBoxWrapper() {
  return <ChatBox />;
}

