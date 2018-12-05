'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Role extends Model {
  // access via Role.permissions().attach(...)
  permissions() {
    return this.belongsToMany('App/Models/Permission');
  }
}

module.exports = Role
