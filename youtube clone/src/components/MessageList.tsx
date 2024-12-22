import React from 'react';
import { useMessages } from '../hooks/useMessages';
import { Message } from './Message';

export function MessageList() {
  const { messages } = useMessages();

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}