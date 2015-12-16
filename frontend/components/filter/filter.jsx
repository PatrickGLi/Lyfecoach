var React = require('react'),
    FilterActions = require('../../actions/filter_actions'),
    PriceFilter = require('./price');

var Filter = React.createClass({

  handleFilter: function(event) {
    FilterActions.showFilter(event.target);
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
