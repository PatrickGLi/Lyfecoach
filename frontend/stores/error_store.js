var AppDispatcher = require('../dispatcher/dispatcher'),
    FormConstants = require('../constants/form_constants'),
    Store = require('flux/utils').Store;

    var ErrorStore = new Store(AppDispatcher);

    var _error = false;

    ErrorStore.fetch = function () {
      return _error;
    };

    ErrorStore.__onDispatch = function (payload) {
      switch (payload.actionType) {
        case FormConstants.FORM_ERROR:
          handleError(payload.data);
          break;
      }
    };

    function handleError (data) {
      _error = true;

      ErrorStore.__emitChange();
    }

    ErrorStore.resetError = function() {
      _error = false;
    }


    module.exports = ErrorStore;
