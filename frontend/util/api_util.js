var ApiActions = require('../actions/api_actions'),
    FormActions = require('../actions/form_actions'),
    FilterParamsStore = require('../stores/filter_params_store');


var ApiUtil = {
  fetchEvents: function(){
    var filter = FilterParamsStore.params();

    $.get('api/events', filter, function(eventsData) {
      ApiActions.receiveAll(eventsData);
    });
  },

  fetchComments: function(userId) {
    $.get('api/users/' + userId + "/comments", {}, function(commentsData) {
      ApiActions.receiveComments(commentsData);
    });
  },

  addComment: function(commentData) {
    $.ajax({
      method: "post",
      url: 'api/users/' + commentData.user_id + "/comments",
      data: { comment: commentData },
      success: function(successData) {
        ApiActions.addComment(successData);
      }
    });
  },

  getCurrentTitle: function(currentTitle) {
    $.get('api/events', { autocomplete: currentTitle }, function(eventsData) {
      ApiActions.getCurrentTitle(eventsData);
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

  deleteSingleEvent: function(eventId, callback) {
    $.ajax({
      method: "delete",
      url: "api/events/" + eventId,
      success: function(successData) {
        callback();
        ApiActions.deleteEvent(successData);
      }
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

  fetchFollowing: function(followerId) {
    $.get('api/users/' + followerId, { fetchingUser: true }, function(followings) {
      ApiActions.getFollowings(followings);
      $.get('api/users/' + followerId, { fetchingEvents: true }, function (followingEvents) {
        ApiActions.getFollowingEvents(followingEvents);
      });
    });
  },

  fetchFollowers: function(organizerId) {
    $.get('api/users/' + organizerId + '/follows', {}, function (followers) {
      ApiActions.receiveFollowers(followers);
    });
  },

  addFollow: function(followData) {
    $.post('api/users/' + followData.organizer_id + "/follows", { follow: followData }, function(successData) {
      ApiActions.addFollow(successData);
    });
  },

  removeFollow: function(unfollowData) {
    $.ajax({
      method: "delete",
      url: "api/users/" + unfollowData.organizerId + "/follows/" + unfollowData.followerId,
      success: function(successData) {
        ApiActions.removeFollow(successData);
      }
    });
  },

  editProfile: function(profileData, callback) {
    var adjustedProfileData = {
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
