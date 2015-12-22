var React = require('react'),
    NavBarActions = require('../actions/nav_bar_actions'),
    CurrentUserStore = require('../stores/current_user_store'),
    ReactConstants = require('../constants/react_constants');

var NavBar = React.createClass({

  getInitialState: function() {
    return ({
      currentUser: "Guest",
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

  render: function() {
    var events;
    if (ReactConstants.CURRENT_USER !== -1) {
      events = <li onClick={this.goToEventForm}><a id="test4" href="#">Be a host.</a></li>
      user = <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{this.state.currentUser.first_name} <span className="caret"></span></a>
        <ul className="dropdown-menu" role="menu">
          <li><a href="#">Account Settings</a></li>
          <li className="divider"></li>
          <li>
            <form method="post" action="session">
              <input type="hidden" name="_method" value="delete"/>
              <input name="authenticity_token"
                     type="hidden"
                     value={ReactConstants.AUTH_TOKEN} />
              <input className="sign-out-link" type="submit" value="Sign Out"></input>
            </form>
          </li>
        </ul>
      </li>
    } else {
      events = <li><a href="users/new">Sign Up</a></li>;
      user = <li><a href="session/new">Sign In</a></li>;
    }

    // <form className="navbar-form navbar-left" role="search">
    //   <div className="form-group">
    //     <input type="text" className="form-control" placeholder="Search"/>
    //   </div>
    //   <button type="submit" className="btn btn-default">Submit</button>
    // </form>

    return (
      <nav className="navbar navbar-default nav-items">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#collapse-menu"
                    aria-expanded="false">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div onClick={this.returnToHomepage}>
              <a id="logo" className="navbar-brand logo" href="#">lyfecoach</a>
            </div>
          </div>

          <div className="collapse navbar-collapse navbar-right" id="collapse-menu">
            <ul className="nav navbar-nav">
              {events}
              {user}
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Help <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Hidden Stuff</a></li>
                    <li className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
