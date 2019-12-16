import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    // console.tron.log(response);
    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: '@cart/ADD',
      product,
    });
  };

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
              <ProdutoPrice>{item.priceFormatted}</ProdutoPrice>
              <AdicionarButton onPress={() => this.handleAddProduct(item)}>
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

export default connect()(Home);
