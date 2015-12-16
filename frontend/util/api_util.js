var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchEvents: function(){
    $.getJSON('api/events', {}, function(eventData) {
      ApiActions.receiveAll(eventData);
    });
  }
}

module.exports = ApiUtil;
