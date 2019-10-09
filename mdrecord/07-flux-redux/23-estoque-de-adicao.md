# consultar o estoque antes da adição no sagas.js
-  store/modules/cart/sagas.js
```js
  // dentro de addToCart
  ...

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    console.tron.warn('ERRO');
    return;
  }

  if (productExists) {
    // const amount = productExists.amount + 1;
  ...
```