var React = require('react'),
    DropdownStore = require('../../stores/dropdown_store');

var PriceFilter = React.createClass({
  options: {
    paid: '',
    free: ''
  },

  getInitialState: function() {
    return (this.options);
  },

  componentDidMount: function() {
    this.token = DropdownStore.addListener(this.handleChange);
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
