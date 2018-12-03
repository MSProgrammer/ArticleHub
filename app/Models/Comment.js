'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
  
  article() {
    return this.belongsTo('App/Models/Article').pivotTable('ArticleComment')
  }
}

module.exports = Comment
