var React = require('react');


var Autocomplete = React.createClass({

  goToEvent: function(event) {
    this.props.history.pushState(null, "api/users/" + event.organizer_id + "/events/" + event.id);
  },

  render: function() {
    var that = this;
    var events = this.props.events.map(function(event) {
      return (<li key={event.id}
                  className="autocomplete-item"><h5 onClick={that.goToEvent.bind(that, event)}>{event.title}</h5></li>);
    });

    return (
      <ul className="autocomplete-items">{events}</ul>
    );
  }
});

module.exports = Autocomplete;
