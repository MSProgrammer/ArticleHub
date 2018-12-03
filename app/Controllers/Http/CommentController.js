'use strict'
const Comment=use('App/Models/Comment');
const Article=use('App/Models/Article');


class CommentController {
    async index({request}){
      console.log(request);
      return Comment.all;
    }

    async addComment({ request , params }){
     const { body } =request.all();
     const { id } = params;
     const article=await Article.find(id);
     return article.comments().create({
       body,
     });
    }
}

module.exports = CommentController
