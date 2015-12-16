var AppDispatcher = require('../dispatcher/dispatcher');
    EventConstants = require('../constants/event_constants');

ApiActions = {
  receiveAll: function(events){
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    });
  }
}

module.exports = ApiActions;
