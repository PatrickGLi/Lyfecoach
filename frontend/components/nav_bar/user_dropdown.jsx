var React = require('react'),
    ReactConstants = require('../../constants/react_constants'),
    DropdownStore = require('../../stores/dropdown_store');

var UserDropdown = React.createClass({
  getInitialState: function() {
    return({ dropdown: "dropdown-hidden",
             label: this.props.name
    });
  },

  componentDidMount: function() {
    this.token = DropdownStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  _onChange: function() {
    if (DropdownStore.fetch() === this.state.label) {
      this.setState({ dropdown: ""});
    } else {
      this.setState({ dropdown: "dropdown-hidden" });
    }
  },

  toggleUserDropdown: function(e) {
    DropdownActions.showDropdown(e.target.innerHTML);
  },

  render: function() {
    return(
      <div>
        <div onClick={this.toggleUserDropdown}
             className="nav-links">{this.state.label}
        </div>
        <div id={this.state.dropdown}>
          <div>Account Settings</div>
          <div>
            <form method="post" action="session">
              <input type="hidden" name="_method" value="delete"/>
              <input name="authenticity_token"
                type="hidden" value={ReactConstants.AUTH_TOKEN} />
              <input type="submit" value="Sign Out"></input>
            </form>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = UserDropdown;
