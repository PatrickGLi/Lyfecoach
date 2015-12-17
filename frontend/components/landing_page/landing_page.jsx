var React = require('react'),
    History = require('react-router').History,
    Jumbotron = require('./jumbotron');

LandingPage = React.createClass({

  searchEvents: function(e) {
    this.props.history.pushState(null, 'api/events', {});
  },

  render: function() {
    return (
      <div>
        <Jumbotron/>
        <button onClick={this.searchEvents}>Search Events</button>
      </div>
    );
  }


});

module.exports = LandingPage;
