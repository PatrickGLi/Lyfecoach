var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    EventConstants = require('../constants/event_constants');

var _events = [];

var EventStore = new Store(AppDispatcher);

EventStore.all = function() {
  return _events.slice(0);
};

var resetEvents = function(events){
  _events = events;
  EventStore.__emitChange();
};

EventStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case EventConstants.EVENTS_RECEIVED:
      resetEvents(payload.events);
      break;
  }
};

module.exports = EventStore
