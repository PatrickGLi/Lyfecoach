var ApiUtil = require('../../util/api_util');

DropdownActions = {
  signOut: function() {
    ApiUtil.signOut();
  }
};

module.exports = DropdownActions;
