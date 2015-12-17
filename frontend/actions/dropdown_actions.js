var AppDispatcher = require('../dispatcher/dispatcher'),
    DropdownConstants = require('../constants/dropdown_constants');

DropdownActions = {
  showDropdown: function(dropdownLabel) {
    AppDispatcher.dispatch({
      actionType: DropdownConstants.DROPDOWN_CLICKED,
      dropdownLabel: dropdownLabel
    });
  }
}

module.exports = DropdownActions;
