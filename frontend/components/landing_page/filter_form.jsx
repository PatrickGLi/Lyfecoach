var React = require('react');

var FilterForm = React.createClass({
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
      <form onSubmit={this.handleSubmit}>

      </form>
    );
  }

});

module.exports = FilterForm;
