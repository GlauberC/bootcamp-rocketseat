import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
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

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { navigation, amount } = this.props;
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
              <AdicionarButton onPress={() => this.handleAddProduct(item.id)}>
                <CartIcon>
                  <Icon name="shopping-cart" size={16} color="#fff" />
                  <CardNumber>{amount[item.id] || 0}</CardNumber>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
