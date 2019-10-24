import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

const stock = [
  {
    id: '1',
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
  {
    id: '2',
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
  {
    id: '3',
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
  {
    id: '5',
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
  {
    id: '6',
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
  {
    id: '4',
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
];

export default class Cart extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header navigation={navigation} />
        <AllCartView>
          <ListCart
            data={stock}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ProductView>
                <HeaderProductView>
                  <ProductImage
                    source={{
                      uri:
                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                    }}
                  />
                  <ProductDescriptionView>
                    <ProductTitle>
                      Tênis de Caminhada Leve Confortável
                    </ProductTitle>
                    <ProductPriceText>179,90</ProductPriceText>
                  </ProductDescriptionView>
                </HeaderProductView>
                <QuantiPriceView>
                  {/* L Arr */}
                  <QuantView>
                    <IconButton>
                      <Icon
                        name="keyboard-arrow-left"
                        size={28}
                        color="#7159C1"
                      />
                    </IconButton>
                    <QuantBlockView>
                      <QuantText>3</QuantText>
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
