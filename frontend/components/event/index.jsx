var React = require('react'),
    EventStore = require('../../stores/event_store'),
    IndexItem = require('./indexItem');

var EventIndex = React.createClass({
  getInitialState: function() {
    return ({ events: EventStore.all() });
  },

  componentDidMount: function() {
    this.token = EventStore.addListener(this.fetchEvents);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  fetchEvents: function(){
    this.setState({ events: EventStore.all() });
  },

  render: function() {
    var events = this.state.events.map(function(event, index) {

      return ( <IndexItem key={index}
                          image={event.url}
                          title={event.title}
                          location={event.location}
                          startTime={event.start_time}
                          endTime={event.end_time}
                          price={event.price}/>
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
