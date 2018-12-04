'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const invalidAccess = use('App/Exceptions/InvalidAccessException');

class Administrator {
  async handle({
    auth
  }, next) {
    try {
      await auth.check();
      const user = await auth.getUser();
      if (user.permission_mode == 3) {
        throw new invalidAccess();
      }
    } catch (e) {}
    await next();
  }
}

module.exports = Administrator
