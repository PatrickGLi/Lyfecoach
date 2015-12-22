var React = require('react'),
    EventStore = require('../../stores/event_store'),
    ReactDOM = require('react-dom'),
    FilterParamsStore = require('../../stores/filter_params_store'),
    MapActions = require('../../actions/map_actions');

var Map = React.createClass({

  componentDidMount: function() {
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

   this.props.events.forEach(this.addMarker);

   var locationData = { nearLat: lat,
                        nearLng: lng,
                        address: "you" };

  if (Object.keys(FilterParamsStore.params()).length === 0) {
    MapActions.updateLocation(locationData);
  }

   //when the map mounts, update location parameters and fetch
   MapActions.fetchEvents();
  },

  componentWillUnmount: function() {
    window.mapMounted = false;
  },

  componentWillReceiveProps: function(newProps) {
    if (typeof this.map === 'undefined') {
      return;
    } //component receives props before geolocation

    if (this.props.events !== newProps.events) {
      this._onChange(newProps.events);
    } else if (this.props.filterParams !== newProps.filterParams) {
      this.setMapCenter(newProps.filterParams)
    }
  },

  setMapCenter: function(filterParams) {
    if (this.map.center.lat() !== filterParams.location.nearLat
     && this.map.center.lng() !== filterParams.location.nearLng) {
       this.map.setCenter({ lat: filterParams.location.nearLat,
                            lng: filterParams.location.nearLng,
                         });
     }
  },

  _onChange: function(events) {
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
      title: "Hosted by " + event.organizer.host_name,
      eventId: event.id,
      icon: 'http://res.cloudinary.com/dlqjek68b/image/upload/v1450771235/marker_black_mpnvvp.png'
    });

    marker.addListener('click', this.goToHost);

    this.markers.push(marker);
  },

  goToHost: function() {
    console.log("hi!");
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
