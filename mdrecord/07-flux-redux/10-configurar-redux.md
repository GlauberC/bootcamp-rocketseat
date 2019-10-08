# Configurar redux
```sh
  yarn add redux react-redux
```

# Store
- Store/index.js
```js
  import {createStore } from 'redux'

  const store = createStore()

  export default store
```

# importar store no app.js
- app.js
```js
  ...
  import { Provider } from 'react-redux';
  ...
  import store from 'store'
  ...

  return(
    <Provider store={store}>
      ...
    </Provider>
  )

```

# module cart
- store/modules/cart/reducer.js
```js
export default function cart(){
  return [];
}
```

# importar reducer em Store
- Store/index.js
```js
  ...
  import reducer from './modules/cart/reducer'
  ...
```

# preparar configuração para vários reducers
- store/modules/rootReducer.js
```js
  import { combineReducers } from 'redux'

  import cart from './cart/reducer'

  export default combineReducers({
    cart
  })
```

# importar rootReducer em Store
- Store/index.js
```js
  ...
  import rootReducer from './modules/rootReducer'
  
  const store = createStore(reducer)
  ...
```