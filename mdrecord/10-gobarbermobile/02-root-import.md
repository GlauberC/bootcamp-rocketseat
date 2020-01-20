```sh
sudo yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D
```
- ./babel.config.js
```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};

```
- ./.eslintrc.js
```js
...
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};

```

- ./jsconfig.json
```js
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}

```