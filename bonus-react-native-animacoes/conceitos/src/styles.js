import styled from 'styled-components/native';

import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;
export const Ball = styled(Animated.View)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: red;
`;
