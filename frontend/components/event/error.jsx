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
      this.setState({ error: "oops. those answers won't work. make sure all entries are filled in, and location, times, and prices are valid. let's try again."});
    }
  },

  render: function() {
    return (<div className="form-error">{this.state.error}</div>);
  }

});

module.exports = Error;
