class Follow < ActiveRecord::Base
  validates :organizer_id, :follower_id, presence: true
  validates_uniqueness_of :follower_id, scope: :organizer_id

  belongs_to :follower,
  foreign_key: :follower_id,
  class_name: "User"

  belongs_to :organizer,
  foreign_key: :organizer_id,
  class_name: "User"

end
