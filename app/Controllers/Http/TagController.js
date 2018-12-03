'use strict'
const Tag = use('App/Models/Tag');

class TagController {

  async index({ request }) {
    console.log(request);
    return Tag.all();
  }

  async create({ request }) {
    const { title } = request.all();
    const tag = await new Tag();
     tag.fill({
      title,
    });
    await tag.save();
    return tag;
  }
}

module.exports = TagController
