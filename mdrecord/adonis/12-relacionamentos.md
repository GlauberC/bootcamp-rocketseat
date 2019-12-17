# criando / configurando relacionamentos do project
- models/Project.js
```js
...
class Project extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  tasks () {
    return this.hasMany('App/Models/Task')
  }

...
```
- models/Task.js
```js
...
class Task extends Model {
  project () {
    return this.belongsTo('App/Models/Project')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }

...
```
- models/User.js
```js
...
  projects () {
    return this.hasMany('App/Models/Project')
  }

  tasks () {
    return this.hasMany('App/Models/Task')
  }
...
```
