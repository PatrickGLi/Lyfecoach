var ApiActions = require('../actions/api_actions'),
    FormActions = require('../actions/form_actions'),
    FilterParamsStore = require('../stores/filter_params_store');

var ApiUtil = {
  fetchEvents: function(){
    var filter = FilterParamsStore.params();

    console.log(filter);
    $.get('api/events', filter, function(eventsData) {
      ApiActions.receiveAll(eventsData);
    });
  },

  fetchPopularEvents: function() {
    $.get('api/events', { popular: 8 }, function(eventsData) {
      ApiActions.receiveAll(eventsData);
    });
  },

  fetchSingleEvent: function(eventId) {
    $.get('api/events/' + eventId, {}, function(eventData) {
      ApiActions.receiveSingleEvent(eventData);
    });
  },

  createEvent: function(eventData) {
    $.ajax({
      method: "post",
      url: "api/events",
      data: { event: eventData },
      success: function(successData) {
        console.log("IT WORKED");
        debugger
      },
      error: function(errorData) {
        FormActions.formError(errorData);
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
