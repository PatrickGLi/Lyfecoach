var React = require('react'),
    EventStore = require('../../stores/event_store');
    History = require('react-router').History;


var IndexItem = React.createClass({
  mixins: [History],

  showEventDetail: function(e) {
    this.history.pushState(null, 'api/events/' + this.props.event.id, {});
  },

  render: function() {
    return(
      <div className="col-xs-4 test">
        <img onClick={this.showEventDetail}
             src={this.props.event.url}
             className="img-circle img-responsive"
             alt="Responsive image">
        </img>
        <div>{this.props.event.title}</div>
        <div>Location: {this.props.event.location}</div>
        <div>Start Time: {this.props.event.start_time}, End Time: {this.props.event.end_time}</div>
        <div>${this.props.event.price} Hosted by: {this.props.event.organizer}</div>
      </div>
    );

  }

});

module.exports = IndexItem;
