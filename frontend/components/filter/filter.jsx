var React = require('react'),
    DropdownActions = require('../../actions/dropdown_actions'),
    PriceFilter = require('./price');

var Filter = React.createClass({

  handleFilter: function(event) {
    DropdownActions.showDropdown(event.target);
  },

  render: function() {
    return (
      <div>
        <button onClick={this.handleFilter}>Price</button>

        <button onClick={this.handleFilter}>Category</button>
        <button onClick={this.handleFilter}>Event Type</button>
        <button onClick={this.handleFilter}>Date</button>
        <PriceFilter/>
      </div>

    );
  }
});

module.exports = Filter;
