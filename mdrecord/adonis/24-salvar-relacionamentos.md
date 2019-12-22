# criando model

```sh
  adonis make:model UserAddress -m
```

- migrations/XXXXXXX_user_address_schema.js

```js
  class UserAddressSchema extends Schema {
  up () {
    this.create('user_addresses', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('street').notNullable()
      table.integer('number').notNullable()
      table.string('district')
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.timestamps()
    })
  }
```

```sh
  adonis migration:run
```

- Models/User.js

```js
  addresses () {
    return this.hasMany('App/Models/UserAddress')
  }
```

- app/Controllers/UserController.js

```js
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const addresses = request.input('addresses')

    const user = await User.create(data)

    await user.addresses().createMany(addresses)

    return user
  }
```

- https://adonisjs.com/docs/4.1/relationships
