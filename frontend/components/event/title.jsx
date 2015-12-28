var React = require('react'),
    FilterParamsStore = require('../../stores/filter_params_store');

var Title = React.createClass({
  getInitialState: function() {
    return({ title: FilterParamsStore.getTitles() });
  },

  componentDidMount: function() {
    this.token = FilterParamsStore.addListener(this.getTitle);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  getTitle: function() {
    this.setState({ title: FilterParamsStore.getTitles() });
  },

  render: function() {
    var title_title = this.state.title.title;
    if (title_title !== "") {
        title_title = "'" + title_title + "' ";
    }


    var location_title = this.state.title.location;
    if (location_title === "") {
      location_title = "you"
    }

    var price_title = this.state.title.price;
    if (price_title !== "") {
      price_title = " under $" + price_title;
    }

    var date_title = this.state.title.date;
    if (date_title !== "") {
      date_title = date_title.toLowerCase();
    }

    var category_title = this.state.title.category.toLowerCase() + " ";

    return (
      <div className="event-title">
        <h3>{category_title}{title_title}events near {location_title}{price_title} {date_title}</h3>
      </div>
    );
  }

});

module.exports = Title;
