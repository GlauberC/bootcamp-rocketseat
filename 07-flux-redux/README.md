# Configuração do Json Server
```sh
  yarn global add json-server
```
- Criação do arquivo server.json
- Configuração services/api.js
- iniciar o json-server
```sh
  json-server server.json -p 3333
```

# Configuração do redux
```sh
  yarn add redux react-redux
```
- Criar arquivo store/index.js
- Importar no app

# Criar primeiro reducer
- criar store/modules/cart/reducer.js
- criar store/modules/rootReducer
- importar o rootReducer no store/index.js

# Conectar o componente com o estado do redux e disparar uma ação
- importar connect do react-redux
- exportar o component desejado com o connect()(CLASSNAME)
- ao conectar o dispatch poderá ser acessado nas props
- toda action será parecida. No reducer:
  - switch(action.type)
  - case 'ACAO'
  - return [...state, action.product];
  - default:
  - return state;
- O switch é responsável para ouvir a ação desejada (todos os reducer ouvem então é preciso dele)
- Caso o reducer não seja o desejado para aquela ação ele retornará o stado do jeito que está

# Receber as informações em outro component
- importar o connect
- exportar o component desejado com o connect(state => ({ Nodedavariavel: state.NomedoReducer}))(CLASSNAME)

# Configurar o reactotron
```sh
  yarn add reactotron-react-js reactotron-redux
```
- configurar config/reactotronConfig.js
- adicionar excessão do no console no eslintrc.js
- configuração do enhancer no store/index.js
- importar o reactotron no app.js
- No reactotron:
  - é possível ver cada ação executada
  - é possível seguir um estado na opção state
  - é possível criar um snapshot contendo as informações anteriores do estado

# Adicionando o immer
- Programa que auxilia no trabalho com estados imutáveis
- Ele cria um rascunho que pode ser usado com multabilidade e então associa com estados imutáveis
```sh
  yarn add immer
```

# Boas práticas
- Separar as actions em modules/cart/actions.js
- importar nos componentes
- utilizar o bindActionCreators para simplificar a sintaxe
  - importar o bindActionCreators do redux
  - criar o mapDispatchToProps no final do arquivo
  ```js
    const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

    export default connect(
      null,
      mapDispatchToProps
    )(Home);
  ```
  - Na hora de usar basta fazer:
  ```js
      const { addToCart } = this.props;
      addToCart(product);
  ```

  # Trabalhando com o redux saga
  ```sh
    yarn add redux-saga
  ```
  - criar store/modules/cart/sagas.js
  - criar function* para criar um generator que é mais poderoso que o async await
  - criar os reducers request and success
  - criar store/modules/rootSaga.js
  - importar e configurtar os componentes do redux saga no store/index.js
  - configurar o plugin do reactotron
    ```sh
      yarn add reactotron-redux-saga
    ```
  - importar no config/ReactotronConfig.js
  - criar sagaMonitor no store/index.js






