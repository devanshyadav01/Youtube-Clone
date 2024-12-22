import React from 'react';
import { Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function UserPanel() {
  const { logout } = useAuth();

  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="https://ui-avatars.com/api/?background=random"
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div className="text-white font-medium">Username</div>
          <div className="text-xs text-gray-400">#1234</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-gray-400 hover:text-white">
          <Settings size={20} />
        </button>
        <button className="text-gray-400 hover:text-white" onClick={logout}>
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
}