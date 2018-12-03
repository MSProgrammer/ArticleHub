'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Article extends Model {
  cat() {
    return this.belongsTo('App/Models/Cat');
  }
  user() {
    return this.belongsTo('App/Models/User')
  }
  tags() {
    return this.hasMany('App/Models/Tag')
  }
  comments() {
    return this.hasMany('App/Models/Comment')
  }
  tags(){
    return this.belongsToMany('App/Models/Tag')
  }
  comments(){
    return this.belongsToMany('App/Models/Comment')
  }
}

module.exports = Article
