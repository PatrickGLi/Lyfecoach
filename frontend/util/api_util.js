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

  getCurrentUser: function(currentUserId) {
    $.getJSON('api/users/' + currentUserId, {}, function(currentUser) {
      ApiActions.getCurrentUser(currentUser);
    });
  },

  signOut: function() {
    $.ajax({
      method: 'delete',
      url: 'session',
      success: function() {
        debugger
      }
    });
  }
}

module.exports = ApiUtil;
