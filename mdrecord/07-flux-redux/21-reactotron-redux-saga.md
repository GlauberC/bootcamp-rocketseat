# configurando o ReactotronConfig 
- config/ReactotronConfig.js
```sh
  yarn add reactotron-redux-saga
```
```js
  ...
  import reactotronSaga from 'reactotron-redux-saga'
  ...
    .use(reactotronSaga())
  ...
```

# Configurando o Store
- store/index.js
```js
  ...
  const sagaMonitor = process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null

  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor
  })
```