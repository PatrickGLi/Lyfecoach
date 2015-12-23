class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.integer :start_time, null: false
      t.integer :end_time, null: false
      t.integer :start_date, limit: 8, null: false
      t.integer :end_date, limit: 8, null: false
      t.text :description, null: false
      t.integer :ticket_max, null: false
      t.integer :view_count, default: 0, null: false
      t.string :category, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.float :price, null: false
      t.text :url, null: false, default: '/v1450772227/photo-1439337153520-7082a56a81f4_bnx1j5.jpg'
      t.integer :organizer_id, null: false

      t.timestamps null: false
    end

    add_index :events, :organizer_id
    add_index :events, :title, unique: true
  end
end
