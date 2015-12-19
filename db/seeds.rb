# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

event_type = ["Cuisine", "Arts", "Music", "Nightlife", "Sports & Fitness"]

40.times do |index|
  variancelat = rand(0..0.05) * 2 - 0.05
  variancelng = rand(0..0.05) * 2 - 0.05
  lat_coordinate = 37.7758 + variancelat
  lng_coordinate = -122.435 + variancelng

  Event.create!(title: "#{Faker::Book.title} #{index}",
               location: Faker::Address.street_address,
               start_date: Time.now.to_i*1000 + rand(0..2.68 * 10**9),
               end_date: Time.now.to_i*1000 + rand(2.68 * 10**9 .. 2.68 * 10**10),
               start_time: 5,
               end_time: 8,
               description: Faker::Lorem.paragraph,
               ticket_max: rand(100..10000),
               price: rand(10..100),
               view_count: rand(1000..100000),
               url: Faker::Avatar.image,
               category: event_type[rand(0...event_type.length)],
               lat: lat_coordinate,
               lng: lng_coordinate,
               organizer_id: rand(1..5))

end

5.times do
  User.create!(email: Faker::Internet.user_name,
              fname: Faker::Name.first_name,
              lname: Faker::Name.last_name,
              password: "password",
              description: Faker::Lorem.paragraph,
              url: Faker::Avatar.image)
end
