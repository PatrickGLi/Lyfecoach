var React = require('react'),
    Map = require('./map'),
    EventStore = require('../../stores/event_store'),
    EventTitle = require('./title'),
    EventIndex = require('./index'),
    FilterParamsStore = require('../../stores/filter_params_store'),
    EventPageActions = require('../../actions/event_page_actions'),
    NavTransitions = require('../../util/nav_transitions'),
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
    NavTransitions.addNavTransitions();
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
    this.filterListener.remove();
    this.receivedEvents = false;
    FilterParamsStore.resetFilters();
    NavTransitions.removeNavTransitions();
    EventStore.clearEvents();
  },

  _filtersChanged: function () {
    var newParams = _getFilterParams();
    this.setState({ filterParams: newParams });
    EventPageActions.fetchEvents();
  },

  _eventsChanged: function() {
    this.receivedEvents = true;
    this.setState({ events: _getAllEvents() });
  },

  render: function() {
    var events;

    if (this.state.events.length === 0 && this.receivedEvents) {
      events = <div className="no-selection">
                 <p>no posted events with those options. <b>host</b> successful events
                  yourself and add to lyfecoach or adjust your selection and location query.</p>
               </div>;
    } else if (this.state.events.length === 0) {
      events =
            <div className="no-selection">
              <div className="sk-circle">
                 <div className="sk-circle1 sk-child"></div>
                 <div className="sk-circle2 sk-child"></div>
                 <div className="sk-circle3 sk-child"></div>
                 <div className="sk-circle4 sk-child"></div>
                 <div className="sk-circle5 sk-child"></div>
                 <div className="sk-circle6 sk-child"></div>
                 <div className="sk-circle7 sk-child"></div>
                 <div className="sk-circle8 sk-child"></div>
                 <div className="sk-circle9 sk-child"></div>
                 <div className="sk-circle10 sk-child"></div>
                 <div className="sk-circle11 sk-child"></div>
                 <div className="sk-circle12 sk-child"></div>
               </div>
             </div>;
    } else {
      events = <EventIndex events={this.state.events} history={this.props.history}/>;
    }

    return (
            <div className="event-page">
              <div className="map-and-filters-container">
                <Map events={this.state.events} filterParams={this.state.filterParams}/>
                <div className="row">
                  <EventTitle/>
                  <Filter filterParams={this.state.filterParams}/>
                </div>
              </div>
              {events}

            </div>
           );
  }
});

module.exports = EventPage;
