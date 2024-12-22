import express from 'express';
import { db } from '../database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/:serverId', authenticateToken, (req, res) => {
  const { serverId } = req.params;

  try {
    const channels = db.prepare('SELECT * FROM channels WHERE server_id = ?').all(serverId);
    res.json(channels);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', authenticateToken, (req, res) => {
  const { serverId, name, type } = req.body;

  try {
    const result = db.prepare('INSERT INTO channels (server_id, name, type) VALUES (?, ?, ?)')
      .run(serverId, name, type);
    
    const channel = db.prepare('SELECT * FROM channels WHERE id = ?').get(result.lastInsertRowid);
    res.json(channel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export { router as channelsRouter };