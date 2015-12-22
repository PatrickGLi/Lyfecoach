var React = require('react'),
    EventStore = require('../../stores/event_store'),
    EventDetailActions = require('../../actions/event_detail_actions');

var Detail = React.createClass({
  getInitialState: function() {
    return ({ event: this.getStateFromStore() });
  },

  getStateFromStore: function() {
    return EventStore.find(parseInt(this.props.params.eventId));
  },

  componentDidMount: function() {
    this.token = EventStore.addListener(this.showEventDetail);
    EventDetailActions.fetchSingleEvent(parseInt(this.props.params.eventId));
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  showEventDetail: function() {
    this.setState({ event: this.getStateFromStore() });
  },

  convertTime: function(time) {
    if (time === 0) {
      return "12:00 AM"
    } else if (time === 12) {
      return "12:00 PM"
    }

    if (time < 12) {
      time = time.toString() + ":00 AM"
    } else {
      time = (time - 12).toString() + ":00 PM"
    }

    return time;
  },

  render: function() {
    if (typeof this.state.event === 'undefined') { return (<div></div>); }

    var event = this.state.event;
    var image = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_200,w_300" + event.url;

    var startDate = new Date(event.start_date).toString().split(' ').slice(0,4).join(' ');
    var endDate = new Date(event.end_date).toString().split(' ').slice(0,4).join(' ');
    var startTime = event.start_time;
        endTime = event.end_time;

    startTime = this.convertTime(startTime);
    endTime = this.convertTime(endTime);

    return (
      <div>
        <div>{event.title}</div>
        <div><img src={image}/></div>
        <div>{event.location}</div>
        <div>{event.description}</div>
        <div>{startDate} {startTime}</div>
        <div>{endDate} {endTime}</div>
        <div>{event.price}</div>
        <div>{event.organizer.host_name}</div>
      </div>


    );
  }

});

module.exports = Detail;
