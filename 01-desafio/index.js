const express = require("express");

const server = express();
server.use(express.json());

let projects = [
  { id: 0, title: "Projeto 1", tasks: [] },
  { id: 1, title: "Projeto 2", tasks: [] }
];

// Middlewares

server.use((req, res, next) => {
  console.count("Number");
  next();
});

const userCheck = (req, res, next) => {
  const { id } = req.params;
  let isId = false;
  projects.forEach(project => {
    if (project.id === Number(id)) {
      isId = true;
    }
  });
  if (isId) {
    next();
  } else {
    res.status(400).json({ error: "id not found" });
  }
};

// Routes
server.get("/projects", (req, res) => {
  res.send(projects);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  projects.push({ id, title, tasks: [] });
  res.send(projects);
});

server.put("/projects/:id", userCheck, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  projects.forEach(project => {
    if (project.id === Number(id)) {
      project.title = title;
    }
  });
  res.send(projects);
});

server.delete("/projects/:id", userCheck, (req, res) => {
  const { id } = req.params;
  projects.forEach((project, index) => {
    if (project.id === Number(id)) {
      projects.splice(index, 1);
    }
  });
  res.send(projects);
});

server.post("/projects/:id/tasks", userCheck, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  projects.forEach(project => {
    if (project.id === Number(id)) {
      project.tasks.push(title);
    }
  });
  res.send(projects);
});

server.listen("3001");
