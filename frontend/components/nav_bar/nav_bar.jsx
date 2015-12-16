var React = require('react'),
    NavBarActions = require('../../actions/nav_bar_actions');

var NavBar = React.createClass({
  componentDidMount: function() {
    NavBarActions.fetchCurrentUser();
  },

  // <% if current_user %>
  // <p><%= current_user.username %> <%= button_to "Log Out", session_url, method: :delete%></p>
  // <% end %>
  render: function() {
    return (
      <div>
        I'm the nav bar.
      </div>
    )
  }
});

module.exports = NavBar;
