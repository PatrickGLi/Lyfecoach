var React = require('react');

var PriceFilter = React.createClass({

  render: function() {
    this.label = "Price";
    
    if (this.props.toggle === this.label) {
      var hiddenClass = "";
    } else {
      var hiddenClass = "hidden-dropdown";
    }

    return (
      <div>
        <div onClick={this.props.onClick}>
          {this.label}
        </div>
        <div id="price-dropdown" className={hiddenClass}>
          Hiddenstuff
        </div>
      </div>
    );
  }

});

module.exports = PriceFilter;
