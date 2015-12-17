var React = require('react'),
    DropdownStore = require('../../stores/dropdown_store');

var PriceFilter = React.createClass({

  getInitialState: function() {
    return ({
      dropdown: "dropdown-hidden",
      label: "Price"
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

  togglePriceDropdown: function(e) {
    DropdownActions.showDropdown(e.target.innerHTML);
  },

  render: function() {
    return (
      <div>
        <div onClick={this.togglePriceDropdown}>
          {this.state.label}
        </div>
        <div id={this.state.dropdown}>
          Hiddenstuff
        </div>
      </div>
    );
  }

});

module.exports = PriceFilter;
