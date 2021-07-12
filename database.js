const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'node_prac'
});