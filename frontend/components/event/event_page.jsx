var React = require('react'),
    Map = require('./map'),
    EventStore = require('../../stores/event_store'),
    EventTitle = require('./title'),
    EventSearch = require('./search'),
    EventIndex = require('./index'),
    Filter = require('../filter/filter'),
    SearchActions = require('../../actions/search_actions');


function _getAllEvents() {
  return EventStore.all();
}

var EventPage = React.createClass({
  getInitialState: function() {
    return({
      events: _getAllEvents()
    });
  },

  componentDidMount: function() {
    this.eventsChanged = EventStore.addListener(this._eventsChanged);
    SearchActions.fetchEvents();
  },

  _eventsChanged: function() {
    this.setState({ events: _getAllEvents() });
  },

  componentWillUnmount: function() {
    this.eventsChanged.remove();
  },

  render: function() {
    return (
            <div>
              <Map events={this.state.events}/>
              <EventTitle/>
              <Filter/>
              <EventSearch/>
              <EventIndex events={this.state.events} history={this.props.history}/>
            </div>
           );
  }
});

module.exports = EventPage;
