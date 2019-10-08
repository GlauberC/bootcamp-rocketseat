# Função do redux
- Controlar estados globais
  - Tem mais de um dono 
  - Estado manipulado por mais de um componente
  - As ações causam efeitos colaterais nos dados
- Exemplos: Carrinho de compras, dados do usuário, player de música, etc

# Nomenclatura
- Action
  ```js
  {
    type: "ADD_TO_CART",
    product: {...}
  }
  ```
- Store
  - Reducer

# Principios
- Toda action deve possuir um "type"
- O estado do Redux é o único ponto de verdade
  - A partir do momento que usa redux para uma determinada lógica, toda a lógica deve ser tratada com o redux
- Não podemos mutar o estado do Redux sem uma action
- As actions e reducers são funções puras, ou seja, não lidam com side-effects assíncronos
  - Redux Saga
- Qualquer lógica síncrona para regras de negócio deve ficar no reducer e nunca na action
- NEM TODA APLICAÇÃO PRECISA DE REDUX, inicie sem ele e sinta a necessidade depois

# Exemplo: 
- Action
  ```js
  {
    type: "ADD_TO_CART",
    product: {
      id: 1,
      title: "Novo produto",
      price: 129.9
    }
  }
  ```
  - Cart Reducer
  ```js
  [
    {
      id: 1,
      title: "Novo produto",
      price: 129.9,
      amount: 1,
      priceFormatted: "R$129,90"
    }
  ]
  ```
- Action
  ```js
  {
    type: "Update_Amount",
    porduct: 1,
    amount: 5,
  }
  ```
- Cart Reducer
    ```js
    [
      {
        id: 1,
        title: "Novo produto",
        price: 129.9,
        amount: 5,
        priceFormatted: "R$129.90"
      }
    ]
    ```


