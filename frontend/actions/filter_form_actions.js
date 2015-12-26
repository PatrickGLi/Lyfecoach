var AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants'),
    ApiUtil = require('../util/api_util');

FilterFormActions = {
  filterByTitle: function(titleData) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_TITLE,
      title: titleData
    });
  },

  autoComplete: function(currentTitle) {
    ApiUtil.getCurrentTitle(currentTitle);
  }
};

module.exports = FilterFormActions;
