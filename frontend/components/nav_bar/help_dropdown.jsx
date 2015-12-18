var React = require('react');

var HelpDropdown = React.createClass({

  render: function() {
    this.label = "Help";

    if (this.props.toggle === this.label) {
      var hiddenClass = "";
    } else {
      var hiddenClass = "hidden-dropdown";
    }

    return(
      <div>
        <div onClick={this.props.onClick}
             className="nav-links">{this.label}
        </div>
        <div className={hiddenClass}>
          Hiddenstuff
        </div>
      </div>

    );
  }
});

module.exports = HelpDropdown;
