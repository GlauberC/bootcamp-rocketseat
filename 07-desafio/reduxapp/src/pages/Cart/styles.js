import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const AllCartView = styled.View`
  background: #ffffff;
  margin: 20px;
  padding: 15px;
  border-radius: 4px;
  elevation: 4;
  flex: 1;
`;
export const ListCart = styled.FlatList``;
export const ProductView = styled.View`
  margin-bottom: 20px;
`;
export const HeaderProductView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;
export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ProductDescriptionView = styled.View`
  margin-left: 15px;
  max-width: 200px;
`;
export const ProductTitle = styled.Text`
  font-size: 18px;
  color: #333333;
`;
export const ProductPriceText = styled.Text`
  font-size: 18px;
  color: #333333;
  font-weight: bold;
`;
export const QuantiPriceView = styled.View`
  flex-direction: row;
  background: #eeeeee;
  justify-content: space-between;
  padding: 10px;
`;
export const QuantView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const QuantBlockView = styled.View`
  background: #fff;
  width: 40px;
  height: 25px;
  padding: 5px;
`;
export const QuantText = styled.Text`
  color: #000000;
  font-size: 14px;
`;

export const IconButton = styled.TouchableOpacity``;

export const ProductTotal = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;
export const TotalView = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
export const TotalLabel = styled.Text`
  color: #999999;
  font-size: 16px;
`;
export const TotalCartText = styled.Text`
  font-size: 30px;
  color: #000000;
  font-weight: bold;
`;
export const FinalizarButton = styled.TouchableOpacity`
  background: #7159c1;
  padding: 15px 30px;
  elevation: 6;
  border-radius: 4px;
`;
export const FinalizarButtonText = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
`;
