var React = require('react'),
    FilterStore = require('../../stores/filter_store');

var PriceFilter = React.createClass({
  options: {
    paid: '',
    free: ''
  },

  getInitialState: function() {
    return (this.options);
  },

  componentDidMount: function() {
    this.token = FilterStore.addListener(this.handleChange);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  handleChange: function() {
    console.log("hey")
  },

  render: function() {
    return (<div></div>);
  }

});

module.exports = PriceFilter;
