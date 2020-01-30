```sh
  sudo yarn add dotenv 
```

- .env
```
# Environment
APP_URL=http://localhost:3333
NODE_ENV=development

# Auth
ORIGINAL_SECRET=gobarberderayban
APP_SECRET=f604aad580fae13a5b98beb418d862a1

# Database
DB_HOST=localhost
DB_USER=postgres
DB_PASS=docker
DB_NAME=gobarber

# Mongo
MONGO_URL=mongodb://localhost:27018/gobarber

#Redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

# Mail
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=2359026d828fad
MAIL_PASS=7d31a9139652f9

SENTRY_DSN=https://1078e32e2bf140199e154450b948a2dd@sentry.io/2101995

```
- src/app.js
```js
import 'dotenv/config';

import express from 'express';
import path from 'path';
import * as Sentry from '@sentry/node';
import Youch from 'youch';
import 'express-async-errors';
import routes from './routes';
import sentryConfig from './config/sentry';
import './database';

class App {
  constructor() {
    this.server = express();
    Sentry.init(sentryConfig);
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
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
- src/queue.js
```js
import 'dotenv/config';
import Queue from './lib/Queue';

Queue.processQueue();

```
- src/config/database.js
```js
require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

```
- src/config/auth.js
```js
export default {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};

```
- src/app/models/File.js
```js
import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default File;

```
- src/database/index.js
```js
import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();

```
- src/config/redis.js
```js
export default {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};

```
- src/config/mail.js
```js
export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  default: {
    from: 'Equipe Gobarber <noreply@gobarber.com>',
  },
};

```
- src/config/sentry.js
```js
export default {
  dsn: process.env.SENTRY_DSN,
};

```

- .env.example
```
# Environment
APP_URL=
NODE_ENV=development

# Auth
APP_SECRET=

# Database
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

# Mongo
MONGO_URL=

#Redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

# Mail
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=

SENTRY_DSN=

```