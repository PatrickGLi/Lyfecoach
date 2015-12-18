var React = require('react'),
    ReactDOM = require('react-dom'),
    EventStore = require('./stores/event_store'),
    ApiUtil = require('./util/api_util'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/app'),
    LandingPage = require('./components/landing_page/landing_page'),
    EventPage = require('./components/event/event_page'),
    EventDetail = require('./components/event/detail'),
    EventForm = require('./components/event/form');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage}/>
    <Route path="api/events" component={EventPage}/>
    <Route path="api/events/new" component={EventForm}/>
    <Route path="api/events/:eventId" component={EventDetail}/>
  </Route>
);

$(function() {
  ReactDOM.render(<Router>{routes}</Router> , document.getElementById('content'));
});
