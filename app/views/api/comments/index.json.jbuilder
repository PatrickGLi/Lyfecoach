json.array! @comments do |comment|
  json.content comment.content
  json.commenter comment.commenter.first_name
  json.commenterId comment.commenter.id
end
