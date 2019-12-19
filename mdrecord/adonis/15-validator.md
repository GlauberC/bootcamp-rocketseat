# Validação dos campos

- https://adonisjs.com/docs/4.1/validator

```sh
  adonis install @adonisjs/validator
```

- start/app.js

```js
const providers = [..."@adonisjs/validator/providers/ValidatorProvider"];
```

```sh
  adonis make:validator User
```

- start/routes.js

```js
Route.post("users", "UserController.store").validator("User");
```

- app/Validators/User.js

```js
"use strict";

class User {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: "required|unique:users",
      email: "required|email|unique:users",
      password: "required|confirmed"
    };
  }
}

module.exports = User;
```
