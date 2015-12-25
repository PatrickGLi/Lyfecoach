var ApiUtil = require('../util/api_util');

var EventDetailActions = {
  fetchSingleEvent: function(eventId) {
    ApiUtil.fetchSingleEvent(eventId);
  },

  deleteEvent: function(eventId, callback) {
    ApiUtil.deleteSingleEvent(eventId, callback);
  }
};

module.exports = EventDetailActions;
