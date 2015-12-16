var React = require('react'),
    ReactDOM = require('react-dom'),
    EventStore = require('./stores/event_store'),
    ApiUtil = require('./util/api_util'),
    EventSearch = require('./components/event/search');
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

var routes = (
  <Route path="/" component={App}>
    
  </Route>


);

$(function() {
  ReactDOM.render(<EventSearch/> , document.getElementById('content'));
});
