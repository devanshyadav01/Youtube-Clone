import express from 'express';
import jwt from 'jsonwebtoken';
import { db } from '../database.js';

const router = express.Router();
const JWT_SECRET = 'your-secret-key'; // In production, use environment variable

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  try {
    const stmt = db.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
    const result = stmt.run(username, email, password);
    
    const token = jwt.sign({ userId: result.lastInsertRowid }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  try {
    const user = db.prepare('SELECT * FROM users WHERE email = ? AND password = ?').get(email, password);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export { router as authRouter };