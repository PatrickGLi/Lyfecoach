var React = require('react'),
    NavBarActions = require('../../actions/nav_bar/nav_bar_actions'),
    CurrentUserStore = require('../../stores/current_user_store'),
    Dropdown = require('./user_dropdown'),
    ReactConstants = require('../constants/react_constants'),
    History = require('react-router').History;

var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return ({ currentUser: CurrentUserStore.fetch() });
  },

  componentDidMount: function() {
    CurrentUserStore.addListener(this.getCurrentUser);
    NavBarActions.fetchCurrentUser(ReactConstants.CURRENT_USER);
  },

  getCurrentUser: function() {
    this.setState({ currentUser: CurrentUserStore.fetch() });
  },

  returnToHomepage: function() {
    this.history.pushState(null, 'api/events/' + this.props.event.id, {});
  },

  showDropdown: function() {

  },

  render: function() {
    if (this.state.currentUser === null) { return <div></div>; }

    return (
      <div>
        <div onClick={this.returnToHomepage}>
          I'm the logo.
        </div>
        I'm the nav bar.

        <div onClick={this.showDropdown}>
          {this.state.currentUser.fname}
        </div>
        <Dropdown/>
      </div>
    )
  }
});

module.exports = NavBar;
