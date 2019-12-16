import { createStore } from 'redux';
import rootReducer from './modules/rootReducers';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
