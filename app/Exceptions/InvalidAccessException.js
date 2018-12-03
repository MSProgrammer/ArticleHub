'use strict'

const {
  LogicalException
} = require('@adonisjs/generic-exceptions')

class InvalidAccessException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(error, {
    response
  }) {

    // return response.status(403).json({
    //   error:'Invalid Permission To resource',
    // });
    console.log('invalid');
    return response.redirect('/');

  }
}

module.exports = InvalidAccessException
