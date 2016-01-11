json.array! @followers do |follower|
  json.follower follower.follower
  json.id follower.id
  json.events follower.follower.events
end
