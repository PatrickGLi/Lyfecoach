var ApiUtil = require('../util/api_util'),
    ReactConstants = require('../constants/react_constants');

var UserDetailActions = {
  fetchSingleUser: function(userId) {
    ApiUtil.fetchSingleUser(userId);
  },

  fetchFollowers: function(organizerId) {
    ApiUtil.fetchFollowers(organizerId);
  },

  addFollow: function(organizerId) {
    var followData = {
      follower_id: ReactConstants.CURRENT_USER,
      organizer_id: organizerId
    }

    ApiUtil.addFollow(followData);
  },

  removeFollow: function(unfollowData) {
    ApiUtil.removeFollow(unfollowData);
  }
};

module.exports = UserDetailActions;
