# instalando 
```sh
yarn add reactotron-react-js
```
- config/ReactotronConfig.js
```js
  import Reactotron from "reactotron-react-js";

  if (process.env.NODE_ENV === "development") {
    const tron = Reactotron.configure().connect();

  tron.clear();

  console.tron = tron;
}

```

- App.js
```js
  ...
  import "./config/ReactotronConfig";
  ...
```