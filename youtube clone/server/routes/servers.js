import express from 'express';
import { db } from '../database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
  const { userId } = req.user;

  try {
    const servers = db.prepare(`
      SELECT s.* FROM servers s
      JOIN server_members sm ON s.id = sm.server_id
      WHERE sm.user_id = ?
    `).all(userId);
    
    res.json(servers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/', authenticateToken, (req, res) => {
  const { name, icon } = req.body;
  const { userId } = req.user;

  try {
    const result = db.prepare('INSERT INTO servers (name, icon, owner_id) VALUES (?, ?, ?)')
      .run(name, icon, userId);
    
    // Add owner as server member
    db.prepare('INSERT INTO server_members (server_id, user_id, role) VALUES (?, ?, ?)')
      .run(result.lastInsertRowid, userId, 'owner');
    
    const server = db.prepare('SELECT * FROM servers WHERE id = ?').get(result.lastInsertRowid);
    res.json(server);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export { router as serversRouter };