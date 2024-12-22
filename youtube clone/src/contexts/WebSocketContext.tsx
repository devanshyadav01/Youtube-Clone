import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useAuth } from './AuthContext';

interface WebSocketContextType {
  sendMessage: (message: any) => void;
}

const WebSocketContext = createContext<WebSocketContextType | null>(null);

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const { token, isAuthenticated } = useAuth();
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (isAuthenticated && token) {
      ws.current = new WebSocket('ws://localhost:3000');

      ws.current.onopen = () => {
        if (ws.current?.readyState === WebSocket.OPEN) {
          ws.current.send(JSON.stringify({ type: 'auth', token }));
        }
      };

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        // Handle different message types
        console.log('Received:', data);
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      return () => {
        ws.current?.close();
      };
    }
  }, [token, isAuthenticated]);

  const sendMessage = (message: any) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(message));
    }
  };

  return (
    <WebSocketContext.Provider value={{ sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocket() {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
}