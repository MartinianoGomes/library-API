// import express from 'express';
// import router from './routes/routes.js';
// import './config/database.js';

// const app = express();

// app.use(express.json());
// app.use(router);

// const startServer = async () => {
//     try {
//         await connect();
//         console.log('Conexão com o banco de dados estabelecida com sucesso.');
//         app.listen(3000, () => {
//             console.log('Servidor rodando na porta 3000.');
//         });
//     } catch (error) {
//         console.error('Erro ao iniciar o servidor:', error);
//     }
// };

// startServer();

const express = require('express');
const bookRoutes = require('./routes/routesPaths/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});