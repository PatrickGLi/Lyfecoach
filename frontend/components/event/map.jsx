var React = require('react'),
    EventStore = require('../../stores/event_store'),
    ReactDOM = require('react-dom');
    
var Map = React.createClass({

  componentDidMount: function() {
    var that = this;
    this.markers = [];
    navigator.geolocation.getCurrentPosition(this.getMap);
  },

  getMap: function(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
     center: { lat: lat, lng: lng },
     zoom: 13
   };

   this.map = new google.maps.Map(map, mapOptions);
   this.mapLoaded();
  },

  mapLoaded: function() {
    this._onChange();
  },

  componentWillReceiveProps: function() {
    this._onChange();
  },

  _onChange: function() {
    var events = this.props.events;
    var currentMarkers = this.markers.slice(0);
    var eventsToAddMarkers = [];

    events.forEach(function(event) {
      var index = null;

      for (var i = 0; i < currentMarkers.length; i++) {
        if (currentMarkers[i].eventId == event.id) {
          index = i;
          break;
        }
      }

      if (index === null) {
        eventsToAddMarkers.push(event);
      } else {
        currentMarkers.splice(index, 1);
      }
    });

    eventsToAddMarkers.forEach(this.addMarker);
    currentMarkers.forEach(this.removeMarker);
  },

  addMarker: function(event) {
    var myLatLng = {lat: event.lat, lng: event.lng};

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      eventId: event.id,
      animation: null
    });
  },

  removeMarker: function(marker) {
    for (var i = 0; i < this.markers.length; i++) {
      if (this.markers[i] === marker) {
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  },

  render: function() {
    return (
      <div className="map" ref="map"></div>
    );
  }


});

module.exports = Map;
