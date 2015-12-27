var React = require('react'),
    EventStore = require('../../stores/event_store'),
    UserStore = require('../../stores/user_store'),
    FollowerActions = require('../../actions/follower_actions')

var UserFollows = React.createClass({
  getInitialState: function() {
    return ({
      followings: []
    });
  },

  componentDidMount: function() {
    this.eventListener = EventStore.addListener(this._onChange);
    FollowerActions.fetchFollowing(parseInt(this.props.params.userId));
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
  },

  _onChange: function() {
    var followings = UserStore.fetchFollowing();
    var followingEvents = EventStore.fetchFollowingEvents();
    var result  = [];

    for (var following in followings) {
      var subresult = {};

      subresult["following"] = followings[following];
      subresult["events"] = followingEvents[following];

      result.push(subresult);

      this.setState({ followings: result });
    }
  },

  goToUserPage: function(e) {
    this.props.history.pushState(null, "api/users/" + e.following.id);
  },

  goToEventPage: function(e) {
    this.props.history.pushState(null, "api/users/" + e.organizer_id + "/events/" + e.id);
  },

  render: function() {
    var that = this;
    var followings;
    if (this.state.followings.length === 0) {
      followings = <div className="no-follows"><h3>you have not followed anyone yet.</h3></div>
    } else {
      followings = this.state.followings.map(function(following) {
      var followingEvents = following.events.map(function(event) {
        var eventImage = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_100,w_100/" + event.url;

        return (
          <li key={event.id} className="event-item">
            <img onClick={that.goToEventPage.bind(that,event)} src={eventImage}></img>
            <div className="event-title-price" onClick={that.goToEventPage.bind(that,event)} >
              {event.title}, ${event.price}
            </div>
          </li>
        );
      });

      var hostImage = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_200,w_200/" + following.following.url;

      return(
        <div key={following.following.id} className="single-following">

          <div className="row">
            <div className="col-md-2 col-md-offset-1">
              <div>
                <h3>{following.following.host_name}</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 col-md-offset-1">
              <img onClick={that.goToUserPage.bind(that,following)}
                   src={hostImage}>
              </img>
            </div>
            <div className="col-md-8 col-sm-offset-1">
              <h4><b>Upcoming Events:</b></h4>
              <ul className="following-list">{followingEvents}</ul>
            </div>
          </div>

        </div>
      );
    });
    }



    return (
      <div className="follows-container">
      <h2 className="follows-title">Your Follows</h2>
      {followings}
    </div>
    );

  }
});

module.exports = UserFollows;
