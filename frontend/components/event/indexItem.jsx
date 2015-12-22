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
    var startDate = new Date(this.props.event.start_date).toString().split(' ').slice(0,4).join(' ');
    var endDate = new Date(this.props.event.end_date).toString().split(' ').slice(0,4).join(' ');
    var startTime = this.props.event.start_time;
        endTime = this.props.event.end_time;

    startTime = this.convertTime(startTime);
    endTime = this.convertTime(endTime);

    var image = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_300,w_400" + this.props.event.url;

    return(
      <div onClick={this.props.onClick}
           className="col-xs-3 icons">
        <br/>
        <img src={image}
             className="img-responsive"
             alt="Responsive image">
        </img>
        <div className="index-item-title">{this.props.event.title}</div><br/>
        <div>{this.props.event.location}</div>
        <br/>
        <div>{startDate} {startTime} to {endDate} {endTime}</div>
        <div><b>${this.props.event.price}</b></div>
      </div>
    );

  }

});

module.exports = IndexItem;
