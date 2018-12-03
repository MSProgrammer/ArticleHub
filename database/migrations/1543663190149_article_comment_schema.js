'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleCommentSchema extends Schema {
  up () {
    this.create('article_comments', (table) => {
      table.increments()
      table.integer('article_id').unsigned().references('id').inTable('articles')
      table.integer('comment_id').unsigned().references('id').inTable('comments')
      table.timestamps()
    })
  }

  down () {
    this.drop('article_comments')
  }
}

module.exports = ArticleCommentSchema
