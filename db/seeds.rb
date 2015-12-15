# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
event_type = %w(Attraction Appearance Concert Screening Seminar
                Party Dinner Other Festival Fair Networking )

20.times do
  Event.create(title: Faker::Book.title,
               location: Faker::Address.street_address,
               start_time: Faker::Date.between(20.days.ago, 10.days.ago),
               end_time: Faker::Date.between(10.days.ago, Date.today),
               description: Faker::Lorem.paragraph,
               ticket_max: rand(100..10000),
               url: Faker::Avatar.image,
               category: event_type[rand(0...event_type.length)],
               organizer_id: rand(1..5))

end

10.times do
  User.create(username: Faker::Internet.user_name,
              password: "password",
              name: Faker::Name.name,
              description: Faker::Lorem.paragraph,
              url: Faker::Avatar.image)
end
