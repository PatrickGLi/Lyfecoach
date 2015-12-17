var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    EventStore = require('../../stores/event_store');

var EventForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      location: "",
      title: "",
      startTime: "",
      endTime: "",
      description: ""
    };
  },

  componentDidMount: function() {
    autocomplete = new google.maps.places.Autocomplete(this.refs.autocomplete,
       {types: ['geocode']});
  },

  geolocate: function() {
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
        autocomplete.setBounds(circle.getBounds());
      });
    }
  },

  handleSubmit: function(event){
    debugger
    event.preventDefault();
    var Event = Object.assign({}, this.state, this._coords());
    ApiUtil.createEvent(Event);
    this.navigateToSearch();
  },
  navigateToSearch: function(){
    this.props.history.pushState(null, "/");
  },
  handleCancel: function(event){
    event.preventDefault();
    this.navigateToSearch();
  },
  _coords: function(){
    return this.props.location.query;
  },

  render: function(){
    var lat = this._coords().lat, lng = this._coords().lng;
    return (
        <div>
          <h3>Event Details</h3>
          <form onSubmit={this.handleSubmit}>

            <label>Event Title</label>

            <input type="text"
                   valueLink={this.linkState('title')}
                   placeholder="Give a short distinct name"/>
            <br/>

            <input ref="autocomplete" placeholder="Enter your address"
             onFocus={this.geolocate} type="text"></input>


            <label>Start Time</label>
            <input type="time" valueLink={this.linkState('startTime')}/>
            <br/>

            <label>End Time</label>
            <input type="time" valueLink={this.linkState('endTime')}/>
            <br/>

            <label>Latitude</label>
            <input type="text" disabled="true" value={lat}/>
            <br/>
            <label>Longitude</label>
            <input type="text" disabled="true" value={lng}/>
            <br/>

            <label>Add Event Image</label>
            <input type="text" placeholder="Placeholder for image"/>
            <br/>

            <label>Add a Description</label>
            <textarea valueLink={this.linkState('description')}></textarea>
            <br/>

            //Add Tickets if there is time


            <input type="submit" value="create Event"/>
          </form>
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
    );
  }
});

module.exports = EventForm;
