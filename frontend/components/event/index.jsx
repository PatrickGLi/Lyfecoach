var React = require('react'),
    IndexItem = require('./indexItem');

var EventIndex = React.createClass({
  showUserDetail: function(event) {
    this.props.history.pushState(null, 'api/users/' + event.organizer.id + '/events/' + event.id);
  },

  render: function() {
    var showUserDetail = this.showUserDetail;
    var events = this.props.events.map(function(event, index) {
      var bindedClick = showUserDetail.bind(null, event);
      return ( <IndexItem onClick={bindedClick}
                          key={event.id}
                          event={event}/> );
    });

    return (
      <div className="container event-index-container">
        {events}
      </div>
    );
  }

});

module.exports = EventIndex;
