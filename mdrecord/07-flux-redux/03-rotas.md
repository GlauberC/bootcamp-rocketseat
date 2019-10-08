# pages
- src/pages/Cart/index.js
- src/pages/Home/index.js
  
# routes.js
- src/routes.js
```sh
  yarn add react-router-dom
```
```js
  import React from 'react'
  import {Switch, Route} from 'react-router-dom'
  import Home from './pages/Home'
  import Cart from './pages/Cart'

  export default function Routes(){
    return(
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    )
  }
```

# App.js
```js
  import React from 'react'
  import {BrowserRouter} from 'react-router-dom'
  import Routes from './routes'

  function App(){
    return(
      <BrowserRouter>
        <Header/> // Ele deve ter acesso as rotas
        <Routes/>
      </BrowserRouter>
    )
  }
```


