# configurando o toastify
```sh
  yarn add react-toastify
```

# importando na app.js
- src/app.js
```js
  ...
  import { ToastContainer } from 'react-toastify';
  ...
    // Dentro de browserrouter
    <ToastContainer autoClose={3000} />
  ...

```
# importando em global
- styles/global.js
```js
  ...
  import 'react-toastify/dist/ReactToastify.css';
  ...

```

# importando no saga
- modules/cart/sagas.js
```js
  ...
  import { toast } from 'react-toastify';

  ...

    if (amount > stockAmount) {
      toast.error('Quantidade solicitada fora de estoque');
      return;
    }
  ...
```