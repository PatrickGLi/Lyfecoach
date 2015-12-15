class AddUsersColumns < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :description, :text
    add_column :users, :url, :text, default: "http://s3.amazonaws.com/wavesforwater/images/avatar-default.gif?sizes=/y:33/x:33"
  end
end
