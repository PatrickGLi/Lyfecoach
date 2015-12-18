var React = require('react'),
    ReactConstants = require('../../constants/react_constants');

var UserDropdown = React.createClass({

  render: function() {
    this.label = this.props.name;

    if (this.props.toggle === this.label) {
      var hiddenClass = "";
    } else {
      var hiddenClass = "hidden-dropdown";
    }

    return(
      <div>
        <div onClick={this.props.onClick}
             className="nav-links">{this.props.name}
        </div>
        <div className={hiddenClass}>
          <div>Account Settings</div>
          <div>
            <form method="post" action="session">
              <input type="hidden" name="_method" value="delete"/>
              <input name="authenticity_token"
                type="hidden" value={ReactConstants.AUTH_TOKEN} />
              <input type="submit" value="Sign Out"></input>
            </form>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = UserDropdown;
