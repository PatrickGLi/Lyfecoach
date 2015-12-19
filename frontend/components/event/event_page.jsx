var React = require('react'),
    Map = require('./map'),
    EventStore = require('../../stores/event_store'),
    EventTitle = require('./title'),
    EventSearch = require('./search'),
    EventIndex = require('./index'),
    FilterParamsStore = require('../../stores/filter_params_store'),
    FilterActions = require('../../actions/filter_actions'),
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
    this.eventsChanged = EventStore.addListener(this._eventsChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);

  },

  componentWillUnmount: function() {
    this.eventsChanged.remove();
    this.filterListener.remove();
    FilterParamsStore.resetTitle();
  },

  _filtersChanged: function () {
    var newParams = _getFilterParams();
    this.setState({ filterParams: newParams });
    FilterActions.fetchEvents();
  },

  _eventsChanged: function() {
    this.setState({ events: _getAllEvents() });
  },

  render: function() {
    return (
            <div>
              <Map events={this.state.events} filterParams={this.state.filterParams}/>
              <EventTitle/>
              <Filter filterParams={this.state.filterParams}/>
              <EventSearch/>
              <EventIndex events={this.state.events} history={this.props.history}/>
            </div>
           );
  }
});

module.exports = EventPage;
