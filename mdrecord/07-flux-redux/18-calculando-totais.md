# calculando os totais no mapStateToProps do Cart
- pages/Cart/index.js
```js
  ...
  import {formatPrice} from '../../util/format';

  ...
  
  function Cart({cart, total, removeFromCart, updateAmount}){

  ...

    <strong>{product.subtotal}</strong>
    ...
    <strong>{total}</strong>
  ...

  const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount)
    }))
    // O reduce é utilizado qnd se tem um array e quer transformar em um único valor
    total: formatPrice(state.cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0))
  })
  ...
```