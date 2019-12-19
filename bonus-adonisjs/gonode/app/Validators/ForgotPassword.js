'use strict'

class ForgotPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed'
    }
  }
}

module.exports = ForgotPassword
