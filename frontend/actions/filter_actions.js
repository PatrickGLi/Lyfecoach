var ApiUtil = require('../util/api_util'),
    AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants');

var FilterActions = {
  updateLocation: function(locationData) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_LOCATION,
      location: locationData
    });
  },

  fetchEvents: function() {
    ApiUtil.fetchEvents();
  }
};

module.exports = FilterActions;
