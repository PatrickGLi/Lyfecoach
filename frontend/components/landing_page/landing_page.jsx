var React = require('react'),
    LandingPageActions = require('../../actions/landing_page_actions'),
    EventStore = require('../../stores/event_store'),
    FilterForm = require('./filter_form'),
    PopularEventsIndex = require('./popular_events_index'),
    Jumbotron = require('./jumbotron');

function _getAllEvents() {
  return EventStore.all();
}

LandingPage = React.createClass({
  getInitialState: function() {
    return({
      events: _getAllEvents()
    })
  },

  _receiveEvents: function() {
    this.setState({ events: _getAllEvents() });
  },

  componentDidMount: function() {
    this.eventListener = EventStore.addListener(this._receiveEvents);
    LandingPageActions.fetchPopularEvents();
    $('nav').toggleClass('transparency');
    this.backgroundChange();
  },

  componentWillUnmount: function() {
    this.eventListener.remove();
    $('nav').toggleClass('transparency');
    clearInterval(this.interval);
    this.removeNavChanges();
    EventStore.clearEvents();
  },

  backgroundChange: function() {
    var backgrounds = ["url(http://res.cloudinary.com/dlqjek68b/image/upload/v1450654179/photo-1446587114233-38830eb63a76_n3iidf.jpg)",
                       "url(http://res.cloudinary.com/dlqjek68b/image/upload/v1450654176/photo-1429962714451-bb934ecdc4ec_pw3ecu.jpg)",
                       "url(http://res.cloudinary.com/dlqjek68b/image/upload/v1450654178/photo-1445251836269-d158eaa028a6_ewteda.jpg)",
                       "url(http://res.cloudinary.com/dlqjek68b/image/upload/v1450644793/photo-1445384763658-0400939829cd_nlvg2v.jpg)"];

    var text_colors = ["black", "black", "white", "white"];

    var current = 0;
    var $jumbotron= $('.jumbotron');
    this.$navbar = $('.navbar-default .navbar-nav>li>a');
    this.$logo = $('#logo');

    $jumbotron.css('background-image', backgrounds[current]);
    $jumbotron.css('color', text_colors[current]);
    this.$navbar.css('color', text_colors[current]);
    this.$logo.css('color', text_colors[current]);
    this.$navbar.css('transition', 'color, 2s');
    this.$logo.css('transition', 'color, 2s');

    var that = this;
    this.interval = setInterval(function() {
      current = (current + 1) % backgrounds.length;
      $jumbotron.css('background-image', backgrounds[current]);
      $jumbotron.css('color', text_colors[current]);
      that.$navbar.css('color', text_colors[current]);
      that.$logo.css('color', text_colors[current]);
    }, 6000);
  },

  removeNavChanges: function() {
    this.$navbar.css('color', 'white');
    this.$logo.css('color', 'white');
    this.$navbar.css('transition', 'color, 0s');
    this.$logo.css('transition', 'color, 0s');
  },

  render: function() {
    return (
      <div className="landing-page">
        <Jumbotron/>
        <FilterForm history={this.props.history}/>
        <div><h2 className="popular-title">popular</h2></div>
        <PopularEventsIndex history={this.props.history} events={this.state.events}/>
      </div>
    );
  }


});

module.exports = LandingPage;
