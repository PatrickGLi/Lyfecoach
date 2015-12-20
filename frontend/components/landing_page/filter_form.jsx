var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    FilterParamsStore = require('../../stores/filter_params_store'),
    SearchFilter = require('../filter/search_filter'),
    FilterFormActions = require('../../actions/filter_form_actions');

var FilterForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return({

    })
  },

  componentDidMount: function() {
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
  },

  componentWillUnmount: function() {
    this.filterListener.remove();
  },

  _filtersChanged: function() {
    this.props.history.pushState(null, "api/events");
  },

  handleSubmit: function(e) {
    e.preventDefault();
    FilterFormActions.fetchFilteredEvents();
  },


  render: function() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 valueLink={this.linkState('title')}
                 placeholder="Search for events or categories"/>
          <br/>

          <input type="text"
                 valueLink={this.linkState('title')}
                 placeholder="Search for events or categories"/>
          <br/>

          <SearchFilter/>


        </form>
      </div>
    );
  }

});

module.exports = FilterForm;
