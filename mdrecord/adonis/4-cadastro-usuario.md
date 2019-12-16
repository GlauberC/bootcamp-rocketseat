# criando user controller

```sh
adonis make:controller User
```

-user controller

```js
"use strict";

const User = use("App/Models/User");

class UserController {
  async store({ request }) {
    const data = request.only(["username", "email", "password"]);

    const user = await User.create(data);

    return user;
  }
}

module.exports = UserController;
```

- start/routes.js

```js
"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use("Route");

Route.post("users", "UserController.store");
```

- ver rotas

```sh
adonis route:list
```
