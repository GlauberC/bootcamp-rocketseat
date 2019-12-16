# configurando na Home

- pages/Home/index.js

```js
  ...
  import { connect } from 'react-redux'
  ...

  class Home extends Component{
    ...
  }

  export default connect()(Home)
```

- configurando função de adicionar ao carrinho

```js
handleAddProdcut = product => {
  const { dispatch } = this.props;

  dispatch({
    type: "@cart/ADD",
    product
  });
};
```

# Configurando reducer

- modules/cart/reducer.js

```js
export default function cart(state = [], action) {
  switch (action.type) {
    case "@cart/ADD":
      return [...state, action.product];

    default:
      return state;
  }
}
```

# acessando reducer na header

- Header/index.js

```js
  ...
  import {connect} from 'react-redux'
  ...

  function Header({cartSize}){
    ...
  }


  export default connect(state => ({
    cartSize: state.cart.length
  }))(Header)
```
