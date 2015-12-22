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
      <div className="popular-search">
        <form onSubmit={this.handleSubmit}
              className="form-inline">
            <input type="text"
                   className="form-control"
                   placeholder="Search by Event or Category"
                   valueLink={this.linkState('title')}/>
            <SearchFilter/>
          <button type="submit" className="btn btn-default">Search</button>
        </form>
      </div>

    );
  }

});

module.exports = FilterForm;
