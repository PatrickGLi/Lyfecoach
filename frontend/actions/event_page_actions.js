var ApiUtil = require('../util/api_util');

EventPageActions = {
  fetchEvents: function() {
    ApiUtil.fetchEvents();
  },
}

module.exports = EventPageActions;
