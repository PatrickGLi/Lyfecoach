var ApiActions = require('../actions/api_actions'),
    FormActions = require('../actions/form_actions'),
    FilterParamsStore = require('../stores/filter_params_store');


var ApiUtil = {
  fetchEvents: function(){
    var filter = FilterParamsStore.params();

    console.log(filter);
    $.get('api/events', filter, function(eventsData) {
      ApiActions.receiveAll(eventsData);
    });
  },

  fetchPopularEvents: function() {
    $.get('api/events', { popular: 8 }, function(eventsData) {
      ApiActions.receiveAll(eventsData);
    });
  },

  fetchSingleEvent: function(eventId) {
    $.get('api/events/' + eventId, {}, function(eventData) {
      ApiActions.receiveSingleEvent(eventData);
    });
  },

  createEvent: function(eventData, callback) {
    $.ajax({
      method: "post",
      url: "api/events",
      data: { event: eventData },
      success: function(successData) {
        ApiActions.receiveSingleEvent(successData);
        callback && callback(successData.organizer_id, successData.id);
      },
      error: function(errorData) {
        FormActions.formError(errorData);
      }
    });
  },

  getCurrentUser: function(currentUserId) {
    $.get('api/users/' + currentUserId, {}, function(currentUser) {
      ApiActions.getCurrentUser(currentUser);
    });
  },

  fetchSingleUser: function(userId) {
    $.get('api/users/' + userId, {}, function(user) {
      ApiActions.getSingleUser(user);
    });
  },

  fetchFollowers: function(organizerId) {
    $.get('api/follows', { organizer: organizerId}, function (followers) {
      ApiActions.receiveFollowers(followers);
    });
  },

  addFollow: function(followData) {
    $.post('api/follows', { follow: followData }, function(successData) {
      ApiActions.addFollow(successData);
    });
  },

  removeFollow: function(followerId) {
    $.ajax({
      method: "delete",
      url: "api/follows/" + followerId,
      success: function(successData) {
        ApiActions.removeFollow(successData);
      }
    });
  },

  editProfile: function(profileData, callback) {
    adjustedProfileData = {
      url: profileData.url,
      background_url: profileData.backgroundUrl,
      description: profileData.description
    }

    $.ajax({
      method: "put",
      url: "api/users/" + profileData.id,
      data: { user: adjustedProfileData },
      success: function(successData) {
        ApiActions.editProfile(successData);
        callback();
      }
    });
  }
};

module.exports = ApiUtil;
