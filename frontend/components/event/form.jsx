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
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      description: ""
    };
  },

  componentDidMount: function() {
    $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

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

  addImage: function (e) {
    debugger
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      debugger
      // if(!error){
      //   this.props.postImage(results[0]);
      // }
    }.bind(this));
  },

  render: function(){
    var lat = this._coords().lat, lng = this._coords().lng;

    var times = [],
        time;

    for (var i = 0; i < 24; i++) {
      if (i === 0) {
        time = "12:00 AM"
      } else if (i === 12) {
        time = "12:00 PM"
      } else if (i < 12) {
        time = i.toString() + ":00 AM"
      } else {
        time = (i - 12).toString() + ":00 PM"
      }

      times.push(<option key={i} value={time}>{time}</option>);
    }

    return (
        <div>
          <h3>Event Details</h3>
          <form onSubmit={this.handleSubmit}>

            <label>Event Title</label>

            <input type="text"
                   valueLink={this.linkState('title')}
                   placeholder="Give a short distinct name"/>
            <br/>

            <input valueLink={this.linkState('location')}
              ref="autocomplete" placeholder="Enter your address"
             onFocus={this.geolocate} type="text"></input>

           //how to get autocomplete to always reflect state

           <label>Start Time</label>
           <input type="date" valueLink={this.linkState('startDate')}/>


           <select valueLink={this.linkState('startTime')}>
             {times}
            </select>

            <label>End Time</label>
            <input type="date" valueLink={this.linkState('endDate')}/>


            <select type="number" valueLink={this.linkState('endTime')}>
              {times}
            </select>
            <br/>

            <label>Latitude</label>
            <input type="text" disabled="true" value={lat}/>
            <br/>
            <label>Longitude</label>
            <input type="text" disabled="true" value={lng}/>
            <br/>

            <div className="upload-form">
              <button onClick={this.addImage}>ADD EVENT IMAGE</button>
            </div>

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
