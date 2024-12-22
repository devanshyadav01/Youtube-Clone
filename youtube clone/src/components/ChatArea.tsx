import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useMessages } from '../hooks/useMessages';
import { MessageList } from './MessageList';

export function ChatArea() {
  const [message, setMessage] = useState('');
  const { sendMessage } = useMessages();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-600">
      <MessageList />
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message #general"
            className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}