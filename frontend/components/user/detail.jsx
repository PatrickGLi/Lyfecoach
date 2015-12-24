var React = require('react'),
    UserStore = require('../../stores/user_store'),
    FollowStore = require('../../stores/follow_store'),
    NavTransitions = require('../../util/nav_transitions'),
    ReactConstants = require('../../constants/react_constants'),
    UserDetailActions = require('../../actions/user_detail_actions'),
    IndexItem = require('../event/indexItem');

var UserDetail = React.createClass({
  getInitialState: function() {
    return ({ user: this.getUserFromStore(),
              followers: this.getFollowsFromStore()
            });
  },

  getUserFromStore: function() {
    return UserStore.fetch();
  },

  getFollowsFromStore: function() {
    return FollowStore.fetch();
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.showUserDetail);
    this.followListener = FollowStore.addListener(this.resetFollowers);
    UserDetailActions.fetchSingleUser(parseInt(this.props.params.userId));
    UserDetailActions.fetchFollowers(parseInt(this.props.params.userId));
    NavTransitions.addNavTransitions();
  },

  componentWillUnmount: function() {
    this.userListener.remove();
    this.followListener.remove();
    NavTransitions.removeNavTransitions();
    EventStore.clearEvents();
    UserStore.clearUser();
  },

  showUserDetail: function() {
    this.setState({ user: this.getUserFromStore() });
  },

  resetFollowers: function() {
    this.setState({ followers: this.getFollowsFromStore() });
  },

  showEventDetail: function(event) {
    this.props.history.pushState(null, "api/users/" + event.organizer_id + "/events/" + event.id);
  },

  follow: function() {
    UserDetailActions.addFollow(parseInt(this.props.params.userId));
  },

  unfollow: function() {
    var followerId = FollowStore.fetchId();
    UserDetailActions.removeFollow(followerId);
  },

  render: function() {
    var host = this.state.user;

    if (host === null) {
      return (<div className="user-detail-filler"></div>);
    } else {
      var showEventDetail = this.showEventDetail;
      var events = host.events.map(function(event) {
        var bindedClick = showEventDetail.bind(null, event);
        return (<IndexItem key={event.id}
                           onClick={bindedClick}
                           event={event}/>
               );
      });
    }

    var followButton;

    if (FollowStore.find(ReactConstants.CURRENT_USER)) {
      followButton = <button className="btn btn-primary follow-button"
                             onClick={this.unfollow}>unfollow</button>;
    } else {
      followButton = <button className="btn btn-primary follow-button"
                             onClick={this.follow}>follow</button>;
    }

    var followers = this.state.followers.length

    var host_image = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_200,w_300" + host.url;

    return (
      <div className="row user-info">
        <div className="col-md-6 col-md-offset-1">
          <div className="host-head"><h2>{host.host_name}</h2></div>
          Followers: {followers}
          <div className="row">
            <div className="host-head col-md-6">
              <div><img src={host_image}/></div>
            </div>
            <div className="follow col-md-offset-1 col-md-3">
              {followButton}
              <h4>follow and stay posted on all my events.</h4>
            </div>
          </div>

          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h4 className="panel-title">
                    About
                </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                {host.description}
              </div>
            </div>
          </div>

          <h3>All Events by {host.host_name}</h3>
          <div>{events}</div>
        </div>

        {this.props.children}

      </div>
    );
  }

});

module.exports = UserDetail;
