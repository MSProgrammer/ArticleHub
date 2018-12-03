'use strict'
const Cat = use('App/Models/Cat');

class CatController {

  async index({ request }) {
    console.log(request);
    return Cat.all();
  }

  async create({ request }) {
    const { title } = request.all();
    const cat = new Cat();
    cat.fill({
      title,
    });
    await cat.save();
    return cat;
  }
}

module.exports = CatController
