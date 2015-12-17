var React = require('react'),
    ReactConstants = require('../../constants/react_constants');

var UserDropdown = React.createClass({
  getInitialState: function() {
    return({ dropdown: "dropdown-hidden" });
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function() {

  },

  render: function() {
    return(
      <div>
        <div onClick={this.showUserDropdown}
             className="nav-links">{this.props.name}
        </div>
        <div id={this.state.dropdown}>
          <form method="post" action="session">
            <input type="hidden" name="_method" value="delete"/>
            <input name="authenticity_token"
                   type="hidden" value={ReactConstants.AUTH_TOKEN} />
            <input type="submit" value="Sign Out"></input>
          </form>
        </div>
      </div>

    );
  }
});

module.exports = UserDropdown;
