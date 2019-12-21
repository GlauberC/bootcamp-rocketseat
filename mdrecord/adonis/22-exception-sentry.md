# criando conta no Sentry.io

- https://sentry.io

- Criar novo projeto node

```sh
  npm install @sentry/node@5.10.2
```

-.env

```js
  SENTRY_DSN=https://PEGAR NO SITE DO SENTRY.IO
```

- config/services.js

```js
"use strict";

const Env = use("Env");

module.exports = {
  sentry: {
    dsn: Env.get("SENTRY_DSN")
  }
};
```

- Exception/handler.js

```js
const Sentry = require('@sentry/node')
const Config = use('Config')

...

  async report (error, { request }) {
    Sentry.init(Config.get('services.sentry'))
    Sentry.captureException(error)
  }
```
