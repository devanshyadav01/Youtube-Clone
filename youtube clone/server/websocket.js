import { WebSocket } from 'ws';
import jwt from 'jsonwebtoken';
import { db } from './database.js';

const JWT_SECRET = 'your-secret-key'; // In production, use environment variable
const clients = new Map();

export function handleWebSocket(ws) {
  ws.on('message', async (message) => {
    try {
      const data = JSON.parse(message);
      
      switch (data.type) {
        case 'auth':
          handleAuth(ws, data.token);
          break;
        case 'message':
          handleMessage(ws, data);
          break;
        case 'typing':
          handleTyping(ws, data);
          break;
      }
    } catch (error) {
      ws.send(JSON.stringify({ type: 'error', error: error.message }));
    }
  });

  ws.on('close', () => {
    for (const [userId, client] of clients.entries()) {
      if (client === ws) {
        clients.delete(userId);
        break;
      }
    }
  });
}

function handleAuth(ws, token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    clients.set(decoded.userId, ws);
    ws.send(JSON.stringify({ type: 'auth', status: 'success' }));
  } catch (error) {
    ws.send(JSON.stringify({ type: 'auth', status: 'error', error: error.message }));
  }
}

function handleMessage(ws, data) {
  const { channelId, content } = data;
  
  try {
    const stmt = db.prepare('INSERT INTO messages (channel_id, user_id, content) VALUES (?, ?, ?)');
    const result = stmt.run(channelId, data.userId, content);
    
    // Broadcast message to all clients in the channel
    const message = {
      type: 'message',
      id: result.lastInsertRowid,
      channelId,
      userId: data.userId,
      content,
      timestamp: new Date().toISOString()
    };
    
    broadcastToChannel(channelId, message);
  } catch (error) {
    ws.send(JSON.stringify({ type: 'error', error: error.message }));
  }
}

function handleTyping(ws, data) {
  const { channelId, userId } = data;
  
  const typingNotification = {
    type: 'typing',
    channelId,
    userId
  };
  
  broadcastToChannel(channelId, typingNotification, userId);
}

function broadcastToChannel(channelId, message, excludeUserId = null) {
  // In a real implementation, you would maintain a mapping of channels to connected clients
  // For simplicity, we're broadcasting to all connected clients
  for (const [userId, client] of clients.entries()) {
    if (excludeUserId !== userId && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  }
}