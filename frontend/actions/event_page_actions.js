var ApiUtil = require('../util/api_util');

var EventPageActions = {
  fetchEvents: function() {
    ApiUtil.fetchEvents();
  }
}

module.exports = EventPageActions;
