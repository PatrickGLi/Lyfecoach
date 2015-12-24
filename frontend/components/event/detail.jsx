var React = require('react'),
    EventStore = require('../../stores/event_store'),
    EventDetailActions = require('../../actions/event_detail_actions');

var Detail = React.createClass({
  getInitialState: function() {
    return ({ event: this.getStateFromStore() });
  },

  getStateFromStore: function() {
    return EventStore.fetch();
  },

  componentDidMount: function() {
    this.token = EventStore.addListener(this.showEventDetail);
    EventDetailActions.fetchSingleEvent(parseInt(this.props.params.eventId));
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  componentWillReceiveProps: function(newProps) {
    EventDetailActions.fetchSingleEvent(parseInt(newProps.params.eventId));
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
      <div className="event-detail col-md-4">
        <div><h3>{event.title}</h3></div>
        <div className="event-image"><img src={image}/></div>

        <div className="info">
          <div>{event.location}</div>
          <div>{startDate} {startTime}</div>
          <div>{endDate} {endTime}</div>
          <div>${event.price}</div>
        </div>

        <div id="accordion2" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <h4 className="panel-title">
                  Details
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              {event.description}
            </div>
          </div>
        </div>

      </div>


    );
  }

});

module.exports = Detail;
