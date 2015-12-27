var React = require('react'),
    NavBarActions = require('../actions/nav_bar_actions'),
    CurrentUserStore = require('../stores/current_user_store'),
    ReactConstants = require('../constants/react_constants');

var NavBar = React.createClass({

  getInitialState: function() {
    return ({
      currentUser: "",
    });
  },

  componentDidMount: function() {
    this.currentUserListener = CurrentUserStore.addListener(this.getCurrentUser);

    if (ReactConstants.CURRENT_USER !== -1) {
      NavBarActions.fetchCurrentUser(ReactConstants.CURRENT_USER);
    }
  },

  componentWillUnmount: function() {
    this.currentUserListener.remove();
  },

  getCurrentUser: function() {
    this.setState({ currentUser: CurrentUserStore.fetch() });
  },

  returnToHomepage: function(e) {
    this.props.history.pushState(null, '/', {});
  },

  goToEventForm: function(e) {
    e.preventDefault();
    this.props.history.pushState(null,'api/events/new');
  },

  goToProfile: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, 'api/users/' + ReactConstants.CURRENT_USER);
  },

  goToFollows: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, 'api/users/' + ReactConstants.CURRENT_USER + '/follows');
  },

  goToEventPage: function(e) {
    e.preventDefault();
    this.props.history.pushState(null, 'api/events/');
  },

  aboutLyfecoach: function(e) {
    e.preventDefault();
  },

  render: function() {
    var events;
    if (ReactConstants.CURRENT_USER !== -1) {
      events = <li onClick={this.goToEventForm}><a href="#">Be a host.</a></li>;
      user =
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{this.state.currentUser.first_name} <span className="caret"></span></a>
        <ul className="dropdown-menu" role="menu">
          <li onClick={this.goToProfile}><a href="#">your profile</a></li>
          <li className="divider"></li>
          <li onClick={this.goToFollows}><a href="#">follows</a></li>
          <li className="divider"></li>
          <li className="sign-out-li">
            <form method="post" action="session">
              <input type="hidden" name="_method" value="delete"/>
              <input name="authenticity_token"
                     type="hidden"
                     value={ReactConstants.AUTH_TOKEN} />
              <input className="sign-out-link" type="submit" value="sign out"></input>
            </form>
          </li>
        </ul>
      </li>;
    } else {
      events = <li><a href="users/new">Sign Up</a></li>;
      user = <li><a href="session/new">Sign In</a></li>;
    }

    return (
      <nav className="navbar navbar-default nav-items">
        <div className="container-fluid">
          <div onClick={this.returnToHomepage}>
            <a id="logo" className="navbar-brand logo" href="#">lyfecoach</a>
          </div>
          <div onClick={this.goToEventPage}>
            <a className="navbar-brand" id="browse-link" href="#">browse</a>
          </div>
          <div className="collapse navbar-collapse navbar-right">
            <ul className="nav navbar-nav">
              {events}
              {user}
              <li onClick={this.aboutLyfecoach} data-toggle="modal" data-target="#myModal"><a href="#">about lyfecoach</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
