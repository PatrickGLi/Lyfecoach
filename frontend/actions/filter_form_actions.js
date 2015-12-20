var AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants');

FilterFormActions = {
  fetchFilteredEvents: function(filterData) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_FROM_SEARCH,
      filters: filterData
    });
  }
};

module.exports = FilterFormActions;
