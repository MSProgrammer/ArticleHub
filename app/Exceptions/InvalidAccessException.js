'use strict'

const {
  LogicalException
} = require('@adonisjs/generic-exceptions')

class InvalidAccessException extends LogicalException {
  handle({
    response
  }) {
    console.log('invalid');
    return response.redirect('/');
  }
}

module.exports = InvalidAccessException
