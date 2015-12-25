var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var _follows = [];
var _followId = null;

var FollowStore = new Store(AppDispatcher);

FollowStore.fetch = function() {
  return _follows.slice(0);
};

FollowStore.fetchId = function() {
  return _followId;
};

FollowStore.find = function(userId) {
  for (var i = 0; i < _follows.length; i++) {
    if (userId === _follows[i].follower_id) {
      _followId = _follows[i].id;
      return _follows[i];
      break;
    }
  }

  return null;
};

FollowStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case UserConstants.FOLLOWERS_RECEIVED:
      resetFollowers(payload.followers);
      break;
    case UserConstants.ADD_FOLLOW:
      addFollow(payload.follow);
      break;
    case UserConstants.REMOVE_FOLLOW:
      removeFollow(payload.unfollow);
      break;
  }
};

var resetFollowers = function(followers) {
  _follows = followers;

  FollowStore.__emitChange();
};

var addFollow = function(followData) {
  _follows.push(followData);

  FollowStore.__emitChange();
};

var removeFollow = function(unfollowData) {
  var index = -1;
  for (var i = 0; i < _follows.length; i++) {
    if (_follows[i].id === unfollowData.id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    _follows.splice(index, 1);
  }

  FollowStore.__emitChange();
};


module.exports = FollowStore;
