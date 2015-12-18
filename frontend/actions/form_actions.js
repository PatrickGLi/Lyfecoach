var ApiUtil,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FormConstants = require('../constants/form_constants'),
    ReactConstants = require('../constants/react_constants');

setTimeout(function () {
  ApiUtil = require('../util/api_util');
}, 0);

var FormActions = {
  createEvent: function(newEventData) {

    convertedEventData = {
      category: newEventData.category,
      description: newEventData.description,
      location: newEventData.location,
      title: newEventData.title,
      url: newEventData.url,
      organizer_id: ReactConstants.CURRENT_USER,
      lat: parseFloat(newEventData.lat),
      lng: parseFloat(newEventData.lng),
      price: parseFloat(newEventData.price),
      ticket_max: parseInt(newEventData.ticketMax),
      start_date: new Date(newEventData.startDate),
      end_date: new Date(newEventData.endDate),
      start_time: parseInt(newEventData.startTime),
      end_time: parseInt(newEventData.endTime)
    };

    ApiUtil.createEvent(convertedEventData);
  },

  formError: function(errorData) {
    AppDispatcher.dispatch({
      actionType:FormConstants.FORM_ERROR,
      data: errorData
    });
  }
};

module.exports = FormActions;
