import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import Header from '../../components/Header';
import { formatPrice } from '../../util/format';

import {
  Container,
  AllCartView,
  ListCart,
  ProductView,
  HeaderProductView,
  ProductImage,
  ProductDescriptionView,
  ProductTitle,
  ProductPriceText,
  QuantiPriceView,
  QuantView,
  QuantBlockView,
  QuantText,
  IconButton,
  ProductTotal,
  TotalView,
  TotalLabel,
  TotalCartText,
  FinalizarButton,
  FinalizarButtonText,
} from './styles';

class Cart extends Component {
  render() {
    const { updateAmountRequest } = this.props;
    function increment(product) {
      updateAmountRequest(product.id, product.amount + 1);
    }
    function decrement(product) {
      updateAmountRequest(product.id, product.amount - 1);
    }

    const { removeFromCart } = this.props;
    const { navigation, cart, total } = this.props;
    return (
      <Container>
        <Header navigation={navigation} />
        <AllCartView>
          <ListCart
            data={cart}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ProductView>
                <HeaderProductView>
                  <ProductImage
                    source={{
                      uri: item.image,
                    }}
                  />
                  <ProductDescriptionView>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPriceText>{item.priceFormatted}</ProductPriceText>
                  </ProductDescriptionView>
                  <IconButton onPress={() => removeFromCart(item.id)}>
                    <Icon name="close" size={28} color="#7159C1" />
                  </IconButton>
                </HeaderProductView>
                <QuantiPriceView>
                  <QuantView>
                    <IconButton onPress={() => decrement(item)}>
                      <Icon
                        name="keyboard-arrow-left"
                        size={28}
                        color="#7159C1"
                      />
                    </IconButton>
                    <QuantBlockView>
                      <QuantText>{item.amount}</QuantText>
                    </QuantBlockView>
                    <IconButton onPress={() => increment(item)}>
                      <Icon
                        name="keyboard-arrow-right"
                        size={28}
                        color="#7159C1"
                      />
                    </IconButton>
                  </QuantView>
                  <ProductTotal>{item.subTotal}</ProductTotal>
                </QuantiPriceView>
              </ProductView>
            )}
          />
          <TotalView>
            <TotalLabel>Total</TotalLabel>
            <TotalCartText>{total}</TotalCartText>
          </TotalView>
          <FinalizarButton>
            <FinalizarButtonText>Finalizar Pedido</FinalizarButtonText>
          </FinalizarButton>
        </AllCartView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
