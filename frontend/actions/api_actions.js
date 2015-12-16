var AppDispatcher = require('../dispatcher/dispatcher');
    EventConstants = require('../constants/event_constants');

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
  }
}

module.exports = ApiActions;
