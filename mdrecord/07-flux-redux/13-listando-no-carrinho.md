# listando no Cart
- pages/Cart/index.js
```js
  ...
  import {connect} from 'react-redux'
  ...

  function Cart({cart}){
    ...
  }

  const mapStateToProps = state => ({
    cart: state.cart
  })
  export default connect(mapStateToProps)(Cart)

```

# configurando o reducer cart
- modules/cart/reducer.js
```js
  ...
    return [...state, {
      ...action.product,
      amount: 1
    }]
  ...
```