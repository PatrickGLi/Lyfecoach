var React = require('react');

var CategoryFilter = React.createClass({

  render: function() {
    this.label = "Category";
    
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
        <div id="category-dropdown" className={hiddenClass}>
          Hiddenstuff
        </div>
      </div>
    );
  }

});

module.exports = CategoryFilter;
