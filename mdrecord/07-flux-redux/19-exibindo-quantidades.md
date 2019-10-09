# Alterando em Home
- pages/Home/index.jd
```js
  ...
  // colocar
      {amount[product.id] || 0}
  //ao lado do icone de carrinho de supermercado

  const mapStateToProps = state => ({
    amout: state.cart.reduce((amount, product)=> {
      amount[product.id] = product.amount
      return amount;
    }, {})
  })
  ...
  export default connect( mapStateToProps, mapDispatchToProps)(Home)
```