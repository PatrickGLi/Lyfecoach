json.array! @followers do |follower|
  json.follower follower.follower
  json.id follower.id
end
