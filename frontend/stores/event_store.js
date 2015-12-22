var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    EventConstants = require('../constants/event_constants');
    EventStore = new Store(AppDispatcher);

var _events = [];

EventStore.all = function() {
  return _events.slice(0);
};

EventStore.fetch = function() {
  return _events[0];
};

var resetEvents = function(events){
  _events = events;

  EventStore.__emitChange();
};

var resetSingleEvent = function(event) {
  _events = [event];

  EventStore.__emitChange();
};

EventStore.clearEvents = function() {
  _events = [];
}

EventStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case EventConstants.EVENTS_RECEIVED:
      resetEvents(payload.events);
      break;
    case EventConstants.SINGLE_EVENT_RECEIVED:
      resetSingleEvent(payload.event);
      break;
  }
};



module.exports = EventStore
