var React = require('react'),
    Map = require('./map'),
    EventStore = require('../../stores/event_store'),
    EventIndex = require('./index'),
    Filter = require('../filter/filter');


function _getAllEvents() {
  return EventStore.all();
}

var EventSearch = React.createClass({
  getInitialState: function() {
    return({
      events: _getAllEvents()
    });
  },

  componentDidMount: function() {
    this.eventsChanged = EventStore.addListener(this._eventsChanged);
    navigator.geolocation.getCurrentPosition(SearchActions.fetchEvents);
  },

  _eventsChanged: function() {
    this.setState({ benches: _getAllEvents() });
  },

  componentWillUnmount: function() {
    this.eventsChanged.remove();
  },

  render: function() {
    return (
            <div>
              <Map events={this.state.events}/>
              <Filter/>
              <EventIndex/>
            </div>
           );
  }
});

module.exports = EventSearch;
