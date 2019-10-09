import React from 'react';

import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import Routes from './routes';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="#141419" />
      <Routes />
    </>
  );
};

export default App;
