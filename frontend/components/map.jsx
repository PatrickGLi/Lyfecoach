var React = require('react'),
    EventStore = require('../stores/event_store'),
    MapActions = require('../actions/map_actions');

var Map = React.createClass({

  componentDidMount: function() {
    var that = this;

    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      return that.getMap(lat, lng);
    });
  },

  getMap: function(lat, lng) {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    EventStore.addListener(this.addMarkers);
    MapActions.fetchEvents();
  },

  addMarkers: function() {
    var that = this;
    EventStore.all().forEach(function(event) {
      var myLatLng = {lat: event.lat, lng: event.lng};

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: that.map,
        animation: null
      });
    });
  },

  render: function() {
    return (
      <div className="map" ref="map"></div>
    );
  }


});

module.exports = Map;
