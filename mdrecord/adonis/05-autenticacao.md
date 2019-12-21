# criando controle de sessão

```sh
  adonis make:controller Session
```

- start/routes.js

```js
...
Route.post('sessions', 'SessionController.store')
```

- app/controllers/Http/SessionController.js

```js
"use strict";

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }
}

module.exports = SessionController;
```
