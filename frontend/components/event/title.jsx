var React = require('react'),
    FilterParamsStore = require('../../stores/filter_params_store');

var Title = React.createClass({
  getInitialState: function() {
    return({ title: FilterParamsStore.getTitle() });
  },

  componentDidMount: function() {
    this.token = FilterParamsStore.addListener(this.getTitle);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  getTitle: function() {
    this.setState({ title: FilterParamsStore.getTitle() });
  },

  render: function() {
    return (
      <div>{this.state.title} This is the title.</div>
    );
  }

});

module.exports = Title;
