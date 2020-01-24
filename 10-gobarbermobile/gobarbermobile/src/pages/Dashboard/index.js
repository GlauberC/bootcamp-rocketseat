import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import api from '../../services/api';

import { Container, Title, List } from './styles';
import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');
    setAppointments(response.data.appointments);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

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
      Alert.alert('Cancelamento!', 'O agendamento foi cancelado');
    } catch (err) {
      // nada
    }
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

export default withNavigationFocus(Dashboard);
