var React = require('react');

var PopularEventsIndex = React.createClass({

  showEventDetail: function(event) {
    this.props.history.pushState(null, 'api/events/' + event.id);
  },

  render: function() {
    var that = this;
    var popular_events = this.props.events.map(function(event, index) {
      var image = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_300,w_300" + event.url;
      var bindedClick = that.showEventDetail.bind(null, event);
      var popularClass = "col-xs-3 popular-icons popular-" + index;
      return (
        <div key={event.id} className={popularClass} >
          <img  id="test2"
                onClick={bindedClick}
                src={image}
                alt="Responsive image"
                className="img-responsive">
          </img>
        </div>
      );
    });

    return (
      <div className="row popular-event-index">
        {popular_events}
      </div>
    );
  }

});

module.exports = PopularEventsIndex
