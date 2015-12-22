var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    EventConstants = require('../constants/event_constants');
    EventStore = new Store(AppDispatcher);

var _events = [];

EventStore.all = function() {
  return _events.slice(0);
};

EventStore.find = function(id) {
  for (var i = 0; i < _events.length; i++) {
    if (_events[i].id === id) {
      return _events[i];
    }
  }
};

var resetEvents = function(events){
  _events = events;

  EventStore.__emitChange();
};

var resetSingleEvent = function(event) {
  for (var i = 0; i < _events.length; i++) {
    if (_events[i].id === event.id) {
      _events[i] = event;
    }
  }

  EventStore.__emitChange();
};

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
