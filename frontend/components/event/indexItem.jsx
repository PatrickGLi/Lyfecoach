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



    var image = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_250,w_300" + this.props.event.url;

    return(
      <div onClick={this.props.onClick}
           className="grid-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
           <div className="item-price">
             <b>${this.props.event.price}</b>
           </div>
          <img src={image}
               alt="event image">
          </img>
          <div className="caption">
            <div className="event-title">{this.props.event.title}</div><br/>
            <div>Hosted by {this.props.event.organizer.host_name}</div>
            <div>{this.props.event.location}</div>
            <br/>
            <div>{startDate} {startTime} to {endDate} {endTime}</div>
          </div>
      </div>
    );

  }

});

module.exports = IndexItem;
