# == Schema Information
#
# Table name: events
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  location     :string           not null
#  start_time   :date             not null
#  end_time     :date             not null
#  description  :text             not null
#  ticket_max   :integer          not null
#  view_count   :integer          default(0), not null
#  category     :string           not null
#  lat          :float            not null
#  lng          :float            not null
#  url          :text             default("https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=https%3A%2F%2Fpixabay.com%2Fen%2Fsilhouette-sunset-landscape-woman-283298%2F&bvm=bv.110151844,d.cGc&psig=AFQjCNEIkN-4xKzQ4jLYazWlpb_cc6p3ug&ust=1450288362611394"), not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Event < ActiveRecord::Base
  validates :title, :location, :start_time, :end_time, :start_date,
            :end_date, :description, :ticket_max, :view_count, :lat, :lng,
            :category, :url, :organizer_id, :price, presence: true

  validates :title, uniqueness: true
  validates :ticket_max, numericality: { greater_than: 20 }
  validate :end_time_cannot_be_before_start_time

  def end_time_cannot_be_before_start_time
    end_time_in_milliseconds = end_time * 60 * 60 * 100
    start_time_in_milliseconds = start_time * 60 * 60 * 100

    total_end_time = end_date + end_time_in_milliseconds
    total_start_time = start_time + start_time_in_milliseconds

    if total_start_time > total_end_time
      errors.add(:end_time, "Event cannot end before it starts.")
    end
  end

  belongs_to :organizer,
  class_name: "User"

  def self.in_bounds(bounds)
    Event.where(lat: bounds[:westBound]..bounds[:eastBound],
                lng: bounds[:southBound]..bounds[:northBound])
  end
end
