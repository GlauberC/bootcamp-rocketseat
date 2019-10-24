import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  ListProduct,
  ProductView,
  ProdutoImage,
  ProdutoTitle,
  ProdutoPrice,
  AdicionarButton,
  CartIcon,
  CardNumber,
  AdicionarTitle,
} from './styles';

import Header from '../../components/Header';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    // console.tron.log(response);
    this.setState({ products: response.data });
  }

  render() {
    const { navigation } = this.props;
    const { products } = this.state;
    return (
      <Container>
        <Header navigation={navigation} />
        <ListProduct
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductView>
              <ProdutoImage source={{ uri: item.image }} />
              <ProdutoTitle>{item.title}</ProdutoTitle>
              <ProdutoPrice>{item.price}</ProdutoPrice>
              <AdicionarButton>
                <CartIcon>
                  <Icon name="shopping-cart" size={16} color="#fff" />
                  <CardNumber>1</CardNumber>
                </CartIcon>
                <AdicionarTitle>Adicionar</AdicionarTitle>
              </AdicionarButton>
            </ProductView>
          )}
        />
      </Container>
    );
  }
}
