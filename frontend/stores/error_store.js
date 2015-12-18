var AppDispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store;

    var ErrorStore = new Store(AppDispatcher);

    var _error = null;

    ErrorStore.fetch = function () {
      return _error;
    };

    ErrorStore.__onDispatch = function (payload) {
      switch (payload.actionType) {
        case "FORM_ERROR":
          handleError(payload.data);
          break;
      }

      ErrorStore.__emitChange();
    };

    function handleError (data) {
      _error = data;
    }

    ErrorStore.resetError = function() {
      return _error = null;
    }


    module.exports = ErrorStore;
