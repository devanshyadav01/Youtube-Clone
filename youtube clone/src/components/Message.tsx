import React from 'react';
import { formatDistanceToNow } from '../utils/date';
import type { Message as MessageType } from '../types/message';

interface MessageProps {
  message: MessageType;
}

export function Message({ message }: MessageProps) {
  return (
    <div className="flex items-start gap-3 group hover:bg-gray-700/50 p-2 rounded">
      <img
        src={message.user.avatar || `https://ui-avatars.com/api/?name=${message.user.username}`}
        alt={message.user.username}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-white">{message.user.username}</span>
          <span className="text-xs text-gray-400">
            {formatDistanceToNow(new Date(message.timestamp))}
          </span>
        </div>
        <p className="text-gray-300">{message.content}</p>
      </div>
    </div>
  );
}