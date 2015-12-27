var React = require('react'),
    UserStore = require('../../stores/user_store'),
    FollowStore = require('../../stores/follow_store'),
    CommentStore = require('../../stores/comment_store'),
    NavTransitions = require('../../util/nav_transitions'),
    ReactConstants = require('../../constants/react_constants'),
    UserDetailActions = require('../../actions/user_detail_actions'),
    Comments = require('../comment/comment'),
    IndexItem = require('../event/indexItem');

var UserDetail = React.createClass({
  getInitialState: function() {
    return ({ user: this.getUserFromStore(),
              followers: this.getFollowsFromStore(),
              comments: this.getCommentsFromStore()
            });
  },

  getUserFromStore: function() {
    return UserStore.fetch();
  },

  getFollowsFromStore: function() {
    return FollowStore.fetch();
  },

  getCommentsFromStore: function() {
    return CommentStore.fetch();
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.showUserDetail);
    this.followListener = FollowStore.addListener(this.resetFollowers);
    this.commentListener = CommentStore.addListener(this.resetComments);
    UserDetailActions.fetchSingleUser(parseInt(this.props.params.userId));
    UserDetailActions.fetchFollowers(parseInt(this.props.params.userId));
    UserDetailActions.fetchComments(parseInt(this.props.params.userId));
    NavTransitions.addNavTransitions();
  },

  componentWillReceiveProps: function(newProps) {
    UserDetailActions.fetchSingleUser(parseInt(newProps.params.userId));
  },

  componentWillUnmount: function() {
    this.userListener.remove();
    this.followListener.remove();
    this.commentListener.remove();
    NavTransitions.removeNavTransitions();
    EventStore.clearEvents();
    UserStore.clearUser();
    CommentStore.clearComments();
  },

  showUserDetail: function() {
    this.setState({ user: this.getUserFromStore() });
  },

  resetFollowers: function() {
    this.setState({ followers: this.getFollowsFromStore() });
  },

  resetComments: function() {
    this.setState({ comments: this.getCommentsFromStore() });
  },

  showEventDetail: function(event) {
    this.props.history.pushState(null, "api/users/" + event.organizer_id + "/events/" + event.id);
  },

  follow: function() {
    UserDetailActions.addFollow(parseInt(this.props.params.userId));
  },

  unfollow: function() {
    var unfollowData = {
      organizerId: parseInt(this.props.params.userId),
      followerId: FollowStore.fetchId()
    }

    UserDetailActions.removeFollow(unfollowData);
  },

  editProfile: function() {
    this.props.history.pushState(null, "api/users/" + ReactConstants.CURRENT_USER + "/edit");
  },

  render: function() {
    var host = this.state.user;

    var events;
    if (host === null) {
      return (<div className="user-detail-filler"></div>);
    } else if (host.events.length === 0){
      events = <div><h4>you have no events yet.</h4></div>;
    } else {
      var showEventDetail = this.showEventDetail;
      events = host.events.map(function(event) {
        var bindedClick = showEventDetail.bind(null, event);
        var editedEvent = event;
            editedEvent.organizer = { host_name: host.host_name };
        return (<IndexItem key={event.id}
                           onClick={bindedClick}
                           event={editedEvent}/>
               );
      });
    }

    var followButton;
    if (ReactConstants.CURRENT_USER === -1) {
      followButton = <div></div>;
    } else if (parseInt(this.props.params.userId) === ReactConstants.CURRENT_USER) {
      followButton =
        <button className="btn btn-primary user-button"
                     onClick={this.editProfile}>edit profile</button>;
    } else if (FollowStore.find(ReactConstants.CURRENT_USER)) {
      followButton = <button className="btn btn-primary user-button"
                                  onClick={this.unfollow}>unfollow</button>;
    } else {
      followButton = <div><button className="btn btn-primary user-button"
                             onClick={this.follow}>follow</button>;
                          <h4>follow and stay posted on all my events.</h4></div>;

    }

    var followers;
     if (this.state.followers.length === 0) {
       followers = "no followers yet";
     } else if (this.state.followers.length === 1) {
       followers = "1 follower";
     } else {
       followers = this.state.followers.length.toString() + " followers";
     }

    var backgroundImage = { backgroundImage: "url(http://res.cloudinary.com/dlqjek68b/image/upload/c_fill" + host.background_url + ")" };
    var hostImage = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_200,w_300" + host.url;

    return (
      <div className="user-info">
        <div className="cover-image">
          <div className="host-background" style={backgroundImage}></div>
        </div>
        <div className="row user-info">
          <div className="col-md-6 col-md-offset-1">
            <div className="host-head"><h2>{host.host_name}</h2></div>
            <div><h4>{followers}</h4></div>
            <div className="row">
              <div className="host-head">
                <div><img src={hostImage}/></div>
              </div>
              <div className="follow">
                {followButton}
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
            <div className="col-md-12 user-event-index">{events}</div>
            <Comments userId={this.props.params.userId} comments={this.state.comments}/>
          </div>

          {this.props.children}

        </div>
      </div>


    );
  }

});

module.exports = UserDetail;
