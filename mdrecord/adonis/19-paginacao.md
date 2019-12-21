# Aplicando paginação ao projeto

```js
  async index ({ request }) {
    const { page } = request.get()
    const projects = await Project.query()
      .with('user')
      // .fetch()
      .paginate(page)

    return projects
  }
```
