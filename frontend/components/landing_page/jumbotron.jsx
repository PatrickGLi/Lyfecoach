var React = require('react'),
    History = require('react-router').History;

var Jumbotron = React.createClass({
  mixins: [History],

  goToEventForm: function(e) {
    this.history.pushState(null,'api/events/new');
  },

  render: function() {
    return(
      <div className="jumbotron">
        <div className="container">
          <div className="jumbo-host col-md-6">
            <h2>Sell Tickets</h2>
            <p>
              Promote, manage, and host successful events.
            </p>
            <button onClick={this.goToEventForm}
                    className="btn btn-primary btn-md">Get Started
            </button>
          </div>
          <div className="jumbo-customer col-md-6">
            <h2>Explore</h2>
            <p>Know your city, and expand your horizons. Follow your
            favorite event hosts, and always know what's happening in your area.
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Jumbotron;
