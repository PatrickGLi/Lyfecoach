var React = require('react'),
    Map = require('./map'),
    EventStore = require('../../stores/event_store'),
    EventTitle = require('./title'),
    EventIndex = require('./index'),
    FilterParamsStore = require('../../stores/filter_params_store'),
    EventPageActions = require('../../actions/event_page_actions'),
    Filter = require('../filter/filter');

function _getAllEvents() {
  return EventStore.all();
}

function _getFilterParams() {
  return FilterParamsStore.params();
}

var EventPage = React.createClass({
  getInitialState: function() {
    return({
      events: _getAllEvents(),
      filterParams: _getFilterParams()
    });
  },

  componentDidMount: function() {
    this.eventListener = EventStore.addListener(this._eventsChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
    this.filterListener.remove();
    FilterParamsStore.resetFilters();
  },

  _filtersChanged: function () {
    var newParams = _getFilterParams();
    this.setState({ filterParams: newParams });
    EventPageActions.fetchEvents();
  },

  _eventsChanged: function() {
    this.setState({ events: _getAllEvents() });
  },

  render: function() {
    return (
            <div className="event-page">
              <Map events={this.state.events} filterParams={this.state.filterParams}/>
              <EventTitle/>
              <Filter filterParams={this.state.filterParams}/>
              <EventIndex events={this.state.events} history={this.props.history}/>
            </div>
           );
  }
});

module.exports = EventPage;
