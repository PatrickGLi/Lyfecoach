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
          <div id="10" onClick={this.filterByPrice}>
            Under 10
          </div>
          <div id="30" onClick={this.filterByPrice}>
            Under 30
          </div>
          <div id="50" onClick={this.filterByPrice}>
            Under 50
          </div>
          <div id="51" onClick={this.filterByPrice}>
            50 +
          </div>
        </div>
      </div>
    );
  }

});

module.exports = PriceFilter;
