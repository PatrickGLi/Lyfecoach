var React = require('react'),
    ErrorStore = require('../../stores/error_store');

var Error = React.createClass({
  getInitialState: function() {
    return ({ error: "" });
  },

  componentDidMount: function() {
    this.token = ErrorStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.token.remove();
    ErrorStore.resetError();
  },

  _onChange: function () {

    if (ErrorStore.fetch()) {
      this.setState({ error: "All inputs must be valid."});
    }
  },

  render: function() {
    return (<p>{this.state.error}</p>);
  }

});

module.exports = Error;
