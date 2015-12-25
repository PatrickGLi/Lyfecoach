var ApiUtil = require('../util/api_util');

var FollowerActions = {
  fetchFollowing: function(followerId) {
    ApiUtil.fetchFollowing(followerId);
  }
};

module.exports = FollowerActions;
