'use strict'

const Antl = use('Antl')

class ResetPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      // validation rules
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ResetPassword
