var React = require('react'),
    DropdownActions = require('../../actions/dropdown_actions'),
    DropdownStore = require('../../stores/dropdown_store'),
    PriceFilter = require('./price'),
    CategoryFilter = require('./category'),
    EventTypeFilter = require('./event_type'),
    DateFilter = require('./date');

var Filter = React.createClass({
  getInitialState: function() {
    return({ shown: "" });
  },

  componentDidMount: function() {
    this.token = DropdownStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  handleClick: function(e) {
    DropdownActions.showDropdown(e.target.innerHTML);
  },

  _onChange: function() {
    this.setState({ shown: DropdownStore.fetch() });
  },

  render: function() {
    return (
      <div>
        <PriceFilter toggle={this.state.shown} onClick={this.handleClick}/><br/>
        <CategoryFilter toggle={this.state.shown} onClick={this.handleClick}/><br/>
        <EventTypeFilter toggle={this.state.shown} onClick={this.handleClick}/><br/>
        <DateFilter toggle={this.state.shown} onClick={this.handleClick}/>
      </div>
    );
  }
});

module.exports = Filter;
