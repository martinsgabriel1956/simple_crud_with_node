// Importa as dependencies do server.js
const express = require('express');

// Cria o app Express
const app = express();

// Seta a porta do servidor
const port = process.env.PORT || 5000;

// Requisições do tipo urlencoded
app.use(express.urlencoded({ extended: true }));

// Requisições do tipo JSON
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => res.send('Hello World'));

// Ouve todas as requisições
app.listen(port, () => console.log(`Server is listening on ${port} 🚀`));
