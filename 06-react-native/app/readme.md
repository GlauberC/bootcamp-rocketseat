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
* Adicionar os imports no MainActivity.java (https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html)
* PARA O STACK NAVIGATOR
```sh
  sudo yarn add react-navigation-stack
```

# Icones no react-native
```sh
  yarn add react-native-vector-icons
```
```sh
  react-native link react-native-vector-icons
```

# Teclado sumir
* import {Keyboard} from 'react-native'
* Keyboard.dismiss()

# loading
* ActivityIndicator from react-native
* <ActivityIndicator color="#fff" />

#asyncstorage
```sh
  sudo yarn add @react-native-community/async-storage
```

# Parametros de class em funções estaticas
* Transformar em função que recebe um objeto
* passar os parametros por argumento
