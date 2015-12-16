var React = require('react'),
    FilterStore = require('../../stores/filter_store');

var PriceFilter = React.createClass({


  getInitialState: function() {
    return ()
  },

  componentDidMount: function() {
    FilterStore.addListener(this.handleChange);
  },

  handleChange: function() {
    console.log("hey!");
  },

  render: function() {
    return (<div></div>);
  }

});

module.exports = PriceFilter;
