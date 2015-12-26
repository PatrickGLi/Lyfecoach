var React = require('react');


var Autocomplete = React.createClass({

  render: function() {
    var events = this.props.events.map(function(event) {
      return (<li key={event.id}>{event.title}</li>);
    });

    return (
      <ul className="autocomplete-items">{events}</ul>
    );
  }
});

module.exports = Autocomplete;
