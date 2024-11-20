const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY = 'qwertyuiopasdfghjklzxcvbnm';

exports.authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).json({ message: 'Access denied. No token provided.' });

    // Check for Bearer prefix and extract token
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7, authHeader.length) : authHeader;

    // Verify the token
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Authentication Error:', err.message); // Log error for debugging
    if (err.name === 'TokenExpiredError') {
      res.status(401).json({ message: 'Token expired. Please log in again.' });
    } else if (err.name === 'JsonWebTokenError') {
      res.status(400).json({ message: 'Invalid token.' });
    } else {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
};
