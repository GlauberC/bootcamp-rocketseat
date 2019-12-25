# instalando e configurando yup
```sh
yarn add yup
```

- SignIn/index.js
```js
import * as Yup from "yup";

...

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});

...
<Form schema={schema} onSubmit={handleSubmit}>
...

```
- SignUp/index.js
```js
import * as Yup from "yup";

...

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "No mínimo 6 caracteres")
    .required("A senha é obrigatória")
});


...
<Form schema={schema} onSubmit={handleSubmit}>
...

```

- auth/styles.js
```css
...
  Content...
    form{
      span{
        color: #fb6f91;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }
    }
...
```