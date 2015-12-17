var React = require('react'),
    DropdownStore = require('../../stores/dropdown_store');

var HelpDropdown = React.createClass({
  getInitialState: function() {
    return({ dropdown: "dropdown-hidden" });
  },

  componentDidMount: function() {
    this.token = DropdownStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  _onChange: function() {

  },

  toggleHelpDropdown: function(e) {
    DropdownActions.showDropdown(e.target);
  },

  render: function() {
    return(
      <div>
        <div onClick={this.toggleHelpDropdown}
             className="nav-links">Help
        </div>
        <div id={this.state.dropdown}>
          Hiddenstuff
        </div>
      </div>

    );
  }
});

module.exports = HelpDropdown;
