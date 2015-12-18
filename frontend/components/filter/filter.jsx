var React = require('react'),
    ReactDOM = require('react-dom'),
    _ = require('underscore-node'),
    DropdownActions = require('../../actions/dropdown_actions'),
    FilterParamsStore = require('../../stores/filter_params_store'),
    FilterActions = require('../../actions/filter_actions'),
    DropdownStore = require('../../stores/dropdown_store'),
    SearchFilter = require('./search_filter'),
    PriceFilter = require('./price'),
    CategoryFilter = require('./category'),
    EventTypeFilter = require('./event_type'),
    DateFilter = require('./date');

function _getFilterParams() {
  return FilterParamsStore.params();
}

var Filter = React.createClass({
  getInitialState: function() {
    return({
      shown: "",
      filterParams: _getFilterParams()
    });
  },

  componentDidMount: function() {
    var autoCompleteInput = ReactDOM.findDOMNode(this.refs.autocomplete);

    this.autocomplete = new google.maps.places.Autocomplete(autoCompleteInput,
      {types: ['geocode']});
    this.geocoder = new google.maps.Geocoder();
    this.autocomplete.addListener('place_changed', this.searchByLocation);

    this.token = DropdownStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  searchByLocation: function() {
    var that = this;
    var place = this.autocomplete.getPlace();
        address = place.formatted_address;
        debugger
    this.geocoder.geocode({ 'address' : address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var myLatLng = results[0].geometry.location;
        this.lat = myLatLng.lat();
        this.lng = myLatLng.lng();

        FilterActions.fetchEventByLocation(locationData);
      } else {
        alert(status);
      }
    });
  },

  geolocate: function() {
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

  handleSubmit: function(event){
      debugger
    event.preventDefault();

  },

  handleClick: function(e) {
    DropdownActions.showDropdown(e.target.innerHTML);
  },

  _onChange: function() {
    this.setState({ shown: DropdownStore.fetch() });
  },

  handleChange: function(e) {
    this.setState({ location: e.target.value})
  },

  render: function() {
    return (
      <div>
        <SearchFilter filterParams={this.state.filterParams}/>
        <PriceFilter toggle={this.state.shown}
                     onClick={this.handleClick}
                     filterParams={this.state.filterParams}/><br/>
        <CategoryFilter toggle={this.state.shown}
                        onClick={this.handleClick}
                        filterParams={this.state.filterParams}/><br/>
        <EventTypeFilter toggle={this.state.shown}
                         onClick={this.handleClick}
                         filterParams={this.state.filterParams}/><br/>
        <DateFilter toggle={this.state.shown}
                    onClick={this.handleClick}
                    filterParams={this.state.filterParams}/>
      </div>
    );
  }
});

module.exports = Filter;
