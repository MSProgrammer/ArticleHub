'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CatSchema extends Schema {
  up () {
    this.create('cats', (table) => {
      table.increments()
      table.string('title')
      table.timestamps()
    })
  }

  down () {
    this.drop('cats')
  }
}

module.exports = CatSchema
