'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('forgotpasswords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)
Route.put('forgotpasswords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)
Route.get('files/:id', 'FileController.show')
Route.group(() => {
  Route.post('files', 'FileController.store')
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store'], ['Project']]]))
  Route.resource('projects.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map([[['tasks.store'], ['Task']]]))
}).middleware(['auth'])
