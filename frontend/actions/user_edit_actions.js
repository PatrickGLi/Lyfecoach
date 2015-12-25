var ApiUtil = require('../util/api_util');

UserEditActions = {
  editProfile: function(profileData, callback) {
    ApiUtil.editProfile(profileData, callback);
  }
};

module.exports = UserEditActions;
