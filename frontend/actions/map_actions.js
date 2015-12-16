var ApiUtil = require('../util/api_util');

MapActions = {
  fetchEvents: function() {
    ApiUtil.fetchEvents();
  }
}

module.exports = MapActions;
