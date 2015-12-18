var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher');

var _filter_params = {};

var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.__onDispatch = function(payload) {

};

FilterParamsStore.params = function() {
  return _filter_params;
};

module.exports = FilterParamsStore;
