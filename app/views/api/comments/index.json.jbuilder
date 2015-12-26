json.array! @comments do |comment|
  json.content comment.content
  json.user comment.user.first_name
  json.userId comment.user.id
end
