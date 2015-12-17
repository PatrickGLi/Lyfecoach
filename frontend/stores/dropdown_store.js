var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    DropdownConstants = require('../constants/dropdown_constants');

var shownDropdown = null;

var DropdownStore = new Store(AppDispatcher);

DropdownStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case DropdownConstants.Dropdown_CLICKED:
      updateDropdown(payload.button);
      break;
  }

  DropdownStore.__emitChange();
};

DropdownStore.fetch = function() {
  return shownDropdown;
}

function updateDropdown (buttonClicked) {
  if (shownDropdown === buttonClicked) {
    shownDropdown = null;
  } else {
    shownDropdown = buttonClicked;
  }
}

module.exports = DropdownStore;
