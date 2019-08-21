import express from 'express';

const server = express();

server.get('/', (req, res) => res.send({ message: 'olá desafio' }));

server.listen(3333);
