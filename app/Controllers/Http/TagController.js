'use strict'
const Tag = use('App/Models/Tag');
const Article=use('App/Models/Article');


class TagController {
  
  async index({ request }) {
    console.log(request);
    return Tag.all();
  }

  async create({ params, request }) {
    const { id } = params; 
    const article = await Article.find(id);
    const { title } = request.all();
    return article.tags().create({
      title,
    });
  }

  // async create({ request }){
  //   const { title }=request.all();
  //   const tag=new Tag();
  //    tag.fill({
  //      title
  //    });
  //   await tag.save();
  //   return tag;
  // }
  
  // async create({ request, params }) {
  //   const { id } = params;
  //   const { title } = request.all();
  //   const article = await Article.find( id );
  //   debugger;
  //   const tagsID = await Tag.query().where('title','like',title).fetch();
  //   const tid=tagsID;
  //   await article.tags().attach( tid );
  //   // await articleids.tag().create(tag);
  //   return tagsID;
  // }
}

module.exports = TagController
