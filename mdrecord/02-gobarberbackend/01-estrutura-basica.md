```sh
sudo yarn init -y
sudo yarn add express
```

- src/app.js
```js
const express = require("express");
const routes = require("./routes");

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

module.exports = new App().server;

```
- src/server.js
```js
const app = require("./app");

app.listen(3333);

```

- src/routes.js
```js
const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

module.exports = routes;

```