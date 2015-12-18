var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchEvents: function(){
    $.getJSON('api/events', {}, function(eventsData) {
      ApiActions.receiveAll(eventsData);
    });
  },

  fetchSingleEvent: function(eventId) {
    $.getJSON('api/events/' + eventId, {}, function(eventData) {
      ApiActions.receiveSingleEvent(eventData);
    });
  },

  createEvent: function(eventData) {
    $.ajax({
      method: "post",
      url: "api/events",
      data: { event: eventData },
      success: function() {
        debugger
      },
      error: function(errorData) {
        debugger
      }
    });
  },

  getCurrentUser: function(currentUserId) {
    $.getJSON('api/users/' + currentUserId, {}, function(currentUser) {
      ApiActions.getCurrentUser(currentUser);
    });
  }
};

module.exports = ApiUtil;
