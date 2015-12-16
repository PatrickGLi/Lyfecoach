var React = require('react'),
    Map = require('./map'),
    EventIndex = require('./index'),
    Filter = require('../filter/filter');

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
