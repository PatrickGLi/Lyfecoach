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
    UserDetail = require('./components/user/detail'),
    EventDetail = require('./components/event/detail'),
    UserFollows = require('./components/user/follows'),
    UserEdit = require('./components/user/edit'),
    EventForm = require('./components/event/form');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage}/>
    <Route path="api/events" component={EventPage}/>
    <Route path="api/events/new" component={EventForm}/>
    <Route path="api/users/:userId" component={UserDetail}>
      <Route path="follows" component={UserFollows}/>
      <Route path="events/:eventId" component={EventDetail}/>
      <Route path="edit" component={UserEdit}/>
    </Route>
  </Route>
);

$(function() {
  var content = document.getElementById('content');
  if (content) {
    ReactDOM.render(<Router>{routes}</Router> , content);
  }
});
