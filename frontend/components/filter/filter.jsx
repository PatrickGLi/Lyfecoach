var React = require('react'),
    SearchFilter = require('./search_filter'),
    FilterActions = require('../../actions/filter_actions'),
    FilterParamsStore = require('../../stores/filter_params_store'),
    DateConstants = require('../../constants/date_constants');

var Filter = React.createClass({
  getInitialState: function() {
    return({
      filter_titles:
      { location: '',
        price: '',
        category: '',
        date: '' }
    });
  },

  componentDidMount: function() {
    this.token = FilterParamsStore.addListener(this._changeHeader);
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  _changeHeader: function() {
    this.setState({ filter_titles: FilterParamsStore.getTitles()});
  },

  updatePrice: function(e) {
    e.preventDefault();
    FilterActions.updatePrice(e.currentTarget.id);
  },

  updateCategory: function(e) {
    e.preventDefault();
    FilterActions.updateCategory(e.currentTarget.innerText);
  },

  updateDate: function(e) {
    e.preventDefault();
    FilterActions.updateDate(e.currentTarget.innerText);
  },

  render: function() {
    var price_title = this.state.filter_titles.price;
    if (price_title !== "") {
      price_title = "Events under $" + price_title;
    } else {
      price_title = "All prices";
    }

    var category_title = this.state.filter_titles.category;
    if (category_title === "") {
      category_title = "All categories";
    }

    var date_title = this.state.filter_titles.date;
    if (date_title === "") {
      date_title = "All dates";
    }

    return (
      <div className="filter-container">
        <SearchFilter className="form-control" />
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">price <span className="caret"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li className="dropdown-header">{price_title}</li>
                <li className="divider"></li>
                <li id="15" onClick={this.updatePrice}><a href="#">Under $15</a></li>
                <li className="divider"></li>
                <li id="30" onClick={this.updatePrice}><a href="#">Under $30</a></li>
                <li className="divider"></li>
                <li id="50" onClick={this.updatePrice}><a href="#">Under $50</a></li>
                <li className="divider"></li>
                <li id="100" onClick={this.updatePrice}><a href="#">Under $100</a></li>
              </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">category <span className="caret"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li className="dropdown-header">{category_title}</li>
                <li className="divider"></li>
                <li onClick={this.updateCategory}><a href="#">Food & Drink</a></li>
                <li className="divider"></li>
                <li onClick={this.updateCategory}><a href="#">Art</a></li>
                <li className="divider"></li>
                <li onClick={this.updateCategory}><a href="#">Music</a></li>
                <li className="divider"></li>
                <li onClick={this.updateCategory}><a href="#">Nightlife</a></li>
                <li className="divider"></li>
                <li onClick={this.updateCategory}><a href="#">Sports & Fitness</a></li>
              </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">date <span className="caret"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li className="dropdown-header">{date_title}</li>
                <li className="divider"></li>
                <li onClick={this.updateDate}><a href="#">{DateConstants.THIS_WEEK}</a></li>
                <li className="divider"></li>
                <li onClick={this.updateDate}><a href="#">{DateConstants.THIS_MONTH}</a></li>
                <li className="divider"></li>
                <li onClick={this.updateDate}><a href="#">{DateConstants.THIS_YEAR}</a></li>
              </ul>
          </li>
        </ul>
      </div>


    );
  }
});

module.exports = Filter;
