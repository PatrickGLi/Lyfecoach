var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    EventConstants = require('../constants/event_constants');
    EventStore = new Store(AppDispatcher);

var _events = [];
var _title_events = [];
var _followingEvents = {};

EventStore.all = function() {
  return _events.slice(0);
};

EventStore.fetch = function() {
  return _events[0];
};

EventStore.topTitleEvents = function() {
  return _title_events.slice(0,5);
};

EventStore.fetchFollowingEvents = function() {
  return Object.assign({}, _followingEvents);
};

var resetEvents = function(events) {
  _events = events;

  EventStore.__emitChange();
};

var resetTitleEvents = function(events) {
  _title_events = events;

  EventStore.__emitChange();
};

var resetSingleEvent = function(event) {
  _events = [event];

  EventStore.__emitChange();
};


var deleteSingleEvent = function(deletedEvent) {
  var index = -1;
  for (var i = 0; i < _events.length; i++) {
    if (_events[i].id === deletedEvent.id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    _events.splice(index, 1);
  }

  EventStore.__emitChange();
};


EventStore.clearEvents = function() {
  _events = [];
  _title_events = [];
}

EventStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case EventConstants.EVENTS_RECEIVED:
      resetEvents(payload.events);
      break;
    case EventConstants.SINGLE_EVENT_RECEIVED:
      resetSingleEvent(payload.event);
      break;
    case EventConstants.FOLLOWING_EVENTS_RECEIVED:
      resetFollowingEvents(payload.followingEvents);
      break;
    case EventConstants.DELETE_EVENT:
      deleteSingleEvent(payload.deleted);
      break;
    case EventConstants.TITLE_RECEIVED:
      resetTitleEvents(payload.events);
      break;
  }
};

var resetFollowingEvents = function(followingEvents) {
  _followingEvents = {};

  followingEvents.forEach(function(followingEvent) {
    if (typeof _followingEvents[followingEvent.organizer_id] === "undefined") {
      _followingEvents[followingEvent.organizer_id] = [followingEvent];
    } else {
      _followingEvents[followingEvent.organizer_id].push(followingEvent);
    }
  });

  EventStore.__emitChange();
};



module.exports = EventStore
