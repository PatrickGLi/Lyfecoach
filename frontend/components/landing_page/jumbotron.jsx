var React = require('react'),
    ReactConstants = require('../../constants/react_constants'),
    History = require('react-router').History;

var Jumbotron = React.createClass({
  mixins: [History],

  goToEventForm: function(e) {
    this.history.pushState(null,'api/events/new');
  },

  render: function() {
    var button;
    if (ReactConstants.CURRENT_USER === -1) {
      button = <button data-toggle="modal"
                       data-target="#myModal3"
                       className="btn btn-primary btn-md">Get Started
               </button>;
    } else {
      button = <button onClick={this.goToEventForm}
              className="btn btn-primary btn-md">Get Started
      </button>;
    }

    return(
      <div className="jumbotron">
        <div className="container jumbo-text">
          <div className="jumbo-host col-md-6">
            <h3>be a host.</h3>
            <p>
              Sell tickets and manage successful events.
            </p>
            {button}
          </div>
          <div className="jumbo-customer col-md-6">
            <h3>explore.</h3>
            <p>Know your city, and expand your horizons. Follow your
            favorite hosts, and always know what's happening in your area.
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Jumbotron;
