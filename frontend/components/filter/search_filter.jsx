var React = require('react'),
    ReactDOM = require('react-dom'),
    FilterActions = require('../../actions/filter_actions');

var SearchFilter = React.createClass({
  getInitialState: function() {
    return({ location: ""});
  },

  componentDidMount: function() {
    this.autoCompleteInput = ReactDOM.findDOMNode(this.refs.autocomplete);

    this.autocomplete = new google.maps.places.Autocomplete(this.autoCompleteInput,
      {types: ['geocode']});
    this.geocoder = new google.maps.Geocoder();
    this.autocomplete.addListener('place_changed', this.filterByLocation);
  },

  filterByLocation: function() {
    var that = this;
    var place = this.autocomplete.getPlace();
        address = place.formatted_address;

    this.setState({ location: address });

    this.geocoder.geocode({ 'address' : address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var myLatLng = results[0].geometry.location;
        this.lat = myLatLng.lat();
        this.lng = myLatLng.lng();

        var locationData = { nearLat: this.lat,
                             nearLng: this.lng,
                             address: address };

        FilterActions.updateLocation(locationData);
      } else {
        alert(status);
      }
    });
  },

  geolocate: function() {
    this.autoCompleteInput.value="";
    this.setState({ location: "" });
    var that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });

        that.autocomplete.setBounds(circle.getBounds());
      });
    }
  },

  handleChange: function(e) {
    this.setState({ location: e.target.value})
  },

  render: function() {
    return(
      <div>
        <input id="test"
          onChange={this.handleChange}
          ref="autocomplete"
          placeholder="X"
          onClick={this.geolocate}
          type="text">
        </input>
      </div>
    );
  }

});

// value={this.props.filterParams.

module.exports = SearchFilter;
