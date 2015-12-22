var ApiUtil = require('../util/api_util');

var UserDetailActions = {
  fetchSingleUser: function(userId) {
    ApiUtil.fetchSingleUser(userId);
  }
};

module.exports = UserDetailActions;
