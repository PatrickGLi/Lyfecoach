var React = require('react'),
    EventStore = require('../stores/event_store');

var EventIndex = React.createClass({
  getInitialState: function() {
    return ({ events: EventStore.all() });
  },

  componentDidMount: function() {
    EventStore.addListener(this.fetchEvents);
  },

  fetchEvents: function(){
    this.setState({ events: EventStore.all() });
  },

  render: function() {
    var events = this.state.events.map(function(event, index) {

      return (
        <div key={index} className="col-xs-4">
          <img src={event.url} className="img-circle img-responsive" alt="Responsive image"></img>
          <div>{event.title}</div>
          <div>Location: {event.location}</div>
          <div>Start Time: {event.start_time}, End Time: {event.end_time}</div>
          <div>${event.price} Hosted by: {event.organizer}</div>
        </div>
      );
    });

    return (
      <div className="row">
        {events}
      </div>
    );
  }

});

module.exports = EventIndex;
