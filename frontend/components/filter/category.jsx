var React = require('react'),
    FilterActions = require('../../actions/filter_actions'),
    DropdownConstants = require('../../constants/dropdown_constants');

var CategoryFilter = React.createClass({

  filterByCategory: function(e) {
    FilterActions.updateCategory(e.target.innerText);
  },

  render: function() {
    this.label = "Category";

    if (this.props.toggle === DropdownConstants.CATEGORY) {
      var hiddenClass = "";
    } else {
      var hiddenClass = "hidden-dropdown";
    }

    return (
      <div>
        <div onClick={this.props.onClick}>
          {DropdownConstants.CATEGORY}
        </div>
        <div id="category-dropdown" className={hiddenClass}>
          <div onClick={this.filterByCategory}>
            Cuisine
          </div>
          <div onClick={this.filterByCategory}>
            Arts
          </div>
          <div onClick={this.filterByCategory}>
            Music
          </div>
          <div onClick={this.filterByCategory}>
            Nightlife
          </div>
          <div onClick={this.filterByCategory}>
            Sports & Fitness
          </div>
        </div>
      </div>
    );
  }

});

module.exports = CategoryFilter;
