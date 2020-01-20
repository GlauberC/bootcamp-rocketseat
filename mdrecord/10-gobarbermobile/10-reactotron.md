```sh
sudo yarn add redux redux-saga react-redux 
sudo yarn add reactotron-react-native reactotron-redux reactotron-redux-saga
```
- src/config/ReactotronConfig.js
```js
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.19' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();
  console.tron = tron;
  tron.clear();
}

```