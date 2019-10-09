# Separando o updateAmount
- modules/cart/actions.js
```js
  ...
  export function updateAmountRequest(id, amount) {
    return {
      type: '@cart/UPDATE_AMOUNT_REQUEST',
      id,
      amount,
    };
  }
  export function updateAmountSuccess(id, amount) {
    return {
      type: '@cart/UPDATE_AMOUNT_SUCCESS',
      id,
      amount,
    };
  }
```
- alterando no pages/cart/index.js para updateAmountRequest


# alterando reducer
- modules/cart/reducer.js
```js
  ...
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      // if (action.amount <= 0) {
      //   return state;
      // }
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }
    ...
```
# alterando no saga
- modules/cart/sagas.js
```js
  ...

  import { addToCartSuccess, updateAmountSuccess } from './actions';

  ...

  function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const stock = yield call(api.get, `stock/${id}`);

    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
      toast.error('Quantidade solicitada fora de estoque');
      return;
    }

    yield put(updateAmountSuccess(id, amount));
  }

  export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  ]);
```

