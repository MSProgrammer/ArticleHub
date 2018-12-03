'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Modratore {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({
    auth,
    response
  }, next) {
    try {
      await auth.check();
      if (user.permission_mode == 3) {
        throw new invalidAccess();
      }
    } catch (e) {}
    await next()
  }
}

module.exports = Modratore
