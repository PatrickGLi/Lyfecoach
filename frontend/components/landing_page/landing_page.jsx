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
    this.eventListener = EventStore.addListener(this._receiveEvents);
    LandingPageActions.fetchPopularEvents();
  },

  _receiveEvents: function() {
    this.setState({ events: _getAllEvents() });
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
  },

  render: function() {
    return (
      <div>
        <Jumbotron/>
        <FilterForm history={this.props.history}/>
        <div><h2 className="popular-title">popular</h2></div>
        <PopularEventsIndex history={this.props.history} events={this.state.events}/>
      </div>
    );
  }


});

module.exports = LandingPage;
