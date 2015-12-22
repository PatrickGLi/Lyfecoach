var Store = require('flux/utils').Store;
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);

var _user = null;

UserStore.fetch = function() {
  return _user;
};

UserStore.clearUser = function() {
  _user = null;
}

UserStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case UserConstants.GET_SINGLE_USER:
      resetSingleUser(payload.user);
      break;
  }
};

var resetSingleUser = function(user) {
  _user = user;
  UserStore.__emitChange();
};

module.exports = UserStore;
