'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('forgotpasswords', 'ForgotPasswordController.store')
Route.put('forgotpasswords', 'ForgotPasswordController.update')
Route.post('files', 'FileController.store')
