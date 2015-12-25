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

  render: function() {
    var followings = this.state.followings.map(function(following) {

      var followingEvents = following.events.map(function(event) {
        return (<li key={event.id}>{event.title} {event.location}</li>);
      });

      return(
        <div key={following.following.id}>
        <div>{following.following.host_name}</div>
          <ul>{followingEvents}</ul>
        </div>
      );
    });

    return <div>{followings}</div>;
  }
});

module.exports = UserFollows;
