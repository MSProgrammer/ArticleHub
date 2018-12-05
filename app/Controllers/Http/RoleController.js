'use strict'

const Role = use('App/Models/Role')

class RoleController {
  async index({ auth }) {
    return await Role.all();
  }

}
// todo: make methods of create and modify all Roles
module.exports = RoleController
