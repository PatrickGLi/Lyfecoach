var ApiUtil = require('../util/api_util'),
    SearchConstants = require('../constants/search_constants');

SearchActions = {
  fetchEvents: function() {
    ApiUtil.fetchEvents();
  },
}

module.exports = SearchActions;
