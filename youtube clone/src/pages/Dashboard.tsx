import React from 'react';
import { ServerList } from '../components/ServerList';
import { ChannelList } from '../components/ChannelList';
import { ChatArea } from '../components/ChatArea';
import { UserPanel } from '../components/UserPanel';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-800">
      <ServerList />
      <div className="flex flex-1">
        <div className="w-60 bg-gray-700 flex flex-col">
          <ChannelList />
          <UserPanel />
        </div>
        <ChatArea />
      </div>
    </div>
  );
}