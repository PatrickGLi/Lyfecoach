var React = require('react'),
    LandingPageActions = require('../../actions/landing_page_actions'),
    EventStore = require('../../stores/event_store'),
    FilterForm = require('./filter_form'),
    PopularEventsIndex = require('./popular_events_index'),
    Jumbotron = require('./jumbotron');

function _getAllEvents() {
  return EventStore.all();
}

LandingPage = React.createClass({
  getInitialState: function() {
    return({
      events: _getAllEvents()
    })
  },

  componentDidMount: function() {
    this.eventListener = EventStore.addListener(this.eventsChanged);
    LandingPageActions.fetchPopularEvents();
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
  },

  render: function() {
    return (
      <div>
        <Jumbotron/>
        <FilterForm history={this.props.history}/>
        <PopularEventsIndex/>
      </div>
    );
  }


});

module.exports = LandingPage;
