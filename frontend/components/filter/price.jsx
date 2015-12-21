var React = require('react'),
    FilterActions = require('../../actions/filter_actions'),
    DropdownConstants = require('../../constants/dropdown_constants');

var PriceFilter = React.createClass({

  filterByPrice: function(e) {
    FilterActions.updatePrice(e.target.id);
  },

  render: function() {
    if (this.props.toggle === DropdownConstants.PRICE) {
      var hiddenClass = "";
    } else {
      var hiddenClass = "hidden-dropdown";
    }

    return (
      <div>
        <div onClick={this.props.onClick}>
          {DropdownConstants.PRICE}
        </div>
        <div id="price-dropdown" className={hiddenClass}>
          <div id="15" onClick={this.filterByPrice}>
            Under 15
          </div>
          <div id="30" onClick={this.filterByPrice}>
            Under 30
          </div>
          <div id="50" onClick={this.filterByPrice}>
            Under 50
          </div>
          <div id="1000" onClick={this.filterByPrice}>
            All
          </div>
        </div>
      </div>
    );
  }

});

module.exports = PriceFilter;
