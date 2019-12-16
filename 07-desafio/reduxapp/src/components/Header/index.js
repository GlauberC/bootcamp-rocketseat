import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import {
  Container,
  LogoImg,
  IconButton,
  NumberCartText,
  LogoBtn,
} from './styles';
import logo from '../../assets/img/logo.png';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <LogoBtn onPress={() => navigation.navigate('Home')}>
        <LogoImg source={logo} />
      </LogoBtn>
      <IconButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={24} color="#fff" />
        <NumberCartText>{cartSize}</NumberCartText>
      </IconButton>
    </Container>
  );
}
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
