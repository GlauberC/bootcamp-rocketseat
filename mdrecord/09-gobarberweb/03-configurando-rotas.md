# Instalando as bibliotecas
```sh
  yarn add react-router-dom
  yarn add history
```

# Criando os componentes funcionais
- pages/
  - Dashboard/index.js
  - Profile/index.js
  - SignIn/index.js
  - SignUp/index.js

# Configurando as rotas
- src/routes/index.js
```js
import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
```
- services/history.js
```js
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default history;

```


- src/App.js

```js
import React from "react";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./services/history";

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;

```