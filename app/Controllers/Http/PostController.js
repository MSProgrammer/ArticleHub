'use strict'

const Article = use('App/Models/Article');
const Permit = use('App/Common/Authorization');
const Tag = use('App/Models/Tag');
const Cat = use('App/Models/Cat');


class PostController {

  async index({ auth }) {
    const user = await auth.getUser();
    if (user.permission_mode !== 1) {
      return await Article.query().where('is_permit', '=', true).fetch();
    }
    return await Article.all();
  }

  async create({ auth, request }) {
    const user =await auth.getUser();
    const {
      title,
      body,
      comment,
      cat_id,
      tag_title
    } = request.all();
    // console.log('article will be :', title, body, tag_title);
    const post = new Article();
    post.fill({
      title,
      body,
      comment,
      cat_id
    });
  
   
    await user.articles().save(post);
   
    //await articles().save(tgAR);


    return post;
  }

  // TODO: get comment from request .. and update the table.
  async articleComment({
    auth,
    request,
    params
  }) {
    const {
      comment
    } = request.all();
    const user = await auth.getUser();
    const {
      id
    } = params;
    const post = await Article.find(id);
    post.merge({
      comment,
    });
    await user.articles().save(post);
    return post;
  }

  async edit({
    auth,
    request,
    params
  }) {
    const user = await auth.getUser();
    const {
      title,
      body,
      is_permit
    } = request.all();
    const {
      id
    } = params;
    //console.log('article will be :',title,body,comment);
    const post = await Article.find(id);
    post.merge({
      is_permit,
      title,
      body
    });
    await user.articles().save(post);
    return post;
  }

}

module.exports = PostController
