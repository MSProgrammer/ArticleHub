'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleTagSchema extends Schema {
  up () {
    this.create('article_tag', (table) => {
      table.integer('article_id');
      table.integer('tag_id');
    })
  }
              
  down () {
    this.drop('article_tag')
  }
}

module.exports = ArticleTagSchema
