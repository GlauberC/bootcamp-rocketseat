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
