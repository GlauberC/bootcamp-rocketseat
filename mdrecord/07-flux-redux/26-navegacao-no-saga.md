# Criando configuração da history
- services/history.js
```sh
  yarn add history
```
```js
  import { createBrowserHistory } from 'history';

  const history = createBrowserHistory();

  export default history;
```

# mudando app.js
- src/app.js
```js
  ...
  // import { BrowserRouter } from 'react-router-dom';
  import { Router } from 'react-router-dom';
  ...

    <Provider store={store}>
      <Router history={history}>
        <Header />
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  ...
```
# no sagas.js
- modules/cart/sagas.js
```js
    ...
    // Ao final do addToCartSuccess
    history.push('/cart');
    ...
```