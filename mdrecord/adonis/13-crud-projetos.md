# criando rotas project
- start/routes.js
```js
...
Route.group(() => {
  Route.post('files', 'FileController.store')
  Route.resource('projects', 'ProjectController').apiOnly() // cria todas as rotas possiveis
}).middleware(['auth'])
```

- ProjectController.js
```js
'use strict'

const Project = use('App/Models/Project')

class ProjectController {
  async index ({ request, response, view }) {
    const projects = await Project.query()
      .with('user')
      .fetch()

    return projects
  }

  async store ({ request, auth }) {
    const data = request.only(['title', 'description'])

    const project = await Project.create({ ...data, user_id: auth.user.id })

    return project
  }

  async show ({ params }) {
    const project = await Project.findOrFail(params.id)

    await project.load('user')
    await project.load('tasks')

    return project
  }

  async update ({ params, request }) {
    const project = await Project.findOrFail(params.id)
    const data = request.only(['title', 'description'])

    project.merge(data)

    await project.save()
    return project
  }

  async destroy ({ params }) {
    const project = await Project.findOrFail(params.id)

    await project.delete()
  }
}

module.exports = ProjectController

```

