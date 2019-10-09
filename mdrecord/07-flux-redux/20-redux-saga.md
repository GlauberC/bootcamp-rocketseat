# Conceito
- Serve como um middleware que intercepta actions
- Side effect
  - pode ser assíncrono
  - pode ser chamada api
  - acesso a banco de dados
```js
  yarn add redux-saga
```

# configurando sagas.js
- store/modules/cart/sagas.js
```js
  import {call, put, all, takeLatest} from 'redux-saga/effects'
  import api from '../../../services/api'
  import {addToCartSuccess} from './actions'

  // o * funciona como o async await
  function* addToCart({id}){
    const response = yield call(api.get, `/products/${id}`)
    yield put(addToCartSuccess(response.data))
  }
  export default all([
    // evita cliques muito rápidos (o contrario dele é o takeEvery)
    takeLatest('@cart/ADD_REQUEST', addToCart),
  ])
```

# configurando a action
- modules/cart/action.js
```js
  export function addToCartRequest(id){
    return{
      type: '@cart/ADD_REQUEST',
      id
    }
  }
    export function addToCartSuccess(product){
    return{
      type: '@cart/ADD_SUCCESS',
      product
    }
  }
  ...
```
- Alterar no index para ouvir addToCartRequest
- Alterar no reducer para ouvir addToCartSuccess

# criar o rootSaga
- store/modues/rootSaga.js
```js
  import { all } from 'redux-saga/effects'
  import cart from './cart/sagas'

  export default function* rootSaga(){
    return yield all([
      cart
    ])
  }
```

# configurando o store
- store/index.js
```js
  import {createStore, applyMiddleware, compose} from 'redux'
  import createSagaMiddleware from 'redux-saga'
  ...
  import rootSaga from './modules/rootSaga'
  const sagaMiddleware = createSagaMiddleware()

    const enhancer = process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer()
        applyMiddleware(sagaMiddleware)
      )
    : applyMiddleware(sagaMiddleware);

  ...

  sagaMiddleware.run(rootSaga)
  
  export default store
```

