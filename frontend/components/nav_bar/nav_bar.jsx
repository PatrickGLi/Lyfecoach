var React = require('react'),
    NavBarActions = require('../../actions/nav_bar_actions'),
    CurrentUserStore = require('../../stores/current_user_store'),
    ReactConstants = require('../../constants/react_constants'),
    DropdownActions = require('../../actions/dropdown_actions'),
    DropdownStore = require('../../stores/dropdown_store'),
    UserDropdown = require('./user_dropdown'),
    HelpDropdown = require('./help_dropdown');

var NavBar = React.createClass({

  getInitialState: function() {
    return ({
      currentUser: "Guest",
      shown: ""
    });
  },

  componentDidMount: function() {
    this.currentUserListener = CurrentUserStore.addListener(this.getCurrentUser);
    this.currentDropdownListener = DropdownStore.addListener(this._onChange);

    if (ReactConstants.CURRENT_USER !== -1) {
      NavBarActions.fetchCurrentUser(ReactConstants.CURRENT_USER);
    }
  },

  _onChange: function() {
    this.setState({ shown: DropdownStore.fetch() });
  },

  componentWillUnmount: function() {
    this.currentUserListener.remove();
    this.currentDropdownListener.remove();
  },

  getCurrentUser: function() {
    this.setState({ currentUser: CurrentUserStore.fetch() });
  },

  returnToHomepage: function(e) {
    this.props.history.pushState(null, '/', {});
  },

  goToEventForm: function(e) {
    this.props.history.pushState(null,'api/events/new');
  },

  handleClick: function(e) {
    DropdownActions.showDropdown(e.target.innerText);
  },

  render: function() {
    var events;
    if (ReactConstants.CURRENT_USER !== -1) {
      events = <div onClick={this.goToEventForm}
                    id="create-event-link">Be a host.
                </div>;
    } else {
      events = <div><a href="users/new">Sign Up</a></div>;
    }

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
              {events}
              <UserDropdown toggle={this.state.shown} onClick={this.handleClick} currentUser={this.state.currentUser}/>
              <HelpDropdown toggle={this.state.shown} onClick={this.handleClick}/>
            </div>
          </div>

        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
