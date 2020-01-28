```sh
sudo yarn add sucrase nodemon -D 
```

# Configurando Nodemon e socrase

- package.json
```json
{
  "name": "gobarberback",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon src/server.js",
    "dev:debug": "nodemon --inspect src/server.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.2",
    "sucrase": "^3.12.1"
  }
}

```

- nodemon.json
```json
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}

```

# configurando o debug
```sh
yarn dev:debug
```
- na aba debug do vscode 
- cria uma nova configuração nodejs


- .vscode/launch.json
```js
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",
      "restart": true,
      "protocol": "inspector"
    }
  ]
}

```

# Mudando para import from export default

- src/app.js
```js
import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

```

- src/routes.js
```js
import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

export default routes;

```

- src/server.js
```js
import app from "./app";

app.listen(3333);

```