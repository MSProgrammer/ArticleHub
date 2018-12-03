'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.integer('cat_id').unsigned().references('id').inTable('cats')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('tag_id').unsigned().references('id').inTable('tags')
      table.string('title')
      table.text('body')
      table.text('comment')
      table.boolean('is_permit').defaultTo(false)
      table.timestamps()
    })
  }
  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
