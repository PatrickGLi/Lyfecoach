var AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants');

FilterFormActions = {
  filterByTitle: function(titleData) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_TITLE,
      title: titleData
    });
  }
};

module.exports = FilterFormActions;
