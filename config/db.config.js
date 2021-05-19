const mysql = require('mysql');

// Configuração do Banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
});

db.connect((err) => {
  if (err) throw err;

  console.log('Database Connected!');
});

module.exports = db;
