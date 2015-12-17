var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    DropdownConstants = require('../constants/dropdown_constants');

var shownDropdown = null;

var DropdownStore = new Store(AppDispatcher);

DropdownStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case DropdownConstants.DROPDOWN_CLICKED:
      updateDropdown(payload.dropdown);
      break;
  }

  DropdownStore.__emitChange();
};

DropdownStore.fetch = function() {
  return shownDropdown;
}

function updateDropdown (buttonClicked) {
  debugger
  if (shownDropdown === buttonClicked) {
    shownDropdown = null;
  } else {
    shownDropdown = buttonClicked;
  }
}

module.exports = DropdownStore;
