var React = require('react'),
    NavBar = require('./nav_bar/nav_bar');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar history={this.props.history}/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
