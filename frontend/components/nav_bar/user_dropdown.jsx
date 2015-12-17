var React = require('react'),
    UserDropdownActions = require('../../actions/nav_bar/user_dropdown'),
    ReactConstants = require('../../constants/react_constants');

var UserDropdown = React.createClass({
  signOut: function() {
    UserDropdownActions.signOut();
  },

  render: function() {
    return(
      <form method="post" action="session">
        <input type="hidden" name="_method" value="delete"/>
        <input name="authenticity_token"
               type="hidden" value={ReactConstants.AUTH_TOKEN} />
        <input type="submit" value="Sign Out"></input>
      </form>
    );
  }
});

module.exports = UserDropdown;
