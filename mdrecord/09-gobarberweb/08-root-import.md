# Eliminando a necessidade de ../../ dos imports
- Configurar o babel
```sh
yarn add customize-cra react-app-rewired -D
yarn add babel-plugin-root-import -D
yarn add eslint-import-resolver-babel-plugin-root-import -D
```
- ./config-overrides.js
```js
// eslint-disable-next-line import/no-extraneous-dependencies
const { addBabelPlugin, override } = require("customize-cra");

module.exports = override(
  addBabelPlugin([
    "babel-plugin-root-import",
    {
      rootPathSuffix: "src"
    }
  ])
);
```
- package.json
```json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```
- ./eslintrc.js
```js
...
rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      }
    }
  }
...
```
-./jsconfig.json
```json
  {
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}

```

-routes/Router.js
```js
import AuthLayout from "~/pages/_layouts/auth";
import DefaultLayout from "~/pages/_layouts/default";
```