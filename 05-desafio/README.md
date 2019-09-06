# Configuração inicial

### yarn create react-app NOME
### Deletar configurações padrões do eslint
### Deletar alguns arquivos básicos iniciais

# Configurar editorconfig , pretier e eslint

### editor config
* botão direito para gerar o editor config
* end_of_line = lf
* Duas ultimas opções true

### eslint
```sh
  yarn add eslint -D
```
```sh
  yarn eslint --init
```

* terceira opção
* javascript modules
* react
* browser
* use popular style
* airbnb
* javascript
* Remover package lock json
```sh
  yarn
```

### Pretier
```sh
  sudo yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

### Configurar pacotes
* .eslintrc.js

# Configurar rotas
```sh
yarn add react-router-dom
```
* Criar/configurar Main/index.js
* Criar/configurar Repository/index.js
* Criar/configurar routes.js
* Importar Routes em App

# Styled Components
```sh
  yarn add styled-components
```
### Propriedades
* Nesting
* Props
* GlobalStyle (importar em app)
* Atributos html passados no styled component

# Adicionando Icons
```sh
  yarn add react-icons
```

# Axios
```sh
yarn add axios
```
* Criar / Configurar services/api.js

# Passar parametros rotas
* Transformar string em objeto
* enviar o parametro no url
* colocar o :param no routes
* acessar com o objeto match nas props

# Duas ou mais promisses em sequencias
* Usa o promise.all para que todas sejam feitas no mesmo instante
