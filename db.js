const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'securecart-db.cj0qs02mgijs.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'SecureCart123!',
  database: 'securecart'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to AWS RDS MySQL database.');
});

module.exports = db;