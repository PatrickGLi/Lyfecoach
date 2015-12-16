var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    EventConstants = require('../constants/event_constants');
    EventStore = new Store(AppDispatcher);

var _events = {};

EventStore.all = function() {
  var events = [];
  for (var id in _events) {
    events.push(_events[id]);
  }
  return events;
};

var resetEvents = function(events){
  _events = {};
  events.forEach(function(event) {
    _events[event.id] = event;
  });
};

EventStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case EventConstants.EVENTS_RECEIVED:
      resetEvents(payload.events);
      break;
  }

  EventStore.__emitChange();
};

module.exports = EventStore
