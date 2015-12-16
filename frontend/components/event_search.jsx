var React = require('react'),
    Map = require('./map'),
    EventIndex = require('./event_index'),
    Filter = require('./filter');

var EventSearch = React.createClass({

  render: function() {
    return (
            <div>
              <Map/>
              <Filter/>
              <EventIndex/>
            </div>
           );
  }
});

module.exports = EventSearch;
