import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const ListProduct = styled.FlatList`
  flex: 1;
`;

export const ProductView = styled.View`
  background: #fff;
  width: 220px;
  margin: 15px;
  margin-bottom: auto;
  padding: 15px;
  align-items: center;
  border-radius: 12px;
  justify-content: space-between;
  height: 400px;
`;
export const ProdutoImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ProdutoTitle = styled.Text`
  font-size: 16px;
  flex-wrap: wrap;
  color: #333333;
`;
export const ProdutoPrice = styled.Text`
  align-self: flex-start;
  font-size: 21px;
  font-weight: bold;
`;
export const AdicionarButton = styled.TouchableOpacity`
  flex-direction: row;
  background: #7159c1;
  border-radius: 6px;
  width: 200px;
  height: 42px;
  justify-content: center;
  align-items: center;
`;
export const CartIcon = styled.View`
  flex-direction: row;
  flex: 1;
  background: ${darken(0.03, '#7159c1')};
  justify-content: center;
  align-items: center;
  height: 42px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
export const CardNumber = styled.Text`
  color: #fff;
`;
export const AdicionarTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  flex: 3;
  color: #fff;
  text-align: center;
`;
