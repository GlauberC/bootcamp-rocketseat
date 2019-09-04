# Configurar editor config
* Botão direito generate editor config
* Ultimas configurações true
* end_of_line = lf

# Configurar eslint e prettier
* Deletar eslint já existente
```sh
  yarn add eslint -D
```
```sh
  yarn eslint --init
```
```sh
  yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```
* Configure .eslintrc.js
* Criar e configurar .prettierrc

# Instalar o Reactotron para debugar a aplicação
* Entrar no github, baixar e instalar ele
```sh
  yarn add reactotron-react-native
```
* Criar/Configurar config/ReactotronConfig.js
* Configurar a variável global __DEV__ no .eslint.js
* Importar o ReactotronConfig no app

# Instalar o React-navigation
```sh
  yarn add react-navigation react-native-gesture-handler react-native-reanimated
```
* PARA O STACK NAVIGATOR
```sh
  sudo yarn add react-navigation-stack
```
