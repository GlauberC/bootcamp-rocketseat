# documentação do adonis

- https://adonisjs.com/docs/4.1/mail

# instalando

```sh
  adonis install @adonisjs/mail
```

# configurando

- start/app.js

```js
...
const providers = [
  ...,
  '@adonisjs/mail/providers/MailProvider'
]
...
```

- criar conta e projeto no mailtrap.io
- configurar arquivo .env

```js
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=699b004ba55001
MAIL_PASSWORD=090d95edd51601
```

- ForgotPasswordController.js

```js

...
const Mail = use('Mail')
...

      await user.save()

      await Mail.send(
        ['emails.forgot_password'], // template de email
        {
          email,
          token: user.token,
          link: `${request.input('redicrect_url')}?token=${user.token}`
        }, // parametros de email
        message => {
          message
            .to(user.email)
            .from('gonode@rocketseat.com.br', 'Equpe gonode')
            .subject('Recuperação de Senha')
        }
      )
    } catch (err) {
      ...

```

# configurando provider de view

- https://adonisjs.com/docs/4.1/views
- start/app.js

```js
...
const providers = [
  ...,
  '@adonisjs/framework/providers/ViewProvider'
]
...
```

- ./resources/views/emails/forgot_password.edge

```html
<strong>Recuperando senha</strong>

<p>
  Uma solicitação de recuperação de senha foi realizada para o e-mail
  ({{email}})
</p>
<p>Caso você não tenha solicitado, troque sua senha imediatamente</p>

<p>
  Para continuar com a recuperação de senha, utilize o token {{token}} ou clique
  no link abaixo
</p>

<a href="{{link}}"> Criar nova senha</a>
```

- config/mail.js

```js
...
  port: Env.get('MAIL_PORT', 2525),
  host: Env.get('MAIL_HOST'),
...
```
