var React = require('react');

var SearchFilter = React.createClass({



  render: function() {
    return(
      <input onChange={this.handleChange}
        ref="autocomplete"
        placeholder="X"
        onFocus={this.geolocate}
        type="text">
      </input>
    );
  }

});
