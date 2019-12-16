# Criando o ForgotPasswordController

```sh
  adonis make:contoller ForgotPassword
```

- app/controllers/Http/ForgotPasswordController.js

```js
"use strict";

const crypto = require("crypto");
const User = use("App/Models/User");

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input("email");
      const user = await User.findByOrFail("email", email);

      user.token = crypto.randomBytes(10).toString("hex");
      user.token_created_at = new Date();

      await user.save();
    } catch (err) {
      return response
        .status(err.status)
        .send({
          error: { message: "Algo não deu certo, esse email existe? " }
        });
    }
  }
}

module.exports = ForgotPasswordController;
```

- start/routes.js

```js
...
Route.post('forgotpasswords', 'ForgotPasswordController.store')
```

# Criando campo token na migration user

```sh
  adonis migration:rollback
```

- database/migrations/xxxxxxxxxxx_user.js

```js
...
  table.string('password', 60).notNullable()
  table.string('token')
  table.timestamp('token_created_at')
  table.timestamps()
...
```

```sh
  adonis migration:run
```
