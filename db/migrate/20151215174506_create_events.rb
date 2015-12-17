class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.string :start_time, null: false
      t.string :end_time, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.text :description, null: false
      t.integer :ticket_max, null: false
      t.integer :view_count, default: 0, null: false
      t.string :category, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.float :price, null: false
      t.text :url, null: false, default: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=&url=https%3A%2F%2Fpixabay.com%2Fen%2Fsilhouette-sunset-landscape-woman-283298%2F&bvm=bv.110151844,d.cGc&psig=AFQjCNEIkN-4xKzQ4jLYazWlpb_cc6p3ug&ust=1450288362611394'
      t.integer :organizer_id, null: false

      t.timestamps null: false
    end

    add_index :events, :organizer_id
    add_index :events, :title, unique: true
  end
end
