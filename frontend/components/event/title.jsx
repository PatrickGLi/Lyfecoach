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
    // var title;
    //
    // for (var key in this.state.title) {
    //   var title =
    // }
    console.log(this.state.title)

    return (
      <div>Events near {this.state.title.location} for ${this.state.title.price}</div>
    );
  }

});

module.exports = Title;
