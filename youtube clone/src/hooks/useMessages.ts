import { useState, useEffect } from 'react';
import { useWebSocket } from '../contexts/WebSocketContext';
import type { Message } from '../types/message';

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { sendMessage: sendWsMessage } = useWebSocket();

  const sendMessage = (content: string) => {
    // Replace with actual channel ID
    sendWsMessage({
      type: 'message',
      channelId: '1',
      content
    });
  };

  return { messages, sendMessage };
}