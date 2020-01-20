- https://reactnavigation.org/docs/en/getting-started.html
```sh
yarn add react-navigation
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context
```

- src/routes.js
```js
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
```

- src/index.js
```js
import React from 'react';
import { View } from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return <Routes />;
}

```