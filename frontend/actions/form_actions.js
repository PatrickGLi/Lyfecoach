var ApiUtil,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FormConstants = require('../constants/form_constants'),
    ReactConstants = require('../constants/react_constants');

setTimeout(function () {
  ApiUtil = require('../util/api_util');
}, 0);

var FormActions = {

  createEvent: function(newEventData, callback) {
    var category;

    switch (newEventData.category) {
      case "food-and-drink":
        category = "Food & Drink";
        break;
      case "art":
        category = "Art";
        break;
      case "music":
        category = "Music";
        break;
      case "nightlife":
        category = "Nightlife";
        break;
      case "sports-and-fitness":
        category = "Sports & Fitness";
        break;
    }

    var convertedEventData = {
      category: category,
      description: newEventData.description,
      location: newEventData.location,
      title: newEventData.title,
      url: "/" + newEventData.url,
      organizer_id: ReactConstants.CURRENT_USER,
      lat: parseFloat(newEventData.lat),
      lng: parseFloat(newEventData.lng),
      price: parseFloat(newEventData.price),
      ticket_max: parseInt(newEventData.ticketMax),
      start_date: new Date(newEventData.startDate).getTime(),
      end_date: new Date(newEventData.endDate).getTime(),
      start_time: parseInt(newEventData.startTime),
      end_time: parseInt(newEventData.endTime)
    };

    ApiUtil.createEvent(convertedEventData, callback);
  },

  formError: function(errorData) {
    AppDispatcher.dispatch({
      actionType:FormConstants.FORM_ERROR,
      data: errorData
    });
  }
};

module.exports = FormActions;
