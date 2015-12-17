var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    DropdownConstants = require('../constants/dropdown_constants');

var shownDropdown = null;

var DropdownStore = new Store(AppDispatcher);

DropdownStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case DropdownConstants.DROPDOWN_CLICKED:
      updateDropdown(payload.dropdownLabel);
      break;
  }

  DropdownStore.__emitChange();
};

DropdownStore.fetch = function() {
  return shownDropdown;
}

function updateDropdown (labelClicked) {
  if (shownDropdown === labelClicked) {
    shownDropdown = null;
  } else {
    shownDropdown = labelClicked;
  }
}

module.exports = DropdownStore;
