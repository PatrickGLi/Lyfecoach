var Store = require('flux/utils').Store,
    UserConstants = require('../constants/user_constants'),
    AppDispatcher = require('../dispatcher/dispatcher');

var CommentStore = new Store(AppDispatcher);

var _comments = [];

CommentStore.fetch = function() {
  return _comments.slice(0);
};

CommentStore.clearComments = function() {
  _comments = [];
},

CommentStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.COMMENTS_RECEIVED:
      resetComments(payload.comments);
      break;
    case UserConstants.ADD_COMMENT:
      addComment(payload.comment);
      break;
    case UserConstants.REMOVE_COMMENT:
      removeComment(payload.comment);
      break;
  }
};

var resetComments = function(comments) {
  _comments = comments;

  CommentStore.__emitChange();
};

var addComment = function(comment) {
  _comments.push(comment);

  CommentStore.__emitChange();
};

var removeComment = function(comment) {
  var index = -1;
  for (var i = 0; i < _comments.length; i++) {
    if (_comments[i].id === comment.id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    _comments.splice(index, 1);
  }

  CommentStore.__emitChange();
};



module.exports = CommentStore;
