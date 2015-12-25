var React = require('react'),
    FollowStore = require('../../stores/follow_store'),
    FollowerActions = require('../../actions/follower_actions')

var UserFollows = React.createClass({
  getInitialState: function() {
    return ({
      followings: FollowStore.fetchFollowing()
    });
  },

  componentDidMount: function() {
    this.followListener = FollowStore.addListener(this._onChange);
    FollowerActions.fetchFollowing(parseInt(this.props.params.userId));
  },

  componentWillUnmount: function() {
    this.followListener.remove();
  },

  _onChange: function() {
    debugger
  },

  render: function() {

    return <div>Follows page</div>;
  }
});

module.exports = UserFollows;
