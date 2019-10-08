# criando actions em cart reducer
- store/modules/cart/actions.js
```js
  export function addToCart(product){
    return {
      type: '@cart/ADD',
      product,
    }
  }

  export function removeFromCart(id){
    return {
      type: '@cart/REMOVE'
      id
    }
  }
```
# importando e configurando na Home
- pages/Home/index.js
```js
  import {bindActionCreators} from 'redux'
  ...
  import * as CartActions from '../../store/modules/cart/actions'
  ...

  handleAddProduct = product => {
    const { addToCart } = this.props;
    
    addToCart(product)
  }
  ...
  const mapDispatchToProps = dispatch => 
    bindActionCreators(CartActions, dispatch)

  export default connect(null,mapDispatchToProps)(Home)
```

# importando e configurando no Cart
- pages/Cart/index.js
```js
  import {bindActionCreators} from 'redux'
  ...
  import * as CartActions from '../../store/modules/cart/actions'
  ...
  function Cart({cart, removeFromCart}){
    <button type="button" onClick={() => removeFromCart(product.id)}>
    </button>
  ...
  }
  const mapDispatchToProps = dispatch => 
    bindActionCreators(CartActions, dispatch)

  export default connect(mapStateToProps, mapDispatchToProps)(Cart)
```