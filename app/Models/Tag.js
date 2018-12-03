'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tag extends Model {
  article() {
    return this.belongsTo('App/Models/Article').pivotTable('TagArticle')
  }

}

module.exports = Tag
