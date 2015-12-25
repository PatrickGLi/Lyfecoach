# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  host_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  description     :text
#  url             :text             default("/v1450772227/photo-1439337153520-7082a56a81f4_bnx1j5.jpg")
#

class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token,
            :first_name, :last_name, :host_name, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  has_many :events,
  foreign_key: :organizer_id

  has_many :followers

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password);
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.valid_password?(password)
    user
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
