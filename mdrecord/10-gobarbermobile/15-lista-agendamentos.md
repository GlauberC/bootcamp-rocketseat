- src/pages/Dashboard/index.js
```js
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, List } from './styles';
import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

```
- src/pages/Dashboard/styles.js
```js
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;
export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

```
- src/components/Appointment/index.js
```js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
        <Info>
          <Name>Glauber Carvalho</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}

```
- src/components/Appointment/styles.js
```js
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export const Info = styled.View`
  margin-left: 15px;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;
export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

```