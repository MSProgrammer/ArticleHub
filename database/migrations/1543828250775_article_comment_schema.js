'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleCommentSchema extends Schema {
  up () {
    this.create('article_comment', (table) => {
      table.integer('article_id');
      table.integer('comment_id');
    })
  }

  down () {
    this.drop('article_comment')
  }
}

module.exports = ArticleCommentSchema
