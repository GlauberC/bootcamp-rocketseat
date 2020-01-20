```sh
yarn add react-native-linear-gradient
yarn add styled-components
```

- src/components/Background/index.js
```js
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#7159c1', '#ab59c1'],
})`
  flex: 1;
`;
```

- src/pages/SignIn/index.js
```js
import React from 'react';
import { Text } from 'react-native';

// import { Container } from './styles';
import Background from '../../components/Background';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>
    </Background>
  );
}

```