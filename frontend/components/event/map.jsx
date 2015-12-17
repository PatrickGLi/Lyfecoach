var React = require('react'),
    EventStore = require('../../stores/event_store'),
    SearchActions = require('../../actions/map_actions');

var Map = React.createClass({

  componentDidMount: function() {
    var that = this;
    this.markers = [];
    navigator.geolocation.getCurrentPosition(this.getMap);
  },

  getMap: function() {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
     center: { lat: lat, lng: lng },
     zoom: 13
   };

   this.map = new google.maps.Map(map, mapOptions);
  },

  componentWillUnmount: function() {
    this.token.remove();
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

      for (var i = 0; i < currentEvents.length; i++) {
        if (currentMarkers[i].eventId == event.id) {
          index = i;
          break;
        }
      }

      if (index === null) {
        eventsToAddMarkers.push(event);
      } else {
        //stays
      }
    },
    var benches = this.props.benches;
    var toAdd = [], toRemove = this.markers.slice(0);
    benches.forEach(function(bench, idx){
      var idx = -1;
      //check if bench is already on map as a marker
      for(var i = 0; i < toRemove.length; i++){
        if(toRemove[i].benchId == bench.id){
          idx = i;
          break;
        }
      }
      if(idx === -1){
        //if it's not already on the map, we need to add a marker
        toAdd.push(bench);
      } else {
        //if it IS already on the map AND in the store, we don't need
        //to remove it
        toRemove.splice(idx, 1);
      }
    });
    toAdd.forEach(this.createMarkerFromBench);
    toRemove.forEach(this.removeMarker);

    if (this.props.singleBench) {
      this.map.setOptions({draggable: false});
      this.map.setCenter(this.centerBenchCoords());
    }
      this.props.events.forEach(this.createMarkerForEvent);
    //in filters, will change the markers on the m ap
  },

  addMarker: function(event) {
    var myLatLng = {lat: event.lat, lng: event.lng};

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      eventId: event.id,
      animation: null
    });

    removeMarker: function(event) {

    }

    this.markers.push(marker);
  },

  render: function() {
    return (
      <div className="map" ref="map"></div>
    );
  }


});

module.exports = Map;
