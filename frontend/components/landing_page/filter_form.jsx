var React = require('react'),
    FilterParamsStore = require('../../stores/filter_params_store'),
    EventStore = require('../../stores/event_store'),
    SearchFilter = require('../filter/search_filter'),
    Autocomplete = require('./autocomplete'),
    FilterFormActions = require('../../actions/filter_form_actions');

var FilterForm = React.createClass({

  getInitialState: function() {
    return({
      title: "",
      autocomplete: []
    });
  },

  componentDidMount: function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });

    this.eventListener = EventStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
  },

  _onChange: function() {
    this.setState({ autocomplete: EventStore.topTitleEvents() });
  },

  handleInput: function(e) {
    this.setState({ title: e.currentTarget.value });


    FilterFormActions.autoComplete(e.currentTarget.value);
  },

  handleSubmit: function(e) {
    e.preventDefault();

    if (this.state.title.length !== 0) {
      FilterFormActions.filterByTitle(this.state.title);
    }

    this.props.history.pushState(null, "api/events");
  },


  render: function() {
    return(
      <div className="filter-search">
        <form onSubmit={this.handleSubmit}
              className="form-inline">
            <input type="text"
                   className="form-control"
                   placeholder="Search by Event or Category"
                   onChange={this.handleInput}
                   value={this.state.title}/>

            <SearchFilter/>
          <button type="submit" className="search-button btn btn-default">Search</button>
        </form>
        <Autocomplete events={this.state.autocomplete}/>
      </div>

    );
  }

});

module.exports = FilterForm;
