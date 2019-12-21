# criando método update do forgot password

- Para trabalhar com datas

```sh
  npm install moment
```

- routes.js

```js
...,
Route.put('forgotpasswords', 'ForgotPasswordController.update')
```

- ForgotPasswordController.js

```js
...
const moment = require('moment')
...

async update ({ request, response }) {
    try {
      const { token, password } = request.all()

      const user = await User.findByOrFail('token', token)
      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)
      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'O token de recuperação está expirado' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo deu errado ao resetar sua senha ' } })
    }
  }
```
