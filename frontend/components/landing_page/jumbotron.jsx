var React = require('react'),
    History = require('react-router').History;

var Jumbotron = React.createClass({
  mixins: [History],

  componentDidMount: function () {
    var backgrounds = ["url(http://res.cloudinary.com/dlqjek68b/image/upload/v1450654179/photo-1446587114233-38830eb63a76_n3iidf.jpg)",
                       "url(http://res.cloudinary.com/dlqjek68b/image/upload/v1450654176/photo-1429962714451-bb934ecdc4ec_pw3ecu.jpg)",
                       "url(http://res.cloudinary.com/dlqjek68b/image/upload/v1450654178/photo-1445251836269-d158eaa028a6_ewteda.jpg)",
                       "url(http://res.cloudinary.com/dlqjek68b/image/upload/v1450644793/photo-1445384763658-0400939829cd_nlvg2v.jpg)"];

    var text_colors = ["black", "black", "white", "white"];

    var current = 0;
    var $jumbotron= $('.jumbotron');

    $jumbotron.css('background-image', backgrounds[current]);
    $jumbotron.css('color', text_colors[current]);

    setInterval(function() {
      current = (current + 1) % backgrounds.length;
      $jumbotron.css('background-image', backgrounds[current]);
      $jumbotron.css('color', text_colors[current]);
    }, 4000);
  },

  goToEventForm: function(e) {
    this.history.pushState(null,'api/events/new');
  },

  render: function() {
    return(
      <div className="jumbotron">
        <div className="container">
          <div className="jumbo-host col-md-6">
            <h2>sell tickets.</h2>
            <p>
              Promote, manage, and host successful events.
            </p>
            <button onClick={this.goToEventForm}
                    className="btn btn-primary btn-md">Get Started
            </button>
          </div>
          <div className="jumbo-customer col-md-6">
            <h2>explore.</h2>
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
