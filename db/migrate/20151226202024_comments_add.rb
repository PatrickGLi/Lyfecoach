class CommentsAdd < ActiveRecord::Migration
  def change
    add_column :comments, :commenter_id, :integer, null: false

    add_index :comments, :commenter_id
  end
end
