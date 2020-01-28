```sh
sudo yarn add eslint -D
sudo yarn eslint --init
sudo yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

### Eslint
- Remover o package.lock.json
```sh
sudo yarn
```
- Instalar extensão do ESLint no vscode

- .eslintrc.js
```js
module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }]
  }
};

```

### Prettier
- .prettierrc
```js
{
  "singleQuote": true,
  "trailingComma": "es5"
}

```

### Ajeitando todos os arquivos
```sh
sudo yarn eslint --fix src --ext .js
```

### editor config
- Instalar a extensão editorconfig no vscode
- .editorconfig
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```