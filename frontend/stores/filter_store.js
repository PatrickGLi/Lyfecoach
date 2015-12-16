var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants');

var shownFilter = null;

var FilterStore = new Store(AppDispatcher);

FilterStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FilterConstants.FILTER_CLICKED:
      updateFilter(payload.button);
      break;
  }
};

FilterStore.fetch = function() {
  return shownFilter;
}

function updateFilter (buttonClicked) {
  if (shownFilter === buttonClicked) {
    shownFilter = null;
  } else {
    shownFilter = buttonClicked;
  }

  FilterStore.__emitChange();
}

module.exports = FilterStore;
