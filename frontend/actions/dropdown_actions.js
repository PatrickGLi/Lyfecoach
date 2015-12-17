var AppDispatcher = require('../dispatcher/dispatcher'),
    DropdownConstants = require('../constants/dropdown_constants');

DropdownActions = {
  showDropdown: function(button) {
    AppDispatcher.dispatch({
      actionType: DropdownConstants.Dropdown_CLICKED,
      button: button
    });
  }
}

module.exports = DropdownActions;
