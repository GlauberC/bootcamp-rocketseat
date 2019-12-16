import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Header from '../../components/Header';

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
  handleRemoveProduct = id => {
    const { dispatch } = this.props;
    dispatch({
      type: '@cart/REMOVE',
      id,
    });
  };

  render() {
    const { navigation, cart } = this.props;
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
                  <IconButton onPress={() => this.handleRemoveProduct(item.id)}>
                    <Icon name="close" size={28} color="#7159C1" />
                  </IconButton>
                </HeaderProductView>
                <QuantiPriceView>
                  <QuantView>
                    <IconButton>
                      <Icon
                        name="keyboard-arrow-left"
                        size={28}
                        color="#7159C1"
                      />
                    </IconButton>
                    <QuantBlockView>
                      <QuantText>{item.amount}</QuantText>
                    </QuantBlockView>
                    <IconButton>
                      <Icon
                        name="keyboard-arrow-right"
                        size={28}
                        color="#7159C1"
                      />
                    </IconButton>
                  </QuantView>
                  <ProductTotal>539,70</ProductTotal>
                </QuantiPriceView>
              </ProductView>
            )}
          />
          <TotalView>
            <TotalLabel>Total</TotalLabel>
            <TotalCartText>1619,10</TotalCartText>
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
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
