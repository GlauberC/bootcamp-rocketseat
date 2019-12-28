# configurando react-toastify

```sh
yarn add react-toastify
```

- App.js

```js
...
import { ToastContainer } from "react-toastify";
...

<Provider store={store}>
  <PersistGate persistor={persistor}>
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
    </Router>
  </PersistGate>
</Provider>
```

- styles/global.js

```js
...
import "react-toastify/dist/ReactToastify.css";
```

- store/modules/auth/sagas.js

```js
...
import { toast } from "react-toastify";
...
  if (!user.provider) {
    toast.error("Usuário não é prestador");
    return;
  }
...
  } catch (err) {
    toast.error("Falha na autenticação, verifique seus dados");
    yield put(signFailure());
  }
...
```
