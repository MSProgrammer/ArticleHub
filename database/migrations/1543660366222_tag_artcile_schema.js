'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TagArtcileSchema extends Schema {
  up () {
    this.create('tag_artciles', (table) => {
      table.increments()
      table.integer('article_id').unsigned().references('id').inTable('articles')
      table.integer('tag_id').unsigned().references('id').inTable('tags')
       table.timestamps()
    })
  }

  down () {
    this.drop('tag_artciles')
  }
}

module.exports = TagArtcileSchema
