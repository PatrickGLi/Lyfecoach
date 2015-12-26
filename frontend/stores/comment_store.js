var Store = require('flux/utils').Store,
    UserConstants = require('../constants/user_constants'),
    AppDispatcher = require('../dispatcher/dispatcher');

var CommentStore = new Store(AppDispatcher);


var _comments = [];

CommentStore.fetch = function() {
  return _comments.slice(0);
};

CommentStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.COMMENTS_RECEIVED:
      resetComments(payload.comments);
      break;
  }
};

var resetComments = function(comments) {
  debugger
  _comments = comments

  CommentStore.__emitChange();
}



module.exports = CommentStore;
