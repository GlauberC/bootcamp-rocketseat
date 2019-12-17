# criando / configurando models
```sh
  adonis make:model Project -m -c
  adonis make:model Task -m -c
```
- XXXXXXXX_project_schema.js
```js
...
up () {
    this.create('projects', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.timestamps()
    })
...
```
- XXXXXXXX_task_schema.js
```js
...
up () {
    this.create('tasks', table => {
      table.increments()
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title').notNullable()
      table.text('description')
      table.timestamp('due_date')
      table.timestamps()
    })
...
```
```sh
  adonis migration:run
```