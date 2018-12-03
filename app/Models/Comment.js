'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
    articles(){
     return this.belongsToMany('App/Models/Article')
   }
  
}



module.exports = Comment
