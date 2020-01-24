```sh
sudo yarn add date-fns@next
```

- src/pages/Dashboard/index.js
```js
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { Container, Title, List } from './styles';
import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments');
      setAppointments(response.data.appointments);
    }
    loadAppointments();
  }, []);

  async function handleCancel(id) {
    try {
      const response = await api.delete(`appointments/${id}`);
      setAppointments(
        appointments.map(appointment =>
          appointment.id === id
            ? { ...appointment, canceled_at: response.data.canceled_at }
            : appointment
        )
      );
    } catch (err) {}
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
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
- src/components/Appointment/index.js
```js
import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);
  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar.url,
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
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

  opacity: ${props => (props.past ? 0.6 : 1)};
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