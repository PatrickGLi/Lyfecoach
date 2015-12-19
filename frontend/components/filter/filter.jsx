var React = require('react'),
    DropdownActions = require('../../actions/dropdown_actions'),
    DropdownStore = require('../../stores/dropdown_store'),
    SearchFilter = require('./search_filter'),
    PriceFilter = require('./price'),
    CategoryFilter = require('./category'),
    DateFilter = require('./date');


var Filter = React.createClass({
  getInitialState: function() {
    return({ shown: "" });
  },

  componentDidMount: function() {
    this.dropdownStoreListener = DropdownStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.dropdownStoreListener.remove();

  },

  handleClick: function(e) {
    DropdownActions.showDropdown(e.target.innerText);
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
                     filterParams={this.props.filterParams}/><br/>
        <CategoryFilter toggle={this.state.shown}
                        onClick={this.handleClick}
                        filterParams={this.props.filterParams}/><br/>
        <DateFilter toggle={this.state.shown}
                    onClick={this.handleClick}
                    filterParams={this.props.filterParams}/>
      </div>
    );
  }
});

module.exports = Filter;
