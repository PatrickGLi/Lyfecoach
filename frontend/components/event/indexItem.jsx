var React = require('react');
    // History = require('react-router').History;


var IndexItem = React.createClass({
  // mixins: [History],

  // showEventDetail: function() {
  //   this.history.pushState(null, '/event/' + this.props.event.id, {});
  // },

  //ADD REACT ROUTER AND FINISH SHOWING EVENT DETAILS
  //THEN FIX FILTERING
  // THEN FIX STATUS BAR

  render: function() {
    return(
      <div className="col-xs-4 test">
        <img onClick={this.showEventDetail}
             src={this.props.image}
             className="img-circle img-responsive"
             alt="Responsive image">
        </img>
        <div>{this.props.title}</div>
        <div>Location: {this.props.location}</div>
        <div>Start Time: {this.props.startTime}, End Time: {this.props.endTime}</div>
        <div>${this.props.price} Hosted by: {this.props.organizer}</div>
      </div>
    );

  }

});

module.exports = IndexItem;
