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
    e.preventDefault();
    this.props.history.pushState(null,'api/events/new');
  },

  handleClick: function(e) {
    DropdownActions.showDropdown(e.target.innerText);
  },

  render: function() {
    var events;
    if (ReactConstants.CURRENT_USER !== -1) {
      // events = <li className="active"
      //              onClick={this.goToEventForm}
      //              id="create-event-link">Be a host.
      //           <span className="sr-only">(current)</span></li>;
      events = <li onClick={this.goToEventForm}><a href="#">Be a host.</a></li>
    } else {
      events = <li><a href="users/new">Sign Up</a></li>;
    }

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
              <a className="navbar-brand logo" href="#">lyfecoach</a>
            </div>
          </div>

          <div className="collapse navbar-collapse pull-right" id="collapse-menu">
            <ul className="nav navbar-nav">
              {events}
              <li className="dropdown">
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
                      <input type="submit" value="Sign Out"></input>
                    </form>
                  </li>
                </ul>
              </li>
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
