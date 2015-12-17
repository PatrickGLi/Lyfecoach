var React = require('react');
var ApiUtil = require('../../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var EventForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      description: "",
    };
  },

  handleSubmit: function(event){
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

            <label>Location</label>
            <input type="text"
                   valueLink={this.linkState('location')}
                   placeholder="Specify where it's held"/>
            <br/>

            <label>Start Time</label>
            <input type="date" valueLink={this.linkState('startTime')}/>
            <br/>

            <label>End Time</label>
            <input type="date" valueLink={this.linkState('startTime')}/>
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

            //Add Tickets if there is time


            <input type="submit" value="create Event"/>
          </form>
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
    );
  }
});

module.exports = EventForm;
