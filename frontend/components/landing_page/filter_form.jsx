var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    FilterParamsStore = require('../../stores/filter_params_store'),
    SearchFilter = require('../filter/search_filter'),
    FilterFormActions = require('../../actions/filter_form_actions');

var FilterForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return({ title: "" });
  },

  componentDidMount: function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
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
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               valueLink={this.linkState('title')}
               placeholder="Search by Event or Category"/>
        <SearchFilter/>
        <input type="submit" value="Search"/>
      </form>
    );
  }

});

module.exports = FilterForm;
