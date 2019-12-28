# Configurando persistencia dos dados

```sh
  yarn add redux-persist
```

- store/persistReducers.js

```js
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: "gobarber",
      storage,
      whitelist: ["auth", "user"]
    },
    reducers
  );
  return persistedReducer;
};
```

- store/index.js

```js
import { persistStore } from "redux-persist";

...

import persistedReducers from "./persistReducers";

...

const store = createStore(persistedReducers(rootReducer), middlewares);
const persistor = persistStore(store);
...
export { store, persistor };

```

- App.js

```js
import { PersistGate } from "redux-persist/integration/react";
...
import { store, persistor } from "./store";
...
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
```

- routes/Route.js

```js
...
import { store } from "~/store";
...
```
