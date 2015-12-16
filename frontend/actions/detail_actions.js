var ApiUtil = require('../util/api_util');

var DetailActions = {
  fetchSingleEvent: function(eventId) {
    ApiUtil.fetchSingleEvent(eventId);
  }
};

module.exports = DetailActions;
