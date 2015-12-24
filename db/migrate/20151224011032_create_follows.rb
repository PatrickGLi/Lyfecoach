class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :organizer_id, null: false
      t.integer :follower_id, null: false
      t.timestamps null: false
    end

    add_index :follows, :organizer_id
    add_index :follows, :follower_id
  end
end
