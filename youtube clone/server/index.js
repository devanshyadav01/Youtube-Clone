import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import { initializeDatabase } from './database.js';
import { authRouter } from './routes/auth.js';
import { channelsRouter } from './routes/channels.js';
import { serversRouter } from './routes/servers.js';
import { handleWebSocket } from './websocket.js';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Initialize database
initializeDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/channels', channelsRouter);
app.use('/api/servers', serversRouter);

// WebSocket connection handling
wss.on('connection', handleWebSocket);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});