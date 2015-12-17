var AppDispatcher = require('../dispatcher/dispatcher'),
    DropdownConstants = require('../constants/dropdown_constants');

DropdownActions = {
  showDropdown: function(dropdown) {
    AppDispatcher.dispatch({
      actionType: DropdownConstants.DROPDOWN_CLICKED,
      dropdown: dropdown
    });
  }
}

module.exports = DropdownActions;
