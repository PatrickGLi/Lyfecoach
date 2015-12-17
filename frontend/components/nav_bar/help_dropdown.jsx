var React = require('react'),
    DropdownStore = require('../../stores/dropdown_store');

var HelpDropdown = React.createClass({
  getInitialState: function() {
    return({
      dropdown: "dropdown-hidden",
      label: "Help"
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

  toggleHelpDropdown: function(e) {
    DropdownActions.showDropdown(e.target.innerHTML);
  },

  render: function() {
    return(
      <div>
        <div onClick={this.toggleHelpDropdown}
             className="nav-links">{this.state.label}
        </div>
        <div id={this.state.dropdown}>
          Hiddenstuff
        </div>
      </div>

    );
  }
});

module.exports = HelpDropdown;
