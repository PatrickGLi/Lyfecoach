var ApiUtil = require('../../util/api_util');

NavBarActions = {
  fetchCurrentUser: function(currentUserId) {
    ApiUtil.getCurrentUser(currentUserId);
  },
};

module.exports = NavBarActions;
