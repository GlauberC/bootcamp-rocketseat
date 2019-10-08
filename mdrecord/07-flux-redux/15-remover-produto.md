# remover produto do cart
- pages/Cart/index.js
```js
  ...
  function Cart({cart, dispatch}){
    ...
    <button type="button" onClick={() => disptach({type: 'REMOVE_FROM_CART', id: product.id})}>
    </button>
  }
  ...
```

# cart reducer
- modules/cart/reducer.js
```js
  ...
  case '@cart/REMOVE':
    return produce(state, draft => {
      const productIndex = draft.findIndex(p => p.id === action.id)

      if (productIndex >= 0 ){
        draft.splice(productIndex, 1)
      }
    })
  ...
```