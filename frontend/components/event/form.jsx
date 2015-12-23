var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ReactDOM = require('react-dom'),
    FormActions = require('../../actions/form_actions'),
    Error = require('./error'),
    ErrorStore = require('../../stores/error_store'),
    EventStore = require('../../stores/event_store'),
    NavTransitions = require('../../util/nav_transitions');

var EventForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    location: "",
    title: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    description: "",
    lat: "",
    lng: "",
    price: "",
    url: "/v1450644788/photo-1416304646406-414b1009dbe4_nbwzwj.jpg",
    ticketMax: "",
    category: "",
    validLocation: ""
  },

  getInitialState: function(){
    return this.blankAttrs;
  },

  componentDidMount: function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });

    NavTransitions.addNavTransitions();

    var autoCompleteInput = ReactDOM.findDOMNode(this.refs.autocomplete);

    this.autocomplete = new google.maps.places.Autocomplete(autoCompleteInput,
      {types: ['geocode']});
    this.geocoder = new google.maps.Geocoder();
    this.autocomplete.addListener('place_changed', this.fillInLocation);
  },

  componentWillUnmount: function() {
    NavTransitions.removeNavTransitions();
  },

  fillInLocation: function() {
    var that = this;
    var place = this.autocomplete.getPlace();
        address = place.formatted_address;
    this.geocoder.geocode({ 'address' : address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var myLatLng = results[0].geometry.location;
        that.setState({
          location: address,
          lat: myLatLng.lat(),
          lng: myLatLng.lng(),
          validLocation: ""
        });
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

  handleSubmit: function(e){
    e.preventDefault();
    FormActions.createEvent(this.state, function(organizer_id, event_id) {
      this.props.history.pushState(null, "api/users/" + organizer_id + "/events/" + event_id);
    }.bind(this));
  },

  handleCancel: function(e){
    e.preventDefault();
    this.navigateToSearch();
  },

  navigateToSearch: function() {
    this.props.history.pushState(null, 'api/events');
  },

  addImage: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.setState({ url: results[0].path });
      }
    }.bind(this));
  },

  render: function(){
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

      times.push(<option key={i} value={i}>{time}</option>);
    }

    var image;

    if (this.state.url === "/v1450644788/photo-1416304646406-414b1009dbe4_nbwzwj.jpg") {
      image = <div></div>;
    } else {
      var url = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_300,w_300/" + this.state.url;
      image = <div className="image-holder"><img src={url}></img></div>;
    }

    return (
        <div className="event-form">
          <div className="row">
            <div className="col-md-5 col-md-offset-1">
              <div className="form-header">
                <h2>Event Details</h2>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="form-title">Event Title</label>
                  <input className="form-control"
                         type="text"
                         id="form-title"
                         valueLink={this.linkState('title')}
                         placeholder="give a short distinct name"/>

                  <label htmlFor="form-location">Location</label>
                  <input valueLink={this.linkState('location')}
                         className="form-control"
                         id="form-location"
                         ref="autocomplete"
                         placeholder="enter your event address"
                         onFocus={this.geolocate}
                         type="text"/>

                  <label htmlFor="form-start-date">Start Time</label>
                  <input type="date"
                         id="form-start-date"
                         className="form-control form-numbers"
                         valueLink={this.linkState('startDate')}/>

                  <select className="form-control form-select"
                          valueLink={this.linkState('startTime')}>
                          {times}
                  </select>

                  <label htmlFor="form-end-date">End Time</label>
                  <input type="date"
                         id="form-end-date"
                         valueLink={this.linkState('endDate')}
                         className="form-control form-numbers"/>

                  <select className="form-control form-select"
                          valueLink={this.linkState('endTime')}>
                          {times}
                  </select>

                  <label htmlFor="form-ticket">Ticket Price</label>
                  <input type="text"
                         valueLink={this.linkState('price')}
                         id="form-ticket"
                         placeholder="number value please."
                         className="form-control form-numbers"/>


                  <label htmlFor="form-ticket-max">Ticket Max</label>
                  <input type="text"
                         valueLink={this.linkState('ticketMax')}
                         id="form-ticket-max"
                         placeholder="number value please."
                         className="form-control form-numbers"/>

                 <label htmlFor="form-category">Category</label>
                 <select className="form-control form-select"
                         id="form-category"
                         valueLink={this.linkState('category')}>
                         <option></option>
                         <option value="food-and-drink">Food & Drink</option>
                         <option value="art">Art</option>
                         <option value="music">Music</option>
                         <option value="nightlife">Nightlife</option>
                         <option value="sports-and-fitness">Sports & Fitness</option>
                 </select>

                 <br/>
                 <button id="image-button"
                         onClick={this.addImage}
                         className="btn btn-default">
                         ADD EVENT IMAGE
                 </button>
                 <br/>

                {image}

                 <label htmlFor="form-description">Description</label>
                 <textarea valueLink={this.linkState('description')}
                           rows="6" cols="50"
                           id="form-description"
                           className="form-control">
                 </textarea>

                 <br/>
                 <button type="submit" className="btn btn-primary form-button btn-lg btn-block">Create Event</button>
               </div>
             </form>
             <button className="btn btn-primary form-button"
                     onClick={this.handleCancel}>
                     Cancel
             </button>
           </div>
           <div className="col-md-5">
             <div className="error-right">
               <h3>successful events have detail. make sure people are interested in you.</h3>
               <h2>almost done.</h2>
               <Error/>
             </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = EventForm;
