var React = require('react');

var EventTypeFilter = React.createClass({

  render: function() {
    this.label = "Event Type";
    
    if (this.props.toggle === this.label) {
      var hiddenClass = "";
    } else {
      var hiddenClass = "hidden-dropdown";
    }

    return (
      <div>
        <div onClick={this.props.onClick}>
          {this.label}
        </div>
        <div id="event-type-dropdown" className={hiddenClass}>
          Hiddenstuff
        </div>
      </div>
    );
  }

});

module.exports = EventTypeFilter;
