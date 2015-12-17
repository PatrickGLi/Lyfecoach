var React = require('react'),
    DropdownActions = require('../../actions/dropdown_actions'),
    PriceFilter = require('./price'),
    CategoryFilter = require('./category'),
    EventTypeFilter = require('./event_type'),
    DateFilter = require('./date');

var Filter = React.createClass({

  handleFilter: function(event) {
    DropdownActions.showDropdown(event.target);
  },

  render: function() {
    return (
      <div>
        <PriceFilter/>
        <CategoryFilter/>
        <EventTypeFilter/>
        <DateFilter/>
      </div>
    );
  }
});

module.exports = Filter;
