# Tratando Excessões

```sh
  adonis make:ehandler
```

- app/Exceptions/Handler.js

```js
...
const Env = use('Env')
const Youch = use('youch')
...

 async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }

    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request.request)
      const errorJSON = await youch.toJSON()

      return response.status(error.status).send(errorJSON)
    }

    return response.status(error.status)
  }



```
