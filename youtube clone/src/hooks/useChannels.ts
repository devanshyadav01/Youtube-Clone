import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import type { Channel } from '../types/channel';

export function useChannels() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      // Replace '1' with actual selected server ID
      fetch('http://localhost:3000/api/channels/1', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => setChannels(data))
        .catch(console.error);
    }
  }, [token]);

  return { channels };
}