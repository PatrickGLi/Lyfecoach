var React = require('react'),
    FollowStore = require('../../stores/follow_store');

var UserFollowers = React.createClass({
  getInitialState: function() {
    return({ followers: FollowStore.fetch() });
  },

  componentDidMount: function() {
    this.followListener = FollowStore.addListener(this.resetFollowers);
  },

  componentWillUnmount: function() {
    this.followListener.remove();
  },

  resetFollowers: function() {
    this.setState({ followers: FollowStore.fetch() });
  },

  goToUser: function(follower) {
    this.props.history.pushState(null, "api/users/" + follower.follower.id);
  },

  render: function() {
    var goToUser = this.goToUser;
    var followers = this.state.followers.map(function(follower){
      var bindedClick = goToUser.bind(null, follower);
      return <li onClick={bindedClick}
                 key={follower.follower.id}>
                 {follower.  follower.host_name}
             </li>
    });

    var title;
    if (followers.length === 0){
      title = <div className="no-followers"><h3>no followers yet.</h3></div>;
    } else {
      title = <div></div>;
    }

    return(
      <div className="follower-container col-md-4">
        <h2>Followers</h2>
        {title}
        <ul>
          {followers}
        </ul>
      </div>
    );
  }

});

module.exports = UserFollowers;
