- .env.test
```
APP_URL=http://localhost:3333
NODE_ENV=development

# Auth

APP_SECRET=templatenoderocketseat

# Database

DB_DIALECT=sqlite
```

- src/config/database.js
```js
require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: './__tests__/database.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

```

- src/app.js
```js
import './bootstrap';

import Youch from 'youch';
import express from 'express';
import 'express-async-errors';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;

```
- src/bootstrap.js
```js
import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test ' ? '.env.test' : '.env',
});

```

- package.json
```json
{
  "name": "template-node",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon src/server.js",
    "build": "sucrase ./src -d ./dist --transforms imports",
    "test": "NODE_ENV=test jest"
  },
  "dependencies": {
    "dotenv": "^8.0.0",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "pg": "^7.17.1",
    "pg-hstore": "^2.3.3",
    "sequelize": "^5.9.4",
    "youch": "^2.0.10"
  },
  "devDependencies": {
    "@sucrase/jest-plugin": "^2.0.0",
    "@types/jest": "^24.9.1",
    "eslint": "^5.16.0",
    "eslint-config-airbnb-base": "^13.2.0",
    "eslint-config-prettier": "^6.0.0",
    "eslint-plugin-import": "^2.18.0",
    "eslint-plugin-prettier": "^3.1.0",
    "jest": "^25.1.0",
    "nodemon": "^1.19.1",
    "prettier": "^1.18.2",
    "sequelize-cli": "^5.5.0",
    "sucrase": "^3.10.1"
  }
}

```