var ApiUtil = require('../util/api_util');

var FormActions = {
  createEvent: function(newEventData) {
    ApiUtil.createEvent(newEventData);
  }
};

module.exports = FormActions
