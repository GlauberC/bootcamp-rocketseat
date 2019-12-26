# configurando o redux e o reducer de auth
```sh
yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer
```

- src/store/modules/auth/reducer.js
```js
const INITIAL_STATE = {};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

```
- src/store/modules/auth/sagas.js
```js
import { all } from "redux-saga/effects";

export default all([]);

```

- src/store/modules/rootReducer.js
```js
import { combineReducers } from "redux";

import auth from "./auth/reducer";

export default combineReducers({
  auth
});

```
- src/store/modules/rootSaga.js
```js
import { all } from "redux-saga/effects";

import auth from "./auth/sagas";

export default function* rootSaga() {
  return yield all([auth]);
}
```
- src/store/index.js
```js
import createSagaMiddleware from "redux-saga";
import createStore from "./createStore";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;

```

- src/store/createStore.js
```js
import { createStore, compose, applyMiddleware } from "redux";

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === "development"
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};

```

- src/config/ReactotronConfig.js
```js
...
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";
...

  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

...
```
- src/App.js
```js
...
import { Provider } from "react-redux";
...
import store from "./store";
...

    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
...

```
