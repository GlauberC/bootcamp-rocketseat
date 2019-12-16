import React from 'react';

import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#141419" />
      <Routes />
    </Provider>
  );
};

export default App;
