var ApiUtil = require('../util/api_util');

var EventDetailActions = {
  fetchSingleEvent: function(eventId) {
    ApiUtil.fetchSingleEvent(eventId);
  }
};

module.exports = EventDetailActions;
