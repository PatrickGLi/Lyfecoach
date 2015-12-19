var React = require('react'),
    EventStore = require('../../stores/event_store'),
    DetailActions = require('../../actions/detail_actions');

var Detail = React.createClass({
  getInitialState: function() {
    return ({ event: this.getStateFromStore() });
  },

  getStateFromStore: function() {
    return EventStore.find(parseInt(this.props.params.eventId));
  },

  componentDidMount: function() {
    this.token = EventStore.addListener(this.showEventDetail);
    DetailActions.fetchSingleEvent(parseInt(this.props.params.eventId));
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  showEventDetail: function() {
    this.setState({ event: this.getStateFromStore() });
  },

  render: function() {
    if (typeof this.state.event === 'undefined') { return (<div></div>); }

    return (
      <div>{this.state.event.title}</div>
    );
  }

});

module.exports = Detail;
