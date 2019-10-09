# criando action updateAmount
- modules/cart/actions.js
```js
  export function updateAmount(id, amount){
    return { 
      type: '@cart/UPDATE_AMOUNT'
      id,
      amount
    }
  }
```

# alterando na page Cart
- pages/Cart/index.js
```js
  ...
  function Cart({ cart, removeFromCart, updateAmount}){

    function increment(product){
      updateAmount(product.id, product.amount+1)
    }
    function decrement(product){
      updateAmount(product.id, product.amount-1)
    }

    // Chamar as funções nos botões
  ...
```

# criando mais um case no reducer Cart
- modules/cart/reducer.js
```js
  ...
  case '@cart/UPDATE_AMOUNT': {
    if (action.amount <= 0 ){
      return state
    }
    return produce(state, draft => {
      const productIndex = draft.findIndex(p => p.id === action.id)
      if (productIndex >= 0){
        draft[productIndex].amount = Number(action.amount)
      }
    })
  }
  ...
```