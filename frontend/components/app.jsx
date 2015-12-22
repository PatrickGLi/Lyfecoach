var React = require('react'),
    NavBar = require('./nav_bar'),
    Footer = require('./footer');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar history={this.props.history}/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});

module.exports = App;
