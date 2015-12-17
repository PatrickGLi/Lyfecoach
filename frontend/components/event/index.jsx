var React = require('react'),
    EventStore = require('../../stores/event_store'),
    IndexItem = require('./indexItem');

var EventIndex = React.createClass({
  showEventDetail: function(event) {
    this.props.history.pushState(null, 'api/events/' + event.id);
  },

  render: function() {
    var showEventDetail = this.showEventDetail;
    var events = this.props.events.map(function(event) {
      var bindedClick = showEventDetail.bind(null, event);
      return ( <IndexItem onClick={bindedClick}
                          key={event.id}
                          event={event}/> );
    });

    return (
      <div className="row">
        {events}
      </div>
    );
  }

});

module.exports = EventIndex;
