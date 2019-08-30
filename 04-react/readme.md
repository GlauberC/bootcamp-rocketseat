# Configurando o ambiente sem o create-react-app
```sh
  yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
```
```sh
  yarn add react react-dom
```
### Criar/configurar babel.config.js
### Criar/configurar webpack.config.js
* Regra do babel
### Criar src/index.js
* Foi testado com uma simples arrow function que soma dois números
```sh
  yarn add babel-loader -D 
```
### Criar pasta public
```sh
 yarn add webpack-dev-server -D
```
### Configurar devServer no webpack.config.js

### Editar scripts em package.json
* build (produção)
* dev

### Criar index.html


# Iniciando React
### configurando index.js
### Criando / configurando App.js

# Adicionando CSS
```sh
  yarn add style-loader css-loader -D
```
### Configurando regra de css no webpack.config.js
### Adicionar / configurar App.css
### Importar em App.js

# Importação de arquivos
```sh
  sudo yarn add file-loader -D
```
### Adicionar nova regra de files no webpack.config.js
### Criar pasta assets
### Testando imagem

# Criando components
### Estados

# Configurar estados na forma resumida
```sh
yarn add @babel/plugin-proposal-class-properties -D
```
### Adicionar plugin em babel.config.js
# Testando estados
* <> </> para substituir as divs
* Adicionando elemento à um estado array: this.setState({ techs: [...this.state.techs, this.state.newTech] });
* Remover elemento à um estado array usando o filter: this.setState({ techs: this.state.techs.filter(t => t !== tech) });
# Testando propriedades
# Default props e Prop Types
* Propriedades padrões quando o usuário não informar as propriedades
* Prop types para fazer validação das propriedades
```sh
  yarn add prop-types
```
# Ciclo de vida do react