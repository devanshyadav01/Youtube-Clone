import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import type { Server } from '../types/server';

export function useServers() {
  const [servers, setServers] = useState<Server[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      fetch('http://localhost:3000/api/servers', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => setServers(data))
        .catch(console.error);
    }
  }, [token]);

  return { servers };
}