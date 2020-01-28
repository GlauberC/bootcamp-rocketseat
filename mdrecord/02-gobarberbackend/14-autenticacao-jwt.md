```sh
  sudo yarn add jsonwebtoken

```

- src/app/controllers/SessionController.js

```js
import jwt from "jsonwebtoken";

import User from "../models/User";

import authConfig from "../../config/auth";

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Password does not match" });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
}

export default new SessionController();
```

- src/app/models/User.js

```js
import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    );

    this.addHook("beforeSave", async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
```

### texto único na função sign do bcrypt

- md5 online
- escolha uma frase única (gobarberderayban)
- foi retornado o hash f604aad580fae13a5b98beb418d862a1

### criando a rota

- src/routes.js

```js
import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

export default routes;
```

### Separando as configurações

- src/config/auth.js

```js
export default {
  secret: "f604aad580fae13a5b98beb418d862a1",
  expiresIn: "7d"
};
```
