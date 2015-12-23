# == Schema Information
#
# Table name: events
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  location     :string           not null
#  start_time   :integer          not null
#  end_time     :integer          not null
#  start_date   :integer          not null
#  end_date     :integer          not null
#  description  :text             not null
#  ticket_max   :integer          not null
#  view_count   :integer          default(0), not null
#  category     :string           not null
#  lat          :float            not null
#  lng          :float            not null
#  price        :float            not null
#  url          :text             default("/v1450644788/photo-1416304646406-414b1009dbe4_nbwzwj.jpg"), not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
