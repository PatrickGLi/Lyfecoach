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
  },

  updateCategory: function(categoryData) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_CATEGORY,
      category: categoryData
    })
  },

  updateDate: function(dateData) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_DATE,
      date: dateData
    })
  },
};

module.exports = FilterActions;
