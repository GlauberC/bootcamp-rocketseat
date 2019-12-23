# editor config
- botão direito para gerar o editor config
- end_of_line = lf
- Duas ultimas opções true

# eslint
```sh
  yarn add eslint -D
  yarn eslint --init
```
- terceira opção
- javascript modules
- react
- browser
- use popular style
- airbnb
- javascript
- Remover package lock json

```sh
  yarn
```
- .eslintrc.js
```js
module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
```

# Pretier
```sh
  sudo yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```
- pretierrc
```js
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

# Reactotron

```sh
  yarn add reactotron-react-native
```
- src/config/ReactotronConfig.js
```js
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.19' })
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
```
- app.js
```js
  ...
  import './config/ReactotronConfig';
  ...
```

# Configurando o React Hooks
- Plugin eslint
```sh
  yarn add eslint-plugin-react-hooks -D
``` 
- eslintrc.js
```js
  ...
  plugins: ["react", "prettier", 'react-hooks'],
  ...

    rules: {
      ...

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
```