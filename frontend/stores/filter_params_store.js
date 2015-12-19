var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants');

var _filter_params = {};
var _filter_title = "you.";

var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function() {
  return Object.assign({}, _filter_params);
};

FilterParamsStore.getTitle = function() {
  return _filter_title;
};

FilterParamsStore.resetTitle = function() {
  _filter_title = "you.";
}

FilterParamsStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FilterConstants.UPDATE_LOCATION:
      handleLocation(payload.location);
      break;
  }
};

var handleLocation = function(locationData) {
  _filter_params.location = locationData;
  _filter_title = locationData.address.split(',')[0];
  FilterParamsStore.__emitChange();
};



module.exports = FilterParamsStore;
