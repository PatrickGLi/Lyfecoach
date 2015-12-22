var ApiUtil = require('../util/api_util');

var LandingPageActions = {
  fetchPopularEvents: function() {
    ApiUtil.fetchPopularEvents();
  }  
};

module.exports = LandingPageActions;
