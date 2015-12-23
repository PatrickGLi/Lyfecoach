class FixUserUrl < ActiveRecord::Migration
  def change
    remove_column :users, :url

    add_column :users, :url, :text, default: "/v1450772227/photo-1439337153520-7082a56a81f4_bnx1j5.jpg"
  end
end
