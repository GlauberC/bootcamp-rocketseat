# configurando o reducer cart
- modules/cart/reducer.js
```sh
  yarn add immer
```
```js
  import produce from 'immer'
  ...
  case '@cart/ADD':
    return produce(state, draft => {
      const productIndex = draft.findIndex(p => p.id === action.product.id)
      
      if (productIndex >= 0 ){
        draft[productIndex].amount += 1;
      }else {
        draft.push({
          ...action.product
          amount: 1,
        })
      }
    })
  ...
```