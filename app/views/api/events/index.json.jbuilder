json.array! @events do |event|
  json.id event.id
  json.title event.title
  json.location event.location
  json.description event.description
  json.category event.category
  json.start_time event.start_time
  json.end_time event.end_time
  json.price event.price
  json.url event.url
  json.lat event.lat
  json.lng event.lng
  json.organizer event.organizer.email
end
