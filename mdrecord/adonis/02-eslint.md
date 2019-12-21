# Instalando o eslint

```sh
  npm install -D eslint
```

# iniciando eslint

```sh
  npx eslint --init
```

# configurando eslint

- .eslintrc.json

```js
module.exports = {
  extends: "standard",
  globals: {
    use: true
  }
};
```

# configurando prettier

- ./.prettierrc

```js
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false
}

```
