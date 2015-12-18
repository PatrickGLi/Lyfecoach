var AppDispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store;

    var ErrorStore = new Store(AppDispatcher);

    var _error = false;

    ErrorStore.fetch = function () {
      return _error;
    };

    ErrorStore.__onDispatch = function (payload) {
      switch (payload.actionType) {
        case "FORM_ERROR":
          handleError(payload.errorData);
          break;
      }
    };

    function handleError (errorData) {
      _error = true;
      ErrorStore.__emitChange();
    }

    ErrorStore.resetError = function() {
      return _error = false;
    }


    module.exports = ErrorStore;
