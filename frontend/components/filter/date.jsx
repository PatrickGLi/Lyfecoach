var React = require('react'),
    FilterActions = require('../../actions/filter_actions'),
    DropdownConstants = require('../../constants/dropdown_constants'),
    DateConstants = require('../../constants/date_constants');

var DateFilter = React.createClass({
  filterByDate: function(e) {
    FilterActions.updateDate(e.target.innerText);
  },

  render: function() {
    if (this.props.toggle === DropdownConstants.DATE) {
      var hiddenClass = "";
    } else {
      var hiddenClass = "hidden-dropdown";
    }

    return (
      <div>
        <div onClick={this.props.onClick}>
          {DropdownConstants.DATE}
        </div>
        <div id="date-dropdown" className={hiddenClass}>
          <div onClick={this.filterByDate}>
            {DateConstants.THIS_WEEK}
          </div>
          <div onClick={this.filterByDate}>
            {DateConstants.THIS_MONTH}
          </div>
          <div onClick={this.filterByDate}>
            {DateConstants.THIS_YEAR}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = DateFilter;
