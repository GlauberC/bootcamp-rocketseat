# Configurar app com create react app
- eslint
- pretier
- editorconfig

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
