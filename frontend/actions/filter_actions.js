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

  updatePrice: function(priceData) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_PRICE,
      price: priceData
    })
  }
};

module.exports = FilterActions;
