var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants'),
    DropdownConstants = require('../constants/dropdown_constants'),
    DateConstants = require('../constants/date_constants');

var _filter_params = {};
var _filter_titles = {
  location: '',
  price: '',
  category: '',
  date: '',
  title: ''
 };

var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function() {
  return Object.assign({}, _filter_params);
};

FilterParamsStore.getTitles = function() {
  return Object.assign({}, _filter_titles);
};

FilterParamsStore.resetFilters = function() {
  _filter_params = {};
  _filter_titles = {
    location: '',
    price: '',
    category: '',
    date: '',
    title: ''
  };
}

FilterParamsStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FilterConstants.UPDATE_LOCATION:
      handleLocation(payload.location);
      break;
    case FilterConstants.UPDATE_PRICE:
      handlePrice(payload.price);
      break;
    case FilterConstants.UPDATE_CATEGORY:
      handleCategory(payload.category);
      break;
    case FilterConstants.UPDATE_DATE:
      handleDate(payload.date);
      break;
    case FilterConstants.UPDATE_TITLE:
      handleTitle(payload.title);
      break;
  }
};

var handleLocation = function(locationData) {
  _filter_params.location = locationData;
  _filter_titles.location = locationData.address.split(',')[0].toLowerCase();
  FilterParamsStore.__emitChange();
};

var handlePrice = function(priceData) {
  _filter_params.price = priceData;
  _filter_titles.price = priceData;
  FilterParamsStore.__emitChange();
};

var handleCategory = function(categoryData) {
  _filter_params.category = categoryData;
  _filter_titles.category = categoryData;
  FilterParamsStore.__emitChange();
};

var handleDate = function(dateData) {
  var currentTime = new Date().getTime();
  var newDate;

  switch (dateData) {
    case DateConstants.THIS_WEEK:
      newDate = currentTime + (6.048 * Math.pow(10, 8));
      break;
    case DateConstants.THIS_MONTH:
      newDate = currentTime + (2.628 * Math.pow(10, 9));
      break;
    case DateConstants.THIS_YEAR:
      newDate = currentTime + (3.154 * Math.pow(10, 10));
      break;
  }

  _filter_params.date = newDate;
  _filter_titles.date = dateData;
  FilterParamsStore.__emitChange();
};

var handleTitle = function(titleData) {
  _filter_params.title = titleData;
  _filter_titles.title = titleData;
  FilterParamsStore.__emitChange();
};

module.exports = FilterParamsStore;
