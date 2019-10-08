# configurando reactotron no react
- config/ReactotronConfig.js
```sh
  yarn add reactotron-react-js reactotron-redux
```
```js
  import Reactotron from 'reactotron-react-js'
  import {reactotronRedux} from 'reactotron-redux'

  if(process.env.NODE_ENV === 'development'){
    const tron = Reactotron.configure()
      .use(reactotronRedux()) 
      .connect();
    tron.clear();
    console.tron = tron;
  }
```

# importar no store
- store/index.js
```js
  ...
  const enhancer = process.env.NODE_ENV === 'development'
    ? console.tron.createEnhancer()
    : null;

  const store = createStore(rootReducer, enhancer);
  ...

```

# importar em app.js
```js
  ...
  import './config/reactotronConfig'
  ...
```

# criar subscription e stapshot no reactotron
- state - subscription - add - subscription
- state - snapshot - add - snapshot