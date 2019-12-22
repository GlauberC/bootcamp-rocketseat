# alterando o reducer

- modules/cart/reducer.js

```js
  ...
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
  ...
```

# alterando o saga

- modules/cart/sagas.js

```js
  ...
  import { ..., select, ... } from 'redux-saga/effects';

  ...

  import { formatPrice } from '../../../util/format';
  import { addToCartSuccess, updateAmount } from './actions';

  function* addToCart({ id }) {
    const productExists = yield select(state =>
      state.cart.find(p => p.id === id)
    );

    if (productExists) {

      const amount = productExists.amount + 1;
      yield put(updateAmount(id, amount));

    } else {
      const response = yield call(api.get, `/products/${id}`);

      const data = {
        ...response.data,
        amount: 1,
        priceFormatted: formatPrice(response.data.price),
      };

      yield put(addToCartSuccess(data));
    }
  }
  ...
```
