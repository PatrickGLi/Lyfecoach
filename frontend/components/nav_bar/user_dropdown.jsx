var React = require('react'),
    ReactConstants = require('../../constants/react_constants'),
    History = require('react-router').History;

var UserDropdown = React.createClass({
  mixins: [History],

  newSession: function() {
    this.history.pushState(null, 'session/new');
  },

  render: function() {
    if (this.props.currentUser === "Guest") {
      return (<div><a href="session/new">Sign In</a></div>);
    }

    this.label = this.props.currentUser.first_name;

    if (this.props.toggle === this.label) {
      var hiddenClass = "";
    } else {
      var hiddenClass = "hidden-dropdown";
    }

    return(
      <div>
        <div onClick={this.props.onClick}
             className="nav-links">{this.props.currentUser.first_name}
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
