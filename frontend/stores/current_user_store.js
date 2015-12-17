var Store = require('flux/utils').Store;
    AppDispatcher = require('../dispatcher/dispatcher'),
    NavBarActions = require('../constants/nav_bar_constants');

var CurrentUserStore = new Store(AppDispatcher);

var _currentUser = null;

CurrentUserStore.fetch = function() {
  return _currentUser;
};

CurrentUserStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case NavBarActions.GET_CURRENT_USER:
      resetCurrentUser(payload.currentUser);
    break;
  }

  CurrentUserStore.__emitChange();
};

var resetCurrentUser = function(currentUser) {
  _currentUser = null;
  _currentUser = currentUser;
};

module.exports = CurrentUserStore;
