var ApiUtil = require('../util/api_util');

MapActions = {
  fetchEvents: function() {
    ApiUtil.fetchEvents();
  },

  updateLocation: function(locationData) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_LOCATION,
      location: locationData
    });
  }
}

module.exports = MapActions;
