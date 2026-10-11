const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());

// Base route
app.get('/', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'SecureCart API is running!', products: results });
  });
});

// Secure search route using parameterized query
app.get('/search', (req, res) => {
  const productName = req.query.name;
  const query = 'SELECT * FROM products WHERE name = ?';
  
  db.query(query, [productName], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ results });
  });
});

// Secure login route using parameterized query
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  
  db.query(query, [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length > 0) {
      res.json({ success: true, message: 'Login successful!', user: results[0] });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});