var Store = require('flux/utils').Store;
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _user = null;
var _followings = {};

UserStore.fetch = function() {
  return _user;
};

UserStore.clearUser = function() {
  _user = null;
};

UserStore.fetchFollowing = function() {
  return Object.assign({}, _followings);
};

UserStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case UserConstants.GET_SINGLE_USER:
      resetSingleUser(payload.user);
      break;
    case UserConstants.EDIT_PROFILE:
      resetSingleUser(payload.profile);
      break;
    case UserConstants.FOLLOWINGS_RECEIVED:
      resetFollowings(payload.following)
      break;
  }
};

var resetFollowings = function(followings) {
  _followings = {};

  followings.forEach(function(following) {
    _followings[following.id] = following;
  });

  UserStore.__emitChange();
};

var resetSingleUser = function(user) {
  _user = user;
  UserStore.__emitChange();
};

module.exports = UserStore;
