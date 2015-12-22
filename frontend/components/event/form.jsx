var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ReactDOM = require('react-dom'),
    FormActions = require('../../actions/form_actions'),
    Error = require('./error'),
    EventStore = require('../../stores/event_store');

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
    url: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=https%3A%2F%2Fpixabay.com%2Fen%2Fsilhouette-sunset-landscape-woman-283298%2F&bvm=bv.110151844,d.cGc&psig=AFQjCNEIkN-4xKzQ4jLYazWlpb_cc6p3ug&ust=1450288362611394",
    ticketMax: "",
    category: ""
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

    var autoCompleteInput = ReactDOM.findDOMNode(this.refs.autocomplete);

    this.autocomplete = new google.maps.places.Autocomplete(autoCompleteInput,
      {types: ['geocode']});
    this.geocoder = new google.maps.Geocoder();
    this.autocomplete.addListener('place_changed', this.fillInLocation);
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
          lng: myLatLng.lng()
        });
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

  handleSubmit: function(e){
    e.preventDefault();
    FormActions.createEvent(this.state)
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
        debugger
        this.props.postImage(results[0]);
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

    return (
        <div>
          <h3>Event Details</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="form-title">Event Title</label>
              <input className="form-control"
                     type="text"
                     id="form-title"
                     valueLink={this.linkState('title')}
                     placeholder="Give a short distinct name"/>

                   <label htmlFor="form-location">Location</label>
              <input valueLink={this.linkState('location')}
                     className="form-control"
                     id="form-location"
                     ref="autocomplete"
                     placeholder="Enter your address"
                     onFocus={this.geolocate}
                     type="text"/>


                   <label htmlFor="form-start-date">Start Time</label>
              <input type="date"
                     id="form-start-date"
                     className="form-control"
                     valueLink={this.linkState('startDate')}/>

              <select className="form-control"
                      valueLink={this.linkState('startTime')}>
                      <option></option>
                      {times}
              </select>

              <label htmlFor="form-end-date">End Time</label>
              <input type="date"
                     id="form-end-date"
                     valueLink={this.linkState('endDate')}
                     className="form-control"/>


              <select className="form-control"
                      valueLink={this.linkState('endTime')}>
                      <option></option>
                      {times}
              </select>

              <label htmlFor="form-ticket">Tickets</label>
              <input type="text"
                     valueLink={this.linkState('price')}
                     id="form-ticket"
                     className="form-control"/>


              <label htmlFor="form-ticket-max">Ticket Max</label>
              <input type="text"
                     valueLink={this.linkState('ticketMax')}
                     id="form-ticket-max"
                     className="form-control"/>

              <label htmlFor="form-category">Category</label>
              <input type="text"
                     id="form-category"
                     valueLink={this.linkState('category')}
                     className="form-control"/>

                <br/>
                <button onClick={this.addImage}
                        className="btn btn-default">
                        ADD EVENT IMAGE
                </button>
                <br/>

              <label htmlFor="form-description">Add a Description</label>
              <textarea valueLink={this.linkState('description')}
                        id="form-description"
                        className="form-control"></textarea>

              <br/>
              <button type="submit" className="btn btn-primary">Create Event</button>
            </div>
          </form>
          <button className="btn btn-primary"
                  onClick={this.handleCancel}>
                  Cancel
          </button>
          <Error/>
        </div>
    );
  }
});

module.exports = EventForm;
