# rota get
- start/routes.js

```js
...
Route.get('files/:id', 'FileController.show')
```

# metodo show em FileController.js
```js
async show ({ params, response }) {
    const file = await File.findOrFail(params.id)

    return response.download(Helpers.tmpPath(`uploads/${file.file}`))
  }
```

# criando campo virtual da url
- models/File.js
```js
class File extends Model {
  static get computed () {
    return ['url']
  }

  getUrl ({ id }) {
    return `${Env.get('APP_URL')}/files/${id}`
  }
}
```