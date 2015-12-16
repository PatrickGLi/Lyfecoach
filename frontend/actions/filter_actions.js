var AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants');

FilterActions = {
  showFilter: function(button) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.FILTER_CLICKED,
      button: button
    });
  }
}

module.exports = FilterActions;
