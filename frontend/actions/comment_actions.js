var ApiUtil = require('../util/api_util');

var CommentActions = {
  addComment: function(commentData) {
    ApiUtil.addComment(commentData);
  }
};

module.exports = CommentActions;
