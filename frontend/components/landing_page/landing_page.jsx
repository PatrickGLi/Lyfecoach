var React = require('react'),
    History = require('react-router').History;

LandingPage = React.createClass({

  searchEvents: function() {
    this.props.history.pushState(null, 'api/events', {});
  },

  render: function() {
    return (<div>
      I'm the landing page.
      <button onClick={this.searchEvents}>Search Events</button>
    </div>)
  }


});

module.exports = LandingPage;
