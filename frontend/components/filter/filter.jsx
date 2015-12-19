var React = require('react'),
    DropdownActions = require('../../actions/dropdown_actions'),
    FilterParamsStore = require('../../stores/filter_params_store'),
    FilterActions = require('../../actions/filter_actions'),
    DropdownStore = require('../../stores/dropdown_store'),
    SearchFilter = require('./search_filter'),
    PriceFilter = require('./price'),
    CategoryFilter = require('./category'),
    EventTypeFilter = require('./event_type'),
    DateFilter = require('./date');

function _getFilterParams() {
  return FilterParamsStore.params();
}

var Filter = React.createClass({
  getInitialState: function() {
    return({
      shown: "",
      filterParams: _getFilterParams()
    });
  },

  componentDidMount: function() {
    this.dropdownStoreListener = DropdownStore.addListener(this._onChange);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
  },

  componentWillUnmount: function() {
    this.dropdownStoreListener.remove();
    this.filterListener.remove();
  },

  _filtersChanged: function () {
    debugger
    var newParams = _getFilterParams();
    this.setState({ filterParams: newParams });
    FilterActions.fetchEvents();
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
        <SearchFilter/>
        <PriceFilter toggle={this.state.shown}
                     onClick={this.handleClick}
                     filterParams={this.state.filterParams}/><br/>
        <CategoryFilter toggle={this.state.shown}
                        onClick={this.handleClick}
                        filterParams={this.state.filterParams}/><br/>
        <EventTypeFilter toggle={this.state.shown}
                         onClick={this.handleClick}
                         filterParams={this.state.filterParams}/><br/>
        <DateFilter toggle={this.state.shown}
                    onClick={this.handleClick}
                    filterParams={this.state.filterParams}/>
      </div>
    );
  }
});

module.exports = Filter;
