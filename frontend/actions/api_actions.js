var AppDispatcher = require('../dispatcher/dispatcher');
    EventConstants = require('../constants/event_constants'),
    NavBarConstants = require('../constants/nav_bar_constants'),
    UserConstants = require('../constants/user_constants');

ApiActions = {
  receiveAll: function(events){
    AppDispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    });
  },

  receiveSingleEvent: function(event) {
    AppDispatcher.dispatch({
      actionType: EventConstants.SINGLE_EVENT_RECEIVED,
      event: event
    });
  },

  getCurrentTitle: function(eventsData) {
    AppDispatcher.dispatch({
      actionType: EventConstants.TITLE_RECEIVED,
      events: eventsData
    });
  },

  deleteEvent: function(deletedEvent) {
    AppDispatcher.dispatch({
      actionType: EventConstants.DELETE_EVENT,
      deleted: deletedEvent
    });
  },

  getCurrentUser: function(currentUser) {
    AppDispatcher.dispatch({
      actionType: NavBarConstants.GET_CURRENT_USER,
      currentUser: currentUser
    });
  },

  getSingleUser: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.GET_SINGLE_USER,
      user: user
    });
  },

  receiveFollowers: function(followers) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOLLOWERS_RECEIVED,
      followers: followers
    });
  },

  addFollow: function(follow) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ADD_FOLLOW,
      follow: follow
    });
  },

  removeFollow: function(unfollow) {
    AppDispatcher.dispatch({
      actionType: UserConstants.REMOVE_FOLLOW,
      unfollow: unfollow
    });
  },

  editProfile: function(profileData) {
    AppDispatcher.dispatch({
      actionType: UserConstants.EDIT_PROFILE,
      profile: profileData
    });
  },

  getFollowings: function(followingData) {
    AppDispatcher.dispatch({
      actionType: UserConstants.FOLLOWINGS_RECEIVED,
      following: followingData
    });
  },

  getFollowingEvents: function(followingEventsData) {
    AppDispatcher.dispatch({
      actionType: EventConstants.FOLLOWING_EVENTS_RECEIVED,
      followingEvents: followingEventsData
    });
  }
}

module.exports = ApiActions;
