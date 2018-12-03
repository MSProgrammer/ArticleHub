'use strict'
const Comment=use('App/Models/Comment')

class CommentController {
    async index({request}){
      console.log(request);
      return Comment.all;
    }
}

module.exports = CommentController
