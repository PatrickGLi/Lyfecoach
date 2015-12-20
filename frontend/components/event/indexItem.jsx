var React = require('react'),
    EventStore = require('../../stores/event_store');


var IndexItem = React.createClass({

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
    var startDate = new Date(this.props.event.start_date).toString();
    var endDate = new Date(this.props.event.end_date).toString();
    var startTime = this.props.event.start_time;
        endTime = this.props.event.end_time;

    startTime = this.convertTime(startTime);
    endTime = this.convertTime(endTime);

    return(
      <div className="col-xs-4 test">
        <img onClick={this.props.onClick}
             src={this.props.event.url}
             className="img-circle img-responsive"
             alt="Responsive image">
        </img>
        <div>{this.props.event.title}</div>
        <div>Location: {this.props.event.location}</div>
        <div>Start Time: {startDate} {startTime}</div>
        <div>End Time: {endDate} {endTime}</div>
        <div>${this.props.event.price} Hosted by: {this.props.event.organizer}</div>
        <div>{this.props.event.category}</div>
        <div>View Count: {this.props.event.view_count}</div>
      </div>
    );

  }

});

module.exports = IndexItem;
