const express = require("express");

const server = express();
server.use(express.json());

const users = ["Diego", "Cláudio", "Victor"];

// Criação de um middleware global
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Método ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd("Request");
});

// Criação de um middleware local
checkUserExists = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Name not found on request body" });
  }
  return next();
};

checkUserinArray = (req, res, next) => {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "User does not exists" });
  }
  req.user = user;
  return next();
};

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkUserinArray, (req, res) => {
  return res.json(req.user);
});

server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put("/users/:index", checkUserExists, checkUserinArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

server.delete("/users/:index", checkUserinArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.json({ message: "Usuário deletado com sucesso" });
});

server.listen(3001);
