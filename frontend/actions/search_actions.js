var ApiUtil = require('../util/api_util');

SearchActions = {
  fetchEvents: function() {
    ApiUtil.fetchEvents();
  },
}

module.exports = SearchActions;
