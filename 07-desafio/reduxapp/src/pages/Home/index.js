import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { Container } from './styles';

import Header from '../../components/Header';

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} />
      </Container>
    );
  }
}
