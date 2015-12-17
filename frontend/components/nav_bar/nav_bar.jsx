var React = require('react'),
    NavBarActions = require('../../actions/nav_bar/nav_bar_actions'),
    CurrentUserStore = require('../../stores/current_user_store'),
    ReactConstants = require('../../constants/react_constants'),
    UserDropdown = require('./user_dropdown'),
    HelpDropdown = require('./help_dropdown'),
    History = require('react-router').History;

var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return ({ currentUser: CurrentUserStore.fetch() });
  },

  componentDidMount: function() {
    this.currentUserListener = CurrentUserStore.addListener(this.getCurrentUser);
    NavBarActions.fetchCurrentUser(ReactConstants.CURRENT_USER);
  },

  componentWillUnmount: function() {
    this.currentUserListener.remove();
  },

  getCurrentUser: function() {
    this.setState({ currentUser: CurrentUserStore.fetch() });
  },

  returnToHomepage: function(e) {
    this.history.pushState(null, '/', {});
  },

  goToEventForm: function(e) {
    this.history.pushState(null,'api/events/new');
  },

  render: function() {
    if (this.state.currentUser === null) { return <div></div>; }

    return (
      <nav className="navbar navbar-default">
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
          </div>

          <div className="collapse navbar-collapse" id="collapse-menu">
            <div className="nav navbar-nav pull-left">
              <img id="logo" src="http://static4.wikia.nocookie.net/__cb20131121214007/destinypedia/images/7/71/Information_Icon.svg"
                   onClick={this.returnToHomepage}/>
            </div>

            <div className="nav navbar-nav pull-right user-settings">
              <div onClick={this.goToEventForm}
                   id="create-event-link">Be a host.
              </div>
              <UserDropdown name={this.state.currentUser.fname}/>
              <HelpDropdown/>
            </div>
          </div>

        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
