var React = require('react'),
    ReactDOM = require('react-dom'),
    EventStore = require('./stores/event_store'),
    ApiUtil = require('./util/api_util'),
    EventSearch = require('./components/event_search');

$(function() {
  ReactDOM.render(<EventSearch/> , document.getElementById('content'));
});
