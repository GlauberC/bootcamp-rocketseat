- src/pages/New/Confirm/index.js
```js
import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../../components/Background';

import api from '../../../services/api';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ navigation }) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });
    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatars/50/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar o agendamento',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={28} color="#fff" />
    </TouchableOpacity>
  ),
});

```
- src/pages/New/Confirm/styles.js
```js
import styled from 'styled-components/native';
import Button from '../../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 30px;

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const Time = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;

```