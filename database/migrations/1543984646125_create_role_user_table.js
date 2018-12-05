'use strict'

const Schema = use('Schema')

class RoleUserTableSchema extends Schema {
  up() {
    this.create('role_user', table => {
      table.integer('role_id')
        .unsigned()
        .index()
      table.foreign('role_id')
        .references('id')
        .on('roles')
        .onDelete('cascade')
      table.integer('user_id')
        .unsigned()
        .index()
      table.foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('role_user')
  }
}

module.exports = RoleUserTableSchema
