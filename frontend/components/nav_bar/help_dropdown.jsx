var React = require('react'),
    DropdownConstants = require('../../constants/dropdown_constants');

var HelpDropdown = React.createClass({

  render: function() {
    if (this.props.toggle === DropdownConstants.HELP) {
      var hiddenClass = "";
    } else {
      var hiddenClass = "hidden-dropdown";
    }

    return(
      <div>
        <div onClick={this.props.onClick}
             className="nav-links">{DropdownConstants.HELP}
        </div>
        <div className={hiddenClass}>
          Hiddenstuff
        </div>
      </div>

    );
  }
});

module.exports = HelpDropdown;
