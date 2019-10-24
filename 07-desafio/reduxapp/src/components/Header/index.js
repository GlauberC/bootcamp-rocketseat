import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  LogoImg,
  IconView,
  NumberCartText,
  LogoBtn,
} from './styles';
import logo from '../../assets/img/logo.png';

export default function Header({ navigation }) {
  return (
    <Container>
      <LogoBtn onPress={() => navigation.navigate('Home')}>
        <LogoImg source={logo} />
      </LogoBtn>
      <IconView onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={24} color="#fff" />
        <NumberCartText>3</NumberCartText>
      </IconView>
    </Container>
  );
}
