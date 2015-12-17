var React = require('react'),
    History = require('react-router').History;

LandingPage = React.createClass({

  searchEvents: function(e) {
    this.props.history.pushState(null, 'api/events', {});
  },

  render: function() {
    return (
      <div className='container'>
        <button onClick={this.searchEvents}>Search Events</button>
    </div>)
  }


});

module.exports = LandingPage;
