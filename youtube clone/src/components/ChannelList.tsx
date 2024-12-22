import React from 'react';
import { Hash, Volume2 } from 'lucide-react';
import { useChannels } from '../hooks/useChannels';

export function ChannelList() {
  const { channels } = useChannels();

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-white font-semibold mb-2">Text Channels</h2>
        <div className="space-y-1">
          {channels.map((channel) => (
            <button
              key={channel.id}
              className="flex items-center gap-2 w-full p-2 rounded hover:bg-gray-600 text-gray-300 hover:text-white transition-colors"
            >
              {channel.type === 'text' ? (
                <Hash size={20} />
              ) : (
                <Volume2 size={20} />
              )}
              <span>{channel.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}