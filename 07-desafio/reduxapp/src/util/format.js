import 'intl';
import 'intl/locale-data/jsonp/pt';

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
