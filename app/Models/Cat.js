'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cat extends Model {
  articles() {
    return this.hasMany('App/Models/Article')
  }
}

module.exports = Cat
