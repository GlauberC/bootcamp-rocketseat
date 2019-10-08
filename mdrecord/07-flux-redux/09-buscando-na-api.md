# Home
- pages/Home/index.js

# Formatação do preço: format.js
- util/format.js
```js
  export const {format: formatPrice} = new Intl.NumberFormat( 'pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
```

# Adicionar campo do price formatado no Home
- pages/Home/index.js
- Não colocar funções como a do preço formatado no render, pois sempre que o estado for alterado será feito novamente o calculo do preço
```js
  async componentDidMount(){
    const response = await api.get('products')
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))
    this.setState({ products: data})
  }
```