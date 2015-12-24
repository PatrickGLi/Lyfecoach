class Follow < ActiveRecord::Base
  validates :organizer_id, :follower_id, presence: true
  validates_uniqueness_of :follower_id, scope: :organizer_id

  belongs_to :user
end
