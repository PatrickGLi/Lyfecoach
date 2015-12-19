var React = require('react'),
    EventStore = require('../../stores/event_store');


var IndexItem = React.createClass({

  render: function() {
    var startDate = new Date(this.props.event.start_date).toString()
    var endDate = new Date(this.props.event.end_date).toString()

    return(
      <div className="col-xs-4 test">
        <img onClick={this.props.onClick}
             src={this.props.event.url}
             className="img-circle img-responsive"
             alt="Responsive image">
        </img>
        <div>{this.props.event.title}</div>
        <div>Location: {this.props.event.location}</div>
        <div>Start Time: {startDate} {this.props.event.start_time}</div>
        <div>End Time: {endDate} {this.props.event.end_time}</div>
        <div>${this.props.event.price} Hosted by: {this.props.event.organizer}</div>
        <div>{this.props.event.category}</div>
      </div>
    );

  }

});

module.exports = IndexItem;
