import React from 'react';
import { Plus } from 'lucide-react';
import { useServers } from '../hooks/useServers';

export function ServerList() {
  const { servers } = useServers();

  return (
    <div className="w-20 bg-gray-900 flex flex-col items-center py-3 space-y-2">
      {servers.map((server) => (
        <button
          key={server.id}
          className="w-12 h-12 rounded-full bg-gray-700 hover:bg-indigo-500 transition-colors flex items-center justify-center text-white font-medium"
        >
          {server.icon ? (
            <img
              src={server.icon}
              alt={server.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            server.name.charAt(0)
          )}
        </button>
      ))}
      <button className="w-12 h-12 rounded-full bg-gray-700 hover:bg-green-500 transition-colors flex items-center justify-center text-white">
        <Plus size={24} />
      </button>
    </div>
  );
}