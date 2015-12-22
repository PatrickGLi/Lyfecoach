var AppDispatcher = require('../dispatcher/dispatcher');
    EventConstants = require('../constants/event_constants'),
    NavBarConstants = require('../constants/nav_bar_constants'),
    UserConstants = require('../constants/user_constants');

ApiActions = {
  receiveAll: function(events){
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    });
  },

  receiveSingleEvent: function(event) {
    AppDispatcher.dispatch({
      actionType: EventConstants.SINGLE_EVENT_RECEIVED,
      event: event
    });
  },

  getCurrentUser: function(currentUser) {
    AppDispatcher.dispatch({
      actionType: NavBarConstants.GET_CURRENT_USER,
      currentUser: currentUser
    });
  },

  getSingleUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.GET_SINGLE_USER,
      user: user
    });
  }
}

module.exports = ApiActions;
