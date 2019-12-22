# criando transaction

- (TUDO OU NADA) Verifica se todas as ações foram feitas com sucesso, caso contrário ele irá fazer um rollback
- Controllers/UserController.js

```js
"use strict";

const Database = use("Database");
const User = use("App/Models/User");

class UserController {
  async store({ request }) {
    const data = request.only(["username", "email", "password"]);

    const trx = await Database.beginTransaction();
    const addresses = request.input("addresses");

    const user = await User.create(data, trx);

    await user.addresses().createMany(addresses, trx);

    await trx.commit();

    return user;
  }
}

module.exports = UserController;
```
