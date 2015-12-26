class Comment < ActiveRecord::Base
  validates :content, :user_id, :commenter_id, presence: true

  belongs_to :user

  belongs_to :commenter,
  foreign_key: :commenter_id,
  class_name: "User"
end
